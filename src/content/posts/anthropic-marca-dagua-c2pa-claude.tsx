import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "anthropic-marca-dagua-c2pa-claude",
    title: "Anthropic vai marcar textos e imagens do Claude com C2PA",
    teaser:
      "Marca d'água invisível em metadados assinados deve entrar no Claude para cumprir o AI Act europeu — e muda o jogo do conteúdo gerado por IA.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Anthropic",
      url: "https://www.anthropic.com/news/claude-text-watermark",
    },
    heroImage: {
      url: "/news/anthropic-marca-dagua-c2pa-claude.webp",
      alt: "Documento digital com selo de autenticidade em tela de notebook",
    },
    seo: {
      metaTitle: "Claude ganha marca d'água C2PA: conteúdo IA identificável",
      metaDescription:
        "Anthropic vai embutir marca d'água invisível (metadados C2PA assinados) em texto e imagem gerados pelo Claude, em linha com o EU AI Act.",
      metaKeywords:
        "marca d'água IA, C2PA, Claude, Anthropic, EU AI Act, conteúdo gerado por IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A Anthropic anunciou que vai embutir marca d'água invisível em texto
          e imagens gerados pelo Claude. A implementação usa metadados C2PA
          assinados — o mesmo padrão da indústria de fotografia — para cumprir
          as exigências do EU AI Act.
        </Lead>

        <p>
          O detalhe que importa: a marca d'água fica nos metadados, não no
          conteúdo visível. Texto e imagem continuam iguais para quem lê,
          mas qualquer ferramenta compatível com C2PA consegue verificar a
          origem. É transparência que não degrada a experiência.
        </p>

        <H2>O que muda para quem produz conteúdo</H2>

        <List>
          <li>
            <strong>Rastreabilidade vira padrão:</strong> conteúdo gerado por
            IA passa a carregar prova de origem, sem depender de autorrelato.
          </li>
          <li>
            <strong>Regulação vira vantagem:</strong> com a UE exigindo
            rótulos, quem usa IA de forma declarada sai na frente de quem
            esconde.
          </li>
          <li>
            <strong>Autenticidade ganha valor:</strong> em um ecossistema em
            que tudo pode ser IA, o conteúdo humano identificável fica mais
            raro — e mais valioso.
          </li>
        </List>

        <p>
          A medida chega semanas depois de a União Europeia avançar com regras
          de rotulagem de conteúdo realista gerado por IA. A Anthropic não
          esperou a regulamentação para agir — e isso diz muito sobre a
          direção do mercado: o custo do conteúdo de IA "fantasma" está
          subindo, enquanto o conteúdo com autoria clara ganha peso.
        </p>

        <p>
          Para marcas e profissionais, a recomendação é antecipar: documentar
          processos, sinalizar uso de IA e investir em conteúdo com opinião e
          dado próprio — o que os motores de IA preferem citar de qualquer
          forma. É a mesma lógica que aplico em{" "}
          <a href="/servicos/consultoria-ia">
            projetos de IA aplicada para empresas
          </a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.anthropic.com/news/claude-text-watermark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anthropic
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
