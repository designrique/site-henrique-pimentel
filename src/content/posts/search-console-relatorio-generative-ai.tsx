import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "search-console-relatorio-generative-ai",
    title: "Google libera relatório de IA generativa no Search Console",
    teaser:
      "O Search Console agora mede impressões e cliques vindos de AI Overviews e AI Mode. O Google confirma 2,5 bilhões de usuários por mês nessas superfícies.",
    category: "SEO/GEO",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Reddit r/SEO",
      url: "https://www.reddit.com/r/SEO/comments/1vm9bv6/is_generative_ai_report_useful_which_launched/",
    },
    heroImage: {
      url: "/news/search-console-relatorio-generative-ai.webp",
      alt: "Analista de marketing revisando painel do Search Console em monitor grande",
    },
    seo: {
      metaTitle: "Search Console ganha relatório de IA generativa (GEO)",
      metaDescription:
        "Google libera relatório Generative AI no Search Console: meça impressões e cliques de AI Overviews e AI Mode. AI Mode + Overviews somam 2,5 bi de usuários/mês.",
      metaKeywords:
        "Search Console, AI Overviews, AI Mode, relatório generative AI, GEO, tráfego de IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Dá para medir agora o que antes era achismo: quanto do seu tráfego
          vem das respostas de IA do Google. O relatório{" "}
          <strong>Generative AI</strong> chegou ao Search Console para todos os
          usuários, e ele separa as impressões e cliques vindos de AI
          Overviews e do AI Mode.
        </Lead>

        <p>
          O timing não é coincidência. Na I/O 2026, o Google afirmou que AI
          Mode + AI Overviews já somam{" "}
          <strong>2,5 bilhões de usuários por mês</strong>. É uma superfície de
          descoberta que não existia há dois anos, e agora o próprio Google dá
          a régua para medir presença nela.
        </p>

        <H2>O que o relatório mostra</H2>

        <List>
          <li>
            Impressões e cliques originados de AI Overviews e AI Mode, separados
            do tráfego de busca tradicional.
          </li>
          <li>
            A comparação direta entre o que a busca clássica entrega e o que a
            resposta generativa entrega para o mesmo site.
          </li>
          <li>
            Dados para responder, com número na mão, se a estratégia de
            citação em IA está funcionando ou não.
          </li>
        </List>

        <p>
          No r/SEO, a comunidade já está testando o recurso ao vivo — o tópico
          &ldquo;is generative ai report useful which launched today on search
          console?&rdquo; acumula comentários de quem está comparando os
          números pela primeira vez.
        </p>

        <p>
          Para quem trabalha com{" "}
          <a href="/baseline-geo">GEO (otimização para motores de IA)</a>, o
          relatório fecha o ciclo: antes a gente media citação manualmente,
          busca por busca. Agora existe dado estruturado dentro da própria
          ferramenta do Google. Quem não olhar esses números vai continuar
          otimizando às cegas.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.reddit.com/r/SEO/comments/1vm9bv6/is_generative_ai_report_useful_which_launched/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discussão no Reddit r/SEO
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
