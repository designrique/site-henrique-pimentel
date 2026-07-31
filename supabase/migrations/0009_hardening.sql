-- ============================================================================
-- hpchat — 0009_hardening: idempotência de mensagens e vínculo de canal.
-- Correções da revisão do PR #2. Código autoral.
-- ============================================================================

-- (P1) Idempotência: evita mensagens duplicadas quando o provedor reenvia o
-- mesmo evento. Índice único parcial por (org, id externo do provedor).
create unique index if not exists uniq_messages_external
  on public.messages (organization_id, external_id)
  where external_id is not null;

-- (P1) Vincula a conversa ao canal exato em que ela entrou, para que as
-- respostas usem as credenciais certas quando há vários canais do mesmo tipo.
alter table public.conversations
  add column if not exists channel_id uuid references public.channels (id) on delete set null;

create index if not exists idx_conversations_channel on public.conversations (channel_id);
