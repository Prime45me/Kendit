"use client";

/**
 * Case Study Components — Phase 5
 * Kendits Creative Studios V2
 *
 * All sections render conditionally based on verified data.
 * No section is forced if its data is null/undefined.
 */

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { KenditsProject } from "@/data/projects";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// Shared motion config
// ─────────────────────────────────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const categoryColor: Record<string, string> = {
  "LIVE PERFORMANCE": "text-kendits-turquoise",
  "SHORT FILM": "text-amber-400",
  "MUSIC VIDEO": "text-violet-400",
  "EVENT RECAP": "text-emerald-400",
  COMMERCIAL: "text-rose-400",
  BRANDING: "text-sky-400",
};

// ─────────────────────────────────────────────────────────────────────────────
// ProjectHero
// ─────────────────────────────────────────────────────────────────────────────
export const ProjectHero: React.FC<{ project: KenditsProject }> = ({ project }) => {
  const heroSrc = project.heroImage ?? project.thumbnail;
  const catColor = categoryColor[project.category] ?? "text-white/60";

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "70vh" }}
      aria-label={`${project.title} project hero`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroSrc}
          alt={`${project.title} — hero image`}
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/60 to-canvas/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full min-h-[70vh] px-5 sm:px-8 lg:px-16 pb-16 pt-40 max-w-[1440px] mx-auto">
        <motion.div {...fadeUp} className="max-w-3xl">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 mb-8 text-[11px] font-mono tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors group focus:outline-none focus-visible:ring-1 focus-visible:ring-kendits-turquoise rounded-sm"
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5" aria-hidden="true">
              <path d="M13 5H1M1 5L5 1M1 5l4 4" />
            </svg>
            All Work
          </Link>

          {/* Category eyebrow */}
          <p className={cn("mb-3 text-[11px] font-mono tracking-[0.25em] uppercase", catColor)}>
            {project.category}
            {project.year && <span className="text-white/30 ml-3">· {project.year}</span>}
          </p>

          {/* Title */}
          <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-black leading-[0.92] tracking-tight text-white uppercase">
            {project.title}
          </h1>

          {/* Client */}
          {project.client && (
            <p className="mt-4 text-base text-white/50 font-light">
              {project.client}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ProjectMeta
// ─────────────────────────────────────────────────────────────────────────────
export const ProjectMeta: React.FC<{ project: KenditsProject }> = ({ project }) => {
  const metaItems = [
    { label: "Client", value: project.client },
    { label: "Category", value: project.category },
    { label: "Year", value: project.year?.toString() },
    { label: "Role", value: project.role },
  ].filter((item) => item.value);

  if (metaItems.length === 0) return null;

  return (
    <motion.section
      {...fadeUp}
      className="w-full border-t border-b border-white/8 py-8"
      aria-label="Project details"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {metaItems.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <dt className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/35">
                {item.label}
              </dt>
              <dd className="text-sm font-medium text-white leading-snug">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ProjectServices
// ─────────────────────────────────────────────────────────────────────────────
export const ProjectServices: React.FC<{ services: string[] }> = ({ services }) => {
  if (!services.length) return null;

  return (
    <motion.div {...fadeUp} className="flex flex-wrap gap-2">
      {services.map((s) => (
        <span
          key={s}
          className="rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] font-mono tracking-[0.15em] uppercase text-white/60"
        >
          {s}
        </span>
      ))}
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ProjectOverview
// ─────────────────────────────────────────────────────────────────────────────
export const ProjectOverview: React.FC<{ project: KenditsProject }> = ({ project }) => {
  if (!project.overview && !project.services?.length) return null;

  return (
    <section
      className="w-full py-16 lg:py-24"
      aria-label="Project overview"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          {/* Left: label + services */}
          <motion.div {...fadeUp} className="flex flex-col gap-6">
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-kendits-turquoise">
              Overview
            </p>
            {project.services && project.services.length > 0 && (
              <ProjectServices services={project.services} />
            )}
          </motion.div>

          {/* Right: overview text */}
          {project.overview && (
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-lg sm:text-xl text-white/70 font-light leading-relaxed"
            >
              {project.overview}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ProjectVideo — full video embed
// ─────────────────────────────────────────────────────────────────────────────
export const ProjectVideo: React.FC<{ src: string; poster?: string; title: string }> = ({
  src,
  poster,
  title,
}) => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const handleToggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
    } else {
      ref.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <motion.section
      {...fadeUp}
      className="w-full"
      aria-label={`${title} — project video`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="relative w-full overflow-hidden rounded-sm bg-[#0a0a0a]" style={{ aspectRatio: "16/9" }}>
          <video
            ref={ref}
            src={src}
            poster={poster}
            preload="metadata"
            playsInline
            onEnded={() => setPlaying(false)}
            className="h-full w-full object-cover"
            aria-label={`${title} — full project video`}
          />

          {/* Play/pause overlay — hidden when playing */}
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                onClick={handleToggle}
                aria-label={`Play ${title}`}
                className="group flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:bg-kendits-turquoise/20 hover:border-kendits-turquoise/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise"
              >
                <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor" aria-hidden="true" className="ml-1">
                  <path d="M0 0l20 12L0 24V0z" />
                </svg>
              </button>
            </div>
          )}

          {/* Pause button — visible when playing */}
          {playing && (
            <button
              onClick={handleToggle}
              aria-label="Pause video"
              className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md border border-white/15 opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise"
            >
              <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
                <rect x="0" y="0" width="4" height="14" />
                <rect x="8" y="0" width="4" height="14" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </motion.section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ProjectExternalLink — when no local video exists
// ─────────────────────────────────────────────────────────────────────────────
export const ProjectExternalLink: React.FC<{
  href: string;
  title: string;
  thumbnail: string;
}> = ({ href, title, thumbnail }) => (
  <motion.section
    {...fadeUp}
    className="w-full"
    aria-label={`${title} — view on platform`}
  >
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full overflow-hidden rounded-sm bg-[#0a0a0a] focus:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise"
        aria-label={`Watch ${title} on external platform`}
        style={{ aspectRatio: "16/9" }}
      >
        <img
          src={thumbnail}
          alt={`${title} — project thumbnail`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur-md mb-4 group-hover:border-kendits-turquoise/40 transition-colors">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="white" aria-hidden="true" className="ml-1">
                <path d="M0 0l20 12L0 24V0z" />
              </svg>
            </div>
            <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/60 group-hover:text-white transition-colors">
              Watch on Platform
              <svg className="inline ml-2 -mt-0.5" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M1 9L9 1M9 1H3M9 1v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </p>
          </div>
        </div>
      </a>
    </div>
  </motion.section>
);

// ─────────────────────────────────────────────────────────────────────────────
// ProjectApproachBlock — challenge / approach / result in a 3-column layout
// ─────────────────────────────────────────────────────────────────────────────
export const ProjectApproachBlock: React.FC<{ project: KenditsProject }> = ({ project }) => {
  const blocks = [
    { label: "Challenge", text: project.challenge },
    { label: "Approach", text: project.approach },
    { label: "Result", text: project.result },
  ].filter((b) => b.text);

  if (blocks.length === 0) return null;

  return (
    <section
      className="w-full py-16 lg:py-24 border-t border-white/8"
      aria-label="Project approach"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        <motion.p
          {...fadeUp}
          className="mb-12 text-[11px] font-mono tracking-[0.3em] uppercase text-kendits-turquoise"
        >
          Process
        </motion.p>
        <div className={cn("grid gap-12", blocks.length === 1 ? "grid-cols-1 max-w-2xl" : blocks.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-3")}>
          {blocks.map((block, i) => (
            <motion.div
              key={block.label}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-white/40">
                {block.label}
              </h3>
              <p className="text-base text-white/70 font-light leading-relaxed">
                {block.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ProjectGallery — optional image grid
// ─────────────────────────────────────────────────────────────────────────────
export const ProjectGallery: React.FC<{ images: string[]; title: string }> = ({
  images,
  title,
}) => {
  if (!images.length) return null;

  return (
    <section
      className="w-full py-16 border-t border-white/8"
      aria-label={`${title} — project gallery`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        <motion.p {...fadeUp} className="mb-8 text-[11px] font-mono tracking-[0.3em] uppercase text-kendits-turquoise">
          Gallery
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <motion.div
              key={src}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              className="overflow-hidden rounded-sm aspect-video bg-[#0a0a0a]"
            >
              <img
                src={src}
                alt={`${title} — gallery image ${i + 1}`}
                className="h-full w-full object-cover hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ProjectCredits
// ─────────────────────────────────────────────────────────────────────────────
export const ProjectCredits: React.FC<{ credits: string }> = ({ credits }) => (
  <motion.section
    {...fadeUp}
    className="w-full py-10 border-t border-white/8"
    aria-label="Project credits"
  >
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
      <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/25 mb-2">
        Credits
      </p>
      <p className="text-sm text-white/50 font-light">{credits}</p>
    </div>
  </motion.section>
);

// ─────────────────────────────────────────────────────────────────────────────
// NextProject — bottom navigation
// ─────────────────────────────────────────────────────────────────────────────
export const NextProject: React.FC<{
  prev: KenditsProject | null;
  next: KenditsProject | null;
}> = ({ prev, next }) => (
  <section
    className="w-full border-t border-white/8 py-12"
    aria-label="Project navigation"
  >
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Return to archive */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors group focus:outline-none focus-visible:ring-1 focus-visible:ring-kendits-turquoise rounded-sm"
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5" aria-hidden="true">
            <path d="M13 5H1M1 5L5 1M1 5l4 4" />
          </svg>
          All Work
        </Link>

        <div className="flex items-center gap-6">
          {/* Previous */}
          {prev && (
            <Link
              href={`/work/${prev.slug}`}
              className="flex flex-col items-end gap-1 text-right group focus:outline-none focus-visible:ring-1 focus-visible:ring-kendits-turquoise rounded-sm"
            >
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/30 group-hover:text-white/60 transition-colors">
                ← Prev
              </span>
              <span className="text-sm font-semibold text-white/60 group-hover:text-white transition-colors">
                {prev.title}
              </span>
            </Link>
          )}

          {prev && next && (
            <span className="text-white/15" aria-hidden="true">|</span>
          )}

          {/* Next */}
          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="flex flex-col items-start gap-1 group focus:outline-none focus-visible:ring-1 focus-visible:ring-kendits-turquoise rounded-sm"
            >
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/30 group-hover:text-white/60 transition-colors">
                Next →
              </span>
              <span className="text-sm font-semibold text-white/60 group-hover:text-white transition-colors">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  </section>
);
