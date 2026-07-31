import { NextResponse } from "next/server";
import { getInboxRepository } from "@/lib/inbox/repository";
import type { Channel, ConversationStatus } from "@/lib/inbox/types";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") as ConversationStatus | null;
  const channel = searchParams.get("channel") as Channel | null;
  const query = searchParams.get("q");

  const repo = await getInboxRepository();
  const conversations = await repo.listConversations({
    status: status ?? undefined,
    channel: channel ?? undefined,
    query: query ?? undefined,
  });

  return NextResponse.json({ conversations });
}
