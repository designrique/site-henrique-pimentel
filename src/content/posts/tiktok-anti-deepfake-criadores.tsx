import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "tiktok-anti-deepfake-criadores",
    title: "TikTok lança ferramenta anti-deepfake e redes de criadores para marcas",
    teaser:
      "Um recurso opt-in varre a plataforma por conteúdo de IA com o seu rosto e permite denunciar uso não autorizado. E as marcas ganham as Custom Creator Networks para campanhas contínuas.",
    category: "Social Media",
    publishedDate: "2026-09-08",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Metricool",
      url: "https://metricool.com/tiktok-news/",
    },
    heroImage: {
      url: "/news/tiktok-anti-deepfake-criadores.webp",
      alt: "Retrato de perfil em um telefone com um escudo digital azul e linhas de verificação facial ao redor",
    },
    seo: {
      metaTitle: "TikTok lança ferramenta anti-deepfake para criadores",
      metaDescription:
        "Recurso opt-in varre a plataforma por conteúdo de IA com o seu rosto e permite denunciar. Marcas ganham as Custom Creator Networks.",
      metaKeywords: "TikTok, anti-deepfake, deepfake, criadores, Custom Creator Networks, marcas",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Dois movimentos distintos do TikTok nesta semana, um para quem cria e
          outro para quem contrata. Criadores ganham uma proteção contra
          deepfake; marcas ganham um jeito de rodar campanha contínua sem caçar
          criador a cada brief.
        </Lead>

        <p>
          A ferramenta anti-deepfake é opt-in e, por enquanto, disponível nos
          Estados Unidos. Ela varre a plataforma em busca de conteúdo de IA que
          use a imagem do criador e permite denunciar uso não autorizado. Para
          ativar, o processo exige selfie e verificação de identidade via
          Jumio, sem reter documentos.
        </p>

        <p>
          No lado das marcas, o TikTok liberou as Custom Creator Networks:
          comunidades privadas de criadores dentro do Content Suite, pensadas
          para campanhas contínuas em vez de contratação pontual.
        </p>

        <H2>Por que isso importa</H2>

        <List>
          <li>Deepfake com o seu rosto vira algo denunciável de forma nativa.</li>
          <li>A verificação exige selfie e ID, mas sem guardar documento.</li>
          <li>Custom Creator Networks aproximam marca e criador de forma recorrente.</li>
          <li>O recado das plataformas: identidade precisa ser verificável.</li>
        </List>

        <p>
          A leitura honesta: a proteção anti-deepfake nasce americana e
          opt-in, o que deixa criadores de fora dos EUA esperando. Já o modelo
          de rede privada de criadores é a direção que o marketing de
          influência vinha cobrando há tempo.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://metricool.com/tiktok-news/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metricool
          </a>
          . Veja como estruturar essas parcerias na{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            área de conteúdo
          </a>{" "}
          do site.
        </p>
      </PostProse>
    );
  },
};

export default post;
