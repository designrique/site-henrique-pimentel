import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "glm-52-melhor-open-weight-codigo",
    title: "GLM-5.2 é o nº 1 open weight para código, aponta ranking",
    teaser:
      "O modelo de 744B da Z.ai lidera o Artificial Analysis Index entre os open weight, com licença MIT e preço de US$ 1,40/US$ 4,40. É o favorito para agentes de codificação longa.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-28",
    readingTime: "3 min",
    news: true,
    source: {
      name: "BenchLM",
      url: "https://benchlm.ai/best/chinese-models",
    },
    heroImage: {
      url: "/news/glm-52-melhor-open-weight-codigo.webp",
      alt: "Rack de servidores com luzes acesas ao lado de notebook com código aberto",
    },
    seo: {
      metaTitle: "GLM-5.2: o nº 1 open weight para código em 2026",
      metaDescription:
        "GLM-5.2 da Z.ai é o nº 1 open weight do Artificial Analysis Index: 744B, licença MIT, US$ 1,40/US$ 4,40. Tuned para agentes de codificação longa.",
      metaKeywords: "GLM-5.2, Z.ai, open weight código, Artificial Analysis, modelos chineses IA, MIT license",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O <strong>GLM-5.2</strong>, da Z.ai, é o modelo open weight nº 1 do{" "}
          <strong>Artificial Analysis Index</strong> para engenharia de software.
          São 744 bilhões de parâmetros, licença MIT e preço de US$ 1,40 por
          milhão de tokens de entrada e US$ 4,40 de saída.
        </Lead>

        <p>
          O diferencial declarado é o tuning para <strong>agentes de
          codificação longa</strong>: sessões extensas de edição, onde o modelo
          precisa manter contexto e seguir instruções por dezenas de passos. É o
          perfil de uso que mais cresce entre devs que rodam agentes autônomos
          no terminal.
        </p>

        <H2>Onde o GLM-5.2 se encaixa</H2>

        <List>
          <li>Melhor open weight no Artificial Analysis Index (ago/2026).</li>
          <li>Licença MIT: uso comercial e fine-tuning liberados.</li>
          <li>US$ 1,40/US$ 4,40 por milhão de tokens — abaixo dos frontier ocidentais.</li>
          <li>Indicado para agentes longos, não para refatorações críticas de uma vez só.</li>
        </List>

        <p>
          Para times que querem rodar agentes de código com pesos próprios e
          custo controlado, a combinação MIT + preço + ranking é difícil de
          bater. O consenso da semana: DeepSeek para volume, GLM para agentes
          longos, Claude para refatoração profunda.
        </p>

        <p>
          Fontes:{" "}
          <a
            href="https://benchlm.ai/best/chinese-models"
            target="_blank"
            rel="noopener noreferrer"
          >
            BenchLM — melhores modelos chineses
          </a>{" "}
          ·{" "}
          <a
            href="https://geotoolbox.ai/blog/chinese-ai-models-compared"
            target="_blank"
            rel="noopener noreferrer"
          >
            Geotoolbox — chineses comparados
          </a>
          . Leia também:{" "}
          <a href="/noticias" target="_blank" rel="noopener noreferrer">
            notícias
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
