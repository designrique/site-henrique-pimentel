import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "claude-code-ecossistema-quente",
    title: "Ecossistema Claude Code é o tópico quente do nicho IA",
    teaser:
      "Os 11 plugins gratuitos que a Anthropic liberou para o Claude dominaram a semana: tutorials com 96% de save rate no TikTok e explicadores no Threads.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "ScrapeCreators API (TikTok/Threads)",
      url: "https://www.anthropic.com/news",
    },
    heroImage: {
      url: "/news/claude-code-ecossistema-quente.webp",
      alt: "Terminal com interface de assistente de código IA e lista de plugins, luz azul",
    },
    seo: {
      metaTitle: "Claude Code e plugins: o tópico quente do nicho IA",
      metaDescription:
        "Os 11 plugins gratuitos da Anthropic para Claude dominaram o conteúdo da semana: tutorial com 96% de save rate no TikTok e explicadores no Threads.",
      metaKeywords:
        "Claude Code, plugins Anthropic, Claude IA, ecossistema Anthropic, tutorial IA, conteúdo de IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Se você produz conteúdo sobre IA, o assunto da semana tem nome:{" "}
          <strong>ecossistema Anthropic</strong>. Os 11 plugins gratuitos que
          a Anthropic liberou para o Claude viraram o tema dominante — do
          TikTok ao Threads, com tutorial batendo{" "}
          <strong>96% de save rate</strong>.
        </Lead>

        <p>
          A análise semanal de tendências de consultores de IA registrou o
          fenômeno em duas frentes: Brock Mesarich, no TikTok, surfou a onda
          com passo a passo do plugin gratuito (19,2 mil saves em 313 mil
          plays); Ruben Hassid, no Threads, atacou com explicadores do Claude
          (62 likes, 60 reshares). Mesma ferramenta, dois formatos, mesma
          conclusão: <em>Claude faz tudo</em>.
        </p>

        <H2>Por que o momento é de first-mover</H2>

        <List>
          <li>
            <strong>Ferramenta gratuita + substitui pago:</strong> a fórmula
            clássica de conteúdo save-driven, agora aplicada ao Claude Code.
          </li>
          <li>
            <strong>Janela de autoridade:</strong> quem domina Claude Code hoje
            vira referência — o público está aprendendo a ferramenta agora.
          </li>
          <li>
            <strong>Demanda sem oferta:</strong> &ldquo;ninguém nunca te
            explicou o Claude direito&rdquo; é o gancho que converte curiosidade
            em saves e seguidores.
          </li>
        </List>

        <p>
          O padrão se repete a cada lançamento grande: a ferramenta muda, mas
          a corrida é sempre a mesma — chegar primeiro com o tutorial bom.
          Quem explica bem uma ferramenta nova constrói autoridade que dura
          meses.
        </p>

        <p>
          Para empresas, a leitura prática é outra: o Claude Code com plugins
          está reduzindo o custo de desenvolvimento assistido por IA — e quem
          adota cedo ganha vantagem operacional. É uma das frentes que eu
          avalio ao desenhar{" "}
          <a href="/servicos/consultoria-ia">
            pipelines de IA para times de tecnologia
          </a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.anthropic.com/news"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anthropic News — dados de engajamento via ScrapeCreators
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
