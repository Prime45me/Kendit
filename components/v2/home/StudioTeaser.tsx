"use client";

import React from "react";
import Link from "next/link";
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
      className="brand-gradient-surface brand-gradient-studio relative z-10 overflow-hidden py-16 sm:py-28 md:py-40"
    >
      <Container width="wide" className="relative z-10">
        <div className="max-w-5xl">
          {/* Narrative Column */}
          <div>
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

        </div>
      </Container>
    </section>
  );
};
