import { NextResponse } from "next/server";
import { getInboxRepository } from "@/lib/inbox/repository";
import { parseInboundWebhook, verifyWebhook } from "@/lib/inbox/channels/whatsapp";

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

// POST: recebe eventos de mensagem e alimenta o Inbox.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "payload inválido" }, { status: 400 });
  }

  const inbound = parseInboundWebhook(body);
  const repo = await getInboxRepository();
  for (const message of inbound) {
    await repo.ingestInbound(message);
  }

  // A Meta reenvia o evento se não receber 200 rapidamente.
  return NextResponse.json({ received: inbound.length });
}
