export default async function PokemonPage({
  params
}: {
  params: { slug: string };
}) {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center pt-[120px] relative">
      <h1 className="text-5xl font-bold text-primary mb-4">Pokemon page</h1>
    </main>
  );
}
