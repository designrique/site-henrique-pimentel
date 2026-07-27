import Link from "next/link";

type LogoVariant = "wordmark" | "monogram" | "signature";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  /** Quando href e definido, envolve em Link clicavel para a home */
  href?: string;
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
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--text-primary)] text-[color:var(--bg-primary)] font-bold tracking-tight text-base">
          HP.
        </span>
      )}

      {variant === "signature" && (
        <span className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--text-primary)] text-[color:var(--bg-primary)] font-bold tracking-tight text-base">
            HP.
          </span>
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
