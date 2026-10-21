import test from "node:test";
import assert from "node:assert/strict";
import { createCrmAdapter, createIdempotencyStore, handleSubmit, normalizeWhatsapp, verifySession } from "../src/lib/lead-guide/gate.ts";
import * as gate from "../src/lib/lead-guide/gate.ts";
const readRequestBody = gate.readRequestBody;
const ORG = "a3e29f94-746c-47c1-be74-e79040e22db0";
const SECRET = "test-only-session-secret-at-least-32-characters";
const lead = { name: "Teste Guia", email: "guia@example.invalid", whatsapp: "81999998888", consent: true };
const config = { GUIDE_CRM_ENDPOINT: "https://example.com/leads", GUIDE_CRM_TOKEN: "test-only-token", GUIDE_CRM_ORG_ID: ORG };

test("CRM 2xx sem confirmação ou com org errada não libera sessão", async () => {
  const original = globalThis.fetch;
  try {
    for (const [body, status] of [["<html>ok</html>",200], [JSON.stringify({error:"failed"}),200], [null,204], [JSON.stringify({id:"contact",organization_id:"wrong"}),200], [JSON.stringify({id:"",organization_id:ORG}),200]] as const) {
      globalThis.fetch = async () => new Response(body,{status});
      const result = await handleSubmit(lead,{adapter:createCrmAdapter(config),sessionSecret:SECRET});
      assert.equal(result.status,502);
      assert.equal(result.setCookie,undefined);
    }
    globalThis.fetch = async () => Response.json({id:"contact",organization_id:ORG});
    const result = await handleSubmit(lead,{adapter:createCrmAdapter(config),sessionSecret:SECRET});
    assert.equal(result.status,200);
  } finally { globalThis.fetch = original; }
});

test("idempotência é vinculada ao cadastro, não à chave escolhida pelo cliente", async () => {
  let calls=0;
  const deps={ adapter:{name:"test",persistLead:async()=>{calls++;return {ok:true as const,id:"contact"};}}, sessionSecret:SECRET, dedupe:createIdempotencyStore({ttlMs:10000}), idempotencyKey:"attacker-key" };
  assert.equal((await handleSubmit(lead,deps)).status,200);
  assert.equal((await handleSubmit({...lead,email:"other@example.invalid"},deps)).status,200);
  assert.equal(calls,2);
  assert.equal((await handleSubmit(lead,{...deps,idempotencyKey:"changed-key"})).status,200);
  assert.equal(calls,2);
});

test("cookie com assinatura multibyte falha fechado, sem exceção", () => {
  assert.equal(verifySession("eyJzaWQiOiJ4IiwiZXhwIjo5OTk5OTk5OTk5fQ.é"+"A".repeat(42),SECRET),null);
});

test("telefone nacional exige DDD e formato brasileiro válido", () => {
  for (const phone of ["12345678","999998888","00999998888","8191234567","8199998888abc","+000123456789"]) assert.equal(normalizeWhatsapp(phone),null,phone);
  assert.equal(normalizeWhatsapp("(81) 99999-8888"),"+5581999998888");
  assert.equal(normalizeWhatsapp("(81) 3333-4444"),"+558133334444");
});

test("produção não habilita fixture nem permite org diferente", () => {
  assert.equal(createCrmAdapter({NODE_ENV:"production",GUIDE_CRM_MODE:"fixture",GUIDE_CRM_ALLOW_FIXTURE:"1",GUIDE_CRM_FIXTURE_FILE:"/tmp/not-used"}).name,"unconfigured");
  assert.equal(createCrmAdapter({...config,GUIDE_CRM_ORG_ID:"other-org"}).name,"unconfigured");
});

test("corpo chunked é interrompido ao exceder o limite em bytes", async () => {
  let cancelled=false;
  const req={body:new ReadableStream({start(controller){controller.enqueue(new Uint8Array(4097));},cancel(){cancelled=true;}})} as Request;
  await assert.rejects(readRequestBody(req,4096),/payload_too_large/);
  assert.equal(cancelled,true);
  assert.equal(await readRequestBody(new Request("https://example.com",{method:"POST",body:'{"ok":true}'}),4096),'{"ok":true}');
});
