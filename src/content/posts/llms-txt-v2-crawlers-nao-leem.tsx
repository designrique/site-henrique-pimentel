import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "llms-txt-v2-crawlers-nao-leem",
    title: "llms.txt v2 foi lançado, mas crawlers de IA não estão lendo",
    teaser:
      "Jeremy Howard publicou a v2 do padrão com rel=alternate para markdown no mesmo mês. Só que análises de crawlers mostram: quase nenhum bot de IA busca /llms.txt.",
    category: "SEO/GEO",
    publishedDate: "2026-08-28",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Search Engine Journal",
      url: "https://www.searchenginejournal.com/llms-txt-v2-formal-markdown-linking-ai-agents/586119/",
    },
    heroImage: {
      url: "/news/llms-txt-v2-crawlers-nao-leem.webp",
      alt: "Notebook com arquivo de texto simples aberto e robô em miniatura ao lado",
    },
    seo: {
      metaTitle: "llms.txt v2 lançado, mas crawlers de IA não leem o arquivo",
      metaDescription:
        "llms.txt v2 chegou com rel=alternate para markdown, mas análise de crawlers mostra que bots de IA quase não buscam /llms.txt. O padrão morreu antes de nascer?",
      metaKeywords: "llms.txt, llms.txt v2, crawlers IA, markdown para IA, GEO, Jeremy Howard",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O <strong>llms.txt v2</strong> foi lançado em 10/08 com suporte a{" "}
          <code>rel=&ldquo;alternate&rdquo;</code> para apontar versões markdown
          das páginas. O problema: análises de crawlers mostram que quase nenhum
          bot de IA está buscando o arquivo.
        </Lead>

        <p>
          O padrão, criado por Jeremy Howard para dar aos LLMs um resumo legível
          do site, ganhou a atualização no mesmo mês em que os dados de campo o
          enterraram. No r/GrowthHacking, o ceticismo virou frase pronta:
          &ldquo;Everyone&rsquo;s adding llms.txt for AI visibility. The
          crawlers aren&rsquo;t reading it.&rdquo;
        </p>

        <H2>O que os dados mostram</H2>

        <List>
          <li>Crawlers de IA priorizam HTML e sitemaps, não arquivos de texto soltos.</li>
          <li>llms.txt v2 adiciona linking formal de markdown, mas depende de adoção.</li>
          <li>O padrão ainda é útil como sinal extra, não como estratégia principal.</li>
          <li>Markdown mirrors servidos em rotas reais têm mais tração que um arquivo raiz.</li>
        </List>

        <p>
          A lição para quem investe em GEO: não trate llms.txt como atalho.
          Conteúdo renderizado no HTML, com entidades e fontes, continua sendo o
          que os crawlers realmente consomem.
        </p>

        <p>
          Fontes:{" "}
          <a href="https://llmstxt.org/" target="_blank" rel="noopener noreferrer">
            llmstxt.org
          </a>{" "}
          ·{" "}
          <a
            href="https://www.searchenginejournal.com/llms-txt-v2-formal-markdown-linking-ai-agents/586119/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search Engine Journal
          </a>{" "}
          ·{" "}
          <a
            href="https://www.reddit.com/r/GrowthHacking/comments/1uyzkbo/everyones_adding_llmstxt_for_ai_visibility_the/"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/GrowthHacking
          </a>
          . Leia também:{" "}
          <a href="/noticias" target="_blank" rel="noopener noreferrer">
            notícias
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
