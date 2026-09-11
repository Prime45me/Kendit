"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export const StudioHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-canvas">
      {/* Dual Luminous Ambient Light Blooms (Cyan + Purple) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-[55vw] h-[45vw] rounded-full blur-[160px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(0, 238, 220, 0.20) 0%, rgba(14, 66, 74, 0.06) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 -left-20 w-[50vw] h-[40vw] rounded-full blur-[170px] opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(125, 21, 137, 0.18) 0%, rgba(58, 16, 84, 0.05) 50%, transparent 70%)",
        }}
      />

      <Container width="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          {/* Main Title */}
          <div className="lg:col-span-8 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-white leading-[0.85]"
            >
              WE ARE
              <br />
              <span className="text-gradient-kendits">KENDITS</span>
            </motion.h1>
          </div>

          {/* Intro Copy */}
          <div className="lg:col-span-4 lg:pb-4 relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-lg md:text-xl font-light text-white/75 leading-relaxed"
            >
              A premium media production and visual direction studio. We build cinematic narratives that define presence and shape emotion.
            </motion.p>
          </div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 w-full aspect-[16/9] md:aspect-[21/9] bg-surface rounded-2xl border border-white/10 relative overflow-hidden shadow-[0_0_60px_rgba(0,238,220,0.08)]"
        >
          <img
            src="/b1.svg"
            alt="Kendits Studio Atmosphere"
            className="w-full h-full object-cover opacity-85"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-transparent to-transparent opacity-60" />
        </motion.div>
      </Container>
    </section>
  );
};
