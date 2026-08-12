import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "social-search-ultrapassa-google-2026",
    title:
      "Social search ultrapassa o Google na descoberta de produtos — o que isso muda",
    teaser:
      "TikTok, Instagram e YouTube já respondem por mais de 60% da descoberta de produtos, contra 34,5% do Google. A virada de 2026 e o que fazer com ela.",
    category: "Marketing Digital",
    publishedDate: "2026-08-12",
    readingTime: "4 min",
    news: true,
    source: {
      name: "Sprout Social",
      url: "https://sproutsocial.com/insights/social-media-statistics/",
    },
    heroImage: {
      url: "/news/hero-workspace-recife.webp",
      alt: "Espaço de trabalho em Recife, luz natural, com computadores — manchete do portal de notícias",
    },
    seo: {
      metaTitle:
        "Social search ultrapassa o Google em descoberta de produtos | Henrique Pimentel",
      metaDescription:
        "TikTok, Instagram e YouTube já respondem por 60%+ da descoberta de produtos, contra 34,5% do Google. A virada de 2026 no marketing digital e o que fazer.",
      metaKeywords:
        "social search, descoberta de produtos, TikTok, Instagram, marketing digital 2026, SEO social, Sprout Social",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A pergunta &ldquo;onde o consumidor descobre produto
          novo&rdquo; trocou de resposta em 2026. As redes sociais
          passaram na frente do Google — e não por pouco. TikTok,
          Instagram e YouTube respondem hoje por mais de 60% da
          descoberta de produtos, contra 34,5% do buscador, segundo o
          relatório anual da{" "}
          <a
            href="https://sproutsocial.com/insights/social-media-statistics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sprout Social
          </a>
          .
        </Lead>

        <p>
          O dado mais simbólico da pesquisa: 52% dos usuários preferem
          a busca social a chatbots de IA quando o assunto é conteúdo
          gerado por humanos. Ou seja — a descoberta migrou para onde a
          conversa acontece, e não para onde o índice é montado.
        </p>

        <H2>O que os números mostram</H2>

        <List>
          <li>
            <strong>Descoberta:</strong> social search (TikTok,
            Instagram, YouTube) = 60%+ dos casos; Google = 34,5%.
          </li>
          <li>
            <strong>Busca social como buscador principal:</strong> 24%
            dos usuários usam redes sociais como buscador principal —
            Reddit é o domínio nº 1 citado pelo Perplexity (4%), nº 2
            no SearchGPT (13%) e nº 3 no Google AI Mode (9%).
          </li>
          <li>
            <strong>Formato com maior ROI:</strong> vídeo curto, com
            41% — e 85% das pessoas dizem que um vídeo já as convenceu
            a comprar.
          </li>
          <li>
            <strong>Conteúdo humano vence AI slop:</strong> 55% das
            audiências se sentem desconfortáveis com conteúdo de IA;
            conteúdo gerado por humanos é a prioridade nº 1.
          </li>
          <li>
            <strong>Consistência com ponto de vista &gt; frequência:</strong>{" "}
            64% dos pequenos negócios nos EUA citam o social como
            principal driver de tráfego, acima da busca orgânica (52%).
          </li>
        </List>

        <H2>O que muda na prática</H2>

        <p>
          Para quem vende, a implicação é direta: estar invisível no
          social em 2026 é o novo estar invisível no Google em 2015.
          A busca nas plataformas funciona com lógica própria — captions
          com keywords, bios otimizadas, hashtags e conteúdo searchável
          substituem o velho jogo de backlinks.
        </p>

        <p>
          E a régua para medir presença também mudou: 73% dos
          consumidores trocam de marca se ela não responde no social.
          Não responder é, literalmente, perder cliente.
        </p>

        <H2>A leitura do Henrique</H2>

        <p>
          A conexão com GEO é inevitável: a descoberta está migrando
          para motores que respondem com voz de autoridade — seja a IA
          de busca, seja o perfil da marca que a IA lê. O trabalho de
          posicionamento agora tem três frentes: o Google, os motores
          generativos e o social search. Quem otimiza só o primeiro está
          otimizando um terço do funil.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://sproutsocial.com/insights/social-media-statistics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sprout Social — Social Media Statistics 2026
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
