// Adaptador do canal Telegram (Bot API). Sem SDK: fetch direto contra
// api.telegram.org. O envio usa o token do bot; sem token, roda simulado.

import type { InboundMessage } from "../types";

// Shape parcial do Update do Telegram — só o que consumimos.
interface TelegramFrom {
  id?: number;
  first_name?: string;
  last_name?: string;
  username?: string;
}

interface TelegramUpdate {
  message?: {
    message_id?: number;
    from?: TelegramFrom;
    chat?: { id?: number };
    text?: string;
    caption?: string;
    photo?: unknown[];
    document?: { file_name?: string };
    voice?: unknown;
    video?: unknown;
  };
}

function displayName(from?: TelegramFrom): string {
  if (!from) return "Contato Telegram";
  const parts = [from.first_name, from.last_name].filter(Boolean);
  if (parts.length) return parts.join(" ");
  return from.username ? `@${from.username}` : "Contato Telegram";
}

/** Normaliza um Update do Telegram em mensagem de entrada. */
export function parseTelegramUpdate(body: unknown): InboundMessage[] {
  const update = body as TelegramUpdate;
  const msg = update.message;
  if (!msg?.chat?.id) return [];

  // O chat.id é usado como handle para poder responder depois.
  const handle = String(msg.chat.id);
  let text = msg.text ?? msg.caption ?? "";
  if (!text) {
    if (msg.photo) text = "[imagem]";
    else if (msg.document) text = `[documento] ${msg.document.file_name ?? ""}`.trim();
    else if (msg.voice) text = "[áudio]";
    else if (msg.video) text = "[vídeo]";
    else return [];
  }

  return [
    {
      channel: "telegram",
      contactHandle: handle,
      contactName: displayName(msg.from),
      text,
      externalId: msg.message_id ? String(msg.message_id) : undefined,
    },
  ];
}

export interface TelegramSendResult {
  ok: boolean;
  simulated: boolean;
  externalId?: string;
  error?: string;
}

/** Envia texto pelo Telegram (sendMessage). Sem token → simulado. */
export async function sendTelegramText(
  chatId: string,
  text: string,
  token?: string,
): Promise<TelegramSendResult> {
  const botToken = token || process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return { ok: true, simulated: true };

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    const data = (await res.json()) as {
      ok?: boolean;
      description?: string;
      result?: { message_id?: number };
    };
    if (!res.ok || !data.ok) {
      return { ok: false, simulated: false, error: data.description ?? `HTTP ${res.status}` };
    }
    return { ok: true, simulated: false, externalId: data.result?.message_id ? String(data.result.message_id) : undefined };
  } catch (err) {
    return { ok: false, simulated: false, error: String(err) };
  }
}
