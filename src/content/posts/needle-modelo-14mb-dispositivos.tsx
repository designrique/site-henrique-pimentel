import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "needle-modelo-14mb-dispositivos",
    title: "Needle: modelo de fundação de 14MB para dispositivos pequenos",
    teaser:
      "O repositório cactus-compute/needle propõe um modelo de fundação de 14 megabytes — IA que cabe em dispositivo de borda, sem nuvem.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "GitHub — cactus-compute/needle",
      url: "https://github.com/cactus-compute/needle",
    },
    heroImage: {
      url: "/news/needle-modelo-14mb-dispositivos.webp",
      alt: "Chip pequeno em mão ao lado de dispositivo embarcado sobre mesa técnica",
    },
    seo: {
      metaTitle: "Needle: modelo de IA de 14MB para dispositivos pequenos",
      metaDescription:
        "Needle, do cactus-compute, é um modelo de fundação de 14MB para dispositivos pequenos — IA on-device sem depender da nuvem. 6,8 mil estrelas no GitHub.",
      metaKeywords:
        "Needle, modelo 14MB, IA on-device, edge computing, modelo compacto, dispositivos embarcados",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O projeto Needle — 6,8 mil estrelas no GitHub, 3 mil novas na semana
          — propõe algo quase radical: um modelo de fundação de 14 megabytes.
          Pequeno o suficiente para rodar em dispositivos que hoje não têm
          espaço nem para uma IA de brinquedo.
        </Lead>

        <p>
          A aposta é direta: nem toda tarefa precisa de um modelo gigante na
          nuvem. Classificação de sensor, comandos de voz, triagem local de
          dados — boa parte das aplicações cotidianas de IA cabe em um modelo
          minúsculo rodando no próprio aparelho, sem latência, sem conexão e
          sem vazar dado para fora.
        </p>

        <H2>O que a compactação significa</H2>

        <List>
          <li>
            <strong>Privacidade por arquitetura:</strong> dado processado no
            dispositivo não viaja para servidor nenhum.
          </li>
          <li>
            <strong>Custo de operação zero:</strong> sem chamada de API, sem
            token, sem fatura de nuvem.
          </li>
          <li>
            <strong>Novos produtos:</strong> eletrodomésticos, wearables e
            equipamentos industriais ganham IA local viável.
          </li>
        </List>

        <p>
          O movimento complementa a tendência dos modelos gigantes: enquanto
          um lado empurra escala, o outro empurra miniaturização. Para
          negócios, a lição é não assumir que IA sempre significa "chamada de
          API cara" — muitas soluções cabem em um modelo pequeno e barato, com
          vantagem de privacidade. É o tipo de escolha de arquitetura que muda
          o custo do projeto inteiro e que eu considero ao{" "}
          <a href="/servicos/consultoria-ia">
            planejar IA para empresas
          </a>
          .
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://github.com/cactus-compute/needle"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub — cactus-compute/needle
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
