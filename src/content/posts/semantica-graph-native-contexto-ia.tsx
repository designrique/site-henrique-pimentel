import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "semantica-graph-native-contexto-ia",
    title: "Semantica: infraestrutura graph-native para contexto e IA auditável",
    teaser:
      "Repositório em alta no GitHub propõe organizar o contexto de IA em grafos — com rastreabilidade para cada decisão do modelo.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "GitHub — semantica-agi/semantica",
      url: "https://github.com/semantica-agi/semantica",
    },
    heroImage: {
      url: "/news/semantica-graph-native-contexto-ia.webp",
      alt: "Grafo de conexões coloridas representando contexto de IA em monitor",
    },
    seo: {
      metaTitle: "Semantica: contexto de IA em grafos auditáveis",
      metaDescription:
        "Semantica organiza contexto e memória de IA em grafos, com rastreabilidade. O projeto soma 8,3 mil estrelas no GitHub e promete IA auditável.",
      metaKeywords:
        "Semantica, graph-native, contexto IA, IA auditável, memória de IA, GitHub",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Semantica — 8,3 mil estrelas no GitHub, 5,3 mil novas na semana —
          ataca um dos problemas mais incômodos da IA aplicada: de onde veio
          a resposta? A proposta é organizar o contexto em um grafo, com cada
          decisão rastreável até a origem.
        </Lead>

        <p>
          A ideia central: em vez de empilhar texto solto no contexto do
          modelo, os dados viram nós e conexões — e cada resposta pode apontar
          de qual trecho veio. Para setores regulados, como saúde e finanças,
          isso transforma a IA de caixa-preta em ferramenta auditável.
        </p>

        <H2>O que a abordagem entrega</H2>

        <List>
          <li>
            <strong>Rastreabilidade:</strong> toda afirmação da IA conectada à
            fonte — essencial para compliance e confiança.
          </li>
          <li>
            <strong>Contexto organizado:</strong> o grafo prioriza a
            informação relevante em vez de despejar tudo no prompt.
          </li>
          <li>
            <strong>Memória de longo prazo:</strong> o conhecimento
            acumulado da empresa vira estrutura, não arquivo esquecido.
          </li>
        </List>

        <p>
          A direção faz sentido: à medida que a IA vira parte do processo
          decisório, "por que o sistema respondeu isso?" deixa de ser
          pergunta de auditoria e vira pergunta de operação. Quem adota esse
          tipo de arquitetura cedo reduz risco — e ganha confiança de
          clientes e reguladores. É uma das frentes que exploro ao{" "}
          <a href="/servicos/consultoria-ia">
            desenhar IA para empresas
          </a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://github.com/semantica-agi/semantica"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub — semantica-agi/semantica
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
