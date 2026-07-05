import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function ComingSoon({ index, title }: { index: string; title: string }) {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="font-mono-label text-[var(--color-ink-faint)]">{index}</span>
      <ScrollReveal variant="blur">
        <h1 className="font-display text-5xl text-[var(--color-ink)] md:text-7xl">{title}</h1>
      </ScrollReveal>
      <p className="max-w-sm text-sm text-[var(--color-ink-muted)]">
        This section is being built next. The primitives are already in
        place — this page just hasn&apos;t been written yet.
      </p>
    </main>
  );
}
