// Adaptador do canal WhatsApp seguindo a convenção da Meta WhatsApp Cloud API.
// Sem SDK externo: usa fetch direto contra o Graph API. Se as variáveis de
// ambiente não estiverem configuradas, o envio opera em modo simulado (útil em
// dev e para demonstração), sem quebrar o fluxo.

import type { InboundMessage } from "../types";

const GRAPH_VERSION = "v21.0";

interface WhatsAppEnv {
  token: string;
  phoneNumberId: string;
  verifyToken: string;
}

function readEnv(): Partial<WhatsAppEnv> {
  return {
    token: process.env.WHATSAPP_TOKEN,
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID,
    verifyToken: process.env.WHATSAPP_VERIFY_TOKEN,
  };
}

/**
 * Handshake de verificação do webhook (GET). A Meta chama a URL com
 * hub.mode=subscribe, hub.verify_token e hub.challenge. Devolvemos o challenge
 * quando o token bate.
 */
export function verifyWebhook(params: URLSearchParams): { ok: boolean; challenge?: string } {
  const mode = params.get("hub.mode");
  const token = params.get("hub.verify_token");
  const challenge = params.get("hub.challenge");
  const { verifyToken } = readEnv();

  // Em dev sem token configurado, aceita para facilitar o teste local.
  const expected = verifyToken ?? "dev-verify-token";
  if (mode === "subscribe" && token === expected && challenge) {
    return { ok: true, challenge };
  }
  return { ok: false };
}

// Shape parcial do payload de webhook da Cloud API — só o que consumimos.
interface WhatsAppWebhookBody {
  entry?: Array<{
    changes?: Array<{
      value?: {
        metadata?: { phone_number_id?: string; display_phone_number?: string };
        contacts?: Array<{ profile?: { name?: string }; wa_id?: string }>;
        messages?: Array<{
          from?: string;
          id?: string;
          timestamp?: string;
          type?: string;
          text?: { body?: string };
        }>;
      };
    }>;
  }>;
}

/** Normaliza o payload do webhook em mensagens de entrada do nosso domínio. */
export function parseInboundWebhook(body: unknown): InboundMessage[] {
  const parsed = body as WhatsAppWebhookBody;
  const out: InboundMessage[] = [];

  for (const entry of parsed.entry ?? []) {
    for (const change of entry.changes ?? []) {
      const value = change.value;
      if (!value?.messages) continue;
      const profileName = value.contacts?.[0]?.profile?.name ?? "";
      const channelExternalId = value.metadata?.phone_number_id;

      for (const msg of value.messages) {
        // Só tratamos texto aqui; mídia/áudio ficam para uma iteração futura.
        if (msg.type && msg.type !== "text") continue;
        const text = msg.text?.body;
        const from = msg.from;
        if (!text || !from) continue;

        out.push({
          channel: "whatsapp",
          contactHandle: from.startsWith("+") ? from : `+${from}`,
          contactName: profileName,
          text,
          externalId: msg.id,
          at: msg.timestamp
            ? new Date(Number(msg.timestamp) * 1000).toISOString()
            : undefined,
          channelExternalId,
        });
      }
    }
  }

  return out;
}

export interface SendResult {
  ok: boolean;
  externalId?: string;
  simulated: boolean;
  error?: string;
}

export interface WhatsAppCredentials {
  token?: string;
  phoneNumberId?: string;
}

/**
 * Envia uma mensagem de texto pelo WhatsApp. Usa as credenciais do canal
 * (multi-tenant) quando fornecidas; senão cai nas variáveis de ambiente. Sem
 * nenhuma credencial, retorna sucesso simulado para não travar o atendimento.
 */
export async function sendWhatsAppText(
  to: string,
  text: string,
  creds?: WhatsAppCredentials,
): Promise<SendResult> {
  const fallback = readEnv();
  const env = {
    token: creds?.token || fallback.token,
    phoneNumberId: creds?.phoneNumberId || fallback.phoneNumberId,
  };
  if (!env.token || !env.phoneNumberId) {
    return { ok: true, simulated: true };
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${env.phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: to.replace(/^\+/, ""),
          type: "text",
          text: { preview_url: false, body: text },
        }),
      },
    );

    if (!res.ok) {
      const detail = await res.text();
      return { ok: false, simulated: false, error: `HTTP ${res.status}: ${detail}` };
    }

    const data = (await res.json()) as { messages?: Array<{ id?: string }> };
    return { ok: true, simulated: false, externalId: data.messages?.[0]?.id };
  } catch (err) {
    return { ok: false, simulated: false, error: String(err) };
  }
}
