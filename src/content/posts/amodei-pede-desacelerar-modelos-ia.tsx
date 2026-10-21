import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "amodei-pede-desacelerar-modelos-ia",
    title: "Dario Amodei pede freio na corrida: IA avança mais rápido que o entendimento",
    teaser:
      "O CEO da Anthropic publicou um ensaio de 3.800 palavras pedindo que empresas de IA desacelerem. Para ele, os modelos estão evoluindo mais rápido do que engenheiros conseguem entender.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Bloomberg",
      url: "https://www.bloomberg.com/news/articles/2026-09-12/anthropic-ceo-says-it-s-time-to-slow-pace-of-improving-ai-models",
    },
    heroImage: {
      url: "/news/amodei-pede-desacelerar-modelos-ia.webp",
      alt: "Executivo de tecnologia em escritório de vidro, pausando com caneta na mão, relógio de parede ao fundo",
    },
    seo: {
      metaTitle: "Dario Amodei pede desaceleração no avanço dos modelos de IA",
      metaDescription:
        "CEO da Anthropic publica ensaio de 3.800 palavras pedindo freio na corrida de IA. Modelos avançam mais rápido do que os engenheiros conseguem entender, diz ele.",
      metaKeywords:
        "Dario Amodei, Anthropic, desaceleração IA, segurança em IA, corrida de modelos",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Dario Amodei, CEO da Anthropic, publicou no dia 12 de setembro um
          ensaio de <strong>3.800 palavras</strong> pedindo que as empresas de
          IA desacelerem o ritmo de melhoria dos modelos. O argumento central:
          a inteligência artificial está impulsionando avanços mais rápido do
          que os engenheiros conseguem acompanhar.
        </Lead>
        <p>
          Em entrevista ao CBS Sunday Morning, Amodei foi direto: os
          desenvolvimentos atuais são um &ldquo;sinal de alerta&rdquo; e
          &ldquo;precisamos desacelerar&rdquo;. Ele admite que não imaginava
          que o progresso fosse ser tão veloz.
        </p>
        <H2>Por que isso importa agora</H2>
        <List>
          <li>
            O pedido vem do CEO de uma das três empresas líderes, não de um
            crítico externo.
          </li>
          <li>
            Amodei sugere que os próprios modelos ajudam a acelerar o
            desenvolvimento, criando um ciclo difícil de controlar.
          </li>
          <li>
            A fala contraria o discurso dominante da corrida por modelos cada
            vez maiores e mais capazes.
          </li>
        </List>
        <p>
          Para empresas que usam IA no dia a dia, o recado prático é menos
          dramático do que parece: nem tudo que é mais novo é melhor para o seu
          processo. Modelos estáveis, bem documentados e com custo previsível
          muitas vezes entregam mais valor que a última versão. É exatamente o
          tipo de avaliação que fazemos nos nossos{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            artigos sobre adoção de IA
          </a>
          .
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://www.bloomberg.com/news/articles/2026-09-12/anthropic-ceo-says-it-s-time-to-slow-pace-of-improving-ai-models"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bloomberg
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
