"use client";

import { useEffect, useRef } from "react";
import { createSupabaseBrowserClient } from "./client";

/** Indica se o Supabase está configurado no cliente (variáveis públicas). */
export function supabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

/**
 * Assina mudanças (INSERT/UPDATE/DELETE) nas tabelas informadas e chama
 * `onChange` a cada evento. A RLS do Supabase garante que só chegam linhas da
 * organização do usuário. Não faz nada quando desabilitado (ex.: modo demo).
 */
export function useRealtime(
  tables: string[],
  onChange: () => void,
  enabled: boolean,
  channelName = "hpchat-rt",
): void {
  const cb = useRef(onChange);
  cb.current = onChange;
  const key = tables.join(",");

  useEffect(() => {
    if (!enabled || !supabaseConfigured()) return;

    const supabase = createSupabaseBrowserClient();
    const channel = supabase.channel(`${channelName}:${key}`);
    for (const table of key.split(",")) {
      channel.on("postgres_changes", { event: "*", schema: "public", table }, () => cb.current());
    }
    channel.subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [enabled, key, channelName]);
}
