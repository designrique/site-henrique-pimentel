import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "claude-fable-51-lidera-terminal-bench-corte-cache",
    title: "Claude Fable 5.1 assume a liderança em coding e corta cache em 75%",
    teaser:
      "Novo modelo da Anthropic soma 66 pontos no índice da Artificial Analysis e 0,91 no Terminal-Bench. O corte do cache-read para $0,25/MTok vale 25-45% de economia em sessões de agente.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-04",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Anthropic",
      url: "https://www.anthropic.com/claude-fable-and-mythos-5-1",
    },
    heroImage: {
      url: "/news/claude-fable-51-lidera-terminal-bench-corte-cache.webp",
      alt: "Notebook com terminal de código verde sobre fundo escuro e teclado mecânico ao lado",
    },
    seo: {
      metaTitle: "Claude Fable 5.1 lidera Terminal-Bench e corta cache em 75%",
      metaDescription:
        "Novo modelo da Anthropic soma 66 pontos de inteligência e 0,91 no Terminal-Bench. Corte do cache-read reduz custo de agentes em 25-45%.",
      metaKeywords: "Claude Fable 5.1, Anthropic, Terminal-Bench, coding com IA, custo de LLM",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A Anthropic lançou na última terça-feira o Claude Fable 5.1, e a
          medição independente da Artificial Analysis confirmou: 66 pontos de
          inteligência, primeiro lugar geral, e 0,91 no Terminal-Bench v2.1. No
          mesmo rate card do antecessor, o ganho veio acompanhado de um corte
          agressivo de preço que muda a conta de quem roda agentes.
        </Lead>

        <p>
          O detalhe que importa para quem opera: o cache-read caiu de $1,00
          para $0,25 por milhão de tokens. Em sessões agênticas, onde o
          contexto é relido a cada passo, essa linha responde por boa parte da
          fatura. A economia efetiva medida fica entre 25% e 45% por workload.
          A Cognition migrou o Devin para o modelo no dia do lançamento.
        </p>

        <H2>O preço da liderança</H2>

        <List>
          <li>$10/$50 por milhão de tokens (entrada/saída), $3,69 por tarefa concluída.</li>
          <li>Latência 48,7% maior que o Fable 5, segundo a CodeRabbit.</li>
          <li>Consome cerca de 2x mais tokens que a média para chegar ao resultado.</li>
          <li>O irmão Mythos 5.1 usa os mesmos pesos, mas só via programas de verificação cyber/defesa.</li>
        </List>

        <p>
          A leitura prática: para migrações e refactors de repositório inteiro,
          o Fable 5.1 é o novo padrão. Para o trabalho do dia a dia, o corte de
          cache não paga a diferença de preço por token frente a alternativas
          mais baratas. Quem já está no ecossistema Claude deve migrar tráfego
          do Fable 5 e do Opus agora; quem está fora tem conta a fazer.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.anthropic.com/claude-fable-and-mythos-5-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anthropic
          </a>
          . Confira a análise completa de{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            custo-benefício de modelos no blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
