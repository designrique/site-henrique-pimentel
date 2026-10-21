import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "tiktok-rpm-colapso-criadores",
    title: "TikTok derrete pagamento de criadores: CPM cai de US$ 0,40 para US$ 0,07",
    teaser:
      "Relatos de criadores mostram CPM despencando em semanas e a estimativa do Creator Rewards caindo de US$ 243 para US$ 4 no mesmo perfil. A plataforma não comunicou nada.",
    category: "Social Media",
    publishedDate: "2026-09-15",
    readingTime: "3 min",
    news: true,
    source: {
      name: "r/socialmedia",
      url: "https://www.reddit.com/r/socialmedia/comments/1qbv0ma/tiktok_2026_rpm_has_crateredwtf_is_going_on/",
    },
    heroImage: {
      url: "/news/tiktok-rpm-colapso-criadores.webp",
      alt: "Smartphone sobre mesa escura ao lado de um relatório de ganhos impresso com uma curva acentuada de queda",
    },
    seo: {
      metaTitle: "TikTok derrete pagamento de criadores: CPM cai a US$ 0,07",
      metaDescription:
        "Criadores relatam CPM do TikTok caindo de US$ 0,40 para US$ 0,07 e Creator Rewards de US$ 243 para US$ 4 em semanas. Veja os números e o que fazer.",
      metaKeywords: "TikTok, RPM, CPM, Creator Rewards, monetização de criadores",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O pagamento por views no TikTok está derretendo, e a comunidade de
          criadores descobriu isso sozinha. Uma thread no r/socialmedia,
          intitulada &ldquo;TikTok 2026: RPM has cratered...wtf is going
          on&rdquo;, virou o ponto de encontro de quem viu a receita sumir do
          painel.
        </Lead>

        <p>
          O relato mais repetido aparece no r/TikTokMonetizing: &ldquo;As of May
          1st my CPM dropped significantly to about $0.40, and then on May 18th
          it dropped to $0.07&rdquo;. Outro criador conta que a estimativa do
          Creator Rewards caiu de US$ 243 para US$ 4 no mesmo perfil. Sem
          comunicado, sem aviso prévio.
        </p>

        <H2>O que os números mostram</H2>

        <List>
          <li>
            CPM caindo de US$ 0,40 para US$ 0,07 em pouco mais de duas semanas.
          </li>
          <li>Creator Rewards reduzido de US$ 243 para US$ 4 no mesmo mês.</li>
          <li>
            Queda sem anúncio oficial: os criadores perceberam quando abriram o
            painel de ganhos.
          </li>
          <li>
            Efeito concentrado em perfis de vídeo curto com tráfego majoritário
            dos EUA.
          </li>
        </List>

        <p>
          Vale separar oscilação normal de colapso. RPM de plataforma sempre
          sobe e desce com o leilão de anúncios, e janeiro costuma pagar pior.
          O que os criadores estão reportando agora é de outra ordem: uma queda
          que corta receita para menos de 2% do valor anterior, sem mudança de
          formato ou de audiência para justificar.
        </p>

        <p>
          A leitura prática não é &ldquo;saia do TikTok&rdquo;, é tratar receita
          de plataforma como risco e não como renda. Brand deals, produto
          próprio, newsletter e base de e-mail passam a ser o amortecimento
          quando o RPM decide cair. Quem construiu apenas em cima do Creator
          Rewards está descobrindo o preço da concentração.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.reddit.com/r/socialmedia/comments/1qbv0ma/tiktok_2026_rpm_has_crateredwtf_is_going_on/"
            target="_blank"
            rel="noopener noreferrer"
          >
            thread no r/socialmedia
          </a>
          . Se receita de plataforma é risco no seu negócio, veja como a{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            consultoria de IA
          </a>{" "}
          ajuda a montar canais próprios.
        </p>
      </PostProse>
    );
  },
};

export default post;
