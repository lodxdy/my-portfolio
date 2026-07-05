// import { ComingSoon } from "@/components/sections/coming-soon";

// export default function Page() {
//   return <ComingSoon index="03" title="Journey" />;
// }
import { designs } from "@/src/data/designs";

export default function DesignsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Design Archive
        </h1>

        <p className="text-neutral-400 mt-4 max-w-xl">
          A collection of logos, visual systems, and experimental design studies.
        </p>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

              {/* text */}
              <div className="absolute bottom-0 p-4">
                <p className="text-xs text-neutral-400">
                  {item.category}
                </p>
                <h3 className="text-lg font-medium">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}