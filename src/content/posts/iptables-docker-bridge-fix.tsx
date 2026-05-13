import type { PostEntry } from "@/lib/posts";
import { PostProse, Lead } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "iptables-docker-bridge-fix",
    title: "Iptables corruption em Docker bridge — diagnóstico e correção",
    teaser:
      "Quando containers da mesma bridge param de se comunicar, e como adicionar regra ACCEPT específica.",
    category: "Engenharia",
    publishedDate: "2026-04-25",
    readingTime: "7 min",
    draft: true,
    author: "Henrique Pimentel",
  },
  Content: function PostContent() {
    return (
      <PostProse>
        <Lead>
          Post em construção. Diagnóstico passo a passo de quando a
          comunicação inter-container quebra silenciosamente em uma
          bridge do Docker, e a regra de iptables que resolve.
        </Lead>
        <p>
          Inclui comandos de diagnóstico, padrão de logs do
          dockerd, e o script de teste que mantenho aberto.
        </p>
      </PostProse>
    );
  },
};

export default post;
