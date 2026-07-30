import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSessionContext } from "@/lib/supabase/account";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Entrar — hpchat",
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  const ctx = await getSessionContext();

  // Já autenticado: manda para o app (ou onboarding se sem organização).
  if (ctx.mode === "supabase" && ctx.user) {
    redirect(ctx.org ? "/atendimento" : "/onboarding");
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[color:var(--bg-primary)] px-4">
      <LoginForm demo={ctx.mode === "demo"} />
    </main>
  );
}
