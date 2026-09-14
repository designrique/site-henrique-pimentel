import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "carreira-seo-era-ia-debate-reddit",
    title: "Vale aprender SEO na era da IA? Debate no Reddit resume a virada de skill",
    teaser:
      "Thread com 90 comentários discute o futuro da profissão. Consenso do top comment: IA barateou a produção de conteúdo, mas não substitui intent, SEO técnico e autoridade.",
    category: "SEO/GEO",
    publishedDate: "2026-09-11",
    readingTime: "3 min",
    news: true,
    source: {
      name: "r/digital_marketing",
      url: "https://www.reddit.com/r/digital_marketing/comments/1vo2b9g/is_seo_still_worth_learning_when_everyone_is/",
    },
    heroImage: {
      url: "/news/carreira-seo-era-ia-debate-reddit.webp",
      alt: "Profissional pensativo em mesa com dois monitores exibindo threads abstratas e caderno com caneta em primeiro plano",
    },
    seo: {
      metaTitle: "SEO na era da IA: o que continua valendo a pena aprender",
      metaDescription:
        "Debate no Reddit com 90 comentários resume a virada: IA barateou produção de conteúdo, mas keyword research, SEO técnico e autoridade continuam caros.",
      metaKeywords:
        "carreira SEO, SEO e IA, profissão SEO, GEO, skills de marketing digital",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A pergunta voltou ao topo do r/digital_marketing: ser que SEO ainda
          vale o investimento de carreira quando todo mundo usa IA? O top
          comment, com 23 pontos, entregou a resposta mais citada da thread:{" "}
          <strong>
            a IA tornou a produção de conteúdo barata, mas não tornou baratos
            keyword research, busca de intent, SEO técnico, linkagem interna,
            autoridade e conversão
          </strong>
          .
        </Lead>
        <p>
          É a divisão que separa quem sobrevive de quem vira commodity. Escrever
          texto qualquer custa quase zero agora. Decidir o que escrever, para
          quem, em qual página, com qual autoridade por trás: isso continua
          caro e continua pagando.
        </p>
        <H2>O que a thread sugere para quem está na área</H2>
        <List>
          <li>
            Mire nas camadas que a IA não comprime: estratégia de intent,
            arquitetura de site e distribuição de autoridade.
          </li>
          <li>
            Aprenda GEO como extensão, não substituição: quem entende SEO
            clássico aprende otimização para IA em semanas.
          </li>
          <li>
            Meça resultado de negócio, não volume de conteúdo publicado:
            produção barata só inunda o canal.
          </li>
        </List>
        <p>
          A thread inteira, com 56 pontos e 90 comentários, vale a leitura por
          mostrar onde o mercado acha que a profissão está indo.
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://www.reddit.com/r/digital_marketing/comments/1vo2b9g/is_seo_still_worth_learning_when_everyone_is/"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/digital_marketing
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
