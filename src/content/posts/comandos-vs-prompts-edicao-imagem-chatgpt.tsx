import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "comandos-vs-prompts-edicao-imagem-chatgpt",
    title: "Comandos superam prompts na edição de imagem do ChatGPT",
    teaser:
      "Criador mostra /explorer view e /ad creative no ChatGPT e viraliza com 234 mil views. O fluxo de edição de imagem virou comando, não prompt.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-31",
    readingTime: "2 min",
    news: true,
    source: {
      name: "TikTok @soymaulozano",
      url: "https://www.tiktok.com/@soymaulozano/video/7680001198102990111",
    },
    heroImage: {
      url: "/news/comandos-vs-prompts-edicao-imagem-chatgpt.webp",
      alt: "Mão de designer com stylus sobre tablet gráfico e monitor com painéis abstratos de edição de imagem",
    },
    seo: {
      metaTitle: "Comandos superam prompts na edição de imagem do ChatGPT",
      metaDescription:
        "No ChatGPT, comandos como /explorer view e /ad creative estão substituindo prompts longos na edição de imagem. Vídeo com 234 mil views mostra o fluxo na prática.",
      metaKeywords:
        "ChatGPT, edição de imagem, comandos IA, /ad creative, prompt engineering, geração de imagem",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O criador <strong>@soymaulozano</strong> mostrou o fluxo de edição de
          imagem no ChatGPT usando comandos como{" "}
          <strong>/explorer view</strong> e <strong>/ad creative</strong> — e o
          vídeo passou de <strong>234 mil views</strong> com 24,8 mil likes. A
          mensagem: para editar, comando &gt; prompt.
        </Lead>

        <p>
          A virada é sutil e importante. Durante muito tempo o prompt longo e
          descritivo foi tratado como a habilidade central de quem trabalha
          com imagem gerada por IA. O que viralizou agora é o oposto: fluxos
          estruturados, com comandos curtos que acionam modos prontos de
          edição, produção e variação.
        </p>

        <H2>O que muda na prática</H2>

        <List>
          <li>
            <strong>Prompt longo perde espaço:</strong> o valor migra para
            conhecer os comandos e saber quando acioná-los.
          </li>
          <li>
            <strong>Workflow vira produto:</strong> quem documenta e replica
            esses fluxos ganha consistência — e isso vale para equipes, não só
            para criadores individuais.
          </li>
          <li>
            <strong>Barreira cai:</strong> edição de imagem por IA fica
            acessível a quem não domina vocabulário descritivo sofisticado.
          </li>
        </List>

        <p>
          Para quem produz conteúdo ou opera marketing, a leitura é direta: o
          diferencial deixou de ser &ldquo;saber descrever&rdquo; e virou
          &ldquo;saber operar o fluxo&rdquo;. É o mesmo princípio que aplico
          quando desenho automações com IA para clientes — ferramenta muda,
          disciplina de processo não. Veja como isso se conecta ao{" "}
          <a href="/noticias">resto das novidades da semana</a>.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.tiktok.com/@soymaulozano/video/7680001198102990111"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok — @soymaulozano
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
