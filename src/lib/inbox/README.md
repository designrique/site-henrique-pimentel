# Módulo de Atendimento (Inbox multicanal)

Central de atendimento própria, com foco em WhatsApp e arquitetura preparada para
outros canais (Instagram, Telegram, web chat). Código 100% autoral.

## Estrutura

```
src/lib/inbox/
  types.ts              Modelo de domínio (Conversation, Message, Contact, …)
  store.ts              Repositório de dados (em memória; troque por DB depois)
  channels/whatsapp.ts  Adaptador WhatsApp Cloud API (webhook + envio)

src/app/atendimento/    Tela do Inbox (/atendimento)
src/app/api/inbox/      Rotas de API
  conversations/                       GET  lista de conversas (?status=&channel=&q=)
  conversations/[id]/                  GET  conversa+mensagens · PATCH status
  conversations/[id]/messages/         GET  mensagens · POST envia resposta
  webhook/whatsapp/                    GET  verificação · POST recebe eventos
```

## Como funciona

- **Recebimento**: a Meta chama `POST /api/inbox/webhook/whatsapp`. O payload é
  normalizado em `parseInboundWebhook` e gravado via `inboxRepository.ingestInbound`.
- **Envio**: a UI faz `POST /api/inbox/conversations/[id]/messages`, que grava a
  mensagem e chama `sendWhatsAppText`. Sem credenciais, o envio roda em **modo
  simulado** (não quebra o fluxo — bom para dev/demo).
- **Dados**: hoje em memória (`store.ts`), persistidos em `globalThis` para
  sobreviver ao HMR. A interface `InboxRepository` isola a troca por um banco
  real (ex.: Supabase/Postgres) sem tocar em rotas nem UI.

## Variáveis de ambiente (WhatsApp Cloud API)

Crie um `.env.local` (não versionado) com:

```bash
# Token permanente/temporário do app da Meta
WHATSAPP_TOKEN=

# ID do número de telefone (Phone Number ID) no WhatsApp Business
WHATSAPP_PHONE_NUMBER_ID=

# Token que você define e informa à Meta ao cadastrar o webhook
WHATSAPP_VERIFY_TOKEN=dev-verify-token
```

Sem `WHATSAPP_TOKEN`/`WHATSAPP_PHONE_NUMBER_ID`, o envio é simulado.
Sem `WHATSAPP_VERIFY_TOKEN`, a verificação aceita `dev-verify-token` (só dev).

## Configurar o webhook na Meta

1. Suba o app com uma URL pública (ex.: `https://seu-dominio/api/inbox/webhook/whatsapp`).
2. No painel da Meta (WhatsApp > Configuration), informe a URL e o
   `WHATSAPP_VERIFY_TOKEN`. A Meta fará um `GET` de verificação.
3. Assine o campo `messages`. Mensagens recebidas passam a cair no Inbox.

## SaaS multi-tenant (Supabase self-hosted)

O sistema evolui para um SaaS: várias organizações (tenants), cada uma com seus
usuários e dados isolados. A persistência fica numa instância **Supabase
self-hosted** (Postgres + Auth + RLS + Realtime).

### Camadas

```
src/lib/inbox/repository.ts     Interface async + getInboxRepository() (seletor)
src/lib/inbox/store.ts          Implementação em memória (demo/dev, sem banco)
src/lib/inbox/store.supabase.ts Implementação Supabase (produção, por tenant)
src/lib/supabase/{client,server,middleware}.ts   Wiring do Supabase (@supabase/ssr)
supabase/migrations/            Schema SQL (aplicar na sua instância)
```

`getInboxRepository()` escolhe o backend por ambiente: sem Supabase → memória;
com Supabase + usuário autenticado + organização → repositório do tenant.

### Migrações

Aplique na sua instância self-hosted, em ordem:

```bash
psql "$SUPABASE_DB_URL" -f supabase/migrations/0001_core.sql
psql "$SUPABASE_DB_URL" -f supabase/migrations/0002_inbox.sql
# ou, com Supabase CLI apontando para a instância: supabase db push
```

- `0001_core.sql` — perfis, organizações, membros, papéis, RLS e helpers.
- `0002_inbox.sql` — canais, contatos, conversas, mensagens (tudo com RLS por org).

### Variáveis de ambiente (Supabase self-hosted)

No `.env.local` (não versionado):

```bash
# URL pública da sua instância Supabase self-hosted
NEXT_PUBLIC_SUPABASE_URL=https://supabase.seu-dominio.com

# Chave anônima (anon) da instância
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# Service-role key (SOMENTE servidor) — usada pelo webhook do WhatsApp, que a
# Meta chama sem sessão de usuário, para rotear a mensagem ao tenant correto.
# NUNCA exponha ao navegador.
SUPABASE_SERVICE_ROLE_KEY=...
```

Sem `NEXT_PUBLIC_*`, o app roda em **modo demo** (repositório em memória).
As credenciais de cada canal ficam **por organização** (cadastradas em
`/atendimento/canais`, gravadas em `channels.config`); as variáveis de
ambiente abaixo servem como fallback global.

```bash
# WhatsApp Cloud API (fallback global)
WHATSAPP_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_VERIFY_TOKEN=dev-verify-token

# Telegram Bot API (fallback global)
TELEGRAM_BOT_TOKEN=

# Instagram Messaging / Graph API (fallback global)
INSTAGRAM_TOKEN=
INSTAGRAM_VERIFY_TOKEN=dev-verify-token
```

### Canais e webhooks

| Canal | Webhook (POST) | Roteamento por tenant |
|-------|----------------|-----------------------|
| WhatsApp  | `/api/inbox/webhook/whatsapp`  | `phone_number_id` → `channels.external_id` |
| Instagram | `/api/inbox/webhook/instagram` | `entry.id` (conta IG) → `channels.external_id` |
| Telegram  | `/api/inbox/webhook/telegram`  | header `X-Telegram-Bot-Api-Secret-Token` → `channels.config.secret` |

Mídia recebida do WhatsApp é baixada sob demanda pelo proxy autenticado
`/api/inbox/media/[mediaId]`, usando o token do canal da organização.

## Próximos passos sugeridos

- **Auth/onboarding**: login e criação de organização (o schema e o seletor já
  esperam por isso; a UI entra na próxima fase).
- **Webhook multi-tenant**: resolver a organização pelo canal (`channels.external_id`)
  usando service-role, já que a Meta chama sem sessão de usuário.
- **CRM**: contatos/empresas/funil ligados às conversas.
- **Tempo real** via Supabase Realtime no lugar do polling de 5s.
- **Suporte a mídia** (imagem, áudio, documento) no parser e na UI.
- **Framework de integrações** plug-and-play (API keys + webhooks + conectores).
- Adaptadores de Instagram e Telegram, seguindo o padrão de `channels/whatsapp.ts`.
