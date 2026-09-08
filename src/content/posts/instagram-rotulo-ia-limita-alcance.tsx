import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "instagram-rotulo-ia-limita-alcance",
    title: "Instagram exige rótulo e limita o alcance de perfis criados por IA",
    teaser:
      "O selo de \"pessoa gerada por IA\" deixa de ser opcional: perfis sintéticos sem rótulo saem de Reels, Explore e recomendações. Criadores que usam IA como ferramenta não são afetados.",
    category: "Social Media",
    publishedDate: "2026-09-08",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Yahoo Tech",
      url: "https://tech.yahoo.com/social-media/articles/instagram-done-letting-ai-influencers-174225351.html",
    },
    heroImage: {
      url: "/news/instagram-rotulo-ia-limita-alcance.webp",
      alt: "Smartphone mostrando um perfil de rede social com um escudo de verificação azul flutuando sobre a tela",
    },
    seo: {
      metaTitle: "Instagram exige rótulo de IA e limita alcance de perfis gerados",
      metaDescription:
        "Perfis de IA sem rótulo no Instagram saem de Reels, Explore e recomendações. Quem usa IA como ferramenta segue liberado do selo.",
      metaKeywords: "Instagram, IA, rótulo AI-generated, alcance, Reels, perfil de IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Instagram decidiu apertar a régua com os influenciadores
          sintéticos. Desde o fim de agosto o rótulo deixou de ser
          &ldquo;AI creator&rdquo; e virou &ldquo;AI-generated profile&rdquo;,
          com uma consequência prática: perfil de &ldquo;pessoa&rdquo; feita por
          IA que não se rotula sai das recomendações.
        </Lead>

        <p>
          A mudança, reportada no fim de agosto, limita o alcance desses perfis
          em Reels, Explore e na sugestão para quem não segue a conta. Na
          prática, o Instagram para de empurrar avatar sintético para audiência
          fria sem aviso. Quem usa IA como ferramenta, e não como identidade,
          segue fora da regra: legenda gerada, edição assistida ou áudio
          sintético não obrigam ninguém a carimbar o perfil.
        </p>

        <H2>O que muda na prática</H2>

        <List>
          <li>O rótulo agora é &ldquo;AI-generated profile&rdquo;, mais explícito.</li>
          <li>Perfis sintéticos sem selo perdem distribuição para não-seguidores.</li>
          <li>IA como ferramenta de produção não exige o rótulo.</li>
          <li>É um recado claro: a plataforma distingue avatar de apoio técnico.</li>
        </List>

        <p>
          A leitura honesta: o Instagram não está banindo IA, está separando
          quem vende a própria imagem de quem fabrica uma imagem de marca
          própria. Para agências e criadores, o limite é fino e vale mapear
          antes de montar conta sintética como estratégia de alcance.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://tech.yahoo.com/social-media/articles/instagram-done-letting-ai-influencers-174225351.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yahoo Tech
          </a>
          . Veja como a{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            consultoria de IA
          </a>{" "}
          do site ajuda a usar essa régua a seu favor.
        </p>
      </PostProse>
    );
  },
};

export default post;
