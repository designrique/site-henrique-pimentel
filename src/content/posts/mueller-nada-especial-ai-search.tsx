import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "mueller-nada-especial-ai-search",
    title: "Google: não existe tratamento especial para AI search, diz Mueller",
    teaser:
      "John Mueller afirmou no Bluesky que bom SEO já cobre a busca com IA. A comunidade recebeu com ceticismo: estudos mostram que a maioria das páginas citadas em AI Overviews nem rankeia no top 10.",
    category: "SEO/GEO",
    publishedDate: "2026-09-04",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Reddit r/SEO",
      url: "https://www.reddit.com/r/SEO/comments/1vxkddv/google_answers_if_some_sites_can_ignore_ai_seo_or/",
    },
    heroImage: {
      url: "/news/mueller-nada-especial-ai-search.webp",
      alt: "Pessoa digitando em notebook em escritório minimalista e claro",
    },
    seo: {
      metaTitle: "Mueller: bom SEO já cobre AI search, diz Google",
      metaDescription:
        "John Mueller afirma que não há tratamento especial para AI search. Comunidade cética: maioria das páginas citadas em AI Overviews não rankeia no top 10.",
      metaKeywords: "John Mueller, AI Overviews, AI search, SEO, GEO",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A pergunta que não cala no mercado de SEO ganhou resposta oficial:
          para o Google, não existe receita separada para aparecer em AI
          search. John Mueller afirmou no Bluesky que bom SEO já cobre o
          cenário, e que sites não precisam fazer nada de especial. A declaração
          não durou um dia sem contestação.
        </Lead>

        <p>
          O ponto de atrito é dados: estudos recentes mostram que a maioria
          das páginas citadas em AI Overviews não aparece no top 10 orgânico
          da query. Se a citação na resposta gerada não acompanha o ranking,
          então existe sim uma superfície nova com dinâmica própria. A
          discussão no r/SEO somou 15 pontos e cinco comentários em poucos
          dias, com profissionais divididos entre seguir a orientação oficial
          e cobrir o flanco.
        </p>

        <H2>Como ler a orientação</H2>

        <List>
          <li>A base continua sendo a mesma: conteúdo rastreável, técnica limpa e autoridade real.</li>
          <li>Mas o dado de citações fora do top 10 indica que há fatores próprios de AI Overviews em jogo.</li>
          <li>Menções de marca na web correlacionam 0,664 com visibilidade em AI Overviews, contra 0,218 de backlinks.</li>
          <li>38% das citações ainda vêm do top 10 orgânico: SEO tradicional segue sendo alicerce.</li>
        </List>

        <p>
          A leitura prática: Mueller está certo no fundamento e incompleto na
          prática. Quem só faz SEO tradicional cobre parte do jogo, mas deixa
          na mesa a fatia de citações que depende de menção de marca,
          estrutura extratível e presença onde os LLMs leem. Fazer o básico
          bem feito e cobrir o flanco GEO é o caminho sem drama.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.reddit.com/r/SEO/comments/1vxkddv/google_answers_if_some_sites_can_ignore_ai_seo_or/"
            target="_blank"
            rel="noopener noreferrer"
          >
            discussão no r/SEO
          </a>
          . Veja o{" "}
          <a href="/baseline-geo" target="_blank" rel="noopener noreferrer">
            baseline de GEO
          </a>{" "}
          do site.
        </p>
      </PostProse>
    );
  },
};

export default post;
