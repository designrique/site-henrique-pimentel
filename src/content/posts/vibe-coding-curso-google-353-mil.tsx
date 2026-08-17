import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "vibe-coding-curso-google-353-mil",
    title: "353 mil pessoas fizeram o curso de vibe coding do Google",
    teaser:
      "O curso de \"vibe coding\" do Google atraiu 353 mil alunos — sinal de que criar software com IA virou habilidade de massa, não só de devs.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Google",
      url: "https://blog.google/innovation-and-ai/technology/developers-tools/ai-agents-intensive-recap-2026/",
    },
    heroImage: {
      url: "/news/vibe-coding-curso-google-353-mil.webp",
      alt: "Sala de aula com alunos em notebooks, telas com código e luz natural",
    },
    seo: {
      metaTitle: "Vibe coding: curso do Google atrai 353 mil alunos",
      metaDescription:
        "353 mil pessoas fizeram o curso de vibe coding do Google. Criar software com IA virou habilidade de massa — e muda o jogo para pequenas empresas.",
      metaKeywords:
        "vibe coding, curso Google, criar software com IA, no-code, IA para negócios",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O curso de "vibe coding" do Google teve 353 mil inscritos. O número
          diz mais do que parece: descrever um software em linguagem natural
          e deixar a IA escrever o código deixou de ser curiosidade de
          entusiasta — virou habilidade de massa.
        </Lead>

        <p>
          Vibe coding é o ato de construir software descrevendo o que você
          quer, em vez de escrever cada linha. O Google ensinou o método em
          escala e encontrou audiência: 353 mil pessoas querem criar coisas
          com IA sem virarem programadoras formais. Para o mercado, o efeito
          é duplo — mais gente produzindo soluções próprias e mais demanda
          por quem sabe transformar protótipo em produto sólido.
        </p>

        <H2>O que muda para os negócios</H2>

        <List>
          <li>
            <strong>Prototipagem instantânea:</strong> testar uma ideia de
            ferramenta interna custa horas, não semanas.
          </li>
          <li>
            <strong>Menos dependência:</strong> pequenas empresas podem
            resolver problemas operacionais sem contratar dev.
          </li>
          <li>
            <strong>Limite claro:</strong> o que a IA gera precisa de revisão
            e manutenção — o salto de protótipo a produção continua exigindo
            gente boa.
          </li>
        </List>

        <p>
          Minha leitura: vibe coding não substitui programadores, mas muda o
          ponto de partida de todo mundo. A pergunta "dá para automatizar
          isso?" agora tem resposta rápida — e quem não testa fica para trás.
          Aplicar esse raciocínio em processos de marketing e vendas é parte
          do que faço em{" "}
          <a href="/servicos/consultoria-ia">consultoria de IA para empresas</a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://blog.google/innovation-and-ai/technology/developers-tools/ai-agents-intensive-recap-2026/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
