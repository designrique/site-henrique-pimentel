import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List, Quote } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "creators-infraestrutura-busca-ia",
    title: "YouTube aparece em 29,5% dos AI Overviews e vira infraestrutura de busca",
    teaser:
      "Mais de 40% das buscas nos EUA já acionam resumo de IA, e o YouTube surgiu em 29,5% deles. Quem foi exposto a uma recomendação de IA teve 2,5x mais chance de visitar a marca.",
    category: "Marketing Digital",
    publishedDate: "2026-10-22",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Influencer Strategists",
      url: "https://www.influencerstrategists.com/insights/how-to-win-in-ai-search-with-influencer-marketing-in-2026",
    },
    seo: {
      metaTitle: "YouTube em 29,5% dos AI Overviews: creators viram busca",
      metaDescription:
        "Mais de 40% das buscas nos EUA acionam AI Overviews e o YouTube aparece em 29,5% deles. Creators entram no centro da descoberta por IA.",
      metaKeywords:
        "AI Overviews, YouTube, creator marketing, busca por IA, BrightEdge, GEO",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Influenciador deixou de ser linha de awareness no orçamento. Virou
          camada de indexação: o conteúdo de creator é o que os motores
          generativos citam quando alguém faz uma pergunta.
        </Lead>

        <p>
          Os números que sustentam a tese: mais de <strong>40%</strong> das
          buscas nos Estados Unidos já acionam AI Overviews, e o YouTube
          apareceu em <strong>29,5%</strong> dos resumos gerados no levantamento
          da BrightEdge. Na outra ponta do funil, quem foi exposto a uma
          recomendação de IA teve <strong>2,5 vezes mais</strong> probabilidade
          de visitar a marca em sete dias.
        </p>

        <Quote>
          It&rsquo;s clear that AI influence is happening. What marketers need
          now is a new way to measure and attribute that impact.
          <span className="not-italic"> Rand Fishkin</span>
        </Quote>

        <H2>O que muda no planejamento</H2>

        <List>
          <li>
            Vídeo revisado por creator vira ativo de busca, porque modelos
            generativos preferem fonte com rosto, contexto e demonstração.
          </li>
          <li>
            Medir menção e visita assistida pesa mais que contar views soltas.
          </li>
          <li>
            Parceria com perfil médio entrega recorte de nicho, que é o que
            alimenta a pergunta específica do comprador.
          </li>
        </List>

        <p>
          O estudo completo está no{" "}
          <a
            href="https://www.influencerstrategists.com/insights/how-to-win-in-ai-search-with-influencer-marketing-in-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            Influencer Strategists
          </a>
          . Para quem trabalha com{" "}
          <a href="/servicos/consultoria-ia">consultoria de IA aplicada</a>, o
          recado é direto: creator não é enfeite de campanha, é matéria-prima de
          citação.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.influencerstrategists.com/insights/how-to-win-in-ai-search-with-influencer-marketing-in-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            Influencer Strategists
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
