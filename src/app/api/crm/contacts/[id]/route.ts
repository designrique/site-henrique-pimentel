import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";

export const dynamic = "force-dynamic";

interface Ctx {
  params: Promise<{ id: string }>;
}

// GET: ficha 360 do cliente — dados + conversas, negócios, tarefas e uma
// timeline unificada das mensagens de todas as suas conversas.
export async function GET(_request: Request, { params }: Ctx) {
  const { id } = await params;
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    if (ctx.reason === "demo") return NextResponse.json({ demo: true });
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }
  const { supabase, orgId } = ctx;

  const { data: contact } = await supabase
    .from("contacts")
    .select(
      "id, name, handle, channel, email, notes, tags, custom_fields, company:companies(id, name)",
    )
    .eq("organization_id", orgId)
    .eq("id", id)
    .maybeSingle();
  if (!contact) return NextResponse.json({ error: "não encontrado" }, { status: 404 });

  const [{ data: conversations }, { data: deals }, { data: tasks }, { data: fields }] =
    await Promise.all([
      supabase
        .from("conversations")
        .select("id, channel, status, last_message_at, last_message_preview")
        .eq("organization_id", orgId)
        .eq("contact_id", id)
        .order("last_message_at", { ascending: false }),
      supabase
        .from("deals")
        .select("id, title, value, currency, stage:pipeline_stages(name)")
        .eq("organization_id", orgId)
        .eq("contact_id", id)
        .order("updated_at", { ascending: false }),
      supabase
        .from("tasks")
        .select("id, title, status, due_at")
        .eq("organization_id", orgId)
        .eq("contact_id", id)
        .order("created_at", { ascending: false }),
      supabase
        .from("custom_field_definitions")
        .select("id, label, key, type, options")
        .eq("organization_id", orgId)
        .order("position", { ascending: true }),
    ]);

  // Timeline: mensagens das conversas do contato (mais recentes primeiro).
  const conversationIds = (conversations ?? []).map((c) => c.id);
  let timeline: unknown[] = [];
  if (conversationIds.length > 0) {
    const { data: messages } = await supabase
      .from("messages")
      .select("id, direction, text, author, created_at, conversation_id, media_kind")
      .eq("organization_id", orgId)
      .in("conversation_id", conversationIds)
      .order("created_at", { ascending: false })
      .limit(50);
    timeline = messages ?? [];
  }

  return NextResponse.json({
    contact,
    conversations: conversations ?? [],
    deals: deals ?? [],
    tasks: tasks ?? [],
    fields: fields ?? [],
    timeline,
  });
}

// PATCH: edita dados de CRM do contato (e-mail e anotações).
export async function PATCH(request: Request, { params }: Ctx) {
  const { id } = await params;
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const body = (await request.json().catch(() => null)) as
    | {
        email?: string;
        notes?: string;
        tags?: string[];
        customFields?: Record<string, unknown>;
      }
    | null;
  if (!body) return NextResponse.json({ error: "payload inválido" }, { status: 400 });

  const update: Record<string, unknown> = {};
  if (body.email !== undefined) update.email = body.email || null;
  if (body.notes !== undefined) update.notes = body.notes;
  if (body.tags !== undefined) {
    update.tags = body.tags.map((t) => t.trim()).filter(Boolean).slice(0, 20);
  }
  if (body.customFields !== undefined && body.customFields !== null) {
    update.custom_fields = body.customFields;
  }

  const { data, error } = await ctx.supabase
    .from("contacts")
    .update(update)
    .eq("organization_id", ctx.orgId)
    .eq("id", id)
    .select("id, email, notes, tags, custom_fields")
    .maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: "não encontrado" }, { status: 404 });

  return NextResponse.json({ contact: data });
}
