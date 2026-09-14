import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "1500-marcas-d2c-mvp-8-horas-outcome-over-product",
    title: "MVP em 8 horas, 1.500 marcas em 3 meses: o fundador que só falava de resultado",
    teaser:
      "Ferramenta para marcas D2C chegou a mais de 1.500 clientes na Índia e nos EUA validando falando de resultado, nunca de produto, e fazendo cold call para negócios do Shark Tank Índia.",
    category: "Vendas",
    publishedDate: "2026-09-10",
    readingTime: "3 min",
    news: true,
    source: {
      name: "r/B2BSaaS",
      url: "https://www.reddit.com/r/B2BSaaS/comments/1w4c1r1/",
    },
    heroImage: {
      url: "/news/1500-marcas-d2c-mvp-8-horas-outcome-over-product.webp",
      alt: "Empreendedor em call de vendas com caderno de anotações ao lado do notebook, luz natural",
    },
    seo: {
      metaTitle: "MVP em 8 horas e 1.500 marcas D2C em 3 meses",
      metaDescription:
        "Case de validação falando de resultado em vez de produto: MVP construído em 8 horas, primeiros clientes pagantes em 48h e 1.500 marcas em menos de 3 meses.",
      metaKeywords:
        "MVP, vendas D2C, validação de produto, cold call, SaaS, growth",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Um MVP construído em <strong>8 horas</strong> virou plataforma com
          mais de <strong>1.500 marcas D2C</strong> na Índia e nos EUA em menos
          de 3 meses. A tática de validação, nas palavras do fundador
          u/Lonely_Ad_8463: &ldquo;eu não falava da ferramenta, falava apenas
          dos resultados&rdquo;.
        </Lead>
        <p>
          O detalhe que separa esse case dos habituais: primeiros clientes
          pagantes em 48 horas, antes de qualquer refinamento de produto. A
          prospecção foi direta, incluindo cold call para negócios dos
          investidores do Shark Tank Índia. Vender o resultado antes de ter o
          produto redondo forçou o que importa: prova de demanda com dinheiro
          real.
        </p>
        <H2>O playbook em três movimentos</H2>
        <List>
          <li>
            Construa o mínimo que entrega o resultado, não o mínimo que
            impressiona.
          </li>
          <li>
            Pitch pelo outcome do cliente: número, prazo, dor resolvida. A
            ferramenta é detalhe.
          </li>
          <li>
            Prospecção sem medo de fricção: cold call direto para quem tem
            problema e orçamento.
          </li>
        </List>
        <p>
          Para agências e consultores, a lição é a mesma do{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            nosso ponto sobre venda de resultado
          </a>
          : quem compra quer o desfecho, não a stack.
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://www.reddit.com/r/B2BSaaS/comments/1w4c1r1/"
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
