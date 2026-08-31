import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "marketplaces-skills-agentes-trending",
    title: "GitHub Trending: o ecossistema de agentes virou produto",
    teaser:
      "4 dos 19 repositórios mais quentes da semana são marketplaces de plugins e skills para agentes de código. O padrão diz mais que qualquer repo isolado.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-31",
    readingTime: "3 min",
    news: true,
    source: {
      name: "GitHub Trending",
      url: "https://github.com/trending",
    },
    heroImage: {
      url: "/news/marketplaces-skills-agentes-trending.webp",
      alt: "Smartphone exibindo grade abstrata de aplicativos com ícones brilhantes sobre mesa",
    },
    seo: {
      metaTitle: "GitHub Trending: marketplaces de skills de agentes dominam",
      metaDescription:
        "4 dos 19 repos mais quentes do GitHub Trending são marketplaces de plugins e skills para agentes de código. O ecossistema de agentes virou produto.",
      metaKeywords:
        "GitHub Trending, marketplaces de skills, agentes de código, ecossistema de IA, plugins para agentes",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O padrão da semana no GitHub Trending é mais revelador que qualquer
          repositório isolado: <strong>4 dos 19 repos mais quentes</strong> são
          marketplaces de plugins e skills para agentes de código. O
          ecossistema virou produto.
        </Lead>

        <p>
          Faz sentido. Primeiro vieram os modelos, depois os agentes, e agora
          a camada que distribui habilidade para esses agentes. Repositórios
          como awesome-gpt-image-2, scientific-agent-skills e outras coleções
          de skills funcionam como vitrines: quem quer capacitar um agente não
          escreve tudo do zero, procura o pacote pronto.
        </p>

        <H2>O que esse padrão significa</H2>

        <List>
          <li>
            <strong>Skills viraram moeda:</strong> o valor de mercado migra do
            modelo para o pacote de habilidades em volta dele.
          </li>
          <li>
            <strong>Curadoria é diferencial:</strong> com milhares de opções,
            quem organiza e valida skills ganha a confiança dos usuários.
          </li>
          <li>
            <strong>Padronização a caminho:</strong> marketplaces exigem
            formato comum — e formato comum destrava interoperabilidade.
          </li>
        </List>

        <p>
          Para quem trabalha com IA aplicada, a leitura é estratégica:
          construir seu próprio marketplace interno de skills — ou pelo menos
          documentar as que funcionam — vira vantagem competitiva. O mesmo
          raciocínio de ecossistema que aplico ao desenhar soluções para
          clientes na <a href="/servicos/consultoria-ia">consultoria de IA</a>.
        </p>

        <p>
          Fonte:{" "}
          <a href="https://github.com/trending" target="_blank" rel="noopener noreferrer">
            GitHub Trending
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
