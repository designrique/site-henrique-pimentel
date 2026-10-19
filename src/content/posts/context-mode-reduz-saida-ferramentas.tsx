import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "context-mode-reduz-saida-ferramentas",
    title: "context-mode tenta cortar 98% da saída das ferramentas de IA",
    teaser:
      "O projeto ganhou tração no GitHub ao combinar redução de contexto e memória entre sessões. Menos saída também significa menos ruído para o agente.",
    category: "Inteligência Artificial",
    publishedDate: "2026-10-19",
    readingTime: "2 min",
    news: true,
    source: {
      name: "GitHub — mksglu/context-mode",
      url: "https://github.com/mksglu/context-mode",
    },
    heroImage: {
      url: "/news/context-mode-reduz-saida-ferramentas.webp",
      alt: "Desenvolvedor trabalha ao lado de anotações organizadas e um chip de memória iluminado",
    },
    seo: {
      metaTitle: "context-mode reduz saída de ferramentas para agentes",
      metaDescription:
        "O context-mode promete reduzir em 98% a saída de ferramentas e manter memória entre sessões. A aposta é diminuir ruído e custo em agentes.",
      metaKeywords:
        "context-mode, contexto para agentes, memória persistente, ferramentas de IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O <strong>context-mode</strong> ganhou destaque no GitHub com uma
          promessa que ataca um problema pouco glamouroso, mas caro: reduzir em
          até 98% o volume de saída produzido por ferramentas e preservar memória
          entre sessões.
        </Lead>
        <p>
          Agentes não ficam mais inteligentes só porque recebem mais texto. Uma
          resposta enorme de terminal, banco de dados ou navegador ocupa a
          janela de contexto e aumenta a chance de o modelo perder o que importa.
          Filtrar o resultado antes de devolvê-lo ao agente é uma otimização de
          infraestrutura, não um truque de prompt.
        </p>
        <H2>Por que isso importa na prática</H2>
        <List>
          <li>Menos tokens podem reduzir custo e latência em fluxos longos.</li>
          <li>Memória entre sessões evita repetir a mesma descoberta em cada execução.</li>
          <li>Saídas mais compactas diminuem o ruído que confunde agentes de código.</li>
        </List>
        <p>
          A ressalva é importante: resumir demais pode apagar evidência útil. O
          ganho só aparece quando o sistema conserva links, estados e detalhes
          necessários para auditoria. Em projetos reais, vale medir custo por
          tarefa concluída, não apenas tokens economizados. O projeto conversa
          diretamente com o <a href="/noticias/agent-skills-engenharia-agentes">ecossistema de skills para agentes</a>,
          que também está migrando da demonstração para a operação.
        </p>
        <p>
          Fonte:{" "}
          <a href="https://github.com/mksglu/context-mode" target="_blank" rel="noopener noreferrer">
            GitHub — mksglu/context-mode
          </a>.
        </p>
      </PostProse>
    );
  },
};

export default post;
