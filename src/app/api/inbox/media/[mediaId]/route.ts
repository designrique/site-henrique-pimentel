import { NextResponse } from "next/server";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { resolveCurrentOrg } from "@/lib/inbox/store.supabase";
import { fetchWhatsAppMedia } from "@/lib/inbox/channels/whatsapp";

export const dynamic = "force-dynamic";

interface Ctx {
  params: Promise<{ mediaId: string }>;
}

// Proxy autenticado: baixa a mídia do WhatsApp usando o token do canal do
// tenant. Sem Supabase (modo demo), não há mídia real para servir.
export async function GET(_request: Request, { params }: Ctx) {
  const { mediaId } = await params;

  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: "indisponível no modo demo" }, { status: 404 });
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "unauth" }, { status: 401 });

  const orgId = await resolveCurrentOrg(supabase, user.id);
  if (!orgId) return NextResponse.json({ error: "no_org" }, { status: 401 });

  // Token do canal WhatsApp ativo da organização.
  const { data: channel } = await supabase
    .from("channels")
    .select("config, external_id")
    .eq("organization_id", orgId)
    .eq("type", "whatsapp")
    .eq("is_active", true)
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();

  const config = (channel?.config as { token?: string }) ?? {};
  const media = await fetchWhatsAppMedia(mediaId, { token: config.token });
  if (!media.ok || !media.body) {
    return NextResponse.json({ error: media.error ?? "falha ao baixar" }, { status: 502 });
  }

  return new NextResponse(media.body, {
    status: 200,
    headers: {
      "Content-Type": media.contentType ?? "application/octet-stream",
      "Cache-Control": "private, max-age=86400",
    },
  });
}
