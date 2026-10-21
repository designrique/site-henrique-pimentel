import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "openai-gpt-56-luna-corte-preco",
    title: "OpenAI corta preço do GPT-5.6 Luna em 80%",
    teaser:
      "Modelo de entrada da OpenAI custa agora US$ 0,20 por milhão de tokens, enquanto o ChatGPT passa de 1 bilhão de usuários semanais.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "AI Apps Blog",
      url: "https://www.aiapps.com/blog/ai-news-august-breakthroughs-launches-trends-cant-miss/",
    },
    heroImage: {
      url: "/news/openai-gpt-56-luna-corte-preco.webp",
      alt: "Painel com gráfico de preço de IA em queda em escritório moderno",
    },
    seo: {
      metaTitle: "GPT-5.6 Luna 80% mais barato: OpenAI disputa volume",
      metaDescription:
        "OpenAI cortou o preço do GPT-5.6 Luna em 80% (US$ 0,20 por 1M de tokens) e o ChatGPT passou de 1 bilhão de usuários ativos por semana.",
      metaKeywords:
        "GPT-5.6 Luna, preço OpenAI, ChatGPT 1 bilhão, modelos IA custo, API IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          A OpenAI cortou o preço do GPT-5.6 Luna em 80%. O modelo de entrada
          da API passou a custar US$ 0,20 por milhão de tokens de entrada —
          e, no mesmo movimento, o ChatGPT cruzou a marca de 1 bilhão de
          usuários ativos por semana.
        </Lead>

        <p>
          Os dois números contam a mesma história: a disputa de modelos saiu
          da qualidade pura e entrou na guerra de escala. Baratear o acesso
          ao modelo mais fraco da linha é a forma que a OpenAI encontrou de
          segurar quem só precisa de automação simples — e de empurrar quem
          precisa de mais capacidade para os planos superiores.
        </p>

        <H2>O que o corte muda na prática</H2>

        <List>
          <li>
            <strong>Automação trivial ficou barata de verdade:</strong>{" "}
            tarefas de classificação, extração e resposta simples agora
            custam centavos em volume.
          </li>
          <li>
            <strong>Pressão sobre concorrentes:</strong> modelos chineses de
            baixo custo, como DeepSeek e Qwen, ganharam um rival direto no
            mesmo terreno de preço.
          </li>
          <li>
            <strong>Adoção em escala:</strong> com 1 bilhão de usuários
            semanais, o ChatGPT virou porta de entrada padrão para IA — e
            quem aparece bem citado nele ganha tráfego.
          </li>
        </List>

        <p>
          Para quem usa IA em produção, a leitura é direta: o custo por
          chamada deixou de ser o gargalo. O que separa um projeto que escala
          de um que não sai do papel é desenho de fluxo e qualidade do dado —
          não mais o preço do token. É esse o tipo de decisão que entra no{" "}
          <a href="/servicos/consultoria-ia">
            trabalho de consultoria em IA para empresas
          </a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.aiapps.com/blog/ai-news-august-breakthroughs-launches-trends-cant-miss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI Apps Blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
