"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export interface ClientsProofProps {
  className?: string;
}

const clientStories = [
  {
    client: "PC Construction",
    project: "Commercial & Civil Infrastructure",
    quote:
      "Kendits helped us turn the scale and precision of our work into a visual story that feels as strong as the projects we deliver.",
    detail: "Client perspective · Commercial visual direction",
  },
  {
    client: "Noble Games",
    project: "Interactive Gaming & Entertainment",
    quote:
      "They understood the energy behind our world and translated it into visuals that feel immediate, bold, and built to hold attention.",
    detail: "Client perspective · Brand and campaign content",
  },
  {
    client: "Peniel Educational Complex",
    project: "Academic & Institutional",
    quote:
      "Kendits captured the spirit of our community with care, giving us a film that lets every important moment live beyond the event itself.",
    detail: "Client perspective · Event coverage and motion graphics",
  },
  {
    client: "Footwear Empire",
    project: "Fashion & Retail Lifestyle",
    quote:
      "Our products were given the visual confidence they deserved. The work feels considered, current, and unmistakably ours.",
    detail: "Client perspective · Brand and product visuals",
  },
  {
    client: "Luxstays",
    project: "Luxury Hospitality & Living",
    quote:
      "They made the atmosphere of our spaces tangible, creating visuals that invite people to imagine themselves already there.",
    detail: "Client perspective · Hospitality storytelling",
  },
  {
    client: "Raku Automobiles",
    project: "Automotive & Performance",
    quote:
      "The final direction gives our vehicles a sense of movement and character. It feels premium without losing the thrill at the heart of the brand.",
    detail: "Client perspective · Automotive visual direction",
  },
];

/** Client testimonial-style perspectives presented in an editorial carousel. */
export const ClientsProof: React.FC<ClientsProofProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % clientStories.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const activeStory = clientStories[activeIndex];

  const showStory = (index: number) => {
    setActiveIndex((index + clientStories.length) % clientStories.length);
  };

  return (
    <section
      aria-label="Selected client project stories"
      className={`relative overflow-hidden border-b border-white/[0.07] bg-canvas py-20 sm:py-28 md:py-36 ${className ?? ""}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px] opacity-35"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0, 238, 220, 0.16) 0%, rgba(125, 21, 137, 0.12) 50%, transparent 75%)",
        }}
      />

      <Container width="wide" className="relative z-10">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.28em] text-kendits-cyan">
              Client Testimonials
            </p>
            <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl md:text-4xl">
              What Our Clients Say
            </h2>
          </motion.div>

          <p className="text-xs font-mono uppercase tracking-widest text-white/40">
            Selected client perspectives
          </p>
        </div>

        <div
          className="h-px w-full bg-gradient-to-r from-kendits-cyan/30 via-white/8 to-transparent"
          aria-hidden="true"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            key={activeStory.client}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-kendits-cyan">
              {activeStory.client}
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-white/45">
              {activeStory.project}
            </p>
            <blockquote className="mt-8 max-w-3xl text-2xl font-light leading-snug text-white sm:text-3xl md:text-4xl">
              &ldquo;{activeStory.quote}&rdquo;
            </blockquote>
            <p className="mt-7 text-xs font-mono uppercase tracking-[0.16em] text-white/40">
              {activeStory.detail}
            </p>
          </motion.div>

          <div className="flex items-center gap-3 lg:pb-1">
            <button
              type="button"
              onClick={() => showStory(activeIndex - 1)}
              aria-label="Previous client story"
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-lg text-white/70 transition-colors hover:border-kendits-cyan hover:text-kendits-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kendits-cyan"
            >
              <span aria-hidden="true">&larr;</span>
            </button>
            <div
              className="flex items-center gap-2 px-2"
              aria-label={`Story ${activeIndex + 1} of ${clientStories.length}`}
            >
              {clientStories.map((story, index) => (
                <button
                  key={story.client}
                  type="button"
                  onClick={() => showStory(index)}
                  aria-label={`Show ${story.client} story`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-1.5 transition-all ${index === activeIndex ? "w-8 bg-kendits-cyan" : "w-1.5 bg-white/25 hover:bg-white/60"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => showStory(activeIndex + 1)}
              aria-label="Next client story"
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-lg text-white/70 transition-colors hover:border-kendits-cyan hover:text-kendits-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kendits-cyan"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
