import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CtaBlock } from "@/components/sections/cta-block";

export const metadata: Metadata = {
  title: "Sobre — quem está atrás do HP.",
  description:
    "Henrique Pimentel — Mestre em Ciências da Computação, 19+ anos no mercado de tecnologia, hoje consultor independente em IA aplicada. Recife, atendendo Brasil, Portugal e LATAM hispânico.",
};

const principles = [
  { num: "01", text: "Audit primeiro. Recomendação depois." },
  { num: "02", text: "Sistema entregue, não slide." },
  { num: "03", text: "Métrica acessível ao cliente." },
  { num: "04", text: "Comunicação direta com quem implementa — sem intermediário." },
];

const stack = [
  { title: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4"] },
  { title: "Backend", items: ["Python + FastAPI", "Node + Hono", "n8n", "Postgres"] },
  { title: "IA Aplicada", items: ["OpenAI / Gemini / Claude APIs", "LangChain", "RAG", "Eval"] },
  { title: "Infra", items: ["Cloudflare Workers + Pages + R2", "Docker Swarm + Traefik", "VPS Hostinger / Hetzner"] },
];

export default function SobrePage() {
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
        <Container className="pt-16 pb-20 sm:pt-24 sm:pb-24">
          <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--accent-primary)]">
            QUEM ESTÁ ATRÁS DO HP.
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-[color:var(--text-primary)] leading-[1.05]">
            Eu{" "}
            <span className="font-serif italic text-[color:var(--accent-primary)]">
              implemento
            </span>{" "}
            o que outros explicam.
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-[color:var(--text-secondary)]">
            Sou Henrique Pimentel. Mestre em Ciências da Computação e atuo há
            19+ anos no mercado, hoje consultor independente em IA aplicada.
            Recife como base, atendendo Brasil, Portugal e LATAM hispânico.
          </p>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border-default)]">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
                Quem sou e o que faço
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[color:var(--text-secondary)] leading-relaxed">
              <p>
                Com 19 anos de trajetória no mercado, construí uma base sólida
                que une o olhar centrado no usuário do Design (UFPE) à
                profundidade técnica da Ciência da Computação (Mestre pelo
                CIn-UFPE). Minha transição de Designer para Engenheiro de
                Inteligência Artificial aconteceu por uma necessidade prática:
                buscar maneiras mais inteligentes, ágeis e eficientes de
                resolver problemas complexos para negócios em qualquer lugar do
                mundo.
              </p>
              <p>
                Sediado no pólo tecnológico de Recife e atuando em todo o
                Brasil, América Latina (Latam) e Portugal, meu foco é direto:
                oferecer soluções de IA aplicáveis que resolvem as dores reais
                do dia a dia do empresário.
              </p>
              <p>
                Se você gerencia uma clínica, um consultório médico ou qualquer
                negócio onde o atendimento e a fluidez operacional são o
                coração da empresa, eu entendo os seus desafios. Meu trabalho
                consiste em mergulhar na sua operação para identificar falhas
                de rotina, gargalos de atendimento e processos repetitivos que
                drenam a energia da sua equipe.
              </p>
              <p>
                Não implemento tecnologia apenas por implementar. Eu desenho
                agentes, automações e fluxos de trabalho que se integram
                perfeitamente à sua realidade, seja o seu negócio local ou com
                atuação internacional. Entrego a solução ideal para gerar
                resultados de verdade — poupando tempo, reduzindo custos e
                elevando a experiência do seu cliente final.
              </p>
              <p className="!mt-8 text-xl sm:text-2xl font-serif italic text-[color:var(--text-primary)] leading-snug">
                Vamos descobrir como a IA pode trabalhar pelo seu negócio?
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--bg-subtle)] border-t border-[color:var(--border-default)]">
        <Container className="py-20 sm:py-24">
          <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--accent-primary)]">
            STACK TÉCNICO
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
            Minha caixa de ferramentas
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stack.map((g, i) => (
              <div
                key={i}
                className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-6"
              >
                <h3 className="text-base font-semibold text-[color:var(--text-primary)]">
                  {g.title}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm font-mono text-[color:var(--text-secondary)]">
                  {g.items.map((item, j) => (
                    <li key={j}>· {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border-default)]">
        <Container size="narrow" className="py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
            Como trabalho
          </h2>
          <ol className="mt-10 space-y-6">
            {principles.map((p) => (
              <li key={p.num} className="flex gap-6 items-baseline">
                <span className="font-mono text-sm font-medium text-[color:var(--accent-primary)] shrink-0 w-8">
                  {p.num}
                </span>
                <span className="text-lg sm:text-xl font-semibold text-[color:var(--text-primary)] leading-snug">
                  {p.text}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBlock />
    </>
  );
}
