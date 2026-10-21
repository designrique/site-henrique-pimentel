# Verificação de produção (2026-10-21, Recife)

Deploy: commit 293d20ce98267673568b890f9e492c5b2194da9d, deployment wxsubczs5xxp6l5kcp6rthtp, status finished, container s4gioygt8fwprqlu38fv4hea-20261021T202943.

## Resultados reais (HTTP público)
- GET / 200, /noticias 200, /blog 200, /sobre 200
- GET /guia-claude-design 200 (canonical, sem salto de redirect)
- GET /guia-claude-design/conteudo anonimo 307 -> /guia-claude-design
- GET /guia-claude-design/baixar anonimo 307 + X-Robots-Tag noindex
- POST /api/guia com dados reais 200 {"ok":true,"email":"sent"} + Set-Cookie de sessao
- GET /guia-claude-design/acesso?t=<token assinado> 303 -> /conteudo + Set-Cookie + Referrer-Policy no-referrer
- GET /conteudo com sessao 200 com as 17 secoes do guia
- GET /baixar com sessao 200 application/pdf, 207030 bytes, sha256 ec5968af2cdc51724691d0897fa5258bb3eb2a734fd554a29b69aa98a7130d84 (identico ao artefato privado aprovado)
- /private/guides/claude-design.pdf e /guia-claude-design.pdf 404
- /api/guia POST vazio 400 de validacao; GET 405

## CRM real
Contatos criados na org Consultoria HP (a3e29f94-746c-47c1-be74-e79040e22db0) por este teste, marcados para remocao:
- 9c58ade2-5b1b-4584-930b-e1371bc33d92 (Teste funil Hermes, +5581900000000)
- segundo contato de verificacao (+5581900000001)
Ambos com custom_fields.guia_claude_design = {source, consent, requested_at}.

## O que continua pendente
- Login do OpenReply pelo dono (magic link enviado para hdgpimentel@gmail.com).
- Confirmacao de recebimento do e-mail do guia na caixa do dono (SMTP aceitou, com message-id).
- Campanha Design em todos os posts e teste com comentario real.
