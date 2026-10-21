import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "threads-communities-500m-usuarios",
    title: "Threads tira Communities do beta, globaliza e cruza 500 milhões de usuários",
    teaser:
      "As Communities saem do grupo fechado de 200 tópicos para qualquer tema, ganham hub na barra lateral e até tags de idioma. O marco de meio bilhão de usuários ativos veio junto.",
    category: "Social Media",
    publishedDate: "2026-09-08",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Yahoo Tech",
      url: "https://tech.yahoo.com/social-media/articles/threads-just-rolled-three-features-170000788.html",
    },
    heroImage: {
      url: "/news/threads-communities-500m-usuarios.webp",
      alt: "Mural de fóruns de comunidade em uma tela de aplicativo com ícones de grupos e pessoas conectadas",
    },
    seo: {
      metaTitle: "Threads globaliza Communities e passa de 500 milhões de usuários",
      metaDescription:
        "Communities saem do beta para qualquer tópico, ganham hub próprio e tags de idioma. Threads cruza 500 milhões de usuários ativos mensais.",
      metaKeywords: "Threads, Communities, 500 milhões, Meta, comunidades, tags de idioma, redes sociais",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Threads deu o passo que faltava para as Communities virarem produto
          de verdade. O recurso saiu do beta e ficou global, abrindo qualquer
          tópico, com hub na barra lateral, identidade própria e o marco de 500
          milhões de usuários ativos mensais anunciado na sequência.
        </Lead>

        <p>
          Até agora as Communities rodavam num grupo fechado de cerca de 200
          temas. Agora qualquer comunidade pode nascer, com um Communities Hub
          na barra lateral, ícones próprios e a figura dos &ldquo;champions&rdquo;,
          os responsáveis por moderar e puxar a comunidade. Também chegaram
          tags nativas de idioma, começando por japonês, coreano e
          tradicional chinês, e os Live Chats seguem em expansão.
        </p>

        <H2>O que muda na prática</H2>

        <List>
          <li>Communities globais, sem lista inicial restrita de tópicos.</li>
          <li>Hub dedicado na barra lateral e identidade visual própria.</li>
          <li>Tags nativas de idioma aproximam comunidades locais.</li>
          <li>O marco de 500 milhões mostra o app firmando escala.</li>
        </List>

        <p>
          A leitura honesta: comunidade no Threads deixa de ser teste para virar
          canal de marca e de nicho com dono, moderação e constância. Para
          negócios locais, é um espaço novo para autoridade sem depender só do
          alcance do feed.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://tech.yahoo.com/social-media/articles/threads-just-rolled-three-features-170000788.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yahoo Tech
          </a>
          . Veja mais sobre autoridade em Threads nas{" "}
          <a href="/noticias" target="_blank" rel="noopener noreferrer">
            notícias de social media
          </a>{" "}
          do site.
        </p>
      </PostProse>
    );
  },
};

export default post;
