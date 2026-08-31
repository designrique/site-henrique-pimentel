import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "scientific-agent-skills",
    title: "scientific-agent-skills: skills de IA para cientistas",
    teaser:
      "Repositório com skills científicas para agentes soma 39,8 mil estrelas e alcança 190 mil+ cientistas. O GitHub Trending confirmou o padrão da semana.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-31",
    readingTime: "2 min",
    news: true,
    source: {
      name: "GitHub — K-Dense-AI/scientific-agent-skills",
      url: "https://github.com/K-Dense-AI/scientific-agent-skills",
    },
    heroImage: {
      url: "/news/scientific-agent-skills.webp",
      alt: "Microscópio e vidraria de laboratório com notebook mostrando gráficos de dados abstratos",
    },
    seo: {
      metaTitle: "scientific-agent-skills: skills científicas para agentes",
      metaDescription:
        "scientific-agent-skills entrega skills científicas prontas para agentes de IA e soma 39,8 mil estrelas, com mais de 190 mil cientistas alcançados.",
      metaKeywords:
        "scientific-agent-skills, agentes de IA, ciência, skills de IA, GitHub Trending",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O <strong>scientific-agent-skills</strong>, do K-Dense-AI, soma{" "}
          <strong>39,8 mil estrelas</strong> no GitHub e alcançou mais de{" "}
          <strong>190 mil cientistas</strong>. A proposta: skills prontas para
          agentes de IA em contexto científico.
        </Lead>

        <p>
          Em vez de cada pesquisador construir seus próprios fluxos de
          automação do zero, o projeto empacota habilidades — análise de dados,
          revisão de literatura, formatação de resultados — em módulos
          reutilizáveis que agentes conseguem executar.
        </p>

        <H2>O sinal por trás do número</H2>

        <List>
          <li>
            <strong>Skills empacotadas:</strong> o conhecimento vira módulo
            testável, não prompt solto guardado em arquivo.
          </li>
          <li>
            <strong>Domínio específico:</strong> ciência exige rigor; skills
            curadas reduzem o risco de alucinação em fluxo crítico.
          </li>
          <li>
            <strong>Adoção fora da bolha tech:</strong> 190 mil cientistas
            usando mostra que agentes saíram do nicho de desenvolvedores.
          </li>
        </List>

        <p>
          A lição que carrego daqui: o futuro não é o modelo, é o pacote de
          habilidades em volta dele. Para quem atende profissionais
          especializados, empacotar IA em skills de domínio é a forma mais
          rápida de gerar valor real. Veja como isso se conecta ao{" "}
          <a href="/noticias">cenário de agentes da semana</a>.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://github.com/K-Dense-AI/scientific-agent-skills"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub — K-Dense-AI/scientific-agent-skills
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
