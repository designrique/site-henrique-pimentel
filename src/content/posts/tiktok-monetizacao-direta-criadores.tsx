import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "tiktok-monetizacao-direta-criadores",
    title: "TikTok amplia monetização: inscrições, gorjetas e séries mais caras",
    teaser:
      "Inscrições em três faixas, gorjetas in-feed com 80% para o criador e Series de até US$ 189,99. É a maior expansão de receita direta desde o Creativity Program de 2023.",
    category: "Social Media",
    publishedDate: "2026-09-08",
    readingTime: "3 min",
    news: true,
    source: {
      name: "TikTok Calculator",
      url: "https://tiktokcalculator.net/blog/new-tiktok-monetization-features-2026",
    },
    heroImage: {
      url: "/news/tiktok-monetizacao-direta-criadores.webp",
      alt: "Tela de aplicativo de vídeo com ícones de moeda e cartão de assinatura em um celular sobre uma mesa",
    },
    seo: {
      metaTitle: "TikTok amplia monetização direta para criadores em 2026",
      metaDescription:
        "Inscrições em três faixas, gorjetas in-feed e Series de até US$ 189,99. A maior expansão de receita direta do TikTok desde o Creativity Program.",
      metaKeywords: "TikTok, monetização, inscrições, gorjetas, Series, criadores, receita",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O TikTok acelerou a máquina de receita direta para criador. A
          expansão anunciada inclui inscrições em três faixas, gorjeta in-feed
          e Series com teto bem mais alto, num movimento que muitos leem como a
          maior abertura de monetização desde o Creativity Program.
        </Lead>

        <p>
          As inscrições passam a ter três níveis de US$ 0,99, US$ 2,99 e US$
          4,99 por mês, dando ao criador preço de entrada e opções premium. As
          gorjetas in-feed vão de US$ 1 a US$ 25, com o criador ficando com 80%.
          Já as Series chegam a US$ 189,99, espaço para conteúdo de acesso pago
          mais caro e seleto.
        </p>

        <H2>O que isso significa</H2>

        <List>
          <li>Três faixas de inscrição para precificar níveis de benefício.</li>
          <li>Gorjeta in-feed dá receita rápida, fora do programa de anúncios.</li>
          <li>Series até US$ 189,99 abrem espaço para pacotes premium.</li>
          <li>O criador fica com a maior parte de cada transação direta.</li>
        </List>

        <p>
          A leitura prática: o TikTok quer que o criador sustente a audiência
          pela comunidade, não só por volume de view. Para quem já tem nicho
          engajado, vale modelar o que entra em cada faixa e o que fica como
          conteúdo pago de valor alto.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://tiktokcalculator.net/blog/new-tiktok-monetization-features-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok Calculator
          </a>
          . Quer montar essa estratégia? Veja a{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            consultoria de IA
          </a>{" "}
          do site.
        </p>
      </PostProse>
    );
  },
};

export default post;
