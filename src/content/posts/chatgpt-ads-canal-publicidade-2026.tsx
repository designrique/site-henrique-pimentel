import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "chatgpt-ads-canal-publicidade-2026",
    title: "ChatGPT se prepara para vender anúncios como o Facebook, não o Google",
    teaser:
      "26% das buscas terminam sem clique e o ChatGPT prepara ads que se comportam como Facebook, não Google. O assistente vira canal de mídia paga.",
    category: "Marketing Digital",
    publishedDate: "2026-09-09",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Neil Patel (YouTube)",
      url: "https://www.youtube.com/watch?v=hXPALnu3Y6I",
    },
    heroImage: {
      url: "/news/chatgpt-ads-canal-publicidade-2026.webp",
      alt: "Painel de publicidade digital em um monitor, com gráficos de campanha e um cursor sobre o botão de publicar",
    },
    seo: {
      metaTitle: "ChatGPT se prepara para vender anúncios como o Facebook",
      metaDescription:
        "26% das buscas terminam sem clique e o ChatGPT prepara ads que se comportam como Facebook, não Google. Entenda o novo canal de mídia paga.",
      metaKeywords: "ChatGPT ads, publicidade IA, buscas sem clique, marketing 2026, OpenAI",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O número que a maioria das agências ainda não levou a sério: 26%
          das buscas terminam sem clique em nenhum resultado. E quem está
          de olho nesse vácuo é a{" "}
          <a href="https://openai.com" target="_blank" rel="noopener noreferrer">
            OpenAI
          </a>
          , que prepara anúncios dentro do ChatGPT &ldquo;que se comportam
          como Facebook, não Google&rdquo;.
        </Lead>

        <p>
          A leitura é de Neil Patel, que dedicou o vídeo mais recente ao
          assunto. Se a busca tradicional morre no clique, o formato de
          publicidade que sobra é o de impressão e intenção, o modelo que o
          Facebook dominou por uma década: o anúncio não espera a pesquisa,
          ele aparece no meio da conversa com o assistente.
        </p>

        <H2>Os dados que sustentam a mudança</H2>

        <List>
          <li>26% das buscas terminam sem clique em resultado algum.</li>
          <li>O Instagram sozinho processa 6,5 bilhões de buscas por dia.</li>
          <li>O ChatGPT prepara um modelo de ads baseado em intenção e contexto, não em palavra-chave.</li>
          <li>Quem ainda opera com mentalidade de funil 2024 já está atrás.</li>
        </List>

        <p>
          O ponto prático para quem vende serviços: a distribuição paga está
          migrando do momento da busca para o momento da conversa. Campanhas
          que funcionavam no Google Ads precisam ser repensadas para aparecer
          dentro de respostas de IA, com contexto e recomendação, não com
          listagem. Quem mapear isso antes dos concorrentes compra tráfego
          barato numa plataforma que ainda não tem leilão maduro.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.youtube.com/watch?v=hXPALnu3Y6I"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neil Patel (YouTube)
          </a>
          . Quer entender como posicionar sua marca para esse novo canal? Veja
          a{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            consultoria de IA aplicada a marketing
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
