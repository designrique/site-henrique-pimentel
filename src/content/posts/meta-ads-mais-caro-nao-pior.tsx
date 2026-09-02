import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "meta-ads-mais-caro-nao-pior",
    title: "Meta Ads ficou mais caro, não pior: CPM sobe 13% e CTR compensa",
    teaser:
      "CPM subiu 13,2% para US$ 15,06, mas o CTR cresceu 16% e o CPA ficou quase estável em US$ 38,99. Benchmarks da Triple Whale com 40 mil marcas.",
    category: "Marketing Digital",
    publishedDate: "2026-09-02",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Triple Whale",
      url: "https://www.triplewhale.com/blog/facebook-ads-benchmarks",
    },
    heroImage: {
      url: "/news/meta-ads-mais-caro-nao-pior.webp",
      alt: "Notebook com painel de campanhas de anúncios e gráfico de custo por aquisição",
    },
    seo: {
      metaTitle: "Meta Ads mais caro, não pior: CPM +13% e CTR +16%",
      metaDescription:
        "Benchmarks de 40 mil marcas mostram CPM a US$ 15,06 e CPA estável em US$ 38,99. Onde o custo de aquisição caiu de verdade no Meta Ads.",
      metaKeywords: "Meta Ads, Facebook Ads, CPM, CPA, ROAS, benchmarks 2026",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Quem reclama que o Meta Ads piorou está lendo a métrica errada.
          Benchmarks da Triple Whale com 40 mil marcas em agosto de 2026
          mostram um cenário de inflação com compensação: CPM em{" "}
          <strong>US$ 15,06 (+13,2% YoY)</strong>, mas CTR de{" "}
          <strong>2,39% (+16%)</strong> e CPA quase estável em{" "}
          <strong>US$ 38,99 (+3,1%)</strong>.
        </Lead>

        <p>
          Em outras palavras: o leilão encareceu, porém o anúncio médio ficou
          mais eficiente em gerar clique. O ROAS mediano de 1,88 confirma que
          a margem segue apertada, o que obriga criativo e oferta a trabalharem
          mais, não só o orçamento.
        </p>

        <H2>Onde o CPA caiu</H2>

        <List>
          <li>E-learning: queda de 5,7% no custo por aquisição.</li>
          <li>Segmentação e criativo respondem mais que aumento de verba.</li>
          <li>Formatos com CTR acima da média compensam o CPM mais alto.</li>
        </List>

        <p>
          A leitura prática para quem opera campanhas: acompanhe CPA e ROAS em
          vez de CPM isolado. Um leilão mais caro com público clicando mais
          pode custar o mesmo por cliente no fim da conta.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.triplewhale.com/blog/facebook-ads-benchmarks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Triple Whale
          </a>
          . Contexto de funil completo no{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
