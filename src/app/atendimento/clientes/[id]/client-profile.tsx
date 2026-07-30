"use client";

import { useCallback, useEffect, useState } from "react";

interface Contact {
  id: string;
  name: string;
  handle: string;
  channel: string;
  email: string | null;
  notes: string | null;
  company: { id: string; name: string } | null;
}
interface Conversation {
  id: string;
  channel: string;
  status: string;
  last_message_at: string;
  last_message_preview: string;
}
interface Deal {
  id: string;
  title: string;
  value: number;
  currency: string;
  stage: { name: string } | null;
}
interface Task {
  id: string;
  title: string;
  status: string;
  due_at: string | null;
}
interface TimelineItem {
  id: string;
  direction: "in" | "out";
  text: string;
  author: string;
  created_at: string;
  media_kind: string | null;
}

const money = (v: number, c: string) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: c || "BRL" }).format(v);

const dateTime = (iso: string) =>
  new Date(iso).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

export function ClientProfile({ contactId, demo }: { contactId: string; demo: boolean }) {
  const [contact, setContact] = useState<Contact | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [deals, setDeals] = useState<Deal[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch(`/api/crm/contacts/${contactId}`, { cache: "no-store" });
    if (res.status === 404) {
      setNotFound(true);
      return;
    }
    const data = await res.json();
    if (data.demo) return;
    setContact(data.contact);
    setConversations(data.conversations ?? []);
    setDeals(data.deals ?? []);
    setTasks(data.tasks ?? []);
    setTimeline(data.timeline ?? []);
    setEmail(data.contact?.email ?? "");
    setNotes(data.contact?.notes ?? "");
  }, [contactId]);

  useEffect(() => {
    if (!demo) load();
  }, [load, demo]);

  async function save() {
    await fetch(`/api/crm/contacts/${contactId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, notes }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  if (demo) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <a href="/atendimento" className="text-sm text-[color:var(--accent-text)] underline">
          ← Inbox
        </a>
        <p className="mt-4 text-sm text-[color:var(--text-secondary)]">
          A ficha do cliente fica disponível com o Supabase configurado.
        </p>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <a href="/atendimento/crm" className="text-sm text-[color:var(--accent-text)] underline">
          ← CRM
        </a>
        <p className="mt-4 text-sm text-[color:var(--text-tertiary)]">Cliente não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <a href="/atendimento/crm" className="text-sm text-[color:var(--accent-text)] underline">
        ← CRM
      </a>

      <header className="mt-3 flex items-center gap-3">
        <div className="grid size-12 place-items-center rounded-full bg-[color:var(--bg-muted)] text-lg font-semibold text-[color:var(--text-secondary)]">
          {(contact?.name ?? "?").slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h1 className="text-xl font-semibold">{contact?.name ?? "…"}</h1>
          <p className="text-sm text-[color:var(--text-tertiary)]">
            {contact?.channel} · {contact?.handle}
            {contact?.company ? ` · ${contact.company.name}` : ""}
          </p>
        </div>
      </header>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        {/* Timeline */}
        <section>
          <h2 className="mb-3 text-sm font-semibold">Histórico</h2>
          <ol className="space-y-3 border-l border-[color:var(--border-default)] pl-4">
            {timeline.length === 0 && (
              <li className="text-sm text-[color:var(--text-tertiary)]">Sem mensagens ainda.</li>
            )}
            {timeline.map((m) => (
              <li key={m.id} className="relative">
                <span
                  className={`absolute -left-[21px] top-1.5 size-2.5 rounded-full ${
                    m.direction === "out"
                      ? "bg-[color:var(--accent-primary)]"
                      : "bg-[color:var(--text-tertiary)]"
                  }`}
                  aria-hidden
                />
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs font-medium">
                    {m.direction === "out" ? m.author || "Agente" : contact?.name}
                  </span>
                  <span className="text-[11px] text-[color:var(--text-tertiary)]">
                    {dateTime(m.created_at)}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-[color:var(--text-secondary)]">
                  {m.media_kind ? `[${m.media_kind}] ` : ""}
                  {m.text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Colunas laterais */}
        <aside className="space-y-6">
          {/* Dados de CRM */}
          <div className="rounded-xl border border-[color:var(--border-default)] p-4">
            <h3 className="text-sm font-semibold">Dados</h3>
            <label className="mt-3 block">
              <span className="mb-1 block text-xs text-[color:var(--text-tertiary)]">E-mail</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@cliente.com"
                className="h-9 w-full rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
              />
            </label>
            <label className="mt-3 block">
              <span className="mb-1 block text-xs text-[color:var(--text-tertiary)]">Anotações</span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full resize-none rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 py-2 text-sm outline-none focus:border-[color:var(--accent-primary)]"
              />
            </label>
            <button
              onClick={save}
              className="mt-2 h-9 w-full rounded-lg bg-[color:var(--accent-primary)] text-sm font-medium text-white hover:bg-[color:var(--accent-hover)]"
            >
              {saved ? "Salvo ✓" : "Salvar"}
            </button>
          </div>

          {/* Conversas */}
          <Panel title="Conversas" empty="Nenhuma conversa.">
            {conversations.map((c) => (
              <a
                key={c.id}
                href="/atendimento"
                className="block rounded-lg px-2 py-1.5 text-sm hover:bg-[color:var(--bg-subtle)]"
              >
                <span className="text-[color:var(--text-secondary)]">{c.channel}</span> ·{" "}
                <span className="text-[color:var(--text-tertiary)]">{c.status}</span>
              </a>
            ))}
          </Panel>

          {/* Negócios */}
          <Panel title="Negócios" empty="Nenhum negócio.">
            {deals.map((d) => (
              <div key={d.id} className="rounded-lg px-2 py-1.5 text-sm">
                <p className="font-medium">{d.title}</p>
                <p className="text-xs text-[color:var(--text-tertiary)]">
                  {d.stage?.name ?? "—"} · {money(Number(d.value), d.currency)}
                </p>
              </div>
            ))}
          </Panel>

          {/* Tarefas */}
          <Panel title="Tarefas" empty="Nenhuma tarefa.">
            {tasks.map((t) => (
              <div key={t.id} className="rounded-lg px-2 py-1.5 text-sm">
                <span className={t.status === "done" ? "text-[color:var(--text-tertiary)] line-through" : ""}>
                  {t.title}
                </span>
              </div>
            ))}
          </Panel>
        </aside>
      </div>
    </div>
  );
}

function Panel({
  title,
  empty,
  children,
}: {
  title: string;
  empty: string;
  children: React.ReactNode;
}) {
  const items = Array.isArray(children) ? children : [children];
  const isEmpty = items.every((c) => !c || (Array.isArray(c) && c.length === 0));
  return (
    <div className="rounded-xl border border-[color:var(--border-default)] p-4">
      <h3 className="mb-2 text-sm font-semibold">{title}</h3>
      {isEmpty ? <p className="text-xs text-[color:var(--text-tertiary)]">{empty}</p> : children}
    </div>
  );
}
