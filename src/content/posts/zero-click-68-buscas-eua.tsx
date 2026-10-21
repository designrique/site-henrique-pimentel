import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "zero-click-68-buscas-eua",
    title: "Zero-click bateu 68% das buscas nos EUA e CTR orgânico despencou",
    teaser:
      "Estudo SparkToro/Similarweb mostra que 68% das buscas terminam sem clique. AI Overviews já aparecem em 20% das pesquisas e derrubam o CTR em quase 60%.",
    category: "SEO/GEO",
    publishedDate: "2026-08-28",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Search Engine Land",
      url: "https://searchengineland.com/google-zero-click-searches-2026-study-479717",
    },
    heroImage: {
      url: "/news/zero-click-68-buscas-eua.webp",
      alt: "Monitor com gráfico de cliques em queda e lupa sobre a mesa",
    },
    seo: {
      metaTitle: "Zero-click bateu 68% das buscas: CTR orgânico despencou",
      metaDescription:
        "Zero-click chegou a 68% das buscas nos EUA. AI Overviews aparecem em 20%+ das pesquisas e derrubam o CTR orgânico em quase 60%. O que fazer.",
      metaKeywords: "zero-click, CTR orgânico, AI Overviews, busca Google, SEO 2026, AI Mode",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A busca sem clique virou regra: <strong>68,01%</strong> das pesquisas
          nos EUA terminam sem nenhum clique, segundo estudo da SparkToro com
          dados da Similarweb de jan-abr/2026. Em 2024, o índice era 60,45%.
        </Lead>

        <p>
          O motor por trás da queda é conhecido. As <strong>AI Overviews</strong>{" "}
          aparecem em mais de 20% das buscas e reduzem o CTR orgânico em quase
          60%. O AI Mode ainda é marginal, com 0,34% de participação, mas já
          passou de 1 bilhão de usuários por mês. O tráfego está migrando do
          link para a resposta.
        </p>

        <H2>O que isso significa na prática</H2>

        <List>
          <li>Posição 1 deixou de garantir clique: a resposta vem antes do link.</li>
          <li>Ser citado dentro da AI Overview vale mais que rankear o snippet.</li>
          <li>Marca conhecida e dados estruturados ganham peso relativo.</li>
          <li>O clique que sobra é mais qualificado, mas também mais disputado.</li>
        </List>

        <p>
          Para quem vende serviços, a leitura é direta: a métrica de sucesso do
          SEO deixou de ser posição e virou presença na resposta de IA. Quem
          ainda otimiza só para o ranking clássico está medindo o jogo errado.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://searchengineland.com/google-zero-click-searches-2026-study-479717"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search Engine Land
          </a>
          . Leia também:{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
