import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "openhuman-memoria-local-agentes",
    title: "openhuman: memória local-first para agentes em Rust",
    teaser:
      "Projeto Rust de memória local-first e orquestração de agentes soma 39 mil estrelas. Privacidade e controle voltam para o centro do ecossistema.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-31",
    readingTime: "2 min",
    news: true,
    source: {
      name: "GitHub — tinyhumansai/openhuman",
      url: "https://github.com/tinyhumansai/openhuman",
    },
    heroImage: {
      url: "/news/openhuman-memoria-local-agentes.webp",
      alt: "Mesa organizada com caderno aberto, notebook e pequena figura humana de madeira",
    },
    seo: {
      metaTitle: "openhuman: memória local-first para agentes em Rust",
      metaDescription:
        "openhuman traz memória local-first e orquestração de agentes em Rust, com 39 mil estrelas no GitHub. O sinal de que privacidade voltou a ser diferencial.",
      metaKeywords:
        "openhuman, memória local-first, agentes de IA, Rust, orquestração, GitHub Trending",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O <strong>openhuman</strong>, projeto em Rust do tinyhumansai, soma{" "}
          <strong>39 mil estrelas</strong> no GitHub com uma tese clara:
          memória local-first e orquestração de agentes — com os dados do
          usuário sob controle do usuário.
        </Lead>

        <p>
          Enquanto os grandes players empurram agentes que vivem na nuvem, o
          openhuman constrói o caminho inverso: a memória do agente mora na
          máquina local, e a orquestração — decidir qual agente age quando —
          acontece perto dos dados. Rust dá a base de performance e segurança
          que esse tipo de arquitetura exige.
        </p>

        <H2>Por que importa</H2>

        <List>
          <li>
            <strong>Memória é o ativo:</strong> quem controla a memória do
            agente controla o relacionamento com o usuário.
          </li>
          <li>
            <strong>Local-first como resposta:</strong> privacidade deixou de
            ser nicho e virou argumento de produto.
          </li>
          <li>
            <strong>Rust em IA:</strong> linguagem ganhando espaço onde
            segurança e performance não são negociáveis.
          </li>
        </List>

        <p>
          O movimento de fundo é interessante: depois de anos de tudo na
          nuvem, uma fatia relevante do ecossistema está apostando no oposto.
          Para empresas que lidam com dado sensível, arquiteturas local-first
          de agente podem ser a resposta entre automação e compliance. É um
          tema que exploro quando desenho soluções na{" "}
          <a href="/servicos/consultoria-ia">consultoria de IA</a>.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://github.com/tinyhumansai/openhuman"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub — tinyhumansai/openhuman
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
