# Correção do proprietário: PDF com marca e download privado

- PDF refeito: 9 páginas A4, capa, sumário, logo real public/signature.svg, Geist/Fraunces/JetBrains do hp-site, cores do DESIGN.md, cabeçalho/rodapé, metadados e estrutura tagged.
- Todas as 9 páginas renderizadas em pdf-brand-pages/. Bounding boxes do texto dentro das páginas, sem páginas vazias. Fontes conferidas via pdffonts. O logo foi decodificado e verificado no renderizador antes da exportação.
- Arquivo canônico em private/guides/claude-design.pdf, não em public. Cópia em evidência para revisão do proprietário, não servida pelo site.
- GET /guia-claude-design/baixar/ valida mesma sessão do guia web antes de ler o PDF, entrega application/pdf como attachment, noindex e private,no-store. Arquivo incluído no output file trace do Next.
- Cadastro confirmado mostra duas opções: Ler online e Baixar PDF. A versão web privada também tem Baixar PDF.
- TDD: 3 testes novos falharam antes; 33 testes passam depois. Typecheck e lint alterados sem erros. Build de produção sucesso em build-download.log.
- QA real em Chrome: anônimo recebe 307 para ambas as rotas; caminhos estáticos do PDF recebem 404; cadastro inválido não chama upstream; cadastro válido cria 1 registro na FIXTURE HTTP LOCAL rotulada; as duas opções aparecem; web abre e download corresponde byte a byte ao PDF privado; remover cookie bloqueia novamente. Sem overflow mobile ou exceções JS.
- Nota de tooling: APIRequestContext não envia cookie Secure em HTTP loopback como o Chrome. A validação final dos headers/download foi feita no navegador real, mantendo o cookie Secure, sem enfraquecer produção.

## Bloqueio preservado

A fixture local não é DFChat e não prova integração externa. A captura real na Consultoria HP continua dependente de endpoint e credencial válidos. Sem essa configuração, nenhum acesso é liberado. Não houve push, merge ou deploy.
