"use client";

import { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ease, stagger } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type Granularity = "chars" | "words";

/**
 * Splits text into animated spans. Reused for every "words appear
 * individually" moment on the site — the landing sequence, section
 * headers, pull quotes — instead of writing bespoke splitting logic
 * per section.
 */
export function SplitText({
  text,
  granularity = "words",
  className,
  delay = 0,
  once = true,
}: {
  text: string;
  granularity?: Granularity;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const reducedMotion = useReducedMotion();

  const pieces = useMemo(() => {
    return granularity === "chars" ? Array.from(text) : text.split(" ");
  }, [text, granularity]);

  const gap = granularity === "words" ? stagger.word : stagger.char;

  if (reducedMotion) {
    return (
      <span ref={ref} className={className}>
        {text}
      </span>
    );
  }

  return (
    <span ref={ref} className={className} aria-label={text}>
      {pieces.map((piece, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ verticalAlign: "top" }}
          aria-hidden
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration: 0.9,
              ease: ease.editorial,
              delay: delay + i * gap,
            }}
          >
            {piece === " " ? "\u00A0" : piece}
          </motion.span>
          {granularity === "words" && i < pieces.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
