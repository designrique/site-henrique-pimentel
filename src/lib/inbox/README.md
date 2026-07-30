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

## Próximos passos sugeridos

- Persistência real (Supabase/Postgres) implementando `InboxRepository`.
- Autenticação/sessão de agentes (a tela é interna e vem com `noindex`).
- Suporte a mídia (imagem, áudio, documento) no parser e na UI.
- Tempo real via WebSocket/SSE no lugar do polling de 5s.
- Adaptadores de Instagram e Telegram, seguindo o padrão de `channels/whatsapp.ts`.
