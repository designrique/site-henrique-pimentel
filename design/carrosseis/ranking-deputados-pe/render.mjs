// Renderiza cada .slide do carrossel.html em PNG 1080x1440.
// uso: node render.mjs
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, 'png');
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1080, height: 1440 }, deviceScaleFactor: 1 });
await page.goto('file://' + join(here, 'carrossel.html'), { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.addStyleTag({ content: 'body{gap:0;padding:0;background:transparent}' });

const slides = await page.$$('.slide');
for (const [i, s] of slides.entries()) {
  const n = String(i + 1).padStart(2, '0');
  await s.screenshot({ path: join(out, `${n}.png`) });
  console.log('ok', n);
}
await browser.close();
