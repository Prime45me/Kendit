"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { clients } from "@/data/clients";

export interface ClientsProofProps {
  className?: string;
}

/**
 * CLIENTS PROOF — Phase 3 Refinement (Luminosity Elevated)
 *
 * Minimal, restrained proof section presenting verified clients.
 * Dark studio + luminous glow on interaction = premium credibility.
 */
export const ClientsProof: React.FC<ClientsProofProps> = ({ className }) => {
  return (
    <section
      aria-label="Clients We've Worked With"
      className="relative py-20 sm:py-28 md:py-36 bg-canvas border-b border-white/[0.07] overflow-hidden z-10"
    >
      {/* Warm mixed bloom — centre, giving each logo card a warm glow foundation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[30vw] rounded-full blur-[180px] opacity-35"
        style={{
          background: "radial-gradient(ellipse, rgba(0, 238, 220, 0.16) 0%, rgba(125, 21, 137, 0.12) 50%, transparent 75%)",
        }}
      />

      <Container width="wide" className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-mono tracking-[0.28em] uppercase text-kendits-cyan mb-2">
              Collaborations
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
              Clients We&apos;ve Worked With
            </h2>
          </motion.div>

          <p className="text-xs font-mono uppercase tracking-widest text-white/40">
            Selected Commercial &amp; Brand Engagements
          </p>
        </div>

        {/* Animated gradient divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 h-px w-full bg-gradient-to-r from-kendits-cyan/30 via-white/8 to-transparent"
          aria-hidden="true"
        />

        {/* Restrained Minimal Client Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {clients.map((client, idx) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group/client flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl border border-white/[0.07] bg-white/[0.012] hover:border-kendits-cyan/35 hover:bg-white/[0.03] transition-all duration-400 min-h-[140px] sm:min-h-[156px]"
              style={{ transition: "all 0.4s ease, box-shadow 0.4s ease" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px rgba(0,238,220,0.1), 0 0 60px rgba(0,238,220,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {client.logo ? (
                <div className="relative h-20 w-full sm:h-24 opacity-85 group-hover/client:opacity-100 group-hover/client:scale-105 transition-all duration-400">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(min-width: 1024px) 170px, (min-width: 640px) 30vw, 45vw"
                    className="scale-[1.25] object-contain brightness-125 contrast-125 sm:scale-[1.35]"
                  />
                </div>
              ) : (
                <span className="text-sm font-bold uppercase tracking-wider text-white/35 group-hover/client:text-white/90 transition-colors duration-300 text-center">
                  {client.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

