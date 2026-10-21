# Entrega parcial verificada: DIGIF-165

Implementado somente no worktree Orca do hp-site. Nenhum push, merge ou deploy.

- Página /guia-claude-design/ com nome, e-mail, WhatsApp e consentimento.
- Guia privado em /guia-claude-design/conteudo/, com 16 seções e fontes, total de 17 seções renderizadas incluindo fontes.
- PDF proprietário de 8 páginas em guia-claude-design.pdf, texto extraído e validado (11.814 caracteres); não fica em public/.
- 30 testes passam; typecheck e lint dos arquivos alterados sem erros.
- Build final real: build-verified.log, status 0 em unidade systemd isolada.
- QA final real: qa-final.json e final-*.png, fluxo de erro e proteção sem cookie verificados.
- As quatro falhas bloqueantes da primeira revisão foram corrigidas com testes RED/GREEN.

## Integração não concluída

Não foi gravado nenhum lead no DFChat real. O endpoint HTTP e a credencial de captura da org Consultoria HP não estão disponíveis no contrato investigado. O adapter HTTP permanece pendente de integração confirmada. Sem CRM, a API responde 502 sem cookie e não libera o guia; em produção, fixture é recusada.

## Deploy

Este worktree requer runtime Node (API/cookies) e não static export. O deploy existente não foi alterado. A integração deve ser concluída no contexto autorizado do DFChat, fora do canal exclusivo hp-site. Não marcar issue done enquanto não houver persistência real e aceite completo.

## Escopo de evidência

Fixtures e sessão pré-carregada de QA não provam persistência externa. O PDF e as imagens privadas foram exportados com sessão efêmera do preview local para revisão do proprietário. As imagens antigas qa-* precedem a revisão; usar final-* e qa-final.json.
