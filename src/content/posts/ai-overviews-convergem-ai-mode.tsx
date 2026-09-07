import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "ai-overviews-convergem-ai-mode",
    title: "AI Overviews convergem com AI Mode e viram o produto principal do Google",
    teaser:
      "Threads no r/SEO com 62 pontos mostram overviews cada vez mais parecidos com respostas do AI Mode. O sinal: a resposta gerada deixou de ser anexo e virou o resultado.",
    category: "SEO/GEO",
    publishedDate: "2026-09-04",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Reddit r/SEO",
      url: "https://www.reddit.com/r/SEO/comments/1w1ur5u/google_making_ai_overviews_into_ai_mode_responses/",
    },
    heroImage: {
      url: "/news/ai-overviews-convergem-ai-mode.webp",
      alt: "Duas janelas de navegador se fundindo em monitor largo em escritório com luz baixa",
    },
    seo: {
      metaTitle: "AI Overviews convergem com AI Mode e viram o produto",
      metaDescription:
        "Overviews do Google ficam cada vez mais parecidos com respostas do AI Mode. A resposta gerada é o produto, não um anexo do resultado orgânico.",
      metaKeywords: "AI Overviews, AI Mode, Google, SEO, zero-click",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A thread mais votada do r/SEO da semana, com 62 pontos e 33
          comentários, documenta uma convergência que quem acompanha AI
          Overviews já vinha notando: as respostas geradas estão ficando
          idênticas às do AI Mode, formato mais completo e conversacional. A
          conclusão da comunidade é dura: a resposta gerada é o produto, não
          um anexo.
        </Lead>

        <p>
          Isso muda a leitura estratégica. Enquanto os overviews eram um
          resumo curto acima dos links, otimizar para o clique still fazia
          sentido. Com a convergência, o Google entrega a resposta completa
          antes de mostrar qualquer fonte, e o CTR orgânico cai proporcionalmente
          onde o overview dispara.
        </p>

        <H2>O que isso muda na prática</H2>

        <List>
          <li>Cobertura de AI Overviews já atinge 47-64% das queries, contra 25-30% no lançamento.</li>
          <li>Quando o overview aparece, o clique orgânico despencou nas medições da semana.</li>
          <li>Ser citado dentro da resposta passou a ser o novo primeiro lugar.</li>
          <li>Menções de marca na web correlacionam 0,664 com presença nesses resumos.</li>
        </List>

        <p>
          Para negócios que dependem de busca, a métrica de sucesso muda de
          posição para citação. Estar na fonte citada vale mais que estar no
          link azul, e a otimização precisa mirar o texto que o modelo lê:
          respostas diretas, estrutura clara e autoridade verificável em
          fontes que os crawlers de IA conseguem ler.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.reddit.com/r/SEO/comments/1w1ur5u/google_making_ai_overviews_into_ai_mode_responses/"
            target="_blank"
            rel="noopener noreferrer"
          >
            thread no r/SEO
          </a>
          . Veja também o{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            blog sobre GEO
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
