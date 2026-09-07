import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "gpt-56-sol-empata-opus5-metade-preco",
    title: "GPT-5.6 Sol empata com Claude Opus 5 em coding por metade do preço",
    teaser:
      "Com 61 pontos e $0,95 por tarefa, o novo modelo da OpenAI fecha o gap com o Opus 5 ($2,34). O corte de preço para $4/$20 veio no fim de agosto.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-04",
    readingTime: "2 min",
    news: true,
    source: {
      name: "Artificial Analysis",
      url: "https://artificialanalysis.ai",
    },
    heroImage: {
      url: "/news/gpt-56-sol-empata-opus5-metade-preco.webp",
      alt: "Duas xícaras de café idênticas lado a lado sobre mesa de madeira com notebook ao fundo",
    },
    seo: {
      metaTitle: "GPT-5.6 Sol empata com Opus 5 em coding por metade do preço",
      metaDescription:
        "61 pontos de inteligência e $0,95 por tarefa: o GPT-5.6 Sol alcança o Claude Opus 5 cobrando metade. Corte de preço para $4/$20 por milhão de tokens.",
      metaKeywords: "GPT-5.6 Sol, Claude Opus 5, OpenAI, comparação de modelos, coding agents",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O GPT-5.6 Sol fechou a semana empatado com o Claude Opus 5 na praça
          que importa para quem escreve código: 0,88 no Terminal-Bench v2.1
          contra 0,89 do Opus. A diferença está na fatura, $0,95 contra $2,34
          por tarefa concluída, metade do preço para o mesmo resultado.
        </Lead>

        <p>
          O corte de preço para $4/$20 por milhão de tokens veio no fim de
          agosto e colocou o modelo na faixa dos rivais diretos. A nuance que
          a medição da Artificial Analysis revela: os modelos da OpenAI
          cobram mais em prompts longos, dobrando o preço acima de 272K de
          contexto, enquanto Claude e as linhas GLM/DeepSeek mantêm preço fixo
          até 1M.
        </p>

        <H2>Posição na mesa</H2>

        <List>
          <li>61 pontos no índice de inteligência, dois atrás do Opus 5.</li>
          <li>0,88 no Terminal-Bench, empate técnico com o Opus por metade do custo.</li>
          <li>Claude cobra mais por tarefa do que o sticker sugere; OpenAI é o oposto.</li>
          <li>Para o dia a dia, o GPT-5.6 Terra ($0,53/tarefa) segue sendo o default sensato.</li>
        </List>

        <p>
          Para quem paga a conta por resultado, e não por token, o empate
          técnico muda a recomendação padrão. Feature work de código com
          contexto médio tem agora uma opção ocidental competitiva sem precisar
          recorrer aos open-weights chineses.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://artificialanalysis.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Artificial Analysis
          </a>
          . Compare com os{" "}
          <a href="/noticias" target="_blank" rel="noopener noreferrer">
            lançamentos de modelos do mês
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
