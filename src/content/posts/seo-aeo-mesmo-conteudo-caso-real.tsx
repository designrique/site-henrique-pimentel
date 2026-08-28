import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "seo-aeo-mesmo-conteudo-caso-real",
    title: "SEO e AEO rodando juntos: caso real de cliente nº 1 em tudo",
    teaser:
      "@joshuamaraney mostra um cliente em primeiro lugar simultaneamente no Google orgânico, nas AI Overviews e no ChatGPT. A narrativa: o mesmo conteúdo bem estruturado alimenta os dois.",
    category: "SEO/GEO",
    publishedDate: "2026-08-28",
    readingTime: "3 min",
    news: true,
    source: {
      name: "TikTok (@joshuamaraney)",
      url: "https://www.tiktok.com/@joshuamaraney/video/7677467790583794952",
    },
    heroImage: {
      url: "/news/seo-aeo-mesmo-conteudo-caso-real.webp",
      alt: "Duas telas lado a lado: resultados de busca clássicos e resposta de IA mostrando a mesma marca",
    },
    seo: {
      metaTitle: "SEO + AEO: caso real de cliente nº 1 no Google e no ChatGPT",
      metaDescription:
        "Caso real de cliente em 1º lugar no Google orgânico, nas AI Overviews e no ChatGPT para a mesma busca. SEO e GEO não competem: o conteúdo estruturado alimenta os dois.",
      metaKeywords: "SEO e AEO juntos, caso real GEO, AI Overviews ranking, ChatGPT citação, conteúdo estruturado",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O criador @joshuamaraney publicou o caso que o nicho queria ver: um
          cliente em <strong>1º lugar simultâneo</strong> no Google orgânico, nas{" "}
          <strong>AI Overviews</strong> e no <strong>ChatGPT</strong> para a
          busca &ldquo;best online schools in South Africa&rdquo;. O vídeo soma
          4.580 views e 110 likes.
        </Lead>

        <p>
          A tese que ele defende é a que mais tem circulado: SEO e GEO não
          competem. O mesmo conteúdo, bem estruturado, com respostas diretas e
          dados verificáveis, alimenta os dois canais. O ranking clássico premia
          relevância e autoridade; as IAs premiam extração limpa e citação.
        </p>

        <H2>Por que o caso é relevante</H2>

        <List>
          <li>Mostra que a dupla SEO + AEO é viável, não só teoria.</li>
          <li>O mesmo investimento de conteúdo serve aos dois sistemas.</li>
          <li>Estrutura de resposta (pergunta direta + dado + fonte) funciona para ambos.</li>
          <li>Autoridade construída para o Google é a mesma que as IAs usam para citar.</li>
        </List>

        <p>
          Para agências e negócios locais, é o argumento que encerra o debate:
          em vez de escolher entre SEO e GEO, organize o conteúdo uma vez e
          colete os resultados nos dois lugares.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.tiktok.com/@joshuamaraney/video/7677467790583794952"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok (@joshuamaraney)
          </a>
          . Leia também:{" "}
          <a href="/baseline-geo" target="_blank" rel="noopener noreferrer">
            baseline GEO
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
