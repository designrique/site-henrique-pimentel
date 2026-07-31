-- ============================================================================
-- hpchat — 0004_crm: CRM (empresas, negócios/kanban), tarefas e notificações.
-- Tudo escopado por organização com RLS. Código autoral.
-- ============================================================================

create type public.task_status as enum ('open', 'done');

-- ---------------------------------------------------------------------------
-- companies — empresas do CRM
-- ---------------------------------------------------------------------------
create table if not exists public.companies (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  name            text not null,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);
create index if not exists idx_companies_org on public.companies (organization_id);
create trigger companies_updated_at before update on public.companies
  for each row execute function public.set_updated_at();

-- contacts ganham campos de CRM
alter table public.contacts
  add column if not exists email      text,
  add column if not exists company_id uuid references public.companies (id) on delete set null,
  add column if not exists notes      text;

-- ---------------------------------------------------------------------------
-- pipeline_stages — colunas do kanban
-- ---------------------------------------------------------------------------
create table if not exists public.pipeline_stages (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  name            text not null,
  position        integer not null default 0,
  created_at      timestamptz not null default now()
);
create index if not exists idx_stages_org on public.pipeline_stages (organization_id, position);

-- ---------------------------------------------------------------------------
-- deals — cards do kanban
-- ---------------------------------------------------------------------------
create table if not exists public.deals (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  stage_id        uuid not null references public.pipeline_stages (id) on delete cascade,
  contact_id      uuid references public.contacts (id) on delete set null,
  company_id      uuid references public.companies (id) on delete set null,
  assignee_id     uuid references auth.users (id) on delete set null,
  title           text not null,
  value           numeric(14, 2) not null default 0,
  currency        text not null default 'BRL',
  position        integer not null default 0,
  created_by      uuid references auth.users (id) on delete set null,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);
create index if not exists idx_deals_org on public.deals (organization_id);
create index if not exists idx_deals_stage on public.deals (stage_id, position);
create trigger deals_updated_at before update on public.deals
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- tasks — tarefas por atendente e cliente
-- ---------------------------------------------------------------------------
create table if not exists public.tasks (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  title           text not null,
  description     text not null default '',
  status          public.task_status not null default 'open',
  due_at          timestamptz,
  assignee_id     uuid references auth.users (id) on delete set null,
  contact_id      uuid references public.contacts (id) on delete set null,
  created_by      uuid references auth.users (id) on delete set null,
  done_at         timestamptz,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);
create index if not exists idx_tasks_org on public.tasks (organization_id);
create index if not exists idx_tasks_assignee on public.tasks (assignee_id, status);
create trigger tasks_updated_at before update on public.tasks
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- notifications — avisos por usuário (UI); o e-mail é enviado pela aplicação
-- ---------------------------------------------------------------------------
create table if not exists public.notifications (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations (id) on delete cascade,
  user_id         uuid not null references auth.users (id) on delete cascade,
  type            text not null default 'info',
  title           text not null,
  body            text not null default '',
  link            text,
  read_at         timestamptz,
  created_at      timestamptz not null default now()
);
create index if not exists idx_notifications_user on public.notifications (user_id, read_at);

-- ---------------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------------
alter table public.companies       enable row level security;
alter table public.pipeline_stages enable row level security;
alter table public.deals           enable row level security;
alter table public.tasks           enable row level security;
alter table public.notifications   enable row level security;

create policy companies_member_all on public.companies
  for all using (public.is_org_member(organization_id))
  with check (public.is_org_member(organization_id));

create policy stages_member_all on public.pipeline_stages
  for all using (public.is_org_member(organization_id))
  with check (public.is_org_member(organization_id));

create policy deals_member_all on public.deals
  for all using (public.is_org_member(organization_id))
  with check (public.is_org_member(organization_id));

create policy tasks_member_all on public.tasks
  for all using (public.is_org_member(organization_id))
  with check (public.is_org_member(organization_id));

-- Notificações: cada um vê e marca como lidas as próprias. A criação é feita
-- pela aplicação (service-role) ou pelo próprio usuário dentro da sua org.
create policy notifications_own_select on public.notifications
  for select using (user_id = auth.uid());
create policy notifications_own_update on public.notifications
  for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy notifications_member_insert on public.notifications
  for insert with check (public.is_org_member(organization_id));

-- Realtime
alter publication supabase_realtime add table public.deals;
alter publication supabase_realtime add table public.tasks;
alter publication supabase_realtime add table public.notifications;
