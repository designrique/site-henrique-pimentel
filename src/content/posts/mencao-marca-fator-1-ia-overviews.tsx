import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "mencao-marca-fator-1-ia-overviews",
    title: "Menção de marca é o fator nº 1 para aparecer em IA",
    teaser:
      "Estudo da Ahrefs com 75 mil marcas e 25 milhões de AI Overviews mostra: o que mais pesa na citação por IA é a menção à marca, não links.",
    category: "SEO/GEO",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Ahrefs (YouTube)",
      url: "https://www.youtube.com/watch?v=gReszNnykpg",
    },
    heroImage: {
      url: "/news/mencao-marca-fator-1-ia-overviews.webp",
      alt: "Lupa sobre tela de notebook mostrando menções de marca em resposta de IA",
    },
    seo: {
      metaTitle: "Menção de marca é o fator nº 1 para citação por IA",
      metaDescription:
        "Ahrefs analisou 75 mil marcas e 25 milhões de AI Overviews: menção de marca (0.527) supera métricas de link. IA também prefere informação mais recente.",
      metaKeywords:
        "menção de marca, AI Overviews, citação por IA, estudo Ahrefs, GEO, branded anchors",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Quem acha que backlink continua sendo o rei das respostas de IA
          precisa ver os números da Ahrefs. No maior estudo já feito sobre o
          assunto — 75 mil marcas e 25 milhões de AI Overviews — o fator nº 1
          para aparecer citado não é link: é <strong>menção de marca</strong>.
        </Lead>

        <p>
          O coeficiente de correlação das âncoras com a marca (branded
          anchors) chegou a <strong>0.527</strong>, e o volume de busca pela
          marca (branded search volume) a <strong>0.392</strong>. As métricas
          tradicionais de link ficam no meio da tabela. Traduzindo: a IA cita
          quem ela reconhece como entidade — e ela reconhece quem é falado,
          citado e procurado pelo nome.
        </p>

        <H2>O que isso muda na prática</H2>

        <List>
          <li>
            Construir marca passou a ser tarefa de SEO, não só de marketing.
            Toda menção fora do seu site alimenta o reconhecimento da entidade.
          </li>
          <li>
            Conteúdo novo tem vantagem: em 17 milhões de citações por 7
            plataformas, os assistentes de IA demonstraram preferência forte
            por informação mais recente.
          </li>
          <li>
            O nome da marca no título, na descrição e no corpo importa mais do
            que a quantidade de links apontando para a página.
          </li>
        </List>

        <p>
          A conclusão é desconfortável para quem vive de link building puro:
          link continua ajudando, mas deixou de ser o atalho. A IA quer saber
          quem você é antes de te citar. É exatamente a lógica que aplico no{" "}
          <a href="/servicos/consultoria-ia">trabalho de GEO para empresas</a>:
          primeiro a entidade, depois a extração, e só então a autoridade
          externa.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.youtube.com/watch?v=gReszNnykpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apresentação da Ahrefs sobre AI Overviews
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
