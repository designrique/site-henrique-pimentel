import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "awesome-gpt-image-2-prompt-code",
    title: "awesome-gpt-image-2: prompt vira código para gerar imagem",
    teaser:
      "Lista curada com 530+ casos de 'Prompt as Code' para GPT-Image 2 soma 25,9 mil estrelas. O jeito de produzir imagem com IA está mudando.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-31",
    readingTime: "2 min",
    news: true,
    source: {
      name: "GitHub — freestylefly/awesome-gpt-image-2",
      url: "https://github.com/freestylefly/awesome-gpt-image-2",
    },
    heroImage: {
      url: "/news/awesome-gpt-image-2-prompt-code.webp",
      alt: "Pilha de trechos de código impressos ao lado de monitor exibindo imagem abstrata colorida",
    },
    seo: {
      metaTitle: "awesome-gpt-image-2: Prompt as Code com 530+ casos",
      metaDescription:
        "awesome-gpt-image-2 reúne 530+ casos de 'Prompt as Code' para GPT-Image 2 e soma 25,9 mil estrelas no GitHub. O padrão que está mudando a geração de imagem.",
      metaKeywords:
        "GPT-Image 2, Prompt as Code, geração de imagem, awesome list, GitHub Trending",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O <strong>awesome-gpt-image-2</strong> — curadoria com{" "}
          <strong>530+ casos de uso</strong> de &ldquo;Prompt as Code&rdquo;
          para GPT-Image 2 — soma 25,9 mil estrelas no GitHub, 13,4 mil só na
          semana. A geração de imagem está virando engenharia.
        </Lead>

        <p>
          &ldquo;Prompt as Code&rdquo; significa tratar o prompt como código:
          versionado, testável e reutilizável. Em vez de descrever a imagem do
          zero toda vez, você monta blocos, parâmetros e fluxos que produzem
          resultados consistentes — e documenta o que funciona.
        </p>

        <H2>O que isso muda</H2>

        <List>
          <li>
            <strong>Consistência:</strong> produção em escala exige resultado
            repetível, e prompt como código entrega isso.
          </li>
          <li>
            <strong>Colaboração:</strong> prompts versionados permitem revisão
            e melhoria em equipe, igual a qualquer código.
          </li>
          <li>
            <strong>Biblioteca própria:</strong> empresas acumulam casos que
            funcionam e param de reinventar a roda.
          </li>
        </List>

        <p>
          Para quem produz conteúdo visual com IA, o recado é claro: quem
          trata imagem gerada como arte de uma vez só fica para trás. O valor
          está no sistema de prompts, não no prompt isolado. É o mesmo
          raciocínio de disciplina de processo que aplico em projetos de{" "}
          <a href="/servicos/consultoria-ia">automação e IA para empresas</a>.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://github.com/freestylefly/awesome-gpt-image-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub — freestylefly/awesome-gpt-image-2
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
