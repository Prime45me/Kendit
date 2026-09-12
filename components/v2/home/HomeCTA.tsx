"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export interface HomeCTAProps {
  className?: string;
}

/**
 * HOME CTA — Phase 3 Refinement
 *
 * Cinematic closing invitation for the homepage.
 * Natural conclusion of the creative story, guiding visitors to /contact.
 */
export const HomeCTA: React.FC<HomeCTAProps> = ({ className }) => {
  return (
    <section
      aria-label="Studio Inquiry Invitation"
      className="relative py-32 sm:py-44 md:py-52 bg-canvas overflow-hidden z-10"
    >
      {/* Dual Centered Ambient Light Blooms (Cyan + Purple) — strongest on homepage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[45vw] rounded-full blur-[170px] opacity-40"
        style={{
          background: "radial-gradient(ellipse, rgba(0, 238, 220, 0.22) 0%, rgba(125, 21, 137, 0.18) 45%, transparent 75%)",
        }}
      />

      <Container width="contained" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Eyebrow marker */}
          <div className="flex items-center gap-2.5 mb-7">
            <span className="w-2.5 h-2.5 rounded-full bg-kendits-cyan animate-ping opacity-75" />
            <span className="w-2 h-2 -ml-[18px] rounded-full bg-kendits-cyan" />
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-kendits-cyan">
              Start A Project
            </p>
          </div>

          {/* Primary CTA Heading — largest and most commanding on the page */}
          <h2 className="text-[clamp(3rem,9vw,9rem)] font-black uppercase tracking-tight text-white mb-8 leading-[0.92]">
            Let&apos;s Create <br />
            <span className="text-gradient-kendits">Something.</span>
          </h2>

          <p className="text-base sm:text-xl text-white/65 font-light max-w-lg mb-12 leading-relaxed">
            Have something worth creating? Whether you&apos;re commissioning a commercial film,
            defining a brand narrative, or capturing live performance, our studio is open for new
            commissions worldwide.
          </p>

          <Link href="/contact" id="homepage-final-cta">
            <Button
              variant="gradient"
              size="lg"
              className="min-w-[260px] text-xs sm:text-sm font-mono tracking-[0.2em] uppercase shadow-[0_0_40px_rgba(0,238,220,0.25)] hover:shadow-[0_0_60px_rgba(0,238,220,0.4)] transition-shadow duration-500"
            >
              Start a Conversation →
            </Button>
          </Link>

          {/* Minimal Direct Note */}
          <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-xs font-mono uppercase tracking-widest text-white/40">
            <span>Accra &amp; Koforidua, Ghana</span>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <span>Directing Worldwide</span>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <a
              href="mailto:kenditscreativestudios@gmail.com"
              className="text-white/60 hover:text-kendits-turquoise transition-colors"
            >
              kenditscreativestudios@gmail.com
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
