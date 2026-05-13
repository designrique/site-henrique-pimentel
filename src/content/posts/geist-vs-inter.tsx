import type { PostEntry } from "@/lib/posts";
import { PostProse, Lead } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "geist-vs-inter",
    title: "Por que abandonei Inter por Geist em projetos premium",
    teaser:
      "Inter virou genérico. Geist mantém neutralidade técnica com mais caráter. Comparação visual e técnica.",
    category: "Engenharia",
    publishedDate: "2026-05-01",
    readingTime: "4 min",
    draft: true,
    author: "Henrique Pimentel",
  },
  Content: function PostContent() {
    return (
      <PostProse>
        <Lead>
          Post em construção. Análise técnica e visual entre as
          fontes Inter (Rasmus Andersson, 2017) e Geist (Vercel,
          2024) em projetos profissionais.
        </Lead>
        <p>
          Em breve detalhamento sobre métricas, suporte a OpenType,
          variantes e quando cada uma faz sentido.
        </p>
      </PostProse>
    );
  },
};

export default post;
