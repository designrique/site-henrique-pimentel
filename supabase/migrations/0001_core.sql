-- ============================================================================
-- hpchat — Fundação multi-tenant (self-hosted Supabase / Postgres)
-- 0001_core: perfis, organizações (tenants), membros, RLS e helpers.
-- Código autoral. Aplique com: psql "$DATABASE_URL" -f 0001_core.sql
--        ou via Supabase CLI: supabase db push
-- ============================================================================

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- updated_at automático
-- ---------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- profiles — 1:1 com auth.users (dados públicos do usuário)
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  full_name   text not null default '',
  avatar_url  text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

-- Cria o profile automaticamente quando um usuário se cadastra no Auth.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', ''))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- organizations — o tenant do SaaS
-- ---------------------------------------------------------------------------
create table if not exists public.organizations (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  slug        text not null unique,
  created_by  uuid references auth.users (id) on delete set null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create trigger organizations_updated_at
  before update on public.organizations
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- organization_members — vínculo usuário↔tenant + papel
-- ---------------------------------------------------------------------------
create type public.member_role as enum ('owner', 'admin', 'agent');

create table if not exists public.organization_members (
  organization_id uuid not null references public.organizations (id) on delete cascade,
  user_id         uuid not null references auth.users (id) on delete cascade,
  role            public.member_role not null default 'agent',
  created_at      timestamptz not null default now(),
  primary key (organization_id, user_id)
);

create index if not exists idx_org_members_user on public.organization_members (user_id);

-- ---------------------------------------------------------------------------
-- Helpers de autorização (SECURITY DEFINER evita recursão de RLS)
-- ---------------------------------------------------------------------------

-- É membro da organização?
create or replace function public.is_org_member(org uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.organization_members m
    where m.organization_id = org and m.user_id = auth.uid()
  );
$$;

-- Tem papel de gestão (owner/admin) na organização?
create or replace function public.is_org_admin(org uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.organization_members m
    where m.organization_id = org
      and m.user_id = auth.uid()
      and m.role in ('owner', 'admin')
  );
$$;

-- ---------------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------------
alter table public.profiles              enable row level security;
alter table public.organizations         enable row level security;
alter table public.organization_members  enable row level security;

-- profiles: cada um lê/edita o próprio; membros da mesma org se enxergam.
create policy profiles_self_select on public.profiles
  for select using (
    id = auth.uid()
    or exists (
      select 1
      from public.organization_members a
      join public.organization_members b on a.organization_id = b.organization_id
      where a.user_id = auth.uid() and b.user_id = profiles.id
    )
  );
create policy profiles_self_update on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());

-- organizations: visíveis aos membros; editáveis por owner/admin.
create policy orgs_member_select on public.organizations
  for select using (public.is_org_member(id));
create policy orgs_insert_authenticated on public.organizations
  for insert with check (auth.uid() = created_by);
create policy orgs_admin_update on public.organizations
  for update using (public.is_org_admin(id)) with check (public.is_org_admin(id));

-- organization_members: membros veem os colegas; admins gerenciam.
create policy members_select on public.organization_members
  for select using (public.is_org_member(organization_id));
create policy members_admin_write on public.organization_members
  for all using (public.is_org_admin(organization_id))
  with check (public.is_org_admin(organization_id));

-- Ao criar a org, o criador entra como owner. (SECURITY DEFINER: contorna RLS
-- de members no momento da criação, quando ainda não há vínculo.)
create or replace function public.create_organization(p_name text, p_slug text)
returns public.organizations
language plpgsql
security definer
set search_path = public
as $$
declare
  org public.organizations;
begin
  if auth.uid() is null then
    raise exception 'não autenticado';
  end if;

  insert into public.organizations (name, slug, created_by)
  values (p_name, p_slug, auth.uid())
  returning * into org;

  insert into public.organization_members (organization_id, user_id, role)
  values (org.id, auth.uid(), 'owner');

  return org;
end;
$$;
