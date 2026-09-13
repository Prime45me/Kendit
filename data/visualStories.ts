/**
 * Kendits Creative Studios - Phase 5 Content / Visual Stories Architecture
 * Supporting creative output and campaign artwork beyond the finished piece.
 */

export type StoryCategory =
  | "Photography"
  | "Campaign Content"
  | "BTS"
  | "Social / Graphic Content"
  | "Short-form Visuals";

export type VisualStory = {
  id: string;
  title: string;
  category: StoryCategory;
  src: string;
  alt: string;
  orientation: "landscape" | "portrait" | "square" | "wide";
  relatedSlug?: string;
  relatedTitle?: string;
  caption?: string;
};

export const visualStories: VisualStory[] = [
  {
    id: "brand-creative-main",
    title: "Main Brand Identity",
    category: "Campaign Content",
    src: "/main-brand.PNG",
    alt: "Main brand identity design",
    orientation: "landscape",
    relatedTitle: "Brand & Creative Direction",
    caption: "Brand identity direction and visual system development.",
  },
  {
    id: "brand-creative-flyer-1",
    title: "Brand Campaign Flyer 01",
    category: "Campaign Content",
    src: "/webp/flyer1.webp",
    alt: "Brand campaign flyer design 01",
    orientation: "portrait",
    relatedTitle: "Brand & Creative Direction",
    caption: "Campaign flyer design developed for a brand activation.",
  },
  {
    id: "brand-creative-flyer-2",
    title: "Brand Campaign Flyer 02",
    category: "Campaign Content",
    src: "/webp/flyer2.webp",
    alt: "Brand campaign flyer design 02",
    orientation: "square",
    relatedTitle: "Brand & Creative Direction",
    caption: "Campaign flyer design developed for a brand activation.",
  },
  {
    id: "brand-creative-flyer-3",
    title: "Brand Campaign Flyer 03",
    category: "Campaign Content",
    src: "/webp/flyer3.webp",
    alt: "Brand campaign flyer design 03",
    orientation: "landscape",
    relatedTitle: "Brand & Creative Direction",
    caption: "Campaign flyer design developed for a brand activation.",
  },
  {
    id: "brand-creative-footwear",
    title: "Footwear Brand System",
    category: "Campaign Content",
    src: "/webp/footwear-brand.webp",
    alt: "Footwear brand identity design",
    orientation: "landscape",
    relatedTitle: "Brand & Creative Direction",
    caption: "Brand identity and visual applications for a footwear brand.",
  },
  {
    id: "vs-1",
    title: "Happy Workers' Day",
    category: "Campaign Content",
    src: "/IMG_4807.PNG",
    alt: "Happy Workers' Day campaign artwork for Peniel Educational Complex",
    orientation: "landscape",
    relatedTitle: "Peniel Educational Complex",
    caption: "Workers' Day campaign artwork created for Peniel Educational Complex.",
  },
  {
    id: "vs-2",
    title: "Peniel French Week",
    category: "Campaign Content",
    src: "/webp/french-week.webp",
    alt: "Children celebrating French Week with French flags",
    orientation: "portrait",
    relatedTitle: "Peniel Educational Complex",
    caption: "French Week celebration captured for Peniel Educational Complex.",
  },
  {
    id: "vs-3",
    title: "Trophy Tavern Beach",
    category: "Campaign Content",
    src: "/webp/IMG_4823.webp",
    alt: "Trophy Tavern Beach event poster",
    orientation: "square",
    relatedTitle: "Trophy Tavern",
    caption: "Event artwork for Trophy Tavern's beach experience at Laboma Beach.",
  },
  {
    id: "vs-5",
    title: "Ananzo: The Art Hour",
    category: "Campaign Content",
    src: "/webp/IMG_4814.webp",
    alt: "Ananzo The Art Hour promotional poster",
    orientation: "landscape",
    relatedTitle: "Ananzo",
    caption: "Promotional artwork for Ananzo's Art Hour programme.",
  },
  {
    id: "vs-6",
    title: "Sunday Live Band",
    category: "Campaign Content",
    src: "/webp/IMG_4812.webp",
    alt: "Sunday Live Band promotional poster featuring a saxophone player",
    orientation: "portrait",
    relatedTitle: "Trophy Tavern",
    caption: "Live music event artwork for Sunday Live Band at Trophy Tavern.",
  },
  {
    id: "vs-7",
    title: "Raku Automobiles",
    category: "Campaign Content",
    src: "/webp/flyer2.webp",
    alt: "Raku Automobiles promotional flyer featuring cars",
    orientation: "square",
    relatedTitle: "Raku Automobiles",
    caption: "Automotive promotional artwork for Raku Automobiles.",
  },
  {
    id: "vs-8",
    title: "PC Construction",
    category: "Campaign Content",
    src: "/webp/flyer3.webp",
    alt: "PC Construction promotional flyer featuring a construction worker",
    orientation: "landscape",
    relatedTitle: "PC Construction",
    caption: "Construction services promotional artwork for PC Construction.",
  },
  {
    id: "vs-9",
    title: "Scented Serenade",
    category: "Campaign Content",
    src: "/webp/IMG_4820.webp",
    alt: "Scented Serenade perfume and body fragrance promotional artwork",
    orientation: "landscape",
    relatedTitle: "Scented Serenade",
    caption: "Product campaign artwork for Scented Serenade.",
  },
  {
    id: "vs-10",
    title: "Message 8Ball Pool Tournament",
    category: "Campaign Content",
    src: "/webp/IMG_5692.webp",
    alt: "Noble Games Message 8Ball Pool Tournament promotional poster",
    orientation: "wide",
    relatedTitle: "Noble Games",
    caption: "Tournament promotional artwork for Noble Games.",
  },
  {
    id: "vs-11",
    title: "Scented Serenade",
    category: "Campaign Content",
    src: "/IMG_5732.PNG",
    alt: "Scented Serenade perfume and body fragrance promotional artwork",
    orientation: "portrait",
    relatedTitle: "Scented Serenade",
    caption: "Product campaign artwork for Scented Serenade.",
  },
  {
    id: "vs-12",
    title: "Footwear Empire Brand System",
    category: "Campaign Content",
    src: "/webp/IMG_3915.webp",
    alt: "Footwear Empire brand identity presentation",
    orientation: "landscape",
    relatedTitle: "Footwear Empire",
    caption: "Brand identity and application concepts for Footwear Empire.",
  },
  {
    id: "vs-13",
    title: "Peniel Weekend School",
    category: "Campaign Content",
    src: "/IMG_3234.PNG",
    alt: "Peniel Weekend School promotional poster with creative activities",
    orientation: "square",
    relatedTitle: "Peniel Educational Complex",
    caption: "Weekend School promotional artwork for Peniel Educational Complex.",
  },
];
