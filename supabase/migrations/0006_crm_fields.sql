-- ============================================================================
-- hpchat — 0006_crm_fields: etiquetas e campos personalizados de contatos.
-- Código autoral. Escopo por organização com RLS.
-- ============================================================================

-- Etiquetas e valores dos campos personalizados ficam no próprio contato.
alter table public.contacts
  add column if not exists tags          text[] not null default '{}',
  add column if not exists custom_fields jsonb  not null default '{}'::jsonb;

-- ---------------------------------------------------------------------------
-- custom_field_definitions — campos personalizados definidos pela organização.
-- O `key` é usado como chave em contacts.custom_fields (jsonb).
-- ---------------------------------------------------------------------------
create type public.custom_field_type as enum ('text', 'number', 'date', 'select');

create table if not exists public.custom_field_definitions (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  label           text not null,
  key             text not null,
  type            public.custom_field_type not null default 'text',
  options         text[] not null default '{}',
  position        integer not null default 0,
  created_at      timestamptz not null default now(),
  unique (organization_id, key)
);
create index if not exists idx_field_defs_org
  on public.custom_field_definitions (organization_id, position);

alter table public.custom_field_definitions enable row level security;

create policy field_defs_member_all on public.custom_field_definitions
  for all using (public.is_org_member(organization_id))
  with check (public.is_org_member(organization_id));
