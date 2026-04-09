"use client";
import React from "react";
import { motion } from "framer-motion";

export const servicesList = [
  {
    title: "Visual Production & Editing",
    desc: "From concept to final delivery, we create cinematic visuals that tell powerful stories. We handle filming, direction, and post-production with precision — transforming raw footage into polished, high-end content through seamless editing, refined color grading, and immersive sound design. The result is a visual experience that feels intentional, premium, and unforgettable.",
  },
  {
    title: "Content Creation",
    desc: "We develop strategic, platform-ready content designed to stand out in today’s fast-moving digital space. Every piece is crafted not just to look good, but to communicate clearly, connect emotionally, and drive meaningful engagement with your audience.",
  },
  {
    title: "Brand Identity & Design",
    desc: "We build brands that are both visually striking and deeply memorable. From logos to full visual systems, we create clean, elegant designs that reflect your brand’s essence. Every element is thoughtfully aligned to ensure consistency, recognition, and a strong, elevated presence across all touchpoints.",
  },
  {
    title: "Social Media & Marketing",
    desc: "We curate and manage high-quality content that fuels growth and influence. By combining creativity with strategy, we help you maintain a consistent online presence, attract the right audience, and position your brand above the noise through impactful campaigns and targeted promotion.",
  },
  {
    title: "Web & Ad Development",
    desc: "We design and develop modern, visually refined websites and digital ads that convert. From sleek landing pages to full brand websites, every build is optimized for performance, user experience, and aesthetics — ensuring your brand not only looks exceptional but also delivers results.",
  }
];

const Services = () => {
  return (
    <section className="py-20 w-full" id="services">
      <div className="flex flex-col items-center justify-center">
        <motion.h1 
          className="heading text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our <span className="text-purple">Services</span>
        </motion.h1>
         <motion.p 
          className="text-white-200 mt-5 text-center max-w-4xl font-light text-base md:text-lg px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We craft visuals that don’t just capture attention — they define presence, elevate perception, and position your brand exactly where it belongs. Every detail is intentional. Every outcome is designed to leave a lasting impression.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mt-16 max-w-7xl mx-auto px-5 w-full">
        {servicesList.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col p-6 md:p-8 rounded-3xl border border-white/[0.1] overflow-hidden group hover:border-purple-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-500 ease-out md:hover:-translate-y-3 
              ${idx < 3 ? "lg:col-span-2" : ""} 
              ${idx === 3 ? "lg:col-span-2 lg:col-start-2 md:col-span-1" : ""} 
              ${idx === 4 ? "lg:col-span-2 lg:col-start-4 md:col-span-2" : ""}
            `}
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            {/* Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500 rounded-full blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

            <div className="absolute top-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-5xl font-extrabold text-white">
              0{idx + 1}
            </div>

            <div className="z-10 mt-10 flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-purple transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-[#C1C2D3] font-light leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
