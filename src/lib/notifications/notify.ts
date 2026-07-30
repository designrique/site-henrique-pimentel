// Cria uma notificação (UI) e envia o e-mail correspondente ao destinatário.
// Server-only: usa o cliente admin para inserir e para ler o e-mail do usuário.

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { sendEmail } from "./email";

export interface NotifyInput {
  organizationId: string;
  userId: string;
  type?: string;
  title: string;
  body?: string;
  /** Caminho relativo no app (ex.: /atendimento/tarefas). */
  link?: string;
  /** Envia e-mail além da notificação de UI. Padrão: true. */
  email?: boolean;
}

export async function notifyUser(input: NotifyInput): Promise<void> {
  const admin = createSupabaseAdminClient();
  if (!admin) return; // sem service-role não há como notificar server-side

  // 1) Notificação de UI
  await admin.from("notifications").insert({
    organization_id: input.organizationId,
    user_id: input.userId,
    type: input.type ?? "info",
    title: input.title,
    body: input.body ?? "",
    link: input.link ?? null,
  });

  if (input.email === false) return;

  // 2) E-mail — busca o endereço do destinatário (somente admin lê auth.users)
  const { data } = await admin.auth.admin.getUserById(input.userId);
  const to = data?.user?.email;
  if (!to) return;

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "";
  const href = input.link ? `${appUrl}${input.link}` : appUrl;

  await sendEmail({
    to,
    subject: input.title,
    html: emailTemplate(input.title, input.body ?? "", href),
  });
}

function emailTemplate(title: string, body: string, href: string): string {
  const cta = href
    ? `<p style="margin:24px 0 0"><a href="${href}" style="background:#1E40AF;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;font-size:14px">Abrir no hpchat</a></p>`
    : "";
  return `<div style="font-family:system-ui,-apple-system,sans-serif;max-width:480px;margin:0 auto;color:#0F172A">
  <h2 style="font-size:18px;margin:0 0 8px">${escapeHtml(title)}</h2>
  <p style="font-size:14px;color:#475569;margin:0;white-space:pre-wrap">${escapeHtml(body)}</p>
  ${cta}
  <hr style="border:none;border-top:1px solid #E2E8F0;margin:24px 0" />
  <p style="font-size:12px;color:#94A3B8;margin:0">hpchat — atendimento multicanal</p>
</div>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
