import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSessionContext } from "@/lib/supabase/account";
import { FieldsClient } from "./fields-client";

export const metadata: Metadata = {
  title: "Campos personalizados — hpchat",
  robots: { index: false, follow: false },
};

export default async function CamposPage() {
  const ctx = await getSessionContext();
  if (ctx.mode === "supabase") {
    if (!ctx.user) redirect("/login");
    if (!ctx.org) redirect("/onboarding");
  }
  return (
    <main className="min-h-screen bg-[color:var(--bg-primary)]">
      <FieldsClient demo={ctx.mode === "demo"} />
    </main>
  );
}
