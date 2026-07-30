import { NextResponse } from "next/server";
import { getInboxRepository } from "@/lib/inbox/repository";
import { deliverMessage, type ChannelConfig } from "@/lib/inbox/channels/deliver";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { resolveCurrentOrg } from "@/lib/inbox/store.supabase";
import { dispatchEvent } from "@/lib/integrations/webhooks";
import type { Channel } from "@/lib/inbox/types";

export const dynamic = "force-dynamic";

interface Ctx {
  params: Promise<{ id: string }>;
}

/** Config do canal ativo + organização atual (para credenciais e eventos). */
async function channelContext(
  type: Channel,
): Promise<{ config: ChannelConfig; orgId: string | null }> {
  if (!isSupabaseConfigured()) return { config: {}, orgId: null };
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { config: {}, orgId: null };
  const orgId = await resolveCurrentOrg(supabase, user.id);
  if (!orgId) return { config: {}, orgId: null };

  const { data } = await supabase
    .from("channels")
    .select("external_id, config")
    .eq("organization_id", orgId)
    .eq("type", type)
    .eq("is_active", true)
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();
  if (!data) return { config: {}, orgId };

  const config = (data.config as ChannelConfig) ?? {};
  return {
    config: {
      ...config,
      phone_number_id: config.phone_number_id || (data.external_id as string | null) || undefined,
    },
    orgId,
  };
}

export async function GET(_request: Request, { params }: Ctx) {
  const { id } = await params;
  const repo = await getInboxRepository();
  if (!(await repo.getConversation(id))) {
    return NextResponse.json({ error: "Conversa não encontrada" }, { status: 404 });
  }
  return NextResponse.json({ messages: await repo.listMessages(id) });
}

export async function POST(request: Request, { params }: Ctx) {
  const { id } = await params;
  const repo = await getInboxRepository();
  const conversation = await repo.getConversation(id);
  if (!conversation) {
    return NextResponse.json({ error: "Conversa não encontrada" }, { status: 404 });
  }

  const body = (await request.json().catch(() => null)) as
    | { text?: string; agentId?: string }
    | null;
  const text = body?.text?.trim();
  if (!text) {
    return NextResponse.json({ error: "texto obrigatório" }, { status: 400 });
  }

  const agentId = body?.agentId ?? "ag_hp";
  const message = await repo.appendOutbound(id, text, agentId);
  if (!message) {
    return NextResponse.json({ error: "Falha ao registrar mensagem" }, { status: 500 });
  }

  // Entrega no canal, com as credenciais da organização.
  const { config, orgId } = await channelContext(conversation.channel);
  const result = await deliverMessage(conversation.channel, conversation.contact.handle, text, config);
  const delivery = { simulated: result.simulated, error: result.error };

  if (orgId) {
    await dispatchEvent(orgId, "message.sent", {
      conversation_id: id,
      channel: conversation.channel,
      text,
      via: "ui",
    });
  }

  if (!result.ok) {
    return NextResponse.json({ message, delivery }, { status: 502 });
  }

  return NextResponse.json({ message, delivery });
}
