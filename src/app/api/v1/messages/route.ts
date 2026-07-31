import { NextResponse } from "next/server";
import { requireApiKey } from "@/lib/integrations/apiauth";
import { createSupabaseRepository } from "@/lib/inbox/store.supabase";
import { deliverMessage, type ChannelConfig } from "@/lib/inbox/channels/deliver";
import { dispatchEvent } from "@/lib/integrations/webhooks";
import type { Channel } from "@/lib/inbox/types";
import type { SupabaseClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

async function channelConfig(
  admin: SupabaseClient,
  orgId: string,
  type: Channel,
  channelId?: string | null,
): Promise<ChannelConfig> {
  let query = admin.from("channels").select("external_id, config").eq("organization_id", orgId);
  if (channelId) {
    query = query.eq("id", channelId);
  } else {
    query = query.eq("type", type).eq("is_active", true).order("created_at", { ascending: true });
  }
  const { data } = await query.limit(1).maybeSingle();
  if (!data) return {};
  const config = (data.config as ChannelConfig) ?? {};
  return {
    ...config,
    phone_number_id: config.phone_number_id || (data.external_id as string | null) || undefined,
  };
}

// GET /api/v1/messages?conversationId=...
export async function GET(request: Request) {
  const auth = await requireApiKey(request);
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });

  const { searchParams } = new URL(request.url);
  const conversationId = searchParams.get("conversationId");
  if (!conversationId) {
    return NextResponse.json({ error: "conversationId obrigatório" }, { status: 400 });
  }

  const repo = createSupabaseRepository(auth.admin, auth.orgId, "api");
  const messages = await repo.listMessages(conversationId);
  return NextResponse.json({ messages });
}

// POST /api/v1/messages — { conversationId, text }
export async function POST(request: Request) {
  const auth = await requireApiKey(request);
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });

  const body = (await request.json().catch(() => null)) as
    | { conversationId?: string; text?: string }
    | null;
  const conversationId = body?.conversationId;
  const text = body?.text?.trim();
  if (!conversationId || !text) {
    return NextResponse.json({ error: "conversationId e text obrigatórios" }, { status: 400 });
  }

  const repo = createSupabaseRepository(auth.admin, auth.orgId, "api");
  const conversation = await repo.getConversation(conversationId);
  if (!conversation) {
    return NextResponse.json({ error: "conversa não encontrada" }, { status: 404 });
  }

  const message = await repo.appendOutbound(conversationId, text, "api");
  const config = await channelConfig(auth.admin, auth.orgId, conversation.channel, conversation.channelId);
  const result = await deliverMessage(conversation.channel, conversation.contact.handle, text, config);

  await dispatchEvent(auth.orgId, "message.sent", {
    conversation_id: conversationId,
    channel: conversation.channel,
    text,
    via: "api",
  });

  return NextResponse.json(
    { message, delivery: { simulated: result.simulated, error: result.error } },
    { status: result.ok ? 201 : 502 },
  );
}
