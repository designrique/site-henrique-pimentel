import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "instagram-bonuses-fotos-carrosseis",
    title: "Instagram passa a pagar bônus por fotos e carrosséis, não só Reels",
    teaser:
      "Posts estáticos entram no programa de Bonuses para criadores elegíveis, com pagamento duas vezes por mês. Relatos apontam US$ 600 a US$ 1.200 por milhão de views.",
    category: "Social Media",
    publishedDate: "2026-09-15",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Instagram Help",
      url: "https://help.instagram.com/708013994693013",
    },
    heroImage: {
      url: "/news/instagram-bonuses-fotos-carrosseis.webp",
      alt: "Vista de cima de smartphone exibindo um carrossel de fotos ao lado de pequenas pilhas de moedas e uma caneta stylus",
    },
    seo: {
      metaTitle: "Instagram paga bônus por fotos e carrosséis: como funciona",
      metaDescription:
        "O Instagram ampliou os Bonuses para fotos e carrosséis, com pagamento duas vezes por mês. Criadores relatam de US$ 600 a US$ 1.200 por milhão de views.",
      metaKeywords: "Instagram Bonuses, monetização, carrossel, foto, criadores",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Instagram parou de tratar foto e carrossel como formato de segunda
          linha. Desde agosto, posts estáticos de criadores elegíveis entram no
          programa de Bonuses, a mesma estrutura de pagamento que já existia
          para Reels.
        </Lead>

        <p>
          A mudança está documentada na central de ajuda da plataforma e muda a
          conta de quem produz conteúdo de imagem: em vez de publicar carrossel
          só para alimentar o feed e torcer por alcance, o post passa a ter
          pagamento direto atrelado a desempenho. O ciclo de pagamento é
          quinzenal, duas vezes por mês.
        </p>

        <H2>O que muda para quem cria</H2>

        <List>
          <li>Fotos e carrosséis entram no programa de Bonuses.</li>
          <li>Pagamentos duas vezes por mês, em vez de apenas por Reels.</li>
          <li>
            Relatos da comunidade apontam de US$ 600 a US$ 1.200 por milhão de
            views em conteúdo estático elegível.
          </li>
          <li>
            Elegibilidade depende de conta de criador no programa, não de
            qualquer perfil.
          </li>
        </List>

        <p>
          O timing chama atenção. A plataforma abriu monetização para formato
          estático exatamente quando o TikTok derrete o RPM de vídeo curto. Para
          quem já faz carrossel educativo, a decisão fica evidente: o mesmo
          esforço de design passa a ser remunerado onde antes só gerava
          salvamentos.
        </p>

        <p>
          A ressalva honesta: bônus de plataforma continua sendo receita
          alugada. O valor por milhão de views é bom hoje, mas histórico de
          programa de criador mostra que a régua muda sem aviso. Use o bônus
          como caixa, não como plano.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://help.instagram.com/708013994693013"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram Help
          </a>
          . Mais formatos e estratégias de publicação no{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
