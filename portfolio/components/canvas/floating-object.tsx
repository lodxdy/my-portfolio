"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/cn";

type Depth = 0 | 1 | 2;

const DEPTH_CONFIG: Record<Depth, { parallax: number; blur: number; scale: number; z: number }> = {
  0: { parallax: 0.12, blur: 0, scale: 1, z: 3 },
  1: { parallax: 0.28, blur: 0.5, scale: 0.92, z: 2 },
  2: { parallax: 0.5, blur: 1.5, scale: 0.82, z: 1 },
};

export function FloatingObject({
  src,
  alt,
  width,
  height,
  depth = 1,
  rotate = 4,
  driftSeconds = 14,
  className,
  style,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** 0 = closest/sharpest, 2 = farthest/blurriest+slowest */
  depth?: Depth;
  /** Max rotation in degrees, oscillates +/- this value */
  rotate?: number;
  /** Duration of one drift+rotate cycle */
  driftSeconds?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const [inView, setInView] = useState(false);
  const reducedMotion = useReducedMotion();
  const config = DEPTH_CONFIG[depth];

  // Only run the rAF parallax/drift loop while the element is actually
  // visible — this is what lets "floating everywhere" not tank the frame
  // rate on a 9-section page.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "20% 0px 20% 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || !inView || reducedMotion) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    const start = performance.now();

    const tick = (now: number) => {
      const t = (now - start) / 1000;
      const scrollY = window.scrollY;
      const driftY = Math.sin((t / driftSeconds) * Math.PI * 2) * 14;
      const rot = Math.sin((t / driftSeconds) * Math.PI * 2) * rotate;
      const parallaxY = -scrollY * config.parallax * 0.05;

      el.style.transform = `translate3d(0, ${(driftY + parallaxY).toFixed(2)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${config.scale})`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, reducedMotion, driftSeconds, rotate, config]);

  return (
    <div
      ref={wrapperRef}
      className={cn("pointer-events-none absolute will-change-transform", className)}
      style={{
        zIndex: config.z,
        filter: config.blur ? `blur(${config.blur}px)` : undefined,
        transform: `scale(${config.scale})`,
        ...style,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative,
          non-LCP floating asset; next/image's optimization pipeline adds
          no value here and forces extra remote/svg config. */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
      />
    </div>
  );
}
