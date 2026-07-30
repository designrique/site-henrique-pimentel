// Webhooks de saída: entrega eventos da organização para URLs externas
// registradas, com assinatura HMAC-SHA256 para o destino validar a origem.

import { createHmac } from "node:crypto";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

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
    (e) => e.events.length === 0 || e.events.includes(event),
  );
  if (endpoints.length === 0) return;

  const body = JSON.stringify({
    event,
    organization_id: organizationId,
    created_at: new Date().toISOString(),
    data: payload,
  });

  await Promise.all(
    endpoints.map(async (endpoint) => {
      try {
        const signature = createHmac("sha256", endpoint.secret).update(body).digest("hex");
        await fetch(endpoint.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-HPChat-Event": event,
            "X-HPChat-Signature": `sha256=${signature}`,
          },
          body,
          // Não deixa um destino lento travar o servidor.
          signal: AbortSignal.timeout(8000),
        });
      } catch {
        // Entrega best-effort; um log de entregas pode ser adicionado depois.
      }
    }),
  );
}
