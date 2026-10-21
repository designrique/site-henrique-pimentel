import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "threads-analytics-ia-alcance-seguidores",
    title: "Threads lança analytics com IA e separa seguidores de não-seguidores",
    teaser:
      "A nova aba mostra como cada post performou e quanto do alcance veio de quem ainda não segue a conta, com resumo gerado por IA por conta e por publicação.",
    category: "Social Media",
    publishedDate: "2026-09-15",
    readingTime: "2 min",
    news: true,
    source: {
      name: "Threads",
      url: "https://www.threads.com/@threads/post/DdCL40cEfbj",
    },
    heroImage: {
      url: "/news/threads-analytics-ia-alcance-seguidores.webp",
      alt: "Notebook aberto sobre mesa minimalista exibindo um painel abstrato de analytics de audiência com dois grupos de barras contrastantes",
    },
    seo: {
      metaTitle: "Threads lança analytics com IA e separa seguidores do resto",
      metaDescription:
        "Threads libera analytics com resumo de IA, mostrando como cada post performou e quanto do alcance vem de quem não segue a conta. Veja o que muda.",
      metaKeywords: "Threads, analytics, IA, alcance, seguidores, métricas",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Threads ganhou uma camada de analytics que responde a pergunta mais
          incômoda de quem publica: o post funcionou por mérito ou porque a
          audiência já era sua? A plataforma agora separa alcance de seguidores
          do alcance de quem ainda não segue.
        </Lead>

        <p>
          O anúncio veio no próprio perfil oficial, com uma fala direta de
          Connor Hayes, responsável pelo produto: &ldquo;Now you can see how each
          post did and what actually drove the results... how much of your reach
          is followers vs. people who haven&rsquo;t followed you yet&rdquo;. O
          recurso inclui resumos de IA por conta e por publicação.
        </p>

        <H2>Por que isso muda a leitura de resultado</H2>

        <List>
          <li>
            Alcance de seguidores mostra retenção; alcance de não-seguidores
            mostra descoberta.
          </li>
          <li>
            Resumo de IA por post reduz o tempo gasto interpretando gráfico.
          </li>
          <li>
            Conta passou de 500 milhões de usuários ativos mensais, base que
            sustenta comparação entre formatos.
          </li>
          <li>
            Post que parece hit pode estar só circulando entre quem já segue.
          </li>
        </List>

        <p>
          A distinção é útil porque muda a decisão editorial. Conteúdo que
          cresce quase todo em alcance de não-seguidor está fazendo trabalho de
          aquisição; conteúdo concentrado em seguidores está fazendo trabalho de
          comunidade. Tratar os dois como &ldquo;bom alcance&rdquo; era o erro
          que a planilha escondia.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.threads.com/@threads/post/DdCL40cEfbj"
            target="_blank"
            rel="noopener noreferrer"
          >
            anúncio oficial do Threads
          </a>
          . Veja também as outras{" "}
          <a href="/noticias" target="_blank" rel="noopener noreferrer">
            notícias de social media
          </a>{" "}
          publicadas nesta semana.
        </p>
      </PostProse>
    );
  },
};

export default post;
