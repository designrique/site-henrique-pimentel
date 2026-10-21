import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "minimind-treinar-llm-local-2h",
    title: "minimind: treine um LLM de 64 milhões de parâmetros do zero em cerca de 2 horas",
    teaser:
      "O projeto open source que tira o treinamento de modelos da fantasia corporativa: um LLM pequeno, do zero, na sua própria máquina, em ~2h. Quase 59 mil estrelas no GitHub.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-07",
    readingTime: "3 min",
    news: true,
    source: {
      name: "GitHub (minimind)",
      url: "https://github.com/jingyaogong/minimind",
    },
    heroImage: {
      url: "/news/minimind-treinar-llm-local-2h.webp",
      alt: "Desenvolvedor treinando uma pequena rede neural em notebook à noite com holograma cerebral",
    },
    seo: {
      metaTitle: "minimind: treine um LLM local em ~2 horas",
      metaDescription:
        "minimind permite treinar um LLM de 64M de parâmetros do zero em ~2h na sua máquina. 59 mil estrelas no GitHub, aprendizado prático sem nuvem cara.",
      metaKeywords: "minimind, treinar LLM, LLM local, modelo de linguagem, open source",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Treinar um modelo de linguagem costumava parecer privilégio de quem
          tem datacenter. O minimind desmonta essa narrativa: um LLM de 64
          milhões de parâmetros treinado do zero em cerca de duas horas, na sua
          própria máquina. O projeto soma quase 59 mil estrelas no GitHub, com
          mais de 3,8 mil só na última semana.
        </Lead>

        <p>
          O valor aqui não é entregar um modelo competitivo com o Gemini ou o
          Claude. É didático e prático ao mesmo tempo: você entende o pipeline
          inteiro, da tokenização ao treinamento, sem estourar o cartão. Para
          quem quer se diferenciar no mercado de IA, mexer de verdade no treino
          de um modelo vale mais do que decorar prompt.
        </p>

        <H2>Por que o projeto cresceu</H2>

        <List>
          <li>Baixa barreira: um notebook razoável roda o treinamento completo.</li>
          <li>Ensina o ciclo real, não só o uso de API pronta.</li>
          <li>Serve de base para experimentos de fine-tuning e arquitetura.</li>
          <li>Cresceu 3,8 mil estrelas na semana, sinal de comunidade ativa.</li>
        </List>

        <p>
          Se o seu trabalho é aplicar IA em clientes, ter um modelo local
          treinável na mão abre portas: dá pra prototipar soluções com dados
          sensíveis sem mandar nada pra nuvem e ainda explicar a mecânica por
          trás do que você entrega. É a diferença entre vender prompt e vender
          entendimento.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://github.com/jingyaogong/minimind"
            target="_blank"
            rel="noopener noreferrer"
          >
            minimind no GitHub
          </a>
          . Veja como isso se encaixa num{" "}
          <a href="/baseline-geo" target="_blank" rel="noopener noreferrer">
            baseline de GEO
          </a>{" "}
          e de presença para IA.
        </p>
      </PostProse>
    );
  },
};

export default post;
