import type { ReactNode } from "react";

interface EyebrowBadgeProps {
  children: ReactNode;
  tone?: "master" | "vertical";
  withDot?: boolean;
  className?: string;
}

export function EyebrowBadge({
  children,
  tone = "master",
  withDot = true,
  className = "",
}: EyebrowBadgeProps) {
  const palette =
    tone === "vertical"
      ? "bg-[color:var(--vertical-medico-subtle-bg)] text-[color:var(--vertical-medico-text)]"
      : "bg-[color:var(--accent-subtle-bg)] text-[color:var(--accent-text)]";
  const dotColor =
    tone === "vertical"
      ? "bg-[color:var(--vertical-medico-primary)]"
      : "bg-[color:var(--accent-primary)]";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${palette} ${className}`}
    >
      {withDot && (
        <span
          aria-hidden="true"
          className={`h-1.5 w-1.5 rounded-full ${dotColor} animate-pulse`}
        />
      )}
      {children}
    </span>
  );
}
