import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "founder-story-ia-engajamento",
    title: "Founder story com IA gera 173 mil comentários em um reel",
    teaser:
      "Manthan Jethwani construiu o negócio inteiro em volta da IA e virou caso de estudo: 5,4 milhões de views, 147 mil likes e 173 mil comentários em um único reel.",
    category: "Social Media",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "ScrapeCreators API (Instagram)",
      url: "https://www.instagram.com/manthanjethwani",
    },
    heroImage: {
      url: "/news/founder-story-ia-engajamento.webp",
      alt: "Founder falando para câmera em estúdio minimalista com microfone e ring light",
    },
    seo: {
      metaTitle: "Founder story com IA: 173 mil comentários em um reel",
      metaDescription:
        "Manthan Jethwani construiu o negócio inteiro em volta da IA: 5,4M views, 147K likes e 173K comentários em um reel. Storytelling de transformação gera conversa.",
      metaKeywords:
        "founder story, storytelling IA, engajamento Instagram, negócio com IA, Manthan Jethwani, reel viral",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Alguns números desafiam a intuição — e 173 mil comentários em um
          único reel é um deles. O criador <strong>Manthan Jethwani</strong>,
          com 141 mil seguidores no Instagram, contou que{" "}
          <strong>não usou IA para tarefas pequenas: construiu o negócio
          inteiro em volta dela</strong>. O resultado: 5,4 milhões de views,
          147 mil likes e 173 mil comentários.
        </Lead>

        <p>
          O caso, levantado na análise semanal de tendências de consultores de
          IA, aponta para o padrão de formato que mais gera conversa no nicho
          agora: a <strong>founder story</strong>. Não é tutorial, não é
          opinião sobre ferramenta — é narrativa de transformação pessoal.
        </p>

        <H2>Por que a founder story engaja tanto</H2>

        <List>
          <li>
            <strong>Identificação:</strong> a jornada de alguém que saiu do
            zero com IA espelha o desejo de quem assiste.
          </li>
          <li>
            <strong>Prova social:</strong> resultado concreto (o negócio
            construído) substitui argumento — não é opinião, é evidência.
          </li>
          <li>
            <strong>Conversa, não broadcast:</strong> 173 mil comentários
            mostram que a audiência quer participar, perguntar e se colocar na
            história.
          </li>
        </List>

        <p>
          O detalhe que vale destacar: Jethwani tem 141 mil seguidores — longe
          de ser conta gigante — e ainda assim o reel virou máquina de
          conversa. A founder story não depende de alcance prévio, depende de
          história verdadeira e específica.
        </p>

        <p>
          É o mesmo princípio que uso ao ajudar empresas a{" "}
          <a href="/servicos/consultoria-ia">
            contar como a IA transformou a operação delas
          </a>
          : caso real, números reais, e a jornada à frente da ferramenta.
          Ferramenta é meio; a história é o gancho.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.instagram.com/manthanjethwani"
            target="_blank"
            rel="noopener noreferrer"
          >
            @manthanjethwani no Instagram — dados via ScrapeCreators
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
