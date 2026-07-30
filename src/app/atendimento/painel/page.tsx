import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSessionContext } from "@/lib/supabase/account";
import { DashboardClient } from "./dashboard-client";

export const metadata: Metadata = {
  title: "Painel — hpchat",
  robots: { index: false, follow: false },
};

export default async function PainelPage() {
  const ctx = await getSessionContext();
  if (ctx.mode === "supabase") {
    if (!ctx.user) redirect("/login");
    if (!ctx.org) redirect("/onboarding");
  }
  return (
    <main className="min-h-screen bg-[color:var(--bg-primary)]">
      <DashboardClient demo={ctx.mode === "demo"} />
    </main>
  );
}
