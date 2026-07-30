"use client";

import { useEffect, useState } from "react";
import { useRealtime } from "@/lib/supabase/realtime";

interface Metrics {
  conversations: { open: number; pending: number; closed: number; total: number };
  tasks: { open: number; done: number; overdue: number };
  messages7d: { in: number; out: number; total: number };
  byChannel: Record<string, number>;
  pipeline: Array<{ stage: string; count: number; value: number }>;
  pipelineTotal: number;
  won: { count: number; value: number };
  lost: { count: number; value: number };
}

const CHANNEL_LABEL: Record<string, string> = {
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  telegram: "Telegram",
  webchat: "Web",
};

const money = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

export function DashboardClient({ demo }: { demo: boolean }) {
  const [m, setM] = useState<Metrics | null>(null);

  async function load() {
    const res = await fetch("/api/crm/metrics", { cache: "no-store" });
    const data = await res.json();
    if (!data.demo) setM(data);
  }

  useEffect(() => {
    load();
  }, []);
  useRealtime(["conversations", "deals", "tasks"], load, !demo);

  const maxValue = m ? Math.max(1, ...m.pipeline.map((p) => p.value)) : 1;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="flex items-center gap-3">
        <a href="/atendimento" className="text-sm text-[color:var(--accent-text)] underline">
          ← Inbox
        </a>
        <h1 className="text-lg font-semibold">Painel</h1>
      </div>

      {!demo && (
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-xs text-[color:var(--text-tertiary)] self-center">Exportar CSV:</span>
          {[
            { type: "contacts", label: "Contatos" },
            { type: "conversations", label: "Conversas" },
            { type: "deals", label: "Negócios" },
          ].map((x) => (
            <a
              key={x.type}
              href={`/api/crm/export?type=${x.type}`}
              className="rounded-lg border border-[color:var(--border-default)] px-2.5 py-1 text-xs font-medium hover:bg-[color:var(--bg-subtle)]"
            >
              {x.label}
            </a>
          ))}
        </div>
      )}

      {demo ? (
        <p className="mt-4 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 py-2 text-xs text-[color:var(--text-secondary)]">
          Modo demo: o painel exibe métricas com o Supabase configurado.
        </p>
      ) : !m ? (
        <p className="mt-6 text-sm text-[color:var(--text-tertiary)]">Carregando métricas…</p>
      ) : (
        <>
          {/* Cartões */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Conversas abertas" value={m.conversations.open} accent />
            <Stat label="Pendentes" value={m.conversations.pending} />
            <Stat label="Resolvidas" value={m.conversations.closed} />
            <Stat label="Tarefas abertas" value={m.tasks.open} />
          </div>

          {/* Mensagens (7 dias) e tarefas atrasadas */}
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Recebidas (7d)" value={m.messages7d.in} />
            <Stat label="Enviadas (7d)" value={m.messages7d.out} />
            <Stat
              label="Tarefas atrasadas"
              value={m.tasks.overdue}
              accent={m.tasks.overdue > 0}
            />
            <Stat label="Tarefas concluídas" value={m.tasks.done} />
          </div>

          {/* Ganhos x Perdidos e conversas por canal */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[color:var(--border-default)] p-4">
              <h2 className="mb-3 text-sm font-semibold">Ganhos × Perdidos</h2>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[color:var(--success)]">
                  Ganhos: {m.won.count} · {money(m.won.value)}
                </span>
                <span className="text-[color:var(--error)]">
                  Perdidos: {m.lost.count} · {money(m.lost.value)}
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-[color:var(--border-default)] p-4">
              <h2 className="mb-3 text-sm font-semibold">Conversas por canal</h2>
              {Object.keys(m.byChannel).length === 0 ? (
                <p className="text-sm text-[color:var(--text-tertiary)]">Sem conversas.</p>
              ) : (
                <ul className="space-y-1 text-sm">
                  {Object.entries(m.byChannel).map(([ch, n]) => (
                    <li key={ch} className="flex justify-between">
                      <span>{CHANNEL_LABEL[ch] ?? ch}</span>
                      <span className="font-medium">{n}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Pipeline */}
          <section className="mt-8">
            <div className="mb-3 flex items-baseline justify-between">
              <h2 className="text-sm font-semibold">Funil de negócios</h2>
              <span className="text-sm text-[color:var(--text-secondary)]">
                Total: <strong className="text-[color:var(--success)]">{money(m.pipelineTotal)}</strong>
              </span>
            </div>
            <div className="space-y-2 rounded-xl border border-[color:var(--border-default)] p-4">
              {m.pipeline.length === 0 && (
                <p className="text-sm text-[color:var(--text-tertiary)]">Sem estágios ainda.</p>
              )}
              {m.pipeline.map((p) => (
                <div key={p.stage} className="flex items-center gap-3">
                  <span className="w-28 shrink-0 truncate text-sm">{p.stage}</span>
                  <div className="h-6 flex-1 overflow-hidden rounded bg-[color:var(--bg-muted)]">
                    <div
                      className="flex h-full items-center rounded bg-[color:var(--accent-primary)] px-2"
                      style={{ width: `${Math.max(6, (p.value / maxValue) * 100)}%` }}
                    >
                      <span className="text-[10px] font-medium text-white">{p.count}</span>
                    </div>
                  </div>
                  <span className="w-28 shrink-0 text-right text-xs text-[color:var(--text-secondary)]">
                    {money(p.value)}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-[color:var(--border-default)] p-4">
      <p className={`text-2xl font-semibold ${accent ? "text-[color:var(--accent-text)]" : ""}`}>
        {value}
      </p>
      <p className="mt-1 text-xs text-[color:var(--text-secondary)]">{label}</p>
    </div>
  );
}
