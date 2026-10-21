import test from "node:test";
import assert from "node:assert/strict";
import { createSession } from "../src/lib/lead-guide/gate.ts";
import * as download from "../src/lib/lead-guide/gate.ts";
const secret = "local-test-secret-longer-than-thirty-two-characters";
const fixture = Buffer.from("%PDF-1.4\nLocal test fixture");

test("download sem sessão, adulterado ou expirado não lê o PDF", async () => {
  let reads=0;
  const load=async()=>{reads++;return fixture;};
  for (const token of [undefined,"forged",createSession(secret,1,1).token]) {
    const res=await download.guidePdfResponse(token,secret,load);
    assert.equal(res.status,307);
    assert.equal(res.headers.get("location"),"/guia-claude-design");
    assert.match(res.headers.get("cache-control")??"",/no-store/);
  }
  assert.equal(reads,0);
});

test("download com sessão válida entrega PDF privado como anexo", async()=>{
 const res=await download.guidePdfResponse(createSession(secret,600).token,secret,async()=>fixture);
 assert.equal(res.status,200);
 assert.equal(res.headers.get("content-type"),"application/pdf");
 assert.match(res.headers.get("content-disposition")??"",/attachment; filename="guia-claude-design-henrique-pimentel.pdf"/);
 assert.match(res.headers.get("cache-control")??"",/private, no-store/);
 assert.match(res.headers.get("x-robots-tag")??"",/noindex/);
 assert.equal(res.headers.get("x-content-type-options"),"nosniff");
 assert.equal(res.headers.get("vary"),"Cookie");
 assert.deepEqual(Buffer.from(await res.arrayBuffer()),fixture);
});

test("PDF ausente ou inválido falha fechado sem revelar caminho", async()=>{
 const token=createSession(secret,600).token;
 for (const load of [async()=>{throw new Error("/private/secret/path");},async()=>Buffer.from("not a PDF")]){
  const res=await download.guidePdfResponse(token,secret,load);
  assert.equal(res.status,503);
  assert.doesNotMatch(await res.text(),/secret|private/);
 }
});
