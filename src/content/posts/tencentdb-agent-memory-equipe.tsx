import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "tencentdb-agent-memory-equipe",
    title: "TencentDB Agent Memory: hub de memória para agentes de IA em equipe",
    teaser:
      "O repositório da Tencent Cloud — 22,4 mil estrelas — propõe uma base de memória compartilhada para agentes de IA trabalharem em conjunto.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "GitHub — TencentCloud/TencentDB-Agent-Memory",
      url: "https://github.com/TencentCloud/TencentDB-Agent-Memory",
    },
    heroImage: {
      url: "/news/tencentdb-agent-memory-equipe.webp",
      alt: "Vários robôs pequenos compartilhando blocos de notas em mesa de trabalho",
    },
    seo: {
      metaTitle: "TencentDB Agent Memory: memória compartilhada para agentes",
      metaDescription:
        "Tencent Cloud lançou hub de memória para agentes de IA em equipe: 22,4 mil estrelas no GitHub. Como agentes passam a compartilhar contexto.",
      metaKeywords:
        "TencentDB Agent Memory, memória agentes IA, multiagente, Tencent Cloud, contexto compartilhado",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A Tencent Cloud publicou o TencentDB Agent Memory: um hub de memória
          para agentes de IA trabalharem em equipe. Com 22,4 mil estrelas no
          GitHub, o projeto ataca o calcanhar de aquiles dos multiagentes — a
          falta de contexto compartilhado.
        </Lead>

        <p>
          O problema é conhecido de quem já orquestrou mais de um agente:
          cada um começa a tarefa sem saber o que o outro fez. O Agent Memory
          resolve com uma base comum — um agente registra, o outro consulta.
          Resultado: fluxos que dependem de etapas sequenciais deixam de
          repetir trabalho ou perder informação no meio do caminho.
        </p>

        <H2>Por que isso importa</H2>

        <List>
          <li>
            <strong>Multiagentes viáveis:</strong> equipes de IA com divisão
            de tarefas funcionam de verdade quando compartilham memória.
          </li>
          <li>
            <strong>Menos retrabalho:</strong> informação produzida em uma
            etapa fica disponível para as seguintes — sem reconsultar APIs.
          </li>
          <li>
            <strong>Adoção corporativa:</strong> a Tencent empacotando o
            recurso sinaliza que memória de agente virou commodity de
            plataforma.
          </li>
        </List>

        <p>
          A tendência é a mesma em todos os grandes provedores: o valor da IA
          está migrando do modelo para o sistema que organiza o contexto ao
          redor dele. Empresas que querem automação robusta — do atendimento
          ao backoffice — precisam pensar em memória e integração, não só em
          "qual IA usar". Ver como isso se encaixa em cada processo é parte
          do{" "}
          <a href="/servicos/consultoria-ia">
            trabalho de consultoria em IA para empresas
          </a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://github.com/TencentCloud/TencentDB-Agent-Memory"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub — TencentCloud/TencentDB-Agent-Memory
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
