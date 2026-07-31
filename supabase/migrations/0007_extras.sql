-- ============================================================================
-- hpchat — 0007_extras: respostas rápidas (templates) e log de entregas de
-- webhook. Escopo por organização com RLS. Código autoral.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- canned_responses — respostas rápidas reutilizáveis no atendimento
-- ---------------------------------------------------------------------------
create table if not exists public.canned_responses (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  shortcut        text not null default '',   -- atalho (ex.: "ola")
  title           text not null,
  body            text not null,
  created_by      uuid references auth.users (id) on delete set null,
  created_at      timestamptz not null default now()
);
create index if not exists idx_canned_org on public.canned_responses (organization_id);

alter table public.canned_responses enable row level security;
create policy canned_member_all on public.canned_responses
  for all using (public.is_org_member(organization_id))
  with check (public.is_org_member(organization_id));

-- ---------------------------------------------------------------------------
-- webhook_deliveries — registro de cada tentativa de entrega de webhook
-- ---------------------------------------------------------------------------
create type public.delivery_status as enum ('success', 'failed');

create table if not exists public.webhook_deliveries (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  endpoint_id     uuid references public.webhook_endpoints (id) on delete set null,
  event           text not null,
  status          public.delivery_status not null,
  attempts        integer not null default 1,
  response_code   integer,
  error           text,
  payload         jsonb,
  created_at      timestamptz not null default now(),
  last_attempt_at timestamptz not null default now()
);
create index if not exists idx_deliveries_org
  on public.webhook_deliveries (organization_id, created_at desc);

alter table public.webhook_deliveries enable row level security;
-- Leitura para membros; escrita é feita pela aplicação (service-role).
create policy deliveries_member_select on public.webhook_deliveries
  for select using (public.is_org_member(organization_id));
