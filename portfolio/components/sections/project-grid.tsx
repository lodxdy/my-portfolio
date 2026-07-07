"use client";

import { useState } from "react";
import { PROJECTS, type Project } from "@/lib/project";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Lightbox } from "@/components/motion/lightbox";
import { useCursor } from "@/components/motion/cursor-context";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

const FOCAL_POSITION: Record<NonNullable<Project["focalPoint"]>, string> = {
  center: "center",
  top: "center top",
  bottom: "center bottom",
};

export function ProjectGrid() {
  const [zoomed, setZoomed] = useState<Project | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-32 md:px-10">
      <span className="font-mono-label text-[var(--color-ink-faint)]">02 — Projects</span>
      <h1 className="mt-4 max-w-2xl font-display text-5xl text-[var(--color-ink)] md:text-7xl">
        Selected work
      </h1>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {PROJECTS.map((project, i) => (
          <ScrollReveal
            key={project.slug}
            variant={i % 2 === 0 ? "slide-up" : "blur"}
            delay={0.05 * (i % 3)}
            className={cn(project.featured && "sm:col-span-2 lg:col-span-2")}
          >
            <ProjectTile project={project} onZoom={() => setZoomed(project)} />
          </ScrollReveal>
        ))}
      </div>

      <Lightbox
        image={zoomed?.image ?? null}
        alt={zoomed?.title ?? ""}
        layoutId={zoomed ? `project-image-${zoomed.slug}` : undefined}
        onClose={() => setZoomed(null)}
      />
    </section>
  );
}

function ProjectTile({ project, onZoom }: { project: Project; onZoom: () => void }) {
  const { setLabel } = useCursor();

  return (
    <div className="group">
      {/* Fixed aspect-ratio box + object-cover is the fix for images not
          "fitting": the box never depends on the image's natural size, so
          nothing gets squashed, letterboxed, or spills past its container
          top/bottom. `focalPoint` controls where the crop centers when the
          image's real ratio doesn't match the box. */}
      <button
        type="button"
        onClick={onZoom}
        onMouseEnter={() => setLabel("Zoom")}
        onMouseLeave={() => setLabel(null)}
        aria-label={`Zoom into ${project.title}`}
        className="relative block w-full cursor-zoom-in overflow-hidden rounded-sm bg-[var(--color-surface)]"
        style={{ aspectRatio: project.aspect }}
      >
        <motion.img
          layoutId={`project-image-${project.slug}`}
          src={project.image}
          alt={project.title}
          transition={{ duration: 0.5, ease: ease.editorial }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: FOCAL_POSITION[project.focalPoint ?? "center"] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </button>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl text-[var(--color-ink)]">{project.title}</h3>
          <p className="mt-1 text-sm text-[var(--color-ink-muted)]">{project.description}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-mono-label text-[var(--color-ink-faint)]">{project.year}</p>
          <p className="font-mono-label mt-1 text-[var(--color-gold)]">{project.category}</p>
        </div>
      </div>
    </div>
  );
}