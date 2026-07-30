"use client";

import { useCallback, useEffect, useState } from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "open" | "done";
  due_at: string | null;
  assignee_id: string | null;
  contact_id: string | null;
  contact: { id: string; name: string } | null;
}
interface Contact {
  id: string;
  name: string;
}
interface Member {
  id: string;
  name: string;
}

function dueLabel(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

export function TasksClient({ demo }: { demo: boolean }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [scope, setScope] = useState<"all" | "mine">("all");

  const [title, setTitle] = useState("");
  const [assigneeId, setAssigneeId] = useState("");
  const [contactId, setContactId] = useState("");
  const [dueAt, setDueAt] = useState("");

  const load = useCallback(async () => {
    const params = new URLSearchParams();
    if (scope === "mine") params.set("scope", "mine");
    const [t, dir] = await Promise.all([
      fetch(`/api/crm/tasks?${params}`, { cache: "no-store" }).then((r) => r.json()),
      fetch("/api/crm/directory", { cache: "no-store" }).then((r) => r.json()),
    ]);
    setTasks(t.tasks ?? []);
    setContacts(dir.contacts ?? []);
    setMembers(dir.members ?? []);
  }, [scope]);

  useEffect(() => {
    load();
  }, [load]);

  async function addTask(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch("/api/crm/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        assigneeId: assigneeId || null,
        contactId: contactId || null,
        dueAt: dueAt ? new Date(dueAt).toISOString() : null,
      }),
    });
    setTitle("");
    setAssigneeId("");
    setContactId("");
    setDueAt("");
    await load();
  }

  async function toggle(task: Task) {
    await fetch(`/api/crm/tasks/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: task.status === "done" ? "open" : "done" }),
    });
    await load();
  }

  async function remove(id: string) {
    await fetch(`/api/crm/tasks/${id}`, { method: "DELETE" });
    await load();
  }

  const memberName = (id: string | null) => members.find((m) => m.id === id)?.name ?? "—";

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/atendimento" className="text-sm text-[color:var(--accent-text)] underline">
            ← Inbox
          </a>
          <h1 className="text-lg font-semibold">Tarefas</h1>
        </div>
        <div className="flex gap-1">
          {(["all", "mine"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setScope(s)}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                scope === s
                  ? "bg-[color:var(--accent-primary)] text-white"
                  : "text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-subtle)]"
              }`}
            >
              {s === "all" ? "Todas" : "Minhas"}
            </button>
          ))}
        </div>
      </div>

      {demo && (
        <p className="mt-4 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 py-2 text-xs text-[color:var(--text-secondary)]">
          Modo demo: as tarefas ficam disponíveis com o Supabase configurado.
        </p>
      )}

      <form
        onSubmit={addTask}
        className="mt-5 flex flex-wrap items-end gap-2 rounded-xl border border-[color:var(--border-default)] p-3"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nova tarefa…"
          className="h-9 min-w-48 flex-1 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
        />
        <select value={assigneeId} onChange={(e) => setAssigneeId(e.target.value)} className="h-9 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-2 text-sm">
          <option value="">Atendente…</option>
          {members.map((m) => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
        </select>
        <select value={contactId} onChange={(e) => setContactId(e.target.value)} className="h-9 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-2 text-sm">
          <option value="">Cliente…</option>
          {contacts.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <input
          type="date"
          value={dueAt}
          onChange={(e) => setDueAt(e.target.value)}
          className="h-9 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-2 text-sm"
        />
        <button type="submit" className="h-9 rounded-lg bg-[color:var(--accent-primary)] px-4 text-sm font-medium text-white hover:bg-[color:var(--accent-hover)]">
          Adicionar
        </button>
      </form>

      <ul className="mt-6 space-y-2">
        {tasks.length === 0 && (
          <li className="text-sm text-[color:var(--text-tertiary)]">Nenhuma tarefa.</li>
        )}
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex items-center gap-3 rounded-xl border border-[color:var(--border-default)] p-3"
          >
            <input
              type="checkbox"
              checked={t.status === "done"}
              onChange={() => toggle(t)}
              className="size-4 accent-[color:var(--accent-primary)]"
            />
            <div className="min-w-0 flex-1">
              <p className={`text-sm font-medium ${t.status === "done" ? "text-[color:var(--text-tertiary)] line-through" : ""}`}>
                {t.title}
              </p>
              <p className="mt-0.5 text-xs text-[color:var(--text-tertiary)]">
                {memberName(t.assignee_id)}
                {t.contact ? ` · ${t.contact.name}` : ""}
                {t.due_at ? ` · vence ${dueLabel(t.due_at)}` : ""}
              </p>
            </div>
            <button
              onClick={() => remove(t.id)}
              className="text-xs text-[color:var(--text-tertiary)] hover:text-[color:var(--error)]"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
