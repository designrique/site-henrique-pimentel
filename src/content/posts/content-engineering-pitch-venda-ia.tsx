import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "content-engineering-pitch-venda-ia",
    title: "Content engineering virou o pitch de venda de agências de IA",
    teaser:
      "Julia McCoy vende 'elimine 70+ horas de criação de conteúdo por semana'. Sabrina Ramonov publica '1 reel = US$ 120K ARR'. A máquina de conteúdo é o case, não o background.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-28",
    readingTime: "3 min",
    news: true,
    source: {
      name: "ScrapeCreators API (LinkedIn)",
      url: "https://www.linkedin.com/company/first-movers/",
    },
    heroImage: {
      url: "/news/content-engineering-pitch-venda-ia.webp",
      alt: "Caderno de planejamento de conteúdo com checkboxes ao lado de notebook com dashboard de métricas",
    },
    seo: {
      metaTitle: "Content engineering virou o pitch de venda de IA",
      metaDescription:
        "Agências de IA vendem a máquina de conteúdo como case: 'elimine 70+ horas/semana', '1 reel = US$ 120K ARR'. A stack de agosto: iPhone, CapCut, n8n e Claude em lote.",
      metaKeywords: "content engineering, agência IA, Julia McCoy, Sabrina Ramonov, automação conteúdo, n8n stack",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O pitch de venda do nicho de IA mudou: não se vende mais experiência,
          vende-se a <strong>máquina de conteúdo</strong>. Julia McCoy, da First
          Movers, anuncia no LinkedIn a eliminação de{" "}
          <strong>&ldquo;70+ horas de criação de conteúdo por semana&rdquo;</strong>.
          Sabrina Ramonov publica &ldquo;1 reel = US$ 120K ARR&rdquo; e um
          sistema com Claude Code para 250 posts semanais.
        </Lead>

        <p>
          O padrão observado no monitoramento da semana: o case é a máquina, não
          o background do criador. Quem mostra o sistema funcionando — roteiro em
          lote, automação, distribuição — converte melhor do que quem mostra
          credenciais.
        </p>

        <H2>A stack de agosto de 2026</H2>

        <List>
          <li>iPhone + luz natural para gravação.</li>
          <li>CapCut para edição de vídeo curto.</li>
          <li>n8n self-hosted para automação de publicação.</li>
          <li>Roteiro em lote com Claude ou ChatGPT.</li>
          <li>Metricool para agendamento e métricas.</li>
        </List>

        <p>
          A leitura para agências: o produto que se vende é o processo. Publicar
          os bastidores da própria operação — horas economizadas, volume
          produzido, resultado em ARR — é ao mesmo tempo marketing e prova
          social. O sistema vira o case, e o case vira o lead.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.linkedin.com/company/first-movers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            First Movers (LinkedIn)
          </a>{" "}
          ·{" "}
          <a href="https://www.instagram.com/sabrina.ramonov/" target="_blank" rel="noopener noreferrer">
            Sabrina Ramonov
          </a>
          . Leia também:{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
