"use client";

import { useCallback, useEffect, useState } from "react";

interface ChannelRow {
  id: string;
  type: string;
  name: string;
  external_id: string | null;
  is_active: boolean;
  created_at: string;
}

const TYPE_LABEL: Record<string, string> = {
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  telegram: "Telegram",
  webchat: "Web",
};

export function ChannelsClient() {
  const [channels, setChannels] = useState<ChannelRow[]>([]);
  const [demo, setDemo] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const [type, setType] = useState<"whatsapp" | "instagram" | "telegram">("whatsapp");
  const [name, setName] = useState("");
  const [externalId, setExternalId] = useState("");
  const [token, setToken] = useState("");
  const [secret, setSecret] = useState("");

  const load = useCallback(async () => {
    const res = await fetch("/api/inbox/channels", { cache: "no-store" });
    const data = await res.json();
    setChannels(data.channels ?? []);
    setDemo(Boolean(data.demo));
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function addChannel(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || saving) return;
    setSaving(true);
    setError(null);

    const res = await fetch("/api/inbox/channels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, name, externalId, token, secret }),
    });

    if (res.ok) {
      setName("");
      setExternalId("");
      setToken("");
      setSecret("");
      await load();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error === "demo" ? "Indisponível no modo demo." : data.error || "Falha ao salvar.");
    }
    setSaving(false);
  }

  async function removeChannel(id: string) {
    await fetch(`/api/inbox/channels/${id}`, { method: "DELETE" });
    await load();
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <a href="/atendimento" className="text-sm text-[color:var(--accent-text)] underline">
        ← Voltar ao inbox
      </a>
      <h1 className="mt-4 text-2xl font-semibold">Canais</h1>
      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
        Conecte um número de WhatsApp à sua organização. O <code>phone_number_id</code>{" "}
        roteia as mensagens recebidas para o seu inbox.
      </p>

      {demo && (
        <p className="mt-4 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 py-2 text-xs text-[color:var(--text-secondary)]">
          Modo demo: o cadastro de canais fica disponível com o Supabase configurado.
        </p>
      )}

      <form
        onSubmit={addChannel}
        className="mt-6 space-y-3 rounded-xl border border-[color:var(--border-default)] p-4"
      >
        <h2 className="text-sm font-semibold">Conectar canal</h2>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Tipo de canal</span>
          <div className="flex gap-2">
            {(["whatsapp", "instagram", "telegram"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium capitalize ${
                  type === t
                    ? "border-transparent bg-[color:var(--accent-primary)] text-white"
                    : "border-[color:var(--border-default)] hover:bg-[color:var(--bg-subtle)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </label>

        <Field label="Nome (identificação interna)" value={name} onChange={setName} placeholder="Ex.: Atendimento principal" />

        {type === "whatsapp" && (
          <>
            <Field label="Phone Number ID (Meta)" value={externalId} onChange={setExternalId} placeholder="Ex.: 123456789012345" />
            <Field label="Token de acesso (WhatsApp Cloud API)" value={token} onChange={setToken} type="password" placeholder="Token do app da Meta" />
          </>
        )}
        {type === "instagram" && (
          <>
            <Field label="Instagram Account ID" value={externalId} onChange={setExternalId} placeholder="Id da conta IG do negócio" />
            <Field label="Token de acesso (Graph API)" value={token} onChange={setToken} type="password" placeholder="Token do app da Meta" />
          </>
        )}
        {type === "telegram" && (
          <>
            <Field label="Token do bot (BotFather)" value={token} onChange={setToken} type="password" placeholder="123456:ABC-DEF..." />
            <Field label="Secret do webhook" value={secret} onChange={setSecret} placeholder="Uma senha que você define (roteia os recebidos)" />
          </>
        )}

        {error && (
          <p className="rounded-lg bg-[color:var(--bg-muted)] px-3 py-2 text-sm text-[color:var(--error)]">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={saving || demo}
          className="h-10 rounded-[10px] bg-[color:var(--accent-primary)] px-4 text-sm font-medium text-white transition-colors hover:bg-[color:var(--accent-hover)] disabled:opacity-50"
        >
          {saving ? "Salvando…" : "Conectar canal"}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="mb-3 text-sm font-semibold">Canais conectados</h2>
        {loading ? (
          <p className="text-sm text-[color:var(--text-tertiary)]">Carregando…</p>
        ) : channels.length === 0 ? (
          <p className="text-sm text-[color:var(--text-tertiary)]">Nenhum canal conectado ainda.</p>
        ) : (
          <ul className="divide-y divide-[color:var(--border-default)] rounded-xl border border-[color:var(--border-default)]">
            {channels.map((c) => (
              <li key={c.id} className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-[color:var(--text-tertiary)]">
                    {TYPE_LABEL[c.type] ?? c.type}
                    {c.external_id ? ` · ${c.external_id}` : ""}
                  </p>
                </div>
                <button
                  onClick={() => removeChannel(c.id)}
                  className="rounded-lg border border-[color:var(--border-default)] px-3 py-1.5 text-xs font-medium hover:bg-[color:var(--bg-subtle)]"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
      />
    </label>
  );
}
