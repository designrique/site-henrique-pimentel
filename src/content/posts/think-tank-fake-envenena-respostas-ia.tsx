import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "think-tank-fake-envenena-respostas-ia",
    title: "Think tank fake criado para envenenar respostas de IA é exposto",
    teaser:
      "Reportagem do Guardian com 247 pontos no Hacker News revela think tank fictício financiado para inserir narrativas em respostas de IA. Quando citação vira métrica, manipulação vira indústria.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-04",
    readingTime: "3 min",
    news: true,
    source: {
      name: "The Guardian",
      url: "https://www.theguardian.com/world/2026/aug/26/fake-thinktank-israel-ai-propaganda",
    },
    heroImage: {
      url: "/news/think-tank-fake-envenena-respostas-ia.webp",
      alt: "Mão despejando líquido escuro em copo de água ao lado de notebook aberto em mesa de reunião",
    },
    seo: {
      metaTitle: "Think tank fake envenena respostas de IA, revela Guardian",
      metaDescription:
        "Organização fictícia foi financiada para inserir narrativas em respostas de IA. O lado sombrio do GEO: quando citação vira métrica, manipulação vira indústria.",
      metaKeywords: "fake think tank, manipulação de IA, GEO, propaganda, Guardian",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O lado sombrio da otimização para IA ganhou rosto: o Guardian
          revelou a existência de um think tank fictício, criado e financiado
          para inserir narrativas específicas nas respostas de modelos de
          linguagem. A reportagem somou 247 pontos no Hacker News e
          transformou a manipulação de respostas de IA em assunto mainstream.
        </Lead>

        <p>
          A mecânica é direta: modelos de IA sintetizam informação de fontes
          que consideram confiáveis. Se uma organização com aparência legítima
          publica estudos, pareceres e citações de especialistas, o conteúdo
          entra no corpus que os modelos leem e reaparece nas respostas como
          fato. Não é hack: é engenharia social dirigida ao processo de
          citação.
        </p>

        <H2>O que isso expõe sobre o GEO</H2>

        <List>
          <li>Citação virou métrica de negócio, e métrica atrai manipulação industrial.</li>
          <li>Fontes citáveis com aparência de autoridade são o vetor de entrada.</li>
          <li>Usuários raramente checam a origem primária do que a IA responde.</li>
          <li>Plataformas não têm verificação robusta de entidades citadas.</li>
        </List>

        <p>
          Para quem trabalha com GEO, o caso é um lembrete incômodo: as mesmas
          técnicas que posicionam marcas legítimas em respostas de IA servem
          para posicionar narrativas falsas. A diferença entre os dois usos é
          apenas a veracidade do conteúdo de origem. E a resposta de mercado
          tende a ser mais checagem de fonte, não menos otimização.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.theguardian.com/world/2026/aug/26/fake-thinktank-israel-ai-propaganda"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Guardian
          </a>
          . Veja também o{" "}
          <a href="/baseline-geo" target="_blank" rel="noopener noreferrer">
            baseline de GEO
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
