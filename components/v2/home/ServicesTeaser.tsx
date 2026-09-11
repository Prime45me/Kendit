"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { services } from "@/data/services";

export interface ServicesTeaserProps {
  className?: string;
}

/**
 * SERVICES TEASER — Phase 3 Refinement (Luminosity Elevated)
 *
 * Concise homepage preview of studio capabilities.
 * Dark environment + luminous color — each card feels lit from within.
 */
export const ServicesTeaser: React.FC<ServicesTeaserProps> = ({ className }) => {
  return (
    <section
      id="capabilities"
      aria-label="What We Create"
      className="relative py-24 sm:py-36 md:py-44 bg-canvas border-b border-white/[0.07] overflow-hidden z-10"
    >
      {/* Purple bloom — dominant on the left side of this section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-24 w-[55vw] h-[45vw] rounded-full blur-[160px] opacity-45"
        style={{
          background: "radial-gradient(circle, rgba(125, 21, 137, 0.20) 0%, rgba(58, 16, 84, 0.08) 45%, transparent 70%)",
        }}
      />
      {/* Cyan bloom — lower right, cards glow source */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-12 w-[50vw] h-[40vw] rounded-full blur-[170px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(0, 238, 220, 0.18) 0%, rgba(14, 66, 74, 0.07) 45%, transparent 70%)",
        }}
      />

      <Container width="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Descriptor + Link */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-kendits-cyan mb-3">
                Capabilities
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-6">
                What We <br />
                <span className="text-gradient-kendits">Create.</span>
              </h2>
              <p className="text-base sm:text-lg font-light text-white/60 leading-relaxed max-w-md mb-10">
                From high-end film production to cohesive brand identity systems, we bring a cinematic
                standard of craft to every visual discipline.
              </p>

              <Link
                href="/services"
                id="explore-services-cta"
                className="group/cta inline-flex items-center gap-3 text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-white hover:text-kendits-cyan transition-colors duration-300"
              >
                <span>Explore Services</span>
                <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover/cta:border-kendits-cyan group-hover/cta:bg-kendits-cyan/10 group-hover/cta:translate-x-1 group-hover/cta:shadow-[0_0_20px_rgba(0,238,220,0.2)]">
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: 5 Curated Discipline Cards */}
          <div className="lg:col-span-7 space-y-3">
            {services.map((service, idx) => (
              <motion.div
                key={service.index}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group/card relative p-6 sm:p-7 rounded-xl border border-white/[0.07] bg-white/[0.015] hover:border-kendits-cyan/35 hover:bg-white/[0.03] transition-all duration-500 overflow-hidden"
                style={{ boxShadow: "0 0 0 0 rgba(0,238,220,0)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 40px rgba(0,238,220,0.08), 0 0 80px rgba(0,238,220,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 0 rgba(0,238,220,0)";
                }}
              >
                {/* Left accent bar on hover */}
                <span className="absolute left-0 top-3 bottom-3 w-[2px] rounded-r bg-kendits-cyan opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" aria-hidden="true" />

                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-[11px] font-mono tracking-widest text-kendits-cyan/70 group-hover/card:text-kendits-cyan transition-colors duration-300">
                    {service.index}
                  </span>
                  <Link
                    href={`/services`}
                    className="text-[11px] font-mono uppercase tracking-widest text-white/40 group-hover/card:text-kendits-cyan transition-colors duration-300"
                  >
                    Details ↗
                  </Link>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2 group-hover/card:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base font-light text-white/60 leading-relaxed group-hover/card:text-white/75 transition-colors duration-300">
                  {service.outcome}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

