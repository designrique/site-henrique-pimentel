import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "geo-b2b-vendors-citados-memoria-chatgpt",
    title: "Estudo com 360 queries: ChatGPT cita o site do próprio vendor em 36% das respostas B2B",
    teaser:
      "Teste no ChatGPT mostra sites de vendors capturando 36,1% das citações em B2B, 5,5 vezes mais que em e-commerce. E em 85% das chamadas o modelo escolheu o vendor de memória.",
    category: "SEO/GEO",
    publishedDate: "2026-09-10",
    readingTime: "4 min",
    news: true,
    source: {
      name: "r/B2BSaaS",
      url: "https://www.reddit.com/r/B2BSaaS/comments/1w3tddg/",
    },
    heroImage: {
      url: "/news/geo-b2b-vendors-citados-memoria-chatgpt.webp",
      alt: "Notebook com gráfico de distribuição de citações em busca gerada por IA ao lado de anotações",
    },
    seo: {
      metaTitle: "GEO em B2B: vendors levam 36% das citações no ChatGPT",
      metaDescription:
        "Teste com 360 queries mostra sites de vendors com 36,1% das citações em B2B e escolha de memória em 85% das chamadas. O que isso muda na sua estratégia GEO.",
      metaKeywords:
        "GEO, GEO B2B, ChatGPT, citações em IA, geração aumentada de recuperação, visibilidade em IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Um teste com <strong>360 queries no ChatGPT</strong> mediu de quem o
          modelo tira a resposta em B2B. Os sites dos próprios vendors
          receberam <strong>36,1% das citações</strong>. Em e-commerce, o mesmo
          indicador fica em 6,6%: um gap de 5,5 vezes.
        </Lead>
        <p>
          A segunda descoberta é a que muda a estratégia. Em{" "}
          <strong>85,2% das chamadas</strong> o modelo escolheu o vendor de
          memória, antes de buscar na web. A citação confirma a decisão, não a
          causa. Estar dentro do que o modelo já aprendeu sobre a categoria
          vale mais que vencer uma busca em tempo real.
        </p>
        <H2>Números que sustentam a tese</H2>
        <List>
          <li>
            Documentação técnica converte 13-14% das retrievals: conteúdo
            profundo é o que o modelo recupera quando busca.
          </li>
          <li>
            Em B2B, o vendor é a fonte dominante; em e-commerce, agregadores e
            marketplaces dividem o espaço.
          </li>
          <li>
            A implicação prática: presença consistente de marca em dados de
            treinamento e documentação acessível batem qualquer tática de
            prompt.
          </li>
        </List>
        <p>
          Na prática, isso é o que chamamos de{" "}
          <a href="/baseline-geo" target="_blank" rel="noopener noreferrer">
            baseline GEO
          </a>
          : medir como a IA cita sua categoria antes de otimizar qualquer
          página.
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://www.reddit.com/r/B2BSaaS/comments/1w3tddg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/B2BSaaS
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
