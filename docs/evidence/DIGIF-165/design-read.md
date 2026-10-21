# Design read - DIGIF-165

Leitura: pagina de captura + area de conteudo para um consultor independente de IA
(publico B2B/profissional, pt-BR), no idioma do design system existente do hp-site
(azul-cobalto Stripe #1E40AF, Geist + Fraunces + JetBrains Mono, Tailwind v4 com tokens
em `src/app/globals.css`).

Modo: REDESIGN - PRESERVE. Reuso dos tokens e componentes reais (`Container`, botao
de acento, padrao de form do `/contato` e `/baseline-geo`). Sem novo sistema de design.

Dials (adaptados: pagina util dentro de site institucional existente, sem hero de
marketing - a captura e uma pagina funcional):
- DESIGN_VARIANCE: 4 (layout previsivel, foco em clareza)
- MOTION_INTENSITY: 2 (transicoes CSS, sem animacao decorativa; respeita reduced motion)
- VISUAL_DENSITY: 4 (padrao de app diario)

Regras anti-slop aplicadas:
- Zero travessoes (em-dash) em qualquer texto visivel.
- Um unico acento por pagina (var(--accent-primary)).
- Consistencia de cantos (10px em controles, 2xl em cartoes, como o resto do site).
- Labels ACIMA do input, erro ABAIXO, sem placeholder-como-label.
- Contraste WCAG AA em labels, inputs, placeholders, foco e erro.
- Estados loading/erro/sucesso implementados (nao so o caminho felizaleatorio).
- Foco visivel; ordem de tab natural; mensagens via aria-live.
- Sem emojis como icones.
