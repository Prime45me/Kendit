export type KenditsService = {
  index: string;
  title: string;
  outcome: string;
  capabilities: string[];
  media: {
    src: string;
    type: "image" | "video" | "3d";
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
      src: "/main-brand.PNG",
      type: "image",
      alt: "Brand & Creative Direction — Main Brand Identity",
    },
    workHref: "/work#brand-creative-work",
    workLabel: "See selected work →",
  },
  {
    index: "03",
    title: "Content & Social",
    outcome: "Emotion-led wedding content that preserves every meaningful moment for the couple and their loved ones.",
    capabilities: [
      "Wedding Coverage",
      "Candid Storytelling",
      "Short-form Content",
      "Social Media Edits",
    ],
    media: {
      src: "/social.MP4",
      type: "video",
    },
    workHref: "/work",
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
      src: "",
      type: "3d",
      alt: "Digital Experiences — Interactive brand and web interface",
    },
    workHref: "https://www.penieleducationalcomplexkiddycarecentre.com/",
    workLabel: "See selected work →",
  },
];
