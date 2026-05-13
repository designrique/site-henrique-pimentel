import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "vertical-primary";
type Size = "default" | "lg";

interface BaseProps {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[color:var(--accent-primary)] text-white hover:bg-[color:var(--accent-hover)]",
  "vertical-primary":
    "bg-[color:var(--vertical-medico-primary)] text-white hover:opacity-90",
  ghost:
    "border border-[color:var(--border-default)] text-[color:var(--text-primary)] hover:bg-[color:var(--bg-subtle)]",
};

const sizeClasses: Record<Size, string> = {
  default: "h-11 px-5 text-sm",
  lg: "h-14 px-8 text-base",
};

function getClasses(variant: Variant, size: Size, extra = "") {
  return `inline-flex items-center justify-center rounded-[10px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 active:translate-y-[1px] ${variantClasses[variant]} ${sizeClasses[size]} ${extra}`;
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    BaseProps {}
export function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={getClasses(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

interface LinkButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    BaseProps {
  href: string;
}
export function LinkButton({
  children,
  variant = "primary",
  size = "default",
  className = "",
  href,
  ...props
}: LinkButtonProps) {
  return (
    <Link href={href} className={getClasses(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}
