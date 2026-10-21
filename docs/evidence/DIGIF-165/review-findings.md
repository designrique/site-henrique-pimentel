# Revisão independente e correções

Base de implementação: 24125dd93bcb0633737de8e7b9f47978efe37aac.
Revisão independente: REPROVADA com quatro bloqueantes, reproduzidos pelo coordenador nos testes RED-review.log.

- B1: HTTP 2xx sem persistência confirmada. Corrigido: exige JSON, id não vazio e organization_id exata. HTML, 204, erro e org diferente não liberam cookie. Não existe mais id inventado.
- B2: Idempotency-Key fornecida pelo browser permitia cache cruzado. Corrigido: identidade derivada pelo servidor do payload normalizado completo via SHA-256, independentemente do header. O hash é enviado ao upstream para dedupe persistente, ainda dependente do contrato externo.
- B3: assinatura multibyte lançava RangeError. Corrigido: assinatura base64url ASCII de 43 bytes e validação de expiração inteira.
- B4: telefone curto/DDD inválido. Corrigido: formato nacional com DDD e 10/11 dígitos, prefixo de assinante, internacional explícito com +. Isso valida formato, não existência de conta WhatsApp.
- Corpo chunked: leitura via stream limitada a 4096 bytes, cancelada ao exceder.
- Fixture: recusada em NODE_ENV=production mesmo com opt-in.
- Org: constante Consultoria HP, configuração divergente falha fechado.

RED-review.log: 24 passam e 6 falham. GREEN-final.log: 30 passam, 0 falham.
Revisão final independente ainda será vinculada ao commit final; estes registros não a substituem.
