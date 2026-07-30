import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";

export const dynamic = "force-dynamic";

interface Ctx {
  params: Promise<{ id: string }>;
}

export async function DELETE(_request: Request, { params }: Ctx) {
  const { id } = await params;
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const { error } = await ctx.supabase
    .from("webhook_endpoints")
    .delete()
    .eq("organization_id", ctx.orgId)
    .eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
