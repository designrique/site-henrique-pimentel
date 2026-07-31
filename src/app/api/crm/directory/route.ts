import { NextResponse } from "next/server";
import { requireOrgContext, orgErrorStatus } from "@/lib/supabase/org";

export const dynamic = "force-dynamic";

// Contatos (clientes) e atendentes da organização, para os seletores de
// negócios e tarefas.
export async function GET() {
  const ctx = await requireOrgContext();
  if (!ctx.ok) {
    if (ctx.reason === "demo") {
      return NextResponse.json({ contacts: [], members: [], demo: true });
    }
    return NextResponse.json({ error: ctx.reason }, { status: orgErrorStatus(ctx.reason) });
  }

  const [{ data: contacts }, { data: members }] = await Promise.all([
    ctx.supabase
      .from("contacts")
      .select("id, name, handle")
      .eq("organization_id", ctx.orgId)
      .order("name", { ascending: true })
      .limit(500),
    ctx.supabase
      .from("organization_members")
      .select("user_id, profiles(id, full_name)")
      .eq("organization_id", ctx.orgId),
  ]);

  const memberList = ((members ?? []) as unknown as Array<{
    user_id: string;
    profiles: { id: string; full_name: string } | null;
  }>).map((m) => ({
    id: m.user_id,
    name: m.profiles?.full_name || "Atendente",
  }));

  return NextResponse.json({ contacts: contacts ?? [], members: memberList });
}
