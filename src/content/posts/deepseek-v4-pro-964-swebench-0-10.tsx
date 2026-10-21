import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "deepseek-v4-pro-964-swebench-0-10",
    title: "DeepSeek V4 Pro resolve 96,4% do SWE-bench a $0,10 por teste",
    teaser:
      "Medição independente da Vals AI aponta o melhor custo por problema já registrado no leaderboard. O modelo MIT continua imbatível em custo-benefício mesmo após o reajuste de preço.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-04",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Vals AI",
      url: "https://www.vals.ai/benchmarks/swebench",
    },
    heroImage: {
      url: "/news/deepseek-v4-pro-964-swebench-0-10.webp",
      alt: "Mesa com dois monitores exibindo dashboards abstratos de testes e uma moeda simbolizando custo mínimo",
    },
    seo: {
      metaTitle: "DeepSeek V4 Pro: 96,4% do SWE-bench a $0,10 por teste",
      metaDescription:
        "Vals AI mede o DeepSeek V4 Pro resolvendo 96,4% do SWE-bench Verified por 10 centavos de dólar. Melhor custo por problema já registrado.",
      metaKeywords: "DeepSeek V4 Pro, SWE-bench, Vals AI, modelo de código barato, open weights",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O resultado independente mais impressionante da semana veio da Vals
          AI: rodando o DeepSeek V4 Pro (build 0813) em um harness minimalista
          do Mini-SWE-agent, o modelo resolveu 96,4% do SWE-bench Verified a
          $0,10 por teste. Nenhum modelo medido no leaderboard chegou perto
          desse custo por problema resolvido.
        </Lead>

        <p>
          O contexto importa: o DeepSeek reajustou os preços no fim de agosto,
          e a Reuters chegou a reportar altas de até 14x sobre a era V3.2. Ainda
          assim, a tabela segue em $1,32/$3,96 por milhão de tokens, com custo
          de $0,27 por tarefa concluída. O modelo é MIT, o que elimina qualquer
          dor de cabeça de licença comercial.
        </p>

        <H2>Onde o pé bate</H2>

        <List>
          <li>Lentidão: cerca de 38 tokens/s na API oficial, dos mais lentos da categoria.</li>
          <li>Cache hit custa 20% do preço, combinação boa para código repetitivo.</li>
          <li>O irmão V4 Flash resolve 79% do SWE-bench a $0,11 por tarefa.</li>
          <li>A variante Flash Vision experimental chega perto do Opus 4.8 em agentes visuais.</li>
        </List>

        <p>
          A conclusão do relatório semanal de modelos é direta: para 80% do
          trabalho de código rotineiro, modelos assim entregam qualidade de
          fronteira por uma fração do preço dos fechados. Interatividade pesada
          ainda sofre com a velocidade, mas batch e agentes assíncronos são
          território natural do DeepSeek.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.vals.ai/benchmarks/swebench"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vals AI SWE-bench
          </a>
          . Veja também o{" "}
          <a href="/baseline-geo" target="_blank" rel="noopener noreferrer">
            baseline de GEO do site
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
