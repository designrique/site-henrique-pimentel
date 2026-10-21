# Plano - Guia Claude Design + captura (DIGIF-165)

Data: 2026-10-21
Worktree Unico (Orca): /home/orca/orca/workspaces/hp-site/claude-design-guide
Repo: /root/hp-site (repoId b41df55d-0f73-486d-a436-fbd1efb6d784)
Branch: designrique/claude-design-guide (base 6373f046b3d615cc74de82afdde3d3f2ed99a9dd)
Issue: DIGIF-165 (in_progress, sem assignee de proposito, um unico escritor neste canal)
Escopo: EXCLUSIVO hp-site. Nao tocar em /root/site-henrique-pimentel nem /root/hpchat.

## Objetivo

Entregar em pt-BR:

1. Pagina publica de captura (nome, e-mail, WhatsApp) que libera um guia pratico
   sobre automacao da geracao de postagens com Claude Design.
2. Guia completo/pratico em rota privada (noindex), acessivel so apos persistencia
   em CRM e cookie de sessao HttpOnly assinado.
3. Gate server-side seguro (validacao, consentimento, rate limit, idempotencia,
   timeout, falha fechada) com adapter de CRM integravel.
4. Documentacao de configuracao pendente (contrato DFChat e credenciais nao
   confirmados). Sem integracao real, sem credenciais reais, sem fake success.

## Requisitos (fonte: issue DIGIF-165 + contexto do parent)

- Validacao server-side: nome, e-mail, WhatsApp BR/E164.
- Consentimento contextual obrigatorio; marketing separado opcional.
- Rate limiting + bounded request (tamanho de corpo) + timeouts upstream.
- Idempotencia/dedupe no submit e no retry (nao persiste duas vezes).
- Falha na persistencia NAO libera o guia; erros preservam os dados no cliente.
- Cookie de sessao HttpOnly assinado (HMAC); sem dados pessoais em URL/localStorage/logs.
- Loading/double-click guard; feedback acessivel (teclado + foco).
- Guia nao pode ir para bundle publico, pagina estatica, espelho ou llms.
- Sem deps novas desnecessarias; stdlib/node:test.
- UI fiel aos tokens reais (globals.css) e componentes do hp-site.

## Mudanca de requisito (explicita)

`next.config.ts` deste worktree tinha `output: "export"` (deploy estatico Cloudflare
Pages). API route + leitura de cookie exigem runtime Node. Removemos `output: "export"`
apenas NESTE worktree para habilitar o gate real server-side. `trailingSlash` e
`images.unoptimized` permanecem. O deploy real NAO e alterado por este trabalho.

## Arquitetura (arquivos)

- `src/lib/lead-guide/gate.ts` (novo) - nucleo puro server-side, importa so builtins
  do Node: validacao, sessao HMAC, rate limiter, dedupe, adapter de CRM (Http/fixture/
  unconfigured) e `handleSubmit`. Testavel fora do Next (harness framework-free).
- `src/app/api/guia/route.ts` (novo) - handler POST fino: content-type/tamanho,
  JSON, singletons bounded (limiter/dedupe), le env, chama handleSubmit, Set-Cookie.
- `src/app/guia-claude-design/page.tsx` (novo) - teaser publico + form.
- `src/app/guia-claude-design/capture-form.tsx` (novo) - client component (estados
  idle/loading/error/success, aria-live, double-click guard, dados preservados).
- `src/app/guia-claude-design/conteudo/page.tsx` (novo) - guia privado, verifica
  cookie assinado; noindex; redirect para a captura se invalido.
- `src/app/guia-claude-design/index.md/route.ts` (novo) - espelho TEASER (no vaza guia).
- `src/content/guides/claude-design.tsx` (novo) - conteudo do guia (pt-BR, fontes oficiais).
- `src/app/sitemap.ts` - so a rota publica de captura (teaser).
- `src/content/mirrors/index.ts` - mirror TEASER da captura.
- `public/llms.txt` - mencao TEASER publica.
- `tests/gate.test.ts` (novo) - node:test (RED -> GREEN).
- `docs/superpowers/plans/2026-10-21-claude-design-guide.md` (este).
- `docs/evidence/DIGIF-165/` - evidencias (RED/GREEN, design read, config pendente, QA).

## Decisoes (ponytail)

- Sem bibliotecas novas: validacao/HMAC/hash/rate-limit/dedupe com `node:crypto` e Map.
- Um arquivo para o nucleo evita resolver alias `@/` no runner nativo do `node --test`.
- Cookie guarda apenas um `sid` aleatorio + exp (sem PII).
- `org_id`/tenant vem SEMPRE do servidor (env), nunca do cliente (anti-spoof).
- Fixture de CRM so existe para QA local, marcada TESTE, nunca prova CRM real.

## Tarefas (TDD)

1. RED: `tests/gate.test.ts` cobrindo validacao, sessao, rate limit, dedupe,
   adapter (unconfigured/falha/sucesso), spoof de tenant, double submit, falha fechada.
2. GREEN: implementar `gate.ts` minimo ate passar.
3. Handler `/api/guia` + pagina publica + form + pagina privada + guia + espelho.
4. `npm run lint`, `npm run typecheck`, `npm run build` (cgroup isolado).
5. QA de browser desktop/mobile com servidor local + adapter fixture (rotulado TESTE).
6. Commit local (sem push) e evidencias.

## Fora de escopo / nao fazer

- Nao publicar, nao push, nao merge, nao comentar/fechar issue.
- Nao alterar deploy real, nao mudar configs globais, nao tocar outros repos.
- Nao prometer API publica nativa, scheduler ou autopublish sem fonte oficial.
