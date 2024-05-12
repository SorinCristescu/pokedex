import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center pt-[120px] relative lg:pt-0">
      <Skeleton className="h-12 w-full lg:lg:w-1/3 mb-2" />
      <Skeleton className="h-8 w-full lg:lg:w-1/2 mb-2" />
      <Skeleton className="h-8 w-full lg:lg:w-1/2 mb-4" />
      <div className="w-full flex flex-col items-center justify-center md:flex-row md:items-center md:justify-around">
        <div className="w-[350px] h-[350px]">
          <Skeleton className="w-full h-full rounded-full" />
        </div>

        <div className="flex flex-col items-end justify-center space-y-2 lg:space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-center gap-2">
              <Skeleton className="w-[120px] h-2" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
