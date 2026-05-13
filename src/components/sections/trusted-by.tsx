"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";

interface Brand {
  name: string;
  /** Caminho de logo em /public/logos/. Quando ausente, usa wordmark tipográfico. */
  logoSrc?: string;
  /** Altura ideal do logo no ticker (px). Use para balancear tamanhos diferentes. */
  logoHeight?: number;
  /** Largura aproximada do container do logo (px). Default 140. */
  logoWidth?: number;
}

const defaultBrands: Brand[] = [
  {
    name: "UPE",
    logoSrc: "/logos/upe.webp",
    logoHeight: 44,
    logoWidth: 62,
  },
  {
    name: "Hospital de Ortopedia",
    logoSrc: "/logos/hospital-ortopedia.png",
    logoHeight: 36,
    logoWidth: 180,
  },
  {
    name: "M-Tórax",
    logoSrc: "/logos/mtorax-logo.jpg",
    logoHeight: 44,
    logoWidth: 44,
  },
  { name: "SERGERE", logoSrc: "/logos/sergere.png", logoHeight: 40 },
  { name: "Loterias Encruzilhada", logoSrc: "/logos/lotenc.png", logoHeight: 36 },
  { name: "Serwix", logoSrc: "/logos/serwix.png", logoHeight: 40 },
  { name: "MAPC", logoSrc: "/logos/mapc.png", logoHeight: 32 },
  {
    name: "Dra. Fátima Knappe",
    logoSrc: "/logos/fatima-knappe.png",
    logoHeight: 36,
    logoWidth: 170,
  },
  {
    name: "Instituto Ariana Borges",
    logoSrc: "/logos/ariana-borges.png",
    logoHeight: 28,
    logoWidth: 180,
  },
];

interface TrustedByProps {
  eyebrow?: string;
  brands?: Brand[];
}

export function TrustedBy({
  eyebrow = "Empresas e Profissionais que confiaram em Henrique Pimentel",
  brands = defaultBrands,
}: TrustedByProps) {
  const loop = [...brands, ...brands];

  return (
    <section className="bg-[color:var(--bg-subtle)] border-t border-b border-[color:var(--border-default)]">
      <Container className="py-14 sm:py-16">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-tertiary)]">
          {eyebrow}
        </p>

        <div
          className="mt-8 relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <motion.div
            className="flex items-center gap-12 sm:gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {loop.map((brand, i) => (
              <BrandItem key={i} brand={brand} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function BrandItem({ brand }: { brand: Brand }) {
  const height = brand.logoHeight ?? 36;
  const width = brand.logoWidth ?? 140;

  if (brand.logoSrc) {
    return (
      <span
        className="inline-flex items-center shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        style={{ height }}
        title={brand.name}
      >
        <Image
          src={brand.logoSrc}
          alt={brand.name}
          width={width}
          height={height}
          className="object-contain object-center"
          style={{ height, width: "auto", maxWidth: width }}
          sizes={`${width}px`}
        />
      </span>
    );
  }

  // Fallback wordmark tipográfico
  return (
    <span
      className="inline-flex items-center gap-3 shrink-0"
      style={{ height }}
    >
      <span
        aria-hidden="true"
        className="inline-block h-5 w-px bg-[color:var(--text-tertiary)] opacity-40"
      />
      <span className="text-base sm:text-lg font-medium tracking-[-0.01em] text-[color:var(--text-secondary)]">
        {brand.name}
      </span>
    </span>
  );
}
