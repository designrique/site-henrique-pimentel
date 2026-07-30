// Adaptador do canal Instagram (Messaging via Meta Graph API). Segue o formato
// de webhook do Messenger Platform. Envio via Graph API; sem token → simulado.

import type { InboundMessage } from "../types";

const GRAPH_VERSION = "v21.0";

interface InstagramWebhookBody {
  entry?: Array<{
    id?: string; // id da conta IG do negócio → roteia para o tenant
    messaging?: Array<{
      sender?: { id?: string };
      recipient?: { id?: string };
      message?: {
        mid?: string;
        text?: string;
        attachments?: Array<{ type?: string }>;
      };
    }>;
  }>;
}

/** Normaliza o webhook do Instagram em mensagens de entrada. */
export function parseInstagramWebhook(body: unknown): InboundMessage[] {
  const parsed = body as InstagramWebhookBody;
  const out: InboundMessage[] = [];

  for (const entry of parsed.entry ?? []) {
    const igAccountId = entry.id;
    for (const event of entry.messaging ?? []) {
      const senderId = event.sender?.id;
      const msg = event.message;
      if (!senderId || !msg) continue;

      let text = msg.text ?? "";
      if (!text && msg.attachments?.length) {
        text = `[${msg.attachments[0]?.type ?? "anexo"}]`;
      }
      if (!text) continue;

      out.push({
        channel: "instagram",
        contactHandle: senderId,
        contactName: "",
        text,
        externalId: msg.mid,
        channelExternalId: igAccountId,
      });
    }
  }

  return out;
}

export interface InstagramSendResult {
  ok: boolean;
  simulated: boolean;
  externalId?: string;
  error?: string;
}

/** Envia texto pelo Instagram (Graph API /messages). Sem token → simulado. */
export async function sendInstagramText(
  recipientId: string,
  text: string,
  token?: string,
): Promise<InstagramSendResult> {
  const accessToken = token || process.env.INSTAGRAM_TOKEN;
  if (!accessToken) return { ok: true, simulated: true };

  try {
    const res = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/me/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient: { id: recipientId },
        message: { text },
      }),
    });
    const data = (await res.json()) as {
      message_id?: string;
      error?: { message?: string };
    };
    if (!res.ok || data.error) {
      return { ok: false, simulated: false, error: data.error?.message ?? `HTTP ${res.status}` };
    }
    return { ok: true, simulated: false, externalId: data.message_id };
  } catch (err) {
    return { ok: false, simulated: false, error: String(err) };
  }
}

/** Verificação de webhook (mesmo padrão hub.* da Meta). */
export function verifyInstagramWebhook(params: URLSearchParams): {
  ok: boolean;
  challenge?: string;
} {
  const mode = params.get("hub.mode");
  const token = params.get("hub.verify_token");
  const challenge = params.get("hub.challenge");
  const expected = process.env.INSTAGRAM_VERIFY_TOKEN ?? process.env.WHATSAPP_VERIFY_TOKEN ?? "dev-verify-token";
  if (mode === "subscribe" && token === expected && challenge) {
    return { ok: true, challenge };
  }
  return { ok: false };
}
