"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const approaches = [
  {
    step: "01",
    title: "Understand",
    description: "Immersing ourselves in the brand's core objective and creative ambition before sketching the first frame.",
  },
  {
    step: "02",
    title: "Explore",
    description: "Developing visual directions, storyboards, and conceptual treatments that align with the required emotional impact.",
  },
  {
    step: "03",
    title: "Create",
    description: "Executing the vision on set or in-studio with cinematic precision, capturing high-quality raw material.",
  },
  {
    step: "04",
    title: "Refine",
    description: "Meticulous post-production, color grading, and motion graphics to polish the narrative into its final form.",
  },
  {
    step: "05",
    title: "Deliver",
    description: "Handing over optimized, platform-ready assets that exceed technical and creative expectations.",
  },
];

export const CreativeApproach: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-canvas-subtle border-y border-white/5">
      <Container width="contained">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-kendits-turquoise mb-6">
                How We Work
              </h2>
              <h3 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
                The Creative<br />Approach
              </h3>
              <p className="text-text-secondary text-lg font-light leading-relaxed max-w-sm">
                A disciplined methodology designed to translate abstract concepts into powerful visual realities.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-12 md:gap-16">
            {approaches.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 border-l border-white/10"
              >
                {/* Timeline dot */}
                <span className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-kendits-turquoise" />
                
                <h4 className="text-2xl md:text-3xl font-light uppercase tracking-wide text-white mb-4">
                  <span className="text-kendits-turquoise/50 text-sm font-mono mr-4 block mb-2">{item.step}</span>
                  {item.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
