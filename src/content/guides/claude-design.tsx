import type { ReactNode } from "react";
import { PostProse, Lead, List } from "@/components/blog/prose";

/**
 * Conteudo autoral do guia, baseado em fontes oficiais da Anthropic
 * (lancamento do Claude Design e artigo de ajuda "Get started").
 * Sem depoimentos, números ou resultados inventados. Sem travessoes.
 */

export const guideToc: { id: string; title: string }[] = [
  { id: "o-que-e", title: "O que é o Claude Design" },
  { id: "o-que-nao-faz", title: "O que ele não faz (limites honestos)" },
  { id: "onde-entra", title: "Onde ele entra no fluxo de postagens" },
  { id: "pre-requisitos", title: "Pré-requisitos" },
  { id: "briefing", title: "Passo 1: briefing replicável" },
  { id: "identidade", title: "Passo 2: identidade visual e design system" },
  { id: "primeiro-lote", title: "Passo 3: gerar o primeiro lote" },
  { id: "refinar", title: "Passo 4: refinar com aprovação humana" },
  { id: "carrossel", title: "Passo 5: variações de carrossel" },
  { id: "export", title: "Passo 6: exportar e levar para publicação" },
  { id: "nomear", title: "Passo 7: nomear e organizar" },
  { id: "qa", title: "Passo 8: QA antes de publicar" },
  { id: "agendar", title: "Passo 9: agendar (opcional, externo)" },
  { id: "cadencia", title: "Cadência em lote (calendário)" },
  { id: "checklist", title: "Checklist final" },
  { id: "limitacoes", title: "Limitações e o que não prometemos" },
];

export const guideTeaser = `Guia prático para transformar uma ideia em lote de postagens usando o Claude Design: briefing replicável, identidade visual aplicada automáticamente, geração em lote, variações de carrossel, refinamento com aprovação humana, exportação e QA antes de publicar. Inclui prompts copiáveis, cadência de producao, checklist e limites reais da ferramenta.`;

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
      <p className="!mt-0 mb-2 font-mono text-xs uppercase tracking-[0.08em] text-[color:var(--text-secondary)]">
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
        identidade da marca. A ideia é tirar a folha em branco do caminho: você escreve o briefing,
        o Claude Design gera as primeiras versões, você refina e aprova, exporta e leva para a
        publicação. O guia separa as responsabilidades: onde a ferramenta termina, ele aponta o passo externo.
      </Lead>

      <Section id="o-que-e" title="O que é o Claude Design">
        <p>
          O Claude Design é um produto da Anthropic Labs, anunciado pela Anthropic, que permite
          colaborar com o Claude para criar trabalho visual como designs, protótipos, slides e
          one-pagers. A partir de uma descrição, o Claude monta uma primeira versão. Depois você
          refina por conversa, comentários inline, edição direta ou sliders (knobs) que o próprio
          Claude cria. Quando você da acesso, ele aplica o design system do time em cada projeto.
        </p>
        <p>
          Para quem produz postagens, três recursos importam mais: design system aplicado
          automáticamente, geração de material para redes sociais e campanhas, e exportação para
          formatos de saída (Canva, PDF, PPTX, HTML standalone). Todos esses pontos estão descritos
          no anúncio oficial, listado em Fontes.
        </p>
      </Section>

      <Section id="o-que-nao-faz" title="O que ele não faz (limites honestos)">
        <p>
          O anúncio oficial não promete API pública, agendamento ou publicação automática. O que ele
          declara é uma intenção de, nas semanas seguintes, facilitar integracoes. Ou seja: nada de
          prometer publicação automática enquanto isso não existir de forma documentada.
        </p>
        <p>
          No anúncio consultado, o Claude Design é apresentado em research preview para assinantes Claude Pro, Max, Team e
          Enterprise, com acesso incluso no plano e uso contado nos limites da assinatura. Em
          organizações Enterprise ele vem desligado por padrão e o admin precisa habilitar.
        </p>
        <p>
          Exportacao: o anúncio cita salvar como pasta (folder), exportar para Canva, PDF, PPTX e
          HTML standalone, além de compartilhar por URL interna da organização. Não há menção, na
          fonte oficial, a exportação automática de PNG ou imagem pronta para post. Converter o
          design em PNG ou JPEG para publicar costuma ser um passo externo, feito no Canva ou no
          próprio navegador.
        </p>
      </Section>

      <Section id="onde-entra" title="Onde ele entra no fluxo de postagens">
        <p>
          Separe duas etapas que costumam ser confundidas:
        </p>
        <Check>
          <li>
            <strong>Geração e design</strong>: é aqui que o Claude Design entra. Ele cria e refina o
            visual das postagens.
          </li>
          <li>
            <strong>Render, conversão de formato e agendamento</strong>: é externo. Converter para o
            formato final da rede, publicar e agendar continua sendo responsabilidade de outra
            ferramenta ou do próprio app da rede social.
          </li>
        </Check>
        <p>
          O fluxo prático fica assim: briefing, geração do lote, refinamento com aprovação humana,
          exportação, conversão para o formato da rede, agendamento e publicação. O Claude Design
          cobre bem as etapas do meio; as pontas continuam com você.
        </p>
      </Section>

      <Section id="pre-requisitos" title="Pré-requisitos">
        <Check>
          <li>Acesso ao Claude Design em um plano elegível (Pro, Max, Team ou Enterprise).</li>
          <li>
            Em Enterprise, o recurso liberado pelo admin nas configurações da organização.
          </li>
          <li>
            Um design system configurado (idealmente lendo o seu código ou arquivos de design) para
            que a saída já saia com a sua identidade.
          </li>
          <li>
            Materiais de apoio: imagens da marca, exemplos de postagens que você gosta, paleta e
            tipografia em texto simples.
          </li>
          <li>
            Um lugar externo para receber o resultado final e agendar (Canva, ferramenta de
            agendamento, ou o próprio app da rede).
          </li>
        </Check>
      </Section>

      <Section id="briefing" title="Passo 1: briefing replicável">
        <p>
          O briefing é o insumo que mais muda a qualidade da saída. Ele precisa caber em uma tela e
          responder quatro perguntas: para quem, qual a mensagem, qual o formato e qual o tom. Use
          este modelo e preencha uma vez por lote, não por post.
        </p>
        <Prompt label="Modelo de briefing (copie e preencha)">{`Contexto da marca: (o que você faz, em 2 frases)
Público: (quem é, o que ele quer resolver)
Mensagem central do lote: (uma frase)
Tom: (ex: direto e técnico / acolhedor / provocativo)
Formato: (ex: 4 posts quadrados 1080x1080 e 1 carrossel de 6 páginas)
Restrições: (proibições legais, cores, sem emoji, sem promessa de resultado)
Chamada para ação: (o que a pessoa deve fazer depois de ler)
Fonte da verdade: (onde está o design system ou o código da marca)`}</Prompt>
        <p>
          Dica prática: escreva o briefing uma vez e reutilize. Trocar só a mensagem central e a CTA
          já gera um lote novo com a mesma identidade.
        </p>
      </Section>

      <Section id="identidade" title="Passo 2: identidade visual e design system">
        <p>
          O anúncio descreve que, durante o onboarding, o Claude constrói um design system para o
          time lendo o código e os arquivos de design. Depois disso, cada projeto usa
          automáticamente suas cores, tipografia e componentes. O sistema pode ser refinado com o
          tempo e um time pode manter mais de um.
        </p>
        <Check>
          <li>
            Aponte o Claude Design para o código do site ou para os arquivos de design da marca.
          </li>
          <li>Confirme que cores, fontes e componentes aparecem corretos no sistema.</li>
          <li>
            Teste com um post simples antes de gerar o lote, para validar a identidade.
          </li>
          <li>
            Se a marca tem mais de uma linha visual (por exemplo, uma linha “médico” e uma linha
            “geral”), aproveite o suporte a múltiplos sistemas.
          </li>
        </Check>
      </Section>

      <Section id="primeiro-lote" title="Passo 3: gerar o primeiro lote">
        <p>
          Gere o lote inteiro de uma vez, pedindo variações, em vez de um post por vez. Isso mantém a
          identidade consistente e reduz retrabalho.
        </p>
        <Prompt label="Prompt de geração em lote (copie e ajuste)">{`Usando o design system da marca, gere N variações de post quadrado para o lote a seguir.
Para cada variacao:
- um título curto que caiba em duas linhas
- um subtitulo de no máximo 12 palavras
- uma chamada para ação
- área de imagem com descrição do que entra
Mantenha as mesmas cores, tipografia e componentes do design system.
Briefing: (cole aqui o briefing preenchido)
Gere todas as variações em uma única conversa para eu comparar e escolher.`}</Prompt>
        <p>
          Você também pode começar de imagens e documentos (DOCX, PPTX, XLSX) ou usar a ferramenta
          de captura da web para puxar elementos do seu site, segundo o anúncio. Isso ajuda o
          prototipo a parecer com o produto real.
        </p>
      </Section>

      <Section id="refinar" title="Passo 4: refinar com aprovação humana">
        <p>
          Refine com quatro controles, na ordem do mais barato para o mais caro:
        </p>
        <Check>
          <li>
            <strong>Conversa</strong>: peça mudanças em texto, uma coisa por vez.
          </li>
          <li>
            <strong>Comentarios inline</strong>: comente em um elemento específico.
          </li>
          <li>
            <strong>Edicao direta</strong>: corrija o texto onde ele está.
          </li>
          <li>
            <strong>Knobs</strong>: ajuste espaçamento, cor e layout ao vivo e depois mande aplicar
            no design inteiro.
          </li>
        </Check>
        <p>
          A aprovação humana é obrigatória antes de qualquer publicação. Nada sai do lote sem
          revisão: nomes, números, dados de pacientes ou clientes, promessas e conformidade com as
          regras do setor (no caso de saúde, as regras do CFM).
        </p>
        <Prompt label="Prompt de refinamento com comentario">{`No elemento (título do card 3), troque o texto por: (novo texto).
Mantenha o resto do design igual.
Depois aplique a mesma correção de espaçamento nos outros cards do lote.`}</Prompt>
      </Section>

      <Section id="carrossel" title="Passo 5: variações de carrossel">
        <p>
          Para carrossel, o segredo é pedir a estrutura completa em uma conversa, com papéis
          definidos por página. Assim a primeira página puxa a atenção e a última fecha com a CTA.
        </p>
        <Prompt label="Prompt de carrossel (copie e ajuste)">{`Crie um carrossel de 6 páginas no formato (1080x1350) usando o design system.
Estrutura:
1. capa com a promessa central em no máximo 8 palavras
2. contexto do problema
3. erro comum 1
4. erro comum 2
5. como resolver (passo a passo curto)
6. chamada para ação com o mesmo botao do design system
Mantenha a mesma paleta e tipografia em todas as páginas.
Briefing: (cole aqui o briefing preenchido)`}</Prompt>
        <p>
          Gere duas ou três variações de capa e escolha uma. Isso é mais rápido do que pedir o
          carrossel inteiro varias vezes.
        </p>
      </Section>

      <Section id="export" title="Passo 6: exportar e levar para publicação">
        <p>
          Segundo o anúncio, você pode salvar como pasta, exportar para Canva, PDF, PPTX ou HTML
          standalone, e compartilhar por URL interna da organização. Escolha conforme o destino:
        </p>
        <Check>
          <li>
            <strong>Canva</strong>: melhor caminho quando você ainda precisa ajustar e depois
            publicar, porque o design fica editável.
          </li>
          <li>
            <strong>PDF / PPTX</strong>: bom para revisão e apresentacao interna.
          </li>
          <li>
            <strong>HTML standalone</strong>: útil para páginas e materiais web.
          </li>
        </Check>
        <p>
          Atenção ao ponto que costuma frustrar: o anúncio não fala em exportar PNG automáticamente.
          Para post de rede social, o caminho prático é levar para o Canva (ou abrir o design e
          capturar a imagem) e só entao gerar o arquivo final no formato da rede. O agendamento
          continua externo.
        </p>
      </Section>

      <Section id="nomear" title="Passo 7: nomear e organizar">
        <p>
          Sem convenção de nomes, em duas semanas ninguém acha nada. Padronize antes de gerar o
          segundo lote.
        </p>
        <Prompt label="Convencao de nomes (exemplo)">{`AAAA-MM-DD_linha_formato_tema_versao
2026-11-04_geral_quadrado_agente-ia_v2
2026-11-04_medico_carrossel_cfm-safe_v1`}</Prompt>
        <Check>
          <li>Uma pasta por lote, com o briefing salvo junto.</li>
          <li>Versao no fim do nome, para não sobrescrever a aprovada.</li>
          <li>Guarde o briefing que gerou o lote, para reproduzir depois.</li>
        </Check>
      </Section>

      <Section id="qa" title="Passo 8: QA antes de publicar">
        <p>
          Rode este roteiro em cada lote. São poucos minutos e evitam retrabalho público.
        </p>
        <Check>
          <li>Ortografia e gramática em todos os textos que aparecem.</li>
          <li>Nomes, números e dados conferidos na fonte (nada inventado pela IA).</li>
          <li>Conformidade com as regras do setor (ex: CFM, quando for saúde).</li>
          <li>Cores e tipografia iguais ao design system.</li>
          <li>Legibilidade da capa no tamanho real do feed.</li>
          <li>Contraste de texto suficiente para leitura em tela pequena.</li>
          <li>CTA coerente com o resto do site e das postagens.</li>
          <li>Versao final salva com o nome padrão e o briefing anexo.</li>
        </Check>
      </Section>

      <Section id="agendar" title="Passo 9: agendar (opcional, externo)">
        <p>
          Não existe promessa, na fonte oficial, de agendamento ou publicação automática dentro do
          Claude Design. Agendar é um passo externo. Você pode:
        </p>
        <Check>
          <li>Usar uma ferramenta de agendamento para publicar nos horários combinados.</li>
          <li>Programar a publicação dentro do próprio app da rede social.</li>
          <li>Manter uma planilha simples com data, formato, tema e link do arquivo aprovado.</li>
        </Check>
        <p>
          Se no futuro a Anthropic documentar uma API pública ou integracao de agendamento, ela
          entra aqui. Até lá, trate agendamento como processo seu, não como recurso da ferramenta.
        </p>
      </Section>

      <Section id="cadencia" title="Cadência em lote (calendário)">
        <p>
          Em vez de produzir post a post, produza por lote. Um ritmo que funciona bem:
        </p>
        <Check>
          <li>Uma vez por mês: definir os temas do mês e escrever um briefing por tema.</li>
          <li>Uma vez por semana: gerar o lote, refinar e aprovar.</li>
          <li>No mesmo dia: exportar, converter para o formato final e agendar a semana.</li>
          <li>Guardar tudo na convenção de nomes, com o briefing junto.</li>
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
          <li>Lote gerado com variações em uma conversa.</li>
          <li>Refinamento e aprovação humana concluídos.</li>
          <li>Export no formato que permite editar e publicar.</li>
          <li>Arquivos no formato final da rede, após a conversão externa.</li>
          <li>Nomes padronizados e briefing anexo.</li>
          <li>QA do roteiro concluido.</li>
          <li>Agendamento feito na ferramenta externa.</li>
        </Check>
      </Section>

      <Section id="limitacoes" title="Limitações e o que não prometemos">
        <Check>
          <li>Claude Design é research preview; recursos e disponibilidade mudam sem aviso.</li>
          <li>As fontes consultadas não documentam uma API pública nativa para este fluxo.</li>
          <li>As fontes consultadas não documentam agendamento nem publicação automática dentro da ferramenta.</li>
          <li>
            Exportacao de PNG automática não é citada oficialmente. Converter para o formato final e
            passo externo.
          </li>
          <li>O uso conta nos limites da assinatura, com opção de extra usage no plano.</li>
          <li>A revisão humana continua obrigatória: a ferramenta acelera, não substitui o crivo.</li>
        </Check>
      </Section>

      <Section id="fontes" title="Fontes">
        <List>
          <li>
            <a href="https://www.anthropic.com/news/claude-design-anthropic-labs" target="_blank" rel="noopener noreferrer">
              Introducing Claude Design by Anthropic Labs (anúncio oficial)
            </a>
          </li>
          <li>
            <a href="https://claude.com/product/design" target="_blank" rel="noopener noreferrer">
              Página do produto Claude Design
            </a>
          </li>
          <li>
            <a href="https://support.claude.com/en/articles/14604416-get-started-with-claude-design" target="_blank" rel="noopener noreferrer">
              Get started with Claude Design (central de ajuda, inclui atalhos de teclado)
            </a>
          </li>
        </List>
        <p className="!text-sm !text-[color:var(--text-secondary)]">
          Este guia é autoral e interpreta as fontes acima. Não reproduz depoimentos nem números de
          terceiros. Última revisão: outubro de 2026.
        </p>
      </Section>
    </PostProse>
  );
}
