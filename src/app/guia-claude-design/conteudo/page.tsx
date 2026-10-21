import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Container } from "@/components/ui/container";
import { SESSION_COOKIE, sessionIsValid } from "@/lib/lead-guide/gate";
import { GuideContent } from "@/content/guides/claude-design";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Guia do Claude Design (acesso liberado)",
  robots: { index: false, follow: false, nocache: true },
};

export default async function GuiaConteudoPage() {
  const store = await cookies();
  const raw = store.get(SESSION_COOKIE)?.value;
  if (!sessionIsValid(raw, process.env.GUIDE_SESSION_SECRET)) {
    redirect("/guia-claude-design/");
  }

  return (
    <Container className="py-16 sm:py-20">
      <header className="mx-auto max-w-2xl">
        <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--accent-primary)]">
          GUIA COMPLETO · ACESSO LIBERADO
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-[color:var(--text-primary)] leading-tight">
          Automatize a geracao de postagens com Claude Design
        </h1>
      </header>
      <GuideContent />
    </Container>
  );
}
