import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cliente Supabase com service-role: ignora RLS e não carrega sessão de
 * usuário. Uso restrito ao servidor, em fluxos SEM sessão (ex.: o webhook do
 * WhatsApp, que a Meta chama diretamente). NUNCA exponha a service-role key ao
 * navegador.
 */
export function createSupabaseAdminClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;

  return createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

/** Resolve a organização dona de um canal a partir do id externo (provedor). */
export async function resolveOrgByChannel(
  admin: SupabaseClient,
  type: string,
  externalId: string,
): Promise<{ organizationId: string; channelId: string; config: Record<string, unknown> } | null> {
  const { data } = await admin
    .from("channels")
    .select("id, organization_id, config")
    .eq("type", type)
    .eq("external_id", externalId)
    .eq("is_active", true)
    .maybeSingle();
  if (!data) return null;
  return {
    organizationId: data.organization_id as string,
    channelId: data.id as string,
    config: (data.config as Record<string, unknown>) ?? {},
  };
}
