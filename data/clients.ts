/**
 * Kendits Creative Studios — Phase 5 Client Architecture
 *
 * Approved client roster for the "CLIENTS WE'VE WORKED WITH" section.
 * Logo assets will automatically render if a path is provided in `logo`.
 * Where vector brand files are pending, the UI displays a refined typographic mark.
 */

export type Client = {
  id: string;
  name: string;
  category: string;
  logo: string | null;
};

export const clients: Client[] = [
  {
    id: "pc-construction",
    name: "PC Construction",
    category: "Commercial & Civil Infrastructure",
    logo: "/clients/pc-construction.jpg",
  },
  {
    id: "noble-games",
    name: "Noble Games",
    category: "Interactive Gaming & Entertainment",
    logo: "/clients/noble-games.jpg",
  },
  {
    id: "peniel-educational-complex",
    name: "Peniel Educational Complex",
    category: "Academic & Institutional",
    logo: "/clients/peniel-educational-complex.jpeg",
  },
  {
    id: "footwear-empire",
    name: "Footwear Empire",
    category: "Fashion & Retail Lifestyle",
    logo: "/clients/footwear-empire.png",
  },
  {
    id: "luxstays",
    name: "Luxstays",
    category: "Luxury Hospitality & Living",
    logo: "/clients/luxstays.png",
  },
  {
    id: "raku-automobiles",
    name: "Raku Automobiles",
    category: "Automotive & Performance",
    logo: "/clients/raku-automobiles.png",
  },
];
