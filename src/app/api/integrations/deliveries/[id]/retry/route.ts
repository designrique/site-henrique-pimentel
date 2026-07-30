import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";
import { retryDelivery } from "@/lib/integrations/webhooks";

export const dynamic = "force-dynamic";

interface Ctx {
  params: Promise<{ id: string }>;
}

// Reenvia uma entrega de webhook para o mesmo endpoint.
export async function POST(_request: Request, { params }: Ctx) {
  const { id } = await params;
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const result = await retryDelivery(ctx.orgId, id);
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}
