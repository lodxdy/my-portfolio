"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "./cursor-context";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/cn";

export function MagneticButton({
  children,
  onClick,
  href,
  cursorLabel,
  className,
  strength = 0.4,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  cursorLabel?: string;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const { setLabel } = useCursor();
  const reducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setLabel(null);
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref as never}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => cursorLabel && setLabel(cursorLabel)}
      style={{ x: springX, y: springY }}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-[var(--color-line-strong)] px-8 py-4 text-sm text-[var(--color-ink)] transition-colors duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
