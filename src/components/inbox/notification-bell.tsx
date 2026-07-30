"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRealtime } from "@/lib/supabase/realtime";

interface Notification {
  id: string;
  type: string;
  title: string;
  body: string;
  link: string | null;
  read_at: string | null;
  created_at: string;
}

export function NotificationBell() {
  const [items, setItems] = useState<Notification[]>([]);
  const [unread, setUnread] = useState(0);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const load = useCallback(async () => {
    const res = await fetch("/api/notifications", { cache: "no-store" });
    if (!res.ok) return;
    const data = await res.json();
    setItems(data.notifications ?? []);
    setUnread(data.unread ?? 0);
  }, []);

  useEffect(() => {
    load();
    const t = setInterval(load, 60000); // fallback lento
    return () => clearInterval(t);
  }, [load]);

  // Novas notificações chegam ao vivo.
  useRealtime(["notifications"], load, true);

  // Fecha ao clicar fora.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  async function markAll() {
    await fetch("/api/notifications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ all: true }),
    });
    await load();
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative grid size-8 place-items-center rounded-lg hover:bg-[color:var(--bg-subtle)]"
        aria-label="Notificações"
      >
        <span aria-hidden className="text-base">🔔</span>
        {unread > 0 && (
          <span className="absolute -right-0.5 -top-0.5 grid min-w-4 place-items-center rounded-full bg-[color:var(--error)] px-1 text-[10px] font-semibold text-white">
            {unread > 9 ? "9+" : unread}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-50 w-80 overflow-hidden rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] shadow-lg">
          <div className="flex items-center justify-between border-b border-[color:var(--border-default)] px-3 py-2">
            <span className="text-sm font-semibold">Notificações</span>
            {unread > 0 && (
              <button onClick={markAll} className="text-xs text-[color:var(--accent-text)] hover:underline">
                Marcar todas como lidas
              </button>
            )}
          </div>
          <div className="max-h-96 overflow-y-auto">
            {items.length === 0 ? (
              <p className="p-4 text-center text-sm text-[color:var(--text-tertiary)]">
                Sem notificações.
              </p>
            ) : (
              items.map((n) => (
                <a
                  key={n.id}
                  href={n.link ?? "#"}
                  className={`block border-b border-[color:var(--border-default)] px-3 py-2.5 text-sm hover:bg-[color:var(--bg-subtle)] ${
                    n.read_at ? "" : "bg-[color:var(--accent-subtle-bg)]/40"
                  }`}
                >
                  <p className="font-medium">{n.title}</p>
                  {n.body && (
                    <p className="mt-0.5 line-clamp-2 text-xs text-[color:var(--text-secondary)]">
                      {n.body}
                    </p>
                  )}
                </a>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
