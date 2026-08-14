import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "save-rate-metrica-dominante-tiktok",
    title: "Save rate virou a métrica que domina o TikTok em 2026",
    teaser:
      "Tutorial sobre plugins gratuitos da Anthropic alcançou 96% de save rate — 19,2 mil saves em 313 mil plays. Conteúdo que as pessoas guardam é distribuído por semanas.",
    category: "Social Media",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "ScrapeCreators API (TikTok)",
      url: "https://www.tiktok.com/@brockmesarich",
    },
    heroImage: {
      url: "/news/save-rate-metrica-dominante-tiktok.webp",
      alt: "Smartphone na mão mostrando vídeo com ícone de salvar, pessoa guardando tutorial",
    },
    seo: {
      metaTitle: "Save rate: a métrica que domina o TikTok em 2026",
      metaDescription:
        "Tutorial de plugins gratuitos da Anthropic bateu 96% de save rate no TikTok (19,2 mil saves em 313 mil plays). Save rate virou o sinal nº 1 do algoritmo.",
      metaKeywords:
        "save rate, TikTok 2026, métricas TikTok, conteúdo salvável, tutorial IA, algoritmo TikTok",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O número mais impressionante da semana no TikTok não foi de views —
          foi de saves. O tutorial do criador Brock Mesarich sobre os 11
          plugins gratuitos que a Anthropic liberou para o Claude alcançou{" "}
          <strong>96% de save rate</strong>: 19,2 mil saves em 313 mil plays.
        </Lead>

        <p>
          O dado, levantado via ScrapeCreators na análise semanal de
          tendências para consultores de IA, confirma uma mudança de métrica
          que vinha se desenhando: o algoritmo do TikTok passou a amplificar
          conteúdo que as pessoas guardam para usar depois. Saves viraram o
          sinal de valor prático — e distribuição por semanas, não por dias.
        </p>

        <H2>Por que saves valem mais que likes</H2>

        <List>
          <li>
            <strong>Save é intenção:</strong> quem salva planeja voltar e
            usar. Like é reação; save é compromisso.
          </li>
          <li>
            <strong>O algoritmo aprendeu:</strong> alto save rate sinaliza
            conteúdo evergreen, e o TikTok empurra para audiências novas por
            muito mais tempo.
          </li>
          <li>
            <strong>O formato vencedor:</strong> ferramenta gratuita + "substitui
            algo pago" + passo a passo claro. O tutorial save-driven é o
            padrão de formato nº 1 da semana.
          </li>
        </List>

        <p>
          Para quem cria conteúdo de tecnologia, a receita é quase mecânica:
          ensine algo útil, mostre o resultado, e peça explicitamente para
          salvar — &ldquo;salva esse vídeo que você vai usar essa semana&rdquo;.
          A conta de 22,6 mil seguidores do Mesarich virou distribuição de
          qualidade com esse formato.
        </p>

        <p>
          O mesmo princípio vale para conteúdo em português: tutorial prático
          com ferramenta gratuita é o tipo de material que o público guarda —
          e que eu uso como base para{" "}
          <a href="/servicos/consultoria-ia">
            estratégias de conteúdo com IA para empresas
          </a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.tiktok.com/@brockmesarich"
            target="_blank"
            rel="noopener noreferrer"
          >
            @brockmesarich no TikTok — dados via ScrapeCreators
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
