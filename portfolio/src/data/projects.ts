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
    image: "/images/project/Servicedotbt.jpeg",
    tags: ["Next.js", "Django REST", "PostgreSQL", "Upstash"],
    status: "completed",
  },
  {
    id: "dzongkha-app",
    title: "Dzongkha Tracing App",
    description:
      "Interactive learning system for Dzongkha character stroke tracing with animation guidance.",
    image: "/images/project/dzg-tracing-app.png",
    tags: ["React Native", "SVG", "Animation"],
    status: "concept",
  },
  {
    id: "dating-app",
    title: "Bhutanese Dating App",
    description:
      "A side project during internship at DC, a modern dating application with real-time chat and location-based matching.",
    image: "/images/project/dating-app.png",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    status: "concept",
  },
];