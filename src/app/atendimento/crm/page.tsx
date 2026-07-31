import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSessionContext } from "@/lib/supabase/account";
import { KanbanClient } from "./kanban-client";

export const metadata: Metadata = {
  title: "CRM — hpchat",
  robots: { index: false, follow: false },
};

export default async function CrmPage() {
  const ctx = await getSessionContext();
  if (ctx.mode === "supabase") {
    if (!ctx.user) redirect("/login");
    if (!ctx.org) redirect("/onboarding");
  }
  return (
    <main className="min-h-screen bg-[color:var(--bg-primary)]">
      <KanbanClient demo={ctx.mode === "demo"} />
    </main>
  );
}
