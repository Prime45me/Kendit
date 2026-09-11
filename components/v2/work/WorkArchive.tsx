"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioProjects } from "@/data/projects";
import { WorkCard } from "./WorkCard";
import { ClientsMarquee } from "./ClientsMarquee";
import { VisualStoriesGallery } from "./VisualStoriesGallery";
import { WorkClosingCTA } from "./WorkClosingCTA";

/**
 * WorkArchive — /work
 *
 * Premium editorial portfolio archive.
 * Layout:
 *   Large heading header
 *   Featured project (full-width)
 *   Remaining projects in a staggered editorial grid
 */
export const WorkArchive: React.FC = () => {
  const featured = portfolioProjects.find((p) => p.featured);
  const rest = portfolioProjects.filter((p) => !p.featured);

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-16 pb-32">

        {/* ── Page Header ── */}
        <header className="mb-20 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between border-b border-white/8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-2 text-[11px] font-mono tracking-[0.3em] uppercase text-kendits-turquoise">
              Kendits Creative Studios
            </p>
            <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.88] tracking-tight text-white uppercase">
              Selected<br />
              <span className="text-gradient-kendits">Work.</span>
            </h1>
          </motion.div>

          <motion.div
            className="sm:max-w-xs flex flex-col gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm text-white/40 font-light leading-relaxed sm:text-right">
              Live performance. Short film. Music video. Event recap.
              Quality over quantity.
            </p>
            <p className="text-[11px] font-mono tracking-[0.15em] text-white/20 sm:text-right">
              {portfolioProjects.length} productions
            </p>
          </motion.div>
        </header>

        {/* ── Featured Project ── */}
        {featured && (
          <section aria-label="Featured project" className="mb-20">
            <motion.p
              className="mb-6 text-[10px] font-mono tracking-[0.3em] uppercase text-white/25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Featured
            </motion.p>
            <WorkCard project={featured} index={0} className="w-full" />
          </section>
        )}

        {/* ── Divider ── */}
        <motion.div
          className="mb-16 h-px w-full bg-white/8"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />

        {/* ── Rest of projects ── */}
        {rest.length > 0 && (
          <section aria-label="All projects">
            {/* First two: side by side */}
            {rest.length >= 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16 mb-16">
                <WorkCard project={rest[0]} index={1} />
                <WorkCard project={rest[1]} index={2} />
              </div>
            )}

            {/* Third: full width (editorial variation) */}
            {rest.length >= 3 && (
              <div className="mb-16">
                <WorkCard project={rest[2]} index={3} className="w-full" />
              </div>
            )}

            {/* Fourth+: two-column if more are ever added */}
            {rest.length >= 4 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16 mb-16">
                {rest.slice(3).map((p, i) => (
                  <WorkCard key={p.id} project={p} index={4 + i} />
                ))}
              </div>
            )}
          </section>
        )}
      </div>

      {/* ── CLIENTS WE'VE WORKED WITH ── */}
      <ClientsMarquee />

      {/* ── CONTENT / VISUAL STORIES ── */}
      <VisualStoriesGallery />

      {/* ── LET'S CREATE SOMETHING CTA ── */}
      <WorkClosingCTA />
    </div>
  );
};
