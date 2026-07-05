export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: "completed" | "in-progress" | "concept";
};

export const projects: Project[] = [
  {
    id: "service-bt",
    title: "Service Dot BT Web App",
    description:
      "A service marketplace connecting freelancers and clients with bidding and profile systems.",
    image: "/projects/service-bt.png",
    tags: ["Next.js", "Django REST", "PostgreSQL", "Upstash"],
    status: "completed",
  },
  {
    id: "dzongkha-app",
    title: "Dzongkha Tracing App",
    description:
      "Interactive learning system for Dzongkha character stroke tracing with animation guidance.",
    image: "/projects/dzongkha.png",
    tags: ["React Native", "SVG", "Animation"],
    status: "concept",
  },
  {
    id: "portfolio-system",
    title: "Portfolio Framework",
    description:
      "Cinematic portfolio system built with GSAP and Framer Motion.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "GSAP", "Framer Motion"],
    status: "completed",
  },
];