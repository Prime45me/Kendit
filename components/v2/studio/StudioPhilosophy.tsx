"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export const StudioPhilosophy: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-canvas-subtle">
      <Container width="contained">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-kendits-turquoise mb-8"
          >
            How We Think
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-white uppercase tracking-tight">
              [Approved Philosophy Statement on Intentionality and Craft]
            </h3>
            
            <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto pt-6">
              [Supporting philosophy copy expanding on Kendits' approach to creative thinking, visual direction, and storytelling in media production. This area is preserved for the official text once available.]
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
