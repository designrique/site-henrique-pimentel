import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "newsletter-post-prova-brewton-200k",
    title: "Newsletter de US$ 200 mil por ano mostra o valor de um post-prova bem timingado",
    teaser:
      "John Brewton saiu de 1.014 inscritos para 5.861, com 266 pagantes, faturando US$ 200 mil por ano quase 90% orgânico. O inflection point veio de um único post de prova sincronizado com oferta.",
    category: "Marketing Digital",
    publishedDate: "2026-09-11",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Operating, by John Brewton",
      url: "https://operatingbyjohnbrewton.com",
    },
    heroImage: {
      url: "/news/newsletter-post-prova-brewton-200k.webp",
      alt: "Calendário com uma data marcada ao lado de caderno aberto com esboço de curva de crescimento",
    },
    seo: {
      metaTitle: "Post-prova: a tática que levou newsletter a US$ 200 mil/ano",
      metaDescription:
        "John Brewton foi de 1.014 para 5.861 inscritos com um único post de prova sincronizado com oferta. O plano de alta frequência mais o momento certo de publicar.",
      metaKeywords:
        "newsletter, post-prova, monetização de newsletter, marketing de conteúdo, prova social",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A newsletter Operating, de John Brewton, passou de{" "}
          <strong>1.014 inscritos e US$ 2,2 mil</strong> anuais em janeiro para{" "}
          <strong>5.861 inscritos e 266 pagantes</strong> em junho. Faturamento:
          <strong> US$ 200 mil por ano</strong>, com 90% vindo de canal
          orgânico. O ponto de virada não foi volume, foi{" "}
          <strong>um post de prova</strong> sincronizado com uma oferta com
          escassez.
        </Lead>
        <p>
          O post que contava a jornada de zero a 55.000 gerou 85 assinaturas
          pagas em um único dia. Brewton publicava em alta frequência havia
          meses; o que mudou foi o momento em que prova social acumulada e
          oferta apertada se encontraram.
        </p>
        <H2>O plano que se extrai daqui</H2>
        <List>
          <li>
            Frequência sustentada constrói a base, mas não converte sozinha:
            planeje o post-prova, não só o calendário.
          </li>
          <li>
            Prova significa número real do próprio funil, mesmo pequeno; casos
            de terceiro não têm o mesmo peso.
          </li>
          <li>
            Sincronize a publicação da prova com uma oferta com prazo: escassez
            converte audiência acumulada em receita.
          </li>
        </List>
        <p>
          Vale seguir a newsletter como estudo de caso aberto de monetização de
          audiência própria.
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://operatingbyjohnbrewton.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Operating, by John Brewton
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
