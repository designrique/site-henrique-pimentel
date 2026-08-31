import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "deepseek-v4-pro-sai-preview-preco-sobe",
    title: "DeepSeek V4-Pro sai do preview e preço de pico sobe 4,5x",
    teaser:
      "Versão geral chega com licença MIT, 1M de contexto e 62,7 no DeepSWE. Mas quem usa em pico viu a saída ir de US$ 0,87 para US$ 3,96 por milhão de tokens.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-31",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Thursdai News",
      url: "https://thursdai.news/releases/2026-08",
    },
    heroImage: {
      url: "/news/deepseek-v4-pro-sai-preview-preco-sobe.webp",
      alt: "Etiqueta de preço holográfica sobre notebook com gráfico de linha em alta",
    },
    seo: {
      metaTitle: "DeepSeek V4-Pro sai do preview; preço de pico sobe 4,5x",
      metaDescription:
        "DeepSeek V4-Pro deixou o preview com licença MIT e 1M de contexto, marcando 62,7 no DeepSWE. O preço de saída em pico subiu de US$ 0,87 para US$ 3,96 por milhão de tokens.",
      metaKeywords:
        "DeepSeek V4-Pro, saiu do preview, MIT, DeepSWE, preço de tokens, modelo open-weight",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O <strong>DeepSeek V4-Pro saiu do preview</strong> em 13/08 com
          licença MIT, contexto de 1 milhão de tokens e 62,7 no DeepSWE. A
          novidade que pegou a atenção foi outra: o preço de saída em pico vai
          de <strong>US$ 0,87 para US$ 3,96</strong> por milhão de tokens.
        </Lead>

        <p>
          A versão geral mantém o que tornou o modelo relevante: pesos abertos
          sob MIT e janela de contexto longa para agentes. O reajuste de pico,
          porém, mexe na conta de quem usa o modelo em rajadas de tokens — o
          cenário típico de geração longa e raciocínio profundo.
        </p>

        <H2>O que muda na prática</H2>

        <List>
          <li>
            <strong>MIT e 1M de contexto:</strong> self-host continua liberado
            e o contexto longo segue viável para pipelines de agente.
          </li>
          <li>
            <strong>62,7 no DeepSWE:</strong> patamar sólido para coding, ainda
            abaixo dos líderes do topo.
          </li>
          <li>
            <strong>Preço de pico 4,5x maior:</strong> tarefas com saída
            volumosa encarecem; planejar custo por cenário virou obrigação.
          </li>
        </List>

        <p>
          A leitura honesta: o DeepSeek V4-Pro continua competitivo no grosso
          do uso, mas a conta de &ldquo;barato&rdquo; depende de onde o token
          é gasto. Quem opera produção precisa medir entrada vs. saída por
          tarefa, não só olhar o preço de listagem. Esse cálculo por cenário é
          o núcleo do que eu entrego na{" "}
          <a href="/servicos/consultoria-ia">consultoria de IA</a>.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://thursdai.news/releases/2026-08"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thursdai News — releases de agosto/2026
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
