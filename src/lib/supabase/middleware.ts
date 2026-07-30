import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

/**
 * Atualiza a sessão do Supabase a cada requisição (refresh de token) e a
 * propaga nos cookies da resposta. Não força login aqui — a proteção de rotas
 * é feita nas páginas/handlers, para o modo demo (sem Supabase) seguir
 * funcionando.
 */
export async function updateSession(request: NextRequest) {
  const response = NextResponse.next({ request });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) return response; // modo demo: nada a fazer

  const supabase = createServerClient(url, anon, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        for (const { name, value, options } of cookiesToSet) {
          response.cookies.set(name, value, options);
        }
      },
    },
  });

  // Necessário para revalidar/renovar o token de acesso.
  await supabase.auth.getUser();

  return response;
}
