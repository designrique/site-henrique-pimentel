import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "own-your-stack-automacao-substitui-revenda",
    title: "Own your stack: consultores de IA trocam revenda de plataforma por sistema próprio",
    teaser:
      "A narrativa que cresce no nicho de automação: parar de alugar GoHighLevel e construir stack própria com n8n self-hosted e Claude Code. O pitch mudou de configurar ferramenta para entregar sistema que é do cliente.",
    category: "Marketing Digital",
    publishedDate: "2026-09-04",
    readingTime: "3 min",
    news: true,
    source: {
      name: "ScrapeCreators (relatório semanal)",
      url: "https://scrapecreators.com",
    },
    heroImage: {
      url: "/news/own-your-stack-automacao-substitui-revenda.webp",
      alt: "Servidor homelab com luzes piscando em prateleira de madeira ao lado de notebook",
    },
    seo: {
      metaTitle: "Own your stack: a nova narrativa dos consultores de IA",
      metaDescription:
        "Consultores de automação trocam revenda de GoHighLevel por stack própria com n8n self-hosted e Claude Code. O pitch de venda mudou de configurar para construir.",
      metaKeywords: "own your stack, n8n self-hosted, automação, consultor de IA, GoHighLevel",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Uma mudança silenciosa está acontecendo no discurso de quem vende
          automação com IA. O criador @imjonathanacuna resumiu o movimento:
          parou de alugar GoHighLevel e passou a construir ferramentas
          próprias. Não é caso isolado. A narrativa de own-your-stack está
          substituindo o modelo de revenda de plataforma no nicho.
        </Lead>

        <p>
          A lógica econômica sustenta o discurso: revender plataforma significa
          pagar mensalidade perpétua e competir por margem com todos os outros
          revendedores da mesma ferramenta. Construir com n8n self-hosted e
          Claude Code transfere o ativo para o cliente, e o consultor cobra
          pelo sistema, não pela licença.
        </p>

        <H2>O pitch antes e depois</H2>

        <List>
          <li>Antes: eu configuro a ferramenta X para você, com margem na mensalidade.</li>
          <li>Agora: eu construo um sistema que é seu, sem dependência de licença de terceiros.</li>
          <li>Stack do momento: n8n self-hosted, Claude Code para scripts e lote, CapCut, Metricool.</li>
          <li>Risco do lado do cliente: menos suporte garantido, mais responsabilidade de manutenção.</li>
        </List>

        <p>
          Para quem compra automação, o movimento é bom e ruim ao mesmo tempo.
          Bom porque o sistema deixa de ser refém de uma plataforma e sua
          tabela de preços. Ruim porque a qualidade passa a depender
          inteiramente de quem construiu. O critério de escolha do fornecedor
          muda de marca da ferramenta para portfólio de quem entrega.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://scrapecreators.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            monitoramento ScrapeCreators
          </a>
          . Veja os{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            serviços de consultoria em IA
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
