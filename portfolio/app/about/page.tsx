// import { ComingSoon } from "@/components/sections/coming-soon";

// export default function Page() {
//   return <ComingSoon index="01" title="About" />;
// }

"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";

export default function AboutSection() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-24">
      {/* Header */}
      <div className="mb-16">
        <p className="text-sm text-white/50">01 / About</p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold mt-4"
        >
          Building digital experiences with clarity and precision.
        </motion.h1>
      </div>

      {/* Bio Section */}
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-white/70 leading-relaxed"
        >
          <p>
            I am a frontend developer focused on building fast, minimal, and
            highly interactive web applications using Next.js, React, and modern
            animation tools.
          </p>

          <p>
            I enjoy designing systems that feel alive — combining motion,
            typography, and structure to create meaningful user experiences.
          </p>

          <p>
            Currently exploring advanced UI animation, design systems, and
            scalable frontend architecture.
          </p>
          <p>
            I love reading about design, philosophy, and technology. When I’m not coding, you can find me playing table tennis, hiking, or experimenting with photography.
          </p>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-white/10 p-6 rounded-xl space-y-4"
        >
          <div>
            <p className="text-white/50 text-sm">Stack</p>
            <p>Next.js · React · Tailwind · GSAP · Framer Motion</p>
          </div>

          <div>
            <p className="text-white/50 text-sm">Focus</p>
            <p>Frontend Architecture · UI Motion · Design Systems</p>
          </div>

          <div>
            <p className="text-white/50 text-sm">Location</p>
            <p>Bhutan</p>
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="mt-24">
        <h2 className="text-xl mb-10 text-white/60">Journey</h2>

        <div className="space-y-10 border-l border-white/10 pl-6">
          {[
            {
              year: "2025",
              title: "Started OJT at Dragon Coders Pvt. Ltd.",
            },
            {
              year: "2025",
              title: "Built ServiceBT Web App (Full Frontend)",
            },
            {
              year: "2024",
              title: "Started working with Next.js and React ecosystem",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-white/40 text-sm">{item.year}</p>
              <p className="text-white">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}