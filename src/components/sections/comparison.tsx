import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const others = [
  "Apresentação de slides com estratégia genérica",
  "Foco em números que não viram dinheiro (cliques, curtidas)",
  "Comunicação lenta, equipe que muda toda hora, sem dono",
  "Suporte mínimo depois da entrega — você fica sozinho",
  "Ferramentas antigas e jargão técnico sem código entregue",
];

const ours = [
  "Sistema funcionando entregue por projeto, com prazo definido",
  "Números reais: pacientes agendados, vendas, retorno do investimento, citações pela IA",
  "Você conversa direto com quem implementa — eu mesmo",
  "Manutenção mensal opcional com relatório explicado",
  "Tecnologias atuais e seguras (mostro tudo no relatório técnico)",
];

export function Comparison() {
  return (
    <section className="bg-[color:var(--bg-subtle)] border-t border-[color:var(--border-default)]">
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--accent-primary)]">
            CHEGA DE APRESENTAÇÃO BONITA
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)]">
            Por que não contratar consultoria de PowerPoint
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[color:var(--text-secondary)] leading-relaxed">
            A diferença entre vender ideia e entregar sistema que funciona.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={0}>
            <ComparisonColumn
              title="Consultorias tradicionais"
              tone="others"
              items={others}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ComparisonColumn
              title="Henrique Pimentel"
              tone="ours"
              items={ours}
              highlight
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ComparisonColumn({
  title,
  items,
  tone,
  highlight,
}: {
  title: string;
  items: string[];
  tone: "others" | "ours";
  highlight?: boolean;
}) {
  const iconColor =
    tone === "ours"
      ? "text-[color:var(--accent-primary)]"
      : "text-[color:var(--text-tertiary)]";
  return (
    <div
      className={`rounded-2xl border p-8 ${
        highlight
          ? "border-[color:var(--accent-primary)] bg-[color:var(--bg-primary)] shadow-[0_1px_3px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.06)]"
          : "border-[color:var(--border-default)] bg-[color:var(--bg-primary)]"
      }`}
    >
      <h3
        className={`text-sm font-semibold uppercase tracking-[0.08em] mb-6 ${
          highlight
            ? "text-[color:var(--accent-primary)]"
            : "text-[color:var(--text-tertiary)]"
        }`}
      >
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span aria-hidden="true" className={`mt-1 ${iconColor}`}>
              {tone === "ours" ? (
                <CheckIcon />
              ) : (
                <XIcon />
              )}
            </span>
            <span className="text-[15px] leading-relaxed text-[color:var(--text-primary)]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
