import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "community-led-growth-canal-aquisicao",
    title: "Community-led growth vira canal de aquisição no B2B",
    teaser:
      "Com Google Ads B2B a US$ 50-100+ por clique, comunidades viram conversas de venda que custam zero e derrubam o CAC. Entenda o modelo.",
    category: "Marketing Digital",
    publishedDate: "2026-09-09",
    readingTime: "3 min",
    news: true,
    source: {
      name: "The S Marketers",
      url: "https://thesmarketers.com/blogs/community-led-growth-b2b-2026/",
    },
    heroImage: {
      url: "/news/community-led-growth-canal-aquisicao.webp",
      alt: "Grupo de profissionais conversando em uma mesa de coworking, com laptops abertos e uma tela ao fundo mostrando métricas de crescimento",
    },
    seo: {
      metaTitle: "Community-led growth vira canal de aquisição no B2B",
      metaDescription:
        "Com Google Ads B2B a US$ 50-100+ por clique, comunidades viram conversas de venda que custam zero e derrubam o CAC. Entenda o modelo.",
      metaKeywords: "community-led growth, aquisição B2B, CAC, Google Ads, comunidade, LTV",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Quando o clique no{" "}
          <a href="https://ads.google.com" target="_blank" rel="noopener noreferrer">
            Google Ads
          </a>{" "}
          B2B passa de US$ 50 e encosta em US$ 100, a comunidade deixa de
          ser custo e vira canal de aquisição. É a tese do community-led
          growth: conversas de venda que custam zero e melhoram o LTV/CAC.
        </Lead>

        <p>
          A análise da The S Marketers mostra a conta que está virando
          padrão em 2026: com o CAC subindo e a performance de mídia paga
          encarecendo, as empresas estão empurrando a jornada de compra
          para dentro de comunidades, onde o prospect já chega com dúvidas
          reais e a resposta vem de outros usuários, não do vendedor.
        </p>

        <H2>Por que o modelo funciona</H2>

        <List>
          <li>Google Ads B2B na casa de US$ 50-100+ por clique empurra o CAC para cima.</li>
          <li>A comunidade transforma suporte e discussão em prova social.</li>
          <li>Vendas que nascem na comunidade custam quase zero de aquisição.</li>
          <li>Clientes vindos de comunidade tendem a ter LTV maior e churn menor.</li>
        </List>

        <p>
          O pulo do gato é tratar a comunidade como produto de marketing,
          não como grupo de suporte. Moderar com curadoria, responder com
          profundidade e medir quantas conversas comerciais nascem ali
          transforma o canal em ativo de receita com custo marginal baixo.
          Para quem atende B2B, é a alternativa mais barata ao leilão de
          mídia paga.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://thesmarketers.com/blogs/community-led-growth-b2b-2026/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The S Marketers
          </a>
          . Veja também o{" "}
          <a href="/baseline-geo" target="_blank" rel="noopener noreferrer">
            baseline de GEO
          </a>{" "}
          para entender como autoridade se constrói em canais que a mídia
          paga não alcança.
        </p>
      </PostProse>
    );
  },
};

export default post;
