import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "google-preferred-sources-ai-overviews",
    title: "Preferred Sources do Google agora vale em AI Overviews e AI Mode",
    teaser:
      "O selo que o Google usa para destacar fontes confiáveis passou a valer nas respostas de IA. São duas linhas de HTML e 2x mais chance de clique.",
    category: "SEO/GEO",
    publishedDate: "2026-08-28",
    readingTime: "3 min",
    news: true,
    source: {
      name: "TikTok (@build_in_public)",
      url: "https://www.tiktok.com/@build_in_public/video/7678073908217548065",
    },
    heroImage: {
      url: "/news/google-preferred-sources-ai-overviews.webp",
      alt: "Tela de notebook com resposta de IA e selo de fonte verificada ao lado do resultado",
    },
    seo: {
      metaTitle: "Preferred Sources do Google vale em AI Overviews e AI Mode",
      metaDescription:
        "O selo Preferred Sources do Google agora vale em AI Overviews e AI Mode: 2 linhas de HTML, 600 mil fontes cadastradas e 2x mais chance de clique.",
      metaKeywords: "Preferred Sources, AI Overviews, AI Mode, Google GEO, fonte verificada, SEO IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Google transformou o selo <strong>Preferred Sources</strong> em
          moeda de visibilidade dentro das respostas de IA: desde 27/05 o badge
          aparece rotulado em AI Overviews e no AI Mode, e quem o usa tem{" "}
          <strong>2x mais chance de clique</strong>.
        </Lead>

        <p>
          O vídeo do criador @build_in_public explicando a tática bombou: 265.809
          views e 13.186 likes em 3 dias. A frase que resume a jogada: &ldquo;Add
          a Preferred Sources badge to your website. This makes it so people can
          literally have you appear more in AI Overviews, AI Mode, Top
          Stories.&rdquo;
        </p>

        <H2>O que muda na prática</H2>

        <List>
          <li>Mais de 600.000 fontes já estão cadastradas (ago/2026).</li>
          <li>O selo aparece rotulado nas respostas de IA desde 27/05.</li>
          <li>A implementação custa duas linhas de HTML no site.</li>
          <li>Usuários têm 2x mais chance de clicar numa fonte preferida.</li>
        </List>

        <p>
          É um canal de visibilidade que fica fora do algoritmo de ranking: o
          leitor decide, com um clique, quem sobe nas respostas de IA. Para
          clínicas e profissionais que dependem de citação em respostas
          generativas, esse é o tipo de alavanca barata que vale testar antes de
          investir em campanha.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.tiktok.com/@build_in_public/video/7678073908217548065"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok (@build_in_public)
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
