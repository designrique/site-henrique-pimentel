import { NextResponse } from "next/server";
import { inMemoryRepository } from "@/lib/inbox/store";
import { createSupabaseRepository } from "@/lib/inbox/store.supabase";
import { isSupabaseConfigured } from "@/lib/supabase/server";
import { createSupabaseAdminClient, resolveOrgByChannel } from "@/lib/supabase/admin";
import {
  parseInboundWebhook,
  verifyWebhook,
  verifyMetaSignature,
} from "@/lib/inbox/channels/whatsapp";
import { dispatchEvent } from "@/lib/integrations/webhooks";
import { runInboundAutomation } from "@/lib/inbox/automation";
import type { InboundMessage } from "@/lib/inbox/types";

export const dynamic = "force-dynamic";

// GET: handshake de verificação exigido pela Meta ao cadastrar o webhook.
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const result = verifyWebhook(searchParams);
  if (result.ok && result.challenge) {
    return new NextResponse(result.challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }
  return new NextResponse("Forbidden", { status: 403 });
}

// POST: recebe eventos e roteia cada mensagem para a organização dona do canal.
export async function POST(request: Request) {
  // Corpo cru para validar a assinatura antes de agir sobre o conteúdo.
  const raw = await request.text();
  if (
    !verifyMetaSignature(
      raw,
      request.headers.get("x-hub-signature-256"),
      process.env.WHATSAPP_APP_SECRET,
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

  const inbound = parseInboundWebhook(body);
  let ingested = 0;
  let skipped = 0;

  if (isSupabaseConfigured()) {
    // A Meta chama sem sessão: usamos service-role e resolvemos o tenant pelo
    // id do número (phone_number_id) → channels.external_id → organization_id.
    const admin = createSupabaseAdminClient();
    if (!admin) {
      // Configurado no cliente mas sem service-role key no servidor.
      return NextResponse.json(
        { error: "SUPABASE_SERVICE_ROLE_KEY ausente no servidor" },
        { status: 500 },
      );
    }

    for (const msg of inbound) {
      const route = await resolveChannelOrg(admin, msg);
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
    // Modo demo: grava em memória.
    for (const msg of inbound) {
      await inMemoryRepository.ingestInbound(msg);
      ingested += 1;
    }
  }

  // A Meta reenvia o evento se não receber 200 rapidamente.
  return NextResponse.json({ received: inbound.length, ingested, skipped });
}

async function resolveChannelOrg(
  admin: ReturnType<typeof createSupabaseAdminClient>,
  msg: InboundMessage,
): Promise<{ organizationId: string; channelId: string; config: Record<string, unknown> } | null> {
  if (!admin || !msg.channelExternalId) return null;
  const route = await resolveOrgByChannel(admin, msg.channel, msg.channelExternalId);
  return route
    ? { organizationId: route.organizationId, channelId: route.channelId, config: route.config }
    : null;
}
