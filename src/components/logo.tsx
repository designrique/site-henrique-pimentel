import Link from "next/link";

type LogoVariant = "wordmark" | "monogram" | "signature";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  /** Quando href e definido, envolve em Link clicavel para a home */
  href?: string;
}

/**
 * Marca H-ponte (fonte da verdade: hp-brand/assets/svg/mark.svg).
 * Traço herda a cor do contexto via currentColor (navy no claro, creme/claro no escuro).
 * O ponto é sempre ciano — o acento pontual da marca.
 */
function HpMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="20 22 60 60"
      className={className}
      fill="none"
      role="img"
      aria-label="Henrique Pimentel"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M38 34 V70" />
        <path d="M62 34 V70" />
        <path d="M25 54 Q50 46 75 54" />
      </g>
      <circle cx="50" cy="42" r="3.4" fill="#05F2F2" />
    </svg>
  );
}

export function Logo({ variant = "wordmark", className = "", href }: LogoProps) {
  const inner = (
    <span className={`inline-flex items-center ${className}`}>
      {variant === "wordmark" && (
        <>
          {/* Wordmark — texto inline para herdar cor via currentColor */}
          <span className="text-xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
            Henrique Pimentel.
          </span>
        </>
      )}

      {variant === "monogram" && (
        <HpMark className="h-10 w-10 text-[color:var(--text-primary)]" />
      )}

      {variant === "signature" && (
        <span className="flex items-center gap-2.5">
          <HpMark className="h-10 w-10 shrink-0 text-[color:var(--text-primary)]" />
          <span className="hidden sm:flex sm:flex-col leading-tight">
            <span className="text-base font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
              Henrique Pimentel.
            </span>
            <span className="text-xs font-medium text-[color:var(--text-secondary)]">
              Consultor de Tecnologia em IA
            </span>
          </span>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center hover:opacity-80 transition-opacity"
        aria-label="Henrique Pimentel — Pagina inicial"
      >
        {inner}
      </Link>
    );
  }
  return inner;
}
