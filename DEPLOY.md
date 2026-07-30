# Guia de Deploy — hpchat (Cloudflare Workers + Supabase self-hosted)

O hpchat é **server-side** (Next.js com rotas de API, webhooks e Realtime).
Aqui o alvo é **Cloudflare Workers**, via o adaptador **OpenNext**
(`@opennextjs/cloudflare`). O banco é a sua instância **Supabase self-hosted**.

---

## 1. Pré-requisitos

- **Node.js 20+** e **pnpm**.
- Conta **Cloudflare** + **Wrangler** (já incluso como devDependency).
- Instância **Supabase self-hosted** acessível por **HTTPS** (ver §6).
- (Opcional) Resend para e-mail; App da Meta / bot do Telegram para canais.

> Compatibilidade: o adaptador exige **Next ≥ 16.2.11** (o projeto está nessa
> faixa) e a flag **`nodejs_compat`** — já configurada no `wrangler.jsonc`,
> necessária porque o app usa `node:crypto` (HMAC dos webhooks, hash de chaves).

---

## 2. Banco de dados — aplicar as migrações

Na sua instância Supabase, **em ordem** (via `psql` ou Supabase CLI):

```bash
psql "$SUPABASE_DB_URL" -f supabase/migrations/0001_core.sql
psql "$SUPABASE_DB_URL" -f supabase/migrations/0002_inbox.sql
psql "$SUPABASE_DB_URL" -f supabase/migrations/0003_media.sql
psql "$SUPABASE_DB_URL" -f supabase/migrations/0004_crm.sql
psql "$SUPABASE_DB_URL" -f supabase/migrations/0005_integrations.sql
```

Confirme que o **Realtime** está habilitado (as migrações já publicam as
tabelas em `supabase_realtime`).

---

## 3. Arquivos da Cloudflare (já no repositório)

- `wrangler.jsonc` — `main: .open-next/worker.js`, `nodejs_compat`, assets.
- `open-next.config.ts` — configuração do adaptador OpenNext.
- Scripts no `package.json`: `cf:preview`, `cf:deploy`, `cf:typegen`.

Ajuste o `name` no `wrangler.jsonc` se quiser outro nome de Worker.

---

## 4. Variáveis e segredos

Há dois tipos, tratados de forma diferente na Cloudflare:

**a) Públicas `NEXT_PUBLIC_*` — em tempo de build.**
São embutidas no bundle durante a compilação. Defina-as no ambiente do build:
- **Workers Builds (CI da Cloudflare):** na seção *Build variables and secrets*.
- **Deploy pela sua máquina:** exporte antes de `pnpm cf:deploy`, ex.:
  ```bash
  export NEXT_PUBLIC_SUPABASE_URL="https://supabase.seu-dominio.com"
  export NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
  export NEXT_PUBLIC_APP_URL="https://hpchat.seu-dominio.com"
  ```

**b) Segredos de servidor — via Wrangler (runtime).**
Nunca vão para o navegador. Cadastre com `wrangler secret put`:
```bash
wrangler secret put SUPABASE_SERVICE_ROLE_KEY
wrangler secret put WHATSAPP_APP_SECRET
wrangler secret put INSTAGRAM_APP_SECRET
wrangler secret put RESEND_API_KEY
# ...e os tokens de canal que quiser como fallback global
```
Para o **preview local**, copie `.dev.vars.example` para `.dev.vars`.

---

## 5. Build, preview e deploy

```bash
pnpm install
wrangler login

# Preview no runtime workerd (mais fiel à produção que `next dev`)
pnpm cf:preview

# Build + deploy para Cloudflare Workers
pnpm cf:deploy
```

O deploy publica num subdomínio `*.workers.dev` ou num **domínio
personalizado** (configure em *Workers → Custom Domains*). Em CI, use
**Workers Builds** com o comando `pnpm cf:deploy` e as variáveis da §4.

> `pnpm cf:typegen` gera os tipos do ambiente (`cloudflare-env.d.ts`).

---

## 6. Supabase self-hosted — HTTPS obrigatório

A instância precisa responder por **HTTPS com certificado válido**, e não por
`http://<IP>`. Dois motivos:

1. O app rodará em `https://…workers.dev` (ou seu domínio). O **cliente anônimo
   do Supabase roda no navegador**; chamar `http://<IP>` a partir de uma página
   https é bloqueado como **mixed content**.
2. Cookies de sessão seguros exigem HTTPS.

**Recomendado:** coloque a instância atrás de um domínio com TLS — por exemplo
`https://supabase.seu-dominio.com` apontando para o seu servidor (IP `31.x.x.x`).
Você pode usar a **própria Cloudflare**: crie um registro DNS (proxied) para o
IP e ative SSL/TLS *Full (strict)* com um certificado no servidor de origem.
Depois é só usar essa URL em `NEXT_PUBLIC_SUPABASE_URL`.

> Garanta que a URL pública do Supabase (Kong/`API_EXTERNAL_URL` e
> `SUPABASE_PUBLIC_URL`) e as origens permitidas de Auth incluam o domínio do
> app, para o fluxo de login e o Realtime (WebSocket) funcionarem.

---

## 7. Primeira conta e canais

1. `/login` → cadastre-se (confirme o e-mail se ativo no Auth).
2. `/onboarding` → crie sua **organização** (entra como `owner`).
3. `/atendimento/canais` → conecte os canais e configure os webhooks:

| Canal | URL do webhook | Roteamento |
|-------|----------------|------------|
| WhatsApp  | `https://hpchat.seu-dominio.com/api/inbox/webhook/whatsapp`  | `phone_number_id` |
| Instagram | `https://hpchat.seu-dominio.com/api/inbox/webhook/instagram` | conta IG (`entry.id`) |
| Telegram  | `https://hpchat.seu-dominio.com/api/inbox/webhook/telegram`  | secret do webhook |

Telegram:
```bash
curl "https://api.telegram.org/bot<TOKEN>/setWebhook" \
  -d url="https://hpchat.seu-dominio.com/api/inbox/webhook/telegram" \
  -d secret_token="<mesmo-secret-do-canal>"
```

---

## 8. Checklist de produção

- [ ] Migrações `0001`→`0005` aplicadas.
- [ ] Supabase servido por **HTTPS** (domínio + TLS), não por `http://<IP>`.
- [ ] `NEXT_PUBLIC_*` definidas no **build**; segredos via `wrangler secret`.
- [ ] `nodejs_compat` ativo (já no `wrangler.jsonc`).
- [ ] `WHATSAPP_APP_SECRET` / `INSTAGRAM_APP_SECRET` configurados.
- [ ] Realtime habilitado e origens de Auth liberadas para o domínio do app.
- [ ] Domínio personalizado apontado para o Worker (opcional, recomendado).
