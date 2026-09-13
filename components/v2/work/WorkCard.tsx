"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { KenditsProject } from "@/data/projects";
import { cn } from "@/lib/utils";

interface WorkCardProps {
  project: KenditsProject;
  index: number;
  className?: string;
}

const categoryColor: Record<string, string> = {
  "LIVE PERFORMANCE": "text-kendits-turquoise",
  "SHORT FILM": "text-amber-400",
  "MUSIC VIDEO": "text-violet-400",
  "EVENT RECAP": "text-emerald-400",
  COMMERCIAL: "text-rose-400",
  BRANDING: "text-sky-400",
};

export const WorkCard: React.FC<WorkCardProps> = ({
  project,
  index,
  className,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const catColor = categoryColor[project.category] ?? "text-white/60";

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShouldLoadVideo(true);
    if (videoRef.current && project.preview) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.article
      className={cn("group relative flex flex-col", className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Media ── */}
      <Link
        href={`/work/${project.slug}`}
        className="relative block w-full overflow-hidden bg-[#0a0a0a] focus:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise rounded-sm"
        aria-label={`View ${project.title} case study`}
        style={{ aspectRatio: project.featured ? "16/9" : "4/3" }}
      >
        {/* Thumbnail */}
        <img
          src={project.thumbnail}
          alt={`${project.title} — ${project.category}`}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-all duration-700",
            isHovered && videoReady && project.preview
              ? "opacity-0 scale-105"
              : "opacity-100 scale-100 group-hover:scale-[1.03]"
          )}
          loading="lazy"
        />

        {/* Optional video or image preview */}
        {project.preview && (
          project.preview.match(/\.(webp|gif)$/i) ? (
            <img
              src={project.preview}
              alt={`${project.title} Preview`}
              onLoad={() => setVideoReady(true)}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                isHovered && videoReady ? "opacity-100" : "opacity-0"
              )}
              aria-hidden="true"
            />
          ) : (
            <video
              ref={videoRef}
              src={shouldLoadVideo ? project.preview : undefined}
              muted
              playsInline
              loop
              preload="none"
              onCanPlay={() => setVideoReady(true)}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                isHovered && videoReady ? "opacity-100" : "opacity-0"
              )}
              aria-hidden="true"
            />
          )
        )}

        {/* Bottom gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/90 via-[#030508]/20 to-transparent" />

        {/* Index counter */}
        <span className="absolute top-4 left-5 text-[11px] font-mono tracking-[0.2em] text-white/40">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Hover pill */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-5 py-2.5 text-xs font-mono tracking-[0.18em] text-white backdrop-blur-md">
            {project.preview ? (
              <>
                <svg width="9" height="11" viewBox="0 0 9 11" fill="currentColor" aria-hidden="true">
                  <path d="M0 0l9 5.5L0 11V0z" />
                </svg>
                PLAY
              </>
            ) : (
              <>
                VIEW
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M1 9L9 1M9 1H3M9 1v6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </span>
        </motion.div>
      </Link>

      {/* ── Metadata ── */}
      <div className="mt-5 flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <span className={cn("text-[11px] font-mono tracking-[0.18em] uppercase", catColor)}>
            {project.category}
          </span>
          {project.year && (
            <>
              <span className="text-white/20 text-[10px]">·</span>
              <span className="text-[11px] font-mono text-white/35">{project.year}</span>
            </>
          )}
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="group/title focus:outline-none focus-visible:ring-1 focus-visible:ring-kendits-turquoise rounded-sm"
          tabIndex={-1}
          aria-hidden="true"
        >
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-kendits-turquoise transition-colors duration-300 leading-tight">
            {project.title}
          </h2>
        </Link>

        {project.client && (
          <p className="text-sm text-white/40 font-light">{project.client}</p>
        )}
      </div>
    </motion.article>
  );
};
