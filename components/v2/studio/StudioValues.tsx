"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const values = [
  "Excellence",
  "Integrity",
  "Discipline",
  "Respect",
  "Teamwork",
  "Creativity",
  "Godliness",
];

export const StudioValues: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <Container width="contained">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-kendits-turquoise sticky top-32"
            >
              What We Believe
            </motion.h2>
          </div>

          <div className="md:col-span-8 flex flex-col gap-6 md:gap-10">
            {values.map((value, i) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group border-b border-white/10 pb-6 md:pb-10 flex items-baseline gap-6 md:gap-12"
              >
                <span className="text-sm font-mono text-kendits-turquoise/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-3xl md:text-5xl lg:text-7xl font-light uppercase tracking-tight text-text-secondary group-hover:text-white transition-colors duration-500">
                  {value}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
