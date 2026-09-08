import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "precos-influencia-bolha-estourando",
    title: "Marcas questionam preço de influenciador: a bolha começa a estourar em câmera lenta",
    teaser:
      "Levantamento com mil marcas aponta que metade precifica mal o fee de criadores e 40% acha que pagou caro demais. Emma Chamberlain resume: a bolha está estourando em câmera lenta.",
    category: "Social Media",
    publishedDate: "2026-09-08",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Digiday",
      url: "https://digiday.com/future-of-tv/future-of-tv-briefing-how-strong-are-the-fundamentals-of-the-creator-economy-really/",
    },
    heroImage: {
      url: "/news/precos-influencia-bolha-estourando.webp",
      alt: "Balão publicitário cheio de notas de dinheiro começando a murchar sobre uma mesa de reunião com laptops",
    },
    seo: {
      metaTitle: "Marcas acham influenciador caro e a bolha estoura em câmera lenta",
      metaDescription:
        "Mil marcas pesquisadas: metade precifica mal o fee de criadores e 40% acha que pagou caro. Emma Chamberlain fala em bolha estourando em câmera lenta.",
      metaKeywords: "marketing de influência, influenciadores, precificação, fee, criadores, economia criadora",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O marketing de influência está encarando o momento de prestar contas.
          Um levantamento da Billion Dollar Boy com mil marcas e times de
          procurement mostra uma indústria que precifica mal o trabalho de
          criador e desconfia do que pagou.
        </Lead>

        <p>
          Os números são duros: metade das marcas diz precificar errado o fee
          de criadores e 40% acredita que pagou caro demais. Emma Chamberlain,
          em entrevista ao podcast de Emma Grede repercutida pela Digiday,
          resumiu o clima: &ldquo;A bolha parece estar estourando. Mas ainda não
          estourou de vez. É como se estivesse estourando em câmera
          lenta&rdquo;. A economia criadora segue relevante, estimada em cerca
          de US$ 43,9 bilhões em 2026.
        </p>

        <H2>O que isso sinaliza</H2>

        <List>
          <li>Precificação de fee é o ponto cego mais citado pelas marcas.</li>
          <li>40% acha que pagou caro, sinal de bolha ou de má negociação.</li>
          <li>Plataformas apertam a régua com IA e transparência de engajamento.</li>
          <li>O recado: provar retorno e engajamento real virou obrigação.</li>
        </List>

        <p>
          A leitura honesta: não é hora de surfar volume de seguidor, é hora de
          mostrar conversão e audiência engajada de verdade. Criadores e agências
          que entregam prova de resultado saem na frente quando o procurement
          começa a questionar cada linha do fee.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://digiday.com/future-of-tv/future-of-tv-briefing-how-strong-are-the-fundamentals-of-the-creator-economy-really/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digiday
          </a>
          . Acompanhe o tema na{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            área de conteúdo
          </a>{" "}
          do site.
        </p>
      </PostProse>
    );
  },
};

export default post;
