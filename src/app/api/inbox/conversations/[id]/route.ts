import { NextResponse } from "next/server";
import { getInboxRepository } from "@/lib/inbox/repository";
import type { ConversationStatus } from "@/lib/inbox/types";

export const dynamic = "force-dynamic";

interface Ctx {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: Ctx) {
  const { id } = await params;
  const repo = await getInboxRepository();
  const conversation = await repo.getConversation(id);
  if (!conversation) {
    return NextResponse.json({ error: "Conversa não encontrada" }, { status: 404 });
  }
  await repo.markRead(id);
  const messages = await repo.listMessages(id);
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

  const repo = await getInboxRepository();
  const conversation = await repo.setStatus(id, body.status);
  if (!conversation) {
    return NextResponse.json({ error: "Conversa não encontrada" }, { status: 404 });
  }
  return NextResponse.json({ conversation });
}
