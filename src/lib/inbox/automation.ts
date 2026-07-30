// Automação pós-ingestão de mensagens recebidas:
//  1) Fila: atribui uma conversa nova ao atendente menos ocupado.
//  2) Horário de atendimento: envia auto-resposta fora do expediente.
// Roda no servidor com o cliente admin (chamado pelos webhooks de entrada).

import type { SupabaseClient } from "@supabase/supabase-js";
import type { Channel, Conversation } from "./types";
import { createSupabaseRepository } from "./store.supabase";
import { deliverMessage, type ChannelConfig } from "./channels/deliver";
import { notifyUser } from "@/lib/notifications/notify";

interface OrgSettings {
  auto_assign: boolean;
  business_days: number[];
  open_time: string;
  close_time: string;
  timezone: string;
  away_message: string;
}

const WEEKDAY: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

async function getSettings(admin: SupabaseClient, orgId: string): Promise<OrgSettings | null> {
  const { data } = await admin
    .from("org_settings")
    .select("auto_assign, business_days, open_time, close_time, timezone, away_message")
    .eq("organization_id", orgId)
    .maybeSingle();
  return (data as OrgSettings) ?? null;
}

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return (h || 0) * 60 + (m || 0);
}

/** Está dentro do horário de atendimento configurado (no fuso da org)? */
function withinBusinessHours(s: OrgSettings): boolean {
  try {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: s.timezone,
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const parts = fmt.formatToParts(new Date());
    const wd = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
    const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
    const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
    const day = WEEKDAY[wd] ?? 1;
    if (!s.business_days.includes(day)) return false;
    const now = hour * 60 + minute;
    return now >= toMinutes(s.open_time) && now < toMinutes(s.close_time);
  } catch {
    return true; // fuso inválido: não bloqueia
  }
}

/** Atendente com menos conversas não encerradas (fila justa). */
async function pickLeastLoadedAgent(
  admin: SupabaseClient,
  orgId: string,
): Promise<string | null> {
  const { data: members } = await admin
    .from("organization_members")
    .select("user_id")
    .eq("organization_id", orgId);
  const ids = ((members ?? []) as Array<{ user_id: string }>).map((m) => m.user_id);
  if (ids.length === 0) return null;

  const { data: convs } = await admin
    .from("conversations")
    .select("assignee_id")
    .eq("organization_id", orgId)
    .neq("status", "closed");

  const load = new Map<string, number>(ids.map((id) => [id, 0]));
  for (const c of (convs ?? []) as Array<{ assignee_id: string | null }>) {
    if (c.assignee_id && load.has(c.assignee_id)) {
      load.set(c.assignee_id, (load.get(c.assignee_id) ?? 0) + 1);
    }
  }
  // Menor carga; empate mantém a ordem dos membros.
  return [...load.entries()].sort((a, b) => a[1] - b[1])[0]?.[0] ?? null;
}

async function channelConfig(
  admin: SupabaseClient,
  orgId: string,
  type: Channel,
): Promise<ChannelConfig> {
  const { data } = await admin
    .from("channels")
    .select("external_id, config")
    .eq("organization_id", orgId)
    .eq("type", type)
    .eq("is_active", true)
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();
  if (!data) return {};
  const config = (data.config as ChannelConfig) ?? {};
  return {
    ...config,
    phone_number_id: config.phone_number_id || (data.external_id as string | null) || undefined,
  };
}

/** Evita repetir a auto-resposta: só se não houve saída recente na conversa. */
async function alreadyRepliedRecently(
  admin: SupabaseClient,
  orgId: string,
  conversationId: string,
): Promise<boolean> {
  const sixHoursAgo = new Date(Date.now() - 6 * 3_600_000).toISOString();
  const { count } = await admin
    .from("messages")
    .select("*", { count: "exact", head: true })
    .eq("organization_id", orgId)
    .eq("conversation_id", conversationId)
    .eq("direction", "out")
    .gte("created_at", sixHoursAgo);
  return (count ?? 0) > 0;
}

/**
 * Executa a automação para uma conversa que acabou de receber mensagem.
 * `isNew` indica que a conversa foi criada agora (usado para a auto-resposta).
 */
export async function runInboundAutomation(
  admin: SupabaseClient,
  orgId: string,
  conversation: Conversation,
  contactHandle: string,
  isNew: boolean,
): Promise<void> {
  const settings = await getSettings(admin, orgId);
  if (!settings) return;

  // 1) Fila / atribuição automática
  if (settings.auto_assign && !conversation.assigneeId) {
    const agentId = await pickLeastLoadedAgent(admin, orgId);
    if (agentId) {
      await admin
        .from("conversations")
        .update({ assignee_id: agentId })
        .eq("organization_id", orgId)
        .eq("id", conversation.id);
      await notifyUser({
        organizationId: orgId,
        userId: agentId,
        type: "assignment",
        title: "Nova conversa atribuída a você",
        body: conversation.lastMessagePreview,
        link: "/atendimento",
      });
    }
  }

  // 2) Auto-resposta fora do expediente (uma vez por janela de 6h)
  if (settings.away_message.trim() && !withinBusinessHours(settings)) {
    if (isNew || !(await alreadyRepliedRecently(admin, orgId, conversation.id))) {
      const repo = createSupabaseRepository(admin, orgId, "system");
      await repo.appendOutbound(conversation.id, settings.away_message, "system");
      const config = await channelConfig(admin, orgId, conversation.channel);
      await deliverMessage(conversation.channel, contactHandle, settings.away_message, config);
    }
  }
}
