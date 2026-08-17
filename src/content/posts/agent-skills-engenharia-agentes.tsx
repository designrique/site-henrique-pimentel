import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "agent-skills-engenharia-agentes",
    title: "Agent Skills: 87,8 mil estrelas para o repositório de habilidades de IA",
    teaser:
      "O projeto de Addy Osmani reúne skills de engenharia para agentes de código — e virou o repositório de IA mais popular da semana no GitHub.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "GitHub — addyosmani/agent-skills",
      url: "https://github.com/addyosmani/agent-skills",
    },
    heroImage: {
      url: "/news/agent-skills-engenharia-agentes.webp",
      alt: "Biblioteca de prateleiras com pastas etiquetadas por habilidade técnica",
    },
    seo: {
      metaTitle: "Agent Skills: repositório de skills para agentes de IA",
      metaDescription:
        "Agent Skills, de Addy Osmani, reúne skills de engenharia para agentes de código: 87,8 mil estrelas no GitHub. A biblioteca de habilidades de IA em alta.",
      metaKeywords:
        "Agent Skills, Addy Osmani, skills agentes IA, engenharia de prompts, GitHub trending, agentes de código",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Agent Skills, de Addy Osmani — o mesmo autor de padrões de
          performance web — soma 87,8 mil estrelas no GitHub. O projeto
          organiza skills de engenharia para agentes de código: instruções
          reutilizáveis que ensinam a IA a executar tarefas técnicas com
          critério.
        </Lead>

        <p>
          A ideia é simples e poderosa: em vez de escrever um prompt do zero
          toda vez, o agente carrega uma skill pronta — revisão de
          acessibilidade, otimização de performance, padrões de segurança —
          e aplica o procedimento completo. É a engenharia de prompts
          virando biblioteca, com curadoria e versionamento.
        </p>

        <H2>O que o sucesso do projeto indica</H2>

        <List>
          <li>
            <strong>Skills viraram produto:</strong> o conhecimento de como
            usar IA bem está sendo empacotado e compartilhado como código.
          </li>
          <li>
            <strong>Consistência:</strong> times padronizam o comportamento
            dos agentes em vez de depender de prompt individual.
          </li>
          <li>
            <strong>Curva de adoção:</strong> 87,8 mil estrelas mostram que
            a comunidade quer estrutura, não só modelos mais fortes.
          </li>
        </List>

        <p>
          A leitura estratégica: o diferencial competitivo em IA está
          migrando do modelo para o acervo de skills e processos que a
          empresa constrói em volta. Quem documenta e reutiliza o que
          aprendeu — em vez de recomeçar do zero a cada projeto — acumula
          vantagem. É exatamente a lógica de{" "}
          <a href="/servicos/consultoria-ia">
            estruturar IA como ativo de negócio
          </a>{" "}
          e não como experimento pontual.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://github.com/addyosmani/agent-skills"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub — addyosmani/agent-skills
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
