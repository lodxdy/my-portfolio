"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MorphText } from "@/components/motion/morph-text";
import { FloatingObject } from "@/components/canvas/floating-object";
import { ease, duration as dur } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const SEQUENCE_WORDS = ["Observe.", "Think.", "Design.", "Build.", "Refine."];

export function Landing() {
  const [sequenceDone, setSequenceDone] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[var(--color-bg)]">
      {/* Floating fragments — fade in behind the typography once the word
          sequence resolves. Keep this to 3: enough to suggest "a mind full
          of work," not a cluttered mood board. */}
      <AnimatePresence>
        {sequenceDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: dur.slow, ease: ease.editorial }}
            className="absolute inset-0"
          >
            <FloatingObject
              src="/images/fragments/cms-editor.svg"
              alt=""
              width={420}
              height={280}
              depth={1}
              className="left-[8%] top-[20%] opacity-70 md:block"
            />
            <FloatingObject
              src="/images/fragments/five-poisons-sketch.svg"
              alt=""
              width={320}
              height={400}
              depth={2}
              className="right-[10%] top-[14%] hidden opacity-50 lg:block"
            />
            <FloatingObject
              src="/images/fragments/terminal.svg"
              alt=""
              width={380}
              height={240}
              depth={0}
              className="bottom-[16%] left-[14%] hidden opacity-60 md:block"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <span className="font-mono-label text-[var(--color-ink-muted)]">
          Lods — Creative Developer
        </span>

        <h1 className="font-display text-[14vw] leading-[0.95] text-[var(--color-ink)] sm:text-[10vw] md:text-[7vw]">
          {reducedMotion ? (
            "Refine."
          ) : (
            <MorphText
              words={SEQUENCE_WORDS}
              holdMs={780}
              onComplete={() => setSequenceDone(true)}
            />
          )}
          <BlinkingCursor />
        </h1>

        <AnimatePresence>
          {sequenceDone && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur.base, ease: ease.editorial, delay: 0.3 }}
              className="max-w-md text-balance text-sm text-[var(--color-ink-muted)] md:text-base"
            >
              Systems for the web. Objects for the body. Built from the same
              handful of quiet convictions.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {sequenceDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: dur.base, delay: 0.6 }}
            className="absolute bottom-10 flex flex-col items-center gap-2"
          >
            <span className="font-mono-label text-[var(--color-ink-faint)]">Scroll</span>
            <motion.div
              className="h-10 w-px bg-[var(--color-line-strong)]"
              animate={{ scaleY: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ originY: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function BlinkingCursor() {
  const reducedMotion = useReducedMotion();
  return (
    <motion.span
      className="ml-2 inline-block h-[0.8em] w-[0.05em] translate-y-1 bg-[var(--color-gold)] align-middle"
      animate={reducedMotion ? {} : { opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
    />
  );
}
