import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "real-swe-benchmark-codigo-enterprise",
    title: "Real-SWE: benchmark novo testa IA em código enterprise de verdade",
    teaser:
      "A WithSpecific lançou o Real-SWE, benchmark que avalia modelos de IA em codebases privadas, reais e de uso corporativo. O objetivo: medir desempenho onde o dinheiro é de verdade.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "WithSpecific",
      url: "https://withspecific.com/benchmarks/real-swe",
    },
    heroImage: {
      url: "/news/real-swe-benchmark-codigo-enterprise.webp",
      alt: "Engenheiro de software analisando código enterprise em monitor amplo, gráficos de barras em tela secundária",
    },
    seo: {
      metaTitle: "Real-SWE: benchmark testa IA em codebase enterprise real",
      metaDescription:
        "Novo benchmark da WithSpecific avalia modelos de IA em codebases privadas e corporativas, não em repositórios públicos. Resultado reflete melhor o mundo real.",
      metaKeywords:
        "Real-SWE, benchmark IA, código enterprise, avaliação de modelos, engenharia de software",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A WithSpecific lançou o <strong>Real-SWE</strong>, um benchmark que
          avalia modelos de IA em <strong>codebases privadas, reais e de uso
          corporativo</strong> — em vez dos repositórios públicos usados nos
          testes tradicionais. No Hacker News, a estreia rendeu{" "}
          <strong>270 pontos</strong> e debate intenso.
        </Lead>
        <p>
          O problema que o Real-SWE ataca é conhecido de quem trabalha com
          engenharia assistida por IA: benchmarks públicos (SWE-bench e
          afins) medem tarefas de repositórios open source, que os modelos já
          viram durante o treinamento. O desempenho ali não reflete o que
          acontece num sistema legado corporativo, cheio de contexto interno e
          padrões próprios.
        </p>
        <H2>Por que importa</H2>
        <List>
          <li>
            Codebase privada testa memória de contexto e capacidade de
            navegar código desconhecido, não decoreba.
          </li>
          <li>
            Empresas ganham um parâmetro mais honesto para escolher modelos
            para engenharia interna.
          </li>
          <li>
            O benchmark sinaliza para provedores: o mercado corporativo quer
            resultado em código real, não em leaderboard.
          </li>
        </List>
        <p>
          Para quem contrata IA para desenvolvimento, a leitura prática é
          simples: antes de escolher modelo ou ferramenta, teste no seu
          próprio repositório. Um piloto com uma tarefa real da sua codebase
          vale mais do que qualquer ranking. Esse é um dos primeiros passos
          que recomendamos em projetos de{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            consultoria de IA
          </a>
          .
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://withspecific.com/benchmarks/real-swe"
            target="_blank"
            rel="noopener noreferrer"
          >
            WithSpecific
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
