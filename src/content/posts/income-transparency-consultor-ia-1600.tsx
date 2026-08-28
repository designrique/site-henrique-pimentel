import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "income-transparency-consultor-ia-1600",
    title: "Income transparency virou o hook mais forte de consultores de IA",
    teaser:
      "Dois criadores independentes bateram na mesma tecla na semana: 'cobro US$ 1.600 por dia como consultor de IA'. A audiência quer saber preço, não framework.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-28",
    readingTime: "3 min",
    news: true,
    source: {
      name: "ScrapeCreators API (TikTok/IG)",
      url: "https://www.tiktok.com/@cienandai",
    },
    heroImage: {
      url: "/news/income-transparency-consultor-ia-1600.webp",
      alt: "Criador gravando vídeo curto com smartphone em gimbal e ring light no estúdio",
    },
    seo: {
      metaTitle: "Income transparency: o hook que domina consultores de IA",
      metaDescription:
        "Criadores de IA expõem preço como gancho: 'cobro US$ 1.600/dia'. Income transparency virou o gatilho mais forte do nicho em 2026. Veja por que funciona.",
      metaKeywords: "income transparency, consultor IA preço, US$ 1600 dia, criadores de IA, marketing consultoria IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O gatilho mais forte do nicho de IA esta semana não foi um framework,
          foi um número: <strong>&ldquo;cobro US$ 1.600 por dia&rdquo;</strong>.
          Dois criadores independentes, @cienandai e @sabrina_ramonov, bateram
          na mesma tecla de transparência de renda.
        </Lead>

        <p>
          O padrão ficou claro no monitoramento cross-platform: o{" "}
          <strong>income transparency hook</strong> supera tutorial, opinião e
          notícia em engajamento no nicho de consultoria de IA. A audiência não
          quer saber a metodologia primeiro, quer saber quanto custa e quanto
          rende. Preço na frente, framework depois.
        </p>

        <H2>Por que funciona</H2>

        <List>
          <li>Número concreto gera curiosidade imediata e comentário.</li>
          <li>Posiciona o criador como autoridade de mercado, não de teoria.</li>
          <li>Cria gancho natural para o próximo conteúdo: o &ldquo;como&rdquo;.</li>
          <li>Funciona em TikTok, IG, Threads e LinkedIn com o mesmo texto.</li>
        </List>

        <p>
          A leitura para quem vende consultoria: transparência de preço não é
          exposição, é marketing. Mostrar o valor cobrado e o que entrega
          transforma objeção em conversa. A conta de US$ 1.600/dia, mesmo com
          recorte seletivo, vira o lead magnet mais barato que existe.
        </p>

        <p>
          Fonte:{" "}
          <a href="https://www.tiktok.com/@cienandai" target="_blank" rel="noopener noreferrer">
            @cienandai (TikTok)
          </a>{" "}
          ·{" "}
          <a href="https://www.instagram.com/sabrina.ramonov/" target="_blank" rel="noopener noreferrer">
            Sabrina Ramonov
          </a>
          . Leia também:{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            consultoria de IA
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
