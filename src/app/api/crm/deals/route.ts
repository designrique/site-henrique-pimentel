import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";

export const dynamic = "force-dynamic";

const DEAL_SELECT =
  "id, title, value, currency, stage_id, position, assignee_id, contact_id, company_id, contact:contacts(id, name), updated_at";

export async function GET() {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    if (ctx.reason === "demo") return NextResponse.json({ deals: [], demo: true });
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const { data, error } = await ctx.supabase
    .from("deals")
    .select(DEAL_SELECT)
    .eq("organization_id", ctx.orgId)
    .order("position", { ascending: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ deals: data ?? [] });
}

export async function POST(request: Request) {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const body = (await request.json().catch(() => null)) as {
    title?: string;
    stageId?: string;
    value?: number;
    contactId?: string | null;
    assigneeId?: string | null;
  } | null;

  const title = body?.title?.trim();
  const stageId = body?.stageId;
  if (!title) return NextResponse.json({ error: "título obrigatório" }, { status: 400 });
  if (!stageId) return NextResponse.json({ error: "estágio obrigatório" }, { status: 400 });

  const { data, error } = await ctx.supabase
    .from("deals")
    .insert({
      organization_id: ctx.orgId,
      stage_id: stageId,
      title,
      value: body?.value ?? 0,
      contact_id: body?.contactId || null,
      assignee_id: body?.assigneeId || null,
      created_by: ctx.userId,
    })
    .select(DEAL_SELECT)
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ deal: data }, { status: 201 });
}
