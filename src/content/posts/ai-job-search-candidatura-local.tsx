import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "ai-job-search-candidatura-local",
    title: "ai-job-search: candidatura a vagas com IA rodando local",
    teaser:
      "Script Python com 38,6 mil estrelas automatiza candidaturas sem mandar currículo para nuvem de terceiros. Privacidade e escala na busca de emprego.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-31",
    readingTime: "2 min",
    news: true,
    source: {
      name: "GitHub — MadsLorentzen/ai-job-search",
      url: "https://github.com/MadsLorentzen/ai-job-search",
    },
    heroImage: {
      url: "/news/ai-job-search-candidatura-local.webp",
      alt: "Notebook sobre mesa com currículo e pequena figura de robô ao lado, luz suave da manhã",
    },
    seo: {
      metaTitle: "ai-job-search: candidaturas com IA local, 38,6 mil estrelas",
      metaDescription:
        "ai-job-search automatiza candidaturas de vagas com IA rodando 100% local, sem enviar currículo a terceiros. O projeto soma 38,6 mil estrelas no GitHub.",
      metaKeywords:
        "ai-job-search, candidatura de vagas, IA local, busca de emprego, GitHub Trending, privacidade",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O <strong>ai-job-search</strong>, do usuário MadsLorentzen, soma{" "}
          <strong>38,6 mil estrelas</strong> no GitHub com uma proposta
          objetiva: automatizar candidaturas de vagas com IA rodando
          localmente, sem entregar currículo para nuvem de terceiros.
        </Lead>

        <p>
          O projeto em Python combina busca de vagas, leitura de requisitos e
          montagem de candidatura num fluxo local-first. Para o candidato, o
          ganho é duplo: escala — aplicar a mais vagas com menos esforço — e
          privacidade — o currículo não vira insumo de treino de um serviço
          externo.
        </p>

        <H2>Por que vale a pena ver</H2>

        <List>
          <li>
            <strong>IA local viável:</strong> modelos de código aberto rodando
            na própria máquina já sustentam o fluxo inteiro.
          </li>
          <li>
            <strong>Privacidade como argumento:</strong> em tempos de dados
            virando commodity, rodar local virou diferencial de produto.
          </li>
          <li>
            <strong>Cenário real de agente:</strong> buscar, analisar e agir
            com autonomia é exatamente o tipo de tarefa que define a próxima
            geração de ferramentas.
          </li>
        </List>

        <p>
          O projeto é um bom case de como um agente de IA útil não precisa de
          infraestrutura gigante. Se você pensa em automação para o seu
          negócio, esse padrão — modelo local, dado sob controle, fluxo
          definido — é o mesmo que aplico na{" "}
          <a href="/servicos/consultoria-ia">consultoria de IA</a>.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://github.com/MadsLorentzen/ai-job-search"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub — MadsLorentzen/ai-job-search
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
