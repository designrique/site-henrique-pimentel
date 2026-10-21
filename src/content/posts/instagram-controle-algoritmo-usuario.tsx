import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "instagram-controle-algoritmo-usuario",
    title: "Instagram devolve o controle do feed: Your Algorithm e reset de sugestões",
    teaser:
      "O recurso de calibragem do algoritmo chegou ao feed principal e qualquer usuário pode zerar o histórico de recomendações sem apagar a conta.",
    category: "Social Media",
    publishedDate: "2026-09-15",
    readingTime: "2 min",
    news: true,
    source: {
      name: "Hootsuite",
      url: "https://blog.hootsuite.com/instagram-algorithm/",
    },
    heroImage: {
      url: "/news/instagram-controle-algoritmo-usuario.webp",
      alt: "Duas mãos segurando um smartphone com controles deslizantes e interruptores de preferência na tela",
    },
    seo: {
      metaTitle: "Instagram dá controle do feed ao usuário: Your Algorithm",
      metaDescription:
        "Your Algorithm chegou ao feed principal do Instagram e o Reset Suggested Content apaga o histórico de recomendações. Entenda o que muda para quem publica.",
      metaKeywords: "Instagram, Your Algorithm, algoritmo, Reset Suggested Content, feed",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Instagram colocou a alavanca do algoritmo na mão de quem usa o app.
          O &ldquo;Your Algorithm&rdquo;, antes restrito a testes em Reels,
          chegou ao feed principal, e o &ldquo;Reset Suggested Content&rdquo;
          permite zerar o histórico de recomendações.
        </Lead>

        <p>
          As duas mudanças atacam o mesmo problema: a sensação de feed imposto.
          Em vez de reclamar que a plataforma não entende o usuário, ele ajusta
          o que quer ver e, quando o histórico já está contaminado, reinicia a
          base de recomendação. Também pesa no ranking o compartilhamento
          direto: envios no direct contam mais que curtidas.
        </p>

        <H2>O que mudou na prática</H2>

        <List>
          <li>Your Algorithm saiu dos Reels e chegou ao feed principal.</li>
          <li>
            Reset Suggested Content permite limpar o histórico de recomendações
            sem criar conta nova.
          </li>
          <li>Sends e shares pesam mais no ranking do que curtidas.</li>
          <li>
            Curadoria do usuário vira variável de distribuição, não só o
            desempenho do post.
          </li>
        </List>

        <p>
          Para quem publica, a consequência é desconfortável e útil ao mesmo
          tempo. Se o usuário pode calibrar e resetar o que vê, conteúdo médio
          genérico perde a chance de aparecer para quem não pediu. Nicho bem
          definido, que o usuário escolheu ver, ganha peso relativo.
        </p>

        <p>
          É o mesmo movimento que o Threads fez com o seu controle privado de
          feed. As plataformas da Meta estão transferindo a responsabilidade da
          curadoria para o usuário, o que na prática significa menos desculpa:
          quem não é visto agora pode ter sido apenas desmarcado.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://blog.hootsuite.com/instagram-algorithm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hootsuite
          </a>
          . A base de conteúdo e descoberta por IA está em{" "}
          <a href="/baseline-geo" target="_blank" rel="noopener noreferrer">
            /baseline-geo
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
