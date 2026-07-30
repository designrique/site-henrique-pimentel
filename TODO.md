# hpchat — Roadmap

SaaS de atendimento multicanal, com CRM e integrações plug-and-play.
Código autoral. Stack: Next.js 16 · React 19 · Tailwind 4 · Supabase (self-hosted).

## ✅ Fase 0 — Módulo de atendimento (protótipo)
- [x] Domínio (conversas, mensagens, contatos, canais)
- [x] Adaptador WhatsApp Cloud API (webhook + envio, modo simulado sem credenciais)
- [x] Rotas de API do inbox
- [x] Tela `/atendimento` (lista, thread, resposta, polling)
- [x] App server-side (removido `output: "export"`)

## ✅ Fase 1 — Fundação multi-tenant
- [x] Migrações SQL: organizações, membros, papéis, RLS, helpers (`0001_core`)
- [x] Migrações SQL: canais, contatos, conversas, mensagens com RLS (`0002_inbox`)
- [x] Wiring Supabase (`@supabase/ssr`: client, server, middleware)
- [x] Repositório assíncrono com backend selecionável (memória / Supabase)
- [x] Modo demo preservado quando Supabase não configurado

## ✅ Fase 2 — Auth + onboarding
- [x] Login/cadastro (`/login`) via Supabase Auth + callback de email
- [x] Onboarding: criar organização (`/onboarding`, RPC `create_organization`)
- [x] Proteger `/atendimento` por sessão e organização; sign-out
- [x] Exibir usuário/organização na UI

## ✅ Fase 3 — Canais em produção
- [x] Webhook multi-tenant: resolver org por `channels.external_id` (service-role)
- [x] Cadastro de canais (conectar WhatsApp/Instagram/Telegram por organização)
- [x] Envio com credenciais por canal (fallback nas variáveis de ambiente)
- [x] Suporte a mídia do WhatsApp (parser, storage, proxy de download, UI)
- [x] Adaptador de Telegram (webhook por secret + envio via Bot API)
- [x] Adaptador de Instagram (webhook por conta + envio via Graph API)

## ⏳ Fase 4 — CRM
- [ ] Contatos e empresas
- [ ] Funil/negócios (pipeline)
- [ ] Notas, etiquetas, campos personalizados
- [ ] Timeline unificada (conversa + CRM)

## ⏳ Fase 5 — Integrações plug-and-play
- [ ] Chaves de API por organização
- [ ] Webhooks de saída (eventos → sistemas externos)
- [ ] Framework de conectores + primeiros conectores nativos

## ⏳ Fase 6 — Tempo real e polimento
- [ ] Supabase Realtime no lugar do polling
- [ ] Notificações
- [ ] Relatórios/dashboard
