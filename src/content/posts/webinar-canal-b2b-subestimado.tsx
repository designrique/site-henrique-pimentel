import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "webinar-canal-b2b-subestimado",
    title: "Webinar é o canal B2B mais subestimado: 1.100 leads a US$ 50 cada",
    teaser:
      "Caso documentado de 1.100 leads a US$ 50 por lead contra média de mercado de US$ 595. Para 73% dos marketers B2B, webinar é a principal fonte de leads.",
    category: "Marketing Digital",
    publishedDate: "2026-09-02",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Lillian Pierson (YouTube)",
      url: "https://www.youtube.com/watch?v=N0tZnFkUwuU",
    },
    heroImage: {
      url: "/news/webinar-canal-b2b-subestimado.webp",
      alt: "Apresentador gravando webinar com iluminação suave e câmera voltada para notebook",
    },
    seo: {
      metaTitle: "Webinar: o canal B2B mais subestimado de 2026",
      metaDescription:
        "Caso documentado gerou 1.100 leads a US$ 50 cada contra média de US$ 595. Para 73% dos marketers B2B, webinar é a fonte principal de leads.",
      metaKeywords: "webinar B2B, geração de leads, custo por lead, marketing B2B 2026",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Enquanto todo mundo briga por atenção no feed, o webinar entrega
          lead qualificado por uma fração do preço. Caso documentado pela
          fractional CMO Lillian Pierson:{" "}
          <strong>1.100 leads a US$ 50 por lead</strong>, contra média de
          mercado de US$ 595. Uma diferença de mais de 10 vezes.
        </Lead>

        <p>
          O número não é anomalia. Para <strong>73% dos marketers B2B</strong>,
          webinar é a principal fonte de leads. O formato força o que anúncio
          não consegue: atenção contínua de 30 a 60 minutos de alguém que
          decidiu estar ali.
        </p>

        <H2>Por que funciona</H2>

        <List>
          <li>Autoqualificação: quem se inscreve já tem interesse no tema.</li>
          <li>Autoridade demonstrada ao vivo, não prometida em copy.</li>
          <li>Conteúdo reaproveitável em cliques, posts e newsletter.</li>
          <li>Lista de e-mails capturada com permissão explícita.</li>
        </List>

        <p>
          O contraonto com a tese da HubSpot é direto: o feed aberto está
          saturado de conteúdo médio de IA, e espaços onde há entrega real de
          valor em tempo vivo, como webinars, viraram o lugar onde a
          conversão acontece.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.youtube.com/watch?v=N0tZnFkUwuU"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lillian Pierson no YouTube
          </a>
          . Como transformar essa atenção em pipeline:{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            consultoria de IA
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
