"use client";

import { useCallback, useEffect, useState } from "react";

interface ApiKey {
  id: string;
  name: string;
  prefix: string;
  last_used_at: string | null;
  revoked_at: string | null;
  created_at: string;
}
interface Webhook {
  id: string;
  url: string;
  secret: string;
  events: string[];
  is_active: boolean;
}

export function IntegrationsClient({ demo }: { demo: boolean }) {
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [events, setEvents] = useState<string[]>([]);
  const [newKeyName, setNewKeyName] = useState("");
  const [revealed, setRevealed] = useState<string | null>(null);
  const [url, setUrl] = useState("");
  const [selEvents, setSelEvents] = useState<string[]>([]);

  const load = useCallback(async () => {
    const [k, w] = await Promise.all([
      fetch("/api/integrations/keys", { cache: "no-store" }).then((r) => r.json()),
      fetch("/api/integrations/webhooks", { cache: "no-store" }).then((r) => r.json()),
    ]);
    setKeys(k.keys ?? []);
    setWebhooks(w.webhooks ?? []);
    setEvents(w.events ?? []);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function createKey(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/integrations/keys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newKeyName || "Chave de API" }),
    });
    const data = await res.json();
    if (res.ok) {
      setRevealed(data.raw); // mostrada uma única vez
      setNewKeyName("");
      await load();
    }
  }

  async function revokeKey(id: string) {
    await fetch(`/api/integrations/keys/${id}`, { method: "DELETE" });
    await load();
  }

  async function createWebhook(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    const res = await fetch("/api/integrations/webhooks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, events: selEvents }),
    });
    if (res.ok) {
      setUrl("");
      setSelEvents([]);
      await load();
    }
  }

  async function removeWebhook(id: string) {
    await fetch(`/api/integrations/webhooks/${id}`, { method: "DELETE" });
    await load();
  }

  function toggleEvent(ev: string) {
    setSelEvents((prev) => (prev.includes(ev) ? prev.filter((e) => e !== ev) : [...prev, ev]));
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <a href="/atendimento" className="text-sm text-[color:var(--accent-text)] underline">
        ← Inbox
      </a>
      <h1 className="mt-3 text-2xl font-semibold">Integrações</h1>
      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
        Conecte o hpchat a outros sistemas com chaves de API e webhooks de saída.
      </p>

      {demo && (
        <p className="mt-4 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 py-2 text-xs text-[color:var(--text-secondary)]">
          Modo demo: as integrações ficam disponíveis com o Supabase configurado.
        </p>
      )}

      {/* Chaves de API */}
      <section className="mt-8">
        <h2 className="text-sm font-semibold">Chaves de API</h2>
        <p className="mt-1 text-xs text-[color:var(--text-secondary)]">
          Autentique chamadas à API pública com <code>Authorization: Bearer &lt;chave&gt;</code>.
          Endpoints: <code>GET /api/v1/conversations</code>, <code>POST /api/v1/messages</code>.
        </p>

        {revealed && (
          <div className="mt-3 rounded-lg border border-[color:var(--accent-primary)] bg-[color:var(--accent-subtle-bg)]/40 p-3">
            <p className="text-xs font-medium">Copie agora — a chave não será mostrada novamente:</p>
            <code className="mt-1 block break-all rounded bg-[color:var(--bg-primary)] px-2 py-1.5 text-xs">
              {revealed}
            </code>
            <button onClick={() => setRevealed(null)} className="mt-2 text-xs text-[color:var(--accent-text)] underline">
              Ok, guardei
            </button>
          </div>
        )}

        <form onSubmit={createKey} className="mt-3 flex gap-2">
          <input
            value={newKeyName}
            onChange={(e) => setNewKeyName(e.target.value)}
            placeholder="Nome da chave (ex.: Integração ERP)"
            className="h-9 flex-1 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
          />
          <button type="submit" disabled={demo} className="h-9 rounded-lg bg-[color:var(--accent-primary)] px-4 text-sm font-medium text-white hover:bg-[color:var(--accent-hover)] disabled:opacity-50">
            Gerar chave
          </button>
        </form>

        <ul className="mt-3 divide-y divide-[color:var(--border-default)] rounded-xl border border-[color:var(--border-default)]">
          {keys.length === 0 ? (
            <li className="p-3 text-sm text-[color:var(--text-tertiary)]">Nenhuma chave.</li>
          ) : (
            keys.map((k) => (
              <li key={k.id} className="flex items-center justify-between p-3">
                <div>
                  <p className="text-sm font-medium">
                    {k.name}{" "}
                    {k.revoked_at && <span className="text-xs text-[color:var(--error)]">(revogada)</span>}
                  </p>
                  <p className="text-xs text-[color:var(--text-tertiary)]">
                    {k.prefix}••• · {k.last_used_at ? "usada" : "nunca usada"}
                  </p>
                </div>
                {!k.revoked_at && (
                  <button onClick={() => revokeKey(k.id)} className="text-xs text-[color:var(--text-tertiary)] hover:text-[color:var(--error)]">
                    Revogar
                  </button>
                )}
              </li>
            ))
          )}
        </ul>
      </section>

      {/* Webhooks de saída */}
      <section className="mt-10">
        <h2 className="text-sm font-semibold">Webhooks de saída</h2>
        <p className="mt-1 text-xs text-[color:var(--text-secondary)]">
          Eventos são enviados via POST, assinados com <code>X-HPChat-Signature</code> (HMAC-SHA256).
        </p>

        <form onSubmit={createWebhook} className="mt-3 space-y-2 rounded-xl border border-[color:var(--border-default)] p-3">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://seu-sistema.com/webhook"
            className="h-9 w-full rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
          />
          <div className="flex flex-wrap gap-1.5">
            {events.map((ev) => (
              <button
                key={ev}
                type="button"
                onClick={() => toggleEvent(ev)}
                className={`rounded-full border px-2.5 py-1 text-xs ${
                  selEvents.includes(ev)
                    ? "border-transparent bg-[color:var(--accent-primary)] text-white"
                    : "border-[color:var(--border-default)] hover:bg-[color:var(--bg-subtle)]"
                }`}
              >
                {ev}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-[color:var(--text-tertiary)]">
            Nenhum evento selecionado = recebe todos.
          </p>
          <button type="submit" disabled={demo} className="h-9 rounded-lg bg-[color:var(--accent-primary)] px-4 text-sm font-medium text-white hover:bg-[color:var(--accent-hover)] disabled:opacity-50">
            Adicionar webhook
          </button>
        </form>

        <ul className="mt-3 space-y-2">
          {webhooks.map((w) => (
            <li key={w.id} className="rounded-xl border border-[color:var(--border-default)] p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{w.url}</p>
                  <p className="mt-0.5 text-xs text-[color:var(--text-tertiary)]">
                    {w.events.length ? w.events.join(", ") : "todos os eventos"}
                  </p>
                  <p className="mt-1 text-[11px] text-[color:var(--text-tertiary)]">
                    secret: <code className="break-all">{w.secret}</code>
                  </p>
                </div>
                <button onClick={() => removeWebhook(w.id)} className="shrink-0 text-xs text-[color:var(--text-tertiary)] hover:text-[color:var(--error)]">
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
