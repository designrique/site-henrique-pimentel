import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "threads-92-por-cento-views-31-por-cento-posts",
    title: "31% dos posts concentraram 92% das views no Threads",
    teaser:
      "O estudo de caso acompanhou 247 threads multipartes em três meses. Um post passou de 143 mil views, oito passaram de 5 mil e a concentração ficou evidente.",
    category: "Social Media",
    publishedDate: "2026-10-22",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Medium, dkspeaks",
      url: "https://dkspeaks.medium.com/threads-engagement-the-4-habits-behind-my-143-168-view-thread-90fb644ae76f",
    },
    seo: {
      metaTitle: "31% dos posts concentraram 92% das views no Threads",
      metaDescription:
        "Estudo de caso com 247 threads em três meses: um post passou de 143 mil views e 92% das visualizações vieram de 31% das publicações.",
      metaKeywords:
        "Threads, engajamento, views, estudo de caso, formato multiparte, algoritmo",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Duzentas e quarenta e sete threads publicadas entre 9 de julho e 7 de
          outubro. Trinta e um por cento delas concentraram 92% de todas as
          views. É o retrato mais honesto de como funcionam plataformas sociais.
        </Lead>

        <p>
          O experimento foi documentado por{" "}
          <a
            href="https://dkspeaks.medium.com/threads-engagement-the-4-habits-behind-my-143-168-view-thread-90fb644ae76f"
            target="_blank"
            rel="noopener noreferrer"
          >
            @dkspeaks no Medium
          </a>{" "}
          e mede threads multipartes, formato em que o autor publica uma sequência
          numerada. O resultado foi desigual por desenho: um post chegou a{" "}
          <strong>143.168 views</strong>, oito passaram de 5 mil e três passaram
          de 10 mil.
        </p>

        <H2>O que se aprende com a concentração</H2>

        <List>
          <li>
            A média engana. Olhar apenas média de views esconde que quase todo o
            resultado vem de poucos posts.
          </li>
          <li>
            Iterar nos formatos que quebraram a média rende mais que tentar
            acertar em todo post.
          </li>
          <li>
            Consistência serve para descobrir o padrão, não para garantir
            alcance uniforme.
          </li>
        </List>

        <p>
          É a mesma conclusão que aparece em relatos de TikTok, Instagram e
          agora Threads: a distribuição é de cauda longa e o trabalho é
          identificar a cauda curta. Vale cruzar com os{" "}
          <a href="/blog">textos sobre conteúdo e distribuição</a> que publicamos
          aqui.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://dkspeaks.medium.com/threads-engagement-the-4-habits-behind-my-143-168-view-thread-90fb644ae76f"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium, dkspeaks
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
