"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export interface StudioTeaserProps {
  className?: string;
}

/**
 * STUDIO TEASER — Phase 3 Refinement
 *
 * Concise homepage introduction to the Kendits studio philosophy and origin.
 * Directs visitors toward /studio without duplicating the full Phase 7 content.
 */
export const StudioTeaser: React.FC<StudioTeaserProps> = ({ className }) => {
  return (
    <section
      id="studio"
      aria-label="The Studio"
      className="relative py-24 sm:py-36 md:py-44 bg-canvas border-b border-white/[0.07] overflow-hidden z-10"
    >
      {/* Cyan bloom — narrative column anchor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-16 w-[55vw] h-[35vw] rounded-full blur-[160px] opacity-45"
        style={{
          background: "radial-gradient(circle, rgba(0, 238, 220, 0.20) 0%, rgba(14, 66, 74, 0.08) 45%, transparent 70%)",
        }}
      />
      {/* Purple bloom — visual column anchor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-16 w-[60vw] h-[40vw] rounded-full blur-[180px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(125, 21, 137, 0.22) 0%, rgba(58, 16, 84, 0.09) 45%, transparent 70%)",
        }}
      />

      <Container width="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-kendits-cyan mb-3">
                The Studio
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-6">
                Built on Craft, Rhythm, <span className="text-gradient-kendits">&amp; Visual Obsession.</span>
              </h2>
              <div className="space-y-4 text-base sm:text-lg font-light text-white/75 leading-relaxed max-w-xl mb-10">
                <p>
                  At Kendits Creative Studios, creativity is more than visual treatment — it&apos;s
                  the art of translating authentic emotion and narrative into arresting visual
                  expression.
                </p>
                <p className="text-white/50 text-sm sm:text-base">
                  Based in Accra and Koforidua, Ghana and directing for projects worldwide, we partner with
                  institutions, artists, and modern brands that value cinematic distinction.
                </p>
              </div>

              <Link
                href="/studio"
                id="discover-studio-cta"
                className="group/cta inline-flex items-center gap-3 text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-white hover:text-kendits-cyan transition-colors duration-300"
              >
                <span>Discover The Studio</span>
                <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover/cta:border-kendits-cyan group-hover/cta:bg-kendits-cyan/10 group-hover/cta:translate-x-1 group-hover/cta:shadow-[0_0_20px_rgba(0,238,220,0.2)]">
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.12] bg-surface shadow-[0_0_60px_rgba(125,21,137,0.15),0_0_100px_rgba(0,238,220,0.06)] group"
            >
              <Image
                src="/project2.jpeg"
                alt="Kendits Creative Studio Production Environment"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700"
              />
              {/* Cinematic overlay — lifts on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700" />
              {/* Corner accent glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-kendits-cyan/[0.06] via-transparent to-kendits-purple/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/60 group-hover:text-white/90 transition-colors duration-500">
                <span>Studio Archive</span>
                <span>Accra + Koforidua // Worldwide</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
