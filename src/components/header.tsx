"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos/consultoria-ia", label: "Consultoria de IA" },
  { href: "/cases", label: "Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/medcitado", label: "MedCitado", badge: "medico" as const },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[color:var(--border-default)] bg-[color:var(--bg-primary)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo variant="signature" href="/" />

        <nav className="flex items-center gap-0.5 sm:gap-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative inline-flex items-center gap-1.5 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "text-[color:var(--text-primary)] bg-[color:var(--bg-subtle)]"
                    : "text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--bg-subtle)]"
                }`}
              >
                {item.label}
                {item.badge === "medico" && (
                  <span className="ml-0.5 hidden sm:inline-flex items-center rounded-md bg-[color:var(--vertical-medico-subtle-bg)] px-1.5 py-0.5 text-[10px] font-semibold text-[color:var(--vertical-medico-text)] uppercase tracking-wider">
                    Médico
                  </span>
                )}
              </Link>
            );
          })}
          <div className="ml-2 hidden sm:block">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
