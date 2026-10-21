# OpenReply: credencial de app da Meta corrigida

## Diagnostico
- `INSTAGRAM_APP_ID` estava 1300437405555409 com segredos de 13 caracteres.
- Teste real contra a Graph API: esse par responde "Cannot get application info due to a system error" (app inexistente/inacessivel).
- Par valido confirmado: app `963657329920249` (midias-hp), segredo do cofre hp-meta, retorna name=midias-hp.

## Correcao aplicada
- `INSTAGRAM_APP_ID`, `INSTAGRAM_APP_SECRET` e `FACEBOOK_APP_SECRET` atualizados no app Coolify do OpenReply e lidos de volta (1 linha cada, valor conferido).
- Servico reiniciado. `/api/health` = ok (database, redis, queue).

## Risco verificado antes de aplicar
- A inscricao de webhook do app JA apontava para o OpenReply (`/api/webhook`, campos messages v26.0 e comments v25.0). A troca de credencial nao desvia nenhum fluxo existente.

## Proximo passo (dono)
- Reconectar o Instagram no OpenReply.
- Redirect URI a autorizar no app da Meta, se a Meta reclamar:
  https://openreply.henriquepimentel.com.br/api/instagram/callback
