# hpchat — Handoff (continuar no VSCode)

SaaS de atendimento multicanal com CRM, automações e integrações.
Código autoral. Este documento é o ponto de partida para retomar o projeto.

## 1. Onde está o código
- **Repositório principal:** `designrique/hpchat`, branch **`main`** (contém tudo).
- Espelho: `designrique/site-henrique-pimentel`, branch `claude/copiar-chatcase-sistema-9994h6`.

```bash
git clone https://github.com/designrique/hpchat.git
cd hpchat
pnpm install
pnpm dev            # http://localhost:3000 — roda em MODO DEMO sem Supabase
```

## 2. Stack
Next.js **16.2.12** (App Router) · React 19 · Tailwind 4 · TypeScript ·
Supabase self-hosted (Postgres + Auth + RLS + Realtime) ·
Deploy Cloudflare Workers via OpenNext (`@opennextjs/cloudflare`).

**Scripts:** `pnpm dev | build | lint | cf:preview | cf:deploy | cf:typegen`

## 3. Modo demo vs. real
Sem `NEXT_PUBLIC_SUPABASE_*`, o app usa um **repositório em memória** (dados de
exemplo) — bom para desenvolver a UI. Com as variáveis, usa o Supabase real
(multi-tenant, RLS). Seletor em `src/lib/inbox/repository.ts` (`getInboxRepository`).

## 4. Mapa do código (`src/`)
```
app/atendimento/            Telas (noindex, protegidas por sessão+organização)
  page + inbox-client       Inbox (lista/thread/compositor, realtime, respostas rápidas)
  crm/                      Kanban de negócios (drag-and-drop)
  tarefas/                  Tarefas (atribuição, prazo, filtro)
  clientes/[id]/            Ficha 360 do cliente (timeline + tags + campos)
  campos/                   Gestão de campos personalizados
  respostas/                Respostas rápidas / templates
  canais/                   Conectar WhatsApp/Instagram/Telegram
  integracoes/              API keys + webhooks de saída + log de entregas
  configuracoes/            Auto-atribuição, horário, mensagem de ausência
  painel/                   Dashboard + export CSV
login/ · onboarding/ · auth/callback/

app/api/
  inbox/conversations/…     Listar/ver/enviar/mudar status
  inbox/webhook/{whatsapp,instagram,telegram}/   Recebimento (assinatura verificada)
  inbox/media/[mediaId]/    Proxy de mídia do WhatsApp
  crm/{stages,deals,tasks,contacts,fields,templates,settings,metrics,export}/
  integrations/{keys,webhooks,deliveries}/
  v1/{conversations,messages}/   API pública (auth por chave)
  notifications/

lib/
  inbox/            types, store (memória), store.supabase, repository, automation
  inbox/channels/   whatsapp, telegram, instagram, deliver
  integrations/     apikeys, apiauth, webhooks (HMAC + retry)
  notifications/    email (Resend), notify
  supabase/         client, server, admin (service-role), org, account, realtime, middleware

supabase/migrations/  0001…0009  (aplicar EM ORDEM)
```

## 5. Variáveis de ambiente (`.env.local`)
```bash
NEXT_PUBLIC_SUPABASE_URL=            # HTTPS! (não http://IP)
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=          # só servidor (webhooks/notificações)
NEXT_PUBLIC_APP_URL=https://chat.loteriaencruzilhada.com.br
# canais (ou por organização na UI): WHATSAPP_*, WHATSAPP_APP_SECRET,
#   TELEGRAM_BOT_TOKEN, INSTAGRAM_*, INSTAGRAM_APP_SECRET
# e-mail: RESEND_API_KEY, EMAIL_FROM
```
Referência completa em `src/lib/inbox/README.md`. Para o preview Cloudflare use
`.dev.vars` (modelo em `.dev.vars.example`).

## 6. Banco de dados
9 migrações em `supabase/migrations/`, aplicar em ordem `0001`→`0009`:
0001 core multi-tenant · 0002 inbox · 0003 mídia · 0004 CRM · 0005 integrações ·
0006 tags/campos · 0007 respostas+log · 0008 configurações ·
0009 hardening (idempotência de mensagens + `conversations.channel_id`).

## 7. Deploy (Cloudflare)
`wrangler.jsonc` já traz o custom domain **`chat.loteriaencruzilhada.com.br`**.
Passo a passo na **seção 8 do `DEPLOY.md`**. Resumo:
`wrangler login` → exportar `NEXT_PUBLIC_*` → `wrangler secret put …` → `pnpm cf:deploy`.
Requer a zona na conta Cloudflare e o **Supabase por HTTPS** (senão mixed content).
**Ainda não publicado.**

## 8. Estado atual
- **PR #2** aberto em `site-henrique-pimentel`. A revisão automática apontou 3
  itens — todos corrigidos (idempotência de mensagens, canal correto por
  conversa, validação de responsável); threads respondidas e resolvidas.
- `TODO.md` sem pendências abertas.

## 9. Próximos passos sugeridos
1. `pnpm dev` e explorar `/atendimento` (modo demo).
2. Supabase por HTTPS → aplicar migrações `0001`→`0009` → `.env.local` → testar o
   fluxo real (cadastro → organização → canal → mensagem → automação → resposta).
3. Primeiro `pnpm cf:deploy` conforme o `DEPLOY.md`.

## 10. Documentos de referência no repo
- `README.md` — visão do projeto
- `DEPLOY.md` — deploy Cloudflare + domínio + Supabase self-hosted
- `TODO.md` — roadmap (tudo concluído) e evoluções futuras
- `src/lib/inbox/README.md` — arquitetura do módulo de atendimento e variáveis
