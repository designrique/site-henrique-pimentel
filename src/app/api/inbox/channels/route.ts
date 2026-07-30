import { NextResponse } from "next/server";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { resolveCurrentOrg } from "@/lib/inbox/store.supabase";
import type { Channel } from "@/lib/inbox/types";

export const dynamic = "force-dynamic";

const VALID_TYPES: Channel[] = ["whatsapp", "instagram", "telegram", "webchat"];

async function requireOrg() {
  if (!isSupabaseConfigured()) return { error: "demo" as const };
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "unauth" as const };
  const orgId = await resolveCurrentOrg(supabase, user.id);
  if (!orgId) return { error: "no_org" as const };
  return { supabase, orgId };
}

export async function GET() {
  const ctx = await requireOrg();
  if ("error" in ctx) {
    if (ctx.error === "demo") return NextResponse.json({ channels: [], demo: true });
    return NextResponse.json({ error: ctx.error }, { status: 401 });
  }

  const { data, error } = await ctx.supabase
    .from("channels")
    .select("id, type, name, external_id, is_active, created_at")
    .eq("organization_id", ctx.orgId)
    .order("created_at", { ascending: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ channels: data ?? [] });
}

export async function POST(request: Request) {
  const ctx = await requireOrg();
  if ("error" in ctx) {
    const status = ctx.error === "demo" ? 400 : 401;
    return NextResponse.json({ error: ctx.error }, { status });
  }

  const body = (await request.json().catch(() => null)) as {
    type?: string;
    name?: string;
    externalId?: string;
    token?: string;
  } | null;

  const type = body?.type as Channel | undefined;
  const name = body?.name?.trim();
  if (!type || !VALID_TYPES.includes(type)) {
    return NextResponse.json({ error: "tipo de canal inválido" }, { status: 400 });
  }
  if (!name) {
    return NextResponse.json({ error: "nome obrigatório" }, { status: 400 });
  }

  // Credenciais do canal ficam em config (jsonb). Para WhatsApp, guardamos o
  // token e o phone_number_id (external_id roteia os webhooks recebidos).
  const config: Record<string, unknown> = {};
  if (body?.token) config.token = body.token;
  if (body?.externalId) config.phone_number_id = body.externalId;

  const { data, error } = await ctx.supabase
    .from("channels")
    .insert({
      organization_id: ctx.orgId,
      type,
      name,
      external_id: body?.externalId || null,
      config,
    })
    .select("id, type, name, external_id, is_active, created_at")
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ channel: data }, { status: 201 });
}
