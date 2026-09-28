// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
// // import { Instrument_Serif, Newsreader } from "next/font/google";
// // import { pieces, type Piece } from "@/components/Writing/Writing";

// // const display = Instrument_Serif({ subsets: ["latin"], weight: "400" });
// // const body = Newsreader({ subsets: ["latin"], style: ["normal", "italic"] });

// // const LINE = 32; // ruled line height in px — text line-height must match

// // export function WritingShelf() {
// //   const [openId, setOpenId] = useState<string | null>(null);
// //   const reduce = useReducedMotion();
// //   const shelfRef = useRef<HTMLDivElement>(null);
// //   const triggerRef = useRef<HTMLElement | null>(null);
// //   const open = pieces.find((p) => p.id === openId) ?? null;

// //   const spring = reduce
// //     ? { duration: 0 }
// //     : ({ type: "spring", stiffness: 240, damping: 30, mass: 0.9 } as const);

// //   // Vertical wheel -> horizontal scroll on the shelf (hands back to the page at the ends)
// //   useEffect(() => {
// //     const el = shelfRef.current;
// //     if (!el) return;
// //     const onWheel = (e: WheelEvent) => {
// //       if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
// //       const max = el.scrollWidth - el.clientWidth;
// //       if (max <= 0) return;
// //       const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
// //       const atEnd = el.scrollLeft >= max - 1 && e.deltaY > 0;
// //       if (atStart || atEnd) return;
// //       e.preventDefault();
// //       el.scrollLeft += e.deltaY;
// //     };
// //     el.addEventListener("wheel", onWheel, { passive: false });
// //     return () => el.removeEventListener("wheel", onWheel);
// //   }, []);

// //   // Esc to close + lock page scroll while a notebook is open
// //   useEffect(() => {
// //     if (!openId) return;
// //     const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
// //     window.addEventListener("keydown", onKey);
// //     const prev = document.body.style.overflow;
// //     document.body.style.overflow = "hidden";
// //     return () => {
// //       window.removeEventListener("keydown", onKey);
// //       document.body.style.overflow = prev;
// //     };
// //   }, [openId]);

// //   return (
// //     <section
// //       className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-20 pt-40 md:px-14"
// //       style={{
// //         background:
// //           "radial-gradient(120% 80% at 50% 0%, #3a2a1f 0%, #2a1e16 55%, #1f1610 100%)",
// //         color: "#e6d9c4",
// //       }}
// //     >
// //       <header className="mb-14 max-w-xl">
// //         <h1
// //           className={`${display.className} text-6xl leading-none md:text-8xl`}
// //         >
// //           Writing
// //         </h1>
// //         <p className={`${body.className} mt-5 text-lg leading-relaxed opacity-70`}>
// //           Essays, notes and fragments. Scroll the shelf sideways and pick a
// //           book to read.
// //         </p>
// //       </header>

// //       {/* Shelf */}
// //       <div className="relative">
// //         <div
// //           ref={shelfRef}
// //           data-lenis-prevent
// //           className="shelf-scroll flex items-end overflow-x-auto overflow-y-visible px-4 pb-0 pt-16"
// //           style={{
// //             maskImage:
// //               "linear-gradient(to right, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)",
// //             WebkitMaskImage:
// //               "linear-gradient(to right, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)",
// //           }}
// //         >
// //           <ul className="flex items-end gap-1.5 pr-10">
// //             {pieces.map((p, i) => (
// //               <motion.li
// //                 key={p.id}
// //                 className="shrink-0"
// //                 initial={reduce ? false : { opacity: 0, y: 70 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{
// //                   ...spring,
// //                   delay: reduce ? 0 : 0.15 + i * 0.07,
// //                 }}
// //               >
// //                 <motion.button
// //                   type="button"
// //                   aria-label={`Open ${p.title}`}
// //                   onClick={(e) => {
// //                     triggerRef.current = e.currentTarget;
// //                     setOpenId(p.id);
// //                   }}
// //                   whileHover={reduce ? undefined : { y: -16, rotate: -1.2 }}
// //                   whileTap={reduce ? undefined : { y: -8 }}
// //                   transition={spring}
// //                   className="block origin-bottom rounded-[3px] outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e6d9c4]"
// //                 >
// //                   <Spine piece={p} />
// //                 </motion.button>
// //               </motion.li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Plank */}
// //         <div
// //           aria-hidden
// //           className="relative z-10 h-5 w-full"
// //           style={{
// //             background:
// //               "linear-gradient(to bottom, #7a5638 0%, #5a3d28 40%, #3b2818 100%)",
// //             boxShadow:
// //               "0 18px 30px -8px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.14)",
// //             borderRadius: 2,
// //           }}
// //         />
// //       </div>

// //       <AnimatePresence onExitComplete={() => triggerRef.current?.focus()}>
// //         {open && (
// //           <Notebook
// //             key={open.id}
// //             piece={open}
// //             spring={spring}
// //             reduce={!!reduce}
// //             onClose={() => setOpenId(null)}
// //           />
// //         )}
// //       </AnimatePresence>

// //       <style>{`
// //         .shelf-scroll { scrollbar-width: none; }
// //         .shelf-scroll::-webkit-scrollbar { display: none; }
// //       `}</style>
// //     </section>
// //   );
// // }

// // function Spine({ piece }: { piece: Piece }) {
// //   return (
// //     <motion.div
// //       layoutId={`book-${piece.id}`}
// //       className="relative flex items-center justify-center overflow-hidden"
// //       style={{
// //         width: piece.width,
// //         height: piece.height,
// //         background: `linear-gradient(90deg, rgba(0,0,0,.28) 0%, rgba(255,255,255,.07) 12%, rgba(0,0,0,0) 40%, rgba(0,0,0,.25) 100%), ${piece.color}`,
// //         color: piece.ink,
// //         borderRadius: 3,
// //         boxShadow: "inset 0 0 0 1px rgba(255,255,255,.05)",
// //       }}
// //     >
// //       {/* bands */}
// //       <span
// //         aria-hidden
// //         className="absolute inset-x-0 top-5 h-px"
// //         style={{ background: piece.ink, opacity: 0.35 }}
// //       />
// //       <span
// //         aria-hidden
// //         className="absolute inset-x-0 top-7 h-px"
// //         style={{ background: piece.ink, opacity: 0.2 }}
// //       />
// //       <span
// //         aria-hidden
// //         className="absolute inset-x-0 bottom-5 h-px"
// //         style={{ background: piece.ink, opacity: 0.35 }}
// //       />
// //       <span
// //         className={`${display.className} max-h-[80%] overflow-hidden text-[19px] leading-tight`}
// //         style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
// //       >
// //         {piece.title}
// //       </span>
// //     </motion.div>
// //   );
// // }

// // function Notebook({
// //   piece,
// //   spring,
// //   reduce,
// //   onClose,
// // }: {
// //   piece: Piece;
// //   spring: object;
// //   reduce: boolean;
// //   onClose: () => void;
// // }) {
// //   const fade = (delay: number) => ({
// //     initial: { opacity: 0 },
// //     animate: { opacity: 1, transition: { delay: reduce ? 0 : delay, duration: reduce ? 0 : 0.35 } },
// //     exit: { opacity: 0, transition: { duration: reduce ? 0 : 0.12 } },
// //   });

// //   return (
// //     <div
// //       role="dialog"
// //       aria-modal="true"
// //       aria-label={piece.title}
// //       data-lenis-prevent
// //       className="fixed inset-0 z-50 flex items-center justify-center p-4"
// //     >
// //       <motion.div
// //         className="absolute inset-0 cursor-pointer"
// //         style={{ background: "rgba(14,9,6,.78)", backdropFilter: "blur(3px)" }}
// //         onClick={onClose}
// //         {...fade(0)}
// //         transition={{ duration: reduce ? 0 : 0.3 }}
// //       />

// //       <motion.div
// //         layoutId={`book-${piece.id}`}
// //         transition={spring}
// //         className="relative h-[min(86vh,860px)] w-[min(94vw,720px)] overflow-hidden"
// //         style={{
// //           background: "#e9e8e1",
// //           color: "#23262b",
// //           borderRadius: 6,
// //           boxShadow: "0 40px 80px -20px rgba(0,0,0,.7)",
// //         }}
// //       >
// //         <motion.div className="h-full" {...fade(0.32)}>
// //           <div
// //             data-lenis-prevent
// //             className="h-full overflow-y-auto pb-16 pl-20 pr-8 pt-8 md:pl-28 md:pr-14"
// //             style={{
// //               backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent ${LINE - 1}px, rgba(84,116,158,.3) ${LINE - 1}px, rgba(84,116,158,.3) ${LINE}px)`,
// //               backgroundAttachment: "local",
// //             }}
// //           >
// //             <h2
// //               className={`${display.className} text-4xl md:text-5xl`}
// //               style={{ lineHeight: `${LINE * 2}px` }}
// //             >
// //               {piece.title}
// //             </h2>
// //             <p
// //               className={`${body.className} italic opacity-60`}
// //               style={{ fontSize: 16, lineHeight: `${LINE}px` }}
// //             >
// //               {piece.kind}, {piece.date}
// //             </p>
// //             <div style={{ height: LINE }} />
// //             {piece.body.map((para, i) => (
// //               <p
// //                 key={i}
// //                 className={`${body.className} max-w-[62ch]`}
// //                 style={{
// //                   fontSize: 19,
// //                   lineHeight: `${LINE}px`,
// //                   textIndent: i === 0 ? 0 : "2em",
// //                 }}
// //               >
// //                 {para}
// //               </p>
// //             ))}
// //           </div>

// //           {/* margin line + binding holes */}
// //           <span
// //             aria-hidden
// //             className="pointer-events-none absolute inset-y-0 left-14 w-px md:left-20"
// //             style={{ background: "rgba(190,84,76,.55)" }}
// //           />
// //           <div
// //             aria-hidden
// //             className="pointer-events-none absolute inset-y-0 left-4 flex flex-col justify-around py-10"
// //           >
// //             {Array.from({ length: 6 }).map((_, i) => (
// //               <span
// //                 key={i}
// //                 className="block h-4 w-4 rounded-full"
// //                 style={{
// //                   background: "#2a1e16",
// //                   boxShadow: "inset 0 2px 3px rgba(0,0,0,.6)",
// //                 }}
// //               />
// //             ))}
// //           </div>

// //           <button
// //             type="button"
// //             onClick={onClose}
// //             autoFocus
// //             aria-label="Close notebook"
// //             className={`${body.className} absolute right-4 top-4 rounded px-3 py-1.5 text-base outline-offset-2 hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#23262b]`}
// //           >
// //             Close
// //           </button>
// //         </motion.div>
// //       </motion.div>
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
//   AnimatePresence,
//   motion,
//   useReducedMotion,
//   type Transition,
// } from "framer-motion";
// import { Instrument_Serif, Newsreader } from "next/font/google";
// import { pieces, type Piece } from "@/components/Writing/Writing";

// const display = Instrument_Serif({ subsets: ["latin"], weight: "400" });
// const body = Newsreader({ subsets: ["latin"], style: ["normal", "italic"] });

// const LINE = 32; // ruled line height in px — text line-height must match

// export function WritingShelf() {
//   const [openId, setOpenId] = useState<string | null>(null);
//   const reduce = useReducedMotion();
//   const shelfRef = useRef<HTMLDivElement>(null);
//   const triggerRef = useRef<HTMLElement | null>(null);
//   const open = pieces.find((p) => p.id === openId) ?? null;

//   const spring: Transition = reduce
//     ? { duration: 0 }
//     : { type: "spring", stiffness: 240, damping: 30, mass: 0.9 };

//   // Vertical wheel -> horizontal scroll on the shelf (hands back to the page at the ends)
//   useEffect(() => {
//     const el = shelfRef.current;
//     if (!el) return;
//     const onWheel = (e: WheelEvent) => {
//       if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
//       const max = el.scrollWidth - el.clientWidth;
//       if (max <= 0) return;
//       const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
//       const atEnd = el.scrollLeft >= max - 1 && e.deltaY > 0;
//       if (atStart || atEnd) return;
//       e.preventDefault();
//       el.scrollLeft += e.deltaY;
//     };
//     el.addEventListener("wheel", onWheel, { passive: false });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, []);

//   // Esc to close + lock page scroll while a notebook is open
//   useEffect(() => {
//     if (!openId) return;
//     const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
//     window.addEventListener("keydown", onKey);
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = prev;
//     };
//   }, [openId]);

//   return (
//     <section
//       className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-20 pt-40 md:px-14"
//       style={{
//         background:
//           "radial-gradient(120% 80% at 50% 0%, #3a2a1f 0%, #2a1e16 55%, #1f1610 100%)",
//         color: "#e6d9c4",
//       }}
//     >
//       <header className="mb-14 max-w-xl">
//         <h1
//           className={`${display.className} text-6xl leading-none md:text-8xl`}
//         >
//           Writing
//         </h1>
//         <p className={`${body.className} mt-5 text-lg leading-relaxed opacity-70`}>
//           Essays, notes and fragments. Scroll the shelf sideways and pick a
//           book to read.
//         </p>
//       </header>

//       {/* Shelf */}
//       <div className="relative">
//         <div
//           ref={shelfRef}
//           data-lenis-prevent
//           className="shelf-scroll flex items-end overflow-x-auto overflow-y-visible px-4 pb-0 pt-16"
//           style={{
//             maskImage:
//               "linear-gradient(to right, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)",
//             WebkitMaskImage:
//               "linear-gradient(to right, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)",
//           }}
//         >
//           <ul className="flex items-end gap-1.5 pr-10">
//             {pieces.map((p, i) => (
//               <motion.li
//                 key={p.id}
//                 className="shrink-0"
//                 initial={reduce ? false : { opacity: 0, y: 70 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   ...spring,
//                   delay: reduce ? 0 : 0.15 + i * 0.07,
//                 }}
//               >
//                 <motion.button
//                   type="button"
//                   aria-label={`Open ${p.title}`}
//                   onClick={(e) => {
//                     triggerRef.current = e.currentTarget;
//                     setOpenId(p.id);
//                   }}
//                   whileHover={reduce ? undefined : { y: -16, rotate: -1.2 }}
//                   whileTap={reduce ? undefined : { y: -8 }}
//                   transition={spring}
//                   className="block origin-bottom rounded-[3px] outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e6d9c4]"
//                 >
//                   <Spine piece={p} />
//                 </motion.button>
//               </motion.li>
//             ))}
//           </ul>
//         </div>

//         {/* Plank */}
//         <div
//           aria-hidden
//           className="relative z-10 h-5 w-full"
//           style={{
//             background:
//               "linear-gradient(to bottom, #7a5638 0%, #5a3d28 40%, #3b2818 100%)",
//             boxShadow:
//               "0 18px 30px -8px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.14)",
//             borderRadius: 2,
//           }}
//         />
//       </div>

//       <AnimatePresence onExitComplete={() => triggerRef.current?.focus()}>
//         {open && (
//           <Notebook
//             key={open.id}
//             piece={open}
//             spring={spring}
//             reduce={!!reduce}
//             onClose={() => setOpenId(null)}
//           />
//         )}
//       </AnimatePresence>

//       <style>{`
//         .shelf-scroll { scrollbar-width: none; }
//         .shelf-scroll::-webkit-scrollbar { display: none; }
//       `}</style>
//     </section>
//   );
// }

// function Spine({ piece }: { piece: Piece }) {
//   return (
//     <motion.div
//       layoutId={`book-${piece.id}`}
//       className="relative flex items-center justify-center overflow-hidden"
//       style={{
//         width: piece.width,
//         height: piece.height,
//         background: `linear-gradient(90deg, rgba(0,0,0,.28) 0%, rgba(255,255,255,.07) 12%, rgba(0,0,0,0) 40%, rgba(0,0,0,.25) 100%), ${piece.color}`,
//         color: piece.ink,
//         borderRadius: 3,
//         boxShadow: "inset 0 0 0 1px rgba(255,255,255,.05)",
//       }}
//     >
//       {/* bands */}
//       <span
//         aria-hidden
//         className="absolute inset-x-0 top-5 h-px"
//         style={{ background: piece.ink, opacity: 0.35 }}
//       />
//       <span
//         aria-hidden
//         className="absolute inset-x-0 top-7 h-px"
//         style={{ background: piece.ink, opacity: 0.2 }}
//       />
//       <span
//         aria-hidden
//         className="absolute inset-x-0 bottom-5 h-px"
//         style={{ background: piece.ink, opacity: 0.35 }}
//       />
//       <span
//         className={`${display.className} max-h-[80%] overflow-hidden text-[19px] leading-tight`}
//         style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
//       >
//         {piece.title}
//       </span>
//     </motion.div>
//   );
// }

// function Notebook({
//   piece,
//   spring,
//   reduce,
//   onClose,
// }: {
//   piece: Piece;
//   spring: Transition;
//   reduce: boolean;
//   onClose: () => void;
// }) {
//   const fade = (delay: number) => ({
//     initial: { opacity: 0 },
//     animate: { opacity: 1, transition: { delay: reduce ? 0 : delay, duration: reduce ? 0 : 0.35 } },
//     exit: { opacity: 0, transition: { duration: reduce ? 0 : 0.12 } },
//   });

//   return (
//     <div
//       role="dialog"
//       aria-modal="true"
//       aria-label={piece.title}
//       data-lenis-prevent
//       className="fixed inset-0 z-50 flex items-center justify-center p-4"
//     >
//       <motion.div
//         className="absolute inset-0 cursor-pointer"
//         style={{ background: "rgba(14,9,6,.78)", backdropFilter: "blur(3px)" }}
//         onClick={onClose}
//         {...fade(0)}
//         transition={{ duration: reduce ? 0 : 0.3 }}
//       />

//       <motion.div
//         layoutId={`book-${piece.id}`}
//         transition={spring}
//         className="relative h-[min(86vh,860px)] w-[min(94vw,720px)] overflow-hidden"
//         style={{
//           background: "#e9e8e1",
//           color: "#23262b",
//           borderRadius: 6,
//           boxShadow: "0 40px 80px -20px rgba(0,0,0,.7)",
//         }}
//       >
//         <motion.div className="h-full" {...fade(0.32)}>
//           <div
//             data-lenis-prevent
//             className="h-full overflow-y-auto pb-16 pl-20 pr-8 pt-8 md:pl-28 md:pr-14"
//             style={{
//               backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent ${LINE - 1}px, rgba(84,116,158,.3) ${LINE - 1}px, rgba(84,116,158,.3) ${LINE}px)`,
//               backgroundAttachment: "local",
//             }}
//           >
//             <h2
//               className={`${display.className} text-4xl md:text-5xl`}
//               style={{ lineHeight: `${LINE * 2}px` }}
//             >
//               {piece.title}
//             </h2>
//             <p
//               className={`${body.className} italic opacity-60`}
//               style={{ fontSize: 16, lineHeight: `${LINE}px` }}
//             >
//               {piece.kind}, {piece.date}
//             </p>
//             <div style={{ height: LINE }} />
//             {piece.body.map((para, i) => (
//               <p
//                 key={i}
//                 className={`${body.className} max-w-[62ch]`}
//                 style={{
//                   fontSize: 19,
//                   lineHeight: `${LINE}px`,
//                   textIndent: i === 0 ? 0 : "2em",
//                 }}
//               >
//                 {para}
//               </p>
//             ))}
//           </div>

//           {/* margin line + binding holes */}
//           <span
//             aria-hidden
//             className="pointer-events-none absolute inset-y-0 left-14 w-px md:left-20"
//             style={{ background: "rgba(190,84,76,.55)" }}
//           />
//           <div
//             aria-hidden
//             className="pointer-events-none absolute inset-y-0 left-4 flex flex-col justify-around py-10"
//           >
//             {Array.from({ length: 6 }).map((_, i) => (
//               <span
//                 key={i}
//                 className="block h-4 w-4 rounded-full"
//                 style={{
//                   background: "#2a1e16",
//                   boxShadow: "inset 0 2px 3px rgba(0,0,0,.6)",
//                 }}
//               />
//             ))}
//           </div>

//           <button
//             type="button"
//             onClick={onClose}
//             autoFocus
//             aria-label="Close notebook"
//             className={`${body.className} absolute right-4 top-4 rounded px-3 py-1.5 text-base outline-offset-2 hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#23262b]`}
//           >
//             Close
//           </button>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import { Instrument_Serif, Newsreader } from "next/font/google";
import { pieces, type Piece } from "@/components/Writing/Writing";

const display = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const body = Newsreader({ subsets: ["latin"], style: ["normal", "italic"] });

const LINE = 32; // ruled line height in px — text line-height must match

export function WritingShelf() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const shelfRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const open = pieces.find((p) => p.id === openId) ?? null;

  const spring: Transition = reduce
    ? { duration: 0 }
    : { type: "spring", stiffness: 240, damping: 30, mass: 0.9 };

  // Vertical wheel -> horizontal scroll on the shelf (hands back to the page at the ends)
  useEffect(() => {
    const el = shelfRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = el.scrollLeft >= max - 1 && e.deltaY > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Esc to close + lock page scroll while a notebook is open
  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openId]);

  return (
    <section
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-20 pt-40 md:px-14"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 0%, #3a2a1f 0%, #2a1e16 55%, #1f1610 100%)",
        color: "#e6d9c4",
      }}
    >
      <header className="mb-14 max-w-xl">
        <h1
          className={`${display.className} text-6xl leading-none md:text-8xl`}
        >
          Writing
        </h1>
        <p className={`${body.className} mt-5 text-lg leading-relaxed opacity-70`}>
          Essays, notes and fragments. Scroll the shelf sideways and pick a
          book to read.
        </p>
      </header>

      {/* Shelf */}
      <div className="relative">
        <div
          ref={shelfRef}
          data-lenis-prevent
          className="shelf-scroll flex items-end overflow-x-auto overflow-y-visible px-4 pb-0 pt-16"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)",
          }}
        >
          <ul className="flex items-end gap-1.5 pr-10">
            {pieces.map((p, i) => (
              <motion.li
                key={p.id}
                className="shrink-0"
                initial={reduce ? false : { opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...spring,
                  delay: reduce ? 0 : 0.15 + i * 0.07,
                }}
              >
                <motion.button
                  type="button"
                  aria-label={`Open ${p.title}`}
                  onClick={(e) => {
                    triggerRef.current = e.currentTarget;
                    setOpenId(p.id);
                  }}
                  whileHover={reduce ? undefined : { y: -16, rotate: -1.2 }}
                  whileTap={reduce ? undefined : { y: -8 }}
                  transition={spring}
                  className="block origin-bottom rounded-[3px] outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e6d9c4]"
                >
                  <Spine piece={p} />
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Plank */}
        <div
          aria-hidden
          className="relative z-10 h-5 w-full"
          style={{
            background:
              "linear-gradient(to bottom, #7a5638 0%, #5a3d28 40%, #3b2818 100%)",
            boxShadow:
              "0 18px 30px -8px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.14)",
            borderRadius: 2,
          }}
        />
      </div>

      <AnimatePresence onExitComplete={() => triggerRef.current?.focus()}>
        {open && (
          <Notebook
            key={open.id}
            piece={open}
            spring={spring}
            reduce={!!reduce}
            onClose={() => setOpenId(null)}
          />
        )}
      </AnimatePresence>

      <style>{`
        .shelf-scroll { scrollbar-width: none; }
        .shelf-scroll::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

function Spine({ piece }: { piece: Piece }) {
  return (
    <motion.div
      layoutId={`book-${piece.id}`}
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        width: piece.width,
        height: piece.height,
        background: `linear-gradient(90deg, rgba(0,0,0,.28) 0%, rgba(255,255,255,.07) 12%, rgba(0,0,0,0) 40%, rgba(0,0,0,.25) 100%), ${piece.color}`,
        color: piece.ink,
        borderRadius: 3,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,.05)",
      }}
    >
      {/* bands */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-5 h-px"
        style={{ background: piece.ink, opacity: 0.35 }}
      />
      <span
        aria-hidden
        className="absolute inset-x-0 top-7 h-px"
        style={{ background: piece.ink, opacity: 0.2 }}
      />
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-5 h-px"
        style={{ background: piece.ink, opacity: 0.35 }}
      />
      <span
        className={`${display.className} max-h-[80%] overflow-hidden text-[19px] leading-tight`}
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {piece.title}
      </span>
    </motion.div>
  );
}

function Notebook({
  piece,
  spring,
  reduce,
  onClose,
}: {
  piece: Piece;
  spring: Transition;
  reduce: boolean;
  onClose: () => void;
}) {
  const fade = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: reduce ? 0 : delay, duration: reduce ? 0 : 0.35 } },
    exit: { opacity: 0, transition: { duration: reduce ? 0 : 0.12 } },
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={piece.title}
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        className="absolute inset-0 cursor-pointer"
        style={{ background: "rgba(14,9,6,.78)", backdropFilter: "blur(3px)" }}
        onClick={onClose}
        {...fade(0)}
        transition={{ duration: reduce ? 0 : 0.3 }}
      />

      <motion.div
        layoutId={`book-${piece.id}`}
        transition={spring}
        className="relative h-[min(86vh,860px)] w-[min(94vw,720px)] overflow-hidden"
        style={{
          background: "#e9e8e1",
          color: "#23262b",
          borderRadius: 6,
          boxShadow: "0 40px 80px -20px rgba(0,0,0,.7)",
        }}
      >
        <motion.div className="h-full" {...fade(0.32)}>
          <div
            data-lenis-prevent
            className="h-full overflow-y-auto pb-16 pl-20 pr-8 pt-8 md:pl-28 md:pr-14"
            style={{
              backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent ${LINE - 1}px, rgba(84,116,158,.3) ${LINE - 1}px, rgba(84,116,158,.3) ${LINE}px)`,
              backgroundAttachment: "local",
            }}
          >
            <h2
              className={`${display.className} text-4xl md:text-5xl`}
              style={{ lineHeight: `${LINE * 2}px` }}
            >
              {piece.title}
            </h2>
            <p
              className={`${body.className} italic opacity-60`}
              style={{ fontSize: 16, lineHeight: `${LINE}px` }}
            >
              {piece.kind}, {piece.date}
            </p>
            <div style={{ height: LINE }} />
            {piece.body.map((para, i) => (
              <p
                key={i}
                className={`${body.className} max-w-[62ch]`}
                style={{
                  fontSize: 19,
                  lineHeight: `${LINE}px`,
                  textIndent: i === 0 ? 0 : "2em",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* margin line + binding holes */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-14 w-px md:left-20"
            style={{ background: "rgba(190,84,76,.55)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-4 flex flex-col justify-around py-10"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="block h-4 w-4 rounded-full"
                style={{
                  background: "#2a1e16",
                  boxShadow: "inset 0 2px 3px rgba(0,0,0,.6)",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            autoFocus
            aria-label="Close notebook"
            className={`${body.className} absolute right-4 top-4 rounded px-3 py-1.5 text-base outline-offset-2 hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#23262b]`}
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}