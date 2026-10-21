"use client";

import { useEffect, useRef, useState } from "react";

type FieldErrors = Record<string, string>;

function messageFor(status: number, code: string | undefined): string {
  if (status === 429) {
    return "Muitas tentativas em pouco tempo. Espere um minuto e tente de novo.";
  }
  if (status === 400) return "Confira os campos destacados e envie novamente.";
  if (status === 409) return "Já estamos processando seu envio. Aguarde um instante.";
  if (status === 502) {
    return "Não consegui registrar seus dados agora. Nada foi perdido. Tente novamente em instantes.";
  }
  if (status === 503) return "O recurso está indisponivel no momento. Tente mais tarde.";
  if (code === "payload_too_large") return "O envio ficou grande demais. Revise os campos.";
  return "Não foi possível liberar o guia agora. Tente novamente.";
}

export function CaptureForm() {
  const statusRef = useRef<HTMLDivElement>(null);
  const inFlight = useRef(false); // guarda sincrona: estado do React não atualiza no mesmo tick
  const [pending, setPending] = useState(false);
  const [granted, setGranted] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"sent" | "failed" | "not_configured">("not_configured");
  const [message, setMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // Move o foco para o alerta quando ele aparece (o elemento só existe depois do render).
  useEffect(() => {
    if (message || granted) statusRef.current?.focus();
  }, [message, granted]);

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
        email?: "sent" | "failed" | "not_configured";
        errors?: FieldErrors;
      };

      if (res.ok && data.ok) {
        setEmailStatus(data.email ?? "not_configured");
        setGranted(true);
        return;
      }

      if (data.errors) setFieldErrors(data.errors);
      setMessage(messageFor(res.status, data.error));
    } catch {
      setMessage("Não consegui enviar agora. Confira sua conexão e tente de novo.");
    } finally {
      inFlight.current = false;
      setPending(false);
    }
  }

  if (granted) {
    return (
      <div ref={statusRef} role="status" tabIndex={-1} className="rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-[color:var(--text-primary)]">Seu guia está pronto.</h2>
        <p className="mt-2 text-sm text-[color:var(--text-secondary)]">
          {emailStatus === "sent"
            ? "Também enviei o link de acesso para o seu e-mail. Ele vale por 3 dias."
            : "Não consegui enviar o e-mail agora. Use os botões abaixo ou tente novamente mais tarde."}
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a href="/guia-claude-design/conteudo/" className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[color:var(--border-default)] px-5 font-medium text-[color:var(--text-primary)] hover:underline">Ler online</a>
          <a href="/guia-claude-design/baixar/" className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[color:var(--accent-primary)] px-5 font-medium text-[color:var(--accent-primary)] hover:underline">Baixar PDF</a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-busy={pending}
      className="guide-capture rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] p-6 sm:p-8 space-y-5"
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
          className="rounded-xl border border-[color:var(--guide-error)] bg-[color:var(--bg-primary)] px-4 py-3 text-sm text-[color:var(--guide-error)]"
        >
          {message}
        </div>
      )}

      <Field id="name" label="Nome" required error={fieldErrors.name}>
        <input
          id="name"
          name="name"
          type="text"
          maxLength={80}
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
          maxLength={254}
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
          inputMode="tel"
          maxLength={24}
          required
          autoComplete="tel"
          placeholder="(81) 99999-8888"
          aria-invalid={fieldErrors.whatsapp ? true : undefined}
          aria-describedby={fieldErrors.whatsapp ? "whatsapp-error" : undefined}
          className="input"
        />
      </Field>

      <div className="space-y-3 pt-1">
        <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm text-[color:var(--text-primary)]">
          <input type="checkbox" name="consent" required aria-invalid={fieldErrors.consent ? true : undefined} aria-describedby={fieldErrors.consent ? "consent-error" : undefined} className="mt-1 h-4 w-4" />
          <span>
            Aceito que meus dados sejam usados para me enviar o guia e para contato sobre este
            assunto.
            <span className="text-[color:var(--accent-primary)] ml-1">*</span>
          </span>
        </label>
        {fieldErrors.consent && (
          <p id="consent-error" role="alert" className="text-xs text-[color:var(--guide-error)]">
            {fieldErrors.consent}
          </p>
        )}

        <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm text-[color:var(--text-secondary)]">
          <input type="checkbox" name="marketing" className="mt-1 h-4 w-4" />
          <span>Quero receber novidades e conteúdos por e-mail (opcional, separado do guia).</span>
        </label>
      </div>

      <p className="text-xs text-[color:var(--text-secondary)]">
        Seus dados ficam comigo. Sem venda da sua lista para terceiros.
      </p>

      <button
        type="submit"
        disabled={pending}
        className="w-full h-12 cursor-pointer rounded-[10px] bg-[color:var(--guide-action)] text-white font-medium hover:bg-[color:var(--accent-hover)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2"
      >
        {pending ? "Liberando..." : "Liberar o guia"}
      </button>

      <style>{`
        .guide-capture { --guide-error: var(--error); --guide-action: var(--accent-primary); }
        .dark .guide-capture { --guide-error: #F87171; --guide-action: #2563EB; }
        .input {
          display: block;
          width: 100%;
          height: 44px;
          padding: 0 12px;
          border-radius: 10px;
          border: 1px solid var(--border-default);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 16px;
          font-family: inherit;
        }
        .input::placeholder { color: var(--text-secondary); }
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
        <p id={`${id}-error`} role="alert" className="text-xs text-[color:var(--guide-error)]">
          {error}
        </p>
      )}
    </div>
  );
}
