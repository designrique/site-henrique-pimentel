"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos/consultoria-ia", label: "Consultoria de IA" },
  { href: "/cases", label: "Cases" },
  { href: "/noticias", label: "Notícias" },
  { href: "/blog", label: "Blog" },
  { href: "/medcitado", label: "MedCitado", badge: "medico" as const },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const linkClasses = (href: string) =>
    `relative inline-flex items-center gap-1.5 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${isActive(href) ? "text-[color:var(--text-primary)] bg-[color:var(--bg-subtle)]" : "text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--bg-subtle)]"}`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[color:var(--border-default)] bg-[color:var(--bg-primary)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Site logo - using Henrique Pimentel's final logo */}
        <Link href="/" className="inline-flex items-center hover:opacity-80 transition-opacity" aria-label="Henrique Pimentel — Página inicial">
          <img src="/logos/henrique-pimentel.png" alt="Henrique Pimentel" className="h-10 w-[120px]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5 sm:gap-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClasses(item.href)}>
              {item.label}
              {item.badge === "medico" && (
                <span className="ml-0.5 hidden lg:inline-flex items-center rounded-md bg-[color:var(--vertical-medico-subtle-bg)] px-1.5 py-0.5 text-[10px] font-semibold text-[color:var(--vertical-medico-text)] uppercase tracking-wider">
                  Médico
                </span>
              )}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile: toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-[color:var(--border-default)] hover:bg-[color:var(--bg-subtle)] transition-colors text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile bottom drawer — portal para body (backdrop-blur do header vira containing block p/ fixed) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.div
                  className="fixed inset-0 z-40 bg-black/40 md:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMenuOpen(false)}
                  aria-hidden="true"
                />
                <motion.div
                  className="fixed inset-x-0 bottom-0 z-50 md:hidden rounded-t-2xl border-t border-[color:var(--border-default)] bg-[color:var(--bg-primary)] shadow-xl"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  role="dialog"
                  aria-label="Menu"
                >
                  <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[color:var(--border-default)]" />
                  <nav className="flex flex-col gap-1 p-4 pb-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors ${isActive(item.href) ? "text-[color:var(--text-primary)] bg-[color:var(--bg-subtle)]" : "text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--bg-subtle)]"}`}
                      >
                        {item.label}
                        {item.badge === "medico" && (
                          <span className="inline-flex items-center rounded-md bg-[color:var(--vertical-medico-subtle-bg)] px-1.5 py-0.5 text-[10px] font-semibold text-[color:var(--vertical-medico-text)] uppercase tracking-wider">
                            Médico
                          </span>
                        )}
                      </Link>
                    ))}
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}