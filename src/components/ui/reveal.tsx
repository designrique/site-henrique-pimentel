"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import type { ReactNode } from "react";

const defaultSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 1,
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

interface RevealProps extends Omit<HTMLMotionProps<"div">, "variants" | "initial" | "animate"> {
  children: ReactNode;
  delay?: number;
  /** When true, only animates once when entering viewport */
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  once = true,
  className = "",
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -10% 0px" }}
      transition={{ ...defaultSpring, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode[];
  step?: number;
  className?: string;
  itemClassName?: string;
}

/**
 * Stagger reveal: each child animates with a sequential delay.
 * Use for lists of cards, stats, features.
 */
export function Stagger({
  children,
  step = 0.07,
  className = "",
  itemClassName = "",
}: StaggerProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} delay={i * step} className={itemClassName}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
