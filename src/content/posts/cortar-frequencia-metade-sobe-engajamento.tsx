import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "cortar-frequencia-metade-sobe-engajamento",
    title: "Cortar a frequência de posts pela metade elevou o engajamento em 40%",
    teaser:
      "Um relato na comunidade r/GrowthHacking mediu o efeito de publicar menos e o número apareceu: 40% mais engajamento. O padrão é priorizar poucos formatos por semana.",
    category: "Social Media",
    publishedDate: "2026-10-22",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Reddit r/GrowthHacking",
      url: "https://www.reddit.com/r/GrowthHacking/comments/1rejxa7/we_cut_our_posting_frequency_in_half_and/",
    },
    seo: {
      metaTitle: "Cortar frequência de posts pela metade sobe engajamento 40%",
      metaDescription:
        "Relato no r/GrowthHacking mostra 40% mais engajamento ao reduzir a frequência de posts. O padrão é priorizar 4 a 5 Reels e 2 a 3 carrosséis por semana.",
      metaKeywords:
        "frequência de posts, engajamento, social media, Reels, carrossel, calendário editorial",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Publicar menos e medir melhor. Foi o que um relato recente na
          comunidade fez, e o resultado contrariou a lógica de volume: com
          metade da frequência, o engajamento subiu <strong>40%</strong>.
        </Lead>

        <p>
          O case está registrado na{" "}
          <a
            href="https://www.reddit.com/r/GrowthHacking/comments/1rejxa7/we_cut_our_posting_frequency_in_half_and/"
            target="_blank"
            rel="noopener noreferrer"
          >
            thread do r/GrowthHacking
          </a>{" "}
          e não é um caso isolado. O padrão que aparece em outras discussões é
          abandonar a publicação diária por qualquer coisa e concentrar energia
          em poucos formatos bem feitos.
        </p>

        <H2>O número que importa não é post por dia</H2>

        <List>
          <li>
            A referência que circula na comunidade é 4 a 5 Reels e 2 a 3
            carrosséis por semana, com roteiro revisado.
          </li>
          <li>
            A métrica de leitura muda: salvamentos, compartilhamentos e leads
            por peça valem mais que impressões acumuladas.
          </li>
          <li>
            O teste exige coragem: duas semanas publicando menos, sem pânico no
            terceiro dia de silêncio.
          </li>
        </List>

        <p>
          Faz sentido se você pensar no tempo do espectador. Cinco peças
          pensadas competem melhor por atenção que quinze peças de enchimento,
          porque o formato de distribuição premia retenção. É a mesma lógica que
          separa alcance de resultado nos{" "}
          <a href="/noticias">dados de social media</a> que já acompanhamos aqui.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.reddit.com/r/GrowthHacking/comments/1rejxa7/we_cut_our_posting_frequency_in_half_and/"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/GrowthHacking
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
