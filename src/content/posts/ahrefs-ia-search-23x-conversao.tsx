import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "ahrefs-ia-search-23x-conversao",
    title: "IA gerou 12% dos cadastros da Ahrefs com 0,5% do tráfego",
    teaser:
      "O tráfego vindo de IA foi meio por cento das visitas do blog da Ahrefs e respondeu por 12,1% dos cadastros. A conversão por visita ficou 23 vezes acima da busca orgânica.",
    category: "Marketing Digital",
    publishedDate: "2026-10-22",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Ahrefs",
      url: "https://ahrefs.com/blog/ai-search-traffic-conversions-ahrefs/",
    },
    heroImage: {
      url: "/news/ahrefs-ia-search-23x-conversao.webp",
      alt: "Monitor com funil de conversão pequeno alimentando uma sequência de cadastros",
    },
    seo: {
      metaTitle: "IA gera 12% dos cadastros da Ahrefs com 0,5% do tráfego",
      metaDescription:
        "Estudo da Ahrefs: o tráfego de IA respondeu por 12,1% dos cadastros com 0,5% das visitas, com conversão por visita 23x maior que a busca orgânica.",
      metaKeywords:
        "tráfego de IA, conversão, Ahrefs, GEO, AEO, marketing de busca",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A Ahrefs mediu o próprio blog e o resultado incomoda quem ainda trata
          busca por IA como experimento: o tráfego vindo de assistentes
          respondeu por <strong>12,1% dos cadastros</strong> sendo apenas{" "}
          <strong>0,5% das visitas</strong>.
        </Lead>

        <p>
          O número que resume a diferença é a conversão por visita: quem chega
          por resposta de IA converteu <strong>23 vezes mais</strong> que quem
          chega pela busca orgânica tradicional. Não é volume, é seleção.
        </p>

        <p>
          A leitura prática é simples. A página que o ChatGPT ou o Perplexity
          citam já passou por um filtro de intenção: o modelo resumiu a
          pergunta do usuário e escolheu a fonte que responde. Quem clica nessa
          citação chega no meio da decisão, não no início da pesquisa.
        </p>

        <H2>O que isso muda na produção de conteúdo</H2>

        <p>
          Comparativos, reviews e páginas que respondem pergunta de compra
          passam a valer mais que o post genérico de topo de funil. O dado está
          no levantamento completo da{" "}
          <a
            href="https://ahrefs.com/blog/ai-search-traffic-conversions-ahrefs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahrefs
          </a>
          , e ele conversa com o que já se sabe sobre{" "}
          <a href="/baseline-geo">otimização para motores generativos</a>: a
          disputa deixou de ser a primeira posição azul e virou a menção dentro
          da resposta.
        </p>

        <p>
          A ressalva honesta: uma empresa não é amostra. O dado é bom sinal de
          direção, não promessa de resultado. Ainda assim, meio por cento do
          tráfego valendo 12% dos cadastros é uma conta que ninguém deveria
          ignorar.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://ahrefs.com/blog/ai-search-traffic-conversions-ahrefs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahrefs
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
