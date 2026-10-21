import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "google-pics-workspace-edicao-imagem",
    title: "Google Pics leva geração e edição de imagem para dentro do Workspace",
    teaser:
      "O Google lançou o Pics no dia 1º de setembro: criar e editar imagens sem sair dos apps de trabalho, construído sobre o modelo Nano Banana. Mais uma camada de IA full-stack no pacote corporativo.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-07",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Google Workspace",
      url: "https://blog.google/products-and-platforms/products/workspace/google-pics/",
    },
    heroImage: {
      url: "/news/google-pics-workspace-edicao-imagem.webp",
      alt: "Designer editando uma foto de produto em tela grande dentro de um escritório moderno",
    },
    seo: {
      metaTitle: "Google Pics: edição de imagem com IA no Workspace",
      metaDescription:
        "Google Pics traz geração e edição de imagem para dentro do Workspace, sobre o modelo Nano Banana. Criação visual sem trocar de ferramenta.",
      metaKeywords: "Google Pics, Workspace, Nano Banana, edição de imagem IA, geração de imagem",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Google empurrou a geração de imagem para dentro do ambiente de
          trabalho. O Pics, lançado no dia 1º de setembro, permite criar e
          editar imagens sem sair do Workspace, construído sobre o modelo Nano
          Banana, a versão de imagem do Gemini.
        </Lead>

        <p>
          Na prática, é a mesma promessa de &ldquo;IA full-stack&rdquo; que o Google vem
          aplicando em texto e planilhas: a ferramenta vive onde o trabalho
          acontece, não numa aba separada. Para agências e produtores de
          conteúdo, o atalho é óbvio, menos troca de contexto entre o rascunho
          e a arte final.
        </p>

        <H2>O que isso muda no fluxo</H2>

        <List>
          <li>Geração e edição direto em Docs e Slides, sem ferramenta externa.</li>
          <li>Baseada no Nano Banana, que mantém consistência visual entre imagens.</li>
          <li>Menos dependência de bancos de imagem e de rounds com designer para ajustes simples.</li>
          <li>Reforça o Workspace como suíte única de criação, não só de produtividade.</li>
        </List>

        <p>
          A pegada estratégica é parecida com a do Sheets canvas e do
          assistente de textos: o Google quer que o cliente resolva mais
          tarefas dentro do pacote que já paga. Para quem produz material
          visual em volume, vale testar se a consistência do Nano Banana segura
          o padrão da marca antes de migrar fluxos inteiros.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://blog.google/products-and-platforms/products/workspace/google-pics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Workspace
          </a>
          . Confira as demais{" "}
          <a href="/noticias" target="_blank" rel="noopener noreferrer">
            notícias de IA
          </a>{" "}
          do site.
        </p>
      </PostProse>
    );
  },
};

export default post;
