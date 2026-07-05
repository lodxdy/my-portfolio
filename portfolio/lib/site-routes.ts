export type SiteRoute = {
  label: string;
  href: string;
  /** Short eyebrow shown in the mobile menu, echoes the "story flow" framing from the brief */
  index: string;
};

export const SITE_ROUTES: SiteRoute[] = [
  { label: "About", href: "/about", index: "01" },
  { label: "Projects", href: "/work", index: "02" },
  { label: "Journey", href: "/journey", index: "03" },
  { label: "Playground", href: "/playground", index: "04" },
  { label: "Fashion Objects", href: "/objects", index: "05" },
  { label: "Writing", href: "/writing", index: "06" },
  { label: "Contact", href: "/contact", index: "07" },
];
