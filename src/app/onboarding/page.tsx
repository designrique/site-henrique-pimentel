import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSessionContext } from "@/lib/supabase/account";
import { OnboardingForm } from "./onboarding-form";

export const metadata: Metadata = {
  title: "Criar organização — hpchat",
  robots: { index: false, follow: false },
};

export default async function OnboardingPage() {
  const ctx = await getSessionContext();

  if (ctx.mode === "demo") redirect("/atendimento");
  if (ctx.mode === "supabase" && !ctx.user) redirect("/login");
  if (ctx.mode === "supabase" && ctx.user && ctx.org) redirect("/atendimento");

  return (
    <main className="grid min-h-screen place-items-center bg-[color:var(--bg-primary)] px-4">
      <OnboardingForm />
    </main>
  );
}
