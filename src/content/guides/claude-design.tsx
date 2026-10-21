import type { ReactNode } from "react";
import { PostProse, Lead, List } from "@/components/blog/prose";

/**
 * Conteudo autoral do guia, baseado em fontes oficiais da Anthropic
 * (lancamento do Claude Design e artigo de ajuda "Get started").
 * Sem depoimentos, numeros ou resultados inventados. Sem travessoes.
 */

export const guideToc: { id: string; title: string }[] = [
  { id: "o-que-e", title: "O que e o Claude Design" },
  { id: "o-que-nao-faz", title: "O que ele nao faz (limites honestos)" },
  { id: "onde-entra", title: "Onde ele entra no fluxo de postagens" },
  { id: "pre-requisitos", title: "Pre-requisitos" },
  { id: "briefing", title: "Passo 1: briefing replicavel" },
  { id: "identidade", title: "Passo 2: identidade visual e design system" },
  { id: "primeiro-lote", title: "Passo 3: gerar o primeiro lote" },
  { id: "refinar", title: "Passo 4: refinar com aprovacao humana" },
  { id: "carrossel", title: "Passo 5: variacoes de carrossel" },
  { id: "export", title: "Passo 6: exportar e levar para publicacao" },
  { id: "nomear", title: "Passo 7: nomear e organizar" },
  { id: "qa", title: "Passo 8: QA antes de publicar" },
  { id: "agendar", title: "Passo 9: agendar (opcional, externo)" },
  { id: "cadencia", title: "Cadencia em lote (calendario)" },
  { id: "checklist", title: "Checklist final" },
  { id: "limitacoes", title: "Limitacoes e o que nao prometemos" },
];

export const guideTeaser = `Guia pratico para transformar uma ideia em lote de postagens usando o Claude Design: briefing replicavel, identidade visual aplicada automaticamente, geracao em lote, variacoes de carrossel, refinamento com aprovacao humana, exportacao e QA antes de publicar. Inclui prompts copiaveis, cadencia de producao, checklist e limites reais da ferramenta.`;

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mt-12 mb-3 font-serif text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[color:var(--text-primary)] leading-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Prompt({ label, children }: { label: string; children: string }) {
  return (
    <div className="my-6">
      <p className="!mt-0 mb-2 font-mono text-xs uppercase tracking-[0.08em] text-[color:var(--text-tertiary)]">
        {label}
      </p>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Check({ children }: { children: ReactNode }) {
  return (
    <ul className="my-5 space-y-2.5 list-disc pl-6 text-[color:var(--text-secondary)] text-[1.0625rem] leading-[1.7] marker:text-[color:var(--accent-primary)]">
      {children}
    </ul>
  );
}

export function GuideContent() {
  return (
    <PostProse>
      <Lead>
        Este guia mostra como usar o Claude Design para produzir postagens em lote sem perder a
        identidade da marca. A ideia e tirar a folha em branco do caminho: voce escreve o briefing,
        o Claude Design gera as primeiras versoes, voce refina e aprova, exporta e leva para a
        publicacao. O guia nao vende magica: onde a ferramenta termina, ele aponta o passo externo.
      </Lead>

      <Section id="o-que-e" title="O que e o Claude Design">
        <p>
          O Claude Design e um produto da Anthropic Labs, anunciado pela Anthropic, que permite
          colaborar com o Claude para criar trabalho visual como designs, prototipos, slides e
          one-pagers. A partir de uma descricao, o Claude monta uma primeira versao. Depois voce
          refina por conversa, comentarios inline, edicao direta ou sliders (knobs) que o proprio
          Claude cria. Quando voce da acesso, ele aplica o design system do time em cada projeto.
        </p>
        <p>
          Para quem produz postagens, tres recursos importam mais: design system aplicado
          automaticamente, geracao de material para redes sociais e campanhas, e exportacao para
          formatos de saída (Canva, PDF, PPTX, HTML standalone). Todos esses pontos estao descritos
          no anuncio oficial, listado em Fontes.
        </p>
      </Section>

      <Section id="o-que-nao-faz" title="O que ele nao faz (limites honestos)">
        <p>
          O anuncio oficial nao promete API publica, agendamento ou publicacao automatica. O que ele
          declara e uma intencao de, nas semanas seguintes, facilitar integracoes. Ou seja: nada de
          prometer publicacao automatica enquanto isso nao existir de forma documentada.
        </p>
        <p>
          O Claude Design e um recurso em research preview para assinantes Claude Pro, Max, Team e
          Enterprise, com acesso incluso no plano e uso contado nos limites da assinatura. Em
          organizacoes Enterprise ele vem desligado por padrao e o admin precisa habilitar.
        </p>
        <p>
          Exportacao: o anuncio cita salvar como pasta (folder), exportar para Canva, PDF, PPTX e
          HTML standalone, alem de compartilhar por URL interna da organizacao. Nao ha mencao, na
          fonte oficial, a exportacao automatica de PNG ou imagem pronta para post. Converter o
          design em PNG ou JPEG para publicar costuma ser um passo externo, feito no Canva ou no
          proprio navegador.
        </p>
      </Section>

      <Section id="onde-entra" title="Onde ele entra no fluxo de postagens">
        <p>
          Separe duas etapas que costumam ser confundidas:
        </p>
        <Check>
          <li>
            <strong>Geracao e design</strong>: e aqui que o Claude Design entra. Ele cria e refina o
            visual das postagens.
          </li>
          <li>
            <strong>Render, conversao de formato e agendamento</strong>: e externo. Converter para o
            formato final da rede, publicar e agendar continua sendo responsabilidade de outra
            ferramenta ou do proprio app da rede social.
          </li>
        </Check>
        <p>
          O fluxo pratico fica assim: briefing, geracao do lote, refinamento com aprovacao humana,
          exportacao, conversao para o formato da rede, agendamento e publicacao. O Claude Design
          cobre bem as etapas do meio; as pontas continuam com voce.
        </p>
      </Section>

      <Section id="pre-requisitos" title="Pre-requisitos">
        <Check>
          <li>Acesso ao Claude Design em um plano elegivel (Pro, Max, Team ou Enterprise).</li>
          <li>
            Em Enterprise, o recurso liberado pelo admin nas configuracoes da organizacao.
          </li>
          <li>
            Um design system configurado (idealmente lendo o seu codigo ou arquivos de design) para
            que a saida ja saia com a sua identidade.
          </li>
          <li>
            Materiais de apoio: imagens da marca, exemplos de postagens que voce gosta, paleta e
            tipografia em texto simples.
          </li>
          <li>
            Um lugar externo para receber o resultado final e agendar (Canva, ferramenta de
            agendamento, ou o proprio app da rede).
          </li>
        </Check>
      </Section>

      <Section id="briefing" title="Passo 1: briefing replicavel">
        <p>
          O briefing e o insumo que mais muda a qualidade da saida. Ele precisa caber em uma tela e
          responder quatro perguntas: para quem, qual a mensagem, qual o formato e qual o tom. Use
          este modelo e preencha uma vez por lote, nao por post.
        </p>
        <Prompt label="Modelo de briefing (copie e preencha)">{`Contexto da marca: (o que voce faz, em 2 frases)
Publico: (quem e, o que ele quer resolver)
Mensagem central do lote: (uma frase)
Tom: (ex: direto e tecnico / acolhedor / provocativo)
Formato: (ex: 4 posts quadrados 1080x1080 e 1 carrossel de 6 paginas)
Restricoes: (proibicoes legais, cores, sem emoji, sem promessa de resultado)
Chamada para acao: (o que a pessoa deve fazer depois de ler)
Fonte da verdade: (onde esta o design system ou o codigo da marca)`}</Prompt>
        <p>
          Dica pratica: escreva o briefing uma vez e reutilize. Trocar so a mensagem central e a CTA
          ja gera um lote novo com a mesma identidade.
        </p>
      </Section>

      <Section id="identidade" title="Passo 2: identidade visual e design system">
        <p>
          O anuncio descreve que, durante o onboarding, o Claude constroi um design system para o
          time lendo o codigo e os arquivos de design. Depois disso, cada projeto usa
          automaticamente suas cores, tipografia e componentes. O system pode ser refinado com o
          tempo e um time pode manter mais de um.
        </p>
        <Check>
          <li>
            Aponte o Claude Design para o codigo do site ou para os arquivos de design da marca.
          </li>
          <li>Confirme que cores, fontes e componentes aparecem corretos no system.</li>
          <li>
            Teste com um post simples antes de gerar o lote, para validar a identidade.
          </li>
          <li>
            Se a marca tem mais de uma linha visual (por exemplo, uma linha “medico” e uma linha
            “geral”), aproveite o suporte a multiplos systems.
          </li>
        </Check>
      </Section>

      <Section id="primeiro-lote" title="Passo 3: gerar o primeiro lote">
        <p>
          Gere o lote inteiro de uma vez, pedindo variacoes, em vez de um post por vez. Isso mantem a
          identidade consistente e reduz retrabalho.
        </p>
        <Prompt label="Prompt de geracao em lote (copie e ajuste)">{`Usando o design system da marca, gere N variacoes de post quadrado para o lote a seguir.
Para cada variacao:
- um titulo curto que caiba em duas linhas
- um subtitulo de no maximo 12 palavras
- uma chamada para acao
- area de imagem com descricao do que entra
Mantenha as mesmas cores, tipografia e componentes do design system.
Briefing: (cole aqui o briefing preenchido)
Gere todas as variacoes em uma unica conversa para eu comparar e escolher.`}</Prompt>
        <p>
          Voce tambem pode comecar de imagens e documentos (DOCX, PPTX, XLSX) ou usar a ferramenta
          de captura da web para puxar elementos do seu site, segundo o anuncio. Isso ajuda o
          prototipo a parecer com o produto real.
        </p>
      </Section>

      <Section id="refinar" title="Passo 4: refinar com aprovacao humana">
        <p>
          Refine com quatro controles, na ordem do mais barato para o mais caro:
        </p>
        <Check>
          <li>
            <strong>Conversa</strong>: peca mudancas em texto, uma coisa por vez.
          </li>
          <li>
            <strong>Comentarios inline</strong>: comente em um elemento especifico.
          </li>
          <li>
            <strong>Edicao direta</strong>: corrija o texto onde ele esta.
          </li>
          <li>
            <strong>Knobs</strong>: ajuste espacamento, cor e layout ao vivo e depois mande aplicar
            no design inteiro.
          </li>
        </Check>
        <p>
          A aprovacao humana e obrigatoria antes de qualquer publicacao. Nada sai do lote sem
          revisao: nomes, numeros, dados de pacientes ou clientes, promessas e conformidade com as
          regras do setor (no caso de saude, as regras do CFM).
        </p>
        <Prompt label="Prompt de refinamento com comentario">{`No elemento (titulo do card 3), troque o texto por: (novo texto).
Mantenha o resto do design igual.
Depois aplique a mesma correcao de espacamento nos outros cards do lote.`}</Prompt>
      </Section>

      <Section id="carrossel" title="Passo 5: variacoes de carrossel">
        <p>
          Para carrossel, o segredo e pedir a estrutura completa em uma conversa, com papeis
          definidos por pagina. Assim a primeira pagina puxa a atencao e a ultima fecha com a CTA.
        </p>
        <Prompt label="Prompt de carrossel (copie e ajuste)">{`Crie um carrossel de 6 paginas no formato (1080x1350) usando o design system.
Estrutura:
1. capa com a promessa central em no maximo 8 palavras
2. contexto do problema
3. erro comum 1
4. erro comum 2
5. como resolver (passo a passo curto)
6. chamada para acao com o mesmo botao do design system
Mantenha a mesma paleta e tipografia em todas as paginas.
Briefing: (cole aqui o briefing preenchido)`}</Prompt>
        <p>
          Gere duas ou tres variacoes de capa e escolha uma. Isso e mais rapido do que pedir o
          carrossel inteiro varias vezes.
        </p>
      </Section>

      <Section id="export" title="Passo 6: exportar e levar para publicacao">
        <p>
          Segundo o anuncio, voce pode salvar como pasta, exportar para Canva, PDF, PPTX ou HTML
          standalone, e compartilhar por URL interna da organizacao. Escolha conforme o destino:
        </p>
        <Check>
          <li>
            <strong>Canva</strong>: melhor caminho quando voce ainda precisa ajustar e depois
            publicar, porque o design fica editavel.
          </li>
          <li>
            <strong>PDF / PPTX</strong>: bom para revisao e apresentacao interna.
          </li>
          <li>
            <strong>HTML standalone</strong>: util para paginas e materiais web.
          </li>
        </Check>
        <p>
          Atencao ao ponto que costuma frustrar: o anuncio nao fala em exportar PNG automaticamente.
          Para post de rede social, o caminho pratico e levar para o Canva (ou abrir o design e
          capturar a imagem) e so entao gerar o arquivo final no formato da rede. O agendamento
          continua externo.
        </p>
      </Section>

      <Section id="nomear" title="Passo 7: nomear e organizar">
        <p>
          Sem convencao de nomes, em duas semanas ninguem acha nada. Padronize antes de gerar o
          segundo lote.
        </p>
        <Prompt label="Convencao de nomes (exemplo)">{`AAAA-MM-DD_linha_formato_tema_versao
2026-11-04_geral_quadrado_agente-ia_v2
2026-11-04_medico_carrossel_cfm-safe_v1`}</Prompt>
        <Check>
          <li>Uma pasta por lote, com o briefing salvo junto.</li>
          <li>Versao no fim do nome, para nao sobrescrever a aprovada.</li>
          <li>Guarde o briefing que gerou o lote, para reproduzir depois.</li>
        </Check>
      </Section>

      <Section id="qa" title="Passo 8: QA antes de publicar">
        <p>
          Rode este roteiro em cada lote. Sao poucos minutos e evitam retrabalho publico.
        </p>
        <Check>
          <li>Ortografia e gramatica em todos os textos que aparecem.</li>
          <li>Nomes, numeros e dados conferidos na fonte (nada inventado pela IA).</li>
          <li>Conformidade com as regras do setor (ex: CFM, quando for saude).</li>
          <li>Cores e tipografia iguais ao design system.</li>
          <li>Legibilidade da capa no tamanho real do feed.</li>
          <li>Contraste de texto suficiente para leitura em tela pequena.</li>
          <li>CTA coerente com o resto do site e das postagens.</li>
          <li>Versao final salva com o nome padrao e o briefing anexo.</li>
        </Check>
      </Section>

      <Section id="agendar" title="Passo 9: agendar (opcional, externo)">
        <p>
          Nao existe promessa, na fonte oficial, de agendamento ou publicacao automatica dentro do
          Claude Design. Agendar e um passo externo. Voce pode:
        </p>
        <Check>
          <li>Usar uma ferramenta de agendamento para publicar nos horarios combinados.</li>
          <li>Programar a publicacao dentro do proprio app da rede social.</li>
          <li>Manter uma planilha simples com data, formato, tema e link do arquivo aprovado.</li>
        </Check>
        <p>
          Se no futuro a Anthropic documentar uma API publica ou integracao de agendamento, ela
          entra aqui. Ate la, trate agendamento como processo seu, nao como recurso da ferramenta.
        </p>
      </Section>

      <Section id="cadencia" title="Cadencia em lote (calendario)">
        <p>
          Em vez de produzir post a post, produza por lote. Um ritmo que funciona bem:
        </p>
        <Check>
          <li>Uma vez por mes: definir os temas do mes e escrever um briefing por tema.</li>
          <li>Uma vez por semana: gerar o lote, refinar e aprovar.</li>
          <li>No mesmo dia: exportar, converter para o formato final e agendar a semana.</li>
          <li>Guardar tudo na convencao de nomes, com o briefing junto.</li>
        </Check>
        <p>
          Blocos curtos e frequentes vencem uma maratona mensal. O gargalo deixa de ser “criar do
          zero” e passa a ser “aprovar e agendar”.
        </p>
      </Section>

      <Section id="checklist" title="Checklist final">
        <Check>
          <li>Acesso ao Claude Design confirmado no plano certo (Enterprise liberado pelo admin).</li>
          <li>Design system criado e validado com um teste.</li>
          <li>Briefing do lote escrito e salvo.</li>
          <li>Lote gerado com variacoes em uma conversa.</li>
          <li>Refinamento e aprovacao humana concluidos.</li>
          <li>Export no formato que permite editar e publicar.</li>
          <li>Arquivos no formato final da rede, apos a conversao externa.</li>
          <li>Nomes padronizados e briefing anexo.</li>
          <li>QA do roteiro concluido.</li>
          <li>Agendamento feito na ferramenta externa.</li>
        </Check>
      </Section>

      <Section id="limitacoes" title="Limitacoes e o que nao prometemos">
        <Check>
          <li>Claude Design e research preview; recursos e disponibilidade mudam sem aviso.</li>
          <li>Nao existe, na fonte oficial, API publica nativa divulgada.</li>
          <li>Nao ha agendamento nem publicacao automatica dentro da ferramenta.</li>
          <li>
            Exportacao de PNG automatica nao e citada oficialmente. Converter para o formato final e
            passo externo.
          </li>
          <li>O uso conta nos limites da assinatura, com opcao de extra usage no plano.</li>
          <li>A revisao humana continua obrigatoria: a ferramenta acelera, nao substitui o crivo.</li>
        </Check>
      </Section>

      <Section id="fontes" title="Fontes">
        <List>
          <li>
            <a href="https://www.anthropic.com/news/claude-design-anthropic-labs" target="_blank" rel="noopener noreferrer">
              Introducing Claude Design by Anthropic Labs (anuncio oficial)
            </a>
          </li>
          <li>
            <a href="https://claude.com/product/design" target="_blank" rel="noopener noreferrer">
              Pagina do produto Claude Design
            </a>
          </li>
          <li>
            <a href="https://support.claude.com/en/articles/14604416-get-started-with-claude-design" target="_blank" rel="noopener noreferrer">
              Get started with Claude Design (central de ajuda, inclui atalhos de teclado)
            </a>
          </li>
        </List>
        <p className="!text-sm !text-[color:var(--text-tertiary)]">
          Este guia e autoral e interpreta as fontes acima. Nao reproduz depoimentos nem numeros de
          terceiros. Ultima revisao: outubro de 2026.
        </p>
      </Section>
    </PostProse>
  );
}
