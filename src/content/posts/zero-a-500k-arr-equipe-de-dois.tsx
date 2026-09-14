import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "zero-a-500k-arr-equipe-de-dois",
    title: "De US$ 0 a US$ 500 mil de ARR em 6 meses com uma equipe de 2 pessoas",
    teaser:
      "AMA no r/B2BSaaS abriu os números de um crescimento que chamou atenção pela enxutidão. O fundador esconde o produto, mas detalhou táticas, erros e o que fez diferença.",
    category: "Vendas",
    publishedDate: "2026-09-10",
    readingTime: "3 min",
    news: true,
    source: {
      name: "r/B2BSaaS",
      url: "https://www.reddit.com/r/B2BSaaS/comments/1w6i5pf/",
    },
    heroImage: {
      url: "/news/zero-a-500k-arr-equipe-de-dois.webp",
      alt: "Duas pessoas trabalhando juntas em uma mesa com dois notebooks e luz natural",
    },
    seo: {
      metaTitle: "US$ 0 a 500 mil de ARR em 6 meses com equipe de 2",
      metaDescription:
        "AMA no r/B2BSaaS detalha táticas de um SaaS que chegou a US$ 500 mil de ARR em 6 meses com duas pessoas. Números, erros e o que funcionou.",
      metaKeywords:
        "ARR, SaaS bootstrapped, growth, equipe enxuta, B2B SaaS, AMA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Foi a maior thread de growth da janela: um AMA no r/B2BSaaS com 36
          comentários em que um fundador abriu os números de{" "}
          <strong>US$ 0 a US$ 500 mil de ARR em 6 meses</strong>, com uma
          equipe de duas pessoas.
        </Lead>
        <p>
          O fundador não divulga o produto, escolha comum para evitar cópia
          barata, mas respondeu com detalhe sobre canais, precificação e o que
          não funcionou. O valor da thread está menos no número de headline e
          mais na granularidade: poucas vezes um operador mostra o
          passo a passo com esse nível de abertura.
        </p>
        <H2>Padrões que aparecem em cases assim</H2>
        <List>
          <li>
            Foco absoluto em um ICP e um canal até o canal saturar, sem
            dispersão em cinco frentes.
          </li>
          <li>
            Equipe de 2 significa terceirizar tudo que não é produto ou
            distribuição.
          </li>
          <li>
            Velocidade de iteração sobre oferta vale mais que perfeição de
            feature.
          </li>
        </List>
        <p>
          Vale a leitura completa para quem constrói em público ou avalia
          benchmarks de crescimento enxuto. Para aplicar esse tipo de tática
          com suporte de automação,{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            fale com a gente
          </a>
          .
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://www.reddit.com/r/B2BSaaS/comments/1w6i5pf/"
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
