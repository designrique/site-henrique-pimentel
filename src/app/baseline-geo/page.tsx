import type { Metadata } from "next";
import { Suspense } from "react";
import { BaselineGeoClient } from "./baseline-geo-client";

export const metadata: Metadata = {
  title: "Análise GEO grátis — como a IA cita você?",
  description:
    "Receba um relatório técnico de como você (ou sua empresa) é citado por ChatGPT, Gemini, Perplexity, Claude e Copilot. Em até 7 dias úteis. Sem custo.",
};

export default function BaselineGeoPage() {
  return (
    <Suspense fallback={null}>
      <BaselineGeoClient />
    </Suspense>
  );
}
