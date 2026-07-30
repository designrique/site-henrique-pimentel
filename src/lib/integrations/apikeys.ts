// Geração e verificação de chaves de API. Guardamos apenas o hash (sha256);
// a chave completa só existe no momento da criação.

import { createHash, randomBytes } from "node:crypto";
import type { SupabaseClient } from "@supabase/supabase-js";

const PREFIX = "hpk_";

export interface GeneratedKey {
  raw: string; // mostrada uma única vez
  prefix: string; // para exibição posterior
  hash: string; // armazenado
}

export function generateApiKey(): GeneratedKey {
  const secret = randomBytes(24).toString("base64url");
  const raw = `${PREFIX}${secret}`;
  return {
    raw,
    prefix: raw.slice(0, 12),
    hash: hashKey(raw),
  };
}

export function hashKey(raw: string): string {
  return createHash("sha256").update(raw).digest("hex");
}

/**
 * Valida uma chave crua contra o banco (via cliente admin, sem RLS) e devolve
 * a organização dona. Atualiza `last_used_at` de forma assíncrona.
 */
export async function verifyApiKey(
  admin: SupabaseClient,
  raw: string | null | undefined,
): Promise<{ organizationId: string; keyId: string } | null> {
  if (!raw || !raw.startsWith(PREFIX)) return null;

  const { data } = await admin
    .from("api_keys")
    .select("id, organization_id, revoked_at")
    .eq("key_hash", hashKey(raw))
    .maybeSingle();
  if (!data || data.revoked_at) return null;

  // Marca uso (não bloqueia a resposta).
  void admin
    .from("api_keys")
    .update({ last_used_at: new Date().toISOString() })
    .eq("id", data.id);

  return { organizationId: data.organization_id as string, keyId: data.id as string };
}

/** Extrai a chave do header Authorization: Bearer ... ou X-API-Key. */
export function readApiKey(request: Request): string | null {
  const auth = request.headers.get("authorization");
  if (auth?.toLowerCase().startsWith("bearer ")) return auth.slice(7).trim();
  return request.headers.get("x-api-key");
}
