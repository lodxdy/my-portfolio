/**
 * Shared motion vocabulary.
 *
 * Every animated component (ScrollReveal, SplitText, FloatingObject,
 * MagneticButton...) pulls its timing from here instead of hardcoding
 * its own numbers. This is what keeps 9 sections feeling like one
 * considered piece of motion design instead of 9 different demos.
 */

export const ease = {
  // Slow-out editorial ease — the site's signature feel. Use for anything
  // meant to feel deliberate: text reveals, panel entrances.
  editorial: [0.16, 1, 0.3, 1] as const,
  // Softer, quicker — for micro-interactions (hover, cursor, buttons).
  soft: [0.22, 1, 0.36, 1] as const,
  // GSAP string equivalents (GSAP doesn't take cubic-bezier arrays the
  // same way Framer does).
  gsapEditorial: "power3.out",
  gsapSoft: "power2.out",
};

export const duration = {
  instant: 0.2,
  fast: 0.4,
  base: 0.8,
  slow: 1.4,
  cinematic: 2.2,
};

export const stagger = {
  char: 0.025,
  word: 0.08,
  line: 0.12,
};

/** Depth bands for floating objects — index into these instead of
 * inventing new speed/blur values per instance. */
export const depths = [
  { speed: 0.15, blur: 0, scale: 1, z: 0 },
  { speed: 0.35, blur: 0.5, scale: 0.92, z: -1 },
  { speed: 0.6, blur: 1.5, scale: 0.8, z: -2 },
] as const;
