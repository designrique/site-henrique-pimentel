import { NextResponse } from "next/server";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ notifications: [], unread: 0, demo: true });
  }
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ notifications: [], unread: 0 });

  const { data } = await supabase
    .from("notifications")
    .select("id, type, title, body, link, read_at, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(30);

  const notifications = data ?? [];
  const unread = notifications.filter((n) => !n.read_at).length;
  return NextResponse.json({ notifications, unread });
}

// Marca notificações como lidas: { ids: [...] } ou { all: true }.
export async function POST(request: Request) {
  if (!isSupabaseConfigured()) return NextResponse.json({ ok: true });
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "unauth" }, { status: 401 });

  const body = (await request.json().catch(() => null)) as
    | { ids?: string[]; all?: boolean }
    | null;

  let q = supabase
    .from("notifications")
    .update({ read_at: new Date().toISOString() })
    .eq("user_id", user.id)
    .is("read_at", null);
  if (!body?.all && body?.ids?.length) {
    q = q.in("id", body.ids);
  }
  const { error } = await q;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
