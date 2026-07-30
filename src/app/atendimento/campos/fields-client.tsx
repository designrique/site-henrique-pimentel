"use client";

import { useCallback, useEffect, useState } from "react";

interface FieldDef {
  id: string;
  label: string;
  key: string;
  type: "text" | "number" | "date" | "select";
  options: string[];
}

const TYPE_LABEL: Record<string, string> = {
  text: "Texto",
  number: "Número",
  date: "Data",
  select: "Lista",
};

export function FieldsClient({ demo }: { demo: boolean }) {
  const [fields, setFields] = useState<FieldDef[]>([]);
  const [label, setLabel] = useState("");
  const [type, setType] = useState<FieldDef["type"]>("text");
  const [options, setOptions] = useState("");
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    const res = await fetch("/api/crm/fields", { cache: "no-store" });
    const data = await res.json();
    setFields(data.fields ?? []);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function addField(e: React.FormEvent) {
    e.preventDefault();
    if (!label.trim()) return;
    setError(null);
    const res = await fetch("/api/crm/fields", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        label,
        type,
        options: type === "select" ? options.split(",").map((o) => o.trim()).filter(Boolean) : [],
      }),
    });
    if (res.ok) {
      setLabel("");
      setOptions("");
      setType("text");
      await load();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error === "demo" ? "Indisponível no modo demo." : data.error || "Falha ao salvar.");
    }
  }

  async function remove(id: string) {
    await fetch(`/api/crm/fields/${id}`, { method: "DELETE" });
    await load();
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <a href="/atendimento/crm" className="text-sm text-[color:var(--accent-text)] underline">
        ← CRM
      </a>
      <h1 className="mt-3 text-2xl font-semibold">Campos personalizados</h1>
      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
        Defina campos extras para os contatos (ex.: CPF, plano, origem). Eles
        aparecem na ficha de cada cliente.
      </p>

      {demo && (
        <p className="mt-4 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 py-2 text-xs text-[color:var(--text-secondary)]">
          Modo demo: os campos ficam disponíveis com o Supabase configurado.
        </p>
      )}

      <form onSubmit={addField} className="mt-6 flex flex-wrap items-end gap-2 rounded-xl border border-[color:var(--border-default)] p-3">
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Nome do campo (ex.: CPF)"
          className="h-9 min-w-40 flex-1 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
        />
        <select value={type} onChange={(e) => setType(e.target.value as FieldDef["type"])} className="h-9 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-2 text-sm">
          <option value="text">Texto</option>
          <option value="number">Número</option>
          <option value="date">Data</option>
          <option value="select">Lista</option>
        </select>
        {type === "select" && (
          <input
            value={options}
            onChange={(e) => setOptions(e.target.value)}
            placeholder="Opções separadas por vírgula"
            className="h-9 min-w-40 flex-1 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
          />
        )}
        <button type="submit" disabled={demo} className="h-9 rounded-lg bg-[color:var(--accent-primary)] px-4 text-sm font-medium text-white hover:bg-[color:var(--accent-hover)] disabled:opacity-50">
          Adicionar
        </button>
      </form>

      {error && (
        <p className="mt-2 text-sm text-[color:var(--error)]">{error}</p>
      )}

      <ul className="mt-4 divide-y divide-[color:var(--border-default)] rounded-xl border border-[color:var(--border-default)]">
        {fields.length === 0 ? (
          <li className="p-3 text-sm text-[color:var(--text-tertiary)]">Nenhum campo ainda.</li>
        ) : (
          fields.map((f) => (
            <li key={f.id} className="flex items-center justify-between p-3">
              <div>
                <p className="text-sm font-medium">{f.label}</p>
                <p className="text-xs text-[color:var(--text-tertiary)]">
                  {TYPE_LABEL[f.type]}
                  {f.type === "select" && f.options.length ? ` · ${f.options.join(", ")}` : ""}
                </p>
              </div>
              <button onClick={() => remove(f.id)} className="text-xs text-[color:var(--text-tertiary)] hover:text-[color:var(--error)]">
                Remover
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
