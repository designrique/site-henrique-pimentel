import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "cold-email-vivo-so-com-precisao",
    title: "Cold email segue vivo, mas só para quem mira: reply rate médio é 3,43%",
    teaser:
      "Relatório da Instantly mostra média de 3,43% de resposta e top 10% acima de 10%. Campeões têm menos de 80 palavras e 58% das respostas vêm do primeiro e-mail.",
    category: "Vendas",
    publishedDate: "2026-09-02",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Instantly",
      url: "https://instantly.ai/cold-email-benchmark-report-2026",
    },
    heroImage: {
      url: "/news/cold-email-vivo-so-com-precisao.webp",
      alt: "Tela de e-mail aberto com xícara de café e caderno de anotações ao lado",
    },
    seo: {
      metaTitle: "Cold email em 2026: reply rate médio de 3,43%",
      metaDescription:
        "Benchmark da Instantly: média de 3,43% de resposta em cold email, top 10% acima de 10%. E-mails campeões têm menos de 80 palavras.",
      metaKeywords: "cold email, reply rate, prospecção, benchmark 2026, vendas B2B",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Cold email não morreu, mas virou esporte de precisão. O benchmark de
          2026 da Instantly aponta reply rate médio de{" "}
          <strong>3,43%</strong>, enquanto o top 10% dos remetentes passa de{" "}
          <strong>10%</strong>. A diferença entre os dois grupos não é volume:
          é lista, mira e formato.
        </Lead>

        <p>
          Os números que separam amador de operação bem calibrada:{" "}
          <strong>58% das respostas vêm do primeiro e-mail</strong> da
          sequência, o pico de resposta acontece de terça a quarta, e os
          e-mails campeões têm <strong>menos de 80 palavras</strong>.
        </p>

        <H2>O que o top 10% faz diferente</H2>

        <List>
          <li>Lista enxuta e verificada em vez de volume comprado.</li>
          <li>Primeira linha que prova pesquisa real sobre o destinatário.</li>
          <li>Mensagem curta, uma única proposta de valor, um pedido claro.</li>
          <li>Envio concentrado nos dias de maior resposta.</li>
        </List>

        <p>
          A comunidade no r/GrowthHacking ecoa a desconfiança: o que importa é
          a taxa real com lista bem segmentada, não screenshot inflado. Se a
          sua resposta anda abaixo de 3%, o problema quase nunca é o assunto:
          é para quem você está escrevendo.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://instantly.ai/cold-email-benchmark-report-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instantly
          </a>{" "}
          e{" "}
          <a
            href="https://www.reddit.com/r/GrowthHacking/comments/1w044gv/is_cold_email_still_worth_setting_up_in_2026_or/"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/GrowthHacking
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
