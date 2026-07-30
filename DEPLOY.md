# Guia de Deploy — hpchat (self-hosted)

Passo a passo para publicar o hpchat em produção. O app é **server-side**
(Next.js com rotas de API, webhooks e Realtime), então precisa de um host com
runtime — **não** funciona em hospedagem estática.

---

## 1. Pré-requisitos

- **Node.js 20+** e **pnpm**.
- Uma instância **Supabase self-hosted** acessível (Postgres + Auth + Realtime).
- Um host com runtime: Vercel, um VPS com Node, ou container (Docker).
- (Opcional) Conta de e-mail transacional (Resend) para notificações.
- (Opcional) App da Meta (WhatsApp/Instagram) e/ou bot do Telegram.

---

## 2. Banco de dados — aplicar as migrações

Aplique **em ordem** na sua instância Supabase (via `psql` ou Supabase CLI):

```bash
psql "$SUPABASE_DB_URL" -f supabase/migrations/0001_core.sql
psql "$SUPABASE_DB_URL" -f supabase/migrations/0002_inbox.sql
psql "$SUPABASE_DB_URL" -f supabase/migrations/0003_media.sql
psql "$SUPABASE_DB_URL" -f supabase/migrations/0004_crm.sql
psql "$SUPABASE_DB_URL" -f supabase/migrations/0005_integrations.sql
```

Isso cria organizações/membros/RLS, inbox, mídia, CRM (kanban/tarefas/
notificações) e integrações (chaves/webhooks), tudo isolado por tenant.

> **Realtime:** as migrações já adicionam as tabelas ao publication
> `supabase_realtime`. Confirme que o Realtime está habilitado na instância.

---

## 3. Variáveis de ambiente

Defina no host (ou `.env.local` em VPS). Mínimo para subir:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://supabase.seu-dominio.com
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...            # só no servidor; nunca no navegador

# URL pública do app (links dos e-mails de notificação)
NEXT_PUBLIC_APP_URL=https://app.seu-dominio.com
```

Opcionais por recurso (canais, e-mail, segurança) — ver
`src/lib/inbox/README.md`. Destaques de segurança:

- `WHATSAPP_APP_SECRET` / `INSTAGRAM_APP_SECRET` — **recomendado**: valida a
  assinatura dos webhooks da Meta. Sem eles, os webhooks não são verificados.
- Credenciais de canal também podem ficar **por organização** em
  `/atendimento/integracoes` → `Canais`.

Sem as variáveis `NEXT_PUBLIC_SUPABASE_*`, o app roda em **modo demo** (dados em
memória), útil para uma prévia sem banco.

---

## 4. Build e execução

```bash
pnpm install
pnpm build
pnpm start          # sobe o servidor Next em produção (porta 3000)
```

**Vercel:** importe o repositório, defina as variáveis de ambiente no projeto e
faça o deploy (o build roda automaticamente). Nenhuma config extra é necessária.

**Docker/VPS:** rode `pnpm build && pnpm start` atrás de um proxy reverso
(Nginx/Caddy) com HTTPS.

---

## 5. Criar a primeira conta e organização

1. Acesse `/login` e **cadastre-se** (confirme o e-mail se a confirmação estiver
   ativa no Auth do Supabase).
2. Em `/onboarding`, crie sua **organização** (você entra como `owner`).
3. Você cai no inbox em `/atendimento`.

---

## 6. Conectar os canais

Em **`/atendimento/canais`**, adicione um canal por organização. Depois configure
o webhook no provedor apontando para o seu domínio:

| Canal | URL do webhook | Como roteia |
|-------|----------------|-------------|
| WhatsApp  | `https://app.seu-dominio.com/api/inbox/webhook/whatsapp`  | `phone_number_id` |
| Instagram | `https://app.seu-dominio.com/api/inbox/webhook/instagram` | conta IG (`entry.id`) |
| Telegram  | `https://app.seu-dominio.com/api/inbox/webhook/telegram`  | secret do webhook |

- **WhatsApp/Instagram (Meta):** cadastre a URL e o `verify_token` no painel da
  Meta; assine o campo `messages`. Configure o **App Secret** para verificação.
- **Telegram:** registre o webhook do bot com um `secret_token` igual ao secret
  cadastrado no canal:
  ```bash
  curl "https://api.telegram.org/bot<TOKEN>/setWebhook" \
    -d url="https://app.seu-dominio.com/api/inbox/webhook/telegram" \
    -d secret_token="<mesmo-secret-do-canal>"
  ```

---

## 7. Integrações (API + webhooks de saída)

Em **`/atendimento/integracoes`**:

- **Chave de API** → use em `Authorization: Bearer <chave>` para chamar
  `GET /api/v1/conversations` e `POST /api/v1/messages`.
- **Webhook de saída** → receba eventos (`message.received`, `message.sent`,
  `deal.stage_changed`, `task.created`) na sua URL **https** pública, validando
  a assinatura `X-HPChat-Signature` (HMAC-SHA256 com o secret do endpoint).

---

## 8. Checklist de produção

- [ ] Migrações `0001`→`0005` aplicadas.
- [ ] `SUPABASE_SERVICE_ROLE_KEY` definido **apenas** no servidor.
- [ ] `WHATSAPP_APP_SECRET` / `INSTAGRAM_APP_SECRET` configurados.
- [ ] HTTPS ativo (proxy reverso ou plataforma).
- [ ] Confirmação de e-mail e políticas de senha revisadas no Supabase Auth.
- [ ] Realtime habilitado na instância.
- [ ] `RESEND_API_KEY` + `EMAIL_FROM` (se quiser e-mails de notificação reais).
