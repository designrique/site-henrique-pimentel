import test from "node:test";
import assert from "node:assert/strict";
import { createMailer } from "../src/lib/lead-guide/email.ts";
import {
  handleSubmit,
  verifySession,
  createSession,
  buildAccessLink,
  guideEmail,
  createIdempotencyStore,
} from "../src/lib/lead-guide/gate.ts";

const secret = "local-test-secret-longer-than-thirty-two-characters";
const base = "https://henriquepimentel.com.br";
const smtpEnv = {
  SMTP_HOST: "smtp.example.com",
  SMTP_PORT: "587",
  SMTP_USER: "contato@example.com",
  SMTP_PASSWORD: "not-a-real-password",
  EMAIL_FROM: "Henrique Pimentel <contato@example.com>",
};

interface Sent {
  to: string;
  from: string;
  subject: string;
  html: string;
  text: string;
}

function fakeTransport(options: Record<string, unknown>) {
  return {
    options,
    sent: [] as Sent[],
    async sendMail(message: Sent) {
      this.sent.push(message);
      return { messageId: "<test-message-id@example.com>" };
    },
  };
}

test("link de acesso é assinado, temporário e sem dados pessoais", () => {
  const link = buildAccessLink(base, secret, 259200, 1_700_000_000);
  assert.match(link, /^https:\/\/henriquepimentel\.com\.br\/guia-claude-design\/acesso\?t=[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]{43}$/);
  const token = new URL(link).searchParams.get("t") ?? "";
  assert.doesNotMatch(link, /@|%40|\+55|nome|email/i);
  const payload = verifySession(token, secret, 1_700_000_000);
  assert.ok(payload);
  assert.equal(payload?.exp, 1_700_000_000 + 259200);
  assert.equal(verifySession(token, secret, 1_700_000_000 + 259201), null);
  assert.equal(verifySession(token, "outro-segredo-com-tamanho-suficiente-para-testar", 1_700_000_000), null);
});

test("conteúdo do e-mail leva o link, a marca e a validade", () => {
  const link = buildAccessLink(base, secret, 259200, 1_700_000_000);
  const content = guideEmail(link);
  assert.match(content.subject, /Claude Design/);
  assert.ok(content.text.includes(link));
  assert.ok(content.html.includes(link));
  assert.match(content.text, /Henrique Pimentel/);
  assert.doesNotMatch(content.text, /\u2014/);
});

test("mailer sem configuração falha fechado, sem lançar", async () => {
  const mailer = createMailer({});
  assert.equal(mailer.name, "unconfigured");
  const result = await mailer.send({ to: "a@b.com", subject: "s", text: "t", html: "<p>t</p>" });
  assert.equal(result.ok, false);
});

test("mailer configurado usa SMTP existente e devolve message-id", async () => {
  const transports: ReturnType<typeof fakeTransport>[] = [];
  const mailer = createMailer(smtpEnv, {
    createTransport: (options) => {
      const transport = fakeTransport(options);
      transports.push(transport);
      return transport;
    },
  });
  assert.equal(mailer.name, "smtp");
  assert.deepEqual(transports[0].options, {
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: { user: "contato@example.com", pass: "not-a-real-password" },
  });
  const link = buildAccessLink(base, secret, 259200, 1_700_000_000);
  const result = await mailer.send({ to: "lead@example.com", subject: "Guia", text: "Olá " + link, html: "<p>" + link + "</p>" });
  assert.equal(result.ok, true);
  const message = transports[0].sent[0];
  assert.equal(message.to, "lead@example.com");
  assert.equal(message.from, smtpEnv.EMAIL_FROM);
  assert.match(message.subject, /guia/i);
  assert.ok(message.html.includes(link));
});

test("falha do provedor não lança e não quebra a sessão já liberada", async () => {
  const env = { ...smtpEnv };
  let attempts = 0;
  const failing = createMailer(env, {
    createTransport: () => ({ sendMail: async () => { attempts += 1; throw new Error("smtp down"); } }),
  });
  const result = await handleSubmit(
    { name: "Maria Silva", email: "maria@example.com", whatsapp: "(81) 99999-8888", consent: true },
    {
      adapter: { name: "test", persistLead: async () => ({ ok: true as const, id: "lead-id-1" }) },
      sessionSecret: secret,
      mailer: failing,
      baseUrl: base,
      now: () => 1_700_000_000,
    },
  );
  assert.equal(result.status, 200);
  assert.equal(result.body.email, "failed");
  assert.ok(result.setCookie?.includes("HttpOnly"));
  assert.equal(attempts, 1);
});

test("envio de e-mail acontece uma única vez por cadastro, mesmo em repetição", async () => {
  const transports: ReturnType<typeof fakeTransport>[] = [];
  const mailer = createMailer(smtpEnv, {
    createTransport: (options) => {
      const transport = fakeTransport(options);
      transports.push(transport);
      return transport;
    },
  });
  const adapter = { name: "test", persistLead: async () => ({ ok: true as const, id: "lead-id-2" }) };
  const dedupe = createIdempotencyStore({ ttlMs: 60_000 });
  const payload = { name: "João Souza", email: "joao@example.com", whatsapp: "(81) 98888-7777", consent: true };
  const first = await handleSubmit(payload, { adapter, sessionSecret: secret, mailer, baseUrl: base, dedupe, now: () => 1_700_000_001 });
  const second = await handleSubmit(payload, { adapter, sessionSecret: secret, mailer, baseUrl: base, dedupe, now: () => 1_700_000_002 });
  assert.equal(first.body.email, "sent");
  assert.equal(second.body.email, "sent");
  assert.equal(transports[0].sent.length, 1);
  assert.equal(first.setCookie, second.setCookie);
});

test("cookie de sessão continua válido como link de acesso ao guia", () => {
  const { token } = createSession(secret, 600, 1_700_000_000);
  assert.ok(verifySession(token, secret, 1_700_000_100));
});
