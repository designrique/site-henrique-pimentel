import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSessionContext } from "@/lib/supabase/account";
import { ClientProfile } from "./client-profile";

export const metadata: Metadata = {
  title: "Cliente — hpchat",
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ClientePage({ params }: Props) {
  const { id } = await params;
  const ctx = await getSessionContext();
  if (ctx.mode === "supabase") {
    if (!ctx.user) redirect("/login");
    if (!ctx.org) redirect("/onboarding");
  }
  return (
    <main className="min-h-screen bg-[color:var(--bg-primary)]">
      <ClientProfile contactId={id} demo={ctx.mode === "demo"} />
    </main>
  );
}
