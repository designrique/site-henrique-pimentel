import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
const hash=(b:Buffer)=>createHash("sha256").update(b).digest("hex");
test("logo do PDF é o SVG original do site atual, não HP genérico",async()=>{
 const logo=await readFile(new URL("../public/signature.svg",import.meta.url));
 assert.equal(hash(logo),"cfc3e1d632c8bef00f268fdfa6f2e314f9f992fd806f3248d9c8fc6670b1d8d3");
 assert.match(logo.toString(),/M25 54 Q50 46 75 54/);
 assert.doesNotMatch(logo.toString(),/HP\.<\/text>/);
});
test("tokens do PDF são os tokens reais da mesma revisão do site",async()=>{
 const tokens=await readFile(new URL("../private/guides/pdf-brand-tokens.css",import.meta.url));
 assert.equal(hash(tokens),"840851d798353f9df978274124e6fd919c611e3adff42db4e64cf0b881906cda");
});
test("fontes oficiais Jost e Raleway estão incorporadas ao exportador",async()=>{
 const fonts=await readFile(new URL("../private/guides/pdf-brand-fonts.css",import.meta.url),"utf8");
 assert.match(fonts,/font-family: ['"]Jost['"]/);
 assert.match(fonts,/font-family: ['"]Raleway['"]/);
 assert.match(fonts,/data:font\//);
});
