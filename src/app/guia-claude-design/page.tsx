import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { guideToc, guideTeaser } from "@/content/guides/claude-design";
import { CaptureForm } from "./capture-form";

export const metadata: Metadata = {
  title: "Guia: automatize a geracao de postagens com Claude Design",
  description: guideTeaser,
  robots: { index: true, follow: true },
};

export default function GuiaClaudeDesignPage() {
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
          <EyebrowBadge>GUIA PRATICO EM pt-BR</EyebrowBadge>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-[color:var(--text-primary)] leading-[1.05]">
            Automatize a geracao de{" "}
            <span className="font-serif italic text-[color:var(--accent-primary)]">postagens</span>{" "}
            com Claude Design.
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-[color:var(--text-secondary)]">
            Um guia pratico para transformar uma ideia em lote de postagens: briefing replicavel,
            identidade visual aplicada automaticamente, geracao em lote, variacoes de carrossel,
            refinamento com aprovacao humana, exportacao e QA antes de publicar.
          </p>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border-default)]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
                  O que tem dentro
                </h2>
                <p className="mt-3 text-base text-[color:var(--text-secondary)] leading-relaxed">
                  Dezesseis secoes, com prompts copiaveis e checklists. Preencha o formulario para
                  liberar o acesso.
                </p>
              </div>
              <ol className="space-y-3">
                {guideToc.map((item, i) => (
                  <li key={item.id} className="flex gap-3">
                    <span className="font-mono text-sm font-medium shrink-0 w-7 text-[color:var(--accent-primary)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[color:var(--text-secondary)] leading-relaxed">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-7">
              <CaptureForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
