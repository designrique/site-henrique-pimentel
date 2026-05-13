import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";

interface CtaBlockProps {
  title?: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "master" | "vertical";
}

export function CtaBlock({
  title = "Pronto para tirar IA do slide?",
  subtitle = "Diagnóstico de 30 minutos, gratuito. Eu entendo seu problema, mostro se posso ajudar, te indico outra direção se não puder.",
  primary = { label: "Agendar diagnóstico →", href: "/contato" },
  secondary,
  tone = "master",
}: CtaBlockProps) {
  return (
    <section className="bg-[color:var(--bg-subtle)] border-t border-[color:var(--border-default)]">
      <Container size="narrow" className="py-20 sm:py-28 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)] leading-[1.1]">
          {title}
        </h2>
        <p className="mt-4 text-lg text-[color:var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <LinkButton
            variant={tone === "vertical" ? "vertical-primary" : "primary"}
            size="lg"
            href={primary.href}
          >
            {primary.label}
          </LinkButton>
          {secondary && (
            <LinkButton variant="ghost" size="lg" href={secondary.href}>
              {secondary.label}
            </LinkButton>
          )}
        </div>
      </Container>
    </section>
  );
}
