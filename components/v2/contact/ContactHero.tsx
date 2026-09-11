"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/motion";

export const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[75vw] h-[35vw] rounded-full bg-kendits-turquoise/05 blur-[140px]"
      />

      <Container width="wide" className="relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-kendits-turquoise animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-kendits-turquoise">
              Initiate Collaboration
            </span>
          </motion.div>

          {/* Primary Typographic Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase text-text-primary leading-[1.05]"
          >
            Start a <span className="text-gradient-kendits">conversation</span>.
          </motion.h1>

          {/* Editorial Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-text-secondary font-light max-w-3xl leading-relaxed"
          >
            We collaborate with ambitious brands, visionary artists, and modern enterprises worldwide.
            Tell us about your vision, and let&apos;s build something cinematic together.
          </motion.p>

          {/* Quick Studio Status Badges */}
          <motion.div
            variants={fadeIn}
            className="mt-10 flex flex-wrap items-center gap-3 text-xs font-mono text-text-muted"
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Studio: Accra, Ghana (GMT)</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
              <span>Response Time: &lt; 24–48 Hours</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
              <span>Global Reach: Worldwide</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
