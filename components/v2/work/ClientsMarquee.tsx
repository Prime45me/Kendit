"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { clients, Client } from "@/data/clients";

export const ClientsMarquee: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <section
      aria-labelledby="clients-worked-with-heading"
      className="relative py-24 sm:py-32 border-t border-white/8 overflow-hidden bg-canvas"
    >
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[25vw] rounded-full bg-kendits-turquoise/[0.03] blur-[140px]"
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-kendits-turquoise mb-2">
              Selected Collaborations
            </p>
            <h2
              id="clients-worked-with-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white"
            >
              Clients We&apos;ve Worked With
            </h2>
          </div>
          <p className="text-xs font-mono uppercase tracking-widest text-white/40">
            06 Studio Engagements
          </p>
        </div>
      </div>

      {/* Screen-reader accessible client list (hidden visually, read by assistive tech once) */}
      <div className="sr-only">
        <ul>
          {clients.map((c) => (
            <li key={c.id}>
              {c.name} — {c.category}
            </li>
          ))}
        </ul>
      </div>

      {/* Marquee Track Container with Vignette Gradient Edges */}
      <div className="relative w-full overflow-hidden group">
        {/* Left gradient fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-canvas via-canvas/80 to-transparent"
        />
        {/* Right gradient fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-canvas via-canvas/80 to-transparent"
        />

        {/* Marquee Inner Track */}
        {prefersReducedMotion ? (
          /* Static wrap layout for reduced motion users */
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 py-8">
            {clients.map((client) => (
              <ClientItem key={client.id} client={client} />
            ))}
          </div>
        ) : (
          /* Animated Continuous Marquee */
          <div
            className="flex w-max items-center whitespace-nowrap py-8 will-change-transform animate-scroll hover:[animation-play-state:paused]"
            style={{ "--animation-duration": "32s" } as React.CSSProperties}
          >
            {/* First Set */}
            <div className="flex shrink-0 items-center gap-12 sm:gap-20">
              {clients.map((client) => (
                <ClientItem key={`c1-${client.id}`} client={client} />
              ))}
            </div>

            {/* Duplicate Set for Continuous Loop (aria-hidden for accessibility) */}
            <div aria-hidden="true" className="flex shrink-0 items-center gap-12 sm:gap-20">
              {clients.map((client) => (
                <ClientItem key={`c2-${client.id}`} client={client} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const ClientItem: React.FC<{ client: Client }> = ({ client }) => {
  const logoScale = {
    "pc-construction": "scale-[1.18]",
    "noble-games": "scale-[1.55]",
    "peniel-educational-complex": "scale-[1.35]",
    "footwear-empire": "scale-[1.3]",
    luxstays: "scale-[1.35]",
    "raku-automobiles": "scale-[1.45]",
  }[client.id] ?? "scale-[1.35]";

  return (
    <div className="group/item inline-flex items-center gap-10 sm:gap-16 select-none cursor-default">
      {client.logo ? (
        <div className="relative h-20 w-64 sm:h-24 sm:w-80 md:h-28 md:w-[22rem] opacity-75 group-hover/item:opacity-100 group-hover/item:scale-105 transition-all duration-300">
          <Image
            src={client.logo}
            alt={client.name}
            fill
            sizes="(min-width: 768px) 352px, 320px"
            className={`${logoScale} object-contain brightness-125 contrast-125 sm:scale-[1.65] md:scale-[1.75]`}
          />
        </div>
      ) : (
        <span className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white/40 group-hover/item:text-white transition-colors duration-300">
          {client.name}
        </span>
      )}

      {/* Subtle Editorial Dot Separator */}
      <span
        aria-hidden="true"
        className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-kendits-turquoise transition-colors duration-300"
      />
    </div>
  );
};
