import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "archify-diagramas-arquitetura-agentes",
    title: "archify: 35,8 mil estrelas para diagramas de arquitetura de agentes",
    teaser:
      "Repositório JavaScript que gera diagramas de arquitetura verificáveis para agentes de IA estourou no GitHub Trending com +18,1 mil estrelas na semana.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-31",
    readingTime: "2 min",
    news: true,
    source: {
      name: "GitHub — tt-a1i/archify",
      url: "https://github.com/tt-a1i/archify",
    },
    heroImage: {
      url: "/news/archify-diagramas-arquitetura-agentes.webp",
      alt: "Quadro branco com caixas e setas desenhadas representando diagrama de arquitetura",
    },
    seo: {
      metaTitle: "archify: diagramas de arquitetura para agentes de IA",
      metaDescription:
        "archify gera diagramas de arquitetura verificáveis para agentes de IA e chegou a 35,8 mil estrelas no GitHub, com 18,1 mil só na última semana.",
      metaKeywords:
        "archify, diagramas de arquitetura, agentes de IA, GitHub Trending, ferramentas para agentes",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O <strong>archify</strong> — JavaScript, do usuário tt-a1i — soma{" "}
          <strong>35,8 mil estrelas</strong> no GitHub, com 18,1 mil só na
          última semana. A proposta: diagramas de arquitetura verificáveis para
          agentes de IA.
        </Lead>

        <p>
          O destaque do projeto é o &ldquo;verificável&rdquo;. Em vez de um
          diagrama bonito e solto, o archify conecta a representação visual ao
          estado real do sistema — o agente, seus nós, dependências e fluxos.
          É documentação viva, não figura decorativa.
        </p>

        <H2>Por que explodiu</H2>

        <List>
          <li>
            <strong>Agentes viraram sistemas:</strong> quem roda múltiplos
            agentes em produção precisa enxergar a arquitetura sem ler mil
            arquivos.
          </li>
          <li>
            <strong>Diagrama útil:</strong> ligar o visual ao código executável
            resolve o problema clássico de documentação desatualizada.
          </li>
          <li>
            <strong>Padrão de mercado:</strong> junto com o resto do trending,
            mostra que ferramentas de observabilidade de agentes são a nova
            fronteira.
          </li>
        </List>

        <p>
          Se você está construindo pipelines com agentes, ferramentas de
          visualização e verificação deixaram de ser luxo. É o tipo de
          infraestrutura que considero em qualquer projeto de automação que
          desenho — e que detalho nos meus{" "}
          <a href="/blog">artigos sobre IA aplicada</a>.
        </p>

        <p>
          Fonte:{" "}
          <a href="https://github.com/tt-a1i/archify" target="_blank" rel="noopener noreferrer">
            GitHub — tt-a1i/archify
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
