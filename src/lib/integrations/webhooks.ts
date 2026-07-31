// Webhooks de saída: entrega eventos da organização para URLs externas
// registradas, com assinatura HMAC-SHA256 para o destino validar a origem.

import { createHmac } from "node:crypto";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

/**
 * Rejeita URLs que apontam para a própria infraestrutura (SSRF). Exige https e
 * bloqueia localhost, IPs privados e o endpoint de metadados de nuvem.
 */
export function isSafeWebhookUrl(raw: string): boolean {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return false;
  }
  if (url.protocol !== "https:") return false;

  const host = url.hostname.toLowerCase();
  if (host === "localhost" || host.endsWith(".local") || host.endsWith(".internal")) {
    return false;
  }
  // IPv6 loopback / link-local.
  if (host === "::1" || host.startsWith("fe80") || host.startsWith("fc") || host.startsWith("fd")) {
    return false;
  }
  // IPv4 privado / loopback / link-local (inclui 169.254.169.254 de metadados).
  const m = host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (m) {
    const [a, b] = [Number(m[1]), Number(m[2])];
    if (a === 10 || a === 127 || (a === 169 && b === 254)) return false;
    if (a === 192 && b === 168) return false;
    if (a === 172 && b >= 16 && b <= 31) return false;
    if (a === 0) return false;
  }
  return true;
}

export type IntegrationEvent =
  | "message.received"
  | "message.sent"
  | "deal.stage_changed"
  | "task.created";

interface EndpointRow {
  id: string;
  url: string;
  secret: string;
  events: string[];
}

interface DeliveryResult {
  ok: boolean;
  code?: number;
  error?: string;
}

/** Uma tentativa de entrega assinada. Timeout curto para não travar o fluxo. */
async function deliverOnce(url: string, secret: string, body: string): Promise<DeliveryResult> {
  try {
    const signature = createHmac("sha256", secret).update(body).digest("hex");
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-HPChat-Event": (JSON.parse(body) as { event?: string }).event ?? "",
        "X-HPChat-Signature": `sha256=${signature}`,
      },
      body,
      signal: AbortSignal.timeout(5000),
    });
    return { ok: res.ok, code: res.status, error: res.ok ? undefined : `HTTP ${res.status}` };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

/**
 * Dispara um evento para todos os endpoints ativos da organização inscritos
 * nele. Best-effort: falhas individuais não interrompem o fluxo principal.
 * Um endpoint com `events` vazio recebe todos os eventos.
 */
export async function dispatchEvent(
  organizationId: string,
  event: IntegrationEvent,
  payload: Record<string, unknown>,
): Promise<void> {
  const admin = createSupabaseAdminClient();
  if (!admin) return;

  const { data } = await admin
    .from("webhook_endpoints")
    .select("id, url, secret, events")
    .eq("organization_id", organizationId)
    .eq("is_active", true);

  const endpoints = ((data ?? []) as EndpointRow[]).filter(
    (e) => (e.events.length === 0 || e.events.includes(event)) && isSafeWebhookUrl(e.url),
  );
  if (endpoints.length === 0) return;

  const envelope = {
    event,
    organization_id: organizationId,
    created_at: new Date().toISOString(),
    data: payload,
  };
  const body = JSON.stringify(envelope);

  await Promise.all(
    endpoints.map(async (endpoint) => {
      const result = await deliverOnce(endpoint.url, endpoint.secret, body);
      // Registra a entrega (sucesso ou falha) para auditoria e reenvio.
      await admin.from("webhook_deliveries").insert({
        organization_id: organizationId,
        endpoint_id: endpoint.id,
        event,
        status: result.ok ? "success" : "failed",
        attempts: 1,
        response_code: result.code ?? null,
        error: result.error ?? null,
        payload: envelope,
      });
    }),
  );
}

/**
 * Reenvia uma entrega anterior (sucesso ou falha) para o mesmo endpoint,
 * atualizando o registro com o resultado e incrementando as tentativas.
 */
export async function retryDelivery(
  organizationId: string,
  deliveryId: string,
): Promise<{ ok: boolean; error?: string }> {
  const admin = createSupabaseAdminClient();
  if (!admin) return { ok: false, error: "service-role indisponível" };

  const { data: delivery } = await admin
    .from("webhook_deliveries")
    .select("id, endpoint_id, attempts, payload")
    .eq("organization_id", organizationId)
    .eq("id", deliveryId)
    .maybeSingle();
  if (!delivery?.endpoint_id) return { ok: false, error: "entrega não encontrada" };

  const { data: endpoint } = await admin
    .from("webhook_endpoints")
    .select("url, secret")
    .eq("organization_id", organizationId)
    .eq("id", delivery.endpoint_id)
    .maybeSingle();
  if (!endpoint) return { ok: false, error: "endpoint removido" };

  const body = JSON.stringify(delivery.payload);
  const result = await deliverOnce(endpoint.url as string, endpoint.secret as string, body);

  await admin
    .from("webhook_deliveries")
    .update({
      status: result.ok ? "success" : "failed",
      attempts: (delivery.attempts as number) + 1,
      response_code: result.code ?? null,
      error: result.error ?? null,
      last_attempt_at: new Date().toISOString(),
    })
    .eq("id", deliveryId);

  return { ok: result.ok, error: result.error };
}
