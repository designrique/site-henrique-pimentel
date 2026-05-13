import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

interface Service {
  title: string;
  description: string;
  badge?: string;
  badgeHref?: string;
  tone?: "vertical";
}

const defaultServices: Service[] = [
  {
    title: "Aparecer quando a IA é perguntada (GEO)",
    description:
      "Seu nome citado quando paciente, cliente ou leitor pergunta no ChatGPT, Gemini ou Perplexity. Implementação técnica e acompanhamento mensal em 5 plataformas de IA.",
    badge: "MedCitado",
    badgeHref: "/medcitado",
    tone: "vertical",
  },
  {
    title: "Atendimento automático 24h por dia",
    description:
      "Atendente inteligente no WhatsApp e no site que qualifica o contato, marca consulta e responde fora do horário. Reduz faltas de pacientes e libera sua secretária para o que é importante.",
  },
  {
    title: "Captação automática de clientes",
    description:
      "Site, cadastro de clientes, atendente de IA e anúncios trabalhando juntos. O contato chega, é qualificado, agendado e acompanhado — sem você precisar fazer manualmente.",
  },
  {
    title: "Sites profissionais com resultado",
    description:
      "Sites que aparecem no Google, são reconhecidos pelas IAs e mostram um painel onde você acompanha de perto o que está funcionando.",
  },
  {
    title: "Implementação de IA em produtos",
    description:
      "Integração com IAs (OpenAI, Gemini, Claude) e fluxos de automação que rodam de verdade — não ficam só no teste.",
  },
  {
    title: "Consultoria técnica pontual",
    description:
      "Avaliação das ferramentas que você usa, plano de ação e roteiro de implementação. Você ou sua equipe executam — eu acompanho. Por hora ou pacote fechado.",
  },
];

interface ServicesProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  services?: Service[];
}

export function Services({
  eyebrow = "ÁREAS QUE ATUO · IA QUE VIRA RECEITA",
  title = "O que eu faço por você",
  description = "Áreas onde a IA vira vantagem concreta. Cada projeto começa com um diagnóstico, tem entrega definida e relatório mensal.",
  services = defaultServices,
}: ServicesProps) {
  return (
    <section className="border-t border-[color:var(--border-default)]">
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--accent-primary)]">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[color:var(--text-secondary)] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({ title, description, badge, badgeHref, tone }: Service) {
  const isMedico = tone === "vertical";
  return (
    <div className="card-hover group relative rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-6">
      {badge && badgeHref && (
        <Link
          href={badgeHref}
          className={`inline-flex items-center mb-4 rounded-md px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider transition-opacity hover:opacity-80 ${
            isMedico
              ? "bg-[color:var(--vertical-medico-subtle-bg)] text-[color:var(--vertical-medico-text)]"
              : "bg-[color:var(--accent-subtle-bg)] text-[color:var(--accent-text)]"
          }`}
        >
          {badge}
          <span className="ml-1">→</span>
        </Link>
      )}
      <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
        {description}
      </p>
    </div>
  );
}
