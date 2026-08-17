import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "managed-agents-gemini-api-36-flash",
    title: "Managed Agents do Gemini API ganham 3.6 Flash e hooks",
    teaser:
      "O Google turbinou os agentes gerenciados da API do Gemini com o modelo 3.6 Flash e hooks de integração — automação multiagente ficou mais simples.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Google Developers Blog",
      url: "https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/",
    },
    heroImage: {
      url: "/news/managed-agents-gemini-api-36-flash.webp",
      alt: "Rede de nós conectados representando agentes de IA em monitor",
    },
    seo: {
      metaTitle: "Managed Agents do Gemini API: 3.6 Flash e hooks",
      metaDescription:
        "Managed Agents do Gemini API agora rodam com 3.6 Flash e ganharam hooks. Multiagentes na nuvem do Google ficaram mais simples de integrar.",
      metaKeywords:
        "Managed Agents, Gemini API, agentes IA, 3.6 Flash, hooks, automação multiagente",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Google ampliou os Managed Agents do Gemini API: os agentes
          gerenciados agora rodam com o modelo 3.6 Flash e ganharam hooks de
          integração. Para quem quer automação multiagente sem montar a
          orquestração do zero, a barreira baixou.
        </Lead>

        <p>
          A proposta dos Managed Agents é tirar a infraestrutura do caminho:
          em vez de configurar filas, retries e estado entre agentes, o
          desenvolvedor descreve o fluxo e o Google cuida da execução. O 3.6
          Flash entra como motor padrão — rápido e barato — e os hooks
          conectam o fluxo a sistemas externos sem código de cola.
        </p>

        <H2>Para quem isso importa</H2>

        <List>
          <li>
            <strong>Times pequenos:</strong> automação com vários agentes
            vira projeto de dias, não de meses — sem infra própria.
          </li>
          <li>
            <strong>Integrações:</strong> hooks ligam o agente a CRM,
            planilhas e APIs sem servidor intermediário.
          </li>
          <li>
            <strong>Custo:</strong> Flash no núcleo mantém a conta baixa em
            tarefas de volume.
          </li>
        </List>

        <p>
          A tendência é importante para quem olha IA como ferramenta de
          negócio: a orquestração de agentes — várias IAs trabalhando em
          sequência — está virando recurso de plataforma, não nicho de
          engenharia. O desafio continua sendo desenhar o fluxo certo, e é
          aí que entra a parte estratégica do{" "}
          <a href="/servicos/consultoria-ia">
            trabalho de consultoria em IA
          </a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Developers Blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
