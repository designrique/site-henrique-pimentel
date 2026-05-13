import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

interface Stat {
  value: string;
  label: string;
}

const defaultStats: Stat[] = [
  { value: "19+", label: "Anos em tecnologias digitais" },
  { value: "9", label: "Marcas e profissionais atendidos" },
  { value: "5", label: "Motores de IA monitorados por cliente" },
];

interface WhyStatsProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  stats?: Stat[];
}

export function WhyStats({
  eyebrow = "POR QUE TRABALHAR COMIGO",
  title = "Eu mesmo implemento — não terceirizo.",
  description = "Sistema entregue por projeto. Números fáceis de acompanhar. Relatório mensal explicado em português. Sem agência intermediária, sem trocar de equipe no meio do projeto.",
  stats = defaultStats,
}: WhyStatsProps) {
  return (
    <section className="border-t border-[color:var(--border-default)]">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--accent-primary)]">
              {eyebrow}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
              {title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[color:var(--text-secondary)] leading-relaxed">
              {description}
            </p>
          </div>
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card-hover rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] p-6 h-full">
                  <p className="font-mono text-3xl sm:text-4xl font-medium text-[color:var(--text-primary)] tracking-tight">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--text-secondary)] leading-snug">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
