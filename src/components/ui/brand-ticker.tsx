"use client";

import { motion } from "motion/react";

interface TickerItem {
  label: string;
  hint?: string;
}

const defaultItems: TickerItem[] = [
  { label: "Next.js 16" },
  { label: "Cloudflare" },
  { label: "n8n" },
  { label: "OpenAI · Gemini · Claude" },
  { label: "Postgres" },
  { label: "Schema.org" },
  { label: "Tailwind v4" },
  { label: "Docker Swarm" },
];

interface BrandTickerProps {
  eyebrow?: string;
  items?: TickerItem[];
}

export function BrandTicker({
  eyebrow = "Tecnologias que uso em produção",
  items = defaultItems,
}: BrandTickerProps) {
  // Duplicate items for seamless loop
  const loop = [...items, ...items];

  return (
    <div className="relative">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[color:var(--text-tertiary)]">
        {eyebrow}
      </p>
      <div
        aria-hidden="true"
        className="mt-3 relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {loop.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 font-mono text-sm font-medium text-[color:var(--text-secondary)]"
            >
              <span
                aria-hidden="true"
                className="inline-block h-1 w-1 rounded-full bg-[color:var(--text-tertiary)]"
              />
              {item.label}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
