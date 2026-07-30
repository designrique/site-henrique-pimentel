import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";

export const dynamic = "force-dynamic";

const TYPES = ["text", "number", "date", "select"];

function slugify(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 40);
}

export async function GET() {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    if (ctx.reason === "demo") return NextResponse.json({ fields: [], demo: true });
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const { data, error } = await ctx.supabase
    .from("custom_field_definitions")
    .select("id, label, key, type, options, position")
    .eq("organization_id", ctx.orgId)
    .order("position", { ascending: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ fields: data ?? [] });
}

export async function POST(request: Request) {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const body = (await request.json().catch(() => null)) as {
    label?: string;
    type?: string;
    options?: string[];
  } | null;

  const label = body?.label?.trim();
  if (!label) return NextResponse.json({ error: "rótulo obrigatório" }, { status: 400 });
  const type = TYPES.includes(body?.type ?? "") ? body!.type! : "text";
  const key = slugify(label);
  if (!key) return NextResponse.json({ error: "rótulo inválido" }, { status: 400 });

  const { data, error } = await ctx.supabase
    .from("custom_field_definitions")
    .insert({
      organization_id: ctx.orgId,
      label,
      key,
      type,
      options: type === "select" ? (body?.options ?? []).filter(Boolean) : [],
    })
    .select("id, label, key, type, options, position")
    .single();
  if (error) {
    const msg = /duplicate|unique/i.test(error.message)
      ? "já existe um campo com esse nome"
      : error.message;
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  return NextResponse.json({ field: data }, { status: 201 });
}
