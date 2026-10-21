import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "paper-geo-princeton-citacoes-40",
    title: "O paper que criou o termo GEO: citações elevam visibilidade em 40%",
    teaser:
      "O estudo de Princeton que cunhou o GEO (KDD 2024) segue sendo a referência da semana: quotes e estatísticas no texto elevam a visibilidade em motores generativos em até 40%.",
    category: "SEO/GEO",
    publishedDate: "2026-08-28",
    readingTime: "3 min",
    news: true,
    source: {
      name: "arXiv (Princeton)",
      url: "https://arxiv.org/abs/2311.09735",
    },
    heroImage: {
      url: "/news/paper-geo-princeton-citacoes-40.webp",
      alt: "Artigo acadêmico sobre a mesa com trechos destacados em azul e notebook ao fundo",
    },
    seo: {
      metaTitle: "Paper do GEO: citações elevam visibilidade em IA em 40%",
      metaDescription:
        "O estudo de Princeton que criou o termo GEO mostra: quotes e estatísticas no texto elevam visibilidade em motores generativos em até 40%. Tráfego de IA converte 42% melhor.",
      metaKeywords: "GEO paper Princeton, citações IA, generative engine optimization, estatísticas conteúdo, GEO 2024",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O estudo acadêmico que cunhou o termo <strong>GEO</strong> (Princeton,
          KDD 2024) voltou a circular como a referência mais citada da semana:
          adicionar <strong>quotes e estatísticas ao conteúdo eleva a
          visibilidade em motores generativos em até 40%</strong>.
        </Lead>

        <p>
          O paper, disponível no arXiv (2311.09735), foi o primeiro a medir
          sistematicamente como o texto é extraído pelas IAs. O achado central é
          simples de aplicar: afirmações com números e citações de fontes
          confiáveis têm muito mais chance de entrar na resposta gerada.
        </p>

        <H2>Os dois números que importam</H2>

        <List>
          <li>
            <strong>+40%</strong> — ganho de visibilidade em motores generativos
            com quotes e estatísticas no texto.
          </li>
          <li>
            <strong>+42%</strong> — conversão de visitas vindas de IA versus
            tráfego não-IA no varejo dos EUA (Adobe, mar/2026).
          </li>
        </List>

        <p>
          A combinação é o argumento mais forte do GEO até agora: não é só
          visibilidade, é conversão. Quem escreve para humanos com dados, cita
          fontes e estrutura respostas diretas acaba escrevendo também para os
          LLMs. O mesmo conteúdo alimenta os dois canais.
        </p>

        <p>
          Fontes:{" "}
          <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer">
            arXiv — Generative Engine Optimization (Princeton)
          </a>{" "}
          ·{" "}
          <a
            href="https://peec.ai/ai-search-geo-statistics"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peec AI
          </a>
          . Leia também:{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
