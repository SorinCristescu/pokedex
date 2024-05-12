import { Skeleton } from '@/components/ui/skeleton';
import { POKEMONS_PER_PAGE } from '@/constants';

export default function Loading() {
  return (
    <main className="container flex min-h-screen flex-col items-center py-24 relative">
      <section className="py-4 fixed container top-24 w-full bg-background z-10 flex flex-col items-start justify-center gap-4 md:flex-row">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-[180px]" />
      </section>
      <div className="f-full container flex items-center justify-center gap-2 flex-wrap">
        {[...Array(POKEMONS_PER_PAGE)].map((_, i) => (
          <div
            key={i}
            className="m-5 p-4 h-fit w-[14rem] flex flex-col items-center justify-start rounded-2xl"
          >
            <Skeleton className="h-4 w-11/12" />
            <div className="h-48 w-48 p-8">
              <Skeleton className="w-full h-full rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
