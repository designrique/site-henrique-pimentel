import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "amie-ia-consultas-clinicas-video",
    title: "AMIE: IA do Google faz consulta clínica por vídeo em tempo real",
    teaser:
      "O modelo de pesquisa do Google demonstrou consultas clínicas por vídeo ao vivo — um sinal do que vem por aí na saúde assistida por IA.",
    category: "Inteligência Artificial",
    publishedDate: "2026-08-17",
    readingTime: "3 min",
    news: true,
    source: {
      name: "Google Research",
      url: "https://blog.google/innovation-and-ai/models-and-research/google-research/amie-video-consultations/",
    },
    heroImage: {
      url: "/news/amie-ia-consultas-clinicas-video.webp",
      alt: "Médica em consultório com tela mostrando videoconferência de paciente",
    },
    seo: {
      metaTitle: "AMIE: IA do Google faz consulta clínica por vídeo",
      metaDescription:
        "Modelo de pesquisa do Google, o AMIE demonstrou consultas clínicas por vídeo em tempo real. Um sinal da IA na saúde para médicos e pacientes.",
      metaKeywords:
        "AMIE, IA na saúde, consulta clínica IA, Google Research, telemedicina, diagnóstico assistido",
    },
  },
  Content: function NewsContent() {
    return (
      <PostProse>
        <Lead>
          O Google Research demonstrou o AMIE realizando consultas clínicas
          por vídeo em tempo real. O modelo conversa com o paciente ao vivo —
          ouvindo, perguntando e raciocinando sobre sintomas durante a
          interação, não depois dela.
        </Lead>

        <p>
          O AMIE é um projeto de pesquisa, não um produto pronto para
          consultório. Mas a demonstração importa: mostra que a IA saiu do
          papel de "digitadora de prontuário" e está caminhando para uma
          posição de apoio clínico real — triagem inicial, anamnese guiada e
          suporte à decisão do profissional.
        </p>

        <H2>O que isso significa para a saúde</H2>

        <List>
          <li>
            <strong>Triagem escalável:</strong> uma IA que conduz a primeira
            conversa pode absorver volume de atendimentos simples e liberar
            o médico para o que exige julgamento humano.
          </li>
          <li>
            <strong>Documentação automática:</strong> consulta por vídeo com
            IA gera o registro clínico no processo, não como tarefa depois.
          </li>
          <li>
            <strong>Limites claros:</strong> o modelo apoia, mas não substitui
            o profissional — a decisão médica continua humana.
          </li>
        </List>

        <p>
          Para profissionais de saúde no Brasil, a janela é boa: quem se
          posiciona cedo com IA — no atendimento, na triagem ou na{" "}
          <a href="/o-que-e-geo-medicos">
            presença digital para captar pacientes
          </a>{" "}
          — cria vantagem antes de a tecnologia virar commodity. A IA não
          substitui o médico; substitui quem não a usa.
        </p>

        <p>
          Fonte:{" "}
          <a
            href="https://blog.google/innovation-and-ai/models-and-research/google-research/amie-video-consultations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Research
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
