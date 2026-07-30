"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { signOut } from "@/app/login/actions";
import type {
  Channel,
  ConversationStatus,
  ConversationView,
  Message,
} from "@/lib/inbox/types";

export interface InboxSession {
  userName: string;
  orgName: string;
  demo: boolean;
}

const CHANNEL_LABEL: Record<Channel, string> = {
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  telegram: "Telegram",
  webchat: "Web",
};

const CHANNEL_DOT: Record<Channel, string> = {
  whatsapp: "#25D366",
  instagram: "#E1306C",
  telegram: "#229ED9",
  webchat: "#1E40AF",
};

const STATUS_LABEL: Record<ConversationStatus, string> = {
  open: "Aberta",
  pending: "Pendente",
  closed: "Resolvida",
};

const STATUS_TABS: Array<{ key: ConversationStatus | "all"; label: string }> = [
  { key: "all", label: "Todas" },
  { key: "open", label: "Abertas" },
  { key: "pending", label: "Pendentes" },
  { key: "closed", label: "Resolvidas" },
];

function timeLabel(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

function Avatar({ initials, channel }: { initials: string; channel: Channel }) {
  return (
    <div className="relative shrink-0">
      <div className="grid size-10 place-items-center rounded-full bg-[color:var(--bg-muted)] text-sm font-semibold text-[color:var(--text-secondary)]">
        {initials}
      </div>
      <span
        className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full border-2 border-[color:var(--bg-primary)]"
        style={{ background: CHANNEL_DOT[channel] }}
        aria-hidden
      />
    </div>
  );
}

export function InboxClient({ session }: { session: InboxSession }) {
  const [conversations, setConversations] = useState<ConversationView[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [tab, setTab] = useState<ConversationStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const threadEndRef = useRef<HTMLDivElement>(null);

  const active = conversations.find((c) => c.id === activeId) ?? null;

  const loadConversations = useCallback(async () => {
    const params = new URLSearchParams();
    if (tab !== "all") params.set("status", tab);
    if (search.trim()) params.set("q", search.trim());
    const res = await fetch(`/api/inbox/conversations?${params.toString()}`, {
      cache: "no-store",
    });
    const data = (await res.json()) as { conversations: ConversationView[] };
    setConversations(data.conversations);
    return data.conversations;
  }, [tab, search]);

  const loadMessages = useCallback(async (id: string) => {
    const res = await fetch(`/api/inbox/conversations/${id}`, { cache: "no-store" });
    if (!res.ok) return;
    const data = (await res.json()) as { messages: Message[] };
    setMessages(data.messages);
  }, []);

  // Carrega a lista quando filtros mudam; mantém uma seleção válida.
  useEffect(() => {
    loadConversations().then((list) => {
      setActiveId((current) => {
        if (current && list.some((c) => c.id === current)) return current;
        return list[0]?.id ?? null;
      });
    });
  }, [loadConversations]);

  // Carrega mensagens da conversa selecionada.
  useEffect(() => {
    if (activeId) loadMessages(activeId);
    else setMessages([]);
  }, [activeId, loadMessages]);

  // Polling leve: novas mensagens recebidas via webhook aparecem sozinhas.
  useEffect(() => {
    const t = setInterval(() => {
      loadConversations();
      if (activeId) loadMessages(activeId);
    }, 5000);
    return () => clearInterval(t);
  }, [loadConversations, loadMessages, activeId]);

  useEffect(() => {
    threadEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    const text = draft.trim();
    if (!text || !activeId || sending) return;
    setSending(true);
    setDraft("");

    // Otimista: mostra imediatamente.
    const optimistic: Message = {
      id: `tmp_${text.length}_${messages.length}`,
      conversationId: activeId,
      direction: "out",
      text,
      at: new Date().toISOString(),
      status: "queued",
      author: "Você",
    };
    setMessages((prev) => [...prev, optimistic]);

    await fetch(`/api/inbox/conversations/${activeId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    }).catch(() => {});

    await Promise.all([loadMessages(activeId), loadConversations()]);
    setSending(false);
  }

  async function changeStatus(status: ConversationStatus) {
    if (!activeId) return;
    await fetch(`/api/inbox/conversations/${activeId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    await loadConversations();
  }

  return (
    <div className="flex h-screen flex-col">
      {/* Barra superior — organização, usuário e sair */}
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-[color:var(--border-default)] bg-[color:var(--bg-primary)] px-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{session.orgName || "hpchat"}</span>
          {session.demo && (
            <span className="rounded-full bg-[color:var(--warning)]/15 px-2 py-0.5 text-[10px] font-medium text-[color:var(--warning)]">
              demo
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/atendimento/canais"
            className="text-xs font-medium text-[color:var(--accent-text)] hover:underline"
          >
            Canais
          </a>
          <span className="text-xs text-[color:var(--text-secondary)]">
            {session.userName}
          </span>
          {!session.demo && (
            <form action={signOut}>
              <button
                type="submit"
                className="rounded-lg border border-[color:var(--border-default)] px-2.5 py-1 text-xs font-medium hover:bg-[color:var(--bg-subtle)]"
              >
                Sair
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[340px_1fr] xl:grid-cols-[340px_1fr_280px]">
      {/* Coluna 1 — lista de conversas */}
      <aside className="flex min-h-0 flex-col border-r border-[color:var(--border-default)]">
        <div className="border-b border-[color:var(--border-default)] p-4">
          <h1 className="text-lg font-semibold">Atendimento</h1>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar contato ou mensagem…"
            className="mt-3 h-10 w-full rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
          />
          <div className="mt-3 flex gap-1">
            {STATUS_TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  tab === t.key
                    ? "bg-[color:var(--accent-primary)] text-white"
                    : "text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-subtle)]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {conversations.length === 0 && (
            <p className="p-6 text-center text-sm text-[color:var(--text-tertiary)]">
              Nenhuma conversa neste filtro.
            </p>
          )}
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`flex w-full items-start gap-3 border-b border-[color:var(--border-default)] p-4 text-left transition-colors ${
                c.id === activeId
                  ? "bg-[color:var(--accent-subtle-bg)]"
                  : "hover:bg-[color:var(--bg-subtle)]"
              }`}
            >
              <Avatar initials={c.contact.initials} channel={c.channel} />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="truncate text-sm font-semibold">{c.contact.name}</span>
                  <span className="shrink-0 text-xs text-[color:var(--text-tertiary)]">
                    {timeLabel(c.lastMessageAt)}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-sm text-[color:var(--text-secondary)]">
                  {c.lastMessagePreview}
                </p>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="text-[10px] font-medium uppercase tracking-wide text-[color:var(--text-tertiary)]">
                    {CHANNEL_LABEL[c.channel]}
                  </span>
                  {c.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[color:var(--bg-muted)] px-1.5 py-0.5 text-[10px] text-[color:var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {c.unreadCount > 0 && (
                <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[color:var(--accent-primary)] text-[11px] font-semibold text-white">
                  {c.unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </aside>

      {/* Coluna 2 — thread */}
      <section className="flex min-h-0 flex-col bg-[color:var(--bg-subtle)]">
        {!active ? (
          <div className="grid flex-1 place-items-center text-sm text-[color:var(--text-tertiary)]">
            Selecione uma conversa para começar.
          </div>
        ) : (
          <>
            <header className="flex items-center justify-between border-b border-[color:var(--border-default)] bg-[color:var(--bg-primary)] px-5 py-3">
              <div className="flex items-center gap-3">
                <Avatar initials={active.contact.initials} channel={active.channel} />
                <div>
                  <p className="text-sm font-semibold">{active.contact.name}</p>
                  <p className="text-xs text-[color:var(--text-tertiary)]">
                    {CHANNEL_LABEL[active.channel]} · {active.contact.handle}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[color:var(--bg-muted)] px-2.5 py-1 text-xs font-medium text-[color:var(--text-secondary)]">
                  {STATUS_LABEL[active.status]}
                </span>
                {active.status !== "closed" ? (
                  <button
                    onClick={() => changeStatus("closed")}
                    className="rounded-lg border border-[color:var(--border-default)] px-3 py-1.5 text-xs font-medium hover:bg-[color:var(--bg-subtle)]"
                  >
                    Resolver
                  </button>
                ) : (
                  <button
                    onClick={() => changeStatus("open")}
                    className="rounded-lg border border-[color:var(--border-default)] px-3 py-1.5 text-xs font-medium hover:bg-[color:var(--bg-subtle)]"
                  >
                    Reabrir
                  </button>
                )}
              </div>
            </header>

            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-5 py-6">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.direction === "out" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-sm shadow-sm ${
                      m.direction === "out"
                        ? "rounded-br-sm bg-[color:var(--accent-primary)] text-white"
                        : "rounded-bl-sm bg-[color:var(--bg-primary)] text-[color:var(--text-primary)]"
                    }`}
                  >
                    <p className="whitespace-pre-wrap break-words">{m.text}</p>
                    <span
                      className={`mt-1 block text-right text-[10px] ${
                        m.direction === "out"
                          ? "text-white/70"
                          : "text-[color:var(--text-tertiary)]"
                      }`}
                    >
                      {timeLabel(m.at)}
                      {m.direction === "out" && m.status === "queued" && " · enviando"}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={threadEndRef} />
            </div>

            <footer className="border-t border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-3">
              <div className="flex items-end gap-2">
                <textarea
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  rows={1}
                  placeholder={`Responder ${active.contact.name}…`}
                  className="max-h-32 min-h-[44px] flex-1 resize-none rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 py-2.5 text-sm outline-none focus:border-[color:var(--accent-primary)]"
                />
                <button
                  onClick={sendMessage}
                  disabled={!draft.trim() || sending}
                  className="h-11 rounded-xl bg-[color:var(--accent-primary)] px-5 text-sm font-medium text-white transition-colors hover:bg-[color:var(--accent-hover)] disabled:opacity-40"
                >
                  Enviar
                </button>
              </div>
              <p className="mt-1.5 px-1 text-[11px] text-[color:var(--text-tertiary)]">
                Enter envia · Shift+Enter quebra linha
              </p>
            </footer>
          </>
        )}
      </section>

      {/* Coluna 3 — detalhes do contato */}
      {active && (
        <aside className="hidden min-h-0 flex-col overflow-y-auto border-l border-[color:var(--border-default)] p-5 xl:flex">
          <div className="flex flex-col items-center text-center">
            <Avatar initials={active.contact.initials} channel={active.channel} />
            <p className="mt-3 text-sm font-semibold">{active.contact.name}</p>
            <p className="text-xs text-[color:var(--text-tertiary)]">
              {active.contact.handle}
            </p>
          </div>

          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-[color:var(--text-tertiary)]">Canal</dt>
              <dd className="font-medium">{CHANNEL_LABEL[active.channel]}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[color:var(--text-tertiary)]">Status</dt>
              <dd className="font-medium">{STATUS_LABEL[active.status]}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[color:var(--text-tertiary)]">Responsável</dt>
              <dd className="font-medium">{active.assignee?.name ?? "—"}</dd>
            </div>
          </dl>

          {active.tags.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[color:var(--text-tertiary)]">
                Etiquetas
              </p>
              <div className="flex flex-wrap gap-1.5">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[color:var(--bg-muted)] px-2.5 py-1 text-xs text-[color:var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>
      )}
      </div>
    </div>
  );
}
