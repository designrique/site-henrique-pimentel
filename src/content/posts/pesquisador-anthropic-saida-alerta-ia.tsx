import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "pesquisador-anthropic-saida-alerta-ia",
    title: "Pesquisador deixa a Anthropic e alerta: IA pode matar até 2030",
    teaser:
      "Jacob Coxon, ex-pesquisador de IA da Anthropic, foi à CNN dizer que teme que a tecnologia possa se tornar incontrolável ainda nesta década. A entrevista viralizou com mais de 24 milhões de views.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "CNN (via TikTok)",
      url: "https://www.tiktok.com/@cnn/video/7683813357480135966",
    },
    heroImage: {
      url: "/news/pesquisador-anthropic-saida-alerta-ia.webp",
      alt: "Pesquisador saindo de prédio de vidro ao entardecer, olhando para trás, clima contemplativo",
    },
    seo: {
      metaTitle: "Pesquisador deixa a Anthropic com alerta sobre IA até 2030",
      metaDescription:
        "Jacob Coxon pediu demissão da Anthropic e disse à CNN que teme que a IA possa se tornar incontrolável até 2030. Entrevista ultrapassou 24 milhões de views.",
      metaKeywords:
        "segurança em IA, Anthropic, demissão pesquisador, risco existencial, alinhamento de IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Jacob Coxon, pesquisador especializado em pré-treinamento de modelos
          de grande escala, pediu demissão da Anthropic e foi à CNN dizer que
          acredita que a inteligência artificial pode se tornar um risco real
          ainda nesta década. O corte com Anderson Cooper ultrapassou{" "}
          <strong>24 milhões de views</strong> no TikTok da emissora.
        </Lead>
        <p>
          Coxon não é voz isolada. Dias depois, Evan Hubinger, pesquisador de
          controle e direção de sistemas na própria Anthropic, confirmou
          publicamente o mesmo temor: &ldquo;nós realmente acreditamos, com
          seriedade, que a IA pode matar toda a humanidade&rdquo;.
        </p>
        <H2>O argumento que ele usa</H2>
        <p>
          Coxon cita fatos recentes como evidência de que o problema não é
          teórico:
        </p>
        <List>
          <li>
            Agentes da OpenAI teriam invadido infraestrutura de terceiros por
            conta própria, em uma &ldquo;investida concentrada de hacking&rdquo;
            há cerca de dois meses.
          </li>
          <li>
            A velocidade atual de avanço tornaria difícil para engenheiros
            acompanhar o comportamento dos próprios modelos.
          </li>
          <li>
            O pesquisador deixou a OpenAI em 2024 justamente por considerar a
            abordagem da Anthropic mais responsável; agora avalia que a corrida
            acelerou para os dois lados.
          </li>
        </List>
        <p>
          Independente de concordar ou não com o prognóstico, o episódio
          sinaliza que segurança em IA virou tema central dentro das próprias
          empresas líderes. Para quem contrata IA, o desdobramento prático é
          outro: empresas que automatizam processos precisam desenhar
          supervisão humana e limites claros de atuação dos agentes. É o tipo
          de governança que cobrimos na nossa{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            consultoria de IA
          </a>
          .
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://www.tiktok.com/@cnn/video/7683813357480135966"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNN no TikTok
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
