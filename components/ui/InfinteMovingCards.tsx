"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const trackX = useRef(0);
  const isDragging = useRef(false);
  const isHovering = useRef(false);
  const pointerStartX = useRef(0);
  const contentWidth = useRef(0);

  // Duplicating items exactly once ensures seamless looping 
  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    if (scrollerRef.current) {
      // Calculate half the scroll width since we duplicated items once
      contentWidth.current = scrollerRef.current.scrollWidth / 2;
    }

    let animationFrameId: number;
    let lastTime = performance.now();

    const speedMap = {
      fast: 1.5,
      normal: 1,
      slow: 0.5,
    };
    const speedPx = speedMap[speed] ?? 1;

    const play = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      // Automatically move continuously, UNLESS the user is hovering (pauseOnHover) or actively dragging
      if (!isDragging.current && (!pauseOnHover || !isHovering.current)) {
        if (direction === "left") {
          trackX.current -= speedPx * (deltaTime / 16);
        } else {
          trackX.current += speedPx * (deltaTime / 16);
        }
      }

      // Loop seamlessly using trackX relative to the measured content width
      if (contentWidth.current > 0) {
        if (trackX.current <= -contentWidth.current) {
          trackX.current += contentWidth.current;
        } else if (trackX.current > 0) {
          trackX.current -= contentWidth.current;
        }
      }

      // Update the inline transform for a silken smooth scroll
      if (scrollerRef.current) {
        scrollerRef.current.style.transform = `translateX(${trackX.current}px)`;
      }

      animationFrameId = requestAnimationFrame(play);
    };

    animationFrameId = requestAnimationFrame(play);
    return () => cancelAnimationFrame(animationFrameId);
  }, [direction, speed, items.length, pauseOnHover]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    pointerStartX.current = e.clientX;
    // Capture pointer gracefully ensures swiping works even if mouse leaves bounds
    if (e.currentTarget.setPointerCapture) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - pointerStartX.current;
    pointerStartX.current = e.clientX;

    // Apply the swipe delta dynamically into the moving track
    trackX.current += dx * 1.5; // Natural drag multiplier
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    if (e.currentTarget.releasePointerCapture) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handlePointerEnter = () => {
    isHovering.current = true;
  };

  const handlePointerLeave = () => {
    isHovering.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        className="flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap cursor-grab active:cursor-grabbing touch-none select-none"
      >
        {duplicatedItems.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw] transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:border-purple-500"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
          >
            <blockquote className="pointer-events-none">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center mb-0">
                <span className="flex flex-col gap-1">
                  <span className="text-xl font-bold leading-[1.6] text-white">
                    {item.name}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
