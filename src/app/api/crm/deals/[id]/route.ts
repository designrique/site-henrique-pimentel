import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";

export const dynamic = "force-dynamic";

interface Ctx {
  params: Promise<{ id: string }>;
}

// PATCH: mover de estágio e/ou editar campos do negócio.
export async function PATCH(request: Request, { params }: Ctx) {
  const { id } = await params;
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const body = (await request.json().catch(() => null)) as {
    stageId?: string;
    title?: string;
    value?: number;
    assigneeId?: string | null;
    contactId?: string | null;
    position?: number;
  } | null;
  if (!body) return NextResponse.json({ error: "payload inválido" }, { status: 400 });

  const update: Record<string, unknown> = {};
  if (body.stageId !== undefined) update.stage_id = body.stageId;
  if (body.title !== undefined) update.title = body.title;
  if (body.value !== undefined) update.value = body.value;
  if (body.assigneeId !== undefined) update.assignee_id = body.assigneeId || null;
  if (body.contactId !== undefined) update.contact_id = body.contactId || null;
  if (body.position !== undefined) update.position = body.position;

  const { data, error } = await ctx.supabase
    .from("deals")
    .update(update)
    .eq("organization_id", ctx.orgId)
    .eq("id", id)
    .select("id, stage_id, position")
    .maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: "não encontrado" }, { status: 404 });

  return NextResponse.json({ deal: data });
}

export async function DELETE(_request: Request, { params }: Ctx) {
  const { id } = await params;
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const { error } = await ctx.supabase
    .from("deals")
    .delete()
    .eq("organization_id", ctx.orgId)
    .eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
