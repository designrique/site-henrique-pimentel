import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "ia-cancro-colorretal-tomografia",
    title: "IA detecta câncer colorretal em tomografia de rotina",
    teaser:
      "Pesquisadores mostraram que IA consegue identificar sinais de câncer colorretal em tomografias computadorizadas sem contraste, feitas por outros motivos. O achado saiu na Radiology Business.",
    category: "Inteligência Artificial",
    publishedDate: "2026-09-14",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Radiology Business",
      url: "https://radiologybusiness.com/topics/artificial-intelligence/opportunistic-ai-detects-colorectal-cancer-using-routine-noncontrast-ct",
    },
    heroImage: {
      url: "/news/ia-cancro-colorretal-tomografia.webp",
      alt: "Radiologista em hospital moderno analisando tomografia em monitor médico de grande porte, com contorno azul sutil",
    },
    seo: {
      metaTitle: "IA detecta câncer colorretal em tomografia de rotina",
      metaDescription:
        "Estudo mostra IA identificando sinais de câncer colorretal em tomografias sem contraste feitas por outros motivos. Detecção oportunista pode acelerar diagnóstico.",
      metaKeywords:
        "IA na saúde, câncer colorretal, detecção oportunista, tomografia, diagnóstico por IA",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          Uma abordagem de <strong>IA oportunista</strong> conseguiu detectar
          sinais de câncer colorretal usando <strong>tomografias
          computadorizadas de rotina, sem contraste</strong> — exames feitos
          por outros motivos clínicos. O estudo foi publicado na Radiology
          Business e repercutiu no Hacker News.
        </Lead>
        <p>
          A promessa é atraente: milhões de tomografias são feitas todo ano no
          mundo por suspeitas de outras doenças. Se a IA consegue revisar
          essas imagens e sinalizar risco de câncer colorretal sem exame
          adicional, o diagnóstico pode sair meses ou anos antes.
        </p>
        <H2>O que o estudo mostra</H2>
        <List>
          <li>
            A IA analisa exames já realizados, sem custo extra de
            procedimento para o paciente.
          </li>
          <li>
            Funciona em tomografia sem contraste, o padrão mais comum em
            emergências e check-ups.
          </li>
          <li>
            O modelo funciona como triagem: sinaliza casos suspeitos para
            confirmação por médico.
          </li>
        </List>
        <p>
          Para clínicas e laboratórios, o caso ilustra o padrão de IA na
          saúde que mais cresce: usar dados que já existem para gerar alertas
          novos, em vez de substituir o especialista. A adoção, porém, exige
          validação clínica, integração com o fluxo do radiologista e
          aprovação regulatória. É um exemplo clássico de projeto onde a
          tecnologia é o menor dos desafios; processo e confiança vêm antes.
          Acompanhamos esse tipo de aplicação no nosso{" "}
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            blog sobre IA aplicada
          </a>
          .
        </p>
        <p>
          Fonte:{" "}
          <a
            href="https://radiologybusiness.com/topics/artificial-intelligence/opportunistic-ai-detects-colorectal-cancer-using-routine-noncontrast-ct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Radiology Business
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
