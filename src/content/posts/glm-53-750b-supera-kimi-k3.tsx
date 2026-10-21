import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "glm-53-750b-supera-kimi-k3",
    title: "GLM-5.3: 750B de parâmetros que batem Kimi K3 em coding",
    teaser:
      "Z.ai divulga o GLM-5.3 com ~750B de parâmetros, superando o Kimi K3 em coding agentic e às vezes o Claude Fable 5 com 1/3 dos parâmetros. Pesos abertos em ~2 semanas.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-31",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Dentro.de",
      url: "https://dentro.de/ai/news",
    },
    heroImage: {
      url: "/news/glm-53-750b-supera-kimi-k3.webp",
      alt: "Duas esferas abstratas representando modelos de IA em superfície refletiva, a maior brilhando mais",
    },
    seo: {
      metaTitle: "GLM-5.3 supera Kimi K3 em coding agentic com 750B",
      metaDescription:
        "GLM-5.3 (Z.ai, ~750B) supera o Kimi K3 em coding agentic e às vezes empata com Claude Fable 5 usando 1/3 dos parâmetros. Pesos abertos devem sair em ~2 semanas.",
      metaKeywords:
        "GLM-5.3, Z.ai, Kimi K3, coding agentic, modelo open-weight, 750B",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A Z.ai anunciou o <strong>GLM-5.3</strong>, com cerca de{" "}
          <strong>750 bilhões de parâmetros</strong>, superando o Kimi K3 em
          coding agentic e, em alguns cenários, o Claude Fable 5 — com 1/3 dos
          parâmetros. Os pesos abertos devem sair em cerca de duas semanas.
        </Lead>

        <p>
          O número relevante não é o tamanho, é a eficiência. Bater um modelo
          de fronteira com um terço dos parâmetros significa que a fronteira
          de qualidade está deixando de ser monopólio de quem tem mais GPU —
          e isso pressiona o preço de todo o mercado de modelos.
        </p>

        <H2>O que observar</H2>

        <List>
          <li>
            <strong>Coding agentic:</strong> o segmento onde o GLM-5.3 supera o
            Kimi K3 é exatamente o que sustenta agentes de código em produção.
          </li>
          <li>
            <strong>Pesos abertos em ~2 semanas:</strong> quando os pesos
            caírem, self-host e fine-tuning viram opção real.
          </li>
          <li>
            <strong>Eficiência como diferencial:</strong> 750B com resultado de
            fronteira aponta para custo de inferência menor por tarefa.
          </li>
        </List>

        <p>
          A sequência do mercado chinês é consistente: DeepSeek, Qwen, Kimi e
          agora Z.ai empurrando qualidade alta para baixo. Para quem decide
          arquitetura, a janela de teste se abriu — e testar o GLM-5.3 quando
          os pesos saírem é barato comparado ao custo de ignorar a mudança de
          patamar. É o tipo de avaliação que eu faço na{" "}
          <a href="/servicos/consultoria-ia">consultoria de IA</a>.
        </p>

        <p>
          Fonte:{" "}
          <a href="https://dentro.de/ai/news" target="_blank" rel="noopener noreferrer">
            Dentro.de — notícias de IA
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
