"use client";

import { useActionState, useState } from "react";
import { signIn, signUp, type AuthState } from "./actions";

const initial: AuthState = {};

export function LoginForm({ demo }: { demo: boolean }) {
  const [mode, setMode] = useState<"in" | "up">("in");
  const action = mode === "in" ? signIn : signUp;
  const [state, formAction, pending] = useActionState(action, initial);

  return (
    <div className="w-full max-w-sm">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold">hpchat</h1>
        <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
          {mode === "in" ? "Entre na sua conta" : "Crie sua conta"}
        </p>
      </div>

      {demo && (
        <p className="mb-4 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 py-2 text-xs text-[color:var(--text-secondary)]">
          Ambiente em <strong>modo demo</strong> (Supabase não configurado). O login
          real fica disponível ao definir as variáveis do Supabase. Você pode acessar
          o inbox de exemplo em <a className="text-[color:var(--accent-text)] underline" href="/atendimento">/atendimento</a>.
        </p>
      )}

      <form action={formAction} className="space-y-3">
        {mode === "up" && (
          <Field
            label="Nome completo"
            name="full_name"
            type="text"
            autoComplete="name"
            placeholder="Seu nome"
          />
        )}
        <Field
          label="E-mail"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="voce@empresa.com"
          required
        />
        <Field
          label="Senha"
          name="password"
          type="password"
          autoComplete={mode === "in" ? "current-password" : "new-password"}
          placeholder="••••••••"
          required
        />

        {state.error && (
          <p className="rounded-lg bg-[color:var(--bg-muted)] px-3 py-2 text-sm text-[color:var(--error)]">
            {state.error}
          </p>
        )}
        {state.message && (
          <p className="rounded-lg bg-[color:var(--bg-muted)] px-3 py-2 text-sm text-[color:var(--success)]">
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="h-11 w-full rounded-[10px] bg-[color:var(--accent-primary)] text-sm font-medium text-white transition-colors hover:bg-[color:var(--accent-hover)] disabled:opacity-50"
        >
          {pending ? "Aguarde…" : mode === "in" ? "Entrar" : "Criar conta"}
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-[color:var(--text-secondary)]">
        {mode === "in" ? "Ainda não tem conta?" : "Já tem conta?"}{" "}
        <button
          type="button"
          onClick={() => setMode(mode === "in" ? "up" : "in")}
          className="font-medium text-[color:var(--accent-text)] underline"
        >
          {mode === "in" ? "Cadastre-se" : "Entrar"}
        </button>
      </p>
    </div>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium">{label}</span>
      <input
        {...props}
        className="h-11 w-full rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
      />
    </label>
  );
}
