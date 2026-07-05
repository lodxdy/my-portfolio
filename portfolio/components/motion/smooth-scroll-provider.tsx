"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

type LenisRefValue = { current: Lenis | null };
const LenisContext = createContext<LenisRefValue | null>(null);

/**
 * Gives any component (nav links, "scroll to next section" buttons, etc.)
 * access to the single shared Lenis instance so programmatic scrolls stay
 * smooth instead of jumping via native anchor behavior.
 *
 * Returns a ref object, not the instance directly — the instance isn't
 * something components need to re-render on, only read at click-time
 * (e.g. `lenisRef.current?.scrollTo(...)`). Callers should check for null
 * (reduced motion, or not yet mounted) and fall back to a plain anchor jump.
 */
export function useLenis() {
  const ctx = useContext(LenisContext);
  if (!ctx) {
    throw new Error("useLenis must be used within SmoothScrollProvider");
  }
  return ctx; // callers read `lenisRef.current` at click-time, not here
}

/**
 * Mount once at the root layout. Do not add a second Lenis instance or a
 * second ScrollTrigger.refresh loop anywhere else in the app — this is the
 * single owner of "what does scrolling feel like" for every section.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      // Respect the OS setting completely: no Lenis, native scroll, no rAF loop.
      lenisRef.current = null;
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    // Keep ScrollTrigger's measurements in sync with Lenis's virtual scroll
    // instead of the native scroll event, so pinned sections don't drift.
    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
}
