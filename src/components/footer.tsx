import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border-default)] bg-[color:var(--bg-subtle)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-3">
          <Logo variant="signature" />
          <p className="max-w-sm text-sm text-[color:var(--text-secondary)] leading-relaxed">
            Implemento sistemas de IA que entregam resultado mensuravel. Sites,
            automacoes, agentes inteligentes e presenca em buscas generativas.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-[color:var(--text-tertiary)] uppercase tracking-wider mb-3">
            Trabalho
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/cases"
                className="text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
              >
                Cases
              </Link>
            </li>
            <li>
              <Link
                href="/medcitado"
                className="text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
              >
                MedCitado
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-[color:var(--text-tertiary)] uppercase tracking-wider mb-3">
            Contato
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/sobre"
                className="text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
              >
                Sobre
              </Link>
            </li>
            <li>
              <a
                href="mailto:contato@henriquepimentel.com.br"
                className="text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
              >
                E-mail
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/henriquepimentel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[color:var(--border-default)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[color:var(--text-tertiary)]">
          <span>
            © {new Date().getFullYear()} Henrique Pimentel. Todos os direitos
            reservados.
          </span>
          <span className="font-mono">Feito em Recife.</span>
        </div>
      </div>
    </footer>
  );
}
