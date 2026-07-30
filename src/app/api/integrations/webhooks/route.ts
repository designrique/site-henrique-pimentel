import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";
import { isSafeWebhookUrl } from "@/lib/integrations/webhooks";

export const dynamic = "force-dynamic";

const VALID_EVENTS = [
  "message.received",
  "message.sent",
  "deal.stage_changed",
  "task.created",
];

export async function GET() {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    if (ctx.reason === "demo") return NextResponse.json({ webhooks: [], demo: true });
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const { data, error } = await ctx.supabase
    .from("webhook_endpoints")
    .select("id, url, secret, events, is_active, created_at")
    .eq("organization_id", ctx.orgId)
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ webhooks: data ?? [], events: VALID_EVENTS });
}

export async function POST(request: Request) {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const body = (await request.json().catch(() => null)) as {
    url?: string;
    events?: string[];
  } | null;

  const url = body?.url?.trim();
  if (!url || !isSafeWebhookUrl(url)) {
    return NextResponse.json(
      { error: "URL inválida: use https e um endereço público" },
      { status: 400 },
    );
  }
  const events = (body?.events ?? []).filter((e) => VALID_EVENTS.includes(e));

  const { data, error } = await ctx.supabase
    .from("webhook_endpoints")
    .insert({
      organization_id: ctx.orgId,
      url,
      secret: randomBytes(24).toString("base64url"),
      events,
    })
    .select("id, url, secret, events, is_active, created_at")
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ webhook: data }, { status: 201 });
}
