import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "threads-controle-privado-feed-algoritmo",
    title: "Threads lança o \"Your Algo\": controle privado do próprio feed",
    teaser:
      "A versão particular do Dear Algo permite calibrar o que você vê sem precisar de post público. Ajustes de 1, 3 ou 7 dias, em rollout nos EUA, Canadá, Reino Unido, Austrália e Nova Zelândia.",
    category: "Social Media",
    publishedDate: "2026-09-08",
    readingTime: "2 min",
    news: true,
    source: {
      name: "Lifehacker",
      url: "https://lifehacker.com/tech/three-new-threads-features-rolling-out-now",
    },
    heroImage: {
      url: "/news/threads-controle-privado-feed-algoritmo.webp",
      alt: "Mão tocando controles deslizantes de algoritmo em uma tela de telefone, fundo minimalista claro",
    },
    seo: {
      metaTitle: "Threads lança Your Algo, controle privado do feed",
      metaDescription:
        "Your Algo calibra o feed do Threads em ajustes de 1, 3 ou 7 dias, sem post público. Rollout em EUA, Canadá, Reino Unido, Austrália e Nova Zelândia.",
      metaKeywords: "Threads, Your Algo, Dear Algo, feed, algoritmo, controle de conteúdo",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Threads está dando ao usuário uma alavanca direta no próprio
          algoritmo. O &ldquo;Your Algo&rdquo; é a versão particular do Dear
          Algo, feita para calibrar o feed sem a necessidade de um post público
          dizendo o que você quer ver.
        </Lead>

        <p>
          A ideia é simples e prática: em vez de declarar publicamente o que te
          interessa, o usuário ajusta a preferência de forma privada, com
          janelas de 1, 3 ou 7 dias. O recurso está em rollout nos Estados
          Unidos, Canadá, Reino Unido, Austrália e Nova Zelândia.
        </p>

        <H2>Por que importa</H2>

        <List>
          <li>Calibração privada, sem depender de post público.</li>
          <li>Janelas curtas de 1 a 7 dias dão resposta rápida ao ajuste.</li>
          <li>É um passo real em direção a mais controle sobre o que se vê.</li>
          <li>Reduz a sensação de feed imposto pela plataforma.</li>
        </List>

        <p>
          A leitura honesta: é um recurso de conforto para o usuário, mas o
          sinal para quem cria é outro. Se o feed fica mais ajustável, o
          conteúdo relevante e específico tende a vencer o genérico. Nicho bem
          definido continua sendo a aposta mais segura.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://lifehacker.com/tech/three-new-threads-features-rolling-out-now"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lifehacker
          </a>
          . Entenda como a{" "}
          <a href="/baseline-geo" target="_blank" rel="noopener noreferrer">
            estratégia de conteúdo e GEO
          </a>{" "}
          conversa com esse cenário.
        </p>
      </PostProse>
    );
  },
};

export default post;
