import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";

export const dynamic = "force-dynamic";

const DEFAULT_STAGES = ["Novo", "Qualificação", "Proposta", "Ganho", "Perdido"];

export async function GET() {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    if (ctx.reason === "demo") return NextResponse.json({ stages: [], demo: true });
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  let { data: stages } = await ctx.supabase
    .from("pipeline_stages")
    .select("id, name, position")
    .eq("organization_id", ctx.orgId)
    .order("position", { ascending: true });

  // Semeia os estágios padrão na primeira vez.
  if (!stages || stages.length === 0) {
    await ctx.supabase.from("pipeline_stages").insert(
      DEFAULT_STAGES.map((name, i) => ({
        organization_id: ctx.orgId,
        name,
        position: i,
      })),
    );
    ({ data: stages } = await ctx.supabase
      .from("pipeline_stages")
      .select("id, name, position")
      .eq("organization_id", ctx.orgId)
      .order("position", { ascending: true }));
  }

  return NextResponse.json({ stages: stages ?? [] });
}
