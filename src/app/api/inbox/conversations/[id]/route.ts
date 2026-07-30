import { NextResponse } from "next/server";
import { inboxRepository } from "@/lib/inbox/store";
import type { ConversationStatus } from "@/lib/inbox/types";

export const dynamic = "force-dynamic";

interface Ctx {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: Ctx) {
  const { id } = await params;
  const conversation = inboxRepository.getConversation(id);
  if (!conversation) {
    return NextResponse.json({ error: "Conversa não encontrada" }, { status: 404 });
  }
  inboxRepository.markRead(id);
  const messages = inboxRepository.listMessages(id);
  return NextResponse.json({ conversation, messages });
}

export async function PATCH(request: Request, { params }: Ctx) {
  const { id } = await params;
  const body = (await request.json().catch(() => null)) as
    | { status?: ConversationStatus }
    | null;

  if (!body?.status || !["open", "pending", "closed"].includes(body.status)) {
    return NextResponse.json({ error: "status inválido" }, { status: 400 });
  }

  const conversation = inboxRepository.setStatus(id, body.status);
  if (!conversation) {
    return NextResponse.json({ error: "Conversa não encontrada" }, { status: 404 });
  }
  return NextResponse.json({ conversation });
}
