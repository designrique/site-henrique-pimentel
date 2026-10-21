import nodemailer from "nodemailer";

type Env = Record<string, string | undefined>;

export interface MailMessage {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export type MailResult = { ok: true; messageId: string } | { ok: false; error: string };

export interface Mailer {
  name: "smtp" | "unconfigured";
  send(message: MailMessage): Promise<MailResult>;
}

type TransportFactory = (options: Record<string, unknown>) => { sendMail: (message: Record<string, unknown>) => Promise<{ messageId?: string }> };

/**
 * Mailer de entrega usando o SMTP ja verificado do provedor.
 * Sem configuracao, falha fechado: nunca finge envio.
 */
export function createMailer(env: Env, deps?: { createTransport?: TransportFactory }): Mailer {
  const host = env.SMTP_HOST?.trim();
  const user = env.SMTP_USER?.trim();
  const pass = env.SMTP_PASSWORD;
  const from = env.EMAIL_FROM?.trim() || user;
  if (!host || !user || !pass || !from) {
    return { name: "unconfigured", async send() { return { ok: false, error: "mail_not_configured" }; } };
  }
  const port = Number(env.SMTP_PORT) || 587;
  const options = { host, port, secure: port === 465, auth: { user, pass } };
  const createTransport = deps?.createTransport ?? (nodemailer.createTransport as unknown as TransportFactory);
  const transport = createTransport(options);
  return {
    name: "smtp",
    async send(message) {
      try {
        const info = await transport.sendMail({ from, ...message });
        const messageId = typeof info?.messageId === "string" ? info.messageId : "";
        // ponytail: sem message-id do provedor a entrega e incerta; reportar como falha em vez de sucesso.
        return messageId ? { ok: true, messageId } : { ok: false, error: "mail_unconfirmed" };
      } catch {
        return { ok: false, error: "mail_send_failed" };
      }
    },
  };
}
