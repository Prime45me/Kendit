"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { visualStories, VisualStory, StoryCategory } from "@/data/visualStories";

const allCategories: ("All" | StoryCategory)[] = [
  "All",
  "Photography",
  "Campaign Content",
  "BTS",
  "Social / Graphic Content",
  "Short-form Visuals",
];

export const VisualStoriesGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | StoryCategory>("All");
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null);

  const filteredStories =
    activeCategory === "All"
      ? visualStories
      : visualStories.filter((s) => s.category === activeCategory);

  const selectedStory = selectedStoryIndex === null ? null : filteredStories[selectedStoryIndex];

  useEffect(() => {
    if (selectedStoryIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedStoryIndex(null);
      } else if (event.key === "ArrowRight") {
        setSelectedStoryIndex((current) =>
          current === null ? 0 : (current + 1) % filteredStories.length,
        );
      } else if (event.key === "ArrowLeft") {
        setSelectedStoryIndex((current) =>
          current === null
            ? 0
            : (current - 1 + filteredStories.length) % filteredStories.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredStories.length, selectedStoryIndex]);

  return (
    <section
      id="brand-creative-work"
      aria-labelledby="visual-stories-heading"
      className="relative py-24 sm:py-36 border-t border-white/8 bg-canvas overflow-hidden"
    >
      {/* Background Subtle Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-1/4 w-[50vw] h-[25vw] rounded-full bg-kendits-turquoise/[0.04] blur-[150px]"
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 border-b border-white/8 pb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-kendits-turquoise animate-pulse" />
              <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-kendits-turquoise">
                Beyond The Finished Piece
              </p>
            </div>
            <h2
              id="visual-stories-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none"
            >
              Content / <span className="text-gradient-kendits">Visual Stories</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/50 font-light leading-relaxed max-w-xl">
              Editorial stills, on-set moments, social campaigns, and production frames.
              The wider visual output surrounding our primary studio films.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 md:justify-end">
            {allCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise ${
                    isActive
                      ? "bg-kendits-turquoise text-canvas font-bold shadow-glow-cyan"
                      : "bg-white/[0.03] border border-white/10 text-white/50 hover:text-white hover:border-white/25"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Visual Reel / Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredStories.map((story, index) => {
              // Create dynamic asymmetric layout spans based on index & story orientation
              const colSpanClass =
                story.orientation === "wide"
                  ? "md:col-span-8 lg:col-span-8"
                  : story.orientation === "portrait"
                  ? "md:col-span-4 lg:col-span-4"
                  : story.orientation === "landscape"
                  ? index % 3 === 0
                    ? "md:col-span-7 lg:col-span-7"
                    : "md:col-span-5 lg:col-span-5"
                  : "md:col-span-6 lg:col-span-6";

              const aspectClass =
                story.orientation === "wide"
                  ? "aspect-[16/9] sm:aspect-[21/9]"
                  : story.orientation === "portrait"
                  ? "aspect-[3/4] sm:aspect-[4/5]"
                  : story.orientation === "square"
                  ? "aspect-square"
                  : "aspect-[16/10]";

              return (
                <motion.article
                  key={story.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-3 sm:p-4 hover:border-white/20 transition-all duration-500 overflow-hidden ${colSpanClass}`}
                >
                  {/* Image Frame */}
                  <button
                    type="button"
                    aria-label={`Enlarge ${story.title}`}
                    onClick={() => setSelectedStoryIndex(index)}
                    className={`relative block w-full rounded-xl overflow-hidden bg-white/5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise ${aspectClass}`}
                  >
                    <Image
                      src={story.src}
                      alt={story.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />


                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider uppercase text-kendits-turquoise">
                        {story.category}
                      </span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-3 inset-x-3 z-10">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-kendits-turquoise transition-colors">
                        {story.title}
                      </h3>
                      {story.caption && (
                        <p className="mt-1 text-xs text-white/70 font-light line-clamp-2 leading-relaxed">
                          {story.caption}
                        </p>
                      )}
                    </div>
                  </button>

                  {/* Metadata Bar below media */}
                  <div className="mt-3 px-1 flex items-center justify-between text-[11px] font-mono text-white/30">
                    <span>{story.category}</span>
                    {story.relatedTitle && (
                      <span className="text-white/40">From: {story.relatedTitle}</span>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedStory && selectedStoryIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedStory.title} image viewer`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStoryIndex(null)}
          >
            <div
              className="relative flex h-full w-full max-w-6xl items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedStory.src}
                alt={selectedStory.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-16 sm:px-6 sm:pb-6">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-kendits-turquoise">
                    {selectedStory.category}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white sm:text-2xl">
                    {selectedStory.title}
                  </h3>
                </div>
                <span className="shrink-0 text-xs font-mono text-white/50">
                  {selectedStoryIndex + 1} / {filteredStories.length}
                </span>
              </div>

              <button
                type="button"
                aria-label="Close image viewer"
                onClick={() => setSelectedStoryIndex(null)}
                className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white transition-colors hover:border-kendits-turquoise hover:text-kendits-turquoise sm:right-4 sm:top-4"
              >
                <span aria-hidden="true">&times;</span>
              </button>

              {filteredStories.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() =>
                      setSelectedStoryIndex(
                        (selectedStoryIndex - 1 + filteredStories.length) % filteredStories.length,
                      )
                    }
                    className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white transition-colors hover:border-kendits-turquoise hover:text-kendits-turquoise sm:left-4"
                  >
                    <span aria-hidden="true">&#8592;</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => setSelectedStoryIndex((selectedStoryIndex + 1) % filteredStories.length)}
                    className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white transition-colors hover:border-kendits-turquoise hover:text-kendits-turquoise sm:right-4"
                  >
                    <span aria-hidden="true">&#8594;</span>
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
