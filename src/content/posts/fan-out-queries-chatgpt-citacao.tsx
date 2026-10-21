import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "fan-out-queries-chatgpt-citacao",
    title: "Estudo com 1,4 milhão de prompts revela como o ChatGPT cita",
    teaser:
      "URL, título e H1 alinhados às 'fan-out queries' internas do ChatGPT são o fator nº 1 para ser citado, segundo análise de 1,4 milhão de prompts.",
    category: "SEO/GEO",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "build_in_public (TikTok)",
      url: "https://www.tiktok.com/@build_in_public/video/7666231125278280992",
    },
    heroImage: {
      url: "/news/fan-out-queries-chatgpt-citacao.webp",
      alt: "Visualização abstrata de interface de chat ramificando em bolhas de busca",
    },
    seo: {
      metaTitle: "Como o ChatGPT cita sites: estudo de 1,4 mi de prompts",
      metaDescription:
        "Análise de 1,4 milhão de prompts do ChatGPT: URL, título e H1 alinhados às fan-out queries internas são o fator nº 1 para ser citado pela IA.",
      metaKeywords:
        "ChatGPT citação, fan-out queries, GEO, ser citado por IA, otimização para IA, SEO IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Uma análise de <strong>1,4 milhão de prompts</strong> do ChatGPT
          colocou em números o que muita gente intuía: para ser citado, o
          segredo está em casar URL, título e H1 com as{" "}
          <strong>fan-out queries</strong> — as buscas internas que o ChatGPT
          dispara por trás dos panos antes de responder.
        </Lead>

        <p>
          O estudo, divulgado pelo perfil build_in_public no TikTok (12,4 mil
          visualizações, 477 curtidas), mostra que o modelo não responde
          direto da memória: ele consulta a web em paralelo, com várias
          variações da mesma pergunta. A página que aparece nessas consultas
          internas é a que sai citada.
        </p>

        <H2>O que isso significa na prática</H2>

        <List>
          <li>
            <strong>Título e H1 importam de novo</strong> — mas agora como
            alvo de matching semântico, não de palavra-chave exata.
          </li>
          <li>
            A página precisa responder à pergunta de forma direta, no primeiro
            parágrafo, porque a fan-out query procura a resposta, não o ensaio.
          </li>
          <li>
            Cobrir variações de intenção da mesma pergunta (o &ldquo;quê&rdquo;,
            o &ldquo;como&rdquo;, o &ldquo;quanto&rdquo;, o &ldquo;por
            quê&rdquo;) aumenta a chance de casar com a query interna.
          </li>
        </List>

        <p>
          A boa notícia: isso é mais simples de executar do que link building.
          Estruturar o conteúdo para responder variações da pergunta do seu
          cliente é trabalho de redação, não de negociação. É o tipo de
          ajuste que entra no{" "}
          <a href="/baseline-geo">diagnóstico GEO</a> que ofereço: entender
          quais fan-out queries o seu tema dispara e alinhar a página a elas.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.tiktok.com/@build_in_public/video/7666231125278280992"
            target="_blank"
            rel="noopener noreferrer"
          >
            build_in_public no TikTok
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
