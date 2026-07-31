import { NextResponse } from "next/server";
import { requireApiKey } from "@/lib/integrations/apiauth";
import { createSupabaseRepository } from "@/lib/inbox/store.supabase";
import type { Channel, ConversationStatus } from "@/lib/inbox/types";

export const dynamic = "force-dynamic";

// GET /api/v1/conversations — lista conversas da organização da chave.
export async function GET(request: Request) {
  const auth = await requireApiKey(request);
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") as ConversationStatus | null;
  const channel = searchParams.get("channel") as Channel | null;

  const repo = createSupabaseRepository(auth.admin, auth.orgId, "api");
  const conversations = await repo.listConversations({
    status: status ?? undefined,
    channel: channel ?? undefined,
  });

  return NextResponse.json({ conversations });
}
