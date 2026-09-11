export type KenditsService = {
  index: string;
  title: string;
  outcome: string;
  capabilities: string[];
  media: {
    src: string;
    type: "image" | "video";
    alt?: string;
  };
  workHref?: string;
  workLabel?: string;
};

export const services: KenditsService[] = [
  {
    index: "01",
    title: "Film & Visual Production",
    outcome: "Cinematic visual storytelling that defines brand presence.",
    capabilities: [
      "Creative Direction",
      "Production",
      "Cinematography",
      "Editing",
      "Color Grading",
    ],
    media: {
      src: "/stay_original.mp4",
      type: "video",
    },
    workHref: "/work/stay-original",
    workLabel: "See selected work →",
  },
  {
    index: "02",
    title: "Brand & Creative Direction",
    outcome: "Cohesive brand identities built for modern platforms.",
    capabilities: [
      "Brand Identity",
      "Campaign Concepting",
      "Visual Strategy",
      "Art Direction",
    ],
    media: {
      src: "/project2.jpeg",
      type: "image",
      alt: "Brand & Creative Direction — Event Recap Identity",
    },
    workHref: "/work/peniel-spelling-bee",
    workLabel: "See selected work →",
  },
  {
    index: "03",
    title: "Content & Social",
    outcome: "High-impact social content that drives authentic engagement.",
    capabilities: [
      "Social Strategy",
      "Short-form Content",
      "Platform Optimization",
      "Event Coverage",
    ],
    media: {
      src: "/project4.jpeg",
      type: "image",
      alt: "Content & Social — High-energy Music Video Shots",
    },
    workHref: "/work/wave-speedway",
    workLabel: "See selected work →",
  },
  {
    index: "04",
    title: "Motion & Post",
    outcome: "Dynamic post-production and VFX that elevate the narrative.",
    capabilities: [
      "Motion Graphics",
      "VFX",
      "Title Sequences",
      "Offline / Online Editing",
    ],
    media: {
      src: "/project3.jpeg",
      type: "image",
      alt: "Motion & Post — Cinematic Colour Grading and Finish",
    },
    workHref: "/work/lifeless",
    workLabel: "See selected work →",
  },
  {
    index: "05",
    title: "Digital Experiences",
    outcome: "Immersive digital products connecting brands with audiences.",
    capabilities: [
      "UI/UX Design",
      "Web Architecture",
      "Interactive Media",
      "Digital Platforms",
    ],
    media: {
      src: "/exp2.svg",
      type: "image",
      alt: "Digital Experiences — Interface and Media Design",
    },
    workHref: "/work",
    workLabel: "See selected work →",
  },
];
