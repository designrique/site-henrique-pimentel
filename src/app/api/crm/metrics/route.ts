import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";

export const dynamic = "force-dynamic";

async function count(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: any,
  table: string,
  orgId: string,
  filters: Record<string, string> = {},
): Promise<number> {
  let q = supabase
    .from(table)
    .select("*", { count: "exact", head: true })
    .eq("organization_id", orgId);
  for (const [k, v] of Object.entries(filters)) q = q.eq(k, v);
  const { count: c } = await q;
  return c ?? 0;
}

export async function GET() {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    if (ctx.reason === "demo") return NextResponse.json({ demo: true });
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }
  const { supabase, orgId } = ctx;

  const sevenDaysAgo = new Date(Date.now() - 7 * 86_400_000).toISOString();
  const nowIso = new Date().toISOString();

  // Contagem de mensagens por direção nos últimos 7 dias.
  async function msgCount(direction: "in" | "out"): Promise<number> {
    const { count: c } = await supabase
      .from("messages")
      .select("*", { count: "exact", head: true })
      .eq("organization_id", orgId)
      .eq("direction", direction)
      .gte("created_at", sevenDaysAgo);
    return c ?? 0;
  }

  // Tarefas atrasadas: em aberto e com vencimento no passado.
  async function overdueTasks(): Promise<number> {
    const { count: c } = await supabase
      .from("tasks")
      .select("*", { count: "exact", head: true })
      .eq("organization_id", orgId)
      .eq("status", "open")
      .lt("due_at", nowIso);
    return c ?? 0;
  }

  const [
    convOpen,
    convPending,
    convClosed,
    tasksOpen,
    tasksDone,
    tasksOverdue,
    msgIn7d,
    msgOut7d,
    stages,
    deals,
    conversationsByChannel,
  ] = await Promise.all([
    count(supabase, "conversations", orgId, { status: "open" }),
    count(supabase, "conversations", orgId, { status: "pending" }),
    count(supabase, "conversations", orgId, { status: "closed" }),
    count(supabase, "tasks", orgId, { status: "open" }),
    count(supabase, "tasks", orgId, { status: "done" }),
    overdueTasks(),
    msgCount("in"),
    msgCount("out"),
    supabase
      .from("pipeline_stages")
      .select("id, name, position")
      .eq("organization_id", orgId)
      .order("position", { ascending: true }),
    supabase.from("deals").select("stage_id, value").eq("organization_id", orgId),
    supabase.from("conversations").select("channel").eq("organization_id", orgId),
  ]);

  // Agrega conversas por canal.
  const channelRows = (conversationsByChannel.data ?? []) as Array<{ channel: string }>;
  const byChannel: Record<string, number> = {};
  for (const r of channelRows) byChannel[r.channel] = (byChannel[r.channel] ?? 0) + 1;

  // Agrega negócios por estágio (contagem + valor).
  const dealRows = (deals.data ?? []) as Array<{ stage_id: string; value: number }>;
  const byStage = new Map<string, { count: number; value: number }>();
  for (const d of dealRows) {
    const cur = byStage.get(d.stage_id) ?? { count: 0, value: 0 };
    cur.count += 1;
    cur.value += Number(d.value);
    byStage.set(d.stage_id, cur);
  }
  const pipeline = ((stages.data ?? []) as Array<{ id: string; name: string }>).map((s) => ({
    stage: s.name,
    count: byStage.get(s.id)?.count ?? 0,
    value: byStage.get(s.id)?.value ?? 0,
  }));

  // Ganhos/perdidos por nome de estágio (convenção: "Ganho" / "Perdido").
  const won = pipeline.find((p) => /ganho/i.test(p.stage));
  const lost = pipeline.find((p) => /perdido/i.test(p.stage));

  return NextResponse.json({
    conversations: {
      open: convOpen,
      pending: convPending,
      closed: convClosed,
      total: convOpen + convPending + convClosed,
    },
    tasks: { open: tasksOpen, done: tasksDone, overdue: tasksOverdue },
    messages7d: { in: msgIn7d, out: msgOut7d, total: msgIn7d + msgOut7d },
    byChannel,
    pipeline,
    pipelineTotal: pipeline.reduce((s, p) => s + p.value, 0),
    won: { count: won?.count ?? 0, value: won?.value ?? 0 },
    lost: { count: lost?.count ?? 0, value: lost?.value ?? 0 },
  });
}
