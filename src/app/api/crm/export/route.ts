import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";

export const dynamic = "force-dynamic";

// Escapa um valor para uma célula CSV (RFC 4180).
function cell(value: unknown): string {
  const s = value === null || value === undefined ? "" : String(value);
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function toCsv(headers: string[], rows: Array<Array<unknown>>): string {
  const lines = [headers.map(cell).join(",")];
  for (const row of rows) lines.push(row.map(cell).join(","));
  return "﻿" + lines.join("\r\n"); // BOM p/ acentos no Excel
}

// GET /api/crm/export?type=contacts|conversations|deals
export async function GET(request: Request) {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }
  const { supabase, orgId } = ctx;
  const type = new URL(request.url).searchParams.get("type") ?? "contacts";

  let headers: string[] = [];
  let rows: Array<Array<unknown>> = [];
  let filename = "export.csv";

  if (type === "contacts") {
    const { data } = await supabase
      .from("contacts")
      .select("name, handle, channel, email, tags, created_at")
      .eq("organization_id", orgId)
      .order("created_at", { ascending: false });
    headers = ["Nome", "Contato", "Canal", "E-mail", "Etiquetas", "Criado em"];
    rows = (data ?? []).map((c) => [
      c.name,
      c.handle,
      c.channel,
      c.email ?? "",
      (c.tags as string[] | null)?.join("; ") ?? "",
      c.created_at,
    ]);
    filename = "contatos.csv";
  } else if (type === "conversations") {
    const { data } = await supabase
      .from("conversations")
      .select("channel, status, unread_count, last_message_at, last_message_preview, contact:contacts(name)")
      .eq("organization_id", orgId)
      .order("last_message_at", { ascending: false });
    headers = ["Cliente", "Canal", "Status", "Não lidas", "Última mensagem", "Prévia"];
    rows = (data ?? []).map((c) => [
      (c.contact as { name?: string } | null)?.name ?? "",
      c.channel,
      c.status,
      c.unread_count,
      c.last_message_at,
      c.last_message_preview,
    ]);
    filename = "conversas.csv";
  } else if (type === "deals") {
    const { data } = await supabase
      .from("deals")
      .select("title, value, currency, stage:pipeline_stages(name), contact:contacts(name), created_at")
      .eq("organization_id", orgId)
      .order("created_at", { ascending: false });
    headers = ["Negócio", "Valor", "Moeda", "Estágio", "Cliente", "Criado em"];
    rows = (data ?? []).map((d) => [
      d.title,
      d.value,
      d.currency,
      (d.stage as { name?: string } | null)?.name ?? "",
      (d.contact as { name?: string } | null)?.name ?? "",
      d.created_at,
    ]);
    filename = "negocios.csv";
  } else {
    return NextResponse.json({ error: "tipo inválido" }, { status: 400 });
  }

  return new NextResponse(toCsv(headers, rows), {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
