import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "finra-ia-organismo-normas",
    title: "Anthropic, Google e OpenAI negociam órgão de padrões para IA",
    teaser:
      "As três maiores empresas de IA vêm mantendo conversas regulares para criar um organismo de autorregulação da indústria, nos moldes de uma FINRA do setor.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Reddit r/singularity",
      url: "https://www.reddit.com/r/singularity/comments/1wfifhq/a_finra_for_ai_is_coming_anthropic_google_and/",
    },
    heroImage: {
      url: "/news/finra-ia-organismo-normas.webp",
      alt: "Prédio institucional com colunas ao entardecer e sala de reuniões com executivos vista através de vidro",
    },
    seo: {
      metaTitle: "Anthropic, Google e OpenAI criam órgão de padrões de IA",
      metaDescription:
        "Três gigantes de IA mantêm conversas regulares para fundar um organismo de autorregulação da indústria, uma espécie de FINRA do setor de inteligência artificial.",
      metaKeywords:
        "regulação IA, FINRA da IA, Anthropic, Google, OpenAI, autorregulação",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Anthropic, Google e OpenAI estão em <strong>conversas regulares para
          criar um organismo de padrões da indústria de IA</strong>, nos
          moldes de uma FINRA — a autorreguladora do mercado financeiro
          americano. As reuniões mais recentes aconteceram na própria semana.
        </Lead>
        <p>
          A notícia circulou primeiro no r/singularity e ganhou tração
          justamente no momento em que executivos das três empresas pedem
          publicamente algum tipo de freio ou supervisão. Dario Amodei, da
          Anthropic, publicou dias antes um ensaio defendendo desaceleração.
        </p>
        <H2>O que um órgão assim faria</H2>
        <List>
          <li>
            Definir padrões comuns de segurança e testes para lançamentos de
            modelos.
          </li>
          <li>
            Servir de canal de comunicação com reguladores, antecipando
            regras em vez de reagir a elas.
          </li>
          <li>
            Dar à indústria uma resposta coordenada a incidentes, como
            agentes fora de controle.
          </li>
        </List>
        <p>
          Para quem acompanha o mercado de IA, é um movimento de
          institucionalização: as empresas querem desenhar as regras antes que
          governos o façam por elas. Para quem usa IA em negócios, o efeito
          prático tende a chegar como padrões de conformidade e boas práticas
          nos próximos contratos. Manter-se informado sobre essa evolução
          regulatória é parte do trabalho de quem decide adoção de IA; a gente
          acompanha o tema de perto no{" "}
          <a href="/noticias" target="_blank" rel="noopener noreferrer">
            nosso espaço de notícias
          </a>
          .
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://www.reddit.com/r/singularity/comments/1wfifhq/a_finra_for_ai_is_coming_anthropic_google_and/"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/singularity
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
