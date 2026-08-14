import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "threads-autoridade-nao-alcance",
    title: "Threads premia autoridade, não alcance: 697 respostas num post",
    teaser:
      "Rowan Cheung, curador de notícias de IA, acumulou 697 respostas em um único post no Threads. No jogo do Threads, conversa vale mais que likes.",
    category: "Social Media",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "ScrapeCreators API (Threads)",
      url: "https://www.threads.net/@rowancheung",
    },
    heroImage: {
      url: "/news/threads-autoridade-nao-alcance.webp",
      alt: "Smartphone mostrando fio de respostas formando corrente, pessoa lendo com atenção",
    },
    seo: {
      metaTitle: "Threads premia autoridade: 697 respostas em um post de IA",
      metaDescription:
        "Rowan Cheung (213 mil seguidores) teve 697 respostas num post de IA no Threads. Reply velocity, não likes, define alcance na plataforma da Meta.",
      metaKeywords:
        "Threads, Rowan Cheung, reply velocity, autoridade IA, engajamento Threads, curadoria de IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          No Threads, a métrica que define o alcance não é like — é resposta.
          O curador de notícias de IA <strong>Rowan Cheung</strong> (213 mil
          seguidores) acumulou <strong>697 respostas</strong> em um único post,
          além de 4,2 mil likes e 208 reshares. Reply velocity, não volume de
          posts.
        </Lead>

        <p>
          O caso, da análise semanal de tendências para consultores de IA,
          confirma o padrão &ldquo;autoridade, não alcance&rdquo; que o
          Threads vem premiando: posts que geram conversa — e não broadcast —
          são os que a plataforma distribui.
        </p>

        <H2>O que gera resposta no Threads</H2>

        <List>
          <li>
            <strong>Curadoria com ponto de vista:</strong> Cheung combina
            notícias de IA com comentário próprio — informação + opinião
            provoca resposta.
          </li>
          <li>
            <strong>Exclusividade:</strong> entrevistas e bastidores (como o
            superintelligence lab da Meta) dão motivo para perguntar e
            discutir.
          </li>
          <li>
            <strong>Pergunta aberta:</strong> terminar o post com uma questão
            convida o reply — a conversa vira o algoritmo.
          </li>
        </List>

        <p>
          O erro comum é tratar o Threads como mais um canal de broadcast —
          postar o mesmo link e sair. A plataforma recompensa quem participa
          da conversa e quem a inicia com substância. 697 respostas num post
          não acontecem por acaso: acontecem porque a audiência foi convidada
          a falar.
        </p>

        <p>
          Para quem usa IA em marketing de conteúdo, o padrão é claro: reply
          velocity &gt; volume. Um post que gera discussão vale mais que dez
          que só acumulam like. É o tipo de estratégia que eu monto junto com{" "}
          <a href="/servicos/consultoria-ia">
            automação e conteúdo com IA para marcas
          </a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.threads.net/@rowancheung"
            target="_blank"
            rel="noopener noreferrer"
          >
            @rowancheung no Threads — dados via ScrapeCreators
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
