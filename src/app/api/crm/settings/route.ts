import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";

export const dynamic = "force-dynamic";

const DEFAULTS = {
  auto_assign: false,
  business_days: [1, 2, 3, 4, 5],
  open_time: "09:00",
  close_time: "18:00",
  timezone: "America/Sao_Paulo",
  away_message: "",
};

const SELECT =
  "organization_id, auto_assign, business_days, open_time, close_time, timezone, away_message";

export async function GET() {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    if (ctx.reason === "demo") return NextResponse.json({ settings: DEFAULTS, demo: true });
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  let { data } = await ctx.supabase
    .from("org_settings")
    .select(SELECT)
    .eq("organization_id", ctx.orgId)
    .maybeSingle();

  if (!data) {
    await ctx.supabase.from("org_settings").insert({ organization_id: ctx.orgId });
    ({ data } = await ctx.supabase
      .from("org_settings")
      .select(SELECT)
      .eq("organization_id", ctx.orgId)
      .maybeSingle());
  }

  return NextResponse.json({ settings: data ?? DEFAULTS });
}

export async function PUT(request: Request) {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: "payload inválido" }, { status: 400 });

  const update: Record<string, unknown> = { organization_id: ctx.orgId };
  if (typeof body.auto_assign === "boolean") update.auto_assign = body.auto_assign;
  if (Array.isArray(body.business_days)) {
    update.business_days = body.business_days
      .map((d) => Number(d))
      .filter((d) => Number.isInteger(d) && d >= 0 && d <= 6);
  }
  if (typeof body.open_time === "string") update.open_time = body.open_time.slice(0, 5);
  if (typeof body.close_time === "string") update.close_time = body.close_time.slice(0, 5);
  if (typeof body.timezone === "string") update.timezone = body.timezone;
  if (typeof body.away_message === "string") update.away_message = body.away_message.slice(0, 1000);

  const { data, error } = await ctx.supabase
    .from("org_settings")
    .upsert(update, { onConflict: "organization_id" })
    .select(SELECT)
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ settings: data });
}
