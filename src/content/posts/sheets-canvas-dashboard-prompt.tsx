import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "sheets-canvas-dashboard-prompt",
    title: "Sheets canvas: do zero a um dashboard com um prompt",
    teaser:
      "O Google transforma planilhas em dashboards interativos com um comando em linguagem natural — sem fórmula, sem script.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Google Workspace",
      url: "https://blog.google/products-and-platforms/products/workspace/sheets-canvas-for-google-sheets-spreadsheets/",
    },
    heroImage: {
      url: "/news/sheets-canvas-dashboard-prompt.webp",
      alt: "Planilha se transformando em painel de gráficos em tela de notebook",
    },
    seo: {
      metaTitle: "Sheets canvas: dashboard com um prompt no Google Sheets",
      metaDescription:
        "Sheets canvas do Google transforma planilhas em dashboards interativos com um prompt. Análise de dados sem fórmula para pequenas empresas.",
      metaKeywords:
        "Sheets canvas, Google Sheets, dashboard IA, planilhas com IA, análise de dados",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Google lançou o Sheets canvas: a partir de uma planilha comum,
          um prompt transforma os dados em um dashboard interativo. Sem
          fórmula, sem script, sem arrastar gráfico — a IA monta o painel.
        </Lead>

        <p>
          A novidade ataca um gargalo real das pequenas empresas: o dado
          existe, mas a visualização não. Quem já tentou montar um relatório
          mensal no Sheets sabe o custo — horas entre fórmulas, gráficos e
          formatação que somem no próximo mês. O canvas automatiza a
          apresentação e deixa o tempo livre para a leitura dos números.
        </p>

        <H2>O que dá para fazer</H2>

        <List>
          <li>
            <strong>Painéis sob demanda:</strong> peça o dashboard por
            período, métrica ou unidade e a IA remonta a visualização.
          </li>
          <li>
            <strong>Perguntas em linguagem natural:</strong> em vez de
            procurar a fórmula certa, escreve-se a pergunta — e o gráfico
            responde.
          </li>
          <li>
            <strong>Interatividade:</strong> filtros e comparações direto no
            painel, úteis para reunião com sócios ou cliente.
          </li>
        </List>

        <p>
          Ainda é cedo para jogar fora o Excel avançado — quem vive de
          modelagem complexa continua precisando de controle fino. Mas para
          o uso cotidiano de marketing, vendas e operação, o canvas elimina a
          desculpa de "não sei fazer relatório". E relatório bom ainda é o
          que move decisão — inclusive a decisão de{" "}
          <a href="/servicos/consultoria-ia">
            onde aplicar IA no seu negócio
          </a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://blog.google/products-and-platforms/products/workspace/sheets-canvas-for-google-sheets-spreadsheets/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Workspace Blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
