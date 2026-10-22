import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, Quote } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "tiktok-shop-criadores-pequenos-digiday",
    title: "TikTok Shop: volume de vídeos de criadores pequenos vence perfil grande",
    teaser:
      "A receita reportada pela Digiday não é achar o influenciador perfeito, e sim distribuir milhares de amostras entre criadores menores e afunilar depois.",
    category: "Vendas",
    publishedDate: "2026-10-22",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Digiday",
      url: "https://digiday.com/future-of-tv/future-of-tv-briefing-tiktok-shop-success-small-creators-more-videos",
    },
    seo: {
      metaTitle: "TikTok Shop aposta em volume de criadores pequenos",
      metaDescription:
        "Reportagem da Digiday mostra TikTok Shop funcionando com muitos vídeos de criadores menores: enviar milhares de amostras e afunilar para parcerias.",
      metaKeywords:
        "TikTok Shop, criadores, social commerce, amostras, vendas, Digiday",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A pergunta errada é qual influenciador contratar. A que aparece na
          reportagem da Digiday é quantos vídeos você consegue colocar no ar, de
          quantos perfis diferentes.
        </Lead>

        <p>
          A tese comercial do TikTok Shop, segundo o material citado pela{" "}
          <a
            href="https://digiday.com/future-of-tv/future-of-tv-briefing-tiktok-shop-success-small-creators-more-videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digiday
          </a>
          , é distribuir volume entre criadores menores em vez de concentrar
          verba em um único perfil grande. A recomendação operacional é enviar
          milhares de amostras no começo e afunilar para relações recorrentes
          com quem performa.
        </p>

        <Quote>
          more videos from smaller creators
          <span className="not-italic"> Deren Baker, CEO da Flywheel Ventures</span>
        </Quote>

        <H2>O que isso exige da operação</H2>

        <p>
          Enviar amostra em escala é logística, não marketing. Precisa de
          controle de estoque, prazo de entrega, código de rastreio e processo
          de cobrança de conteúdo. Sem isso, a estratégia morre no primeiro lote
          perdido.
        </p>

        <p>
          O ganho é estatístico: com cem vídeos, o acerto deixa de depender de
          uma aposta e passa a ser média. É a mesma lógica que já aparece nos{" "}
          <a href="/noticias">materiais sobre social commerce</a> publicados
          aqui: o criativo vencedor quase nunca é o que você escolheria a dedo.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://digiday.com/future-of-tv/future-of-tv-briefing-tiktok-shop-success-small-creators-more-videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digiday
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
