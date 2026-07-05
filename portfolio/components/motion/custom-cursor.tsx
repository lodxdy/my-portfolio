"use client";

import { useEffect, useRef } from "react";
import { useCursor } from "./cursor-context";
import { useIsTouchDevice } from "@/lib/use-is-touch-device";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function CustomCursor() {
  const { label } = useCursor();
  const dotRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();
  const reducedMotion = useReducedMotion();
  const disabled = isTouch || reducedMotion;

  useEffect(() => {
    if (disabled) {
      document.body.setAttribute("data-native-cursor", "true");
      return;
    }
    document.body.removeAttribute("data-native-cursor");

    const el = dotRef.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rafId: number;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const render = () => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", move);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(rafId);
    };
  }, [disabled]);

  if (disabled) return null;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-[var(--color-gold)]/70 bg-[var(--color-gold)]/5 backdrop-blur-[1px] transition-[width,height,background-color] duration-300 ease-out"
      style={{
        width: label ? 88 : 14,
        height: label ? 88 : 14,
        transitionTimingFunction: "var(--ease-soft)",
      }}
    >
      <span
        className="font-mono-label text-center text-[9px] text-[var(--color-ink)] transition-opacity duration-200"
        style={{ opacity: label ? 1 : 0 }}
      >
        {label}
      </span>
    </div>
  );
}
