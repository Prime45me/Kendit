"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export const BrandStory: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative border-b border-white/5">
      <Container width="contained">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Story Text */}
          <div className="md:col-span-6 lg:col-span-5 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-kendits-turquoise mb-6 md:mb-10">
                Our Story
              </h2>
              <div className="space-y-8 text-xl md:text-2xl lg:text-3xl font-light text-white leading-snug">
                <p>
                  Every great brand begins with a vision — a desire to create something that stands out and speaks with purpose.
                </p>
                <p className="text-text-secondary">
                  At Kendits Creative Studios, creativity is more than design; it's the art of shaping emotion into visual expression. 
                </p>
                <p>
                  This is where our journey began — and where the story continues.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Abstract Visual */}
          <div className="md:col-span-6 lg:col-span-6 lg:col-start-7 order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full aspect-[4/5] bg-white/5 relative overflow-hidden"
            >
              <img
                src="/webp/kendit.webp"
                alt="Kendits Studio Creative Process"
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};
