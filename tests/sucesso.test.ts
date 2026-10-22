import test from "node:test";
import assert from "node:assert/strict";

const secret = "local-test-secret-longer-than-thirty-two-characters";

test("gate do /sucesso: verifySession rejeita sem secret, sem token e expirado", async () => {
  const { verifySession, createSession } = await import("../src/lib/lead-guide/gate.ts");
  assert.equal(verifySession("any", undefined), null);
  assert.equal(verifySession(undefined, secret), null);
  assert.equal(verifySession(createSession(secret, -1).token, secret), null);
  const ok = verifySession(createSession(secret, 600).token, secret);
  assert.ok(ok, "sessão válida deve passar");
});
