-- ============================================================================
-- hpchat — 0005_integrations: chaves de API e webhooks de saída.
-- Tudo escopado por organização com RLS. Código autoral.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- api_keys — credenciais para a API pública. Guardamos apenas o hash da chave;
-- o valor completo é mostrado uma única vez, na criação.
-- ---------------------------------------------------------------------------
create table if not exists public.api_keys (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  name            text not null,
  prefix          text not null,           -- primeiros caracteres, p/ exibição
  key_hash        text not null,           -- sha256 hex da chave completa
  last_used_at    timestamptz,
  created_by      uuid references auth.users (id) on delete set null,
  revoked_at      timestamptz,
  created_at      timestamptz not null default now()
);
create index if not exists idx_api_keys_org on public.api_keys (organization_id);
create index if not exists idx_api_keys_hash on public.api_keys (key_hash);

-- ---------------------------------------------------------------------------
-- webhook_endpoints — URLs externas que recebem eventos da organização.
-- ---------------------------------------------------------------------------
create table if not exists public.webhook_endpoints (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  url             text not null,
  secret          text not null,           -- assina o payload (HMAC-SHA256)
  events          text[] not null default '{}',
  is_active       boolean not null default true,
  created_at      timestamptz not null default now()
);
create index if not exists idx_webhooks_org on public.webhook_endpoints (organization_id);

-- ---------------------------------------------------------------------------
-- RLS — apenas membros da organização gerenciam suas integrações
-- ---------------------------------------------------------------------------
alter table public.api_keys          enable row level security;
alter table public.webhook_endpoints enable row level security;

create policy api_keys_member_all on public.api_keys
  for all using (public.is_org_member(organization_id))
  with check (public.is_org_member(organization_id));

create policy webhooks_member_all on public.webhook_endpoints
  for all using (public.is_org_member(organization_id))
  with check (public.is_org_member(organization_id));
