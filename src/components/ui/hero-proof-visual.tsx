"use client";

import Image from "next/image";
import { motion } from "motion/react";

const float = {
  initial: { y: 0 },
  animate: { y: [-4, 4, -4] },
};

interface FloatingCardProps {
  className?: string;
  icon: React.ReactNode;
  title: string;
  metric?: string;
  metricLabel?: string;
  delay?: number;
  tone?: "master" | "vertical";
}

function FloatingCard({
  className = "",
  icon,
  title,
  metric,
  metricLabel,
  delay = 0,
  tone = "master",
}: FloatingCardProps) {
  const iconBg =
    tone === "vertical"
      ? "bg-[color:var(--vertical-medico-subtle-bg)] text-[color:var(--vertical-medico-primary)]"
      : "bg-[color:var(--accent-subtle-bg)] text-[color:var(--accent-primary)]";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`absolute z-10 inline-flex items-center gap-3 rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)]/85 backdrop-blur-md px-4 py-3 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.18)] ${className}`}
    >
      <motion.div
        variants={float}
        initial="initial"
        animate="animate"
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${iconBg}`}
        aria-hidden="true"
      >
        {icon}
      </motion.div>
      <div className="flex flex-col">
        {metric ? (
          <>
            <span className="font-mono text-base font-semibold text-[color:var(--text-primary)] leading-none">
              {metric}
            </span>
            <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[color:var(--text-tertiary)]">
              {metricLabel}
            </span>
          </>
        ) : (
          <span className="text-sm font-semibold text-[color:var(--text-primary)] leading-tight">
            {title}
          </span>
        )}
      </div>
    </motion.div>
  );
}

interface HeroProofVisualProps {
  tone?: "master" | "vertical";
}

export function HeroProofVisual({ tone = "master" }: HeroProofVisualProps) {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[36px] opacity-60 blur-2xl"
        style={{
          background:
            tone === "vertical"
              ? "radial-gradient(60% 60% at 50% 40%, var(--vertical-medico-subtle-bg) 0%, transparent 70%)"
              : "radial-gradient(60% 60% at 50% 40%, var(--accent-subtle-bg) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)]"
      >
        <Image
          src="/foto-henrique.webp"
          alt="Henrique Pimentel — Consultor de Tecnologia em IA, em Recife"
          fill
          priority
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--text-primary)]/12 via-transparent to-transparent"
        />
      </motion.div>

      <FloatingCard
        className="left-[-32px] top-12 sm:left-[-44px]"
        delay={0.25}
        tone={tone}
        icon={<TrendingUpIcon />}
        title="Menções na IA monitoradas"
        metric="5 motores"
        metricLabel="ChatGPT · Gemini · Perplexity · Claude · Copilot"
      />

      <FloatingCard
        className="right-[-24px] bottom-20 sm:right-[-36px]"
        delay={0.45}
        tone={tone}
        icon={<CodeIcon />}
        title="Experiência comprovada"
        metric="50+ empresas"
        metricLabel="Atendidas em 19+ anos de carreira"
      />
    </div>
  );
}

function TrendingUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}