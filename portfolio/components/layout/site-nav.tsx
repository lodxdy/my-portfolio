"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SITE_ROUTES } from "@/lib/site-routes";
import { useCursor } from "@/components/motion/cursor-context";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { ease, stagger } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close the mobile menu on route change. Adjusting state during render
  // (React's documented pattern for "reset state when a prop changes")
  // instead of an effect — avoids an extra render pass on every navigation.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  // A 1px sentinel at the top of the page — once it scrolls out of view,
  // the nav picks up a backdrop. Cheaper than reading scrollY every frame.
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 h-px w-full" aria-hidden />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500",
          scrolled
            ? "border-b border-[var(--color-line)] bg-[var(--color-bg)]/70 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            className="font-display text-xl tracking-tight text-[var(--color-ink)]"
            aria-label="Lodxdy — home"
          >
            Lods...
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {SITE_ROUTES.map((route) => (
              <NavLink key={route.href} href={route.href} label={route.label} />
            ))}
          </ul>

          {/* Mobile trigger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col gap-[5px] p-2 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={cn(
                "h-px w-6 bg-[var(--color-ink)] transition-transform duration-300",
                menuOpen && "translate-y-[3px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-[var(--color-ink)] transition-transform duration-300",
                menuOpen && "-translate-y-[3px] -rotate-45"
              )}
            />
          </button>
        </nav>
      </header>

      <MobileMenu open={menuOpen} pathname={pathname} />
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const { setLabel } = useCursor();
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <li>
      <Link
        href={href}
        onMouseEnter={() => setLabel("View")}
        onMouseLeave={() => setLabel(null)}
        className={cn(
          "font-mono-label relative py-1 text-[var(--color-ink-muted)] transition-colors duration-300 hover:text-[var(--color-ink)]",
          active && "text-[var(--color-gold)]"
        )}
      >
        {label}
        <span
          className={cn(
            "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-gold)] transition-transform duration-300",
            active && "scale-x-100"
          )}
        />
      </Link>
    </li>
  );
}

function MobileMenu({ open, pathname }: { open: boolean; pathname: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.4, ease: ease.editorial }}
          className="fixed inset-0 z-40 flex flex-col justify-center bg-[var(--color-bg)] px-8 md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {SITE_ROUTES.map((route, i) => {
              const active = pathname === route.href;
              return (
                <motion.li
                  key={route.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.5,
                    delay: reducedMotion ? 0 : i * stagger.line,
                    ease: ease.editorial,
                  }}
                >
                  <Link
                    href={route.href}
                    className={cn(
                      "flex items-baseline gap-4 border-b border-[var(--color-line)] py-4 font-display text-4xl",
                      active ? "text-[var(--color-gold)]" : "text-[var(--color-ink)]"
                    )}
                  >
                    <span className="font-mono-label text-[var(--color-ink-faint)]">
                      {route.index}
                    </span>
                    {route.label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
