import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "social-seo-novo-topo-funil-2026",
    title: "Social SEO é o novo topo de funil: 24% usam redes como buscador",
    teaser:
      "Redes sociais viraram buscador para 24% dos usuários — e Reddit é o domínio mais citado pelo Perplexity. Bios, captions e hashtags agora são SEO.",
    category: "Marketing Digital",
    publishedDate: "2026-08-12",
    readingTime: "3 min",
    heroImage: {
      url: "/news/social-seo-novo-topo-funil-2026.webp",
      alt: "Lupa sobre tela de analytics de perfil social",
    },
    news: true,
    source: {
      name: "Coalition Technologies",
      url: "https://coalitiontechnologies.com/blog/6-social-media-trends-to-shape-your-marketing-strategy-in-2026",
    },
    seo: {
      metaTitle: "Social SEO: 24% usam redes sociais como buscador principal",
      metaDescription:
        "Redes sociais viraram buscador para 24% dos usuários. Reddit é o domínio mais citado pelo Perplexity e o segundo no SearchGPT. Bios e captions viraram SEO.",
      metaKeywords:
        "social SEO, SEO redes sociais, Perplexity, SearchGPT, otimização de perfil",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O topo do funil mudou de endereço. Para 24% dos usuários, a busca
          começa dentro das redes sociais — não no Google. Quem não otimiza a
          presença social está fora do primeiro contato, aponta a{" "}
          <a
            href="https://coalitiontechnologies.com/blog/6-social-media-trends-to-shape-your-marketing-strategy-in-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coalition Technologies
          </a>
          .
        </Lead>

        <p>
          O mais curioso é o cruzamento com a IA: Reddit é o domínio número 1
          citado pelo Perplexity (4% das citações), o número 2 no SearchGPT
          (13%) e o número 3 no Google AI Mode (9%). Fóruns e conversas reais
          alimentam os motores que hoje respondem por nós.
        </p>

        <H2>O que otimizar agora</H2>

        <List>
          <li>
            <strong>Bio com palavra-chave:</strong> o perfil precisa dizer, em
            uma linha, o que a marca resolve.
          </li>
          <li>
            <strong>Captions descritivos:</strong> texto que funciona sozinho
            na busca, não só na timeline.
          </li>
          <li>
            <strong>Hashtags como termos de busca:</strong> tratar hashtag
            como keyword, não como decoração.
          </li>
          <li>
            <strong>Conteúdo que responde perguntas reais:</strong> o mesmo
            raciocínio de SEO clássico, aplicado ao que as pessoas digitam na
            rede social.
          </li>
        </List>

        <p>
          Isso conversa direto com o trabalho de{" "}
          <a href="/baseline-geo">GEO — aparecer nos motores de IA</a> — que
          virou rotina aqui no site: otimizar para o Google e para o social
          search é a mesma moeda, só que com regras diferentes. A marca que
          domina as duas pontas não depende de nenhuma delas.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://coalitiontechnologies.com/blog/6-social-media-trends-to-shape-your-marketing-strategy-in-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coalition Technologies — 6 Social Media Trends para 2026
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
