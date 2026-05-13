import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { FAQs } from "@/components/sections/faqs";

export const metadata: Metadata = {
  title: "Contato — diagnóstico de 30 min gratuito",
  description:
    "Vamos conversar sobre seu problema real. Diagnóstico estruturado de 30 minutos, gratuito, principalmente por mensagens.",
};

export default function ContatoPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent-subtle-bg) 0%, transparent 60%)",
          }}
        />
        <Container className="pt-16 pb-12 sm:pt-24 sm:pb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--accent-primary)]">
            DIAGNÓSTICO DE 30 MIN · GRATUITO
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-[color:var(--text-primary)] leading-[1.05]">
            Vamos conversar — sobre{" "}
            <span className="font-serif italic text-[color:var(--accent-primary)]">
              seu problema real
            </span>
            .
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-[color:var(--text-secondary)]">
            Diagnóstico estruturado de 30 minutos. Eu entendo seu contexto,
            mostro se posso ajudar e te indico outra direção se não puder.
            Trabalho principalmente por mensagens — call só quando necessário.
          </p>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border-default)]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <form className="rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] p-6 sm:p-8 space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-[color:var(--text-primary)]">
                  Enviar mensagem
                </h2>
                <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
                  Respondo em até 24h úteis.
                </p>
              </div>

              <Field id="name" label="Nome" required>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="input"
                />
              </Field>

              <Field id="email" label="E-mail" required>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="input"
                />
              </Field>

              <Field id="company" label="Empresa / Profissão (opcional)">
                <input id="company" name="company" type="text" className="input" />
              </Field>

              <Field id="type" label="Tipo de projeto" required>
                <select id="type" name="type" required className="input">
                  <option value="">Selecione…</option>
                  <option>IA aplicada (geral)</option>
                  <option>GEO/AEO médico (MedCitado)</option>
                  <option>Site institucional</option>
                  <option>Automação de captação</option>
                  <option>Outro</option>
                </select>
              </Field>

              <Field id="budget" label="Orçamento aproximado">
                <select id="budget" name="budget" className="input">
                  <option value="">Selecione…</option>
                  <option>Até R$ 5k</option>
                  <option>R$ 5k–15k</option>
                  <option>R$ 15k–50k</option>
                  <option>R$ 50k+</option>
                  <option>Não sei ainda</option>
                </select>
              </Field>

              <Field id="message" label="Mensagem" required>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="input resize-y"
                />
              </Field>

              <p className="text-xs text-[color:var(--text-tertiary)]">
                Seus dados ficam comigo. Sem e-mail marketing automático, sem
                venda da sua lista para terceiros.
              </p>

              <button
                type="submit"
                className="w-full h-12 rounded-[10px] bg-[color:var(--accent-primary)] text-white font-medium hover:bg-[color:var(--accent-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2"
              >
                Enviar mensagem →
              </button>
            </form>

            <div className="space-y-4 lg:sticky lg:top-24 self-start">
              <DirectCard />
              <AgendaCard />
              <MedicosCard />
            </div>
          </div>
        </Container>

        <style>{`
          .input {
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
          textarea.input {
            height: auto;
            padding: 10px 12px;
          }
          .input:focus-visible {
            outline: 2px solid var(--accent-primary);
            outline-offset: 1px;
          }
        `}</style>
      </section>

      <FAQs />

      <section className="border-t border-[color:var(--border-default)]">
        <Container size="narrow" className="py-16 text-center">
          <p className="text-base text-[color:var(--text-secondary)]">
            Prefere conversar agora?
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <LinkButton
              variant="ghost"
              size="default"
              href="https://wa.me/5581"
            >
              WhatsApp
            </LinkButton>
            <LinkButton
              variant="ghost"
              size="default"
              href="https://linkedin.com/in/henriquepimentel"
            >
              LinkedIn DM
            </LinkButton>
          </div>
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
        {required && <span className="text-[color:var(--accent-primary)] ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

function DirectCard() {
  return (
    <div className="rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-6">
      <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--text-tertiary)]">
        Direto
      </h3>
      <ul className="mt-3 space-y-2 text-sm">
        <li>
          <a
            href="mailto:henrique@henriquepimentel.com.br"
            className="font-mono text-[color:var(--text-primary)] hover:text-[color:var(--accent-primary)]"
          >
            henrique@henriquepimentel.com.br
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/henriquepimentel"
            className="font-mono text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            in/henriquepimentel
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/hp_implementa"
            className="font-mono text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            @hp_implementa
          </a>
        </li>
      </ul>
    </div>
  );
}

function AgendaCard() {
  return (
    <div className="rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-6">
      <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--text-tertiary)]">
        Agenda
      </h3>
      <p className="mt-3 text-sm text-[color:var(--text-primary)] font-medium">
        Diagnóstico de 30 min — gratuito
      </p>
      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
        Horários de segunda a quinta, pela manhã (horário do Brasil).
      </p>
      <a
        href="https://cal.com/henriquepimentel"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--accent-primary)] hover:underline"
      >
        Abrir Cal.com →
      </a>
    </div>
  );
}

function MedicosCard() {
  return (
    <div className="rounded-2xl border-l-4 border-l-[color:var(--vertical-medico-primary)] border-y border-r border-y-[color:var(--border-default)] border-r-[color:var(--border-default)] bg-[color:var(--vertical-medico-subtle-bg)] p-6">
      <p className="inline-block rounded-md bg-white/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[color:var(--vertical-medico-text)]">
        Médicos · MedCitado
      </p>
      <h3 className="mt-3 text-base font-semibold text-[color:var(--vertical-medico-text)]">
        Descubra como você está sendo citado pela IA
      </h3>
      <p className="mt-2 text-sm text-[color:var(--vertical-medico-text)] leading-relaxed">
        Em até 7 dias úteis você recebe um relatório com o estado atual do
        seu nome em 5 motores de IA — ChatGPT, Gemini, Perplexity, Claude e
        Copilot. Sem reunião obrigatória.
      </p>
      <Link
        href="/baseline-geo?vertical=medico"
        className="mt-4 inline-flex items-center justify-center h-10 rounded-[10px] bg-[color:var(--vertical-medico-primary)] px-4 text-sm font-medium text-white hover:opacity-90 transition-opacity"
      >
        Solicitar análise GEO →
      </Link>
    </div>
  );
}
