"use client";

import { useActionState } from "react";
import { createOrganization, type OnboardingState } from "./actions";

const initial: OnboardingState = {};

export function OnboardingForm() {
  const [state, formAction, pending] = useActionState(createOrganization, initial);

  return (
    <form action={formAction} className="w-full max-w-sm space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Crie sua organização</h1>
        <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
          É o espaço da sua empresa no hpchat. Você poderá convidar sua equipe depois.
        </p>
      </div>

      <label className="block">
        <span className="mb-1 block text-sm font-medium">Nome da organização</span>
        <input
          name="name"
          type="text"
          required
          placeholder="Ex.: Clínica Alfa"
          className="h-11 w-full rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] px-3 text-sm outline-none focus:border-[color:var(--accent-primary)]"
        />
      </label>

      {state.error && (
        <p className="rounded-lg bg-[color:var(--bg-muted)] px-3 py-2 text-sm text-[color:var(--error)]">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="h-11 w-full rounded-[10px] bg-[color:var(--accent-primary)] text-sm font-medium text-white transition-colors hover:bg-[color:var(--accent-hover)] disabled:opacity-50"
      >
        {pending ? "Criando…" : "Criar organização"}
      </button>
    </form>
  );
}
