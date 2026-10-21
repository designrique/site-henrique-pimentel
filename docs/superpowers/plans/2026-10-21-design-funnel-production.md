# Funil Design completo em produção: plano de implementação

> Para Hermes: seguir development-workflow, TDD e revisão independente, com um único escritor no worktree Orca registrado.

**Goal:** comprovar comentário Design, resposta pública, DM, cadastro, persistência no DFChat da Consultoria HP, guia web, download e e-mail em produção.
**Architecture:** reutilizar OpenReply para Instagram e o hp-site como dono da captura, autorização e e-mail. Usar contratos reais do DFChat/Supabase, nunca o adapter HTTP hipotético nem o RPC de retorno de WhatsApp.
**Tech Stack:** Next.js 16/React 19/TypeScript, node:test, APIs existentes, PostgreSQL/Supabase, SMTP já configurado, Coolify.

## Escopo e autorização

- Issue existente DIGIF-165, sem outro assignee que inicie implementação concorrente.
- Repositório exclusivo /root/hp-site. Execução local vmi3643992 no worktree Orca /home/orca/orca/workspaces/hp-site/claude-design-guide.
- Escritor: Hermes principal. Revisores somente leitura.
- O proprietário pediu concluir e testar produção. Este plano detalha o escopo ampliado e deve ser aprovado antes de novas mudanças de implementação.
- Push, publicação do hp-site e testes controlados fazem parte da liberação pedida; não publicar posts novos nem usar contas de clientes para teste.
- Não ler ou editar os repositórios OpenReply e DFChat. Configurar integrações pelos painéis e APIs autorizados. Se algum recurso exigir mudança nesses repos, bloquear essa etapa e pedir execução no contexto correto.

## Evidência já coletada

1. Produção usa s4gioygt8fwprqlu38fv4hea, main 148a4b14add127c44fcadfd3194e3d805bd8a8aa, porta 3000.
2. Causa do 503 reproduzida no container: next start não funciona com output export. Container em restart contínuo. Não é erro de DNS.
3. A branch do guia tem 3 commits próprios e está 42 commits atrás do main atual. merge-tree identificou conflitos em next.config.ts, src/app/sitemap.ts e tsconfig.json.
4. Há mudanças locais de marca ainda não commitadas. Preservar integralmente antes da reconciliação, inclusive PDF e proveniência.
5. 36 testes e build local anteriores passaram, mas isso não comprova funil em produção.
6. Projeto canônico DFChat: https://ozoavosvtqvzosxbvihz.supabase.co. Org Consultoria HP: a3e29f94-746c-47c1-be74-e79040e22db0.
7. contacts possui organization_id, name, handle, channel, email, notes, tags, custom_fields e updated_at. Unicidade real: organization_id, channel, handle.
8. Não há chave ativa de API dessa org. /api/v1/contacts devolveu 404 no navegador; os probes diretos receberam bloqueio Cloudflare 1010. Não tratar a rota como API existente.
9. capture_landing_whatsapp não aceita e-mail e cria callbacks de WhatsApp. Não reutilizar.
10. O app DFChat já tem credencial servidor Supabase e SMTP Proton configurados. Remetente existente: DFChat <contato@digitalfisher.com.br>, smtp.protonmail.ch:587. Valores secretos não foram impressos.
11. OpenReply está acessível, mas /settings exige login por magic link. Nenhuma sessão ou credencial OpenReply disponível no vault. Não inventar sessão, cookie ou credenciais.
12. Repowise consultado, mas o MCP configurado não reconhece /root/hp-site. Inspeção restrita do próprio repositório é o fallback documentado.

## Ordem de execução

### 1. Preservar e reconciliar a branch

Arquivos: os arquivos já alterados e os três conflitos identificados.
- Verificar novamente ausência de outro escritor e gravar hashes dos arquivos antes do merge.
- Commitar apenas a correção de marca após revisão; não incluir ZIPs ou arquivos transitórios como código.
- Merge regular do origin/main na branch Orca, preservando todas as páginas, posts, componentes, fontes e navegação atuais.
- next.config.ts: runtime Node para API/cookies/PDF privado; manter as demais opções atuais e outputFileTracingIncludes do PDF.
- sitemap.ts: preservar todas as entradas atuais e adicionar apenas a captura pública; não listar guia privado ou download.
- tsconfig.json: preservar padrões atuais e compatibilidade de testes.
- Rodar testes, typecheck e build isolado em unidade systemd. Nunca forçar push ou implantar sobre branch desatualizada.

### 2. Adaptar persistência real no CRM

Arquivos: src/lib/lead-guide/gate.ts, src/lib/lead-guide/dfchat.ts, tests/dfchat.test.ts, src/app/api/guia/route.ts.
- Escrever testes RED do contrato de leitura/gravação e da verificação de tenant.
- Preferir um endpoint de contatos oficialmente confirmado se o painel expuser um contrato válido. Sem isso, usar a API REST nativa do Supabase canônico no servidor, com credencial exclusivamente server-side e filtros fixos de org.
- Documentar a decisão final e o risco de credencial privilegiada antes de provisioná-la. Nenhum secret em NEXT_PUBLIC, Git, logs ou browser.
- Confirmar a normalização de handle existente antes de criar registros, para não duplicar o WhatsApp em outro formato.
- Persistir nome, e-mail, WhatsApp e a origem/consentimentos do guia. Preservar tags/custom_fields e informações existentes que não pertencem à captura.
- Usar a constraint real para idempotência entre processos e reinícios. Se precisar mesclar JSON existente, usar comparação de updated_at e retry limitado, sem sobrescrever alteração concorrente.
- Confirmar id e organization_id pelo retorno e por leitura de volta antes de emitir acesso.
- Falha HTTP, corpo não confirmado, timeout ou tenant divergente continuam sem cookie.
- Não criar conversas, tarefas, outbox de WhatsApp ou disparos desnecessários no CRM.

### 3. E-mail e recuperação de acesso em outro dispositivo

Arquivos: src/lib/lead-guide/email.ts, src/app/guia-claude-design/acesso/route.ts, tests/email.test.ts, tests/access.test.ts, src/app/api/guia/route.ts; package.json/lock somente se uma dependência SMTP for necessária.
- Reutilizar SMTP verificado. Se não existir cliente SMTP instalado, usar uma biblioteca específica, não escrever um cliente SMTP caseiro.
- E-mail transacional da entrega, separado do consentimento opcional de marketing.
- Gerar link assinado e limitado para ler/baixar em outro navegador, sem nome, telefone ou e-mail na URL.
- A rota de acesso valida assinatura, prazo e destino permitido, emite cookie HttpOnly/Secure/SameSite e redireciona imediatamente, com no-store, noindex e Referrer-Policy adequado.
- Nunca liberar link antes de CRM confirmado. Não aceitar redirect arbitrário.
- Preservar idempotência de envio entre tentativas. Registrar estado e message-id de forma durável ou usar idempotência real do provedor; não depender só de Map em memória.
- Timeout após possível aceitação SMTP é resultado incerto, não autorização para reenviar às cegas nem sucesso fictício.
- Testes RED/GREEN: destinatário, links válidos/expirados/adulterados, replay concorrente, falha de envio e retry sem cadastro duplicado.
- No teste real, obter um destinatário controlado aprovado. Aceitação SMTP não é confirmação de chegada na caixa; verificar ambas separadamente.

### 4. Integrar interface sem redesenhar o site

Arquivos: src/app/guia-claude-design/capture-form.tsx, src/app/guia-claude-design/conteudo/page.tsx e layout específico somente se necessário.
- Manter os campos nome, e-mail e WhatsApp e os estados acessíveis existentes.
- Após cadastro confirmado: Ler online e Baixar PDF. Informar o resultado do e-mail sem uma mensagem de sucesso falsa.
- Preservar os dados se uma etapa externa falhar.
- Reusar a identidade atual Jost/Raleway e H-ponte do main. Nada de alterar logo global para a versão antiga.
- PDF fora de public, ambas as rotas protegidas, conteúdo completo ausente de mirrors/llms/client bundles.

### 5. Configurar Design no OpenReply

Sem mudança de código de outro repositório.
- Autenticar pelo fluxo suportado. Confirmar conta e username reais antes de qualquer escrita.
- Ler campanhas existentes para evitar segunda automação com o mesmo gatilho.
- Ajustar uma única regra para palavra Design, sem distinção indevida de maiúsculas, em todos os posts atuais e futuros suportados.
- Resposta pública informa que o link foi enviado; DM leva à captura HTTPS canônica. Não mandar diretamente o PDF privado.
- Ler de volta status, escopo dos posts, keyword, resposta e DM configurados.
- Confirmar worker/webhook e logs reais. Se o painel não suportar todos os posts, não simular configuração completa nem codificar correção neste canal exclusivo.
- Testar comentário real elegível de uma conta controlada ou comentário pré-existente que pediu o material, dentro das regras Meta. Nunca criar comentário como uma conta de cliente sem autorização específica.
- Conferir um comentário, uma resposta e uma DM, com IDs correlacionados, sem duplicação por webhook/polling.

### 6. Revisão e publicação

- Revisor novo lê diff real e manifest de hashes; corrigir apenas bugs reproduzíveis.
- npm test, npm run typecheck, lint focal e npm run build com saídas completas e identidade de fonte.
- Provisionar segredos diretamente no Coolify do hp-site, sem alterar os envs do DFChat/OpenReply.
- Push normal do commit revisado ao main autorizado, com leitura de volta do SHA remoto.
- Disparar uma única implantação quando necessário e seguir seu deployment_uuid até finished no commit exato.
- Confirmar container novo saudável, HTTPS, home e captura 200. Visitante anônimo continua sem acesso ao guia/PDF.

### 7. Aceite ponta a ponta em produção

Cada etapa requer evidência própria, não só teste unitário:
- [ ] Comentário Design real em post elegível com regra all-posts confirmada.
- [ ] Resposta pública no comentário, ID e conteúdo conferidos.
- [ ] DM real com o link correto, ID e destino conferidos.
- [ ] Formulário enviado pelo caminho público normal, com consentimento e campos reais controlados.
- [ ] Registro com nome/e-mail/WhatsApp relido na org Consultoria HP, sem duplicação.
- [ ] Guia web abriu após cadastro; anônimo e cookie inválido continuam bloqueados.
- [ ] Download autenticado devolveu bytes idênticos ao PDF privado aprovado.
- [ ] E-mail aceito com message-id e efetivamente recebido na caixa controlada.
- [ ] Link do e-mail funcionou em outro navegador e não liberou token inválido/expirado.
- [ ] Repetir evento/requisição não duplicou efeitos indevidos.

## Limites para declarar conclusão

A issue só vai a done quando todos os itens de aceite tiverem evidência real. Login pendente, campo/API não confirmado, provedor que só aceitou mas não entregou, ou teste manual não realizado mantêm o fluxo como parcial. Registros de teste devem ficar claramente identificados; não apagar dados ou mensagens reais automaticamente.
