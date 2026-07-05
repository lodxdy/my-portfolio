"use client";

import { Project } from "@/src/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-24">
      <div className="mb-16">
        <p className="text-white/40 text-sm">Selected Work</p>
        <h1 className="text-5xl md:text-7xl font-semibold mt-2">
          Projects
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border border-white/10 rounded-xl overflow-hidden"
          >
            <div className="relative h-56 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 space-y-3">
              <div className="flex justify-between">
                <h2 className="text-lg font-medium">{project.title}</h2>
                <span className="text-xs text-white/40 uppercase">
                  {project.status}
                </span>
              </div>

              <p className="text-white/60 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-white/10 px-2 py-1 rounded-full text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}