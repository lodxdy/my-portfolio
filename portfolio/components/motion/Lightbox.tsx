"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function Lightbox({
  image,
  alt,
  layoutId,
  onClose,
}: {
  image: string | null;
  alt: string;
  layoutId?: string;
  onClose: () => void;
}) {
  const reducedMotion = useReducedMotion();

  // Escape to close, lock body scroll while open.
  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.3, ease: ease.soft }}
          className="fixed inset-0 z-[70] flex cursor-zoom-out items-center justify-center bg-[var(--color-bg)]/92 p-6 backdrop-blur-sm md:p-16"
          onClick={onClose}
        >
          <motion.img
            layoutId={layoutId}
            src={image}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: reducedMotion ? 0 : 0.5, ease: ease.editorial }}
            className="max-h-full max-w-full cursor-zoom-out rounded-sm object-contain shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)]"
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="font-mono-label absolute right-6 top-6 text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)] md:right-10 md:top-10"
          >
            Close ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}