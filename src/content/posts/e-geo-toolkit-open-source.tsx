import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "e-geo-toolkit-open-source",
    title: "E-GEO: toolkit open-source para ranquear em motores de IA",
    teaser:
      "Nasceu o E-GEO, ferramenta de linha de comando que analisa, simula ranking e gera JSON-LD para ChatGPT, Perplexity, Gemini e Claude.",
    category: "SEO/GEO",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "GitHub (MarsX-dev)",
      url: "https://github.com/MarsX-dev/devhunt/pull/237",
    },
    heroImage: {
      url: "/news/e-geo-toolkit-open-source.webp",
      alt: "Terminal de desenvolvedor com blocos de código e JSON-LD na tela",
    },
    seo: {
      metaTitle: "E-GEO: toolkit open-source de otimização para IA",
      metaDescription:
        "E-GEO é um toolkit open-source de GEO/AEO: CLI Python + skills de Claude Code para analisar, simular ranking, reescrever e gerar JSON-LD para IA.",
      metaKeywords:
        "E-GEO, GEO open source, AEO, otimização para IA, JSON-LD, Claude Code, ferramenta GEO",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A caixa de ferramentas do GEO ganhou um reforço open-source. O{" "}
          <strong>E-GEO</strong> é um toolkit que roda no terminal: CLI em
          Python + skills para Claude Code, montado para quem quer trabalhar
          otimização para motores de IA sem depender de ferramenta proprietária.
        </Lead>

        <p>
          O fluxo é direto: <strong>analisar → simular ranking → reescrever →
          gerar JSON-LD</strong>. Na prática, a ferramenta verifica como sua
          página está posicionada nas respostas de IA, sugere ajustes de
          conteúdo e emite a marcação estruturada pronta para ChatGPT,
          Perplexity, Gemini e Claude. O projeto está em discussão no
          repositório do MarsX-dev no GitHub.
        </p>

        <H2>Por que isso importa</H2>

        <List>
          <li>
            <strong>Barreira de entrada caiu:</strong> antes, medir citação em
            IA era trabalho manual e caro. Com o E-GEO, qualquer time com um
            dev consegue montar o ciclo.
          </li>
          <li>
            <strong>O fluxo vira rotina:</strong> analisar, ajustar, medir de
            novo — a mesma disciplina do SEO clássico, agora aplicada às
            respostas generativas.
          </li>
          <li>
            <strong>JSON-LD automatizado:</strong> a parte mais chata da
            otimização (marcação estruturada) sai gerada pela própria
            ferramenta.
          </li>
        </List>

        <p>
          Vale o registro honesto: ferramenta open-source ainda não substitui
          estratégia. O E-GEO automatiza a medição e a geração de schema, mas
          a decisão de <em>qual</em> entidade posicionar, <em>quais</em>{" "}
          perguntas responder e <em>como</em> construir autoridade continua
          sendo humana. É uma boa adição ao fluxo — e mais uma prova de que o
          ecossistema de GEO está amadurecendo rápido, como discuto no{" "}
          <a href="/blog/framework-geo-extracao-ia">
            framework de extração por IA
          </a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://github.com/MarsX-dev/devhunt/pull/237"
            target="_blank"
            rel="noopener noreferrer"
          >
            E-GEO no GitHub (MarsX-dev)
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
