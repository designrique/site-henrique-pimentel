// Testes do nucleo do gate (DIGIF-165). Roda com `node --test` (strip de tipos nativo).
// Nenhuma credencial real: SECRET e fixture sao valores de teste locais.
import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import {
  normalizeWhatsapp,
  validateLead,
  createSession,
  signSession,
  verifySession,
  sessionIsValid,
  buildSetCookie,
  createRateLimiter,
  createIdempotencyStore,
  createCrmAdapter,
  handleSubmit,
  SESSION_COOKIE,
  type Lead,
  type PersistResult,
} from "../src/lib/lead-guide/gate.ts";

const SECRET = "test-secret-local-nao-real";
const VALID = {
  name: "Maria Silva",
  email: "Maria@Exemplo.COM",
  whatsapp: "(81) 99999-8888",
  consent: true,
};

function captureAdapter(result: PersistResult = { ok: true, id: "lead_1" }) {
  const calls: Lead[] = [];
  return {
    name: "capture",
    calls,
    async persistLead(lead: Lead): Promise<PersistResult> {
      calls.push(lead);
      return result;
    },
  };
}

function validLead(): Lead {
  const v = validateLead(VALID);
  if (!v.ok) throw new Error("fixture invalida");
  return v.value;
}

function cookieToken(setCookie: string): string {
  return setCookie.slice(setCookie.indexOf("=") + 1, setCookie.indexOf(";"));
}

// --- validacao -------------------------------------------------------------

test("normalizeWhatsapp converte numero BR nacional para E164", () => {
  assert.equal(normalizeWhatsapp("(81) 99999-8888"), "+5581999998888");
  assert.equal(normalizeWhatsapp("+55 81 99999-8888"), "+5581999998888");
  assert.equal(normalizeWhatsapp("5581999998888"), "+5581999998888");
  assert.equal(normalizeWhatsapp("+351912345678"), "+351912345678");
});

test("normalizeWhatsapp rejeita entradas invalidas", () => {
  assert.equal(normalizeWhatsapp("12345"), null);
  assert.equal(normalizeWhatsapp(""), null);
  assert.equal(normalizeWhatsapp("nao e numero"), null);
});

test("validateLead aceita lead valido e normaliza campos", () => {
  const r = validateLead(VALID);
  assert.equal(r.ok, true);
  assert.equal(r.value.email, "maria@exemplo.com");
  assert.equal(r.value.whatsapp, "+5581999998888");
  assert.equal(r.value.name, "Maria Silva");
  assert.equal(r.value.consent, true);
  assert.equal(r.value.marketing, false);
});

test("validateLead rejeita campos invalidos individualmente", () => {
  const noConsent = validateLead({ ...VALID, consent: false });
  assert.equal(noConsent.ok, false);
  assert.ok(noConsent.errors.consent);

  const badEmail = validateLead({ ...VALID, email: "sem-arroba" });
  assert.equal(badEmail.ok, false);
  assert.ok(badEmail.errors.email);

  const shortName = validateLead({ ...VALID, name: "A" });
  assert.equal(shortName.ok, false);
  assert.ok(shortName.errors.name);

  const badPhone = validateLead({ ...VALID, whatsapp: "123" });
  assert.equal(badPhone.ok, false);
  assert.ok(badPhone.errors.whatsapp);
});

test("validateLead ignora tenant/org vindos do cliente (anti-spoof)", () => {
  const r = validateLead({ ...VALID, orgId: "org_atacante", tenant: "x", organization_id: "y" });
  assert.equal(r.ok, true);
  assert.equal("orgId" in r.value, false);
  assert.equal("tenant" in r.value, false);
  assert.equal("organization_id" in r.value, false);
});

// --- sessao ----------------------------------------------------------------

test("createSession/verifySession faz roundtrip e rejeita adulteracao/expiracao", () => {
  const s = createSession(SECRET, 100, 1000);
  assert.ok(s.token.includes("."));
  const ok = verifySession(s.token, SECRET, 1001);
  assert.ok(ok);
  assert.equal(typeof ok.sid, "string");

  assert.equal(verifySession(s.token, SECRET, 2000), null, "expirado");
  assert.equal(verifySession(s.token, "outro-secret", 1001), null, "secret errado");
  const tampered = s.token.slice(0, -1) + (s.token.endsWith("A") ? "B" : "A");
  assert.equal(verifySession(tampered, SECRET, 1001), null, "adulterado");
  assert.equal(verifySession(undefined, SECRET, 1001), null, "ausente");
  assert.equal(signSession({ sid: "x", exp: 5 }, SECRET).length > 0, true);
});

test("sessionIsValid exige cookie e secret", () => {
  const s = createSession(SECRET, 100, 1000);
  assert.equal(sessionIsValid(undefined, SECRET), false);
  assert.equal(sessionIsValid(s.token, undefined), false);
});

test("buildSetCookie traz flags de seguranca e nao carrega PII", () => {
  const s = createSession(SECRET, 100, 1000);
  const c = buildSetCookie(s.token, 100, true);
  assert.ok(c.startsWith(SESSION_COOKIE + "="));
  assert.ok(c.includes("HttpOnly"));
  assert.ok(c.includes("SameSite=Lax"));
  assert.ok(c.includes("Max-Age=100"));
  assert.ok(c.includes("Secure"));
  assert.equal(c.includes("@"), false);
  assert.equal(c.includes("+55"), false);
});

// --- rate limit / dedupe ---------------------------------------------------

test("rate limiter bloqueia acima do limite e reseta na janela", () => {
  const rl = createRateLimiter({ limit: 2, windowMs: 1000 });
  assert.equal(rl.check("ip", 0).allowed, true);
  assert.equal(rl.check("ip", 1).allowed, true);
  const blocked = rl.check("ip", 2);
  assert.equal(blocked.allowed, false);
  assert.ok(blocked.retryAfterMs > 0);
  assert.equal(rl.check("ip", 1001).allowed, true, "nova janela");
  assert.equal(rl.check("outro-ip", 2).allowed, true, "chave independente");
});

test("idempotency store guarda e respeita TTL", () => {
  const store = createIdempotencyStore({ ttlMs: 100, maxEntries: 10 });
  store.set("k", { status: 200 }, 0);
  assert.deepEqual(store.get("k", 50), { status: 200 });
  assert.equal(store.get("k", 200), undefined, "expirado");
});

// --- adapter ---------------------------------------------------------------

test("createCrmAdapter sem configuracao falha fechado", async () => {
  const a = createCrmAdapter({});
  const r = await a.persistLead(validLead());
  assert.equal(r.ok, false);
  assert.equal(r.error, "crm_not_configured");
});

test("createCrmAdapter expoe adapter http quando configurado", () => {
  const a = createCrmAdapter({
    GUIDE_CRM_ENDPOINT: "https://example.com/leads",
    GUIDE_CRM_TOKEN: "tok",
    GUIDE_CRM_ORG_ID: "org_server",
  });
  assert.equal(a.name, "http");
});

test("fixture de CRM (TESTE) exige flag explicita e grava arquivo", async () => {
  const dir = await mkdtemp(join(tmpdir(), "hpguide-"));
  const file = join(dir, "leads.jsonl");
  try {
    const off = createCrmAdapter({ GUIDE_CRM_MODE: "fixture", GUIDE_CRM_FIXTURE_FILE: file });
    const rOff = await off.persistLead(validLead());
    assert.equal(rOff.ok, false, "sem flag explicita nao liga fixture");

    const on = createCrmAdapter({
      GUIDE_CRM_MODE: "fixture",
      GUIDE_CRM_FIXTURE_FILE: file,
      GUIDE_CRM_ALLOW_FIXTURE: "1",
    });
    assert.equal(on.name, "fixture-test");
    const rOn = await on.persistLead(validLead());
    assert.equal(rOn.ok, true);
    const written = await readFile(file, "utf8");
    assert.ok(written.includes("maria@exemplo.com"), "fixture grava o lead");
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

// --- orquestracao do gate --------------------------------------------------

test("handleSubmit valido: 200, persiste uma vez, cookie assinado sem PII", async () => {
  const adapter = captureAdapter();
  const res = await handleSubmit(VALID, {
    adapter,
    sessionSecret: SECRET,
    now: () => 1000,
    ttlSeconds: 100,
  });
  assert.equal(res.status, 200);
  assert.ok(res.setCookie);
  assert.equal(adapter.calls.length, 1);
  assert.equal(adapter.calls[0].email, "maria@exemplo.com");
  assert.equal(res.setCookie.includes("maria"), false);
  assert.equal(sessionIsValid(cookieToken(res.setCookie), SECRET, 1001), true);
});

test("handleSubmit invalido: 400, nao persiste, sem cookie", async () => {
  const adapter = captureAdapter();
  const res = await handleSubmit({ email: "x" }, { adapter, sessionSecret: SECRET });
  assert.equal(res.status, 400);
  assert.equal(res.setCookie, undefined);
  assert.equal(adapter.calls.length, 0);
  assert.equal(res.body.error, "invalid");
  assert.ok(res.body.errors);
});

test("handleSubmit sem secret: 503, falha fechado", async () => {
  const adapter = captureAdapter();
  const res = await handleSubmit(VALID, { adapter, sessionSecret: undefined });
  assert.equal(res.status, 503);
  assert.equal(res.setCookie, undefined);
  assert.equal(adapter.calls.length, 0);
});

test("handleSubmit respeita rate limit: 429 sem persistir", async () => {
  const adapter = captureAdapter();
  const limiter = createRateLimiter({ limit: 1, windowMs: 60000 });
  const opts = { adapter, sessionSecret: SECRET, limiter, requestKey: "client-key-1", now: () => 1000 };
  const r1 = await handleSubmit(VALID, opts);
  const r2 = await handleSubmit(VALID, opts);
  assert.equal(r1.status, 200);
  assert.equal(r2.status, 429);
  assert.equal(adapter.calls.length, 1);
});

test("handleSubmit com CRM nao configurado: 502 sem liberar guia", async () => {
  const adapter = createCrmAdapter({});
  const res = await handleSubmit(VALID, { adapter, sessionSecret: SECRET });
  assert.equal(res.status, 502);
  assert.equal(res.setCookie, undefined);
  assert.equal(res.body.error, "crm_not_configured");
});

test("handleSubmit com falha upstream: 502 preserva dados e sinaliza retry", async () => {
  const adapter = captureAdapter({ ok: false, error: "crm_unreachable", retryable: true });
  const res = await handleSubmit(VALID, { adapter, sessionSecret: SECRET });
  assert.equal(res.status, 502);
  assert.equal(res.setCookie, undefined);
  assert.equal(res.body.retryable, true);
});

test("double submit e idempotente: persiste uma vez, mesmo cookie", async () => {
  const adapter = captureAdapter();
  const dedupe = createIdempotencyStore({ ttlMs: 10000 });
  const opts = { adapter, sessionSecret: SECRET, dedupe, now: () => 1000, ttlSeconds: 100 };
  const r1 = await handleSubmit(VALID, opts);
  const r2 = await handleSubmit(VALID, opts);
  assert.equal(r1.status, 200);
  assert.equal(r2.status, 200);
  assert.equal(adapter.calls.length, 1, "retry nao persiste de novo");
  assert.equal(r1.setCookie, r2.setCookie);
});

test("payload nao vaza tenant para o adapter (anti-spoof end-to-end)", async () => {
  const adapter = captureAdapter();
  const res = await handleSubmit({ ...VALID, orgId: "org_atacante" }, {
    adapter,
    sessionSecret: SECRET,
    now: () => 1000,
  });
  assert.equal(res.status, 200);
  assert.equal("orgId" in adapter.calls[0], false);
  assert.equal("tenant" in adapter.calls[0], false);
});

test("idempotency store reserva em andamento e libera no release", () => {
  const store = createIdempotencyStore({ ttlMs: 100, maxEntries: 10 });
  assert.equal(store.reserve("k", 0), true, "primeiro reserva");
  assert.equal(store.reserve("k", 0), false, "segundo nao entra enquanto pendente");
  assert.equal(store.get("k", 0), undefined, "pendente nao devolve resultado");
  store.release("k");
  assert.equal(store.reserve("k", 0), true, "apos release, reserva de novo");
});

test("submit concorrente da mesma chave persiste uma vez", async () => {
  const adapter = captureAdapter();
  const dedupe = createIdempotencyStore({ ttlMs: 10000, maxEntries: 10 });
  const opts = { adapter, sessionSecret: SECRET, dedupe, now: () => 1000, ttlSeconds: 100 };
  const [a, b] = await Promise.all([handleSubmit(VALID, opts), handleSubmit(VALID, opts)]);
  assert.equal(adapter.calls.length, 1, "nao persiste duas vezes em paralelo");
  assert.deepEqual([a.status, b.status].sort(), [200, 409]);
});

test("falha de persistencia libera a reserva para retry", async () => {
  const adapter = captureAdapter({ ok: false, error: "crm_unreachable", retryable: true });
  const dedupe = createIdempotencyStore({ ttlMs: 10000, maxEntries: 10 });
  const opts = { adapter, sessionSecret: SECRET, dedupe, now: () => 1000, ttlSeconds: 100 };
  const r1 = await handleSubmit(VALID, opts);
  assert.equal(r1.status, 502);
  const r2 = await handleSubmit(VALID, opts);
  assert.equal(r2.status, 502, "retry apos falha nao fica preso na reserva");
});
