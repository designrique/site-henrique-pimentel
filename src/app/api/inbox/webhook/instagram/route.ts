import { NextResponse } from "next/server";
import { inMemoryRepository } from "@/lib/inbox/store";
import { createSupabaseRepository } from "@/lib/inbox/store.supabase";
import { isSupabaseConfigured } from "@/lib/supabase/server";
import { createSupabaseAdminClient, resolveOrgByChannel } from "@/lib/supabase/admin";
import { parseInstagramWebhook, verifyInstagramWebhook } from "@/lib/inbox/channels/instagram";
import { verifyMetaSignature } from "@/lib/inbox/channels/whatsapp";
import { dispatchEvent } from "@/lib/integrations/webhooks";
import { runInboundAutomation } from "@/lib/inbox/automation";

export const dynamic = "force-dynamic";

// GET: verificação do webhook (padrão hub.* da Meta).
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const result = verifyInstagramWebhook(searchParams);
  if (result.ok && result.challenge) {
    return new NextResponse(result.challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }
  return new NextResponse("Forbidden", { status: 403 });
}

// POST: roteia por conta IG (entry.id) → channels.external_id → organização.
export async function POST(request: Request) {
  const raw = await request.text();
  if (
    !verifyMetaSignature(
      raw,
      request.headers.get("x-hub-signature-256"),
      process.env.INSTAGRAM_APP_SECRET,
    )
  ) {
    return NextResponse.json({ error: "assinatura inválida" }, { status: 401 });
  }

  let body: unknown = null;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "payload inválido" }, { status: 400 });
  }

  const inbound = parseInstagramWebhook(body);
  let ingested = 0;
  let skipped = 0;

  if (isSupabaseConfigured()) {
    const admin = createSupabaseAdminClient();
    if (!admin) {
      return NextResponse.json(
        { error: "SUPABASE_SERVICE_ROLE_KEY ausente no servidor" },
        { status: 500 },
      );
    }
    for (const msg of inbound) {
      if (!msg.channelExternalId) {
        skipped += 1;
        continue;
      }
      const route = await resolveOrgByChannel(admin, "instagram", msg.channelExternalId);
      if (!route) {
        skipped += 1;
        continue;
      }
      msg.channelId = route.channelId;
      const repo = createSupabaseRepository(admin, route.organizationId, "system");
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
  } else {
    for (const msg of inbound) {
      await inMemoryRepository.ingestInbound(msg);
      ingested += 1;
    }
  }

  return NextResponse.json({ received: inbound.length, ingested, skipped });
}
