import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "trafego-llm-converte-6x-google",
    title: "Tráfego vindo de IA converte 6x mais que o do Google",
    teaser:
      "A Webflow mediu a diferença na prática: visitantes que chegam por LLMs compram 6 vezes mais que os da busca tradicional. Ethan Smith comentou no Lenny's Podcast.",
    category: "SEO/GEO",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Lenny's Podcast (YouTube)",
      url: "https://www.youtube.com/watch?v=iT7kq-R3Gjc",
    },
    heroImage: {
      url: "/news/trafego-llm-converte-6x-google.webp",
      alt: "Tela de analytics de e-commerce com funil de conversão em gráfico ascendente",
    },
    seo: {
      metaTitle: "Tráfego de IA converte 6x mais que Google (Webflow)",
      metaDescription:
        "Webflow mediu 6x mais conversão no tráfego vindo de LLMs vs busca do Google. Ethan Smith (Graphite) detalha o dado no Lenny's Podcast.",
      metaKeywords:
        "tráfego de IA, conversão LLM, Webflow, GEO, marketing de busca, Google vs IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Um número que vale a pena guardar: <strong>6x</strong>. Foi a
          diferença de conversão que a Webflow mediu entre o tráfego vindo de
          modelos de linguagem e o tráfego vindo da busca do Google. Quem
          chega pelo ChatGPT ou Perplexity converte seis vezes mais.
        </Lead>

        <p>
          O dado foi revelado por Ethan Smith, da Graphite, no{" "}
          <a
            href="https://www.youtube.com/watch?v=iT7kq-R3Gjc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lenny's Podcast
          </a>
          : &ldquo;Webflow saw a 6x conversion rate difference between LLM
          traffic and Google search traffic.&rdquo;
        </p>

        <p>
          Faz sentido quando você pensa no funil. A busca tradicional entrega
          dez links e o usuário filtra sozinho. A resposta de IA já chega
          filtrada: quem é citado ali foi escolhido por um modelo que resumiu
          a intenção. O visitante que clica numa citação já passou pela etapa
          de curadoria — chega mais perto da decisão.
        </p>

        <H2>O que muda na estratégia</H2>

        <List>
          <li>
            Volume de tráfego deixou de ser a única régua. Um visitante de IA
            vale mais que um visitante de busca, e o planejamento precisa
            refletir isso.
          </li>
          <li>
            O trabalho deixa de ser &ldquo;aparecer no topo&rdquo; e passa a
            ser &ldquo;ser a resposta citada&rdquo; — conteúdo estruturado para
            extração, respostas diretas, dados verificáveis.
          </li>
          <li>
            Medir conversão por origem de tráfego virou prioridade para
            separar o que gera receita do que gera clique.
          </li>
        </List>

        <p>
          Se a tendência se mantém, o tráfego de IA vai deixar de ser
          curiosidade e virar o canal com melhor retorno do funil. Quem
          estrutura o site para extração hoje — com{" "}
          <a href="/blog/como-aparecer-no-chatgpt">
            schema, respostas diretas e llms.txt
          </a>{" "}
          — sai na frente quando o volume crescer.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.youtube.com/watch?v=iT7kq-R3Gjc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lenny's Podcast — entrevista com Ethan Smith (Graphite)
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
