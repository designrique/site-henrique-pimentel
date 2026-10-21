"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type FieldErrors = Record<string, string>;

function messageFor(status: number, code: string | undefined): string {
  if (status === 429) {
    return "Muitas tentativas em pouco tempo. Espere um minuto e tente de novo.";
  }
  if (status === 400) return "Confira os campos destacados e envie novamente.";
  if (status === 409) return "Ja estamos processando seu envio. Aguarde um instante.";
  if (status === 502) {
    return "Nao consegui registrar seus dados agora. Nada foi perdido. Tente novamente em instantes.";
  }
  if (status === 503) return "O recurso esta indisponivel no momento. Tente mais tarde.";
  if (code === "payload_too_large") return "O envio ficou grande demais. Revise os campos.";
  return "Nao foi possivel liberar o guia agora. Tente novamente.";
}

export function CaptureForm() {
  const router = useRouter();
  const statusRef = useRef<HTMLDivElement>(null);
  const inFlight = useRef(false); // guarda sincrona: estado do React nao atualiza no mesmo tick
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // Move o foco para o alerta quando ele aparece (o elemento so existe depois do render).
  useEffect(() => {
    if (message) statusRef.current?.focus();
  }, [message]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return; // guarda contra duplo clique / duplo enter
    inFlight.current = true;
    const form = event.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      whatsapp: String(fd.get("whatsapp") ?? ""),
      consent: fd.get("consent") === "on",
      marketing: fd.get("marketing") === "on",
    };

    setPending(true);
    setMessage(null);
    setFieldErrors({});

    try {
      const res = await fetch("/api/guia/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: FieldErrors;
      };

      if (res.ok && data.ok) {
        router.push("/guia-claude-design/conteudo/");
        return; // mantem o estado pendente ate a navegacao
      }

      if (data.errors) setFieldErrors(data.errors);
      setMessage(messageFor(res.status, data.error));
    } catch {
      setMessage("Nao consegui enviar agora. Confira sua conexao e tente de novo.");
    } finally {
      inFlight.current = false;
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-busy={pending}
      className="rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] p-6 sm:p-8 space-y-5"
    >
      <div>
        <h2 className="text-xl font-semibold text-[color:var(--text-primary)]">
          Liberar o guia
        </h2>
        <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
          Preencha para receber o acesso ao guia completo.
        </p>
      </div>

      {message && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          aria-live="assertive"
          className="rounded-xl border border-[color:var(--error)] bg-[color:var(--bg-primary)] px-4 py-3 text-sm text-[color:var(--error)]"
        >
          {message}
        </div>
      )}

      <Field id="name" label="Nome" required error={fieldErrors.name}>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-invalid={fieldErrors.name ? true : undefined}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          className="input"
        />
      </Field>

      <Field id="email" label="E-mail" required error={fieldErrors.email}>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={fieldErrors.email ? true : undefined}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          className="input"
        />
      </Field>

      <Field id="whatsapp" label="WhatsApp (com DDD)" required error={fieldErrors.whatsapp}>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(81) 99999-8888"
          aria-invalid={fieldErrors.whatsapp ? true : undefined}
          aria-describedby={fieldErrors.whatsapp ? "whatsapp-error" : undefined}
          className="input"
        />
      </Field>

      <div className="space-y-3 pt-1">
        <label className="flex items-start gap-3 text-sm text-[color:var(--text-primary)]">
          <input type="checkbox" name="consent" required className="mt-1 h-4 w-4" />
          <span>
            Aceito que meus dados sejam usados para me enviar o guia e para contato sobre este
            assunto.
            <span className="text-[color:var(--accent-primary)] ml-1">*</span>
          </span>
        </label>
        {fieldErrors.consent && (
          <p id="consent-error" role="alert" className="text-xs text-[color:var(--error)]">
            {fieldErrors.consent}
          </p>
        )}

        <label className="flex items-start gap-3 text-sm text-[color:var(--text-secondary)]">
          <input type="checkbox" name="marketing" className="mt-1 h-4 w-4" />
          <span>Quero receber novidades e conteudos por e-mail (opcional, separado do guia).</span>
        </label>
      </div>

      <p className="text-xs text-[color:var(--text-tertiary)]">
        Seus dados ficam comigo. Sem venda da sua lista para terceiros.
      </p>

      <button
        type="submit"
        disabled={pending}
        className="w-full h-12 rounded-[10px] bg-[color:var(--accent-primary)] text-white font-medium hover:bg-[color:var(--accent-hover)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2"
      >
        {pending ? "Liberando..." : "Liberar o guia"}
      </button>

      <style>{`
        .input {
          display: block;
          width: 100%;
          height: 44px;
          padding: 0 12px;
          border-radius: 10px;
          border: 1px solid var(--border-default);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 15px;
          font-family: inherit;
        }
        .input::placeholder { color: var(--text-tertiary); }
        .input:focus-visible {
          outline: 2px solid var(--accent-primary);
          outline-offset: 1px;
        }
      `}</style>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-[color:var(--text-primary)]">
        {label}
        {required && <span className="text-[color:var(--accent-primary)] ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-[color:var(--error)]">
          {error}
        </p>
      )}
    </div>
  );
}
