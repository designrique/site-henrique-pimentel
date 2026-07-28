import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, H3, Lead, Quote, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "como-aparecer-no-chatgpt",
    title: "Como aparecer no ChatGPT em 2026: guia com caso real",
    teaser:
      "O caminho completo — do diagnóstico zero até 2 de 10 motores citando, documentado com números. Schema.org, conteúdo estruturado e acompanhamento mensal.",
    category: "GEO/AEO",
    publishedDate: "2026-07-28",
    readingTime: "9 min",
    author: "Henrique Pimentel",
    seo: {
      metaTitle:
        "Como aparecer no ChatGPT em 2026: guia com caso real | Henrique Pimentel",
      metaDescription:
        "Passo a passo para ser citado pelo ChatGPT, Gemini e Perplexity. Schema.org, conteúdo estruturado, llms.txt e acompanhamento mensal — com caso real documentado da Dra. Fátima Knappe.",
      metaKeywords:
        "como aparecer no ChatGPT, GEO, Generative Engine Optimization, citado por IA, ChatGPT médico, Perplexity, Gemini",
    },
  },
  Content: function PostContent() {
    return (
      <PostProse>
        <Lead>
          Em 2024, o paciente abria o Google. Em 2026, ele abre o ChatGPT.
          E quando a IA responde &ldquo;procure a Dra. Fulana em
          Recife&rdquo;, quem está no rol de nomes citados ganha o paciente
          que nunca soube que os outros existiam. Este é o passo a passo
          que usei com a Dra. Fátima Knappe — do zero a 2 motores citando
          em 60 dias, com números documentados.
        </Lead>

        <p>
          Não existe lance, anúncio ou compra de espaço dentro do ChatGPT.
          Assim como no Google não se compra a primeira posição organicamente,
          nas IAs não se compra citação. A pergunta é técnica: <strong>quais
          sinais fazem um modelo generativo decidir mencionar você</strong>{" "}
          quando alguém pergunta sobre seu serviço.
        </p>

        <H2>O ponto de partida — fevereiro de 2026</H2>

        <p>
          A Dra. Fátima Knappe é geriatra em Recife, 22 anos de carreira,
          foco em cuidados paliativos e atendimento domiciliar. Tinha um site
          simples em WordPress. Antes de implementar qualquer coisa, fiz o
          diagnóstico inicial das 10 buscas-alvo nos 5 motores de IA
          (ChatGPT, Gemini, Perplexity, Claude e Copilot).
        </p>

        <p>
          O resultado do dia zero: <strong>0 de 50</strong>. Nenhum motor
          citava o nome dela em nenhuma das 10 buscas. O detalhe completo
          está documentado em{" "}
          <a href="/blog/baseline-fatima">
            Diagnóstico inicial da Dra. Fátima Knappe — caso real
          </a>
          .
        </p>

        <H2>Os 5 sinais que pesam na citação</H2>

        <p>
          Trabalhei nisso durante 2 meses e identifiquei 5 sinais que pesam
          mais que todos os outros. Estão em ordem de impacto — o primeiro
          separa quem existe de quem a IA reconhece como referência.
        </p>

        <H3>1. Marcação técnica do site (Schema.org)</H3>

        <p>
          É o sinal que separa um site &ldquo;que existe&rdquo; de um site
          &ldquo;que a IA reconhece como referência válida de um
          profissional&rdquo;. A marcação Schema.org <code>Physician</code>{" "}
          diz para o crawler: &ldquo;este site representa um médico, desta
          especialidade, neste CRM, atendendo neste endereço&rdquo;. Sem
          isso, a IA vê HTML solto e não consegue estruturar a entidade.
        </p>

        <H3>2. Conteúdo estruturado para extração</H3>

        <p>
          A IA não lê seu site como um humano. Ela extrai entidades,
          relações e respostas diretas. Se seu conteúdo é prosa narrativa
          sem estrutura, a IA não consegue extrair nada útil. O framework
          completo de 4 pilares para isso está em{" "}
          <a href="/blog/framework-geo-extracao-ia">
            Framework GEO: como estruturar conteúdo para extração por IA
          </a>
          .
        </p>

        <H3>3. Arquivo llms.txt e robots.txt</H3>

        <p>
          O <code>llms.txt</code> é um arquivo na raiz do site que diz aos
          motores generativos: &ldquo;aqui está o que eu faço, em formato
          que você consegue ler&rdquo;. O <code>robots.txt</code> precisa
          permitir explicitamente GPTBot, ClaudeBot, PerplexityBot,
          Google-Extended e CCBot. Sem permissão, o crawler nem chega.
        </p>

        <H3>4. Google Meu Negócio como sinal de autoridade</H3>

        <p>
          O Gemini usa dados do Google Business Profile. Postagens semanais,
          avaliações respondidas e fotos profissionais são sinais fortes de
          que o negócio está ativo. Para a Dra. Fátima, o Google Meu
          Negócio foi o segundo sinal mais impactante depois do Schema.org.
        </p>

        <H3>5. Autoridade externa (backlinks)</H3>

        <p>
          As IAs citam quem é citado em outros lugares. Se ninguém linka
          para seu site, a IA não tem razão para te considerar referência.
          O caso da Dra. Fátima ainda tem poucos backlinks — é o gargalo
          que explica por que só 2 dos 10 motores citam, não 5.
        </p>

        <H2>O que foi feito — em 14 dias</H2>

        <List>
          <li>Site reescrito em Next.js 16 com marcação Schema.org Physician + MedicalBusiness</li>
          <li>llms.txt e robots.txt liberando todos os crawlers de IA</li>
          <li>Google Meu Negócio reativado com postagens semanais e respostas a avaliações</li>
          <li>Conteúdo educativo dentro das regras do CFM 2.336/2023</li>
          <li>Script de monitoramento mensal rodando as 10 buscas-alvo nos 5 motores</li>
        </List>

        <H2>O resultado — 60 dias depois</H2>

        <Quote>
          De 0 de 50 buscas citando para 2 de 10 buscas citando (20%) no
          Gemini. O ChatGPT ainda não cita, mas o Perplexity começou a
          indexar o conteúdo. A evolução é mês a mês, documentada.
        </Quote>

        <p>
          Não é mágica nem hack. É trabalho técnico persistente com
          acompanhamento mensal. O detalhe de cada busca, qual motor
          citou e o que mudou está em{" "}
          <a href="/blog/baseline-fatima">
            Diagnóstico inicial da Dra. Fátima Knappe
          </a>
          .
        </p>

        <H2>Como aplicar no seu caso</H2>

        <p>
          Se você é médico, advogado, contador ou prestador de serviço que
          depende de captação local: o paciente que pergunta
          &ldquo;melhor [sua especialidade] em [sua cidade]&rdquo; ao
          ChatGPT não recebe 10 links — recebe 2 ou 3 nomes. Se você não
          está entre eles, perdeu o paciente para quem está.
        </p>

        <p>
          O caminho mais rápido é solicitar uma{" "}
          <a href="/baseline-geo">análise GEO gratuita</a>. Em 7 dias
          úteis você recebe um relatório com o estado atual do seu nome
          nos 5 motores de IA e 3 ações concretas de curto prazo. Sem
          reunião obrigatória, sem custo.
        </p>

        <p>
          Se já sabe que precisa implementar e prefere conversar antes,
          <a href="/contato"> agende um diagnóstico de 30 minutos</a>.
          Ou veja o{" "}
          <a href="/medcitado">
            MedCitado — pacote produtizado de GEO para médicos
          </a>
          , com garantia inversa de 60 dias.
        </p>
      </PostProse>
    );
  },
};

export default post;
