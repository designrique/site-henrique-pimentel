import test from "node:test";
import assert from "node:assert/strict";
import { rateLimitKey, handleSubmit, createRateLimiter } from "../src/lib/lead-guide/gate.ts";

test("a chave de rate limit usa o IP que o nosso proxy anexou, não o valor do cliente", () => {
  const spoofed = new Headers({ "x-forwarded-for": "10.0.0.1, 203.0.113.9" });
  const rotated = new Headers({ "x-forwarded-for": "10.0.0.2, 203.0.113.9" });
  assert.equal(rateLimitKey(spoofed), "203.0.113.9");
  assert.equal(rateLimitKey(rotated), "203.0.113.9");
  assert.equal(rateLimitKey(new Headers({ "x-real-ip": "198.51.100.7" })), "198.51.100.7");
  assert.equal(rateLimitKey(new Headers({})), "unknown");
  assert.equal(rateLimitKey(new Headers({ "x-forwarded-for": " , " })), "unknown");
});

test("rotacionar o X-Forwarded-For não escapa do rate limit", async () => {
  const limiter = createRateLimiter({ limit: 2, windowMs: 60_000 });
  const adapter = { name: "test", persistLead: async () => ({ ok: true as const, id: "x" }) };
  const statuses: number[] = [];
  for (let i = 0; i < 4; i += 1) {
    const headers = new Headers({ "x-forwarded-for": "10.0.0." + i + ", 203.0.113.9" });
    const result = await handleSubmit(
      { name: "Ana Lima", email: "ana@example.com", whatsapp: "(81) 97777-6666", consent: true },
      { adapter, sessionSecret: "segredo-de-teste-com-tamanho-suficiente-para-hmac", limiter, requestKey: rateLimitKey(headers), now: () => 1_700_000_000 },
    );
    statuses.push(result.status);
  }
  assert.deepEqual(statuses, [200, 200, 429, 429]);
});
