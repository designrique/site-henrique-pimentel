import { NextResponse } from "next/server";
import { inboxRepository } from "@/lib/inbox/store";
import { sendWhatsAppText } from "@/lib/inbox/channels/whatsapp";

export const dynamic = "force-dynamic";

interface Ctx {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: Ctx) {
  const { id } = await params;
  if (!inboxRepository.getConversation(id)) {
    return NextResponse.json({ error: "Conversa não encontrada" }, { status: 404 });
  }
  return NextResponse.json({ messages: inboxRepository.listMessages(id) });
}

export async function POST(request: Request, { params }: Ctx) {
  const { id } = await params;
  const conversation = inboxRepository.getConversation(id);
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
  const message = inboxRepository.appendOutbound(id, text, agentId);
  if (!message) {
    return NextResponse.json({ error: "Falha ao registrar mensagem" }, { status: 500 });
  }

  // Entrega no canal. Hoje só WhatsApp tem envio real; demais canais ficam
  // registrados localmente até ganharem seus adaptadores.
  let delivery: { simulated: boolean; error?: string } = { simulated: true };
  if (conversation.channel === "whatsapp") {
    const result = await sendWhatsAppText(conversation.contact.handle, text);
    delivery = { simulated: result.simulated, error: result.error };
    if (!result.ok) {
      return NextResponse.json(
        { message, delivery: { simulated: false, error: result.error } },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ message, delivery });
}
