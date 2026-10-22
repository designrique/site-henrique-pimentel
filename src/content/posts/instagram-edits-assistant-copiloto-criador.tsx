import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List, Quote } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "instagram-edits-assistant-copiloto-criador",
    title: "Instagram libera Edits Assistant, copiloto que sugere hook e roteiro",
    teaser:
      "A ferramenta começou a ser liberada nos Estados Unidos em 30 de setembro e cruza retenção, shares e tendências para sugerir gancho, roteiro e próximo teste.",
    category: "Social Media",
    publishedDate: "2026-10-22",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Instagram for Creators",
      url: "https://creators.instagram.com/blog/edits-assistant/",
    },
    seo: {
      metaTitle: "Instagram libera Edits Assistant, copiloto de hook e roteiro",
      metaDescription:
        "Instagram começa a liberar nos EUA o Edits Assistant, que cruza retenção, shares e tendências para sugerir hooks, roteiros e próximos testes.",
      metaKeywords:
        "Edits Assistant, Instagram, criadores, retenção, hook, edição de Reels",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Instagram parou de só mostrar métrica e começou a sugerir o próximo
          passo. O Edits Assistant chegou aos criadores dos Estados Unidos a
          partir de 30 de setembro.
        </Lead>

        <p>
          A ferramenta lê o desempenho dos seus próprios vídeos e das tendências
          da plataforma: follows, views, retenção, likes, shares e comentários
          entram na conta. A partir disso, ela propõe gancho, estrutura de
          roteiro, áudio e quais testes valem a pena rodar em seguida.
        </p>

        <Quote>
          It&rsquo;s like a cheat code for creators.
          <span className="not-italic"> @turnipvegan</span>
        </Quote>

        <H2>O que a ferramenta muda na prática</H2>

        <List>
          <li>
            Feedback deixa de ser achismo: a sugestão vem amarrada ao seu
            histórico, não a um benchmark genérico.
          </li>
          <li>
            Retenção vira ponto de partida do roteiro, e não diagnóstico
            posterior.
          </li>
          <li>
            Teste guiado por dado interno reduz a tentativa e erro de quem
            publica sozinho.
          </li>
        </List>

        <p>
          A ressalva é conhecida: quando todo mundo recebe a mesma sugestão, o
          diferencial volta para o ponto de vista. Copiloto não substitui
          repertório. Os detalhes oficiais estão no{" "}
          <a
            href="https://creators.instagram.com/blog/edits-assistant/"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog do Instagram para criadores
          </a>
          , e o tema conversa com o que já publicamos sobre{" "}
          <a href="/noticias">algoritmo e formato</a>.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://creators.instagram.com/blog/edits-assistant/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram for Creators
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
