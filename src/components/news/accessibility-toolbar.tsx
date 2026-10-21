"use client";

import { useState } from "react";
import { Minus, Plus, Contrast } from "lucide-react";

const MIN_SCALE = 0.9;
const MAX_SCALE = 1.3;
const STEP = 0.1;

export function AccessibilityToolbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scale, setScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);

  const adjust = (delta: number) =>
    setScale((s) =>
      Math.min(MAX_SCALE, Math.max(MIN_SCALE, Math.round((s + delta) * 10) / 10))
    );

  return (
    <div className="a11y-scale">
      <div
        className="mb-8 flex flex-wrap items-center gap-2 border-b border-[color:var(--border-default)] pb-4"
        role="toolbar"
        aria-label="Acessibilidade do conteúdo"
      >
        <span className="mr-1 font-mono text-xs uppercase tracking-[0.08em] text-[color:var(--text-tertiary)]">
          Acessibilidade
        </span>
        <button
          type="button"
          onClick={() => adjust(-STEP)}
          aria-label="Diminuir tamanho do texto"
          title="Diminuir texto"
          className="inline-flex h-10 min-w-10 items-center justify-center gap-1 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] px-3 text-sm font-medium text-[color:var(--text-primary)] hover:border-[color:var(--accent-primary)] transition-colors"
        >
          <Minus className="h-4 w-4" aria-hidden="true" />
          <span aria-hidden="true" className="text-xs">A</span>
        </button>
        <button
          type="button"
          onClick={() => adjust(STEP)}
          aria-label="Aumentar tamanho do texto"
          title="Aumentar texto"
          className="inline-flex h-10 min-w-10 items-center justify-center gap-1 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] px-3 text-sm font-medium text-[color:var(--text-primary)] hover:border-[color:var(--accent-primary)] transition-colors"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          <span aria-hidden="true" className="text-sm">A</span>
        </button>
        <button
          type="button"
          onClick={() => setHighContrast((v) => !v)}
          aria-pressed={highContrast}
          aria-label={
            highContrast
              ? "Desativar alto contraste"
              : "Ativar alto contraste"
          }
          title="Alto contraste"
          className={`inline-flex h-10 items-center gap-1.5 rounded-lg border px-3 text-sm font-medium transition-colors ${
            highContrast
              ? "border-[color:var(--accent-primary)] bg-[color:var(--accent-primary)] text-white"
              : "border-[color:var(--border-default)] bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] hover:border-[color:var(--accent-primary)]"
          }`}
        >
          <Contrast className="h-4 w-4" aria-hidden="true" />
          Contraste
        </button>
        <span
          className="ml-auto font-mono text-xs text-[color:var(--text-tertiary)]"
          aria-live="polite"
        >
          {Math.round(scale * 100)}%
        </span>
      </div>
      <div
        className={highContrast ? "a11y-high-contrast" : undefined}
        style={{ zoom: scale }}
      >
        {children}
      </div>
    </div>
  );
}
