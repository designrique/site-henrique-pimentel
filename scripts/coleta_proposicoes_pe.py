#!/usr/bin/env python3
"""Coleta proposições dos deputados de PE — federais (Câmara API) e estaduais (ALEPE XML)."""
import json, time, urllib.request, urllib.parse, xml.etree.ElementTree as ET

OUT = "/tmp/ranking_deputados_pe"
import os
os.makedirs(OUT, exist_ok=True)

def get_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "hermes-research"})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except Exception as e:
            if attempt == 3: raise
            time.sleep(2 ** attempt)

def get_xml(url):
    req = urllib.request.Request(url, headers={"User-Agent": "hermes-research"})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.read()
        except Exception as e:
            if attempt == 3: raise
            time.sleep(2 ** attempt)

# ── 1. Deputados federais de PE ────────────────────────────────
deps = get_json("https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=PE&itens=100")["dados"]
print(f"Deputados federais PE: {len(deps)}")

# ── 2. Proposições por deputado federal (2023+, mandato atual) ──
federais = []
for dep in deps:
    dep_id = dep["id"]
    props = []
    for ano in range(2023, 2027):
        page = 1
        while True:
            url = f"https://dadosabertos.camara.leg.br/api/v2/proposicoes?idDeputadoAutor={dep_id}&ano={ano}&ordem=ASC&ordenarPor=id&pagina={page}&itens=100"
            data = get_json(url)
            batch = data.get("dados", [])
            props.extend(batch)
            if len(batch) < 100 or not data.get("links", [{}])[-1].get("href"):
                break
            page += 1
            time.sleep(0.3)
        time.sleep(0.3)
    federais.append({
        "nome": dep["nome"], "partido": dep["siglaPartido"], "id": dep_id,
        "proposicoes": props, "total": len(props),
    })
    print(f"  {dep['nome']} ({dep['siglaPartido']}): {len(props)} proposições")
    time.sleep(0.4)

with open(f"{OUT}/federais.json", "w") as f:
    json.dump(federais, f, ensure_ascii=False, indent=1)

# ── 3. Deputados estaduais ALEPE ───────────────────────────────
parl = json.loads(get_xml if False else get_xml("https://dadosabertos.alepe.pe.gov.br/api/v1/parlamentares/"))
# parlamentares retorna JSON direto
parl = json.loads(get_xml("https://dadosabertos.alepe.pe.gov.br/api/v1/parlamentares/").decode())
print(f"\nDeputados estaduais ALEPE: {len(parl)}")

# ── 4. Proposições ALEPE (projetos, indicações, requerimentos) 2024-2026 ──
def alepe_xml_to_list(kind, tag, year=None):
    url = f"https://dadosabertos.alepe.pe.gov.br/api/v1/proposicoes/{kind}/"
    raw = get_xml(url)
    root = ET.fromstring(raw)
    items = []
    for el in root.findall(tag):
        d = dict(el.attrib)
        aut = el.find("autores")
        if aut is not None:
            d["autores"] = [a.attrib.get("nome") for a in aut.findall("autor")]
        # campos texto
        for child in el:
            if child.tag in ("ementa", "subtipo", "numero", "ano", "tipo", "dataPublicacao"):
                d[child.tag] = (child.text or "").strip()
        items.append(d)
    return items

projetos = alepe_xml_to_list("projetos", "projeto")
indicacoes = alepe_xml_to_list("indicacoes", "indicacao")
requerimentos = alepe_xml_to_list("requerimentos", "requerimento")
print(f"ALEPE projetos: {len(projetos)}, indicações: {len(indicacoes)}, requerimentos: {len(requerimentos)}")

# filtra 2023+ (mandato atual 20ª legislatura)
def ano(p):
    try: return int(p.get("ano", 0))
    except: return 0

projetos = [p for p in projetos if ano(p) >= 2023]
indicacoes = [i for i in indicacoes if ano(i) >= 2023]
requerimentos = [r for r in requerimentos if ano(r) >= 2023]
print(f"2023+: projetos {len(projetos)}, indicações {len(indicacoes)}, requerimentos {len(requerimentos)}")

with open(f"{OUT}/alepe.json", "w") as f:
    json.dump({"parlamentares": parl, "projetos": projetos, "indicacoes": indicacoes, "requerimentos": requerimentos}, f, ensure_ascii=False, indent=1)

# ── 5. Resumo por autor ────────────────────────────────────────
from collections import Counter
c = Counter()
for p in projetos:
    for a in p.get("autores", []):
        c[a] += 1
print("\nTop 15 autores de projetos (ALEPE 2023+):")
for nome, n in c.most_common(15):
    print(f"  {nome}: {n}")
