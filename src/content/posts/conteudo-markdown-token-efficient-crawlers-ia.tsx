import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "conteudo-markdown-token-efficient-crawlers-ia",
    title: "Conteúdo em Markdown consome menos tokens e facilita leitura por IA",
    teaser:
      "Onda de vídeos defende formatos fáceis de extrair para modelos de linguagem. Markdown é apontado como mais token-efficient: o crawler lê a página, não seu banco de dados.",
    category: "SEO/GEO",
    publishedDate: "2026-09-11",
    readingTime: "3 min",
    news: true,
    source: {
      name: "TinaCMS (via Instagram)",
      url: "https://www.instagram.com/reel/DcckcHhAiBX/",
    },
    heroImage: {
      url: "/news/conteudo-markdown-token-efficient-crawlers-ia.webp",
      alt: "Tablet com documento minimalista de linhas estruturadas ao lado de teclado mecânico, uma linha destacada",
    },
    seo: {
      metaTitle: "Markdown gasta menos tokens: IA lê melhor seu conteúdo",
      metaDescription:
        "Formatos fáceis de extrair ganham força para crawlers de IA. Markdown reduz consumo de tokens e aumenta a chance de seu conteúdo entrar na resposta do modelo.",
      metaKeywords:
        "Markdown, token efficiency, crawlers de IA, GEO, llms.txt, conteúdo para LLM",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A frase que resume a discussão:{" "}
          <strong>
            os buscadores não estão lendo seu banco de dados de conteúdo, estão
            lendo sua página web
          </strong>
          . E para modelos de linguagem, página em Markdown é mais{" "}
          <strong>token-efficient</strong> que HTML cheio de marcação.
        </Lead>
        <p>
          A argumentação é direta: cada token gasto em markup é um token a menos
          para o conteúdo em si. Sites que servem versões limpas em Markdown,
          como espelhos em <code>/index.md</code>, reduzem o custo de extração
          e aumentam a chance de o modelo usar o texto na resposta.
        </p>
        <H2>O que dá para fazer hoje</H2>
        <List>
          <li>
            Publique espelhos em Markdown das páginas principais, com os mesmos
            fatos e links do HTML.
          </li>
          <li>
            Mantenha um <code>llms.txt</code> na raiz apontando esses espelhos,
            sumarizando o que a IA precisa citar.
          </li>
          <li>
            Reduza wrappers de HTML desnecessários no conteúdo: menos ruído,
            mais extração.
          </li>
        </List>
        <p>
          Não é mágica: modelo continua priorizando autoridade e menção de
          marca. Mas entre dois sites com autoridade parecida, o que entrega o
          conteúdo limpo sai na frente. Serviços de consultoria que aplicam
          isso aparecem na nossa página de{" "}
          <a
            href="/servicos/consultoria-ia"
            target="_blank"
            rel="noopener noreferrer"
          >
            consultoria de IA
          </a>
          .
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://www.instagram.com/reel/DcckcHhAiBX/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TinaCMS
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
