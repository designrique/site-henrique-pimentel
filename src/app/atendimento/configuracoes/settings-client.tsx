"use client";

import { useCallback, useEffect, useState } from "react";

interface Settings {
  auto_assign: boolean;
  business_days: number[];
  open_time: string;
  close_time: string;
  timezone: string;
  away_message: string;
}

const DAYS = [
  { n: 0, label: "Dom" },
  { n: 1, label: "Seg" },
  { n: 2, label: "Ter" },
  { n: 3, label: "Qua" },
  { n: 4, label: "Qui" },
  { n: 5, label: "Sex" },
  { n: 6, label: "Sáb" },
];

export function SettingsClient({ demo }: { demo: boolean }) {
  const [s, setS] = useState<Settings | null>(null);
  const [saved, setSaved] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch("/api/crm/settings", { cache: "no-store" });
    const data = await res.json();
    setS(data.settings);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function save() {
    if (!s) return;
    await fetch("/api/crm/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(s),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  function toggleDay(n: number) {
    if (!s) return;
    const days = s.business_days.includes(n)
      ? s.business_days.filter((d) => d !== n)
      : [...s.business_days, n].sort();
    setS({ ...s, business_days: days });
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <a href="/atendimento" className="text-sm text-[color:var(--accent-text)] underline">
        ← Inbox
      </a>
      <h1 className="mt-3 text-2xl font-semibold">Configurações de atendimento</h1>

      {demo && (
        <p className="mt-4 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 py-2 text-xs text-[color:var(--text-secondary)]">
          Modo demo: as configurações ficam disponíveis com o Supabase configurado.
        </p>
      )}

      {s && (
        <div className="mt-6 space-y-6">
          {/* Auto-atribuição */}
          <section className="rounded-xl border border-[color:var(--border-default)] p-4">
            <label className="flex items-center justify-between gap-4">
              <span>
                <span className="block text-sm font-medium">Fila / atribuição automática</span>
                <span className="block text-xs text-[color:var(--text-secondary)]">
                  Distribui novas conversas ao atendente com menos conversas abertas.
                </span>
              </span>
              <input
                type="checkbox"
                checked={s.auto_assign}
                onChange={(e) => setS({ ...s, auto_assign: e.target.checked })}
                className="size-5 accent-[color:var(--accent-primary)]"
              />
            </label>
          </section>

          {/* Horário de atendimento */}
          <section className="rounded-xl border border-[color:var(--border-default)] p-4">
            <h2 className="text-sm font-medium">Horário de atendimento</h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {DAYS.map((d) => (
                <button
                  key={d.n}
                  type="button"
                  onClick={() => toggleDay(d.n)}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${
                    s.business_days.includes(d.n)
                      ? "border-transparent bg-[color:var(--accent-primary)] text-white"
                      : "border-[color:var(--border-default)] hover:bg-[color:var(--bg-subtle)]"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap items-end gap-3">
              <label className="block">
                <span className="mb-1 block text-xs text-[color:var(--text-tertiary)]">Abertura</span>
                <input
                  type="time"
                  value={s.open_time}
                  onChange={(e) => setS({ ...s, open_time: e.target.value })}
                  className="h-9 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs text-[color:var(--text-tertiary)]">Fechamento</span>
                <input
                  type="time"
                  value={s.close_time}
                  onChange={(e) => setS({ ...s, close_time: e.target.value })}
                  className="h-9 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-2 text-sm"
                />
              </label>
              <label className="block flex-1">
                <span className="mb-1 block text-xs text-[color:var(--text-tertiary)]">Fuso horário</span>
                <input
                  type="text"
                  value={s.timezone}
                  onChange={(e) => setS({ ...s, timezone: e.target.value })}
                  placeholder="America/Sao_Paulo"
                  className="h-9 w-full rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
                />
              </label>
            </div>
          </section>

          {/* Mensagem de ausência */}
          <section className="rounded-xl border border-[color:var(--border-default)] p-4">
            <h2 className="text-sm font-medium">Mensagem fora do expediente</h2>
            <p className="mt-1 text-xs text-[color:var(--text-secondary)]">
              Enviada automaticamente quando uma mensagem chega fora do horário.
              Deixe em branco para desativar.
            </p>
            <textarea
              value={s.away_message}
              onChange={(e) => setS({ ...s, away_message: e.target.value })}
              rows={3}
              placeholder="Olá! Nosso atendimento funciona de seg a sex, das 9h às 18h. Retornaremos assim que possível."
              className="mt-2 w-full resize-none rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 py-2 text-sm outline-none focus:border-[color:var(--accent-primary)]"
            />
          </section>

          <button
            onClick={save}
            disabled={demo}
            className="h-10 rounded-[10px] bg-[color:var(--accent-primary)] px-5 text-sm font-medium text-white hover:bg-[color:var(--accent-hover)] disabled:opacity-50"
          >
            {saved ? "Salvo ✓" : "Salvar configurações"}
          </button>
        </div>
      )}
    </div>
  );
}
