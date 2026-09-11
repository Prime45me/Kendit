"use client";

import React from "react";
import { motion } from "framer-motion";

export const DigitalExperienceVisual: React.FC = () => {
  return (
    <div
      aria-label="Abstract 3D digital experience interface"
      role="img"
      className="relative h-full min-h-[260px] w-full overflow-hidden bg-[#071316] [perspective:900px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,238,220,0.2),transparent_36%),radial-gradient(circle_at_80%_80%,rgba(125,21,137,0.24),transparent_42%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:36px_36px]" />

      <motion.div
        animate={{ rotateX: [8, 2, 8], rotateY: [-12, 10, -12], y: [4, -8, 4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[16%] top-[17%] h-[64%] w-[68%] [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[18px] border border-kendits-purple/40 bg-kendits-purple/10 shadow-[0_25px_70px_rgba(125,21,137,0.25)] [transform:translateZ(-34px)]" />
        <div className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-[18px] border border-kendits-turquoise/30 bg-kendits-turquoise/[0.08] [transform:translateZ(-18px)]" />

        <div className="relative h-full w-full rounded-[18px] border border-white/20 bg-[#0c2024]/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] [backdrop-filter:blur(12px)] [transform:translateZ(12px)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-kendits-turquoise">
              K / Digital
            </span>
            <span className="h-2 w-2 rounded-full bg-kendits-turquoise shadow-[0_0_12px_rgba(0,238,220,0.9)]" />
          </div>

          <div className="mt-5 grid grid-cols-[1.3fr_0.7fr] gap-3">
            <div className="h-24 rounded-lg border border-white/10 bg-white/[0.06] p-3">
              <div className="h-2 w-1/2 rounded-full bg-white/40" />
              <div className="mt-3 h-2 w-4/5 rounded-full bg-white/15" />
              <div className="mt-2 h-2 w-3/5 rounded-full bg-kendits-turquoise/50" />
              <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{ width: ["35%", "78%", "35%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full rounded-full bg-kendits-turquoise"
                />
              </div>
            </div>
            <div className="flex h-24 items-end gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-3">
              {[34, 58, 44, 76, 62].map((height, index) => (
                <motion.span
                  key={height}
                  animate={{ height: [`${height}%`, `${Math.min(height + 18, 92)}%`, `${height}%`] }}
                  transition={{ duration: 2.5, delay: index * 0.12, repeat: Infinity, ease: "easeInOut" }}
                  className="flex-1 rounded-t-sm bg-kendits-purple/70"
                />
              ))}
            </div>
          </div>

          <div className="mt-3 flex gap-3">
            <div className="h-16 flex-1 rounded-lg border border-white/10 bg-white/[0.04]" />
            <div className="h-16 w-1/3 rounded-lg border border-kendits-turquoise/20 bg-kendits-turquoise/[0.08]" />
          </div>
        </div>
      </motion.div>

      <span className="absolute bottom-4 left-4 text-[9px] font-mono uppercase tracking-[0.24em] text-white/45">
        Interactive / Brand / Web
      </span>
    </div>
  );
};
