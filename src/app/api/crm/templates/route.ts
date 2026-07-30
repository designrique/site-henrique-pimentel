import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";

export const dynamic = "force-dynamic";

export async function GET() {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    if (ctx.reason === "demo") return NextResponse.json({ templates: [], demo: true });
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const { data, error } = await ctx.supabase
    .from("canned_responses")
    .select("id, shortcut, title, body")
    .eq("organization_id", ctx.orgId)
    .order("title", { ascending: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ templates: data ?? [] });
}

export async function POST(request: Request) {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const body = (await request.json().catch(() => null)) as {
    shortcut?: string;
    title?: string;
    body?: string;
  } | null;

  const title = body?.title?.trim();
  const text = body?.body?.trim();
  if (!title || !text) {
    return NextResponse.json({ error: "título e texto obrigatórios" }, { status: 400 });
  }

  const { data, error } = await ctx.supabase
    .from("canned_responses")
    .insert({
      organization_id: ctx.orgId,
      shortcut: body?.shortcut?.trim() ?? "",
      title,
      body: text,
      created_by: ctx.userId,
    })
    .select("id, shortcut, title, body")
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ template: data }, { status: 201 });
}
