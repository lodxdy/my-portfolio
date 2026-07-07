export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  /** Natural aspect ratio of the source image, e.g. "4/5" or "16/10".
   *  Drives the grid tile's box so cover-fit never crops awkwardly. */
  aspect: string;
  /** Where to anchor the crop when the tile's box doesn't match the
   *  image's natural ratio exactly. Defaults to "center". */
  focalPoint?: "center" | "top" | "bottom";
  /** Larger tiles span 2 columns on desktop. Use sparingly — this is
   *  what keeps the grid editorial instead of a uniform card wall. */
  featured?: boolean;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "composable-cms",
    title: "Composable CMS",
    category: "Product · Full-stack",
    year: "2026",
    image: "/images/projects/cms-platform.svg",
    aspect: "4/5",
    focalPoint: "top",
    featured: true,
    description:
      "A component-based CMS for shipping client websites fast — JSON-driven page rendering on a Next.js + Payload stack.",
  },
  {
    slug: "five-poisons",
    title: "Five Poisons",
    category: "Fashion · Concept",
    year: "2026",
    image: "/images/projects/five-poisons.svg",
    aspect: "4/5",
    description:
      "A limited jacket collection built around the five poisons of the mind — luxury streetwear as a study of ignorance, pride, and delusion.",
  },
  {
    slug: "mara-identity",
    title: "Māra",
    category: "Brand · Identity",
    year: "2025",
    image: "/images/projects/mara-identity.svg",
    aspect: "4/3",
    description:
      "Logo and mark system for a brand built around Māra as metaphor — an ancient seal rediscovered in the future.",
  },
  {
    slug: "this-site",
    title: "This Portfolio",
    category: "Web · Motion",
    year: "2026",
    image: "/images/projects/portfolio-site.svg",
    aspect: "4/3",
    description:
      "The site you're looking at — Next.js, GSAP, Lenis, and Framer Motion in a deliberate division of labor.",
  },
];