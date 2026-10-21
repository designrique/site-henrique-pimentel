import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "linear-100m-arr-nrr-177-agentes-ia",
    title: "Linear cruza US$ 100 milhões de ARR com agentes de IA criando metade das issues",
    teaser:
      "A empresa chegou a 40 mil clientes pagantes, NRR de 177% e cashflow positivo sem rodada primária. Agentes de IA já abrem 50% das issues na plataforma, contra 3% há um ano.",
    category: "Vendas",
    publishedDate: "2026-09-10",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Linear",
      url: "https://linear.app/now/sharing-growth-with-the-people-building-linear",
    },
    heroImage: {
      url: "/news/linear-100m-arr-nrr-177-agentes-ia.webp",
      alt: "Painel de gestão de projetos em tela escura com gráfico de crescimento ao fundo desfocado",
    },
    seo: {
      metaTitle: "Linear: US$ 100M de ARR e NRR de 177% com agentes de IA",
      metaDescription:
        "Linear cruza US$ 100 milhões de ARR, 40 mil clientes pagantes e NRR de 177%. Agentes de IA já criam 50% das issues da plataforma, contra 3% há um ano.",
      metaKeywords:
        "Linear, ARR, SaaS, NRR, agentes de IA, crescimento de software",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A Linear anunciou <strong>US$ 100 milhões de ARR</strong> com{" "}
          <strong>NRR de 177%</strong> e 40 mil empresas pagantes. O detalhe
          que resume a fase: agentes de IA já criam <strong>50% das
          issues</strong> na plataforma. Há um ano, eram 3%.
        </Lead>
        <p>
          O número importa por dois motivos. Primeiro, mostra adoção real de
          agentes no fluxo de trabalho de times de produto, não em piloto
          isolado. Segundo, a Linear atingiu o marco sendo cashflow positive e
          sem levantar rodada primária, um contraponto direto à lógica de
          crescer queimando capital.
        </p>
        <H2>O que observar</H2>
        <List>
          <li>
            NRR de 177% significa que a base atual cresce sozinha: expansão
            supera churn com folga.
          </li>
          <li>
            Quando agentes viram metade do tráfego do produto, o produto passa
            a ser construído para máquinas primeiro, humanos depois.
          </li>
          <li>
            A história foi parar no Hacker News e virou referência de como
            ferramenta de dev encaixa no novo fluxo de trabalho com IA.
          </li>
        </List>
        <p>
          Para times que avaliam onde aplicar agentes no próprio processo, esse
          é o tipo de caso que separemos na{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            consultoria de IA
          </a>
          .
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://linear.app/now/sharing-growth-with-the-people-building-linear"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linear
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
