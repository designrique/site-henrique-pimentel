"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";

interface FAQ {
  question: string;
  answer: string;
}

const defaultFaqs: FAQ[] = [
  {
    question: "Quanto tempo leva um projeto típico?",
    answer:
      "Diagnóstico: 7 a 14 dias. Implementação base (site + IA + acompanhamento): 2 a 6 semanas, dependendo do tamanho. Manutenção mensal opcional depois que entra no ar.",
  },
  {
    question: "Você atende remoto?",
    answer:
      "Sim — trabalho principalmente por mensagens, com calls só quando necessário. Recife é minha base, mas atendo Brasil, Portugal e países da América Latina. Reuniões marcadas só na largada do projeto e nas revisões de etapa.",
  },
  {
    question: "Atende clientes fora do Brasil?",
    answer:
      "Sim. Portugal e América Latina são prioridades — mesma língua de trabalho, fuso horário compatível. EUA e Europa por demanda específica, em inglês ou espanhol.",
  },
  {
    question: "Quais tecnologias você usa?",
    answer:
      "Site em Next.js + React (rápido e bem ranqueado no Google); back-end em Python ou Node; banco de dados Postgres + Cloudflare; IAs da OpenAI, Google e Anthropic conforme o caso. Mas eu sigo o que o cliente já tem se for sólido — não troco por trocar.",
  },
  {
    question: "Como funciona o diagnóstico gratuito?",
    answer:
      "30 minutos. Você descreve o problema, eu mostro se posso ajudar e te indico outra direção se não puder. Sem apresentação de vendas, sem proposta empurrada — só entender se faz sentido continuar.",
  },
  {
    question: "Faz manutenção contínua ou só projeto fechado?",
    answer:
      "Os dois. Projetos fechados têm escopo definido, entrega no prazo e relatório no fim. Manutenção mensal opcional depois que entra no ar (geralmente 8 a 20 horas por mês) para o sistema continuar evoluindo.",
  },
];

interface FAQsProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  faqs?: FAQ[];
}

export function FAQs({
  eyebrow = "PERGUNTAS FREQUENTES",
  title = "Perguntas que já me fizeram",
  description = "As mais comuns. Outras você manda no diagnóstico.",
  faqs = defaultFaqs,
}: FAQsProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section className="border-t border-[color:var(--border-default)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container size="narrow" className="py-20 sm:py-28">
        <div className="mb-12">
          <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--accent-primary)]">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
            {title}
          </h2>
          <p className="mt-4 text-base text-[color:var(--text-secondary)] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="divide-y divide-[color:var(--border-default)]">
          {faqs.map((faq, i) => (
            <Accordion key={i} {...faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Accordion({ question, answer }: FAQ) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 py-5 text-left focus-visible:outline-none"
      >
        <span className="text-base font-semibold text-[color:var(--text-primary)]">
          {question}
        </span>
        <span
          aria-hidden="true"
          className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--border-default)] text-[color:var(--text-secondary)] transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-5 pr-10 text-[15px] leading-relaxed text-[color:var(--text-secondary)]">
          {answer}
        </p>
      )}
    </div>
  );
}
