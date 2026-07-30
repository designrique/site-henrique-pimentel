import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";
import { notifyUser } from "@/lib/notifications/notify";

export const dynamic = "force-dynamic";

const TASK_SELECT =
  "id, title, description, status, due_at, assignee_id, contact_id, contact:contacts(id, name), created_at";

export async function GET(request: Request) {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    if (ctx.reason === "demo") return NextResponse.json({ tasks: [], demo: true });
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const { searchParams } = new URL(request.url);
  const scope = searchParams.get("scope"); // "mine" | null
  const status = searchParams.get("status"); // "open" | "done" | null

  let q = ctx.supabase
    .from("tasks")
    .select(TASK_SELECT)
    .eq("organization_id", ctx.orgId)
    .order("status", { ascending: true })
    .order("due_at", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: false });

  if (scope === "mine") q = q.eq("assignee_id", ctx.userId);
  if (status === "open" || status === "done") q = q.eq("status", status);

  const { data, error } = await q;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ tasks: data ?? [] });
}

export async function POST(request: Request) {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const body = (await request.json().catch(() => null)) as {
    title?: string;
    description?: string;
    dueAt?: string | null;
    assigneeId?: string | null;
    contactId?: string | null;
  } | null;

  const title = body?.title?.trim();
  if (!title) return NextResponse.json({ error: "título obrigatório" }, { status: 400 });

  const { data, error } = await ctx.supabase
    .from("tasks")
    .insert({
      organization_id: ctx.orgId,
      title,
      description: body?.description ?? "",
      due_at: body?.dueAt || null,
      assignee_id: body?.assigneeId || null,
      contact_id: body?.contactId || null,
      created_by: ctx.userId,
    })
    .select(TASK_SELECT)
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Notifica o atendente atribuído (UI + e-mail), exceto se for ele mesmo.
  if (body?.assigneeId && body.assigneeId !== ctx.userId) {
    await notifyUser({
      organizationId: ctx.orgId,
      userId: body.assigneeId,
      type: "task",
      title: "Nova tarefa atribuída a você",
      body: title,
      link: "/atendimento/tarefas",
    });
  }

  return NextResponse.json({ task: data }, { status: 201 });
}
