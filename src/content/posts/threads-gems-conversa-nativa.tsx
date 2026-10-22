import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "threads-gems-conversa-nativa",
    title: "Threads testa Gems e premia conversa que começou no próprio app",
    teaser:
      "O sistema escolhe posts e respostas públicas todo dia, sem usar número de seguidores como critério. Reposts e conteúdo cruzado de outras redes ficam de fora.",
    category: "Social Media",
    publishedDate: "2026-10-22",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Instagram Help Center",
      url: "https://help.instagram.com/1678110476981819",
    },
    seo: {
      metaTitle: "Threads testa Gems e premia conversa nascida no app",
      metaDescription:
        "Novo teste do Threads seleciona posts e respostas públicas sem olhar número de seguidores e exclui reposts e conteúdo cruzado de outras redes.",
      metaKeywords:
        "Threads, Gems, algoritmo, conversa nativa, criadores, distribuição",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A plataforma deixou explícito o que já se desconfiava: o que circula
          dentro do Threads vale mais do que o que chega de fora.
        </Lead>

        <p>
          O teste <strong>Gems</strong>, descrito na{" "}
          <a
            href="https://help.instagram.com/1678110476981819"
            target="_blank"
            rel="noopener noreferrer"
          >
            central de ajuda da Meta
          </a>
          , seleciona posts e respostas públicas todos os dias. Dois filtros
          chamam atenção: número de seguidores não é critério, e reposts,
          crossposts e conteúdo publicado em outras redes ficam fora.
        </p>

        <H2>O critério é origem, não tamanho</H2>

        <List>
          <li>
            Perfil pequeno pode entrar na seleção se a conversa aconteceu ali.
          </li>
          <li>
            Copiar o mesmo post do Instagram, do X ou do LinkedIn não conta como
            contribuição nativa.
          </li>
          <li>
            Pergunta aberta e resposta que continua o assunto pesam mais que
            anúncio disfarçado de post.
          </li>
        </List>

        <p>
          Isso empurra quem usa a rede como espelho para repensar a rotina.
          Reaproveitar conteúdo é eficiente, mas precisa de adaptação real para
          virar conversa. A própria Meta descreve o alvo como threads que
          &ldquo;started or continued&rdquo; no app.
        </p>

        <p>
          Vale lembrar que o Threads já sinalizou outras mudanças de
          distribuição recentemente, como mostram as{" "}
          <a href="/noticias">notícias de social media</a> deste site. O padrão é
          o mesmo: formato nativo e conversa original ganhando peso.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://help.instagram.com/1678110476981819"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram Help Center
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
