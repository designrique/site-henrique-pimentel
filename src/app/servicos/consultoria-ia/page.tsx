import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Hero } from "@/components/sections/hero";
import { CtaBlock } from "@/components/sections/cta-block";

export const metadata: Metadata = {
  title: "Consultoria de IA para empresas — Henrique Pimentel",
  description:
    "Consultoria de inteligência artificial que entrega resultado mensurável. Diagnóstico, implementação e acompanhamento de sistemas de IA: automação, atendentes, GEO. Recife, Brasil, Portugal.",
  alternates: { canonical: "https://henriquepimentel.com.br/servicos/consultoria-ia/" },
  openGraph: {
    title: "Consultoria de IA para empresas — Henrique Pimentel",
    description:
      "Sistemas de IA que entregam resultado mensurável. Diagnóstico, implementação e acompanhamento.",
    url: "https://henriquepimentel.com.br/servicos/consultoria-ia/",
  },
};

const services = [
  {
    num: "01",
    title: "Atendente de IA no WhatsApp",
    description:
      "Atendente inteligente que responde 24h, qualifica leads, agenda consultas e envia lembretes. Reduz faltas e libera a equipe para tarefas que precisam de humano.",
  },
  {
    num: "02",
    title: "Captação automática com funil integrado",
    description:
      "Site, atendente de IA e anúncios trabalhando juntos. O lead chega, é qualificado, agendado e acompanhado sem trabalho manual.",
  },
  {
    num: "03",
    title: "Presença em IAs (GEO)",
    description:
      "Fazer ChatGPT, Gemini e Perplexity citarem seu nome quando alguém busca seu serviço. Marcação técnica, conteúdo estruturado e acompanhamento mensal.",
  },
  {
    num: "04",
    title: "Site que é ativo de captação",
    description:
      "Site que aparece no Google, é reconhecido pelas IAs e converte visitantes em agendamentos. Não um brochure online — uma ferramenta de captação.",
  },
];

const process = [
  { step: "01", title: "Diagnóstico", duration: "30 min · gratuito", text: "Entendo seu contexto, mostro se IA resolve seu problema e para onde ir se não resolver." },
  { step: "02", title: "Auditoria técnica", duration: "7 a 14 dias", text: "Relatório com diagnóstico mensurável: onde você está, onde precisa chegar, o que falta." },
  { step: "03", title: "Implantação", duration: "2 a 6 semanas", text: "Sistema entregue funcionando, com painel de acompanhamento e documentação em português." },
  { step: "04", title: "Acompanhamento", duration: "Mensal opcional", text: "Relatório de evolução + ajustes técnicos. Sem fidelidade, sem letra miúda." },
];

export default function ConsultoriaIaPage() {
  return (
    <>
      <Hero
        eyebrow="CONSULTORIA DE IA · RESULTADO MENSURÁVEL · DESDE 2007"
        preH1="Consultoria de IA que entrega "
        serifEmphasis="resultado mensurável"
        postH1=", não apresentação bonita."
        subtitle="Eu implemento sistemas de inteligência artificial que reduzem custo, aumentam captação e posicionam sua empresa nas buscas generativas (ChatGPT, Gemini, Perplexity). Diagnóstico, implementação e acompanhamento — com números, não promessa."
        primaryCta={{ label: "Agendar diagnóstico gratuito →", href: "/contato" }}
        ghostCta={{ label: "Solicitar análise GEO grátis", href: "/baseline-geo" }}
        proofLine="19+ anos em tecnologia · 50+ empresas · Recife, Brasil, Portugal e LATAM"
      />

      <section className="border-t border-[color:var(--border-default)]">
        <Container className="py-20 sm:py-24">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--accent-primary)]">
              O QUE EU IMPLEMENTO
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
              IA aplicada ao problema real
            </h2>
            <p className="mt-4 text-lg text-[color:var(--text-secondary)] leading-relaxed">
              Não vendo IA genérica. Cada implementação resolve um problema
              específico do seu negócio — com diagnóstico inicial, números
              acompanhados e relatório explicado.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.num}
                className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-6"
              >
                <span className="font-mono text-xs font-medium text-[color:var(--accent-primary)]">
                  {s.num}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[color:var(--text-primary)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--bg-subtle)] border-t border-[color:var(--border-default)]">
        <Container className="py-20 sm:py-24">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--accent-primary)]">
              COMO FUNCIONA
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
              Processo transparente
            </h2>
          </div>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <li
                key={p.step}
                className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-6"
              >
                <p className="font-mono text-xs text-[color:var(--accent-primary)]">
                  {p.step}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[color:var(--text-primary)]">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-[color:var(--text-tertiary)]">
                  {p.duration}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                  {p.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border-default)]">
        <Container size="narrow" className="py-20 sm:py-24">
          <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--accent-primary)]">
            DIFERENCIAL
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
            O que separa uma consultoria de IA de uma venda de curso
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--text-tertiary)]">
                Consultoria de curso
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[color:var(--text-secondary)]">
                <li>Workshop de IA generativa para sua equipe</li>
                <li>Framework teórico de adoção</li>
                <li>Checklist de oportunidades</li>
                <li>Você implementa sozinho depois</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--accent-primary)]">
                Consultoria que entrega
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[color:var(--text-primary)]">
                <li>Sistema no ar, funcionando</li>
                <li>Diagnóstico com números antes de qualquer código</li>
                <li>Painel de acompanhamento que você entende</li>
                <li>Relatório mensal em português, não dashboard em branco</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaBlock
        title="Tira a IA do slide?"
        subtitle="Diagnóstico de 30 minutos, gratuito. Eu entendo seu problema, mostro se posso ajudar, te indico outra direção se não puder."
        primary={{ label: "Agendar diagnóstico →", href: "/contato" }}
        secondary={{ label: "Ver cases com números →", href: "/cases" }}
      />
    </>
  );
}
