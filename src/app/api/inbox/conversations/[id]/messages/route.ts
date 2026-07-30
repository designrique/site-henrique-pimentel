import { NextResponse } from "next/server";
import { getInboxRepository } from "@/lib/inbox/repository";
import { sendWhatsAppText, type WhatsAppCredentials } from "@/lib/inbox/channels/whatsapp";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { resolveCurrentOrg } from "@/lib/inbox/store.supabase";

export const dynamic = "force-dynamic";

/** Busca as credenciais do canal WhatsApp ativo da organização atual. */
async function whatsAppCredentials(): Promise<WhatsAppCredentials | undefined> {
  if (!isSupabaseConfigured()) return undefined;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return undefined;
  const orgId = await resolveCurrentOrg(supabase, user.id);
  if (!orgId) return undefined;

  const { data } = await supabase
    .from("channels")
    .select("external_id, config")
    .eq("organization_id", orgId)
    .eq("type", "whatsapp")
    .eq("is_active", true)
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();
  if (!data) return undefined;

  const config = (data.config as { token?: string; phone_number_id?: string }) ?? {};
  return {
    token: config.token,
    phoneNumberId: config.phone_number_id || (data.external_id as string | null) || undefined,
  };
}

interface Ctx {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: Ctx) {
  const { id } = await params;
  const repo = await getInboxRepository();
  if (!(await repo.getConversation(id))) {
    return NextResponse.json({ error: "Conversa não encontrada" }, { status: 404 });
  }
  return NextResponse.json({ messages: await repo.listMessages(id) });
}

export async function POST(request: Request, { params }: Ctx) {
  const { id } = await params;
  const repo = await getInboxRepository();
  const conversation = await repo.getConversation(id);
  if (!conversation) {
    return NextResponse.json({ error: "Conversa não encontrada" }, { status: 404 });
  }

  const body = (await request.json().catch(() => null)) as
    | { text?: string; agentId?: string }
    | null;
  const text = body?.text?.trim();
  if (!text) {
    return NextResponse.json({ error: "texto obrigatório" }, { status: 400 });
  }

  const agentId = body?.agentId ?? "ag_hp";
  const message = await repo.appendOutbound(id, text, agentId);
  if (!message) {
    return NextResponse.json({ error: "Falha ao registrar mensagem" }, { status: 500 });
  }

  // Entrega no canal. Hoje só WhatsApp tem envio real; demais canais ficam
  // registrados localmente até ganharem seus adaptadores.
  let delivery: { simulated: boolean; error?: string } = { simulated: true };
  if (conversation.channel === "whatsapp") {
    const creds = await whatsAppCredentials();
    const result = await sendWhatsAppText(conversation.contact.handle, text, creds);
    delivery = { simulated: result.simulated, error: result.error };
    if (!result.ok) {
      return NextResponse.json(
        { message, delivery: { simulated: false, error: result.error } },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ message, delivery });
}
