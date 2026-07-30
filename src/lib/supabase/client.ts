import { createBrowserClient } from "@supabase/ssr";

/**
 * Cliente Supabase para o navegador (componentes "use client").
 * Aponta para a sua instância self-hosted via variáveis públicas.
 */
export function createSupabaseBrowserClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
