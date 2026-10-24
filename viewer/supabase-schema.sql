-- Supabase SQL schema for Cohart Study Guide
-- Run this in Supabase SQL Editor (Dashboard > SQL Editor > New Query)

create table if not exists highlights (
  id uuid default gen_random_uuid() primary key,
  page_slug text not null,
  text text not null,
  color text not null default 'yellow' check (color in ('yellow', 'green', 'blue', 'pink')),
  start_offset integer not null,
  end_offset integer not null,
  context_before text not null default '',
  context_after text not null default '',
  created_at timestamptz default now()
);

create index if not exists idx_highlights_page on highlights(page_slug);

create table if not exists notes (
  id uuid default gen_random_uuid() primary key,
  page_slug text not null,
  content text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists idx_notes_page on notes(page_slug);

create table if not exists whiteboards (
  id uuid default gen_random_uuid() primary key,
  page_slug text unique not null,
  elements jsonb not null default '[]',
  updated_at timestamptz default now()
);

create index if not exists idx_whiteboards_page on whiteboards(page_slug);

alter table highlights enable row level security;
alter table notes enable row level security;
alter table whiteboards enable row level security;

create policy "Allow all access to highlights" on highlights for all using (true) with check (true);
create policy "Allow all access to notes" on notes for all using (true) with check (true);
create policy "Allow all access to whiteboards" on whiteboards for all using (true) with check (true);
