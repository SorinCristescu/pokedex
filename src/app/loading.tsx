import { SkeletonCard } from '@/components/skeleton-card';
import { Skeleton } from '@/components/ui/skeleton';
import { POKEMONS_PER_PAGE } from '@/constants';

export default function Loading() {
  return (
    <main className="container flex min-h-screen flex-col items-center py-24 relative">
      <section className="py-4 fixed container top-24 w-full bg-background z-10 flex flex-col items-start justify-center gap-4 md:flex-row">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[180px]" />
      </section>
      <section className="py-4 mt-24">
        {[...Array(POKEMONS_PER_PAGE)].map((_, i) => (
          <div key={i} className="flex items-center justify-center gap-2">
            <SkeletonCard />
          </div>
        ))}
      </section>
    </main>
  );
}
