import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "agencia-vs-consultor-ia",
    title: "Agência de IA vs consultor: o debate que move o nicho",
    teaser:
      "Conteúdo de posicionamento sobre a diferença entre agência e consultoria de IA bateu 40 mil views com 304 comentários em conta de 25 mil seguidores.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "ScrapeCreators API (Instagram)",
      url: "https://www.instagram.com/gerraai",
    },
    heroImage: {
      url: "/news/agencia-vs-consultor-ia.webp",
      alt: "Dois profissionais discutindo em mesa com notebooks, um apresentando proposta",
    },
    seo: {
      metaTitle: "Agência vs consultor de IA: o debate que move o nicho",
      metaDescription:
        "Conteúdo sobre agência vs consultoria de IA bateu 40 mil views e 304 comentários. Posicionamento claro virou o tema que segmenta o público certo no nicho de IA.",
      metaKeywords:
        "agência de IA, consultor de IA, posicionamento, nicho IA, Gera Baano, conteúdo de posicionamento",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          &ldquo;AI AGENCY vs AI CONSULTANT (a maioria erra isso)&rdquo; — o
          título do reel de <strong>Gera Baano</strong> (25,2 mil seguidores)
          fala direto com o público certo: 40 mil views e 304 comentários
          numa conta de tamanho médio. O debate entre agência e consultoria de
          IA é o que está movendo o nicho agora.
        </Lead>

        <p>
          O dado, da análise semanal de tendências para consultores de IA,
          revela demanda reprimida: conteúdo de posicionamento performa acima
          do tamanho da conta. Quem está no mercado de IA quer definir o que é
          — e o que não é.
        </p>

        <H2>A diferença que ninguém te conta</H2>

        <List>
          <li>
            <strong>Agência cobra por projeto e escopo:</strong> entrega
            execução, tem equipe, opera entregáveis.
          </li>
          <li>
            <strong>Consultor cobra por resultado e estratégia:</strong> vende
            direção, diagnóstico e implementação orientada — não volume de
            produção.
          </li>
          <li>
            <strong>O erro comum:</strong> tentar ser os dois ao mesmo tempo,
            sem modelo de preço nem proposta clara — e atrair o cliente
            errado.
          </li>
        </List>

        <p>
          O que os números mostram é que definir o próprio modelo de negócio
          virou conteúdo de alto engajamento — e, mais importante, filtro de
          lead. O cliente que quer automação pontual procura agência; o que
          quer transformar a operação procura consultor. Quem se posiciona
          atrai o contrato certo.
        </p>

        <p>
          É a distinção que eu deixo explícita no meu{" "}
          <a href="/servicos/consultoria-ia">
            trabalho de consultoria em IA
          </a>
          : diagnóstico, estratégia e implementação orientada — não produção
          em volume. O mercado está premiando quem sabe dizer o que é.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.instagram.com/gerraai"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gerraai no Instagram — dados via ScrapeCreators
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
