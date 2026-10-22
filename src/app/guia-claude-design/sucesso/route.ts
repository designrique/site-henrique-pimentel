import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySession } from "@/lib/lead-guide/gate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Página de sucesso pós-download, só com sessão válida (mesmo gate do PDF).
 * O download dispara por <iframe> em background: navegação direta ao /baixar
 * sem a sessão no pedido voltava 307 para o formulário (renderizado dark).
 */
export async function GET() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  const payload = verifySession(token, process.env.GUIDE_SESSION_SECRET);
  if (!payload) {
    return new Response(null, { status: 307, headers: { Location: "/guia-claude-design" } });
  }

  const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Download iniciado</title>
<style>
  :root { color-scheme: light; }
  body { margin:0; min-height:100dvh; display:flex; align-items:center; justify-content:center;
         background:#faf9f6; color:#1c1917; font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
  .card { max-width: 30rem; margin: 1.25rem; padding: 2rem; border:1px solid #e7e5e4; border-radius: 16px; background:#fff; text-align:center; }
  h1 { font-size:1.35rem; font-weight:700; margin:0 0 .75rem; }
  p { font-size:.95rem; line-height:1.6; color:#57534e; margin:0; }
  .links { margin-top:1.5rem; display:flex; gap:.75rem; justify-content:center; flex-wrap:wrap; }
  a { font-size:.9rem; color:#2563eb; text-decoration:underline; text-underline-offset:3px; }
  iframe { display:none; }
  @media (prefers-reduced-motion: no-preference) { .card { animation: fade .25s ease-out; } }
  @keyframes fade { from { opacity:0; transform: translateY(4px); } to { opacity:1; } }
</style>
</head>
<body>
<main class="card">
  <h1>O download do seu guia foi iniciado.</h1>
  <p>Verifique a pasta de Downloads do seu smartphone.</p>
  <div class="links">
    <a href="/guia-claude-design/baixar">Baixar de novo</a>
    <a href="/guia-claude-design/conteudo">Ler online</a>
  </div>
</main>
<iframe src="/guia-claude-design/baixar" title="download do guia"></iframe>
</body>
</html>`;
  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-store, max-age=0, must-revalidate",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
      "Referrer-Policy": "no-referrer",
    },
  });
}
