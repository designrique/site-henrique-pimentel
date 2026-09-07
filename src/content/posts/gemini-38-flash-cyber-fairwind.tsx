import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "gemini-38-flash-cyber-fairwind",
    title: "Gemini 3.8 Flash Cyber: Google vende ciberdefesa de IA como produto de governo",
    teaser:
      "O terceiro Flash em seis semanas veio com variante de defesa: o 3.8 Flash Cyber entra no programa Fairwind, com acesso restrito a governos e operadores críticos. IA de segurança virou produto soberano.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-07",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Google (blog oficial)",
      url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/",
    },
    heroImage: {
      url: "/news/gemini-38-flash-cyber-fairwind.webp",
      alt: "Centro de operações de cibersegurança com escudo holográfico azul protegendo uma rede digital",
    },
    seo: {
      metaTitle: "Gemini 3.8 Flash Cyber: ciberdefesa de IA para governos",
      metaDescription:
        "Google lança Gemini 3.8 Flash Cyber e o coloca no Fairwind, com acesso restrito a governos. Ciberdefesa autônoma virou produto de segurança soberana.",
      metaKeywords: "Gemini 3.8 Flash Cyber, Fairwind, ciberdefesa IA, segurança de código, Google",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Google acelerou o ciclo de modelos Flash ao ponto de virar
          notícia: o 3.8 Flash é o terceiro em apenas seis semanas. A novidade
          que interessa quem trabalha com IA e segurança, porém, é outra: a
          variante Cyber, desenhada para defender, entrou no programa Fairwind
          com acesso restrito a governos e operadores de infraestrutura
          crítica.
        </Lead>

        <p>
          O modelo mantém o preço do 3.7, US$ 0,75 por milhão de tokens de
          entrada e US$ 3,75 na saída, vigentes até o fim do ano. No anúncio,
          a Google chama o 3.8 Flash de &ldquo;nosso melhor modelo de raciocínio
          e código&rdquo;. O diferencial está no que a variante Cyber faz: descoberta
          autônoma de vulnerabilidades com mais de 70% de sucesso em codebases
          de 20 linguagens e correção automatizada, com prioridade para a
          defesa em vez da exploração ofensiva.
        </p>

        <H2>Por que isso importa</H2>

        <List>
          <li>A IA de cibersegurança está virando produto soberano, não só ferramenta de empresa.</li>
          <li>O acesso ao Fairwind é seletivo: governos, operadores críticos e mantenedores de software.</li>
          <li>Correção autônoma priorizada sobre exploração muda a narrativa do agente de segurança.</li>
          <li>O ritmo de lançamentos Flash incomoda a imprensa, mas o preço continua competitivo com o GPT-5.6 Luna.</li>
        </List>

        <p>
          A leitura honesta: boa parte do ciclo acelerado é marketing de
          cadência, e o 3.5 Pro prometido para junho segue sem data. Mas
          reposicionar defesa cibernética como oferta governamental restrita é
          um movimento de produto, não de benchmark. Quem atende clientes
          expostos a risco digital deveria acompanhar de perto.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google (blog oficial)
          </a>
          . Veja como a{" "}
          <a href="/servicos/consultoria-ia" target="_blank" rel="noopener noreferrer">
            consultoria de IA
          </a>{" "}
          do site aplica esse tipo de mudança na prática.
        </p>
      </PostProse>
    );
  },
};

export default post;
