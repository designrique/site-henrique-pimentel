// Autenticação da API pública por chave. Resolve a organização a partir da
// chave (via cliente admin, sem RLS) para os endpoints /api/v1/*.

import type { SupabaseClient } from "@supabase/supabase-js";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { verifyApiKey, readApiKey } from "./apikeys";

export type ApiAuth =
  | { ok: true; admin: SupabaseClient; orgId: string }
  | { ok: false; status: number; error: string };

export async function requireApiKey(request: Request): Promise<ApiAuth> {
  const admin = createSupabaseAdminClient();
  if (!admin) {
    return { ok: false, status: 503, error: "API indisponível (Supabase não configurado)" };
  }

  const raw = readApiKey(request);
  const verified = await verifyApiKey(admin, raw);
  if (!verified) {
    return { ok: false, status: 401, error: "chave de API inválida" };
  }

  return { ok: true, admin, orgId: verified.organizationId };
}
