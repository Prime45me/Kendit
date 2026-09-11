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
    src: "/french-week.webp",
    alt: "Children celebrating French Week with French flags",
    orientation: "portrait",
    relatedTitle: "Peniel Educational Complex",
    caption: "French Week celebration captured for Peniel Educational Complex.",
  },
  {
    id: "vs-3",
    title: "Trophy Tavern Beach",
    category: "Campaign Content",
    src: "/IMG_4823.PNG",
    alt: "Trophy Tavern Beach event poster",
    orientation: "square",
    relatedTitle: "Trophy Tavern",
    caption: "Event artwork for Trophy Tavern's beach experience at Laboma Beach.",
  },
  {
    id: "vs-5",
    title: "Ananzo: The Art Hour",
    category: "Campaign Content",
    src: "/IMG_4814.PNG",
    alt: "Ananzo The Art Hour promotional poster",
    orientation: "landscape",
    relatedTitle: "Ananzo",
    caption: "Promotional artwork for Ananzo's Art Hour programme.",
  },
  {
    id: "vs-6",
    title: "Sunday Live Band",
    category: "Campaign Content",
    src: "/IMG_4812.PNG",
    alt: "Sunday Live Band promotional poster featuring a saxophone player",
    orientation: "portrait",
    relatedTitle: "Trophy Tavern",
    caption: "Live music event artwork for Sunday Live Band at Trophy Tavern.",
  },
  {
    id: "vs-7",
    title: "Raku Automobiles",
    category: "Campaign Content",
    src: "/flyer2.PNG",
    alt: "Raku Automobiles promotional flyer featuring cars",
    orientation: "square",
    relatedTitle: "Raku Automobiles",
    caption: "Automotive promotional artwork for Raku Automobiles.",
  },
  {
    id: "vs-8",
    title: "PC Construction",
    category: "Campaign Content",
    src: "/flyer3.PNG",
    alt: "PC Construction promotional flyer featuring a construction worker",
    orientation: "landscape",
    relatedTitle: "PC Construction",
    caption: "Construction services promotional artwork for PC Construction.",
  },
  {
    id: "vs-9",
    title: "Scented Serenade",
    category: "Campaign Content",
    src: "/IMG_4820.PNG",
    alt: "Scented Serenade perfume and body fragrance promotional artwork",
    orientation: "landscape",
    relatedTitle: "Scented Serenade",
    caption: "Product campaign artwork for Scented Serenade.",
  },
  {
    id: "vs-10",
    title: "Message 8Ball Pool Tournament",
    category: "Campaign Content",
    src: "/IMG_5692.PNG",
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
    src: "/IMG_3915.PNG",
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
