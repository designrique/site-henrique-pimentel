import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "google-ai-mode-reserva-viagens",
    title: "AI Mode do Google Search agora reserva viagens",
    teaser:
      "Busca com IA passou a comparar hotéis, tarifas e milhas dentro do próprio resultado. Anunciado em 27/08, é mais um passo do Search agêntico.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-31",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Google AI Blog",
      url: "https://blog.google/products-and-platforms/products/search/book-travel-ai-mode/",
    },
    heroImage: {
      url: "/news/google-ai-mode-reserva-viagens.webp",
      alt: "Smartphone segurado na mão mostrando mapa abstrato com ícone de avião e pin de hotel",
    },
    seo: {
      metaTitle: "AI Mode do Search agora reserva viagens: hotéis e milhas",
      metaDescription:
        "O AI Mode do Google Search passou a reservar viagens: hotéis, tarifas e milhas dentro do próprio resultado de busca. O que muda para o usuário e para o SEO.",
      metaKeywords:
        "AI Mode, Google Search, reserva de viagens, busca com IA, SEO, Google agêntico",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Google anunciou em 27/08 que o <strong>AI Mode do Search</strong>{" "}
          agora reserva viagens: hotéis, tarifas e milhas comparadas dentro do
          próprio resultado de busca. A busca deixou de responder e passou a
          executar.
        </Lead>

        <p>
          A mudança é pequena em interface e grande em direção. Em vez de
          listar links de agências, o AI Mode organiza opções, compara preços e
          fecha a reserva sem o usuário sair do Google. Para quem vive de
          tráfego orgânico de turismo, o modelo de negócio inteiro muda.
        </p>

        <H2>O que isso significa</H2>

        <List>
          <li>
            <strong>Search executando tarefas:</strong> reserva é o primeiro
            passo; a mesma lógica deve alcançar serviços, agendamentos e
            compras.
          </li>
          <li>
            <strong>Menos cliques, mais transações:</strong> o valor migra do
            link para a conversão dentro da plataforma.
          </li>
          <li>
            <strong>Dados estruturados valem mais:</strong> quem fornece tarifa,
            disponibilidade e regras de milhas de forma legível sai na frente.
          </li>
        </List>

        <p>
          A leitura para negócios: depender de posição no ranking para vender
          viagem está ficando obsoleto. O jogo agora é ser a fonte que a IA
          escolhe citar e usar — o território que chamo de{" "}
          <a href="/baseline-geo">otimização para IA (GEO)</a>. Quem estruturar
          dados e autoridade agora, colhe quando o AI Mode virar padrão.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://blog.google/products-and-platforms/products/search/book-travel-ai-mode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google AI Blog
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
