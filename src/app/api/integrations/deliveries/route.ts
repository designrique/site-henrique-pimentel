import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";

export const dynamic = "force-dynamic";

// Últimas entregas de webhook da organização (para auditoria e reenvio).
export async function GET() {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    if (ctx.reason === "demo") return NextResponse.json({ deliveries: [], demo: true });
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const { data, error } = await ctx.supabase
    .from("webhook_deliveries")
    .select("id, endpoint_id, event, status, attempts, response_code, error, created_at, last_attempt_at")
    .eq("organization_id", ctx.orgId)
    .order("created_at", { ascending: false })
    .limit(50);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ deliveries: data ?? [] });
}
