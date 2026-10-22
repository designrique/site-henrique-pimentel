import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, Quote } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "tiktok-zero-7-mil-seguidores-qualidade",
    title: "Do zero a 7 mil seguidores no TikTok em cinco meses, sem postar todo dia",
    teaser:
      "O relato de um criador derruba a ideia de que volume diário é requisito. O que carregou o crescimento foi escolha de tema, roteiro e edição.",
    category: "Social Media",
    publishedDate: "2026-10-22",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Reddit r/socialmedia",
      url: "https://reddit.com/r/socialmedia/comments/1vj3uy1/how_to_grow_on_tiktok_in_2026",
    },
    seo: {
      metaTitle: "Do zero a 7 mil seguidores no TikTok em cinco meses",
      metaDescription:
        "Relato de criador no r/socialmedia mostra 7 mil seguidores no TikTok em cinco meses sem publicar todo dia. Tema, roteiro e edição valeram mais.",
      metaKeywords:
        "crescimento TikTok, seguidores, criadores, roteiro, edição, 2026",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Cinco meses, zero a sete mil seguidores, sem rotina diária de post.
          O relato não é sobre sorte de algoritmo. É sobre recusar a trend que
          não tem a ver com o próprio tema.
        </Lead>

        <p>
          O criador descreveu o processo na{" "}
          <a
            href="https://reddit.com/r/socialmedia/comments/1vj3uy1/how_to_grow_on_tiktok_in_2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            comunidade r/socialmedia
          </a>
          : escolher assuntos de interesse real, escrever roteiro antes de
          gravar, cuidar de edição e só entrar em trend quando ela encaixa no
          conteúdo.
        </p>

        <Quote>
          not quantity but quality.
        </Quote>

        <H2>O que sustenta o crescimento sem volume</H2>

        <p>
          Consistência de tema funciona como assinatura. Quem publica sempre
          sobre o mesmo universo é reconhecido e recomendado para o público
          certo, mesmo publicando menos. É um caminho lento no começo e mais
          estável depois, porque a audiência chega por interesse e não por
          acaso.
        </p>

        <p>
          A leitura crítica: sete mil seguidores em cinco meses não é escala
          industrial. É um resultado honesto para quem produz sozinho e prefere
          construir base a inflar número. Para quem quer distribuição maior, o
          mesmo método precisa virar sistema, tema que já rende{" "}
          <a href="/blog">textos sobre engenharia de conteúdo</a>.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://reddit.com/r/socialmedia/comments/1vj3uy1/how_to_grow_on_tiktok_in_2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/socialmedia
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
