// Envio de e-mail sem dependências externas: usa a API do Resend via fetch
// quando configurada; senão opera em modo simulado (não trava o fluxo).
// Trocar por SMTP/outro provedor é só implementar `sendEmail`.

export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface EmailResult {
  ok: boolean;
  simulated: boolean;
  id?: string;
  error?: string;
}

export async function sendEmail(msg: EmailMessage): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || "hpchat <no-reply@hpchat.local>";
  if (!apiKey) return { ok: true, simulated: true };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: msg.to,
        subject: msg.subject,
        html: msg.html,
        text: msg.text ?? stripHtml(msg.html),
      }),
    });
    const data = (await res.json().catch(() => ({}))) as { id?: string; message?: string };
    if (!res.ok) {
      return { ok: false, simulated: false, error: data.message ?? `HTTP ${res.status}` };
    }
    return { ok: true, simulated: false, id: data.id };
  } catch (err) {
    return { ok: false, simulated: false, error: String(err) };
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
