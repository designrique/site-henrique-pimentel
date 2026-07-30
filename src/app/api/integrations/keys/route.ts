import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";
import { generateApiKey } from "@/lib/integrations/apikeys";

export const dynamic = "force-dynamic";

// Lista as chaves (sem expor o hash nem o valor completo).
export async function GET() {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    if (ctx.reason === "demo") return NextResponse.json({ keys: [], demo: true });
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const { data, error } = await ctx.supabase
    .from("api_keys")
    .select("id, name, prefix, last_used_at, revoked_at, created_at")
    .eq("organization_id", ctx.orgId)
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ keys: data ?? [] });
}

// Cria uma chave e devolve o valor completo UMA única vez.
export async function POST(request: Request) {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const body = (await request.json().catch(() => null)) as { name?: string } | null;
  const name = body?.name?.trim() || "Chave de API";

  const key = generateApiKey();
  const { data, error } = await ctx.supabase
    .from("api_keys")
    .insert({
      organization_id: ctx.orgId,
      name,
      prefix: key.prefix,
      key_hash: key.hash,
      created_by: ctx.userId,
    })
    .select("id, name, prefix, created_at")
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // `raw` só existe aqui — não é recuperável depois.
  return NextResponse.json({ key: data, raw: key.raw }, { status: 201 });
}
