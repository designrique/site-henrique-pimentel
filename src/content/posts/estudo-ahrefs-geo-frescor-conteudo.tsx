import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "estudo-ahrefs-geo-frescor-conteudo",
    title: "Ahrefs analisa 25 milhões de AI Overviews: frescor do conteúdo importa para IA",
    teaser:
      "O maior estudo de GEO até agora cruzou 75 mil marcas com 25 milhões de AI Overviews. Menções de marca lideram os fatores, e conteúdo citado por IA é 25,7% mais recente que o do Google orgânico.",
    category: "SEO/GEO",
    publishedDate: "2026-09-11",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Ahrefs (via YouTube)",
      url: "https://www.youtube.com/watch?v=gReszNnykpg",
    },
    heroImage: {
      url: "/news/estudo-ahrefs-geo-frescor-conteudo.webp",
      alt: "Tela com gráfico de linha em alta ao lado de uma xícara de café, simbolizando conteúdo recente ganhando espaço",
    },
    seo: {
      metaTitle: "Ahrefs: IA cita conteúdo 25,7% mais recente que o do Google",
      metaDescription:
        "Maior estudo de GEO já feito analisa 75 mil marcas em 25 milhões de AI Overviews. Menções de marca lideram e frescor do conteúdo pesa mais para IA que para o Google.",
      metaKeywords:
        "GEO, AI Overviews, Ahrefs, frescor de conteúdo, menções de marca, visibilidade em IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A Ahrefs publicou o maior estudo de otimização para mecanismos
          generativos até agora: <strong>75.000 marcas</strong> analisadas em{" "}
          <strong>25 milhões de AI Overviews</strong>. A conclusão que muda a
          rotina de conteúdo: páginas citadas por IA são, em média,{" "}
          <strong>25,7% mais recentes</strong> que as que ranqueiam no Google
          orgânico.
        </Lead>
        <p>
          Em outras palavras, o modelo generativo prefere informação fresca mais
          do que o algoritmo clássico. Uma página que parou de ser atualizada
          pode segurar posição no Google e ainda assim sumir das respostas de
          IA.
        </p>
        <H2>O que mais pesa nas citações</H2>
        <List>
          <li>
            Menções de marca na web encabeçam a lista de fatores, na linha do
            que outros estudos já indicavam.
          </li>
          <li>
            Frescor é um diferencial mensurável: atualizar dados, datas e
            exemplos de uma página vale mais que publicar página nova.
          </li>
          <li>
            SEO tradicional continua sendo a base; GEO entra como camada de
            manutenção e atualização em cima dele.
          </li>
        </List>
        <p>
          Para quem gerencia conteúdo, a tática prática é simples: revise as
          páginas mais fortes, atualize números e republicue com data nova antes
          de investir em conteúdo inédito. No nosso{" "}
          <a href="/baseline-geo" target="_blank" rel="noopener noreferrer">
            baseline GEO
          </a>
          , frescor é um dos pontos que checamos primeiro.
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://www.youtube.com/watch?v=gReszNnykpg"
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
