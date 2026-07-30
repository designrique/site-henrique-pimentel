"use client";

import { useCallback, useEffect, useState } from "react";

interface Stage {
  id: string;
  name: string;
  position: number;
}
interface Deal {
  id: string;
  title: string;
  value: number;
  currency: string;
  stage_id: string;
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

const money = (v: number, c: string) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: c || "BRL" }).format(v);

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]!.toUpperCase()).join("");
}

export function KanbanClient({ demo }: { demo: boolean }) {
  const [stages, setStages] = useState<Stage[]>([]);
  const [deals, setDeals] = useState<Deal[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [dragId, setDragId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [stageId, setStageId] = useState("");
  const [value, setValue] = useState("");
  const [contactId, setContactId] = useState("");
  const [assigneeId, setAssigneeId] = useState("");

  const load = useCallback(async () => {
    const [s, d, dir] = await Promise.all([
      fetch("/api/crm/stages", { cache: "no-store" }).then((r) => r.json()),
      fetch("/api/crm/deals", { cache: "no-store" }).then((r) => r.json()),
      fetch("/api/crm/directory", { cache: "no-store" }).then((r) => r.json()),
    ]);
    setStages(s.stages ?? []);
    setDeals(d.deals ?? []);
    setContacts(dir.contacts ?? []);
    setMembers(dir.members ?? []);
    if (!stageId && s.stages?.[0]) setStageId(s.stages[0].id);
  }, [stageId]);

  useEffect(() => {
    load();
  }, [load]);

  async function addDeal(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !stageId) return;
    await fetch("/api/crm/deals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        stageId,
        value: Number(value) || 0,
        contactId: contactId || null,
        assigneeId: assigneeId || null,
      }),
    });
    setTitle("");
    setValue("");
    setContactId("");
    setAssigneeId("");
    await load();
  }

  async function moveDeal(dealId: string, toStage: string) {
    setDeals((prev) => prev.map((d) => (d.id === dealId ? { ...d, stage_id: toStage } : d)));
    await fetch(`/api/crm/deals/${dealId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stageId: toStage }),
    });
  }

  const memberName = (id: string | null) => members.find((m) => m.id === id)?.name ?? null;
  const stageTotal = (id: string) =>
    deals.filter((d) => d.stage_id === id).reduce((s, d) => s + Number(d.value), 0);

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between border-b border-[color:var(--border-default)] px-4 py-3">
        <div className="flex items-center gap-3">
          <a href="/atendimento" className="text-sm text-[color:var(--accent-text)] underline">
            ← Inbox
          </a>
          <h1 className="text-lg font-semibold">CRM · Negócios</h1>
        </div>
      </header>

      {demo && (
        <p className="mx-4 mt-3 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 py-2 text-xs text-[color:var(--text-secondary)]">
          Modo demo: o kanban fica disponível com o Supabase configurado.
        </p>
      )}

      {/* Novo negócio */}
      <form
        onSubmit={addDeal}
        className="flex flex-wrap items-end gap-2 border-b border-[color:var(--border-default)] px-4 py-3"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Novo negócio…"
          className="h-9 min-w-48 flex-1 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
        />
        <select value={stageId} onChange={(e) => setStageId(e.target.value)} className="h-9 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-2 text-sm">
          {stages.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Valor"
          inputMode="decimal"
          className="h-9 w-28 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
        />
        <select value={contactId} onChange={(e) => setContactId(e.target.value)} className="h-9 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-2 text-sm">
          <option value="">Cliente…</option>
          {contacts.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <select value={assigneeId} onChange={(e) => setAssigneeId(e.target.value)} className="h-9 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-2 text-sm">
          <option value="">Responsável…</option>
          {members.map((m) => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
        </select>
        <button type="submit" className="h-9 rounded-lg bg-[color:var(--accent-primary)] px-4 text-sm font-medium text-white hover:bg-[color:var(--accent-hover)]">
          Adicionar
        </button>
      </form>

      {/* Colunas */}
      <div className="flex min-h-0 flex-1 gap-3 overflow-x-auto p-4">
        {stages.map((stage) => {
          const cards = deals.filter((d) => d.stage_id === stage.id);
          return (
            <div
              key={stage.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => {
                if (dragId) moveDeal(dragId, stage.id);
                setDragId(null);
              }}
              className="flex w-72 shrink-0 flex-col rounded-xl bg-[color:var(--bg-subtle)]"
            >
              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="text-sm font-semibold">{stage.name}</span>
                <span className="text-xs text-[color:var(--text-tertiary)]">
                  {cards.length} · {money(stageTotal(stage.id), "BRL")}
                </span>
              </div>
              <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-2 pb-3">
                {cards.map((d) => (
                  <div
                    key={d.id}
                    draggable
                    onDragStart={() => setDragId(d.id)}
                    className="cursor-grab rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-3 shadow-sm active:cursor-grabbing"
                  >
                    <p className="text-sm font-medium">{d.title}</p>
                    <p className="mt-1 text-sm text-[color:var(--success)]">
                      {money(Number(d.value), d.currency)}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-[color:var(--text-tertiary)]">
                        {d.contact?.name ?? "—"}
                      </span>
                      {d.assignee_id && (
                        <span
                          title={memberName(d.assignee_id) ?? ""}
                          className="grid size-6 place-items-center rounded-full bg-[color:var(--accent-subtle-bg)] text-[10px] font-semibold text-[color:var(--accent-text)]"
                        >
                          {initials(memberName(d.assignee_id) ?? "?")}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                {cards.length === 0 && (
                  <p className="px-1 py-4 text-center text-xs text-[color:var(--text-tertiary)]">
                    Arraste negócios para cá.
                  </p>
                )}
              </div>
            </div>
          );
        })}
        {stages.length === 0 && !demo && (
          <p className="text-sm text-[color:var(--text-tertiary)]">Carregando estágios…</p>
        )}
      </div>
    </div>
  );
}
