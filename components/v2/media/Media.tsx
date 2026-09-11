import React from "react";
import Image from "next/image";
import { Video, VideoProps } from "./Video";
import { cn } from "@/lib/utils";

export interface MediaProps {
  type?: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "9/16" | "21/9" | "auto";
  videoProps?: Partial<VideoProps>;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

export const Media: React.FC<MediaProps> = ({
  type = "image",
  src,
  alt,
  poster,
  aspectRatio = "16/9",
  videoProps,
  priority = false,
  className,
  imageClassName,
}) => {
  const aspectClasses = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "9/16": "aspect-[9/16]",
    "21/9": "aspect-[21/9]",
    auto: "aspect-auto",
  };

  if (type === "video") {
    return (
      <Video
        src={src}
        poster={poster}
        altText={alt}
        aspectRatio={aspectRatio}
        priority={priority}
        className={className}
        {...videoProps}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-canvas-elevated border border-white/10",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
        className={cn("object-cover object-center transition-transform duration-500", imageClassName)}
      />
    </div>
  );
};
