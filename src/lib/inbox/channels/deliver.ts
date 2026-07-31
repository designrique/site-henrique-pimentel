// Despachante de envio: escolhe o adaptador certo pelo tipo de canal.
// Cada organização usa as credenciais do seu próprio canal (config).

import type { Channel } from "../types";
import { sendWhatsAppText } from "./whatsapp";
import { sendTelegramText } from "./telegram";
import { sendInstagramText } from "./instagram";

export interface DeliveryResult {
  ok: boolean;
  simulated: boolean;
  error?: string;
  externalId?: string;
}

export interface ChannelConfig {
  token?: string;
  phone_number_id?: string;
  secret?: string;
}

export async function deliverMessage(
  channel: Channel,
  handle: string,
  text: string,
  config: ChannelConfig = {},
): Promise<DeliveryResult> {
  switch (channel) {
    case "whatsapp":
      return sendWhatsAppText(handle, text, {
        token: config.token,
        phoneNumberId: config.phone_number_id,
      });
    case "telegram":
      return sendTelegramText(handle, text, config.token);
    case "instagram":
      return sendInstagramText(handle, text, config.token);
    default:
      // webchat e outros: registrado localmente, sem envio externo.
      return { ok: true, simulated: true };
  }
}
