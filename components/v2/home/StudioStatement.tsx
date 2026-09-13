"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export interface StudioStatementProps {
  className?: string;
}

/**
 * STUDIO STATEMENT — Phase 3 Refinement (Luminosity Elevated)
 *
 * Positioned immediately following the SignatureHero reveal.
 * Dark environment + luminous color + pure white typography.
 */
export const StudioStatement: React.FC<StudioStatementProps> = ({ className }) => {
  return (
    <section
      id="manifesto"
      aria-label="Studio Manifesto"
      className="relative py-28 sm:py-40 md:py-52 bg-canvas border-b border-white/[0.07] overflow-hidden z-10"
    >
      {/* Cyan bloom — top left, strong anchor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-16 w-[70vw] h-[40vw] rounded-full blur-[40px] sm:blur-[160px] opacity-40 sm:opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(0, 238, 220, 0.22) 0%, rgba(14, 66, 74, 0.10) 45%, transparent 70%)",
        }}
      />
      {/* Purple bloom — bottom right, counterweight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 w-[60vw] h-[35vw] rounded-full blur-[40px] sm:blur-[180px] opacity-35 sm:opacity-45"
        style={{
          background: "radial-gradient(circle, rgba(125, 21, 137, 0.20) 0%, rgba(58, 16, 84, 0.08) 45%, transparent 70%)",
        }}
      />
      {/* Warm amber accent — center, very subtle depth layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[20vw] rounded-full blur-[40px] sm:blur-[200px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.18) 0%, transparent 70%)",
        }}
      />

      <Container width="wide" className="relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow marker */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-10 sm:mb-14"
          >
            <span className="w-2 h-2 rounded-full bg-kendits-turquoise animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-kendits-cyan">
              Who We Are • Studio Manifesto
            </span>
          </motion.div>

          {/* Primary Editorial Statement — larger, more commanding */}
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.4rem,6vw,6.5rem)] font-black uppercase tracking-tight text-white leading-[1.02]"
          >
            We craft cinematic visuals that{" "}
            <span className="text-gradient-kendits">define presence</span>
            {" "}and elevate perception.
          </motion.h2>

          {/* Gradient horizon line */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 sm:mt-12 h-px w-full bg-gradient-to-r from-kendits-cyan/40 via-white/10 to-transparent"
            aria-hidden="true"
          />

          {/* Supporting Narrative Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
          >
            <div className="md:col-span-7">
              <p className="text-xl sm:text-2xl font-light text-white/85 leading-relaxed">
                Kendits is a visual creative studio. We direct, produce, and finish commercial films,
                music videos, live captures, and brand systems with relentless attention to craft.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col justify-between gap-6">
              <p className="text-sm sm:text-base font-light text-white/55 leading-relaxed">
                Every frame is intentional. Every cut is designed to make your brand impossible to
                ignore in a landscape saturated with template aesthetics.
              </p>

              {/* Studio Disciplines Strip */}
              <div className="pt-5 border-t border-white/[0.08] flex flex-wrap gap-2">
                {["Direction", "Cinematography", "Post & Grade", "Visual Identity"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-sm border border-kendits-cyan/20 bg-kendits-cyan/[0.04] text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-kendits-cyan/80 hover:text-kendits-cyan hover:border-kendits-cyan/40 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
