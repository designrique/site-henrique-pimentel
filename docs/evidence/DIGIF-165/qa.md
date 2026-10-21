# Evidencias de QA - DIGIF-165

Servidor de preview local (producao Next, runtime Node): http://127.0.0.1:3105
Worktree: /home/orca/orca/workspaces/hp-site/claude-design-guide
Upstream de CRM durante o QA: adapter FIXTURE (TESTE). Ele apenas grava um JSONL
local; NAO prova persistencia em CRM real.

## Gate (curl, contra o servidor real)

| Cenario | Resultado observado |
|---|---|
| GET /guia-claude-design/conteudo/ sem cookie | 307 redirect para /guia-claude-design/ |
| POST /api/guia/ invalido | 400 {"error":"invalid","errors":{name,email,whatsapp,consent}} |
| POST /api/guia/ valido | 200 {"ok":true} + Set-Cookie hp_guia_session=...; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800; Secure |
| GET /conteudo/ com cookie valido | 200, HTML com o conteudo do guia (84 KB) |
| Cookie adulterado | 307 redirect (sessao invalida) |
| Rate limit (rajada) | 200 200 200 429 429 429 429 |
| Espelho /guia-claude-design/index.md | text/plain, X-Robots-Tag index; 43 linhas; zero conteudo do guia |
| Pagina publica /guia-claude-design/ | 200; sem nenhuma secao do guia; apenas teaser + formulario |
| robots: teaser | index, follow |
| robots: rota privada | noindex, nofollow, nocache |
| Fixture (TESTE) gravou o lead | whatsapp normalizado para +5581999998888, sem orgId/tenant |

## Nao vazamento (artefatos de build)

- Nenhuma frase do guia aparece em .next/static (bundles de cliente): 0 ocorrencias.
- Nenhuma frase do guia no HTML prerenderizado da pagina publica: 0 ocorrencias.
- Conteudo do guia vive apenas no chunk SSR: .next/server/chunks/ssr/src_content_guides_claude-design_tsx_*.js
- Espelho e llms.txt trazem apenas teaser publico.
- Log do servidor nao contem e-mail nem telefone do lead.

## QA de browser (desktop 1440x900 e mobile 390x844)

| Checagem | Resultado |
|---|---|
| Envio invalido: alerta acessivel visivel | "Confira os campos destacados e envie novamente." |
| Foco move para o alerta apos erro | ativo com role=alert |
| Dados preservados apos erro | nome mantido no campo |
| aria-invalid no campo com erro | true |
| Envio valido redireciona | pathname = /guia-claude-design/conteudo/ |
| Guia acessivel apos liberar | h1 correto, 17 secoes, prompt presente |
| Sem cookie: rota privada | redireciona para a captura |
| Sem scroll horizontal (desktop) | scrollWidth 1425 <= 1440 |
| Sem scroll horizontal (mobile) | scrollWidth 390 == 390 |
| Header mobile em uma linha, altura | uma linha, 65 px (<= 80) |
| Duplo/triplo clique no submit | 1 registro no upstream (guard sincrono + reserva) |

Screenshots: qa-desktop-captura.png, qa-desktop-guia.png, qa-mobile-captura.png, qa-mobile-guia.png.

## Como reproduzir o servidor de QA

Variaveis usadas no preview (nenhuma credencial real; o segredo e efemero e nao esta no repo):

- GUIDE_SESSION_SECRET=<valor de desenvolvimento, fora do repo>
- GUIDE_CRM_MODE=fixture, GUIDE_CRM_ALLOW_FIXTURE=1, GUIDE_CRM_FIXTURE_FILE=<jsonl local>
- PORT=3105, HOSTNAME=127.0.0.1

## Limitacoes do QA

- O upstream FIXTURE nao testa autenticacao, contrato nem idempotencia do CRM real.
- O adapter http foi coberto por teste unitario (monta com endpoint+token+org), mas nao
  foi exercitado contra um servico real porque o contrato DFChat ainda nao foi confirmado.
- Rate limit e em memoria do processo; com multiplas instancias, migrar para store externo.
