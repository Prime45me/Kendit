"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Link from "next/link";

export const BehindTheWork: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <Container width="wide">
        
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-kendits-turquoise mb-6"
            >
              Behind The Work
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white max-w-2xl"
            >
              The Atmosphere Behind the Lens
            </motion.h3>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 text-sm font-mono tracking-[0.15em] uppercase text-text-secondary hover:text-kendits-turquoise transition-colors"
            >
              See the work 
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Masonry-style abstract visual grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-8 aspect-video bg-white/5 overflow-hidden"
          >
            <img
              src="/project1.jpeg"
              alt="Live Production Set"
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-4 aspect-square md:aspect-auto bg-white/5 overflow-hidden"
          >
            <img
              src="/webp/cinematic_lens.webp"
              alt="Camera Gear"
              className="w-full h-full object-cover grayscale opacity-40 mix-blend-screen hover:grayscale-0 hover:opacity-80 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="md:col-span-5 aspect-[4/3] bg-white/5 overflow-hidden"
          >
            <img
              src="/project3.jpeg"
              alt="Color Grading Session"
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:col-span-7 aspect-[4/3] bg-white/5 overflow-hidden"
          >
            <img
              src="/project4.jpeg"
              alt="On location shoot"
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
