-- ============================================================================
-- hpchat — 0003_media: anexos de mídia nas mensagens.
-- Guarda metadados da mídia (o binário é buscado sob demanda no provedor).
-- ============================================================================

create type public.media_kind as enum ('image', 'audio', 'video', 'document', 'sticker');

alter table public.messages
  add column if not exists media_kind        public.media_kind,
  add column if not exists media_external_id text,   -- id da mídia no provedor
  add column if not exists media_mime         text,
  add column if not exists media_filename     text;
