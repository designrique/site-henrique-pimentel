import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSessionContext } from "@/lib/supabase/account";
import { SettingsClient } from "./settings-client";

export const metadata: Metadata = {
  title: "Configurações — hpchat",
  robots: { index: false, follow: false },
};

export default async function ConfiguracoesPage() {
  const ctx = await getSessionContext();
  if (ctx.mode === "supabase") {
    if (!ctx.user) redirect("/login");
    if (!ctx.org) redirect("/onboarding");
  }
  return (
    <main className="min-h-screen bg-[color:var(--bg-primary)]">
      <SettingsClient demo={ctx.mode === "demo"} />
    </main>
  );
}
