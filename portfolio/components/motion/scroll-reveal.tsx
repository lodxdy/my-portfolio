"use client";

import { useRef } from "react";
import { motion, useInView, type TargetAndTransition } from "framer-motion";
import { ease, duration as dur } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/cn";

type Variant = "mask" | "blur" | "slide-up" | "slide-left" | "fade";

const variants: Record<
  Variant,
  { hidden: TargetAndTransition; visible: TargetAndTransition; clip?: boolean }
> = {
  mask: {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    visible: { clipPath: "inset(0 0 0% 0)" },
    clip: true,
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(14px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

type Tag = "div" | "p" | "span" | "h2" | "h3" | "section";

// Fixed map instead of dynamic `motion[tag]` indexing — keeps this fully
// typed and avoids fighting Framer Motion's generic component factory.
const MOTION_TAGS = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  h2: motion.h2,
  h3: motion.h3,
  section: motion.section,
} satisfies Record<Tag, unknown>;

export function ScrollReveal({
  children,
  variant = "slide-up",
  delay = 0,
  duration = dur.base,
  once = true,
  as = "div",
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: Tag;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const reducedMotion = useReducedMotion();
  const config = variants[variant];
  const MotionTag = MOTION_TAGS[as] as typeof motion.div;

  if (reducedMotion) {
    const StaticTag = as;
    return (
      <StaticTag ref={ref} className={className}>
        {children}
      </StaticTag>
    );
  }

  return (
    <MotionTag
      ref={ref}
      initial={config.hidden}
      animate={inView ? config.visible : config.hidden}
      transition={{ duration, delay, ease: ease.editorial }}
      className={cn(config.clip && "overflow-hidden", className)}
    >
      {children}
    </MotionTag>
  );
}
