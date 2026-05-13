import { Container } from "@/components/ui/container";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroProofVisual } from "@/components/ui/hero-proof-visual";
import { BrandTicker } from "@/components/ui/brand-ticker";

interface HeroProps {
  eyebrow?: string;
  preH1?: string;
  serifEmphasis?: string;
  postH1?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  ghostCta?: { label: string; href: string };
  proofLine?: string;
  /** Quando omitido, usa HeroProofVisual default (foto + glass cards). Passe null para esconder. */
  rightBlock?: React.ReactNode | null;
  /** Quando true, mostra brand ticker abaixo dos CTAs. Default true para master, false para vertical. */
  showTicker?: boolean;
  tone?: "master" | "vertical";
}

export function Hero({
  eyebrow = "Consultor de Tecnologia em IA · disponível para novos projetos · 2026",
  preH1 = "Sistemas de IA que entregam ",
  serifEmphasis = "resultado mensurável",
  postH1 = ".",
  subtitle = "Eu implemento — não vendo apresentação bonita. Cada projeto tem diagnóstico, números acompanhados de perto e relatório explicado em português. Atendo clínicas, médicos, empresas e profissionais que querem usar IA como vantagem concreta.",
  primaryCta = {
    label: "Descubra como você está sendo citado pela IA",
    href: "/baseline-geo",
  },
  ghostCta = { label: "Agendar diagnóstico de 30 min →", href: "/contato" },
  proofLine = "Atendendo Brasil, Portugal e LATAM hispânico",
  rightBlock,
  showTicker,
  tone = "master",
}: HeroProps) {
  // Quando rightBlock for undefined (não passado), usar visual default. Quando for null, esconder.
  const rightVisual =
    rightBlock === undefined ? <HeroProofVisual tone={tone} /> : rightBlock;
  const tickerVisible = showTicker ?? tone === "master";
  const accentVar =
    tone === "vertical"
      ? "var(--vertical-medico-subtle-bg)"
      : "var(--accent-subtle-bg)";
  const serifColor =
    tone === "vertical"
      ? "text-[color:var(--vertical-medico-primary)]"
      : "text-[color:var(--accent-primary)]";

  return (
    <section className="relative overflow-hidden">
      {/* Grid cinza-claro: padrão fino atrás do conteúdo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          backgroundPosition: "center top",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 80%)",
        }}
      />
      {/* Gradiente radial de acento por cima do grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${accentVar} 0%, transparent 60%)`,
        }}
      />
      <Container className="pt-16 pb-20 sm:pt-24 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <Reveal delay={0}>
              <EyebrowBadge tone={tone}>{eyebrow}</EyebrowBadge>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-[color:var(--text-primary)] leading-[1.05]">
                {preH1}
                <span className={`font-serif italic ${serifColor}`}>
                  {serifEmphasis}
                </span>
                {postH1}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-[color:var(--text-secondary)]">
                {subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <LinkButton
                  variant={tone === "vertical" ? "vertical-primary" : "primary"}
                  size="lg"
                  href={primaryCta.href}
                >
                  {primaryCta.label}
                </LinkButton>
                {ghostCta && (
                  <LinkButton variant="ghost" size="lg" href={ghostCta.href}>
                    {ghostCta.label}
                  </LinkButton>
                )}
              </div>
            </Reveal>
            {proofLine && (
              <Reveal delay={0.32}>
                <p className="mt-6 text-xs font-mono text-[color:var(--text-tertiary)] leading-relaxed">
                  {proofLine}
                </p>
              </Reveal>
            )}
            {tickerVisible && (
              <Reveal delay={0.4}>
                <div className="mt-10 max-w-md">
                  <BrandTicker />
                </div>
              </Reveal>
            )}
          </div>
          {rightVisual && (
            <Reveal delay={0.2} className="lg:col-span-5 lg:pl-4">
              {rightVisual}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
