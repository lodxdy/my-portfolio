"use client";

import { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Word-cycling display used by the Landing hero. Advances through `words`
 * on a timer, scrambling letters briefly before settling on the next word.
 * Calls onComplete once every word has been shown, so the caller (Landing)
 * can trigger the next beat of the sequence.
 */
export function MorphText({
  words,
  holdMs = 900,
  className,
  onComplete,
}: {
  words: string[];
  holdMs?: number;
  className?: string;
  onComplete?: () => void;
}) {
  const [display, setDisplay] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const doneRef = useRef(false);

  // Reduced motion: skip cycling entirely and derive the final word
  // directly in render — no setState needed for this path.
  const finalWord = words[words.length - 1];

  useEffect(() => {
    if (reducedMotion) {
      if (!doneRef.current) {
        doneRef.current = true;
        onComplete?.();
      }
      return;
    }

    if (index >= words.length) {
      if (!doneRef.current) {
        doneRef.current = true;
        onComplete?.();
      }
      return;
    }

    const target = words[index];
    let frame = 0;
    const scrambleFrames = 8;
    const interval = setInterval(() => {
      frame++;
      if (frame >= scrambleFrames) {
        setDisplay(target);
        clearInterval(interval);
      } else {
        const revealCount = Math.floor((frame / scrambleFrames) * target.length);
        const scrambled = target
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < revealCount) return ch;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join("");
        setDisplay(scrambled);
      }
    }, 28);

    const advance = setTimeout(() => {
      setIndex((i) => i + 1);
    }, holdMs);

    return () => {
      clearInterval(interval);
      clearTimeout(advance);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, reducedMotion]);

  return <span className={className}>{reducedMotion ? finalWord : display}</span>;
}
