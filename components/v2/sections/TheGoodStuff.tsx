"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioProjects } from "@/data/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { cn } from "@/lib/utils";

export interface TheGoodStuffProps {
  className?: string;
}

/**
 * THE GOOD STUFF — Phase 4
 *
 * Editorial Selected Work section.
 * Flows directly from the Phase 3 SignatureHero cinematic reveal.
 *
 * Layout:
 *   [01 STAY ORIGINAL] ── FEATURED, full-width, video preview on hover
 *   [02 PENIEL]  [03 LIFELESS] ── medium, side-by-side
 *   [04 WAVE SPEEDWAY] ── full-width
 *
 * See: docs/kendits-v2/phase-4-content-matrix.md
 */
export const TheGoodStuff: React.FC<TheGoodStuffProps> = ({ className }) => {
  const featured = portfolioProjects.find((p) => p.featured);
  const secondary = portfolioProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-label="Selected Work — The Good Stuff"
      className={cn("relative w-full z-10", className)}
    >
      {/* A thin gradient bridge so the dark hero dissolves naturally into this section */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-40 z-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-canvas, #060608) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* Cyan bloom — top right, illuminates featured project card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-32 -right-20 w-[55vw] h-[30vw] rounded-full blur-[180px] opacity-35 z-0"
        style={{
          background: "radial-gradient(circle, rgba(0, 238, 220, 0.16) 0%, rgba(14, 66, 74, 0.06) 45%, transparent 70%)",
        }}
      />
      {/* Purple bloom — mid section, illuminates secondary cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/3 -left-16 w-[50vw] h-[28vw] rounded-full blur-[170px] opacity-30 z-0"
        style={{
          background: "radial-gradient(circle, rgba(125, 21, 137, 0.16) 0%, rgba(58, 16, 84, 0.06) 45%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-28 pb-32">

        {/* ── Section Header ── */}
        <div className="mb-20 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-kendits-turquoise animate-pulse" />
              <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-kendits-turquoise">
                Selected Work
              </p>
            </div>

            {/* Primary heading — single H2, no competing headings */}
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] tracking-tight text-white uppercase">
              The Good
              <br />
              <span className="text-gradient-kendits">Stuff.</span>
            </h2>
          </motion.div>

          {/* Descriptor + CTA */}
          <motion.div
            className="flex flex-col items-start sm:items-end gap-4 sm:max-w-xs"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm text-white/45 leading-relaxed sm:text-right font-light">
              Commercial direction. Live performance. Short film. Music video.
              This is the proof of Kendits&apos; creative quality.
            </p>
            <a
              href="https://www.instagram.com/kendits_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-white/60 hover:text-kendits-turquoise transition-colors duration-300"
            >
              Studio Instagram
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                aria-hidden="true"
              >
                <path
                  d="M1 11L11 1M11 1H4M11 1v7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* ── Thin divider ── */}
        <motion.div
          className="mb-16 h-px w-full bg-white/8"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />

        {/* ── FEATURED Project — Stay Original ── */}
        {featured && (
          <div className="mb-16 lg:mb-20">
            <ProjectCard
              project={featured}
              index={0}
              className="w-full"
            />
          </div>
        )}

        {/* ── Secondary row — Peniel + Lifeless (side-by-side) ── */}
        {secondary.length >= 2 && (
          <div className="mb-16 lg:mb-20 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            <ProjectCard project={secondary[0]} index={1} />
            <ProjectCard project={secondary[1]} index={2} />
          </div>
        )}

        {/* ── Fourth project — Wave Speedway (full width) ── */}
        {secondary.length >= 3 && (
          <div className="mb-20">
            <ProjectCard
              project={secondary[2]}
              index={3}
              className="w-full"
            />
          </div>
        )}

        {/* ── Bottom divider ── */}
        <motion.div
          className="mb-14 h-px w-full bg-white/8"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />

        {/* ── View All Work CTA ── */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-mono tracking-[0.15em] uppercase text-white/30">
            {portfolioProjects.length} selected productions
          </p>

          <Link
            href="/work"
            id="view-all-work-cta"
            className="group/cta relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/15 px-7 py-3.5 text-sm font-mono tracking-[0.18em] uppercase text-white transition-all duration-500 hover:border-kendits-turquoise/60 hover:text-kendits-turquoise focus:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise"
            style={{ transition: "all 0.4s ease, box-shadow 0.4s ease" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 30px rgba(0,238,220,0.2), 0 0 60px rgba(0,238,220,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            {/* Hover fill */}
            <span
              className="absolute inset-0 -z-10 translate-x-[-101%] bg-kendits-turquoise/8 transition-transform duration-500 ease-out group-hover/cta:translate-x-0"
              aria-hidden="true"
            />
            View All Work
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              aria-hidden="true"
            >
              <path
                d="M1 13L13 1M13 1H5M13 1v8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
