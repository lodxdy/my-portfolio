"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function ContactSection() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-32">

      <p className="text-sm tracking-[0.35em] text-neutral-500">
        07
      </p>

      <h1 className="mt-3 font-serif text-7xl">
        Contact
      </h1>

      <p className="mt-10 max-w-2xl text-lg leading-8 text-neutral-400">
        I'm always interested in thoughtful conversations,
        meaningful products and opportunities to build
        technology that creates real impact.
      </p>

      <div className="mt-16 grid gap-20 lg:grid-cols-2">

        {/* Left */}

        <div className="space-y-8">

          <a
            href="mailto:you@example.com"
            className="flex items-center gap-4 transition hover:text-yellow-400"
          >
            <Mail size={18} />
            lods.dxdy@gmail.com
          </a>

          <a
            href="https://github.com/lodxdy"
            target="_blank"
            className="flex items-center gap-4 transition hover:text-yellow-400"
          >
            <FaGithub size={18} />
            github.com/lodxdy
          </a>

          <a
            href="https://www.linkedin.com/in/lodaytempagyeltshen"
            target="_blank"
            className="flex items-center gap-4 transition hover:text-yellow-400"
          >
            <FaLinkedin size={18} />
            linkedin.com/in/Loday Tempa Gyeltshen
          </a>

          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-3 rounded-full border border-neutral-700 px-5 py-3 transition hover:border-yellow-500"
          >
            <Download size={18} />
            Download Resume
          </a>

        </div>

        {/* Right */}

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Name"
            className="w-full border-b border-neutral-700 bg-transparent py-4 outline-none placeholder:text-neutral-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-neutral-700 bg-transparent py-4 outline-none placeholder:text-neutral-500"
          />

          <textarea
            rows={6}
            placeholder="Tell me about your project..."
            className="w-full border-b border-neutral-700 bg-transparent py-4 outline-none placeholder:text-neutral-500 resize-none"
          />

          <button
            className="rounded-full border border-yellow-500 px-8 py-3 transition hover:bg-yellow-500 hover:text-black"
          >
            Send Message
          </button>

        </motion.form>

      </div>

      <div className="mt-32 border-t border-neutral-800 pt-10">

        <blockquote className="max-w-2xl font-serif text-2xl leading-relaxed text-neutral-300 italic">
          "Technology is how I build.
          Design is how I communicate.
          Curiosity is why I create."
        </blockquote>

      </div>

    </section>
  );
}