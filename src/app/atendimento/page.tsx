import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSessionContext } from "@/lib/supabase/account";
import { InboxClient } from "./inbox-client";

export const metadata: Metadata = {
  title: "Atendimento — Inbox multicanal",
  description: "Central de atendimento multicanal com foco em WhatsApp.",
  robots: { index: false, follow: false },
};

export default async function AtendimentoPage() {
  const ctx = await getSessionContext();

  // Com Supabase configurado, exige sessão e organização.
  if (ctx.mode === "supabase") {
    if (!ctx.user) redirect("/login");
    if (!ctx.org) redirect("/onboarding");
  }

  const session =
    ctx.mode === "supabase" && ctx.user
      ? { userName: ctx.user.fullName, orgName: ctx.org?.name ?? "", demo: false }
      : { userName: "Demo", orgName: "Modo demonstração", demo: true };

  return <InboxClient session={session} />;
}
