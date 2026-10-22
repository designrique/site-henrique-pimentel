import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "tiktok-buy-direct-checkout-feed",
    title: "TikTok coloca checkout em um clique direto do For You",
    teaser:
      "O Buy Direct passa a fechar compra dentro do feed, enquanto o Shopping Assistant responde sobre frete, tamanho e disponibilidade em uma conversa.",
    category: "Social Media",
    publishedDate: "2026-10-22",
    readingTime: "3 min",
    news: true,
    source: {
      name: "TikTok Newsroom",
      url: "https://newsroom.tiktok.com/tiktok-unveils-ai-powered-updates-for-advertisers-driving-discovery-action-and-measurable-business-outcomes?lang=en",
    },
    seo: {
      metaTitle: "TikTok coloca checkout em um clique direto do For You",
      metaDescription:
        "TikTok lança Buy Direct com compra em um clique no feed e Shopping Assistant com IA que responde frete, tamanho e disponibilidade antes da compra.",
      metaKeywords:
        "TikTok Shop, Buy Direct, Shopping Assistant, social commerce, conversão",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O feed deixou de ser vitrine e virou balcão. As atualizações
          anunciadas em 5 de outubro aproximam a decisão de compra do momento
          em que o vídeo termina.
        </Lead>

        <p>
          O <strong>Buy Direct</strong> permite fechar a compra em um clique
          direto do For You, sem sair do vídeo. Na mesma leva, o{" "}
          <strong>Shopping Assistant</strong> usa IA para conversar sobre o
          produto: frete, tamanho, disponibilidade e finalização acontecem na
          mesma troca de mensagens.
        </p>

        <H2>Por que isso muda a produção de conteúdo</H2>

        <List>
          <li>
            Vídeo de demonstração fica a um toque da venda, o que eleva o peso
            de prova real na gravação.
          </li>
          <li>
            Dúvida de tamanho e frete deixa de derrubar a compra no meio do
            caminho.
          </li>
          <li>
            Loja precisa responder em segundos, porque a atenção do comprador
            agora não tem intervalo.
          </li>
        </List>

        <p>
          Para quem vende, o recado é que conteúdo e operação ficam no mesmo
          time. Criativo que mostra produto sem detalhe técnico perde espaço
          quando o assistente já resolve a pergunta objetiva. Vale cruzar com o
          que já publicamos sobre{" "}
          <a href="/noticias/tiktok-shop-boost-exposicao-video-compreavel">
            alcance extra para vídeo de compra
          </a>
          , porque as duas mudanças empurram na mesma direção.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://newsroom.tiktok.com/tiktok-unveils-ai-powered-updates-for-advertisers-driving-discovery-action-and-measurable-business-outcomes?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok Newsroom
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
