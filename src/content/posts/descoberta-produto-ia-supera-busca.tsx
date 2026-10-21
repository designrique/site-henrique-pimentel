import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "descoberta-produto-ia-supera-busca",
    title: "Descoberta de produto migrou para a IA: 35% nos EUA contra 13,6% da busca",
    teaser:
      "Dados da Similarweb mostram que 35% dos consumidores americanos usam ferramentas de IA para descobrir produtos, contra 13,6% da busca tradicional. GEO deixou de ser hype.",
    category: "SEO/GEO",
    publishedDate: "2026-09-02",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Omnibound",
      url: "https://www.omnibound.ai/blog/generative-engine-optimization-statistics",
    },
    heroImage: {
      url: "/news/descoberta-produto-ia-supera-busca.webp",
      alt: "Pessoa segurando smartphone com assistente de IA aberto ao lado de caixas de produto",
    },
    seo: {
      metaTitle: "Descoberta de produto migrou para a IA: 35% nos EUA",
      metaDescription:
        "35% dos consumidores dos EUA descobrem produtos por IA contra 13,6% da busca tradicional. Ser citado em AI Overviews aumenta o clique no site.",
      metaKeywords: "descoberta de produto, GEO, AI Overviews, Similarweb, otimização para IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A descoberta de produto mudou de endereço. Segundo dados da
          Similarweb compilados pela Omnibound,{" "}
          <strong>35% dos consumidores dos EUA</strong> já usam ferramentas de
          IA na descoberta de produto, contra <strong>13,6%</strong> que
          passam pela busca tradicional. A proporção já passou de virada.
        </Lead>

        <p>
          E a consequência é mensurável: ser citado em AI Overviews aumenta a
          chance de clique no site. A citação funciona como endosso na
          resposta, não como substituto do clique. GEO, ou otimização para
          motores generativos, deixou de ser hype de palestra e virou canal
          com número próprio no funil.
        </p>

        <H2>O que muda para quem vende</H2>

        <List>
          <li>Conteúdo precisa ser extraível: resposta direta no primeiro trecho.</li>
          <li>Dados estruturados e entidades claras facilitam a citação pela IA.</li>
          <li>Menção de marca consolidada pesa na escolha das fontes.</li>
          <li>Medir presença em respostas de IA, não só posição no ranking.</li>
        </List>

        <p>
          Para negócios locais e consultorias, o movimento é o mesmo das
          grandes marcas: quem não aparece na resposta da IA simplesmente não
          entra na lista de consideração do cliente.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.omnibound.ai/blog/generative-engine-optimization-statistics"
            target="_blank"
            rel="noopener noreferrer"
          >
            Omnibound
          </a>
          . Para começar do jeito certo, veja o{" "}
          <a href="/baseline-geo" target="_blank" rel="noopener noreferrer">
            baseline de GEO
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
