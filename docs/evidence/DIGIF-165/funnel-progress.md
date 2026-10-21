# Funil Design: estado verificado

Data: 2026-10-21 (Recife)

## Produção recuperada e explicada
- Container anterior quebrava: `next start` com `output: "export"` (loop de restart). Causa do 503 confirmada no log do container.
- Correção: runtime Node em `next.config.ts`, sem mudar o resto do site. PDF privado traçado no bundle do servidor.

## Reconciliação
- Branch do guia estava 42 commits atrás do main. Merge feito preservando site atual: 148 posts, /noticias, /blog, tokens e componentes intactos.
- Conflitos resolvidos: `next.config.ts`, `src/app/sitemap.ts` (entradas do main + captura pública), `tsconfig.json`.
- Testes 36/36 e typecheck limpos após o merge. Build exit 0.

## CRM real (org Consultoria HP)
- Rota hipotética `/api/v1/contacts` não existe; org estava sem chave ativa.
- Entregue: Edge Function `guia-lead` no projeto Supabase do DFChat + token em `public.lead_ingest_tokens` (só hash).
- Contrato vivo verificado: 401 sem token, 401 token errado, 405 método, 400 sem consentimento, 400 org adulterada, 200 válido, repetição com mesmo id.
- Contato de contrato relido no banco e removido.

## E-mail e link de acesso
- SMTP existente reaproveitado (sem expor valores); `nodemailer` adicionado.
- Link pessoal assinado, 3 dias, sem PII na URL. Rota `/guia-claude-design/acesso/` emite a mesma sessão e vai para o conteúdo.
- E-mail entra no MESMO resultado idempotente do cadastro: repetir não reenvia.
- Falha de e-mail não bloqueia o acesso nem finge sucesso; a interface diz o que aconteceu.
- 47/47 testes, typecheck e lint escopado limpos. Build exit 0.

## Pendências reais
- Login do OpenReply depende do dono abrir o magic link (não leio a caixa de entrada).
- Campanha Design em todos os posts precisa ser confirmada no painel.
- Teste ponta a ponta com comentário real ainda não executado.
