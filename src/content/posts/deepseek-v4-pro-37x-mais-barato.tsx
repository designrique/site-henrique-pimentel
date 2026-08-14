import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "deepseek-v4-pro-37x-mais-barato",
    title: "DeepSeek V4 Pro: 80,6% do topo por 37x menos",
    teaser:
      "O melhor open-weight para código marca 80,6% no SWE-bench Verified por ~US$ 0,27/US$ 1,10 — contra US$ 10/US$ 50 do Claude Fable 5. Licença MIT.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Requesty",
      url: "https://www.requesty.ai/blog/best-ai-coding-model-2026-benchmarks-cost-performance",
    },
    heroImage: {
      url: "/news/deepseek-v4-pro-37x-mais-barato.webp",
      alt: "Código open-source em terminal com texto verde e mãos no teclado",
    },
    seo: {
      metaTitle: "DeepSeek V4 Pro: 80,6% no SWE-bench por 37x menos",
      metaDescription:
        "DeepSeek V4 Pro (MIT) marca 80,6% no SWE-bench Verified por ~US$ 0,27/US$ 1,10 por milhão de tokens — ~37x mais barato que Claude Fable 5.",
      metaKeywords:
        "DeepSeek V4 Pro, open-weight, SWE-bench Verified, modelo de código barato, MIT license, self-host",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O DeepSeek V4 Pro virou a resposta padrão para quem quer modelo de
          código open-weight sem amarras: <strong>80,6% no SWE-bench
          Verified</strong> por cerca de <strong>US$ 0,27 de entrada e US$
          1,10 de saída</strong> por milhão de tokens. O Claude Fable 5 lidera
          com 95%, mas cobra US$ 10/US$ 50 — <strong>~37x mais caro</strong>{" "}
          na entrada.
        </Lead>

        <p>
          A comparação ganha força com a licença MIT: o modelo pode ser
          self-hosted sem restrição de uso, o que muda completamente a conta
          para quem tem volume ou requisito de privacidade.
        </p>

        <H2>Onde o DeepSeek V4 Pro se encaixa</H2>

        <List>
          <li>
            <strong>Open-weight com licença MIT:</strong> self-host sem
            lock-in de provedor nem cláusula de uso restritiva.
          </li>
          <li>
            <strong>80,6% no SWE-bench Verified:</strong> empata com o Gemini
            3.1 Pro e fica a 14 pontos do topo absoluto — diferença que só
            pesa em tarefas de raciocínio profundo.
          </li>
          <li>
            <strong>Custo de produção viável:</strong> para volume alto de
            código, o preço por token permite escala que os modelos premium
            inviabilizam.
          </li>
        </List>

        <p>
          O Terminal-Bench (67,9%) fica abaixo dos líderes — ou seja, em loop
          agente autônomo ele perde para GPT-5.5 e Opus 4.8. Mas para o
          fluxo típico de desenvolvimento assistido, a relação qualidade-preço
          é difícil de bater.
        </p>

        <p>
          Na prática, a regra que venho aplicando: DeepSeek para o grosso do
          código e agentes de automação; modelos premium reservados para as
          tarefas que exigem o raciocínio mais fino. Montar essa arquitetura
          mista é parte do que faço na{" "}
          <a href="/servicos/consultoria-ia">consultoria de IA</a> — e a
          matemática de custo muda o ROI de qualquer pipeline.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.requesty.ai/blog/best-ai-coding-model-2026-benchmarks-cost-performance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Requesty — análise de benchmarks e custo 2026
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
