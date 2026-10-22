import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, Quote } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "carrossel-confianca-video-descoberta",
    title: "Carrossel constrói confiança, vídeo curto traz descoberta",
    teaser:
      "Análise na comunidade r/socialmedia separa alcance de resultado: carrosséis perdem em views, mas ganham em salvamentos, compartilhamentos e DMs.",
    category: "Social Media",
    publishedDate: "2026-10-22",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Reddit r/socialmedia",
      url: "https://reddit.com/r/socialmedia/comments/1qef2y1/carousels_vs_shortform_video_in_2026_are/",
    },
    seo: {
      metaTitle: "Carrossel constrói confiança, vídeo curto traz descoberta",
      metaDescription:
        "Comparação no r/socialmedia mostra carrosséis com mais saves e DMs e vídeo curto com picos maiores de alcance. Cada formato tem uma função.",
      metaKeywords:
        "carrossel, vídeo curto, algoritmo Instagram, engajamento, saves, DMs",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A pergunta &ldquo;carrossel ou vídeo curto?&rdquo; está mal formulada.
          Quem acompanha resultado por função de funil responde outra coisa:
          para que serve cada um.
        </Lead>

        <p>
          A análise publicada na{" "}
          <a
            href="https://reddit.com/r/socialmedia/comments/1qef2y1/carousels_vs_shortform_video_in_2026_are/"
            target="_blank"
            rel="noopener noreferrer"
          >
            comunidade r/socialmedia
          </a>{" "}
          descreve exatamente essa divisão de trabalho. O carrossel entrega
          menos alcance e mais profundidade: salvamentos, compartilhamentos,
          visitas ao perfil e mensagens diretas. O vídeo curto faz o contrário.
          Traz picos grandes de descoberta e volatilidade na mesma medida.
        </p>

        <Quote>
          Carousels are still the best &lsquo;trust builder&rsquo; for
          non-influencers. Video is still the best &lsquo;discovery
          engine.&rsquo;
        </Quote>

        <H2>Como aplicar sem escolher um lado</H2>

        <p>
          Na prática: vídeo curto na frente, para atrair quem ainda não conhece.
          Carrossel no meio, para explicar, provar e criar preferência. Quem
          trata os dois como concorrentes fica preso em comparar métricas que
          medem coisas diferentes.
        </p>

        <p>
          Isso reforça o que já aparece em outros levantamentos de{" "}
          <a href="/blog">conteúdo e distribuição</a>: formato não é identidade
          de marca, é ferramenta de etapa. O erro mais caro é publicar carrossel
          esperando alcance de Reels e concluir que o carrossel morreu.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://reddit.com/r/socialmedia/comments/1qef2y1/carousels_vs_shortform_video_in_2026_are/"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/socialmedia
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
