import { Landing } from "@/components/sections/landing";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";

export default function Home() {
  return (
    <main>
      <Landing />

      {/* Stub — this becomes the real About section. Proves SplitText +
          ScrollReveal work correctly mid-scroll before more sections are built. */}
      <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
        <span className="font-mono-label text-[var(--color-ink-muted)]">01 — Curiosity</span>
        <h2 className="max-w-3xl text-4xl text-[var(--color-ink)] md:text-6xl">
          <SplitText text="Two disciplines, one way of paying attention." granularity="words" />
        </h2>
        <ScrollReveal variant="blur" delay={0.1}>
          <p className="max-w-xl text-[var(--color-ink-muted)]">
            I build systems and study aesthetics.  
            From software to fashion to philosophy to table tennis, I’m interested in precision, discipline, and form under pressure.
          </p>
        </ScrollReveal>
      </section>

      <section className="flex min-h-screen items-center justify-center px-6">
        <ScrollReveal variant="mask" className="max-w-2xl text-center">
          <p className="font-display text-3xl text-[var(--color-ink)] md:text-5xl">
            If suffering really taught lessons, the world would be populated only by wise men. Pain has nothing to teach those who do not find the strength and courage to listen to it.
-Sigmund Freud-
          </p>
        </ScrollReveal>
      </section>
    </main>
  );
}
