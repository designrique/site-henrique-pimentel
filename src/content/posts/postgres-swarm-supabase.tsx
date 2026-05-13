import type { PostEntry } from "@/lib/posts";
import { PostProse, Lead } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "postgres-swarm-supabase",
    title: "Postgres no Docker Swarm — por que não Supabase self-hosted",
    teaser:
      "Os 8 containers do Supabase consomem 4GB+ de RAM. Postgres puro + MinIO ou R2 resolve 90% dos casos com 200MB.",
    category: "Engenharia",
    publishedDate: "2026-04-28",
    readingTime: "11 min",
    draft: true,
    author: "Henrique Pimentel",
  },
  Content: function PostContent() {
    return (
      <PostProse>
        <Lead>
          Post em construção. Análise técnica de quando Supabase
          self-hosted faz sentido e quando Postgres + ferramentas
          menores cobre o mesmo escopo com fração do recurso.
        </Lead>
        <p>
          Detalhamento dos 8 containers do Supabase, consumo de
          memória, alternativas (PostgREST + Hasura + MinIO) e
          decisão técnica para projetos pequenos.
        </p>
      </PostProse>
    );
  },
};

export default post;
