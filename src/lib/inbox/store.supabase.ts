// Implementação do InboxRepository sobre o Supabase (Postgres + RLS).
// Toda operação é escopada por `orgId`; a RLS no banco é a segunda barreira de
// isolamento entre tenants.

import type { SupabaseClient } from "@supabase/supabase-js";
import type { InboxRepository } from "./repository";
import type {
  Agent,
  Channel,
  Contact,
  Conversation,
  ConversationStatus,
  ConversationView,
  MediaKind,
  Message,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Db = SupabaseClient<any, "public", any>;

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function isUuid(v: string): boolean {
  return UUID_RE.test(v);
}

function initials(name: string): string {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]!.toUpperCase())
      .join("") || "?"
  );
}

// --- mapeadores linha → domínio ------------------------------------------------

interface ContactRow {
  id: string;
  name: string;
  handle: string;
  channel: Channel;
}

function mapContact(row: ContactRow): Contact {
  return {
    id: row.id,
    name: row.name || row.handle,
    handle: row.handle,
    channel: row.channel,
    initials: initials(row.name || row.handle),
  };
}

interface MessageRow {
  id: string;
  conversation_id: string;
  direction: Message["direction"];
  text: string;
  status: Message["status"];
  author: string;
  external_id: string | null;
  created_at: string;
  media_kind: MediaKind | null;
  media_external_id: string | null;
  media_mime: string | null;
  media_filename: string | null;
}

function mapMessage(row: MessageRow): Message {
  return {
    id: row.id,
    conversationId: row.conversation_id,
    direction: row.direction,
    text: row.text,
    at: row.created_at,
    status: row.status,
    author: row.author,
    externalId: row.external_id ?? undefined,
    media: row.media_kind
      ? {
          kind: row.media_kind,
          externalId: row.media_external_id ?? undefined,
          mimeType: row.media_mime ?? undefined,
          filename: row.media_filename ?? undefined,
        }
      : undefined,
  };
}

interface ConversationRow {
  id: string;
  contact_id: string;
  channel: Channel;
  channel_id: string | null;
  status: ConversationStatus;
  assignee_id: string | null;
  tags: string[];
  unread_count: number;
  last_message_at: string;
  last_message_preview: string;
  contact: ContactRow | null;
}

/** Resolve a organização "atual" do usuário (a mais antiga, por ora). */
export async function resolveCurrentOrg(supabase: Db, userId: string): Promise<string | null> {
  const { data } = await supabase
    .from("organization_members")
    .select("organization_id")
    .eq("user_id", userId)
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();
  return data?.organization_id ?? null;
}

export function createSupabaseRepository(
  supabase: Db,
  orgId: string,
  userId: string,
): InboxRepository {
  async function agentsById(ids: Array<string | null>): Promise<Map<string, Agent>> {
    const unique = [...new Set(ids.filter((x): x is string => Boolean(x)))];
    const map = new Map<string, Agent>();
    if (unique.length === 0) return map;
    const { data } = await supabase.from("profiles").select("id, full_name").in("id", unique);
    for (const p of (data ?? []) as Array<{ id: string; full_name: string }>) {
      map.set(p.id, { id: p.id, name: p.full_name || "Agente", initials: initials(p.full_name || "A") });
    }
    return map;
  }

  function toView(row: ConversationRow, agents: Map<string, Agent>): ConversationView {
    const conv: Conversation = {
      id: row.id,
      contactId: row.contact_id,
      channel: row.channel,
      channelId: row.channel_id,
      status: row.status,
      assigneeId: row.assignee_id,
      tags: row.tags ?? [],
      unreadCount: row.unread_count,
      lastMessageAt: row.last_message_at,
      lastMessagePreview: row.last_message_preview,
    };
    return {
      ...conv,
      contact: row.contact
        ? mapContact(row.contact)
        : { id: row.contact_id, name: "—", handle: "", channel: row.channel, initials: "?" },
      assignee: row.assignee_id ? agents.get(row.assignee_id) ?? null : null,
    };
  }

  return {
    async listConversations(filter) {
      let q = supabase
        .from("conversations")
        .select("*, contact:contacts(id, name, handle, channel)")
        .eq("organization_id", orgId)
        .order("last_message_at", { ascending: false });

      if (filter?.status) q = q.eq("status", filter.status);
      if (filter?.channel) q = q.eq("channel", filter.channel);

      const { data, error } = await q;
      if (error) throw error;
      let rows = (data ?? []) as ConversationRow[];

      if (filter?.query) {
        const term = filter.query.toLowerCase();
        rows = rows.filter(
          (r) =>
            r.contact?.name.toLowerCase().includes(term) ||
            r.contact?.handle.toLowerCase().includes(term) ||
            r.last_message_preview.toLowerCase().includes(term),
        );
      }

      const agents = await agentsById(rows.map((r) => r.assignee_id));
      return rows.map((r) => toView(r, agents));
    },

    async getConversation(id) {
      const { data, error } = await supabase
        .from("conversations")
        .select("*, contact:contacts(id, name, handle, channel)")
        .eq("organization_id", orgId)
        .eq("id", id)
        .maybeSingle();
      if (error) throw error;
      if (!data) return null;
      const row = data as ConversationRow;
      const agents = await agentsById([row.assignee_id]);
      return toView(row, agents);
    },

    async listMessages(conversationId) {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("organization_id", orgId)
        .eq("conversation_id", conversationId)
        .order("created_at", { ascending: true });
      if (error) throw error;
      return ((data ?? []) as MessageRow[]).map(mapMessage);
    },

    async appendOutbound(conversationId, text) {
      // userId pode ser um marcador não-UUID em fluxos sem sessão ("api",
      // "system"). Só consultamos o perfil quando é um UUID de verdade.
      let author = "Agente";
      if (isUuid(userId)) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("full_name")
          .eq("id", userId)
          .maybeSingle();
        if (profile?.full_name) author = profile.full_name as string;
      } else if (userId === "api") {
        author = "API";
      }

      const { data, error } = await supabase
        .from("messages")
        .insert({
          organization_id: orgId,
          conversation_id: conversationId,
          direction: "out",
          text,
          status: "sent",
          author,
        })
        .select("*")
        .single();
      if (error) throw error;
      return mapMessage(data as MessageRow);
    },

    async ingestInbound(inbound) {
      // (P1) Idempotência: se já recebemos essa mensagem do provedor, ignora
      // para não duplicar, não re-bumpar o não-lido nem reprocessar automações.
      if (inbound.externalId) {
        const { data: dup } = await supabase
          .from("messages")
          .select("*")
          .eq("organization_id", orgId)
          .eq("external_id", inbound.externalId)
          .limit(1)
          .maybeSingle();
        if (dup) {
          const conv = await this.getConversation((dup as MessageRow).conversation_id);
          return {
            conversation: conv!,
            message: mapMessage(dup as MessageRow),
            created: false,
            duplicate: true,
          };
        }
      }

      // Upsert do contato (idempotente por org+canal+handle).
      const { data: contact, error: cErr } = await supabase
        .from("contacts")
        .upsert(
          {
            organization_id: orgId,
            name: inbound.contactName || inbound.contactHandle,
            handle: inbound.contactHandle,
            channel: inbound.channel,
          },
          { onConflict: "organization_id,channel,handle" },
        )
        .select("*")
        .single();
      if (cErr) throw cErr;

      // Reusa conversa não encerrada; senão cria.
      const { data: existing } = await supabase
        .from("conversations")
        .select("*")
        .eq("organization_id", orgId)
        .eq("contact_id", contact.id)
        .neq("status", "closed")
        .order("last_message_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      let conversationRow = existing;
      const isNewConversation = !conversationRow;
      if (!conversationRow) {
        const { data: created, error: convErr } = await supabase
          .from("conversations")
          .insert({
            organization_id: orgId,
            contact_id: contact.id,
            channel: inbound.channel,
            channel_id: inbound.channelId ?? null,
          })
          .select("*")
          .single();
        if (convErr) throw convErr;
        conversationRow = created;
      } else if (inbound.channelId && !conversationRow.channel_id) {
        // Preenche o canal na conversa existente que ainda não o tinha.
        await supabase
          .from("conversations")
          .update({ channel_id: inbound.channelId })
          .eq("organization_id", orgId)
          .eq("id", conversationRow.id);
        conversationRow.channel_id = inbound.channelId;
      }

      const { data: message, error: mErr } = await supabase
        .from("messages")
        .insert({
          organization_id: orgId,
          conversation_id: conversationRow.id,
          direction: "in",
          text: inbound.text,
          status: "delivered",
          author: contact.name,
          external_id: inbound.externalId ?? null,
          media_kind: inbound.media?.kind ?? null,
          media_external_id: inbound.media?.externalId ?? null,
          media_mime: inbound.media?.mimeType ?? null,
          media_filename: inbound.media?.filename ?? null,
        })
        .select("*")
        .single();
      if (mErr) {
        // Corrida com outra entrega do mesmo evento: o índice único barra o
        // duplicado. Trata como duplicado em vez de erro.
        if ((mErr as { code?: string }).code === "23505" && inbound.externalId) {
          const { data: dup } = await supabase
            .from("messages")
            .select("*")
            .eq("organization_id", orgId)
            .eq("external_id", inbound.externalId)
            .limit(1)
            .maybeSingle();
          if (dup) {
            const conv = await this.getConversation((dup as MessageRow).conversation_id);
            return { conversation: conv!, message: mapMessage(dup as MessageRow), created: false, duplicate: true };
          }
        }
        throw mErr;
      }

      const conversation: Conversation = {
        id: conversationRow.id,
        contactId: contact.id,
        channel: inbound.channel,
        channelId: conversationRow.channel_id,
        status: conversationRow.status,
        assigneeId: conversationRow.assignee_id,
        tags: conversationRow.tags ?? [],
        unreadCount: conversationRow.unread_count,
        lastMessageAt: message.created_at,
        lastMessagePreview: inbound.text,
      };
      return { conversation, message: mapMessage(message as MessageRow), created: isNewConversation };
    },

    async setStatus(conversationId, status) {
      const { error } = await supabase
        .from("conversations")
        .update({ status })
        .eq("organization_id", orgId)
        .eq("id", conversationId);
      if (error) throw error;
      return this.getConversation(conversationId);
    },

    async markRead(conversationId) {
      await supabase
        .from("conversations")
        .update({ unread_count: 0 })
        .eq("organization_id", orgId)
        .eq("id", conversationId);
    },

    async listAgents() {
      const { data } = await supabase
        .from("organization_members")
        .select("profiles(id, full_name)")
        .eq("organization_id", orgId);
      const rows = (data ?? []) as unknown as Array<{
        profiles: { id: string; full_name: string } | null;
      }>;
      return rows
        .map((r) => r.profiles)
        .filter((p): p is { id: string; full_name: string } => Boolean(p))
        .map((p) => ({ id: p.id, name: p.full_name || "Agente", initials: initials(p.full_name || "A") }));
    },
  };
}
