-- ============================================================================
-- hpchat — 0002_inbox: canais, contatos, conversas e mensagens.
-- Tudo escopado por organização (tenant) com RLS. Código autoral.
-- ============================================================================

create type public.channel_type      as enum ('whatsapp', 'instagram', 'telegram', 'webchat');
create type public.conversation_status as enum ('open', 'pending', 'closed');
create type public.message_direction  as enum ('in', 'out');
create type public.message_status     as enum ('queued', 'sent', 'delivered', 'read', 'failed');

-- ---------------------------------------------------------------------------
-- channels — uma conexão de canal configurada por uma organização
-- (ex.: um número de WhatsApp). Credenciais ficam em `config` (jsonb).
-- ---------------------------------------------------------------------------
create table if not exists public.channels (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  type            public.channel_type not null,
  name            text not null,
  external_id     text,              -- ex.: phone_number_id do WhatsApp
  config          jsonb not null default '{}'::jsonb,
  is_active       boolean not null default true,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);
create index if not exists idx_channels_org on public.channels (organization_id);
create trigger channels_updated_at before update on public.channels
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- contacts — pessoa que fala com a organização por algum canal
-- ---------------------------------------------------------------------------
create table if not exists public.contacts (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  name            text not null default '',
  handle          text not null,     -- telefone E.164 ou @handle
  channel         public.channel_type not null,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  unique (organization_id, channel, handle)
);
create index if not exists idx_contacts_org on public.contacts (organization_id);
create trigger contacts_updated_at before update on public.contacts
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- conversations
-- ---------------------------------------------------------------------------
create table if not exists public.conversations (
  id                   uuid primary key default gen_random_uuid(),
  organization_id      uuid not null references public.organizations (id) on delete cascade,
  contact_id           uuid not null references public.contacts (id) on delete cascade,
  channel              public.channel_type not null,
  status               public.conversation_status not null default 'open',
  assignee_id          uuid references auth.users (id) on delete set null,
  tags                 text[] not null default '{}',
  unread_count         integer not null default 0,
  last_message_at      timestamptz not null default now(),
  last_message_preview text not null default '',
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);
create index if not exists idx_conversations_org on public.conversations (organization_id, last_message_at desc);
create index if not exists idx_conversations_contact on public.conversations (contact_id);
create trigger conversations_updated_at before update on public.conversations
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- messages
-- ---------------------------------------------------------------------------
create table if not exists public.messages (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  conversation_id uuid not null references public.conversations (id) on delete cascade,
  direction       public.message_direction not null,
  text            text not null,
  status          public.message_status not null default 'sent',
  author          text not null default '',
  external_id     text,              -- ex.: wamid do WhatsApp
  created_at      timestamptz not null default now()
);
create index if not exists idx_messages_conversation on public.messages (conversation_id, created_at);

-- Mantém a conversa em dia a cada mensagem nova.
create or replace function public.bump_conversation()
returns trigger
language plpgsql
as $$
begin
  update public.conversations
     set last_message_at = new.created_at,
         last_message_preview = left(new.text, 200),
         unread_count = case when new.direction = 'in'
                             then unread_count + 1 else unread_count end,
         status = case when status = 'closed' then 'open' else status end
   where id = new.conversation_id;
  return new;
end;
$$;
create trigger messages_bump_conversation
  after insert on public.messages
  for each row execute function public.bump_conversation();

-- ---------------------------------------------------------------------------
-- RLS — acesso somente a membros da organização dona do registro
-- ---------------------------------------------------------------------------
alter table public.channels      enable row level security;
alter table public.contacts      enable row level security;
alter table public.conversations enable row level security;
alter table public.messages      enable row level security;

create policy channels_member_all on public.channels
  for all using (public.is_org_member(organization_id))
  with check (public.is_org_member(organization_id));

create policy contacts_member_all on public.contacts
  for all using (public.is_org_member(organization_id))
  with check (public.is_org_member(organization_id));

create policy conversations_member_all on public.conversations
  for all using (public.is_org_member(organization_id))
  with check (public.is_org_member(organization_id));

create policy messages_member_all on public.messages
  for all using (public.is_org_member(organization_id))
  with check (public.is_org_member(organization_id));

-- Realtime: publica as tabelas do inbox para assinaturas ao vivo.
alter publication supabase_realtime add table public.conversations;
alter publication supabase_realtime add table public.messages;
