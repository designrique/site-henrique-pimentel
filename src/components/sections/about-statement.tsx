import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

interface AboutStatementProps {
  text?: string;
}

export function AboutStatement({
  text = "Atendo clínicas, médicos, empresas e profissionais que querem usar IA como vantagem concreta. Cada projeto entrega sistema funcionando, números fáceis de acompanhar e relatório explicado em português — sem jargão.",
}: AboutStatementProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-32 w-[36rem] -translate-x-1/2 rounded-[100px] opacity-30 blur-3xl"
        style={{ backgroundColor: "var(--accent-subtle-bg)" }}
      />
      <Container className="py-24 sm:py-36">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-[color:var(--text-primary)] leading-[1.2]">
            {text}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
