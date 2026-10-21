import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "apple-modelo-ia-china-alibaba",
    title: "Apple treina modelo de IA próprio para a China com a Alibaba",
    teaser:
      "Parceria rara cruza as tensões entre Pequim e Washington: a Apple desenvolveu um modelo de IA local com ajuda da gigante chinesa.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "The Verge",
      url: "https://www.theverge.com/ai-artificial-intelligence/980160/apple-intelligence-china-custom-ai-model-alibaba",
    },
    heroImage: {
      url: "/news/apple-modelo-ia-china-alibaba.webp",
      alt: "Smartphone em mesa de escritório com prédios de cidade asiática ao fundo",
    },
    seo: {
      metaTitle: "Apple treina IA para China com Alibaba: parceria rara",
      metaDescription:
        "Apple desenvolveu modelo de IA próprio para o mercado chinês com ajuda da Alibaba, cruzando as tensões geopolíticas entre Pequim e Washington.",
      metaKeywords:
        "Apple Intelligence, Alibaba, modelo IA China, IA localizada, geopolítica IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A Apple treinou um modelo de IA próprio para o mercado chinês com
          ajuda da Alibaba. A parceria cruza as tensões entre Pequim e
          Washington — e revela como a IA virou peça de política externa.
        </Lead>

        <p>
          A jogada é dupla. De um lado, a Apple precisa de um assistente que
          funcione dentro das regras chinesas de censura e regulamentação de
          IA. De outro, a Alibaba ganha um selo de credibilidade global ao
          entrar na cadeia da empresa mais valiosa do mundo. Nenhum dos dois
          poderia fazer isso sozinho com a mesma velocidade.
        </p>

        <H2>Por que isso importa</H2>

        <List>
          <li>
            <strong>Modelos locais para mercados locais:</strong> a
            localização de IA não é só tradução — é adequação regulatória,
            cultural e de infraestrutura.
          </li>
          <li>
            <strong>Alibaba deixa de ser só e-commerce:</strong> a gigante
            chinesa se consolida como fornecedora de inteligência artificial
            para terceiros.
          </li>
          <li>
            <strong>Fragmentação do mercado de IA:</strong> o cenário de um
            modelo único global vai dando lugar a ecossistemas regionais.
          </li>
        </List>

        <p>
          A tendência é clara: quem vende IA para o mundo precisa entender
          cada mercado como um problema de produto diferente, não como uma
          tradução do mesmo software. Para marcas brasileiras que usam
          ferramentas de IA no atendimento e na captação, a lição é simples —
          testar como o modelo responde ao seu público local antes de
          confiar. Veja como isso se aplica a{" "}
          <a href="/o-que-e-geo-medicos">quem atende pacientes no Brasil</a>.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.theverge.com/ai-artificial-intelligence/980160/apple-intelligence-china-custom-ai-model-alibaba"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Verge
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
