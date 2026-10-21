"""Exporta o guia privado em preview local. Não cadastra leads nem prova CRM real."""
import argparse
import base64
import hashlib
import hmac
import html
import json
import os
import time
from pathlib import Path
from urllib.parse import urlsplit
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--base-url", required=True, help="Preview local com o mesmo GUIDE_SESSION_SECRET")
parser.add_argument("--output", default="private/guides/claude-design.pdf")
args = parser.parse_args()
base = args.base_url.rstrip("/")
assert urlsplit(base).hostname in {"localhost", "127.0.0.1", "::1"}, "Exportação autorizada somente no preview local"
secret = os.environ["GUIDE_SESSION_SECRET"]
output = root / args.output
assert output.resolve().is_relative_to(root / "private"), "PDF deve ficar fora de public/"
output.parent.mkdir(parents=True, exist_ok=True)
logo = root / "public/signature.svg"
assert logo.is_file(), "Logo oficial do hp-site ausente"
logo_data = "data:image/svg+xml;base64," + base64.b64encode(logo.read_bytes()).decode()
body = base64.urlsafe_b64encode(json.dumps({"sid": "owner-pdf-export-local-test", "exp": int(time.time()) + 600}, separators=(",", ":")).encode()).decode().rstrip("=")
signature = base64.urlsafe_b64encode(hmac.new(secret.encode(), body.encode(), hashlib.sha256).digest()).decode().rstrip("=")
with sync_playwright() as pw:
    browser = pw.chromium.launch(headless=True, executable_path=os.environ.get("GUIDE_CHROME", "/usr/bin/google-chrome"), args=["--no-sandbox"])
    context = browser.new_context(color_scheme="light", viewport={"width": 1120, "height": 1000}, device_scale_factor=2)
    context.add_cookies([{"name": "hp_guia_session", "value": body + "." + signature, "url": base, "httpOnly": True, "sameSite": "Lax"}])
    page = context.new_page()
    page.goto(base + "/guia-claude-design/conteudo/", wait_until="domcontentloaded")
    assert page.url.endswith("/conteudo/"), "Sessão do preview não autorizou o guia"
    page.evaluate("document.fonts.ready")
    headings = page.locator("main section h2").all_text_contents()
    assert len(headings) == 17, "Conteúdo do guia incompleto"
    toc = "".join("<li><span>" + str(i).zfill(2) + "</span>" + html.escape(text) + "</li>" for i, text in enumerate(headings, 1))
    cover = '<section class="pdf-cover"><img src="' + logo_data + '" alt="Henrique Pimentel, Consultor de Tecnologia em IA"><div><p class="pdf-kicker">GUIA PRÁTICO</p><h1>Postagens em lote<br>com Claude Design.</h1><p class="pdf-summary">Um fluxo de produção com identidade visual, prompts reutilizáveis e revisão antes de publicar.</p></div><p class="pdf-site">henriquepimentel.com.br</p></section><section class="pdf-toc"><h2>Neste guia</h2><ol>' + toc + '</ol></section>'
    page.evaluate("markup => document.querySelector('main').insertAdjacentHTML('beforebegin', markup)", cover)
    page.locator(".pdf-cover img").evaluate("img => img.decode()")
    page.evaluate("document.title = 'Guia Claude Design | Henrique Pimentel'")
    page.add_style_tag(content=r"""
      @media print {
        html,body { background:var(--bg-primary); color:var(--text-primary); }
        body { display:block!important; }
        body>header,body>footer,main>div>header,main .print\:hidden { display:none!important; }
        main>div { padding:0!important; max-width:none!important; }
        main article { max-width:none!important; padding:0!important; margin:0!important; }
        .pdf-cover { min-height:240mm; display:flex; flex-direction:column; justify-content:space-between; break-after:page; }
        .pdf-cover img { width:290px; height:auto; align-self:flex-start; }
        .pdf-cover h1 { font-family:var(--font-geist); font-size:35pt; line-height:1.08; font-weight:700; letter-spacing:-0.035em; margin:6mm 0; }
        .pdf-cover>div { border-left:5px solid var(--accent-primary); padding-left:7mm; }
        .pdf-kicker { font-size:10pt; font-weight:700; letter-spacing:0.08em; color:var(--accent-primary); }
        .pdf-summary { font-size:14pt; line-height:1.6; max-width:130mm; color:var(--text-secondary); }
        .pdf-site { font-family:var(--font-jetbrains-mono); font-size:10pt; color:var(--text-secondary); }
        .pdf-toc { min-height:238mm; break-after:page; }
        .pdf-toc h2 { font-family:var(--font-fraunces); font-size:28pt; margin:0 0 8mm; }
        .pdf-toc ol { list-style:none; padding:0; }
        .pdf-toc li { display:flex; gap:6mm; margin:0 0 3mm; font-size:10.5pt; line-height:1.4; }
        .pdf-toc li span { font-family:var(--font-jetbrains-mono); color:var(--accent-primary); }
        main h2 { break-after:avoid; font-size:20pt!important; line-height:1.2!important; margin-top:8mm!important; }
        main p,main li { font-size:10.5pt!important; line-height:1.55!important; }
        main pre,main code { white-space:pre-wrap!important; overflow-wrap:anywhere!important; font-size:9pt!important; line-height:1.55!important; }
        main pre { break-inside:avoid; border:1px solid var(--border-default); padding:4mm!important; }
        main a { color:var(--accent-primary); }
      }
    """)
    page.emulate_media(media="print")
    assert page.locator(".pdf-cover img").evaluate("e => e.complete && e.naturalWidth > 0"), "Logo não renderizou"
    page.pdf(path=str(output), format="A4", print_background=True, tagged=True, outline=True,
             margin={"top": "20mm", "right": "20mm", "bottom": "20mm", "left": "20mm"},
             display_header_footer=True,
             header_template='<div style="font-size:8px;width:100%;padding:0 20mm;color:#475569">HENRIQUE PIMENTEL | GUIA CLAUDE DESIGN</div>',
             footer_template='<div style="font-size:8px;width:100%;padding:0 20mm;display:flex;justify-content:space-between;color:#475569"><span>henriquepimentel.com.br</span><span class="pageNumber"></span></div>')
    browser.close()
assert output.read_bytes().startswith(b"%PDF-"), "Exportação não gerou PDF"
print(json.dumps({"file": str(output), "bytes": output.stat().st_size, "sha256": hashlib.sha256(output.read_bytes()).hexdigest(), "sections": len(headings), "logo": str(logo.relative_to(root)), "crm_verified": False}, ensure_ascii=False))
