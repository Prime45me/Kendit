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
    title: "Video Production & Editing",
    outcome: "From concept to final cut, we produce considered films and video content for brands, people, and events.",
    capabilities: [
      "Creative Direction",
      "Event Coverage",
      "Film Production",
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
    title: "Graphic Design & Brand Identity",
    outcome: "Cohesive brand identities built for modern platforms.",
    capabilities: [
      "Brand Identity",
      "Graphic Design",
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
    title: "Social Media Content & Management",
    outcome: "Consistent, platform-ready content and thoughtful account management that keep your brand connected to its audience.",
    capabilities: [
      "Content Planning",
      "Short-form Content",
      "Social Media Management",
      "Community Engagement",
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
    title: "Advertising & Marketing",
    outcome: "Clear campaign ideas and compelling creative that help brands reach the right audience.",
    capabilities: [
      "Campaign Strategy",
      "Advertising Concepts",
      "Campaign Creative",
      "Promotional Content",
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
    title: "Website Development",
    outcome: "Thoughtful, responsive websites that connect brands with their audiences and support their goals.",
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
