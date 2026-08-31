import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "gemini-37-flash-agente-coding",
    title: "Gemini 3.7 Flash: 65,3% no DeepSWE a US$ 0,75 por milhão",
    teaser:
      "O novo workhorse de coding e agentes do Google subiu o DeepSWE v1.1 de 49,0% para 65,3% e estreia com preço agressivo de entrada. Já roda o Spark.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-31",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Google AI Blog",
      url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash",
    },
    heroImage: {
      url: "/news/gemini-37-flash-agente-coding.webp",
      alt: "Mãos de desenvolvedor em teclado mecânico diante de monitor com fluxo de código",
    },
    seo: {
      metaTitle: "Gemini 3.7 Flash: 65,3% no DeepSWE e preço agressivo",
      metaDescription:
        "Gemini 3.7 Flash leva o DeepSWE v1.1 de 49,0% para 65,3%, custa US$ 0,75 por milhão de tokens de entrada e já é o backend do Spark. O que muda na prática.",
      metaKeywords:
        "Gemini 3.7 Flash, Google DeepMind, DeepSWE, modelo de código, agente de IA, custo por token",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Google apresentou o <strong>Gemini 3.7 Flash</strong> como o modelo
          de trabalho para coding e agentes: o DeepSWE v1.1 saltou de{" "}
          <strong>49,0% para 65,3%</strong> e a entrada custa{" "}
          <strong>US$ 0,75 por milhão de tokens</strong>.
        </Lead>

        <p>
          O preço de lançamento é o chamariz: US$ 0,75 por milhão de tokens de
          entrada, com previsão de dobrar em 01/01/27. O modelo já é o backend
          do Spark, o que indica confiança real de produção — não um anúncio
          de benchmark.
        </p>

        <H2>Onde ele se encaixa</H2>

        <List>
          <li>
            <strong>Workhorse de agentes:</strong> a faixa de preço permite
            loops longos de agente sem explodir a conta, o cenário mais comum
            em automação.
          </li>
          <li>
            <strong>Coding de rotina:</strong> 65,3% no DeepSWE coloca o modelo
            num patamar útil para PRs e refatorações, não só para autocomplete.
          </li>
          <li>
            <strong>Janela de preço:</strong> o reajuste anunciado para janeiro
            dá margem para testar e medir antes do custo subir.
          </li>
        </List>

        <p>
          A leitura para quem opera IA em produção: o Google está empurrando o
          custo de agente para baixo e usando preço de entrada como gancho. Se
          o DeepSWE 65,3% se confirmar em uso real, é candidato sério a
          substituir modelos premium em fluxos de código de alto volume — o
          tipo de decisão que muda o ROI de qualquer pipeline. Acompanho esses
          trade-offs de custo e qualidade na{" "}
          <a href="/servicos/consultoria-ia">consultoria de IA</a>.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google AI Blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
