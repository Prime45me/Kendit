/**
 * Kendits Creative Studios — Portfolio Projects
 * Updated: Phase 5 — Work Archive + Case Studies
 *
 * All entries are evidence-based.
 * See docs/kendits-v2/phase-4-content-matrix.md
 * Only verified assets are referenced here.
 * Unknown fields are null / undefined — never fabricated.
 */

export type ProjectReadiness = "READY" | "PARTIAL" | "NOT_READY" | "UNKNOWN";

export type ProjectCategory =
  | "LIVE PERFORMANCE"
  | "SHORT FILM"
  | "MUSIC VIDEO"
  | "EVENT RECAP"
  | "COMMERCIAL"
  | "BRANDING";

export interface KenditsProject {
  // ── Identity ──────────────────────────────────────────────────────────────
  id: string;
  slug: string;
  title: string;
  client: string | null;
  category: ProjectCategory;
  year: number | null;

  // ── Homepage ──────────────────────────────────────────────────────────────
  /** Path to thumbnail image in /public */
  thumbnail: string;
  /** Path to preview/hover video in /public — null if unavailable */
  preview: string | null;
  /** External platform link (TikTok, Instagram, etc.) */
  externalLink: string;
  /** One-line homepage teaser */
  shortDescription: string;
  /** Whether this project receives large/featured treatment on /work */
  featured: boolean;

  // ── Internal classification ───────────────────────────────────────────────
  readiness: ProjectReadiness;

  // ── Case Study — Media ────────────────────────────────────────────────────
  /** Full local video path — null if only external link available */
  fullVideo?: string | null;
  /** Hero image for case study page — falls back to thumbnail if null */
  heroImage?: string | null;
  /** Ordered gallery paths */
  gallery?: string[];

  // ── Case Study — Copy ─────────────────────────────────────────────────────
  /** 2–3 sentence project overview / context */
  overview?: string | null;
  /** Services Kendits delivered */
  services?: string[];
  /** Kendits' specific role */
  role?: string | null;
  /** Creative / production challenge */
  challenge?: string | null;
  /** Kendits' approach / solution */
  approach?: string | null;
  /** Outcome / result */
  result?: string | null;
  /** Credits line */
  credits?: string | null;
}

/**
 * Ordered project list — order determines /work display sequence
 * and next/prev navigation on case study pages.
 */
export const portfolioProjects: KenditsProject[] = [
  {
    // ── Stay Original ────────────────────────────────────────────────────────
    // READY — full video confirmed at /public/stay_original.mp4
    id: "stay-original",
    slug: "stay-original",
    title: "Stay Original",
    client: "University of Ghana SRC",
    category: "LIVE PERFORMANCE",
    year: 2025,
    thumbnail: "/project1.jpeg",
    preview: "/stay_original.mp4",
    externalLink: "https://vt.tiktok.com/ZSmF7b8Pm/",
    shortDescription:
      "Live performance direction and multi-cam capture for the University of Ghana SRC '25 event.",
    featured: true,
    readiness: "READY",
    fullVideo: "/stay_original.mp4",
    heroImage: null, // falls back to thumbnail
    gallery: [],
    overview:
      "Kendits Creative Studios delivered full live-event coverage for the University of Ghana SRC '25 show. The brief required capturing raw performance energy across multiple camera angles while maintaining editorial quality in the final edit.",
    services: ["Multi-cam Direction", "Live Recording", "Video Editing", "Colour Grading"],
    role: "Production, Direction & Post-Production",
    challenge:
      "Capturing authentic stage energy in a high-energy live setting while delivering a polished, platform-ready final cut.",
    approach:
      "Multi-camera setup with strategic positioning for both wide-angle crowd shots and close-up performance captures. Post-production focused on rhythmic cutting that matched the energy of the performance.",
    result:
      "A high-energy performance video that performed strongly on TikTok and represented the event's creative ambition.",
    credits: "kenDiTs Media — University of Ghana SRC '25",
  },
  {
    // ── Peniel French Week Celebration ───────────────────────────────────────
    // READY — full video confirmed at /public/peniel-french-week.MOV
    id: "peniel-french-week",
    slug: "peniel-french-week",
    title: "Peniel French Week '25",
    client: "Peniel Educational Complex",
    category: "EVENT RECAP",
    year: 2025,
    thumbnail: "/peniel-thumbnails/IMG_4837_00-00-000.png",
    preview: "/peniel-french-week.MOV",
    externalLink:
      "https://www.instagram.com/reel/DRaMXKhDYmd/?igsh=eTc1MXBlMnA3d2o3",
    shortDescription:
      "Official recap and highlights for the Peniel French Week Celebration.",
    featured: false,
    readiness: "READY",
    fullVideo: "/peniel-french-week.MOV",
    heroImage: null,
    gallery: [],
    overview:
      "Kendits produced the official recap film for the Peniel French Week Celebration 2025 — capturing the week's activities, performances, and memorable moments with dynamic editing and motion graphics.",
    services: ["Event Coverage", "Video Editing", "Motion Graphics"],
    role: "Production & Post-Production",
    challenge: null,
    approach: null,
    result: null,
    credits: "Peniel French Week Celebration 2025 — Peniel School",
  },
  {
    // ── Internal Conflict: A Cinematic Short Film ────────────────────────────
    // READY — full video confirmed at /public/the-inner-battle.MP4
    id: "lifeless",
    slug: "lifeless",
    title: "Internal Conflict: A Cinematic Short Film",
    client: null,
    category: "SHORT FILM",
    year: null,
    thumbnail: "/internal-conflict-thumbnails.jpeg",
    preview: "/the-inner-battle.MP4",
    externalLink: "https://vt.tiktok.com/ZSmF7CUgv/",
    shortDescription:
      "A cinematic short film shaped by intentional framing, colour grading, and story-driven direction.",
    featured: false,
    readiness: "READY",
    fullVideo: "/the-inner-battle.MP4",
    heroImage: null,
    gallery: [],
    overview:
      "Internal Conflict is a cinematic short film produced and directed by Kendits Creative Studios. The project demonstrates Kendits' approach to story-driven filmmaking outside of commercial work.",
    services: ["Direction", "Cinematography", "Colour Grading", "Editing"],
    role: "Director, Cinematographer & Editor",
    challenge: null,
    approach: null,
    result: null,
    credits: null,
  },
];

/** Utility: get a project by slug */
export function getProjectBySlug(slug: string): KenditsProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

/** Utility: get adjacent projects for next/prev navigation */
export function getAdjacentProjects(slug: string): {
  prev: KenditsProject | null;
  next: KenditsProject | null;
} {
  const idx = portfolioProjects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? portfolioProjects[idx - 1] : null,
    next: idx < portfolioProjects.length - 1 ? portfolioProjects[idx + 1] : null,
  };
}
