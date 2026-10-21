import test from "node:test";
import assert from "node:assert/strict";
import { accessResponse } from "../src/lib/lead-guide/gate.ts";
import { createSession, SESSION_COOKIE } from "../src/lib/lead-guide/gate.ts";

const secret = "local-test-secret-longer-than-thirty-two-characters";
const now = 1_700_000_000;

test("link válido emite sessão e redireciona para o guia privado", () => {
  const { token } = createSession(secret, 259200, now);
  const res = accessResponse(token, secret, now + 10);
  assert.equal(res.status, 303);
  assert.equal(res.headers.get("location"), "/guia-claude-design/conteudo/");
  const cookie = res.headers.get("set-cookie") ?? "";
  assert.ok(cookie.startsWith(SESSION_COOKIE + "=" + token));
  assert.match(cookie, /HttpOnly/);
  assert.match(cookie, /SameSite=Lax/);
  assert.match(cookie, /Max-Age=259190/);
  assert.match(res.headers.get("cache-control") ?? "", /no-store/);
  assert.match(res.headers.get("x-robots-tag") ?? "", /noindex/);
  assert.equal(res.headers.get("referrer-policy"), "no-referrer");
});

test("link inválido, expirado ou multibyte volta para a captura sem sessão", () => {
  const expired = createSession(secret, 60, now).token;
  for (const token of [undefined, "", "forged", expired, createSession(secret, 60, now).token.slice(0, -1) + "é", createSession(secret, 60, now).token.replace(".", "")]) {
    const res = accessResponse(token, secret, now + 3600);
    assert.equal(res.status, 307);
    assert.equal(res.headers.get("location"), "/guia-claude-design/?acesso=invalido");
    assert.equal(res.headers.get("set-cookie"), null);
  }
});

test("sem segredo no servidor o acesso falha fechado", () => {
  const { token } = createSession(secret, 259200, now);
  const res = accessResponse(token, undefined, now);
  assert.equal(res.status, 307);
  assert.equal(res.headers.get("set-cookie"), null);
});

test("cookie seguro quando o ambiente é produção", () => {
  const { token } = createSession(secret, 600, now);
  assert.doesNotMatch(accessResponse(token, secret, now, false).headers.get("set-cookie") ?? "", /Secure/);
  assert.match(accessResponse(token, secret, now, true).headers.get("set-cookie") ?? "", /Secure/);
});
