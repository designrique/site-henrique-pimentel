# Configuracao pendente e contrato a confirmar - DIGIF-165

O guia so e liberado apos (1) persistir o lead em CRM e (2) emitir o cookie de sessao
HttpOnly assinado. Nada de integracao real foi inventado: o adapter existe e esta
testado, mas depende de configuracao ainda nao confirmada.

## Variaveis de ambiente do servidor

| Variavel | Obrigatoria | Efeito |
|---|---|---|
| GUIDE_SESSION_SECRET | sim | Segredo HMAC da sessao. Sem ele o gate responde 503 e NAO libera o guia. |
| GUIDE_CRM_ENDPOINT | para CRM real | URL de ingestao de leads (DFChat). |
| GUIDE_CRM_TOKEN | para CRM real | Token Bearer enviado no header Authorization. |
| GUIDE_CRM_ORG_ID | para CRM real | Organization id enviado no corpo (org_id). Constante verificada Consultoria HP; configuração divergente falha fechado. |
| GUIDE_CRM_TIMEOUT_MS | nao | Timeout do POST ao CRM, default 8000 ms. |
| GUIDE_CRM_MODE=fixture | QA local | Liga o adapter de teste. |
| GUIDE_CRM_ALLOW_FIXTURE=1 | QA local | Opt-in explicito exigido para ligar o fixture. |
| GUIDE_CRM_FIXTURE_FILE | QA local | Arquivo JSONL onde o fixture grava o lead. |

Sem endpoint+token, `createCrmAdapter` devolve o adapter "unconfigured" e o gate
responde 502 `crm_not_configured` (falha fechado).

## Perguntas que o contrato DFChat precisa responder

1. Qual o metodo, o caminho da API e a URL base para criar lead? (hoje o adapter assume POST {GUIDE_CRM_ENDPOINT})
2. Qual o esquema de autenticacao? (o adapter assume header Authorization: Bearer <GUIDE_CRM_TOKEN>)
3. Como o organization/tenant e identificado? (o adapter envia org_id no corpo a partir de GUIDE_CRM_ORG_ID; o cliente NUNCA envia org)
4. Quais os nomes dos campos esperados? (o adapter envia source, org_id, name, email, whatsapp, consent, marketing)
5. Qual o campo de id na resposta de sucesso? (o adapter exige data.id não vazio e data.organization_id da Consultoria HP; nunca gera id local)
6. Como o CRM sinaliza erro recuperavel, duplicidade e rate limit? (hoje: 5xx/429 = retryable; outros 4xx = nao)
7. Existe chave de idempotencia aceita pelo CRM? (o adapter pode enviar Idempotency-Key; dedupe local por hash do payload e header Idempotency-Key enviado ao upstream; upstream deve garantir dedupe persistente)
8. Prazo/retry esperado e politica de timeout do lado do CRM.

## O que falta para o deploy real

1. Confirmar o contrato acima e ajustar createHttpAdapter (mapeamento de campos, auth).
2. Definir GUIDE_SESSION_SECRET de producao (fora do repo).
3. Trocar o rate limit em memoria por store compartilhado, se houver mais de uma instancia.
4. Decidir o alvo de deploy: o worktree removeu output:"export" e passou a exigir runtime
   Node. O deploy real nao foi alterado por este trabalho.

## Descoberta canônica e bloqueio real

Supabase CLOUD confirmado: ozoavosvtqvzosxbvihz. Org Consultoria HP:
`a3e29f94-746c-47c1-be74-e79040e22db0`. O código fixa esse identificador e rejeita configuração divergente.
Investigação somente leitura encontrou 404 na rota HTTP `/api/public/landing-whatsapp` e nenhuma API key da org. O RPC `capture_landing_whatsapp` existente não é substituto: não recebe e-mail e cria tarefas/outbox de retorno de WhatsApp, fora do escopo do guia. Não foi chamado.

O adapter HTTP é um contrato de integração pendente, não uma API DFChat confirmada. Exige resposta JSON `{id: string, organization_id: string}` da org exata; HTML, 204, erro ou tenant divergente não liberam sessão. A criação/habilitação de endpoint e credencial deve ocorrer no contexto autorizado do DFChat, não neste canal exclusivo hp-site. Nenhum contato de produção foi criado.

Fixture é recusada em NODE_ENV=production, mesmo com flags explícitas. QA local com fixture deve usar modo de desenvolvimento claramente identificado como teste. Os screenshots anteriores foram feitos antes deste endurecimento; a revisão final substitui essa evidência.
