import { SkeletonCard } from "./SkeletonCard";

export function loading() {
  return (
    <main>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {"abcdefg".split('').map(i=> (
        <SkeletonCard key={i} />

      ))}
     
    </div>
    </main>
  );
}

