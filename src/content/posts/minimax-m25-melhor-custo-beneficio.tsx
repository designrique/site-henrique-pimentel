import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "minimax-m25-melhor-custo-beneficio",
    title: "MiniMax M2.5 é o melhor custo-benefício entre modelos de IA",
    teaser:
      "Com 56,3% no SWE-bench Lite por US$ 0,22 por milhão de tokens, o MiniMax M2.5 entrega ~90% do desempenho do Claude Opus 4.6 por 1/25 do preço.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "pricepertoken.com",
      url: "https://pricepertoken.com/leaderboards/benchmark/swe-bench-lite",
    },
    heroImage: {
      url: "/news/minimax-m25-melhor-custo-beneficio.webp",
      alt: "Rack de servidores com LEDs azuis e engenheiro com calculadora",
    },
    seo: {
      metaTitle: "MiniMax M2.5: melhor custo-benefício em modelos de código",
      metaDescription:
        "MiniMax M2.5 marca 56,3% no SWE-bench Lite por US$ 0,22/US$ 0,90 por milhão de tokens — ~90% do score do Claude Opus 4.6 por 1/25 do preço.",
      metaKeywords:
        "MiniMax M2.5, custo-benefício IA, modelos de código, SWE-bench, LLM barato, preço tokens",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Se a régua é desempenho por real gasto, o campeão da semana é o{" "}
          <strong>MiniMax M2.5</strong>: 56,3% no SWE-bench Lite por apenas{" "}
          <strong>US$ 0,22 de entrada e US$ 0,90 de saída</strong> por milhão
          de tokens. É ~90% do score do Claude Opus 4.6 (62,7%) por cerca de
          1/25 do preço.
        </Lead>

        <p>
          Os dados vêm do leaderboard do pricepertoken.com (LayerLens,
          13/08/2026), que cruza benchmark de código com preço de API. E o
          padrão se repete: os modelos chineses dominam a faixa de custo
          baixo, entregando desempenho de sobra para tarefas reais de
          engenharia de software.
        </p>

        <H2>A conta que importa</H2>

        <List>
          <li>
            <strong>MiniMax M2.5:</strong> 56,3% no SWE-bench Lite por
            US$ 0,22/US$ 0,90 — o melhor retorno por dólar da lista.
          </li>
          <li>
            <strong>Claude Opus 4.6:</strong> 62,7% por US$ 5,00/US$ 25,00 —
            mais capaz, mas 25x mais caro na entrada.
          </li>
          <li>
            <strong>No meio:</strong> GPT-5 e Claude Haiku 4.5 empatam em
            54,3%, com preços intermediários.
          </li>
        </List>

        <p>
          Traduzindo para o dia a dia de quem desenvolve: para automação de
          tarefas, refatoração e código de volume, o M2.5 resolve com sobra.
          A diferença de 6 pontos percentuais contra o Opus só importa em
          raciocínio profundo — e aí, sim, vale pagar o premium.
        </p>

        <p>
          A recomendação prática que tenho dado em projetos: comece com o
          modelo barato para o grosso do tráfego e escale para os caros apenas
          nas tarefas que exigem raciocínio. É a mesma lógica de orçamento que
          aplico ao montar{" "}
          <a href="/servicos/consultoria-ia">pipelines de IA para empresas</a>.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://pricepertoken.com/leaderboards/benchmark/swe-bench-lite"
            target="_blank"
            rel="noopener noreferrer"
          >
            SWE-bench Lite leaderboard — pricepertoken.com
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
