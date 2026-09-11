"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Link from "next/link";

export const StudioCTA: React.FC = () => {
  return (
    <section className="py-32 md:py-48 relative border-t border-white/5 bg-canvas overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-kendits-turquoise/5 rounded-full blur-[120px] pointer-events-none" />

      <Container width="contained" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-tighter text-white mb-12">
            Have something<br />
            worth creating?
          </h2>

          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 px-10 py-5 text-sm md:text-base font-mono tracking-[0.2em] uppercase text-white transition-all duration-700 hover:border-kendits-turquoise hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-kendits-turquoise"
          >
            <span
              className="absolute inset-0 -z-10 translate-y-[101%] bg-kendits-turquoise transition-transform duration-700 ease-[0.32,0.72,0,1] group-hover:translate-y-0"
              aria-hidden="true"
            />
            Let's Talk
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};
