import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "top-5-newsletters-ia",
    title: "As 5 maiores newsletters de IA em 2026 — e o que copiar delas",
    teaser:
      "Do briefing diário de Rowan Cheung aos testes práticos de Ethan Mollick: o ranking das newsletters de IA que dominam o Substack e o padrão que as sustenta.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Substack (pesquisa web)",
      url: "https://www.turingpost.com/p/chinesemodels",
    },
    heroImage: {
      url: "/news/top-5-newsletters-ia.webp",
      alt: "Pilha de newsletters e revistas sobre mesa ao lado de notebook e café",
    },
    seo: {
      metaTitle: "Top 5 newsletters de IA em 2026 no Substack",
      metaDescription:
        "The Rundown AI (~1M assinantes), One Useful Thing (Ethan Mollick), AI Supremacy, There's An AI For That (2,5M) e TLDR AI lideram o Substack de IA em 2026.",
      metaKeywords:
        "newsletters IA, Substack, The Rundown AI, Ethan Mollick, TLDR AI, curadoria IA, email marketing IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Quer saber onde o público de IA consome informação? Olhe o Substack.
          O ranking das cinco maiores newsletters do nicho revela os formatos
          que sustentam audiências de milhões — e o que qualquer criador pode
          copiar.
        </Lead>

        <p>
          O levantamento, feito na pesquisa semanal de tendências para
          consultores de IA, lista as líderes:{" "}
          <strong>The Rundown AI</strong> (Rowan Cheung, ~1 milhão, briefing
          diário em 5 minutos); <strong>One Useful Thing</strong> (Ethan
          Mollick, Wharton, 100 mil+, testes práticos de IA no trabalho);
          <strong>AI Supremacy</strong> (Michael Spencer, 222 mil+, estratégia
          e op-eds); <strong>There's An AI For That</strong> (2,5 milhões,
          descoberta de ferramentas + prompt do dia); e{" "}
          <strong>TLDR AI</strong> (Dan Ni, 500 mil+, pesquisa e ferramentas
          para devs).
        </p>

        <H2>O padrão por trás das líderes</H2>

        <List>
          <li>
            <strong>Frequência sustentável:</strong> diário ou semanal, mas
            sempre cumprido — consistência vence intensidade.
          </li>
          <li>
            <strong>Curadoria com curador:</strong> as maiores não geram
            notícia, selecionam com critério e comentam — a voz do autor é o
            produto.
          </li>
          <li>
            <strong>Um formato fixo:</strong> briefing de 5 minutos, prompt do
            dia, lista de ferramentas — o leitor sabe o que esperar em toda
            edição.
          </li>
        </List>

        <p>
          O detalhe que mais impressiona é o There's An AI For That com 2,5
          milhões de assinantes — a descoberta de ferramentas virou categoria
          própria de mídia. O público de IA não quer só notícia; quer saber o
          que usar.
        </p>

        <p>
          Para marcas, a newsletter é o canal com melhor custo-benefício do
          marketing de IA: audiência própria, sem depender de algoritmo. É
          uma das estratégias que eu desenho na{" "}
          <a href="/servicos/consultoria-ia">
            consultoria de conteúdo e IA para empresas
          </a>
          — e o ranking mostra que ainda há espaço para quem entra com
          curadoria de qualidade.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.turingpost.com/p/chinesemodels"
            target="_blank"
            rel="noopener noreferrer"
          >
            Levantamento de newsletters de IA — Substack
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
