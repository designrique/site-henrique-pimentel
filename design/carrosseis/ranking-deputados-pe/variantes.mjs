// Renderiza o slide 3 em varias escalas para comparacao.
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const out = process.argv[2] || here;
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const p = await b.newPage({ viewport: { width: 1080, height: 1440 } });
await p.goto('file://' + join(here, 'carrossel.html'), { waitUntil: 'load' });
await p.evaluate(() => document.fonts.ready);
for (const sc of [1.45, 1.62, 1.80]) {
  await p.evaluate(s => document.querySelector('.slide.photo').style.setProperty('--photo-scale', s), sc);
  await (await p.$('.slide.photo')).screenshot({ path: join(out, `escala-${String(sc).replace('.', '')}.png`) });
  console.log('escala', sc, '| rosto termina em', Math.round(442 * sc + 60), 'px');
}
await b.close();
