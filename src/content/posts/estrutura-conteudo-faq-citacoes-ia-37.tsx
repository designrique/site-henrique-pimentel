import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "estrutura-conteudo-faq-citacoes-ia-37",
    title: "Conteúdo com seções claras e FAQ aumenta citações de IA em até 37%",
    teaser:
      "Estudo citado pela Surfer mostra que estrutura de conteúdo bem definida eleva a inclusão em respostas de IA em até 37%. AI Overviews citam cerca de 5 fontes por consulta.",
    category: "SEO/GEO",
    publishedDate: "2026-09-11",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Surfer Academy (via YouTube)",
      url: "https://www.youtube.com/watch?v=bhTo8fDmr5I",
    },
    heroImage: {
      url: "/news/estrutura-conteudo-faq-citacoes-ia-37.webp",
      alt: "Wireframe de página com layout de perguntas e respostas em um monitor, com lupa encostada na tela",
    },
    seo: {
      metaTitle: "Estrutura e FAQ elevam citações de IA em até 37%",
      metaDescription:
        "Seções claras e FAQ aumentam em até 37% a chance de entrar em respostas de IA. AI Overviews citam cerca de 5 fontes por query: a disputa é apertada.",
      metaKeywords:
        "estrutura de conteúdo, FAQ, citações em IA, AI Overviews, GEO, conteúdo quotável",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Conteúdo organizado em <strong>seções claras com FAQ</strong> tem até{" "}
          <strong>37% mais chance</strong> de ser incluído em respostas de IA,
          segundo estudo citado pela Surfer. A janela é pequena: AI Overviews
          citam cerca de <strong>5 fontes por consulta</strong>, e em 90% do
          tempo não passam de 8.
        </Lead>
        <p>
          A leitura que fazemos: o modelo não procura o texto mais bonito, ele
          procura o bloco de informação mais fácil de extrair. Pergunta direta,
          resposta direta, um tópico por seção. Keywords continuam relevantes,
          mas o jogo mudou de ranquear página para ser quotável por máquina.
        </p>
        <H2>Como aplicar sem redesenhar o site</H2>
        <List>
          <li>
            Abra cada seção com uma frase que responde à dúvida antes de
            contextualizar.
          </li>
          <li>
            Adicione FAQ só onde existe pergunta real da audiência; schema
            sem conteúdo correspondente é anti-padrão.
          </li>
          <li>
            Use listas e definições curtas: são os nós factuais que os modelos
            extraem com mais facilidade.
          </li>
        </List>
        <p>
          Guia de implementação completo no nosso{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            blog
          </a>
          , com exemplos de antes e depois.
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://www.youtube.com/watch?v=bhTo8fDmr5I"
            target="_blank"
            rel="noopener noreferrer"
          >
            Surfer Academy
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
