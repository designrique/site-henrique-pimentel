import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "mestre-go-vence-katago",
    title: "Mestre de Go vence IA KataGo com handicap de duas pedras",
    teaser:
      "O grão-mestre Shin Jin-seo derrotou o motor KataGo jogando com handicap de duas pedras. O feito reacende o debate sobre limites da IA em jogos de estratégia.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "KED Global",
      url: "https://www.kedglobal.com/artificial-intelligence/newsView/ked202607210007",
    },
    heroImage: {
      url: "/news/mestre-go-vence-katago.webp",
      alt: "Mão colocando pedra preta em tabuleiro de Go de madeira, com arranjo complexo de pedras e notebook ao fundo",
    },
    seo: {
      metaTitle: "Mestre de Go vence IA KataGo com handicap de duas pedras",
      metaDescription:
        "Shin Jin-seo derrotou o motor KataGo com handicap de duas pedras. A vitória humana reacende o debate sobre os limites da IA em jogos de estratégia.",
      metaKeywords:
        "Go, KataGo, IA em jogos, Shin Jin-seo, humano contra IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O grão-mestre coreano <strong>Shin Jin-seo</strong> venceu o motor de
          IA <strong>KataGo</strong> jogando com <strong>handicap de duas
          pedras</strong>. A partida, relatada pela KED Global, viralizou no
          Hacker News com 467 pontos e centenas de comentários.
        </Lead>
        <p>
          Desde a vitória histórica de AlphaGo sobre Lee Sedol em 2016, a
          narrativa dominante é que a IA tornou os humanos obsoletos no Go.
          Shin mostra que, sob condições específicas, a história tem mais
          camadas: com vantagem inicial de duas pedras, a estratégia humana
          ainda encontra brechas no motor.
        </p>
        <H2>O que a partida ensina</H2>
        <List>
          <li>
            Handicap muda o jogo: a IA, treinada para partidas equilibradas,
            tem mais dificuldade em administrar desvantagens iniciais.
          </li>
          <li>
            A vitória não prova superioridade humana, mas mostra que
            benchmarking importa: IA é imbatível em cenários para os quais foi
            otimizada.
          </li>
          <li>
            Para quem usa IA no trabalho, a analogia vale: modelo excelente em
            um contexto pode falhar feio fora dele.
          </li>
        </List>
        <p>
          A leitura prática para negócios: saber o que a sua IA faz bem e onde
          ela quebra é mais valioso do que saber que ela &ldquo;é a melhor&rdquo;.
          Testar limites, como fez Shin, é o caminho para usar modelos com
          segurança e sem surpresa. Esse é o tipo de avaliação que guia o{" "}
          <a href="/baseline-geo" target="_blank" rel="noopener noreferrer">
            nosso diagnóstico de IA
          </a>
          .
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://www.kedglobal.com/artificial-intelligence/newsView/ked202607210007"
            target="_blank"
            rel="noopener noreferrer"
          >
            KED Global
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
