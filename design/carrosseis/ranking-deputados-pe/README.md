# Carrossel — Ranking de deputados de PE

Peça social 3:4 (1080×1440, 10 slides) para o post
[`/blog/ranking-deputados-projetos-pernambuco`](../../../src/content/posts/ranking-deputados-projetos-pernambuco.tsx).

- **Fonte da verdade:** `carrossel.html` (autocontido — fontes embutidas em base64, sem rede)
- **Saída:** `png/01.png` … `png/10.png`
- **Re-render:** `node render.mjs` (Playwright + Chromium)

## Design system — H-ponte

| Token | Hex | Papel |
|---|---|---|
| navy | `#072359` | fundo base |
| cream | `#EDE7DA` | texto primário |
| cyan | `#05F2F2` | dado, número, método, verificação |
| rose | `#F22E62` | tensão, urgência, CTA |
| clay | `#D97757` | recorte humano / PE (ALEPE, projetos) |

**Tipografia:** Jost Bold (títulos) · Raleway SemiBold (apoio) · JetBrains Mono Bold (números e metadados).

**Logo:** monograma `HP.` contornado no topo de cada slide; assinatura completa
(`HP.` sólido + "Henrique Pimentel." + "Consultor de Tecnologia em IA") só no slide 10 — mesmo
lockup de `src/components/logo.tsx` e `public/signature.svg`.

**Motivo gráfico:** pilone em H com estais — a letra H do logo desenhada como ponte estaiada
(Recife/PE). Gerado em SVG no script do próprio HTML; mais forte nos slides beat.

**Indicador de progresso:** 10 segmentos no rodapé, preenchidos até o slide atual.

## Roteiro (v2 — otimizado para retenção)

| # | Função | Headline |
|---|---|---|
| 1 | Gancho (beat) | 10.832 proposições — "eu li a ementa de todas" |
| 2 | Promessa / abre o loop | "No fim, você sabe quem propôs — e quem só apareceu" |
| 3 | Vilão (beat) | "Em ano eleitoral, todo mundo fala. Ninguém mede." |
| 4 | O corte | "Requerimento de sessão solene não é projeto" |
| 5 | O achado (beat) | "PE é o estado da seca. Água quase não aparece." |
| 6 | Payoff federais | ranking com números |
| 7 | Payoff estaduais | "propor muito ≠ acertar o alvo" |
| 8 | Prova concreta | 3 projetos fora do noticiário |
| 9 | Método + ressalva | 41 APIs, 1 agente de IA, quantidade ≠ qualidade |
| 10 | CTA (beat) | salvar, comentar, link + assinatura |

Decisões do roteiro:
- O gancho abre com número + ação pessoal ("eu li"), não com meta-explicação de método.
- O slide 2 abre um loop explícito, que só fecha nos slides 6–7 (payoff do ranking).
- O bloco técnico (MCP Brasil / 41 APIs) saiu do meio do carrossel para o slide 9: no meio ele
  derruba retenção, no fim funciona como prova de método para quem já está engajado.
- O slide 5 é o pico emocional e o mais "printável" — é o achado que o artigo registra
  (infraestrutura hídrica e logística escassas no estado da Transposição).
- A ressalva "quantidade não é qualidade" aparece **antes** do CTA: antecipa a crítica número 1
  dos comentários em vez de deixá-la abrir a discussão.

⚠️ O slide 10 promete resposta individual ("comenta o nome do seu deputado que eu respondo com o
número dele"). É um bom gatilho de comentário, mas **é um compromisso** — só publique se for
responder. Alternativa sem compromisso: "Comenta o nome do seu deputado."

## Precisão dos dados

Todo número vem do artigo e do `scripts/coleta_proposicoes_pe.py`. Nada foi arredondado ou inventado:

- 25 deputados federais de PE · 10.832 proposições no mandato 2023–2026
- Filtro federal: só PL, PLP e PEC (requerimentos e indicações descartados) + 11 temas de impacto
- Federais: Eduardo da Fonte 74 PL/PLP + 10 PEC · Clodoaldo Magalhães 73 + 11 ·
  Túlio Gadêlha 54 + 8 · Pedro Campos 48 + 8
- Estaduais: Gilmar Júnior 47 de 76 · William Brigido 32 de 50 · Delegada Gleide Ângelo 32 de 39
  (o "8 de cada 10" do slide 7 é 32/39 = 82%)
- 41 APIs públicas padronizadas pelo MCP Brasil; 3 fontes oficiais (Câmara, ALEPE, Portal da Transparência)

Duas afirmações do briefing original foram **removidas por não existirem no artigo**: o recorte
"90% era ruído" e os pesos numéricos por tema ("×3 / ×2"). O artigo descreve peso maior para
proposições que citam PE, sem publicar a escala.

## b-roll nos slides beat

Slides 1, 3, 5 e 10 já têm a camada `.layer.broll` pronta. Sem imagem, o fundo generativo
(gradiente + malha + motivo da ponte + grão) segura sozinho. Para usar foto:

1. coloque o arquivo em `broll/` (ex.: `broll/01.jpg`);
2. no `<section>` do slide, adicione o custom property:

```html
<section class="slide beat" data-n="1" style="--broll:url('broll/01.jpg'); --broll-opacity:.42">
```

3. `node render.mjs`.

Mantenha a opacidade entre `.32` e `.48` — acima disso o texto perde contraste sobre o navy.
