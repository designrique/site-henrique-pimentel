import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Hero } from "@/components/sections/hero";
import { CtaBlock } from "@/components/sections/cta-block";

export const metadata: Metadata = {
  title: "MedCitado — GEO para médicos",
  description:
    "Quando seu paciente pergunta à IA, seu nome aparece. Sistema completo para o seu nome ser citado pelo ChatGPT, Gemini e outras IAs. Dentro das regras do CFM. Em 14 dias.",
};

const features = [
  {
    num: "01",
    title: "Site profissional dentro das regras do CFM",
    description:
      "Site dentro da Resolução CFM 2.336/2023, com a marcação técnica que faz as IAs reconhecerem você como referência válida na sua especialidade.",
  },
  {
    num: "02",
    title: "Atendimento 24h por dia no WhatsApp",
    description:
      "Atendente inteligente no WhatsApp que entende o caso do paciente, sugere horários e passa para sua secretária com o caso já organizado.",
  },
  {
    num: "03",
    title: "Google Meu Negócio em modo autoridade",
    description:
      "Postagens semanais, gestão de avaliações, fotos profissionais. Sinal forte para o Google e o Gemini de que você está ativo na cidade.",
  },
  {
    num: "04",
    title: "Confirmação automática de consulta",
    description:
      "Lembrete automático 24 horas antes da consulta. Reduz faltas de pacientes em até 40%, com base nos clientes atuais.",
  },
  {
    num: "05",
    title: "Blog que vira fonte citada pela IA",
    description:
      "Conteúdo educativo dentro das regras do CFM, escrito de um jeito que ChatGPT e Perplexity passam a citar você como referência em buscas específicas.",
  },
  {
    num: "06",
    title: "Relatório mensal de menções",
    description:
      "Painel com sua presença em ChatGPT, Gemini, Perplexity, Claude e Copilot. Evolução medida mês a mês, explicada em português.",
  },
];

export default function MedCitadoPage() {
  return (
    <>
      <Hero
        tone="vertical"
        eyebrow="MEDCITADO · CITAÇÃO MÉDICA NAS IAs · DENTRO DAS REGRAS DO CFM"
        preH1="Quando seu paciente pergunta à IA, "
        serifEmphasis="seu nome aparece"
        postH1="."
        subtitle="Sistema completo para médicos serem citados pelas IAs. Site dentro das regras do CFM + Google Meu Negócio + atendimento 24h por dia com IA + acompanhamento mensal das menções em ChatGPT, Gemini, Perplexity, Claude e Copilot."
        primaryCta={{
          label: "Descubra como você está sendo citado pela IA",
          href: "/baseline-geo?vertical=medico",
        }}
        ghostCta={{
          label: "Ver Dra. Fátima Knappe →",
          href: "https://fatimaknappe.com.br",
        }}
        proofLine="Dra. Fátima Knappe · Geriatra em Recife · MedCitado no ar desde maio/2026 · 20% de presença no Gemini"
      />

      <section className="bg-[color:var(--bg-subtle)] border-t border-[color:var(--border-default)]">
        <Container size="narrow" className="py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
            Faça o teste antes que seu concorrente faça.
          </h2>
          <p className="mt-6 text-lg text-[color:var(--text-secondary)] leading-relaxed">
            Abra o ChatGPT. Cole a pergunta abaixo, substituindo seus dados:
          </p>
          <div className="mt-6 rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-5">
            <code className="font-mono text-sm text-[color:var(--text-primary)]">
              melhor [sua especialidade] em [sua cidade]
            </code>
          </div>
          <p className="mt-6 text-lg text-[color:var(--text-secondary)] leading-relaxed">
            Seu nome aparece? Se não, você está perdendo pacientes que nunca
            souberam que você existe. O filho do paciente que pesquisa às 22h
            vai marcar consulta com quem o ChatGPT indicou.
          </p>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border-default)]">
        <Container className="py-20 sm:py-24">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--vertical-medico-primary)]">
              PACOTE ÚNICO · 14 DIAS DE IMPLANTAÇÃO
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
              Sistema completo, entregue funcionando
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.num}
                className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-6"
              >
                <span className="font-mono text-xs font-medium text-[color:var(--vertical-medico-primary)]">
                  {f.num}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[color:var(--text-primary)]">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--bg-subtle)] border-t border-[color:var(--border-default)]">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--vertical-medico-primary)]">
                PROVA REAL
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
                Em produção desde maio/2026
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[color:var(--text-secondary)] leading-relaxed">
                Dra. Fátima Knappe — geriatra em Recife. Site dentro das regras
                do CFM no ar desde maio/2026, com diagnóstico inicial de
                citações pela IA documentado e acompanhamento mensal nos 5
                motores de IA.
              </p>
              <Link
                href="https://fatimaknappe.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--vertical-medico-primary)] hover:underline"
              >
                Ver site rodando: fatimaknappe.com.br →
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-[color:var(--text-tertiary)]">
                  Diagnóstico inicial · 12 maio 2026
                </p>
                <table className="mt-4 w-full font-mono text-xs">
                  <tbody className="divide-y divide-[color:var(--border-default)]">
                    {[
                      ["Geriatra Recife cuidados paliativos", true],
                      ["Geriatra que atende domicílio Recife", true],
                      ["Melhor geriatra em Recife", false],
                      ["Geriatra Recife particular", false],
                      ["Geriatra Recife Alzheimer", false],
                    ].map(([q, hit], i) => (
                      <tr key={i}>
                        <td className="py-2 text-[color:var(--text-secondary)]">
                          {q as string}
                        </td>
                        <td className="py-2 text-right">
                          {hit ? (
                            <span className="text-[color:var(--vertical-medico-primary)]">
                              ✓ citado
                            </span>
                          ) : (
                            <span className="text-[color:var(--text-tertiary)]">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-4 font-mono text-xs text-[color:var(--text-tertiary)]">
                  Presença atual: 2 de 10 buscas-alvo (20%) · Meta: 5 de 10 em 60 dias
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border-default)]">
        <Container size="narrow" className="py-20 sm:py-24 text-center">
          <span className="inline-flex items-center rounded-full bg-[color:var(--vertical-medico-subtle-bg)] px-3 py-1 text-xs font-semibold text-[color:var(--vertical-medico-text)] uppercase tracking-wider">
            Garantia inversa · 60 dias
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)] leading-tight">
            Se em 60 dias seu nome não aparecer em pelo menos 1 motor de IA,
            devolvo o valor da implantação.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[color:var(--text-secondary)] max-w-2xl mx-auto">
            Sem letra miúda. Implemento, acompanho, mostro os resultados. Se
            não funcionar, você não paga.
          </p>
        </Container>
      </section>

      <CtaBlock
        tone="vertical"
        title="Descubra como você está sendo citado pela IA."
        subtitle="Em até 7 dias úteis você recebe um relatório com o estado atual do seu nome nos 5 motores de IA. Sem reunião obrigatória, sem custo."
        primary={{ label: "Solicitar análise da IA →", href: "/baseline-geo?vertical=medico" }}
        secondary={{ label: "Agendar conversa", href: "/contato" }}
      />
    </>
  );
}
