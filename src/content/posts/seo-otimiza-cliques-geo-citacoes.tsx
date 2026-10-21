import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "seo-otimiza-cliques-geo-citacoes",
    title: "SEO otimiza cliques, GEO otimiza citações",
    teaser:
      "A frase que resume a virada de 2026: SEO te coloca na lista, GEO te torna a resposta que a IA cita. A diferença é mais do que conceitual.",
    category: "SEO/GEO",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "mediaplus.global (Instagram)",
      url: "https://www.instagram.com/reel/Db5mS7CMiXR/",
    },
    heroImage: {
      url: "/news/seo-otimiza-cliques-geo-citacoes.webp",
      alt: "Duas telas lado a lado: lista de resultados de busca e painel de resposta de IA",
    },
    seo: {
      metaTitle: "SEO otimiza cliques, GEO otimiza citações — entenda",
      metaDescription:
        "A frase que resume a mudança: SEO otimiza cliques, GEO otimiza citações. SEO te coloca na lista; GEO te torna a resposta que a IA cita.",
      metaKeywords:
        "SEO vs GEO, otimização para IA, citações IA, GEO, generative engine optimization",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          &ldquo;SEO is optimizing for clicks, and GEO is optimizing for
          citations.&rdquo; A frase, que circula no Instagram (mediaplus.global),
          é a melhor síntese da virada que estamos vivendo: SEO te coloca na
          lista; <strong>GEO te torna a resposta que a IA cita</strong>.
        </Lead>

        <p>
          Não é só troca de sigla. São objetivos diferentes. O SEO clássico
          disputa visibilidade numa página de resultados — o prêmio é o
          clique. O GEO disputa a memória do modelo — o prêmio é ser o nome
          que aparece quando alguém pergunta. E quando a IA responde com dois
          ou três nomes, quem fica de fora não recebe clique nenhum.
        </p>

        <H2>A diferença na prática</H2>

        <List>
          <li>
            <strong>SEO</strong> mede posição, CTR e cliques. O jogo termina
            quando o usuário entra no site.
          </li>
          <li>
            <strong>GEO</strong> mede citação, menção e extração. O jogo
            termina quando o modelo decide incluir (ou não) a sua marca na
            resposta.
          </li>
          <li>
            <strong>Na busca tradicional</strong>, dez links competem.{" "}
            <strong>Na resposta de IA</strong>, duas ou três fontes ganham — e
            as outras nem aparecem.
          </li>
        </List>

        <p>
          Isso não significa que SEO morreu. Significa que SEO virou pré-requisito
          e GEO virou o diferencial. O site precisa existir, carregar rápido e
          ter autoridade — mas precisa também ser extraível: schema, respostas
          diretas, conteúdo estruturado, presença de marca consistente. É a
          combinação dos dois que sustenta presença nas respostas de IA.
        </p>

        <p>
          Quem quer saber onde está hoje nesse jogo pode começar com um{" "}
          <a href="/baseline-geo">
            diagnóstico gratuito de presença em motores de IA
          </a>
          . Em sete dias você descobre se o seu nome aparece quando o ChatGPT
          responde sobre o seu serviço — e o que falta para aparecer.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.instagram.com/reel/Db5mS7CMiXR/"
            target="_blank"
            rel="noopener noreferrer"
          >
            mediaplus.global no Instagram
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
