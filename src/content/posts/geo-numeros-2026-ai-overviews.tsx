import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "geo-numeros-2026-ai-overviews",
    title: "AI Overviews em 86,7% das buscas comerciais: os números do GEO",
    teaser:
      "Peec AI compilou as estatísticas de 2026: AI Overviews em quase 9 de cada 10 buscas comerciais, Reddit como domínio mais citado e 900 milhões de usuários semanais no ChatGPT.",
    category: "SEO/GEO",
    publishedDate: "2026-08-28",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Peec AI",
      url: "https://peec.ai/ai-search-geo-statistics",
    },
    heroImage: {
      url: "/news/geo-numeros-2026-ai-overviews.webp",
      alt: "Painel de analytics com gráficos de citações de IA e cards de fóruns sobre a mesa",
    },
    seo: {
      metaTitle: "AI Overviews em 86,7% das buscas comerciais — números GEO",
      metaDescription:
        "AI Overviews aparecem em 86,7% das buscas comerciais, Reddit é o domínio mais citado nos motores de IA e 1 em 10 citações vem de listicles. Veja os números do GEO.",
      metaKeywords: "AI Overviews, estatísticas GEO, Reddit citações, ChatGPT 900 milhões, busca IA 2026",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          As <strong>AI Overviews</strong> agora aparecem em{" "}
          <strong>86,7% das buscas comerciais</strong>, segundo compilação da
          Peec AI (ago/2026). Em 2025, o índice era 56,9%. O salto em um ano
          mudou o tabuleiro do tráfego orgânico.
        </Lead>

        <p>
          Os outros números da mesma leva: o <strong>Reddit</strong> é o domínio
          nº 1-2 mais citado em todos os motores de IA, e 1 em cada 10 citações
          vem de listicles autopromocionais. O ChatGPT, por sua vez, passou de{" "}
          <strong>900 milhões de usuários semanais</strong>. O volume de
          descoberta que acontece dentro dessas respostas já é grande demais
          para ignorar.
        </p>

        <H2>O que esses números sinalizam</H2>

        <List>
          <li>Busca comercial quase sempre recebe resposta de IA antes dos links.</li>
          <li>Ser citado importa mais que rankear: a resposta é o novo topo do funil.</li>
          <li>Reddit virou concorrente direto de sites autoridade em citações.</li>
          <li>Listicles autopromocionais poluem as respostas, mas ainda funcionam.</li>
        </List>

        <p>
          Para negócios locais e serviços, a conclusão é objetiva: a batalha de
          visibilidade se decidiu dentro do texto gerado pela IA, não na página
          de resultados. Quem não estrutura conteúdo para ser citado perde
          tráfego antes do clique.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://peec.ai/ai-search-geo-statistics"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peec AI — AI Search GEO Statistics
          </a>
          . Leia também:{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            consultoria de IA
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
