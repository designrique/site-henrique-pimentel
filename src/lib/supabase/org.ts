import type { SupabaseClient } from "@supabase/supabase-js";
import { createSupabaseServerClient, isSupabaseConfigured } from "./server";
import { resolveCurrentOrg } from "@/lib/inbox/store.supabase";

export type OrgContext =
  | { ok: true; supabase: SupabaseClient; orgId: string; userId: string }
  | { ok: false; reason: "demo" | "unauth" | "no_org" };

/**
 * Contexto de organização autenticado para rotas de API do CRM.
 * Centraliza a resolução de sessão + tenant usada em vários handlers.
 */
export async function requireOrgContext(): Promise<OrgContext> {
  if (!isSupabaseConfigured()) return { ok: false, reason: "demo" };

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { ok: false, reason: "unauth" };

  const orgId = await resolveCurrentOrg(supabase, user.id);
  if (!orgId) return { ok: false, reason: "no_org" };

  return { ok: true, supabase, orgId, userId: user.id };
}

/** Resposta HTTP padrão quando o contexto não está disponível. */
export function orgErrorStatus(reason: "demo" | "unauth" | "no_org"): number {
  return reason === "demo" ? 400 : 401;
}
