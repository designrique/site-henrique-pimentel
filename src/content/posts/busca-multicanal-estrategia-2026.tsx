import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "busca-multicanal-estrategia-2026",
    title: "Busca multicanal é a estratégia nº 1: TikTok, Google, Reddit e ChatGPT",
    teaser:
      "O cliente descobre no TikTok, pesquisa no Google, verifica no Reddit e pergunta ao ChatGPT. Neil Patel resume: ganhar em um único canal deixou de ser estratégia.",
    category: "Marketing Digital",
    publishedDate: "2026-09-02",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Neil Patel (YouTube)",
      url: "https://www.youtube.com/watch?v=UlfniLzuwa0",
    },
    heroImage: {
      url: "/news/busca-multicanal-estrategia-2026.webp",
      alt: "Quatro telas sobre a mesa mostrando redes sociais, busca e assistente de IA",
    },
    seo: {
      metaTitle: "Busca multicanal: a estratégia nº 1 de marketing em 2026",
      metaDescription:
        "Cliente descobre no TikTok, pesquisa no Google, verifica no Reddit e pergunta ao ChatGPT. Por que rankear em um só canal deixou de funcionar.",
      metaKeywords: "busca multicanal, social search, TikTok, ChatGPT, estratégia de marketing 2026",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A jornada de compra virou um caminho com várias paradas: descoberta
          no TikTok, pesquisa no Google, validação no Reddit e a pergunta final
          para o ChatGPT. Neil Patel, em vídeo com 36,9 mil views em três
          semanas, cravou: a estratégia vencedora deixou de ser sobre rankear
          em um único lugar.
        </Lead>

        <p>
          O dado que sustenta a tese: cerca de <strong>1 em cada 5 pessoas</strong>{" "}
          já faz busca direto nas redes sociais, sem passar pelo Google. Para
          quem vende serviço ou produto, isso significa que a presença precisa
          estar montada em camadas, cada uma respondendo por um momento da
          decisão.
        </p>

        <H2>Como fica a distribuição do esforço</H2>

        <List>
          <li>Descoberta: vídeo curto no TikTok, Reels e Shorts.</li>
          <li>Comparação: páginas bem posicionadas no Google, com prova social.</li>
          <li>Validação: menções reais no Reddit e avaliações verificáveis.</li>
          <li>Decisão: conteúdo citável por ChatGPT e assistentes de IA.</li>
        </List>

        <p>
          O erro comum é tratar cada canal como um silo com meta própria. O
          certo é encadear: o vídeo que descobre gera a busca, a busca encontra
          o site, o site alimenta a citação na IA. Quem só otimiza uma ponta
          desse funil perde o cliente em outra.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.youtube.com/watch?v=UlfniLzuwa0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neil Patel no YouTube
          </a>
          . Veja também as{" "}
          <a href="/noticias" target="_blank" rel="noopener noreferrer">
            notícias de marketing
          </a>{" "}
          do site.
        </p>
      </PostProse>
    );
  },
};

export default post;
