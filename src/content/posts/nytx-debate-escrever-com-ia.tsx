import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "nytx-debate-escrever-com-ia",
    title: "NYT publica manifesto contra escrever com IA — e o debate esquenta",
    teaser:
      "O artigo \"I'm Begging You: Never Write with AI\" reacende a discussão sobre autoria, voz e conteúdo gerado por máquina no jornalismo e no marketing.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "The New York Times",
      url: "https://www.nytimes.com/2026/08/04/opinion/artificial-intelligence-ai-writing.html",
    },
    heroImage: {
      url: "/news/nytx-debate-escrever-com-ia.webp",
      alt: "Caneta e caderno em mesa ao lado de notebook, luz natural de janela",
    },
    seo: {
      metaTitle: "NYT contra escrever com IA: debate sobre autoria esquenta",
      metaDescription:
        "Artigo do NYT intitulado \"I'm Begging You: Never Write with AI\" reacende a discussão sobre voz autoral e conteúdo gerado por máquina.",
      metaKeywords:
        "escrever com IA, NYT, autoria, conteúdo gerado por IA, escrita humana, debate IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O New York Times publicou um artigo de opinião com um título
          difícil de ignorar: "I'm Begging You: Never Write with AI". Em
          poucos dias, o texto virou ponto de encontro de um debate que não
          é mais teórico: o que sobra da escrita quando qualquer um pode
          gerar texto em segundos?
        </Lead>

        <p>
          O argumento central não é novidade — voz, experiência e escolha
          são o que dá valor à escrita —, mas o palco mudou. Quando um
          veículo do porte do NYT pede publicamente para as pessoas não
          delegarem a escrita à IA, o recado atravessa o jornalismo e chega
          ao marketing de conteúdo, ao atendimento e à comunicação de
          marcas.
        </p>

        <H2>Os dois lados da moeda</H2>

        <List>
          <li>
            <strong>Do lado do leitor:</strong> conteúdo com voz própria e
            experiência real ganha valor conforme o texto genérico de IA se
            multiplica.
          </li>
          <li>
            <strong>Do lado do produtor:</strong> a IA continua útil como
            ferramenta — rascunho, pesquisa, estrutura — desde que a voz
            final seja humana.
          </li>
          <li>
            <strong>Do lado do algoritmo:</strong> motores de busca e de IA
            já discriminam conteúdo com informação nova e específica —
            exatamente o que texto de IA puro não entrega.
          </li>
        </List>

        <p>
          Minha posição é mais pragmática que a do manifesto: o problema não
          é a ferramenta, é a ausência de autoria. O que o NYT está pedindo
          não é para abandonar a IA, é para não deixar que ela escreva por
          você. A diferença entre os dois caminhos define quem é citado,
          lido e lembrado. É a mesma fronteira que separa conteúdo que{" "}
          <a href="/blog">aparece bem nos buscadores e nas respostas de IA</a>{" "}
          do ruído que ninguém lê.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.nytimes.com/2026/08/04/opinion/artificial-intelligence-ai-writing.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            The New York Times
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
