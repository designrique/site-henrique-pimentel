-- ============================================================================
-- hpchat — 0008_org_settings: configurações da organização.
-- Auto-atribuição de conversas, horário de atendimento e mensagem de ausência.
-- Escopo por organização com RLS. Código autoral.
-- ============================================================================

create table if not exists public.org_settings (
  organization_id uuid primary key references public.organizations (id) on delete cascade,
  auto_assign     boolean not null default false,
  business_days   integer[] not null default '{1,2,3,4,5}',  -- 0=domingo … 6=sábado
  open_time       text not null default '09:00',
  close_time      text not null default '18:00',
  timezone        text not null default 'America/Sao_Paulo',
  away_message    text not null default '',
  updated_at      timestamptz not null default now()
);

create trigger org_settings_updated_at before update on public.org_settings
  for each row execute function public.set_updated_at();

alter table public.org_settings enable row level security;

create policy org_settings_member_all on public.org_settings
  for all using (public.is_org_member(organization_id))
  with check (public.is_org_member(organization_id));
