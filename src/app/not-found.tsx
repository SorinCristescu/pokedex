import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold lg:text-7xl">Not Found</h1>
      <p className="text-muted-foreground text-xl">
        Could not find requested resource
      </p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
