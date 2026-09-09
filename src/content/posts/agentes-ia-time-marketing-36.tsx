import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "agentes-ia-time-marketing-36",
    title: "36 agentes de IA tocam um time de marketing inteiro",
    teaser:
      "Um criador opera '23 funcionários' com 36 agentes de IA em pesquisa, conteúdo, criativo e distribuição. O case passou de 164 mil views no TikTok.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-09",
    readingTime: "3 min",
    news: true,
    source: {
      name: "TikTok (@structurewebworks)",
      url: "https://www.tiktok.com/@structurewebworks/video/7682977055826251028",
    },
    heroImage: {
      url: "/news/agentes-ia-time-marketing-36.webp",
      alt: "Uma única pessoa diante de uma parede de monitores, cada tela mostrando um agente de IA diferente trabalhando em tarefas de marketing",
    },
    seo: {
      metaTitle: "36 agentes de IA tocam um time de marketing inteiro",
      metaDescription:
        "Um criador opera '23 funcionários' com 36 agentes de IA em pesquisa, conteúdo e distribuição. O case passou de 164 mil views no TikTok.",
      metaKeywords: "agentes de IA, marketing com IA, automação, operador solo, TikTok",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          &ldquo;Marketing isn&rsquo;t a funnel, it&rsquo;s a loop.&rdquo; A
          frase resume o case que viralizou no{" "}
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
          : um criador opera o equivalente a 23 funcionários usando 36
          agentes de IA que rodam pesquisa, conteúdo, criativo,
          distribuição e analytics. O vídeo passou de 164 mil views e 8,4
          mil likes.
        </Lead>

        <p>
          A conta, da estrutura de @structurewebworks, é o exemplo mais
          completo até agora do que significa tocar marketing sem time: os
          agentes não fazem só texto. Eles pesquisam, geram criativos,
          publicam, medem e devolvem o aprendizado para a próxima rodada.
          É o loop marketing funcionando de ponta a ponta, com uma pessoa
          no comando.
        </p>

        <H2>O que o case ensina</H2>

        <List>
          <li>36 agentes cobrem pesquisa, conteúdo, criativo, distribuição e analytics.</li>
          <li>O modelo substitui campanhas isoladas por um sistema fechado de feedback.</li>
          <li>164 mil views em poucos dias mostram que a narrativa do operador solo engaja.</li>
          <li>A escalada é de processo, não de contratação.</li>
        </List>

        <p>
          A leitura honesta para agências: o diferencial competitivo está
          migrando de quantas pessoas você tem para quão bem seus agentes
          se conversam. Quem estrutura esse sistema hoje entrega mais com
          menos e cobra por resultado, não por hora de equipe.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.tiktok.com/@structurewebworks/video/7682977055826251028"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok (@structurewebworks)
          </a>
          . Quer montar um time de agentes para sua operação? Veja como a{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            consultoria de IA
          </a>{" "}
          estrutura esse processo.
        </p>
      </PostProse>
    );
  },
};

export default post;
