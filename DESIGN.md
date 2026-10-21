---
name: HP Site Guide
colors:
  primary: "#1E40AF"
  background: "#FFFFFF"
  surface: "#FAFAF9"
  text: "#0F172A"
  secondary: "#475569"
  border: "#E2E8F0"
typography:
  body:
    fontFamily: Geist
    fontSize: 16px
    lineHeight: 1.6
  editorial:
    fontFamily: Fraunces
    fontSize: 30px
    lineHeight: 1.2
  mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    lineHeight: 1.6
spacing:
  base: 4px
  control: 44px
rounded:
  control: 10px
  panel: 16px
---
# HP Site: guia Claude Design

Contrato da página de captura e do guia. Preserva a marca existente em src/app/globals.css e layout.tsx, sem redesenhar o site.

## 1. Tema Visual
Consultoria de IA: editorial, funcional, confiável. Página de captura em duas colunas no desktop, formulário primeiro no mobile. Conteúdo privado de leitura longa, sem decoração sem função.

## 2. Cor
Tokens semânticos existentes: `--bg-primary: #FFFFFF`, `--bg-subtle: #FAFAF9`, `--text-primary: #0F172A`, `--text-secondary: #475569`, `--accent-primary: #1E40AF`, `--accent-hover: #1D4ED8`, `--border-default: #E2E8F0`, `--error: #B91C1C`.
Tema escuro existente `.dark`: fundo #0A0A0A, superfície #171717, texto #FAFAF9, secundário #A1A1AA, borda #27272A. No formulário, ação #2563EB com texto branco e erro #F87171 corrigem contraste. Texto auxiliar usa text-secondary, não text-tertiary. Componentes usam var() dos tokens, não duplicam cores.

## 3. Tipografia
Geist para interface, Fraunces para títulos editoriais do conteúdo (marca existente, não uma nova escolha estética), JetBrains Mono para prompts. Fontes via next/font. Corpo 16px ou mais, entrelinha 1.5 a 1.75, leitura com largura limitada pelo PostProse. Português do Brasil com acentos.

## 4. Espaçamento
Base de 4px. Inputs e ações com altura mínima 44px, input 16px para evitar zoom iOS. Padding lateral 16px no mobile, 24px em telas maiores. Seções usam escala existente do Container.

## 5. Layout
max-w-6xl do site. Captura: grid lg:grid-cols-12, conteúdo lg:col-span-5 e form lg:col-span-7. Mobile: uma coluna com formulário antes do sumário. Âncoras respeitam header sticky com scroll-mt-24. Sem overflow horizontal em 390px.

## 6. Componentes
Reutilizar Header, Footer, Container, EyebrowBadge e PostProse. Bordas de controle 10px, formulário 16px, foco visível. Labels acima dos inputs, erros abaixo e alerta com foco. Consentimento obrigatório vinculado ao erro; marketing separado e opcional. Botão desabilitado durante envio, sem duplicar requests. Página privada somente com cookie HttpOnly assinado, nunca com conteúdo no bundle público.

## 7. Motion
Somente feedback de interação com transition-colors; nenhuma animação decorativa nova. Respeitar prefers-reduced-motion existente. Sem scroll forçado nem loading artificial.

## 8. Voz & Marca
Direta, prática, precisa. Sem promessas de API, publicação automática ou exportação de formatos não documentados. Distinguir Claude Design de ferramentas externas. Sem travessões em texto novo. Não inventar resultados, depoimentos ou métricas.

## 9. Anti-padrões
Não alterar logo, navegação ou cores globais. Não publicar guia em llms.txt ou espelho markdown. Não usar imagem de dashboard fictício, gradiente roxo ou cartões genéricos de benefícios. Não confundir teste local com cadastro no DFChat. Não aceitar 2xx sem comprovação explícita de persistência e org correta. Não ativar fixture em produção.

### PDF editorial proprietário

Logo: reutilizar exatamente public/signature.svg, preservando proporção. Capa com logo, título e promessa prática; sumário e seções com Geist/Fraunces/JetBrains carregadas do próprio site, branco, navy e azul-cobalto. Corpo legível em A4, prompts com quebra de linha, cabeçalho/rodapé discretos com marca e páginas. O PDF pertence à área privada: nunca armazenar em public nem expor URL estática.
