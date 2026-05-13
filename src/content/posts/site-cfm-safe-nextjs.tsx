import type { PostEntry } from "@/lib/posts";
import { PostProse, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "site-cfm-safe-nextjs",
    title: "Ferramentas de um site médico dentro das regras do CFM em Next.js 16",
    teaser:
      "Marcação técnica MedicalBusiness, llms.txt, ARIA, e os 4 erros que advogados de marketing médico cometem no código do site.",
    category: "Engenharia",
    publishedDate: "2026-05-05",
    readingTime: "10 min",
    draft: true,
    author: "Henrique Pimentel",
    seo: {
      metaTitle: "Site médico CFM-safe em Next.js 16 | Henrique Pimentel",
      metaDescription:
        "Como construir um site médico dentro das regras do CFM 2.336/2023 usando Next.js 16: marcação Schema.org Physician, llms.txt, conteúdo permitido vs proibido.",
    },
  },
  Content: function PostContent() {
    return (
      <PostProse>
        <Lead>
          Post em construção. Em breve detalhe técnico completo das
          ferramentas usadas para construir um site médico que
          respeita a Resolução CFM 2.336/2023 e ao mesmo tempo é
          reconhecido como referência pelas IAs.
        </Lead>
        <p>Tópicos previstos:</p>
        <List>
          <li>Marcação Schema.org Physician + MedicalBusiness</li>
          <li>Arquivo llms.txt e robots.txt para motores generativos</li>
          <li>Open Graph + Twitter Card médicos</li>
          <li>4 erros comuns em sites de médico no Brasil</li>
          <li>Estrutura de blog dentro das regras do CFM</li>
        </List>
        <p>
          Enquanto isso, leia o caso real da{" "}
          <a href="/blog/baseline-fatima">Dra. Fátima Knappe</a> ou
          peça o{" "}
          <a href="/baseline-geo?vertical=medico">
            diagnóstico gratuito de citações pela IA
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
