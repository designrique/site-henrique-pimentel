import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CtaBlock } from "@/components/sections/cta-block";

export const metadata: Metadata = {
  title: "Cases — implementações com números reais",
  description:
    "Portfólio de projetos com diagnóstico inicial mensurável, ferramentas documentadas e relatório de evolução. Sem antes/depois inflado.",
};

interface Case {
  client: string;
  vertical: string;
  status: "Em produção" | "Em breve" | "Concluído";
  headline: string;
  metrics: { label: string; value: string }[];
  stack: string;
  href: string;
}

const cases: Case[] = [
  {
    client: "Dra. Fátima Knappe",
    vertical: "MedCitado · Geriatria · Recife",
    status: "Em produção",
    headline:
      "Sistema completo de citação médica nas IAs no ar desde maio/2026. Dentro das regras do CFM.",
    metrics: [
      { label: "Diagnóstico inicial (Gemini)", value: "2 de 10 buscas citando · 20%" },
      { label: "Ferramentas", value: "Next.js 16 + Cloudflare Pages + n8n + Looker" },
      { label: "Prazo de implantação", value: "14 dias" },
      { label: "Especialidade", value: "Geriatria · cuidados paliativos" },
    ],
    stack: "Next.js 16 + Cloudflare Pages + n8n + Looker Studio",
    href: "/blog/baseline-fatima",
  },
  {
    client: "[Endocrinologista · Portugal]",
    vertical: "MedCitado · Próxima vertical",
    status: "Em breve",
    headline: "Prospecção ativa em andamento. Implantação prevista para o segundo trimestre de 2026.",
    metrics: [
      { label: "Especialidade", value: "Endocrinologia" },
      { label: "Mercado", value: "Lisboa + Porto" },
      { label: "Ferramentas previstas", value: "Mesmas do MedCitado v1" },
    ],
    stack: "Next.js 16 + Cloudflare + n8n",
    href: "/contato",
  },
];

const methodology = [
  { step: "01", title: "Diagnóstico", duration: "30 min · gratuito", text: "Entendo seu contexto e mostro se posso ajudar." },
  { step: "02", title: "Auditoria", duration: "7 a 14 dias", text: "Relatório técnico com diagnóstico inicial mensurável." },
  { step: "03", title: "Implantação", duration: "2 a 6 semanas", text: "Sistema entregue funcionando, com painel de acompanhamento." },
  { step: "04", title: "Acompanhamento", duration: "Mensal opcional", text: "Relatório de evolução + ajustes técnicos." },
];

export default function CasesPage() {
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
            PORTFÓLIO · NÚMEROS, NÃO PAREDE DE LOGOS
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-[color:var(--text-primary)] leading-[1.05]">
            Cases com{" "}
            <span className="font-serif italic text-[color:var(--accent-primary)]">
              números
            </span>{" "}
            — não prosa.
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-[color:var(--text-secondary)]">
            Cada implementação com diagnóstico inicial mensurável, ferramentas
            documentadas e relatório de evolução. Sem antes/depois inflado.
          </p>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border-default)]">
        <Container className="py-16 sm:py-20">
          <div className="space-y-12 sm:space-y-16">
            {cases.map((c, i) => (
              <article
                key={i}
                className={`grid gap-8 lg:grid-cols-12 lg:gap-12 items-start ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-7">
                  <p className="font-mono text-xs uppercase tracking-[0.08em] text-[color:var(--accent-primary)]">
                    {c.vertical}
                  </p>
                  <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
                    {c.client}
                  </h2>
                  <p className="mt-3 inline-block rounded-md bg-[color:var(--bg-subtle)] px-2.5 py-0.5 text-xs font-medium text-[color:var(--text-secondary)]">
                    {c.status}
                  </p>
                  <p className="mt-4 text-base sm:text-lg text-[color:var(--text-secondary)] leading-relaxed">
                    {c.headline}
                  </p>
                  <dl className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
                    {c.metrics.map((m, j) => (
                      <div key={j} className="border-t border-[color:var(--border-default)] pt-3">
                        <dt className="font-mono text-xs text-[color:var(--text-tertiary)] uppercase tracking-wider">
                          {m.label}
                        </dt>
                        <dd className="mt-1 font-mono text-sm text-[color:var(--text-primary)]">
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    href={c.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--accent-primary)] hover:gap-2 transition-all"
                  >
                    Ler case completo →
                  </Link>
                </div>
                <div className="lg:col-span-5">
                  <div
                    aria-hidden="true"
                    className="aspect-[4/3] rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] flex items-center justify-center p-12"
                  >
                    <span className="font-mono text-xs text-[color:var(--text-tertiary)] text-center">
                      {c.client === "Dra. Fátima Knappe"
                        ? "fatimaknappe.com.br"
                        : "screenshot em breve"}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--bg-subtle)] border-t border-[color:var(--border-default)]">
        <Container className="py-20 sm:py-24">
          <h2 className="max-w-2xl text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
            Como cada case é construído
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {methodology.map((m) => (
              <li
                key={m.step}
                className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-6"
              >
                <p className="font-mono text-xs text-[color:var(--accent-primary)]">
                  {m.step}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[color:var(--text-primary)]">
                  {m.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-[color:var(--text-tertiary)]">
                  {m.duration}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                  {m.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBlock />
    </>
  );
}
