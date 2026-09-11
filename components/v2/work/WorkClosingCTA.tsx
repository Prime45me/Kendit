"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const WorkClosingCTA: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-40 border-t border-white/8 bg-canvas overflow-hidden">
      {/* Subtle Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[35vw] rounded-full bg-kendits-turquoise/[0.04] blur-[150px]"
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-kendits-turquoise mb-4">
            Next Project
          </p>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
            Let&apos;s Create <br />
            <span className="text-gradient-kendits">Something</span>.
          </h2>

          <p className="text-base sm:text-lg text-white/50 font-light max-w-xl mb-10 leading-relaxed">
            Ready to shape your brand narrative or produce a high-impact visual campaign?
            Our studio is open for new commissions worldwide.
          </p>

          <Link href="/contact">
            <Button variant="gradient" size="lg" className="min-w-[220px]">
              Start a Project →
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
