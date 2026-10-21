/**
 * Nucleo server-side do gate de captura do guia (DIGIF-165).
 *
 * Propositalmente framework-free: importa apenas builtins do Node, para rodar
 * com `node --test` (sem bundler) e ser reusado pela API route do Next.
 * NAO importar este arquivo em componentes de cliente: ele cuida de persistencia
 * e de sessao (segredo). O guia so e liberado depois de persistir no CRM.
 */
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { appendFile } from "node:fs/promises";

export const SESSION_COOKIE = "hp_guia_session";
export const GUIDE_SOURCE = "guia-claude-design";

export interface Lead {
  name: string;
  email: string;
  whatsapp: string;
  consent: true;
  marketing: boolean;
}

export type ValidationResult =
  | { ok: true; value: Lead; errors?: undefined }
  | { ok: false; value?: undefined; errors: Record<string, string> };

// --------------------------------------------------------------------------
// Validacao
// --------------------------------------------------------------------------

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Normaliza WhatsApp para E164. BR nacional (10/11 digitos) recebe +55. */
export function normalizeWhatsapp(input: unknown): string | null {
  if (typeof input !== "string") return null;
  const digits = input.replace(/\D/g, "");
  if (digits.length < 8) return null;
  if (digits.length <= 11) return "+55" + digits;
  if (digits.startsWith("55") && (digits.length === 12 || digits.length === 13)) return "+" + digits;
  if (digits.length >= 12 && digits.length <= 15) return "+" + digits;
  return null;
}

/**
 * Valida e normaliza o lead. Campos de tenant/org vindos do cliente sao
 * simplesmente ignorados (o org do CRM vem SEMPRE do servidor).
 */
export function validateLead(input: unknown): ValidationResult {
  const obj = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const errors: Record<string, string> = {};

  const name = typeof obj.name === "string" ? obj.name.replace(/\s+/g, " ").trim() : "";
  if (name.length < 2 || name.length > 80) errors.name = "Informe seu nome completo.";
  else if (/[\u0000-\u001f\u007f]/.test(name)) errors.name = "O nome contem caracteres invalidos.";
  else if (!/\p{L}/u.test(name)) errors.name = "Informe um nome valido.";

  const email = typeof obj.email === "string" ? obj.email.trim().toLowerCase() : "";
  if (email.length > 254 || !EMAIL_RE.test(email)) errors.email = "Informe um e-mail valido.";

  const whatsapp = normalizeWhatsapp(obj.whatsapp);
  if (!whatsapp) errors.whatsapp = "Informe um WhatsApp valido com DDD.";

  const consent = obj.consent === true;
  if (!consent) errors.consent = "E preciso aceitar para receber o guia.";

  const marketing = obj.marketing === true;

  if (Object.keys(errors).length > 0 || !whatsapp) return { ok: false, errors };
  return { ok: true, value: { name, email, whatsapp, consent: true, marketing } };
}

// --------------------------------------------------------------------------
// Sessao (cookie HttpOnly assinado; guarda apenas sid + exp, sem PII)
// --------------------------------------------------------------------------

export interface SessionPayload {
  sid: string;
  exp: number;
}

const b64url = (buf: Buffer): string => buf.toString("base64url");
const hmac = (data: string, secret: string): string =>
  b64url(createHmac("sha256", secret).update(data).digest());

export function signSession(payload: SessionPayload, secret: string): string {
  const body = b64url(Buffer.from(JSON.stringify(payload)));
  return body + "." + hmac(body, secret);
}

export function verifySession(
  token: unknown,
  secret: string | undefined,
  now: number = Math.floor(Date.now() / 1000)
): SessionPayload | null {
  if (typeof token !== "string" || !secret) return null;
  const dot = token.indexOf(".");
  if (dot <= 0) return null;
  const body = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = hmac(body, secret);
  if (sig.length !== expected.length) return null;
  if (!timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  let payload: SessionPayload;
  try {
    payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  } catch {
    /* corpo nao e JSON valido */
    return null;
  }
  if (!payload || typeof payload.sid !== "string" || typeof payload.exp !== "number") return null;
  if (payload.exp <= now) return null;
  return payload;
}

export function createSession(
  secret: string,
  ttlSeconds: number,
  now: number = Math.floor(Date.now() / 1000)
): { token: string; exp: number } {
  const exp = now + ttlSeconds;
  return { token: signSession({ sid: randomBytes(16).toString("hex"), exp }, secret), exp };
}

export function sessionIsValid(
  token: unknown,
  secret: string | undefined,
  now: number = Math.floor(Date.now() / 1000)
): boolean {
  return verifySession(token, secret, now) !== null;
}

export function buildSetCookie(token: string, ttlSeconds: number, secure: boolean): string {
  const parts = [
    SESSION_COOKIE + "=" + token,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    "Max-Age=" + ttlSeconds,
  ];
  if (secure) parts.push("Secure");
  return parts.join("; ");
}

// --------------------------------------------------------------------------
// Rate limit e idempotencia (bounded, em memoria)
// --------------------------------------------------------------------------

export interface RateLimiter {
  check(key: string, now?: number): { allowed: boolean; retryAfterMs: number };
}

export function createRateLimiter(opts: {
  limit: number;
  windowMs: number;
  maxKeys?: number;
}): RateLimiter {
  const limit = Math.max(1, opts.limit);
  const windowMs = Math.max(1, opts.windowMs);
  const maxKeys = opts.maxKeys ?? 5000;
  const hits = new Map<string, number[]>();
  return {
    check(key, now = Date.now()) {
      const arr = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
      if (arr.length >= limit) {
        hits.set(key, arr);
        return { allowed: false, retryAfterMs: Math.max(0, windowMs - (now - arr[0])) };
      }
      arr.push(now);
      hits.set(key, arr);
      if (hits.size > maxKeys) {
        // ponytail: descarte FIFO simples; trocar por LRU se throughput exigir
        const oldest = hits.keys().next().value;
        if (oldest !== undefined) hits.delete(oldest);
      }
      return { allowed: true, retryAfterMs: 0 };
    },
  };
}

export interface IdempotencyStore {
  get(key: string, now?: number): unknown;
  set(key: string, value: unknown, now?: number): void;
  /** Marca a chave como "em andamento". false se ja existe resultado ou reserva. */
  reserve(key: string, now?: number): boolean;
  /** Libera uma reserva (usado quando a persistencia falha, para permitir retry). */
  release(key: string): void;
}

export function createIdempotencyStore(opts: { ttlMs: number; maxEntries?: number }): IdempotencyStore {
  const ttlMs = Math.max(1, opts.ttlMs);
  const max = opts.maxEntries ?? 5000;
  const map = new Map<string, { v: unknown; exp: number; pending?: boolean }>();
  return {
    get(key, now = Date.now()) {
      const entry = map.get(key);
      if (!entry) return undefined;
      if (entry.exp <= now) {
        map.delete(key);
        return undefined;
      }
      return entry.pending ? undefined : entry.v;
    },
    set(key, value, now = Date.now()) {
      map.set(key, { v: value, exp: now + ttlMs });
      if (map.size > max) {
        const oldest = map.keys().next().value;
        if (oldest !== undefined) map.delete(oldest);
      }
    },
    reserve(key, now = Date.now()) {
      const entry = map.get(key);
      if (entry && entry.exp > now) return false;
      map.set(key, { v: undefined, exp: now + ttlMs, pending: true });
      if (map.size > max) {
        const oldest = map.keys().next().value;
        if (oldest !== undefined) map.delete(oldest);
      }
      return true;
    },
    release(key) {
      const entry = map.get(key);
      if (entry && entry.pending) map.delete(key);
    },
  };
}

// --------------------------------------------------------------------------
// Adapter de CRM (integravel; org vem do servidor, nunca do cliente)
// --------------------------------------------------------------------------

export type PersistResult =
  | { ok: true; id: string }
  | { ok: false; error: string; retryable?: boolean };

export interface CrmAdapter {
  name: string;
  persistLead(lead: Lead): Promise<PersistResult>;
}

type Env = Record<string, string | undefined>;

export function createCrmAdapter(env: Env): CrmAdapter {
  const endpoint = env.GUIDE_CRM_ENDPOINT?.trim();
  const token = env.GUIDE_CRM_TOKEN?.trim();
  if (endpoint && token) {
    const timeoutMs = Number(env.GUIDE_CRM_TIMEOUT_MS ?? "8000") || 8000;
    return createHttpAdapter(endpoint, token, env.GUIDE_CRM_ORG_ID?.trim() ?? "", timeoutMs);
  }
  // Fixture existe SO para QA local e exige opt-in explicito. Nunca prova CRM real.
  if (
    env.GUIDE_CRM_MODE === "fixture" &&
    env.GUIDE_CRM_FIXTURE_FILE &&
    env.GUIDE_CRM_ALLOW_FIXTURE === "1"
  ) {
    return createFixtureAdapter(env.GUIDE_CRM_FIXTURE_FILE);
  }
  return createUnconfiguredAdapter();
}

function createHttpAdapter(endpoint: string, token: string, orgId: string, timeoutMs: number): CrmAdapter {
  return {
    name: "http",
    async persistLead(lead) {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), timeoutMs);
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: "Bearer " + token,
          },
          body: JSON.stringify({ source: GUIDE_SOURCE, org_id: orgId, ...lead }),
          signal: ctrl.signal,
        });
        if (!res.ok) {
          return {
            ok: false,
            error: "crm_http_" + res.status,
            retryable: res.status >= 500 || res.status === 429,
          };
        }
        let id = "lead_" + randomBytes(6).toString("hex");
        try {
          const data = await res.json();
          if (data && typeof data.id === "string") id = data.id;
        } catch {
          /* resposta sem JSON: mantem id gerado */
        }
        return { ok: true, id };
      } catch {
        /* timeout, DNS, conexao recusada */
        return { ok: false, error: "crm_unreachable", retryable: true };
      } finally {
        clearTimeout(timer);
      }
    },
  };
}

function createFixtureAdapter(file: string): CrmAdapter {
  return {
    name: "fixture-test",
    async persistLead(lead) {
      try {
        const record = { ...lead, source: GUIDE_SOURCE, mode: "TEST_FIXTURE" };
        await appendFile(file, JSON.stringify(record) + "\n", "utf8");
        return { ok: true, id: "fixture_" + randomBytes(6).toString("hex") };
      } catch {
        return { ok: false, error: "fixture_write_failed", retryable: true };
      }
    },
  };
}

function createUnconfiguredAdapter(): CrmAdapter {
  return {
    name: "unconfigured",
    async persistLead() {
      return { ok: false, error: "crm_not_configured", retryable: false };
    },
  };
}

// --------------------------------------------------------------------------
// Orquestracao do gate
// --------------------------------------------------------------------------

export interface SubmitDeps {
  adapter: CrmAdapter;
  sessionSecret?: string;
  limiter?: RateLimiter;
  dedupe?: IdempotencyStore;
  requestKey?: string;
  idempotencyKey?: string;
  ttlSeconds?: number;
  secure?: boolean;
  /** clock em segundos; default = Date.now()/1000. Usado tambem (x1000) em ms. */
  now?: () => number;
}

export interface SubmitResult {
  status: number;
  body: Record<string, unknown>;
  setCookie?: string;
}

export async function handleSubmit(raw: unknown, deps: SubmitDeps): Promise<SubmitResult> {
  const clockSec = deps.now ? deps.now() : Math.floor(Date.now() / 1000);
  const clockMs = clockSec * 1000;
  const ttlSeconds = deps.ttlSeconds ?? 60 * 60 * 24 * 7;

  if (deps.limiter && deps.requestKey) {
    const rl = deps.limiter.check(deps.requestKey, clockMs);
    if (!rl.allowed) {
      return {
        status: 429,
        body: { error: "rate_limited", retryAfterMs: Math.round(rl.retryAfterMs) },
      };
    }
  }

  const validation = validateLead(raw);
  if (!validation.ok) {
    return { status: 400, body: { error: "invalid", errors: validation.errors } };
  }

  if (!deps.sessionSecret) {
    // Sem segredo nao da para assinar a sessao: falha fechado, nao libera o guia.
    return { status: 503, body: { error: "server_not_configured" } };
  }

  const idemKey =
    deps.idempotencyKey ?? "lead:" + validation.value.email + "|" + validation.value.whatsapp;
  if (deps.dedupe) {
    const cached = deps.dedupe.get(idemKey, clockMs) as SubmitResult | undefined;
    if (cached) return cached;
    // Reserva sincrona antes de qualquer await: evita corrida de duas requisicoes
    // identicas persistirem em paralelo.
    if (!deps.dedupe.reserve(idemKey, clockMs)) {
      return { status: 409, body: { error: "duplicate_in_flight" } };
    }
  }

  const persisted = await deps.adapter.persistLead(validation.value);
  if (!persisted.ok) {
    // Persistencia falhou: guia NAO e liberado, dados preservados, reserva liberada.
    deps.dedupe?.release(idemKey);
    return { status: 502, body: { error: persisted.error, retryable: !!persisted.retryable } };
  }

  const { token } = createSession(deps.sessionSecret, ttlSeconds, clockSec);
  const setCookie = buildSetCookie(token, ttlSeconds, deps.secure ?? true);
  const result: SubmitResult = { status: 200, body: { ok: true }, setCookie };
  if (deps.dedupe) deps.dedupe.set(idemKey, result, clockMs);
  return result;
}
