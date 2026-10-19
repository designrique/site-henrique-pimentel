import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "ia-nao-assume-responsabilidade-social",
    title: "Agentes de IA ainda não assumem responsabilidade legal e social",
    teaser:
      "A discussão no Hacker News resume um limite que a automação não resolve: um sistema pode executar uma tarefa, mas não responde pelas consequências.",
    category: "Inteligência Artificial",
    publishedDate: "2026-10-19",
    readingTime: "2 min",
    news: true,
    source: {
      name: "Hacker News",
      url: "https://news.ycombinator.com/item?id=50063427",
    },
    heroImage: {
      url: "/news/ia-nao-assume-responsabilidade-social.webp",
      alt: "Duas pessoas revisam uma decisão gerada por IA e marcam a aprovação humana",
    },
    seo: {
      metaTitle: "Agentes de IA não assumem responsabilidade pelas decisões",
      metaDescription:
        "A discussão no Hacker News destaca o limite dos agentes de IA: eles executam tarefas, mas responsabilidade legal e social continua humana.",
      metaKeywords:
        "agentes de IA, responsabilidade em IA, governança de IA, automação",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Uma formulação que circulou no Hacker News resume o limite mais
          importante dos agentes de IA: <strong>IA não assume responsabilidade
          legal e social</strong>. Ela pode executar uma tarefa, mas não responde
          pelas consequências.
        </Lead>
        <p>
          A frase parece óbvia até ser colocada dentro de um fluxo empresarial.
          Um agente que envia uma mensagem, altera um cadastro ou recomenda uma
          decisão pode operar sozinho por alguns segundos. O problema aparece
          depois, quando alguém precisa explicar por que aquilo aconteceu e quem
          autorizou a ação.
        </p>
        <H2>O mínimo de governança para automatizar</H2>
        <List>
          <li>Definir quais ações o agente pode executar sem aprovação.</li>
          <li>Registrar entradas, decisões, ferramentas usadas e resultado.</li>
          <li>Manter uma pessoa responsável por revisar casos de risco.</li>
        </List>
        <p>
          Isso não é argumento contra automação. É o contrário: processos com
          limites claros são mais fáceis de ampliar. O erro é vender autonomia
          como ausência de responsabilidade, quando a empresa continua dona do
          resultado. Em operações sensíveis, a revisão humana não é um atraso
          decorativo; é parte do produto. Esse princípio vale tanto para agentes
          quanto para qualquer <a href="/noticias/como-aparecer-no-chatgpt">sistema de IA aplicado a conteúdo e decisão</a>.
        </p>
        <p>
          Fonte:{" "}
          <a href="https://news.ycombinator.com/item?id=50063427" target="_blank" rel="noopener noreferrer">
            Hacker News
          </a>.
        </p>
      </PostProse>
    );
  },
};

export default post;
