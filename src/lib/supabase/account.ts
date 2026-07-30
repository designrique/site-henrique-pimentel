import { createSupabaseServerClient, isSupabaseConfigured } from "./server";
import { resolveCurrentOrg } from "@/lib/inbox/store.supabase";

export interface OrgSummary {
  id: string;
  name: string;
  slug: string;
  role: string;
}

export type SessionContext =
  | { mode: "demo" }
  | { mode: "supabase"; user: null }
  | {
      mode: "supabase";
      user: { id: string; email: string | null; fullName: string };
      org: OrgSummary | null;
    };

/**
 * Resolve o contexto de sessão para páginas/handlers:
 * - "demo": Supabase não configurado (roda com dados em memória).
 * - autenticado sem org: precisa passar pelo onboarding.
 * - autenticado com org: pronto para usar o inbox do tenant.
 */
export async function getSessionContext(): Promise<SessionContext> {
  if (!isSupabaseConfigured()) return { mode: "demo" };

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { mode: "supabase", user: null };

  const orgId = await resolveCurrentOrg(supabase, user.id);
  let org: OrgSummary | null = null;
  if (orgId) {
    const { data } = await supabase
      .from("organizations")
      .select("id, name, slug, organization_members!inner(role)")
      .eq("id", orgId)
      .maybeSingle();
    if (data) {
      const members = data.organization_members as Array<{ role: string }> | null;
      org = {
        id: data.id as string,
        name: data.name as string,
        slug: data.slug as string,
        role: members?.[0]?.role ?? "agent",
      };
    }
  }

  const fullName =
    (user.user_metadata?.full_name as string | undefined) ?? user.email ?? "Usuário";

  return {
    mode: "supabase",
    user: { id: user.id, email: user.email ?? null, fullName },
    org,
  };
}
