import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";
import { notifyUser } from "@/lib/notifications/notify";

export const dynamic = "force-dynamic";

interface Ctx {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: Request, { params }: Ctx) {
  const { id } = await params;
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const body = (await request.json().catch(() => null)) as {
    status?: "open" | "done";
    title?: string;
    assigneeId?: string | null;
    dueAt?: string | null;
  } | null;
  if (!body) return NextResponse.json({ error: "payload inválido" }, { status: 400 });

  // (P2) Só permite atribuir a um membro da organização.
  if (body.assigneeId) {
    const { data: member } = await ctx.supabase
      .from("organization_members")
      .select("user_id")
      .eq("organization_id", ctx.orgId)
      .eq("user_id", body.assigneeId)
      .maybeSingle();
    if (!member) {
      return NextResponse.json({ error: "responsável não é membro da organização" }, { status: 400 });
    }
  }

  const update: Record<string, unknown> = {};
  if (body.status) {
    update.status = body.status;
    update.done_at = body.status === "done" ? new Date().toISOString() : null;
  }
  if (body.title !== undefined) update.title = body.title;
  if (body.dueAt !== undefined) update.due_at = body.dueAt || null;
  if (body.assigneeId !== undefined) update.assignee_id = body.assigneeId || null;

  const { data, error } = await ctx.supabase
    .from("tasks")
    .update(update)
    .eq("organization_id", ctx.orgId)
    .eq("id", id)
    .select("id, title, status, assignee_id")
    .maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: "não encontrado" }, { status: 404 });

  // Notifica quando a tarefa passa a ser de outro atendente.
  if (
    body.assigneeId &&
    body.assigneeId !== ctx.userId &&
    data.assignee_id === body.assigneeId
  ) {
    await notifyUser({
      organizationId: ctx.orgId,
      userId: body.assigneeId,
      type: "task",
      title: "Tarefa atribuída a você",
      body: data.title,
      link: "/atendimento/tarefas",
    });
  }

  return NextResponse.json({ task: data });
}

export async function DELETE(_request: Request, { params }: Ctx) {
  const { id } = await params;
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const { error } = await ctx.supabase
    .from("tasks")
    .delete()
    .eq("organization_id", ctx.orgId)
    .eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
