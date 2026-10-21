import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "claude-fable5-swebench-opus5-contexto",
    title: "Claude Fable 5 lidera SWE-Bench Pro e Opus 5 abre contexto de 1 milhão",
    teaser:
      "Anthropic entrega dois avanços: 80,3% no SWE-Bench Pro para o Fable 5 e contexto de 1 milhão de tokens no Opus 5.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "AI Apps Blog",
      url: "https://www.aiapps.com/blog/ai-news-august-breakthroughs-launches-trends-cant-miss/",
    },
    heroImage: {
      url: "/news/claude-fable5-swebench-opus5-contexto.webp",
      alt: "Editor de código com código-fonte em monitor duplo de desenvolvedor",
    },
    seo: {
      metaTitle: "Claude Fable 5: 80,3% no SWE-Bench Pro; Opus 5 com 1M tokens",
      metaDescription:
        "Claude Fable 5 atingiu 80,3% no SWE-Bench Pro e o Claude Opus 5 abriu contexto de 1 milhão de tokens. O que isso significa para devs e agentes de IA.",
      metaKeywords:
        "Claude Fable 5, SWE-Bench Pro, Claude Opus 5, contexto 1 milhão, Anthropic, engenharia de software IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A Anthropic dobrou a aposta em engenharia de software: o Claude Fable
          5 marcou 80,3% no SWE-Bench Pro, e o Claude Opus 5 abriu contexto de
          1 milhão de tokens. Os dois números empurram o limite do que um
          modelo faz sozinho em um código.
        </Lead>

        <p>
          O SWE-Bench Pro testa a resolução de problemas reais de repositórios
          — não exercícios de tutorial. Passar de 80% nesse benchmark coloca o
          Fable 5 em outro patamar para tarefas de manutenção e correção de
          código. Já o contexto de 1 milhão de tokens do Opus 5 significa
          jogar uma base inteira de código — ou dezenas de documentos — em uma
          única conversa.
        </p>

        <H2>O que isso muda na prática</H2>

        <List>
          <li>
            <strong>Agentes de código mais confiáveis:</strong> um modelo que
            resolve 8 em cada 10 problemas de repo vira ferramenta de trabalho
            real, não brinquedo de demo.
          </li>
          <li>
            <strong>Contexto longo vira commodity:</strong> com 1M de tokens,
            análise de codebase inteira e documentação corporativa entram na
            mesma sessão — sem chunking manual.
          </li>
          <li>
            <strong>Pressão competitiva:</strong> Google, OpenAI e xAI terão
            que responder — o que acelera todo o mercado de modelos.
          </li>
        </List>

        <p>
          O efeito para empresas que usam IA no dia a dia: a barra de
          qualidade sobe, e a promessa de "assistente que entende seu
          projeto" deixa de ser vaga. O desafio deixa de ser o modelo e passa
          a ser integrar bem o fluxo — dados, permissões e revisão humana.
          É o tipo de arquitetura que costumo desenhar em{" "}
          <a href="/servicos/consultoria-ia">projetos de IA para empresas</a>.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.aiapps.com/blog/ai-news-august-breakthroughs-launches-trends-cant-miss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI Apps Blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
