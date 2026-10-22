import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, Quote } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "threads-alcance-seguidores-hayes",
    title: "Threads muda algoritmo para devolver alcance a quem você segue",
    teaser:
      "Connor Hayes, responsável pelo produto, confirmou a mudança: criadores devem ver, em média, mais alcance entre os próprios seguidores.",
    category: "Social Media",
    publishedDate: "2026-10-22",
    readingTime: "3 min",
    news: true,
    source: {
      name: "The Verge",
      url: "https://theverge.com/tech/1010778/threads-algorithm-change-bots",
    },
    seo: {
      metaTitle: "Threads devolve alcance a quem você segue, diz Connor Hayes",
      metaDescription:
        "Threads mudou a distribuição para priorizar posts de quem você já segue. Connor Hayes confirma mais alcance médio entre seguidores para criadores.",
      metaKeywords:
        "Threads, algoritmo, alcance, Connor Hayes, seguidores, criadores",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Depois de anos de feed dominado por recomendação de estranhos, o
          Threads mexeu no pêndulo. Agora ele empurra de volta conteúdo de quem
          você escolheu seguir.
        </Lead>

        <p>
          O anúncio veio de dentro de casa. Connor Hayes, responsável pelo
          produto da rede, descreveu a alteração em declaração publicada pelo{" "}
          <a
            href="https://theverge.com/tech/1010778/threads-algorithm-change-bots"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Verge
          </a>
          .
        </p>

        <Quote>
          We recently made a change that could increase the posts you see from
          those you follow. For creators, this should mean you see on average
          more reach to your followers.
          <span className="not-italic"> Connor Hayes</span>
        </Quote>

        <H2>O que muda para quem publica</H2>

        <p>
          Se a distribuição volta para a base, a consequência prática é que
          construir audiência própria recupera valor. Perfil que investiu em
          seguidor engajado tende a ser recompensado; quem dependia só de viral
          ocasional precisa de nova estratégia.
        </p>

        <p>
          A leitura cética também cabe: alcance médio maior não significa que
          todo post vai bem. A rede continua testando formato e conversa, e o
          próprio Hayes trata a mudança como ajuste, não como garantia. Quem
          acompanha Threads por aqui já viu argumento parecido em{" "}
          <a href="/noticias/threads-autoridade-nao-alcance">
            autoridade valendo mais que alcance
          </a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://theverge.com/tech/1010778/threads-algorithm-change-bots"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Verge
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
