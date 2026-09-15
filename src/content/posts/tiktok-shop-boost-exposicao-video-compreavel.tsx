import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "tiktok-shop-boost-exposicao-video-compreavel",
    title: "TikTok Shop dá até 150 milhões de views extras para vídeo de compra",
    teaser:
      "Os 100 criadores mais bem colocados escolhem um vídeo shoppable publicado entre 4 e 9 de setembro e recebem exposição adicional de até 150 milhões no feed.",
    category: "Social Media",
    publishedDate: "2026-09-15",
    readingTime: "2 min",
    news: true,
    source: {
      name: "TikTok Shop",
      url: "https://www.tiktok.com/topic/tiktok-shop-august-policy-update",
    },
    heroImage: {
      url: "/news/tiktok-shop-boost-exposicao-video-compreavel.webp",
      alt: "Ring light e celular em tripé apontados para uma mesa pequena com pacotes de papelão e uma sacola de compras",
    },
    seo: {
      metaTitle: "TikTok Shop dá 150 milhões de views extras para vídeo shoppable",
      metaDescription:
        "TikTok Shop oferece até 150 milhões de exposição adicional para vídeo shoppable dos top 100 criadores elegíveis. Entenda a regra da política de agosto.",
      metaKeywords: "TikTok Shop, vídeo shoppable, exposição, criadores, e-commerce",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O TikTok Shop abriu um empurrão de alcance que, em volume, não tem
          equivalente em outra plataforma: até 150 milhões de exposição extra
          para um único vídeo comprável.
        </Lead>

        <p>
          A regra está na atualização de política de agosto. Os 100 criadores
          mais bem colocados no programa escolhem um vídeo shoppable publicado
          entre 4 e 9 de setembro e recebem a exposição adicional no feed. Não é
          sorteio nem teste A/B: é boost discricionário, reservado a quem já
          está no topo do ranking.
        </p>

        <H2>Como funciona a seleção</H2>

        <List>
          <li>Apenas os 100 primeiros criadores elegíveis entram na rodada.</li>
          <li>
            O vídeo precisa ser shoppable e ter sido postado na janela de 4 a 9
            de setembro.
          </li>
          <li>O empurrão chega a 150.000.000 de exposição adicional.</li>
          <li>
            Quem já tem volume alto recebe o boost; quem está começando segue
            fora.
          </li>
        </List>

        <p>
          Esse desenho diz muito sobre a estratégia da plataforma. Em vez de
          distribuir alcance para milhares de criadores pequenos, o TikTok
          concentra o boost em contas que já convertem. É a lógica de marketplace
          aplicada à atenção: garante estoque de vídeo que vende em vez de
          apostar na cauda longa.
        </p>

        <p>
          Para marca que vende no TikTok Shop, a consequência prática é simples.
          Trabalhar com criador que já está no topo da política vale mais do que
          espalhar amostra grátis em dezenas de perfis médios. O dinheiro segue
          para quem já provou conversão.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.tiktok.com/topic/tiktok-shop-august-policy-update"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok Shop
          </a>
          . Veja como estruturar operação de conteúdo e venda com a{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            consultoria de IA
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
