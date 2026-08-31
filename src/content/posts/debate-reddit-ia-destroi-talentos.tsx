import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "debate-reddit-ia-destroi-talentos",
    title: "r/programacao: a IA está destruindo novos talentos?",
    teaser:
      "Desabafo no sub brasileiro reacende o debate sobre IA e aprendizado de programação. A resposta mais curtida ironiza: 'Textão de GPT reclamando de IA é foda.'",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-31",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Reddit r/programacao",
      url: "https://www.reddit.com/r/programacao/comments/1vy4u7n/desabafo_a_ia_está_destruindo_novos_talentos/",
    },
    heroImage: {
      url: "/news/debate-reddit-ia-destroi-talentos.webp",
      alt: "Smartphone sobre mesa exibindo discussão abstrata com setas de upvote, caderno e café ao lado",
    },
    seo: {
      metaTitle: "Debate no r/programacao: IA está destruindo talentos?",
      metaDescription:
        "Um desabafo no r/programacao sobre a IA destruir novos talentos virou debate com 36 comentários. A resposta top ironiza: 'Textão de GPT reclamando de IA é foda.'",
      metaKeywords:
        "IA e programação, r/programacao, novos talentos, debate devs, impacto IA carreira",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Um post intitulado &ldquo;Desabafo: a IA está destruindo novos
          talentos&rdquo; movimentou o <strong>r/programacao</strong> com 36
          comentários. A resposta mais curtida não poupou o autor:{" "}
          <strong>&ldquo;Textão de GPT reclamando de IA é foda.&rdquo;</strong>
        </Lead>

        <p>
          O debate é o mesmo que roda em inglês, mas com um tempero brasileiro:
          a preocupação com quem está começando — estagiários, juniores,
          estudantes — e a desconfiança de que boa parte do discurso sobre o
          tema já é gerada por IA. A ironia da resposta top diz muito sobre o
          momento.
        </p>

        <H2>O que está em jogo</H2>

        <List>
          <li>
            <strong>Mercado de júnior:</strong> vagas de entrada encolheram e a
            IA é o bode expiatório mais visível, mesmo quando a causa é
            econômica.
          </li>
          <li>
            <strong>Base de aprendizado:</strong> quem começa hoje aprende com
            IA no ombro; o problema é quando o copiloto vira muleta e o
            raciocínio nunca se forma.
          </li>
          <li>
            <strong>Discurso saturado:</strong> reclamações genéricas sobre IA
            perderam tração — a comunidade cobra argumento, não lamento.
          </li>
        </List>

        <p>
          Minha leitura: a IA não destruiu a porta de entrada, mudou o que se
          exige de quem entra. Quem usa IA para pular a parte de entender o
          problema vai patinar; quem usa para acelerar depois de entender,
          sai na frente. Esse é o recado que repito quando falo de{" "}
          <a href="/servicos/consultoria-ia">IA aplicada a negócios</a> — a
          ferramenta não substitui o julgamento, amplifica quem o tem.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://www.reddit.com/r/programacao/comments/1vy4u7n/desabafo_a_ia_está_destruindo_novos_talentos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reddit r/programacao
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
