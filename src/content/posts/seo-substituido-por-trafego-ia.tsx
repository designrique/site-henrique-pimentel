import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "seo-substituido-por-trafego-ia",
    title: "SEO está sendo substituído pelo tráfego de IA — os números",
    teaser:
      "ChatGPT soma 800 milhões de usuários por semana, Perplexity processa 45 milhões de consultas por dia, e o tráfego de IA converte 4,4x mais.",
    category: "SEO/GEO",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "simplifiedhq (TikTok)",
      url: "https://www.tiktok.com/@simplifiedhq/video/7673562230905949453",
    },
    heroImage: {
      url: "/news/seo-substituido-por-trafego-ia.webp",
      alt: "Mapa de papel antigo ao lado de smartphone com interface de IA brilhante",
    },
    seo: {
      metaTitle: "SEO substituído por IA: 800M usuários/semana no ChatGPT",
      metaDescription:
        "ChatGPT tem 800 milhões de usuários por semana, Perplexity 45 milhões de consultas/dia e tráfego de IA converte 4,4x. O SEO como conhecemos está mudando.",
      metaKeywords:
        "SEO morreu, tráfego de IA, ChatGPT usuários, Perplexity, GEO, busca por IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          &ldquo;SEO is quietly being replaced&rdquo; — a frase, que circula no
          TikTok e em comunidades de marketing, agora vem com números:
          ChatGPT na casa de <strong>800 milhões de usuários por semana</strong>,
          Perplexity processando <strong>45 milhões de consultas por dia</strong>{" "}
          e tráfego de IA convertendo <strong>4,4x</strong> mais que o
          tráfego orgânico tradicional.
        </Lead>

        <p>
          Não é exagero dizer que a descoberta migrou. O usuário que antes
          digitava no Google agora pergunta ao ChatGPT, e a pergunta não
          devolve uma lista de links — devolve uma resposta com duas ou três
          fontes citadas. O jogo deixou de ser &ldquo;aparecer na página
          1&rdquo; e virou &ldquo;ser uma das fontes citadas&rdquo;.
        </p>

        <H2>Os três números que resumem a mudança</H2>

        <List>
          <li>
            <strong>800 milhões/semana</strong> — usuários ativos do ChatGPT,
            uma base maior que qualquer rede social de nicho.
          </li>
          <li>
            <strong>45 milhões/dia</strong> — consultas no Perplexity, motor
            construído inteiramente em torno de citações.
          </li>
          <li>
            <strong>4,4x</strong> — a conversão do tráfego que vem de IA
            comparado ao orgânico tradicional, na medição citada pelo
            simplifiedhq.
          </li>
        </List>

        <p>
          A pergunta que todo gestor de tráfego deveria fazer agora não é
          &ldquo;o SEO morreu?&rdquo; — é &ldquo;onde meu cliente pergunta e
          quem responde?&rdquo;. A resposta quase sempre passa por estruturar
          o site para extração por IA: schema, respostas diretas, llms.txt,
          presença de marca. É o caminho que descrevo no{" "}
          <a href="/servicos/consultoria-ia">trabalho de consultoria em IA</a>{" "}
          e que está documentado no meu guia sobre{" "}
          <a href="/blog/como-aparecer-no-chatgpt">
            como aparecer no ChatGPT
          </a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.tiktok.com/@simplifiedhq/video/7673562230905949453"
            target="_blank"
            rel="noopener noreferrer"
          >
            simplifiedhq no TikTok
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
