import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "glm-53-lidera-seguranca-codigo-aberto",
    title: "GLM-5.3 lidera detecção de vulnerabilidades em código, à frente de Anthropic e OpenAI",
    teaser:
      "O modelo open-weight da Zhipu que empatou no topo do coding também assume a primeira posição no benchmark de security review, superando os fechados ocidentais. Pesos abertos com preço de $0,68 por tarefa.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-04",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Zhipu AI",
      url: "https://huggingface.co/zai-org",
    },
    heroImage: {
      url: "/news/glm-53-lidera-seguranca-codigo-aberto.webp",
      alt: "Tela de código com alertas de segurança destacados em âmbar sobre teclado ao fundo",
    },
    seo: {
      metaTitle: "GLM-5.3 lidera detecção de vulnerabilidades em código",
      metaDescription:
        "O modelo open-weight da Zhipu assume o primeiro lugar em security review de código, à frente de Anthropic e OpenAI, a $0,68 por tarefa.",
      metaKeywords: "GLM-5.3, segurança de código, vulnerabilidades, open weights, Zhipu",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O GLM-5.3, da Zhipu, já havia empatado no topo dos modelos
          open-weights de coding com 60 pontos de inteligência. A revelação da
          semana veio de outro benchmark: o modelo lidera a detecção de
          vulnerabilidades em código, à frente dos modelos fechados da
          Anthropic e da OpenAI. Pesos abertos, $0,68 por tarefa concluída.
        </Lead>

        <p>
          Para times de segurança, o dado quebra uma resistência comum: usar
          modelo chinês de pesos abertos para revisar código sensível. A
          resposta da prática tem sido rodar o modelo localmente, já que os
          pesos estão publicados no Hugging Face sob licença própria da Zhipu
          com restrições comerciais. Quem precisa de licença sem dedos, a linha
          MIT continua disponível no GLM-5.2 e no GLM-5.3-Flash.
        </p>

        <H2>O retrato do modelo na tabela semanal</H2>

        <List>
          <li>60 pontos de inteligência, empate com o Kimi K3 no topo dos open-weights.</li>
          <li>88,2% no Terminal-Bench v2.1, primeiro lugar em security review.</li>
          <li>$0,68 por tarefa, cerca de 5x mais barato que o Claude Opus 5.</li>
          <li>A variante Flash, MIT e multimodal, custa $0,09 por tarefa.</li>
        </List>

        <p>
          A constatação maior é sobre o gap que fechou: em coding e agora em
          security review, os modelos abertos chineses alcançaram a fronteira.
          Para revisão de dependências, auditoria de PRs e triagem de
          vulnerabilidades em volume, o custo-benefício não tem rival
          ocidental próximo.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://huggingface.co/zai-org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zhipu AI no Hugging Face
          </a>
          . Confira a{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            análise de custo-benefício no blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
