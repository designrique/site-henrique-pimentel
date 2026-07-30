import type { Metadata } from "next";
import { InboxClient } from "./inbox-client";

export const metadata: Metadata = {
  title: "Atendimento — Inbox multicanal",
  description: "Central de atendimento multicanal com foco em WhatsApp.",
  robots: { index: false, follow: false },
};

export default function AtendimentoPage() {
  return <InboxClient />;
}
