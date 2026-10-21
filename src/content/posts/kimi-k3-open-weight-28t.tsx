import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "kimi-k3-open-weight-28t",
    title: "Moonshot AI libera Kimi K3 open-weight com 2,8 trilhões de parâmetros",
    teaser:
      "A chinesa Moonshot AI abriu os pesos do Kimi K3, um dos maiores modelos open-weight já lançados. O que isso muda na corrida da IA aberta.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "AI Apps Blog",
      url: "https://www.aiapps.com/blog/ai-news-august-breakthroughs-launches-trends-cant-miss/",
    },
    heroImage: {
      url: "/news/kimi-k3-open-weight-28t.webp",
      alt: "Baú digital aberto com código-fonte saindo de uma tela de servidor",
    },
    seo: {
      metaTitle: "Kimi K3 open-weight: 2,8T de parâmetros liberados",
      metaDescription:
        "Moonshot AI liberou o Kimi K3 open-weight com 2,8 trilhões de parâmetros — um dos maiores modelos de código aberto já lançados.",
      metaKeywords:
        "Kimi K3, Moonshot AI, open-weight, modelo aberto, 2,8 trilhões de parâmetros, IA open source",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A Moonshot AI liberou os pesos do Kimi K3: um modelo open-weight com
          2,8 trilhões de parâmetros. É um dos maiores lançamentos de código
          aberto da história da IA — e um novo capítulo na briga entre modelos
          abertos e fechados.
        </Lead>

        <p>
          A escala impressiona, mas o número que mais importa é o "open".
          Modelos com pesos abertos podem ser baixados, adaptados e rodados na
          própria infraestrutura — sem depender de API de terceiros. Para
          empresas com requisitos de privacidade ou custo, isso muda a
          equação inteira.
        </p>

        <H2>O que o Kimi K3 significa na prática</H2>

        <List>
          <li>
            <strong>Alternativa real a APIs fechadas:</strong> rodar um modelo
            dessa escala internamente deixa de ser privilégio de big tech.
          </li>
          <li>
            <strong>Pressão sobre preços:</strong> cada lançamento aberto
            relevante empurra os provedores de API a reduzir tarifas — como
            o corte de 80% da OpenAI no GPT-5.6 Luna.
          </li>
          <li>
            <strong>Customização profunda:</strong> com os pesos em mãos,
            fine-tuning e ajuste de comportamento viram possibilidade real
            para times técnicos.
          </li>
        </List>

        <p>
          Claro que abrir pesos não significa rodar de graça: um modelo de
          2,8T exige hardware sério. A maioria das empresas não vai hospedar
          o K3 — mas vai se beneficiar do efeito que ele causa no mercado de
          APIs. A disputa entre aberto e fechado continua, e o consumidor
          final sai ganhando dos dois lados.
        </p>

        <p>
          Para quem quer entender como escolher entre modelo aberto e API —
          e o que isso significa para o negócio —, o{" "}
          <a href="/servicos/consultoria-ia">
            trabalho de consultoria em IA
          </a>{" "}
          ajuda a traduzir essa decisão técnica em estratégia.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.aiapps.com/blog/ai-news-august-breakthroughs-launches-trends-cant-miss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI Apps Blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
