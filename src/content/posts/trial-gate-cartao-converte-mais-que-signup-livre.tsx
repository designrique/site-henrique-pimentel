import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "trial-gate-cartao-converte-mais-que-signup-livre",
    title: "Trial pedindo cartão vence A/B test: menos signups, muito mais conversão a pago",
    teaser:
      "Ferramenta LinkedIn com US$ 1.500 de MRR comparou os dois formatos. O gate de cartão gerou menos cadastros, mas conversão a pago muito superior. Quando filtrar vale mais que acumular.",
    category: "Vendas",
    publishedDate: "2026-09-10",
    readingTime: "3 min",
    news: true,
    source: {
      name: "r/B2BSaaS",
      url: "https://www.reddit.com/r/B2BSaaS/comments/1w0ke3v/",
    },
    heroImage: {
      url: "/news/trial-gate-cartao-converte-mais-que-signup-livre.webp",
      alt: "Cartão de crédito apoiado ao lado de teclado e notebook com tela de checkout desfocada",
    },
    seo: {
      metaTitle: "Trial com cartão: o teste A/B que favorece a cobrança",
      metaDescription:
        "Comparação real entre trial com e sem gate de cartão mostra menos signups e mais conversão a pago. Quando pedir o cartão no trial faz sentido.",
      metaKeywords:
        "trial com cartão, conversão a pago, SaaS, A/B test, MRR, funil de assinatura",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Uma ferramenta de LinkedIn, construída em 4 meses de vibe coding e
          chegando a <strong>US$ 1.500 de MRR</strong>, rodou o teste que todo
          SaaS adia: trial com gate de cartão contra signup livre. O gate de
          cartão ganhou em receita.
        </Lead>
        <p>
          O formato sem cartão trouxe mais cadastros e mais vanity. O formato
          com cartão filtrou quem tem intenção real de pagar, e a conversão a
          pago ficou muito à frente. O resultado bate com a lógica de
          qualificação: quem digita dados de pagamento no dia zero já decidiu
          avaliar valor, não só brincar com a interface.
        </p>
        <H2>Quando aplicar</H2>
        <List>
          <li>
            Produto B2B com ticket que justifica fricção: gate de cartão
            qualifica e reduz chargeback.
          </li>
          <li>
            Ferramenta de consumidor ou plano freemium: signup livre segue
            sendo a escolha certa para volume.
          </li>
          <li>
            Meio-termo: trial livre com cartão pedido apenas no upgrade, para
            não matar o topo do funil.
          </li>
        </List>
        <p>
          A decisão certa depende do ticket e do ciclo de venda, não de
          doutrina. É o tipo de trade-off que ajustamos em{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            projetos de consultoria
          </a>
          .
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://www.reddit.com/r/B2BSaaS/comments/1w0ke3v/"
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
