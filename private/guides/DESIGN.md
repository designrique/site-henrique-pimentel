# Design system ativo do PDF: Henrique Pimentel

Fonte canônica: assets e tokens do próprio site. Não é um redesenho.
Revisão: 148a4b14add127c44fcadfd3194e3d805bd8a8aa
Referência visual: https://henriquepimentel.com.br/
Asset: public/signature.svg. Tokens: src/styles/tokens.css.
As cópias locais estão em public/signature.svg e pdf-brand-tokens.css.

## 1. Tema Visual
Editorial tecnológico humano, fundo claro quente, navy e acento ciano pontual.
Marca original H-ponte, ponto ciano, nome e assinatura profissional.

## 2. Cor
Tokens literais preservados do arquivo canônico pdf-brand-tokens.css.
Navy base #072359; navy profundo #04122E; creme #EDE7DA.
Papel #FAF9F5; tinta #141413; cinza de texto #3A4A66.
Ciano de marca #05F2F2; ciano legível #067E86.
CTA rosa #C71B49 no claro; rosa #F22E62 no escuro.
Componentes referenciam os tokens semânticos do CSS canônico.
Ciano brilhante somente decorativo, nunca texto pequeno sobre fundo claro.

## 3. Tipografia
Jost nos títulos. Raleway no corpo. JetBrains Mono nos exemplos e índices.
A assinatura SVG conserva as famílias originais do asset oficial.
Fontes Jost/Raleway incorporadas em pdf-brand-fonts.css, sem busca externa no export.
A4: títulos 35pt na capa e 20pt no corpo; texto 10,5pt; código 9pt.

## 4. Espaçamento
Base de 4px preservada nos tokens. Margens A4 de 20mm.
Respiro interno de capa de 9mm. Entrelinha de corpo 1,55.

## 5. Layout
Capa, sumário, conteúdo linear em uma coluna, cabeçalho e paginação.
Evitar título separado de seu parágrafo e código cortado entre páginas.
Verificar os limites de texto de todas as páginas, não só a capa.

## 6. Componentes
Logo original em SVG inline, sem deformação e sem recriar os paths.
Contraste de leitura WCAG AA 4,5:1. PDF não tem campos interativos.
O formulário web mantém rótulos, foco visível, feedback e validação existentes.
O PDF não é um formulário: o cadastro continua no servidor, antes do download.

## 7. Motion
Sem animação no PDF. O estado de impressão é estático e claro.
Não alterar movimento ou tema global do site para corrigir esta exportação.

## 8. Voz & Marca
Português do Brasil, claro, prático, sem números ou resultados inventados.
Nome exato: Henrique Pimentel. Ferramenta: Claude Design.
Separar geração visual, revisão humana e publicação/agendamento externos.

## 9. Anti-padrões
Sem monograma genérico HP em retângulo. Sem Geist/cobalt como identidade.
Sem redesenhar o H-ponte. Sem fallback silencioso de fonte no corpo.
Sem afirmar que a integração DFChat está concluída ou publicar o PDF em public/.
Não fazer merge ou deploy da branch antiga sobre o site atual sem reconciliação.
