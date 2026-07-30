"use client";

import { useCallback, useEffect, useState } from "react";

interface Template {
  id: string;
  shortcut: string;
  title: string;
  body: string;
}

export function TemplatesClient({ demo }: { demo: boolean }) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [shortcut, setShortcut] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    const res = await fetch("/api/crm/templates", { cache: "no-store" });
    const data = await res.json();
    setTemplates(data.templates ?? []);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    setError(null);
    const res = await fetch("/api/crm/templates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shortcut, title, body }),
    });
    if (res.ok) {
      setShortcut("");
      setTitle("");
      setBody("");
      await load();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error === "demo" ? "Indisponível no modo demo." : data.error || "Falha ao salvar.");
    }
  }

  async function remove(id: string) {
    await fetch(`/api/crm/templates/${id}`, { method: "DELETE" });
    await load();
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <a href="/atendimento" className="text-sm text-[color:var(--accent-text)] underline">
        ← Inbox
      </a>
      <h1 className="mt-3 text-2xl font-semibold">Respostas rápidas</h1>
      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
        Modelos de mensagem reutilizáveis. No atendimento, abra o menu de
        respostas rápidas no compositor para inserir com um clique.
      </p>

      {demo && (
        <p className="mt-4 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 py-2 text-xs text-[color:var(--text-secondary)]">
          Modo demo: as respostas ficam disponíveis com o Supabase configurado.
        </p>
      )}

      <form onSubmit={add} className="mt-6 space-y-2 rounded-xl border border-[color:var(--border-default)] p-3">
        <div className="flex gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título (ex.: Saudação)"
            className="h-9 flex-1 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
          />
          <input
            value={shortcut}
            onChange={(e) => setShortcut(e.target.value)}
            placeholder="Atalho (ex.: ola)"
            className="h-9 w-40 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
          />
        </div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={3}
          placeholder="Texto da resposta…"
          className="w-full resize-none rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 py-2 text-sm outline-none focus:border-[color:var(--accent-primary)]"
        />
        {error && <p className="text-sm text-[color:var(--error)]">{error}</p>}
        <button type="submit" disabled={demo} className="h-9 rounded-lg bg-[color:var(--accent-primary)] px-4 text-sm font-medium text-white hover:bg-[color:var(--accent-hover)] disabled:opacity-50">
          Adicionar
        </button>
      </form>

      <ul className="mt-4 space-y-2">
        {templates.length === 0 ? (
          <li className="text-sm text-[color:var(--text-tertiary)]">Nenhuma resposta ainda.</li>
        ) : (
          templates.map((t) => (
            <li key={t.id} className="rounded-xl border border-[color:var(--border-default)] p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium">
                    {t.title}
                    {t.shortcut && (
                      <span className="ml-2 rounded bg-[color:var(--bg-muted)] px-1.5 py-0.5 text-[11px] text-[color:var(--text-secondary)]">
                        /{t.shortcut}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 whitespace-pre-wrap text-sm text-[color:var(--text-secondary)]">
                    {t.body}
                  </p>
                </div>
                <button onClick={() => remove(t.id)} className="shrink-0 text-xs text-[color:var(--text-tertiary)] hover:text-[color:var(--error)]">
                  Remover
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
