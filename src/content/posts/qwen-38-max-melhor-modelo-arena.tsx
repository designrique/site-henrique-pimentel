import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "qwen-38-max-melhor-modelo-arena",
    title: "Qwen 3.8 Max supera Claude Opus 5 em leaderboard de arena",
    teaser:
      "O modelo de 2,4 trilhões de parâmetros da Alibaba foi ranqueado como o melhor modelo geral em leaderboards estilo arena, à frente do Claude Opus 5.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Turing Post",
      url: "https://www.turingpost.com/p/chinesemodels",
    },
    heroImage: {
      url: "/news/qwen-38-max-melhor-modelo-arena.webp",
      alt: "Laboratório moderno de pesquisa em IA com telas mostrando rankings",
    },
    seo: {
      metaTitle: "Qwen 3.8 Max supera Claude Opus 5 em arena",
      metaDescription:
        "Qwen 3.8 Max (2,4T parâmetros, Alibaba) foi ranqueado como melhor modelo geral em leaderboard estilo arena, à frente do Claude Opus 5 da Anthropic.",
      metaKeywords:
        "Qwen 3.8 Max, Alibaba, leaderboard arena, modelos chineses IA, Claude Opus 5, melhor modelo geral",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Pela primeira vez, um modelo chinês ocupa o topo de um leaderboard
          geral estilo arena: o <strong>Qwen 3.8 Max</strong>, da Alibaba, com
          2,4 trilhões de parâmetros, ficou à frente do Claude Opus 5. O sinal
          é claro — a China está encostando nos líderes ocidentais.
        </Lead>

        <p>
          Em leaderboards estilo arena, o ranking sai de comparações diretas
          entre modelos com votação de usuários e juízes, não de um benchmark
          fixo. Ser ranqueado acima do Opus 5 nesse formato indica que o
          modelo da Alibaba está competitivo em qualidade percebida de uso
          geral — conversa, escrita, raciocínio — e não só em código.
        </p>

        <H2>O que isso muda no mercado</H2>

        <List>
          <li>
            <strong>A liderança deixou de ser monopólio ocidental:</strong> a
            disputa agora tem três frentes — OpenAI, Anthropic e o eixo
            chinês (Alibaba, DeepSeek, Z.ai, MiniMax, Moonshot).
          </li>
          <li>
            <strong>Preço acompanha:</strong> Qwen3 Coder 480B, por exemplo,
            marca 44,7% no SWE-bench Lite por US$ 0,22/US$ 0,90 — na faixa
            dos modelos baratos.
          </li>
          <li>
            <strong>Pressão nos ocidentais:</strong> com alternativa de
            qualidade similar por fração do preço, o premium de marca fica
            cada vez mais difícil de justificar.
          </li>
        </List>

        <p>
          Para quem consome IA em produção, a leitura é direta: a janela de
          preço alto dos modelos ocidentais está fechando. As empresas que
          montam pipelines com múltiplos provedores — e que testam o chinês
          antes de assinar o contrato caro — estão saindo na frente. É o tipo
          de arquitetura que eu desenho na{" "}
          <a href="/servicos/consultoria-ia">consultoria de IA</a>: modelo
          certo para cada tarefa, com custo controlado.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.turingpost.com/p/chinesemodels"
            target="_blank"
            rel="noopener noreferrer"
          >
            Turing Post — comparação de modelos chineses
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
