import { NextResponse } from "next/server";
import { inMemoryRepository } from "@/lib/inbox/store";
import { createSupabaseRepository } from "@/lib/inbox/store.supabase";
import { isSupabaseConfigured } from "@/lib/supabase/server";
import { createSupabaseAdminClient, resolveOrgByChannelConfig } from "@/lib/supabase/admin";
import { parseTelegramUpdate } from "@/lib/inbox/channels/telegram";
import { dispatchEvent } from "@/lib/integrations/webhooks";
import { runInboundAutomation } from "@/lib/inbox/automation";

export const dynamic = "force-dynamic";

// Telegram não faz GET de verificação; roteia pelo secret token do webhook.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "payload inválido" }, { status: 400 });

  const inbound = parseTelegramUpdate(body);
  if (inbound.length === 0) return NextResponse.json({ received: 0 });

  if (isSupabaseConfigured()) {
    const admin = createSupabaseAdminClient();
    if (!admin) {
      return NextResponse.json(
        { error: "SUPABASE_SERVICE_ROLE_KEY ausente no servidor" },
        { status: 500 },
      );
    }
    // A Meta/Telegram envia o secret configurado no header abaixo.
    const secret = request.headers.get("x-telegram-bot-api-secret-token");
    if (!secret) return NextResponse.json({ error: "sem secret" }, { status: 401 });

    const route = await resolveOrgByChannelConfig(admin, "telegram", "secret", secret);
    if (!route) return NextResponse.json({ received: inbound.length, skipped: inbound.length });

    const repo = createSupabaseRepository(admin, route.organizationId, "system");
    let ingested = 0;
    let skipped = 0;
    for (const msg of inbound) {
      msg.channelId = route.channelId;
      const { conversation, created, duplicate } = await repo.ingestInbound(msg);
      if (duplicate) {
        skipped += 1;
        continue;
      }
      await runInboundAutomation(admin, route.organizationId, conversation, msg.contactHandle, created, route.config);
      await dispatchEvent(route.organizationId, "message.received", {
        conversation_id: conversation.id,
        channel: msg.channel,
        text: msg.text,
        contact_handle: msg.contactHandle,
      });
      ingested += 1;
    }
    return NextResponse.json({ received: inbound.length, ingested, skipped });
  }

  for (const msg of inbound) await inMemoryRepository.ingestInbound(msg);
  return NextResponse.json({ received: inbound.length, ingested: inbound.length });
}
