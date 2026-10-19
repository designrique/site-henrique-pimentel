import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "hyperframes-html-video-agentes",
    title: "HyperFrames transforma HTML em vídeo para agentes de IA",
    teaser:
      "O framework da HeyGen aproxima agentes de produção audiovisual: eles podem montar páginas e renderizar o resultado como vídeo.",
    category: "Inteligência Artificial",
    publishedDate: "2026-10-19",
    readingTime: "2 min",
    news: true,
    source: {
      name: "GitHub — heygen-com/hyperframes",
      url: "https://github.com/heygen-com/hyperframes",
    },
    heroImage: {
      url: "/news/hyperframes-html-video-agentes.webp",
      alt: "Notebook renderiza uma timeline de vídeo enquanto um desenvolvedor ajusta um enquadramento",
    },
    seo: {
      metaTitle: "HyperFrames leva agentes de IA para produção de vídeo",
      metaDescription:
        "O HyperFrames, da HeyGen, transforma HTML em vídeo e dá aos agentes uma rota programável para criar cenas e peças audiovisuais.",
      metaKeywords:
        "HyperFrames, HeyGen, agentes de IA, HTML para vídeo, vídeo generativo",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O <strong>HyperFrames</strong>, framework da HeyGen, transforma HTML em
          vídeo e coloca a produção audiovisual em um formato que agentes de IA
          conseguem manipular com mais precisão: páginas, componentes e
          renderização programática.
        </Lead>
        <p>
          A ideia é interessante porque separa criação e renderização. Em vez de
          pedir a um modelo que invente um vídeo inteiro de uma vez, o agente pode
          montar uma cena como interface web, ajustar posições e estilos e depois
          gerar o arquivo final. Isso torna a composição mais repetível e fácil
          de revisar.
        </p>
        <H2>Onde o framework pode encaixar</H2>
        <List>
          <li>Peças sociais com variações de texto, dados e identidade visual.</li>
          <li>Dashboards e relatórios que viram vídeos explicativos.</li>
          <li>Templates audiovisuais gerados em lote a partir de dados estruturados.</li>
        </List>
        <p>
          O ponto forte não é eliminar direção criativa. É dar ao agente uma
          superfície controlável para executar a direção. Ainda será preciso
          revisar ritmo, acessibilidade, direitos de uso e adequação da mensagem.
          A ferramenta faz mais sentido em pipelines que já têm conteúdo,
          aprovação e distribuição definidos, como os descritos em
          <a href="/noticias/content-engine-uma-pessoa-voz-humana">content engines</a>.
        </p>
        <p>
          Fonte:{" "}
          <a href="https://github.com/heygen-com/hyperframes" target="_blank" rel="noopener noreferrer">
            GitHub — heygen-com/hyperframes
          </a>.
        </p>
      </PostProse>
    );
  },
};

export default post;
