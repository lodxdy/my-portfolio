// import { ComingSoon } from "@/components/sections/coming-soon";

// export default function Page() {
//   return <ComingSoon index="02" title="Projects" />;
// }
import { projects } from "@/src/data/projects";
import WorkGrid from "@/components/sections/work-grid";

export default function Page() {
  return <WorkGrid projects={projects} />;
}