"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/container";

const steps = [
  {
    num: "01",
    title: "Você preenche o formulário",
    text: "Nome, segmento, cidade-alvo e até 3 termos pelos quais quer ser encontrado.",
  },
  {
    num: "02",
    title: "Eu faço o diagnóstico inicial",
    text: "Rodo as buscas reais nos 5 motores (ChatGPT, Gemini, Perplexity, Claude, Copilot) com a ferramenta aberta que mantenho em /tools/geo-baseline.",
  },
  {
    num: "03",
    title: "Você recebe o relatório",
    text: "PDF de 2 páginas: presença atual, motores que já citam, motores onde você está invisível, e 3 ações concretas de curto prazo.",
  },
];

export function BaselineGeoClient() {
  const searchParams = useSearchParams();
  const isMedico = searchParams.get("vertical") === "medico";
  const tone = isMedico ? "vertical" : "master";
  const accent =
    tone === "vertical"
      ? "var(--vertical-medico-primary)"
      : "var(--accent-primary)";
  const accentSubtle =
    tone === "vertical"
      ? "var(--vertical-medico-subtle-bg)"
      : "var(--accent-subtle-bg)";

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${accentSubtle} 0%, transparent 60%)`,
          }}
        />
        <Container className="pt-16 pb-12 sm:pt-24 sm:pb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]"
            style={{
              backgroundColor: accentSubtle,
              color: tone === "vertical"
                ? "var(--vertical-medico-text)"
                : "var(--accent-text)",
            }}
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: accent }}
            />
            ANÁLISE GEO · 5 MOTORES · ATÉ 7 DIAS · SEM CUSTO
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-[color:var(--text-primary)] leading-[1.05]">
            Descubra como você está sendo{" "}
            <span
              className="font-serif italic"
              style={{ color: accent }}
            >
              citado pela IA
            </span>
            .
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-[color:var(--text-secondary)]">
            Em até 7 dias úteis você recebe um relatório técnico com o estado
            atual da sua presença em ChatGPT, Gemini, Perplexity, Claude e
            Copilot — e o que muda para começar a aparecer.
          </p>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border-default)]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
                  Como funciona
                </h2>
                <p className="mt-3 text-base text-[color:var(--text-secondary)] leading-relaxed">
                  Três passos. Sem reunião obrigatória. Você recebe o PDF por
                  e-mail.
                </p>
              </div>
              <ol className="space-y-5">
                {steps.map((s) => (
                  <li key={s.num} className="flex gap-4">
                    <span
                      className="font-mono text-sm font-medium shrink-0 w-8"
                      style={{ color: accent }}
                    >
                      {s.num}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[color:var(--text-primary)]">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm text-[color:var(--text-secondary)] leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-[color:var(--text-tertiary)]">
                  Em produção
                </p>
                <p className="mt-2 text-sm text-[color:var(--text-primary)] leading-relaxed">
                  Dra. Fátima Knappe — geriatra em Recife. Diagnóstico inicial
                  de citações pela IA documentado em maio/2026 e acompanhado
                  mensalmente nos 5 motores de IA.
                </p>
                <Link
                  href={isMedico ? "/medcitado" : "/cases"}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
                  style={{ color: accent }}
                >
                  Ver caso completo →
                </Link>
              </div>
            </div>

            <form className="lg:col-span-7 rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] p-6 sm:p-8 space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-[color:var(--text-primary)]">
                  Solicitar análise GEO
                </h2>
                <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
                  Resposta em até 7 dias úteis. Sem cobrança.
                </p>
              </div>

              <Field id="name" label="Seu nome" required>
                <input id="name" name="name" type="text" required className="bg-input" />
              </Field>

              <Field id="email" label="E-mail" required>
                <input id="email" name="email" type="email" required className="bg-input" />
              </Field>

              <Field id="profession" label="Profissão / Segmento" required>
                <input
                  id="profession"
                  name="profession"
                  type="text"
                  required
                  defaultValue={isMedico ? "Médico — " : ""}
                  placeholder={
                    isMedico
                      ? "Ex: Geriatra · CRM-PE"
                      : "Ex: Advogado tributarista · OAB-SP"
                  }
                  className="bg-input"
                />
              </Field>

              <Field id="city" label="Cidade-alvo" required>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  placeholder="Ex: Recife, Lisboa, São Paulo"
                  className="bg-input"
                />
              </Field>

              <Field
                id="queries"
                label="Até 3 termos pelos quais você quer ser encontrado"
                required
              >
                <textarea
                  id="queries"
                  name="queries"
                  rows={3}
                  required
                  placeholder={
                    isMedico
                      ? "Ex: melhor geriatra Recife · geriatra cuidados paliativos Recife · médico para Alzheimer"
                      : "Ex: advogado tributário em SP · consultor IA aplicada Brasil · agência marketing performance"
                  }
                  className="bg-input"
                />
              </Field>

              <Field id="message" label="Algo mais que eu deva saber? (opcional)">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="bg-input"
                />
              </Field>

              <p className="text-xs text-[color:var(--text-tertiary)]">
                Seus dados ficam comigo. Não compartilho. Não envio e-mail
                marketing.
              </p>

              <button
                type="submit"
                className="w-full h-12 rounded-[10px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  backgroundColor: accent,
                  ...({ "--tw-ring-color": accent } as React.CSSProperties),
                }}
              >
                Solicitar análise GEO →
              </button>

              <style>{`
                .bg-input {
                  display: block;
                  width: 100%;
                  height: 44px;
                  padding: 0 12px;
                  border-radius: 10px;
                  border: 1px solid var(--border-default);
                  background: var(--bg-primary);
                  color: var(--text-primary);
                  font-size: 15px;
                  font-family: inherit;
                }
                textarea.bg-input {
                  height: auto;
                  padding: 10px 12px;
                }
                .bg-input::placeholder { color: var(--text-tertiary); }
                .bg-input:focus-visible {
                  outline: 2px solid ${accent};
                  outline-offset: 1px;
                }
              `}</style>
            </form>
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--bg-subtle)] border-t border-[color:var(--border-default)]">
        <Container size="narrow" className="py-16 text-center">
          <p className="text-base text-[color:var(--text-secondary)]">
            Já sabe qual problema quer resolver e prefere conversar antes?
          </p>
          <Link
            href="/contato"
            className="mt-4 inline-flex items-center justify-center h-11 px-5 rounded-[10px] border border-[color:var(--border-default)] text-[color:var(--text-primary)] font-medium hover:bg-[color:var(--bg-primary)] transition-colors"
          >
            Agendar diagnóstico de 30 min →
          </Link>
        </Container>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[color:var(--text-primary)]"
      >
        {label}
        {required && (
          <span className="text-[color:var(--accent-primary)] ml-1">*</span>
        )}
      </label>
      {children}
    </div>
  );
}
