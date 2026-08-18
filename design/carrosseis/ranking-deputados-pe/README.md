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

## Roteiro (v3 — eixo: engenharia de IA, não jornalismo de dados)

O ranking é a **demo**, não o produto. A tese que o carrossel defende é: *dado público brasileiro já
é legível por máquina, e quem modela o contexto certo responde perguntas que ninguém conseguia
responder.* Quem assina é engenheiro/consultor de IA — não repórter.

| # | Função | Headline |
|---|---|---|
| 1 | Gancho (beat) | 10.832 proposições — **"eu não li nenhuma; construí um agente que leu todas"** |
| 2 | Vilão | "Em ano eleitoral, todo mundo fala. Ninguém mede." |
| 3 | Reframe (beat, retrato) | **"Não sou jornalista. Sou engenheiro de IA."** |
| 4 | O pipeline | "41 APIs viram 1 pergunta respondível" — o trabalho foi modelar contexto |
| 5 | O critério | **"IA sem critério é chute rápido"** — filtro publicado junto com o resultado |
| 6 | Payoff federais | ranking com números |
| 7 | Payoff estaduais | "propor muito ≠ acertar o alvo" |
| 8 | O achado (beat) | "PE é o estado da seca. Água quase não aparece." |
| 9 | A ponte | "Troca 'deputado' por qualquer base pública" — licitação, jurisprudência, prontuário |
| 10 | CTA (beat) | salvar, comentar, link + assinatura |

Decisões:

- **O gancho é a inversão.** "Eu li 10.832 ementas" é heroico e falso; "construí um agente que leu"
  é verdadeiro, mais impressionante e diz exatamente o que ele faz da vida.
- **O slide 3 é o eixo.** Retrato + declaração de ofício. Sem ele o carrossel vira jornalismo de
  dados anônimo e o autor some da peça.
- **Método é conteúdo, não rodapé.** Os slides 4 e 5 (pipeline e critério) ficam *antes* do payoff
  porque são a competência sendo demonstrada. "Critério explícito" é o argumento que separa
  sistema de IA de chute automatizado — e é o que o cliente compra.
- **O slide 9 é a conversão.** Troca o sujeito do problema e o leitor se enxerga: mesma tubulação
  para edital, jurisprudência, concorrência, prontuário, catálogo.
- **Ressalva antes do CTA.** "Quantidade não é qualidade" aparece no slide 6, antecipando a
  crítica número 1 dos comentários em vez de deixá-la abrir a discussão.

⚠️ O slide 10 promete resposta individual ("comenta o nome do seu deputado que eu respondo com o
número dele"). É o melhor gatilho de comentário da peça, mas **é um compromisso** — só publique se
for responder. Alternativa sem compromisso: "Comenta o nome do seu deputado."

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

## b-roll e retrato

Slides beat: **1, 3, 8 e 10**. O slide 3 já vem com o retrato de `public/foto-henrique.webp`
embutido em base64, full-bleed com scrim progressivo abrindo espaço pro texto embaixo.
Trate-o como o slide "cara do autor" — trocar por uma foto melhor é o upgrade de maior retorno
da peça.

### Escala do retrato

O canvas 3:4 (0,75) é mais estreito que a foto 4:5 (0,80), então `background-size: cover` deixaria
o autor pequeno demais no quadro. A regra usa **`background-size: auto 113%`** — 1,55× sobre o
original, render de 1302×1627 — com `background-position: center top`. O excedente sai pelas
laterais (111px por lado) e pelo rodapé, onde o scrim já cobre.

Referência para reenquadrar: topo da cabeça a ~183px, queixo a ~868px, exatamente onde o scrim
fecha e o texto começa. Subir muito além de 113% empurra o queixo para dentro do headline.

**Nunca passe dois valores em `background-size`** (`100% 100%`) — isso sim distorce a imagem.
Um valor com `auto` preserva a proporção sempre.

⚠️ **Confira a proporção ao trocar a foto.** `foto-henrique.webp` é retrato **840×1050**;
`foto-henrique.jpeg` é um recorte diferente, paisagem **1376×768**. Dimensionar pelo arquivo
errado quebra o enquadramento. Retrato vai full-bleed com a escala acima; paisagem pede faixa no
topo com máscara de dissolução.

Os slides 1, 8 e 10 têm a camada `.layer.broll` pronta e vazia: sem imagem, o fundo generativo
(gradiente + malha + motivo da ponte + grão) segura sozinho. Para usar foto:

1. coloque o arquivo em `broll/` (ex.: `broll/01.jpg`);
2. no `<section>` do slide, adicione o custom property:

```html
<section class="slide beat" data-n="1" style="--broll:url('broll/01.jpg'); --broll-opacity:.42">
```

3. `node render.mjs`.

Mantenha a opacidade entre `.32` e `.48` — acima disso o texto perde contraste sobre o navy.
Para deixar o HTML autocontido (como o slide 3 está), embuta a imagem em base64 em vez do caminho
relativo.
