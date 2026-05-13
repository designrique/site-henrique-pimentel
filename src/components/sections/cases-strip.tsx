import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

interface Case {
  client: string;
  vertical: string;
  headline: string;
  metric1: string;
  metric2: string;
  href: string;
}

const defaultCases: Case[] = [
  {
    client: "Dra. Fátima Knappe",
    vertical: "MedCitado · Geriatria · Recife",
    headline: "Site CFM-safe em produção desde maio/2026, com monitoramento mensal de menções nos 5 motores de IA.",
    metric1: "Next.js + Cloudflare Pages + n8n",
    metric2: "5 motores de IA monitorados",
    href: "/cases/fatima-knappe",
  },
  {
    client: "Instituto Ariana Borges",
    vertical: "Site institucional · Recife",
    headline: "Plataforma de cursos e área de membros com automação de WhatsApp para captação e atendimento.",
    metric1: "Next.js + Supabase + n8n",
    metric2: "Atendimento 24/7 com IA",
    href: "/cases",
  },
];

interface CasesStripProps {
  cases?: Case[];
}

export function CasesStrip({ cases = defaultCases }: CasesStripProps) {
  return (
    <section className="bg-[color:var(--bg-subtle)] border-t border-[color:var(--border-default)]">
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--accent-primary)]">
            CASOS REAIS · NÚMEROS, NÃO PAREDE DE LOGOS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
            Casos em funcionamento
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[color:var(--text-secondary)] leading-relaxed">
            Implementações com diagnóstico mensurável, ferramentas documentadas e relatório de evolução.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
            <Link
              href={c.href}
              className="card-hover group block rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-8 h-full"
            >
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-[color:var(--accent-primary)]">
                {c.vertical}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[color:var(--text-primary)]">
                {c.client}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                {c.headline}
              </p>
              <dl className="mt-6 space-y-1.5 text-sm font-mono text-[color:var(--text-tertiary)]">
                <div className="flex gap-2">
                  <span>·</span>
                  <span>{c.metric1}</span>
                </div>
                <div className="flex gap-2">
                  <span>·</span>
                  <span>{c.metric2}</span>
                </div>
              </dl>
              <p className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--accent-primary)] group-hover:gap-2 transition-all">
                Ler case completo →
              </p>
            </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
