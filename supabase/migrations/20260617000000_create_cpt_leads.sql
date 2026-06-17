-- Deck-download leads for the Cape Town stop of the MVNO Nation world tour.
-- One row per form submission. Email + company normalised; email_domain
-- is a generated column for fast lookups when segmenting by organisation.

create table if not exists public.cpt_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 200),
  email text not null check (email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  email_domain text generated always as (split_part(email, '@', 2)) stored,
  company text not null check (char_length(company) between 2 and 200),
  accepted_terms boolean not null default false,
  user_agent text,
  referrer text,
  ip_hash text,
  created_at timestamptz not null default now()
);

create index if not exists cpt_leads_created_idx
  on public.cpt_leads (created_at desc);
create index if not exists cpt_leads_email_idx
  on public.cpt_leads (lower(email));
create index if not exists cpt_leads_email_domain_idx
  on public.cpt_leads (email_domain);
create index if not exists cpt_leads_company_idx
  on public.cpt_leads (lower(company));

-- Lock the table down. Only the service-role key (used from the Next.js
-- /api/access route on the server) may insert; nothing reads or writes
-- via the anon / authenticated keys.
alter table public.cpt_leads enable row level security;

comment on table public.cpt_leads is
  'Deck-download leads for MVNO Nation Africa Cape Town 2026.';
comment on column public.cpt_leads.ip_hash is
  'Optional SHA-256 of (client_ip + daily_salt). Never store raw IP.';
