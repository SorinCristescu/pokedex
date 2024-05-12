import { getPokemons } from '@/actions/getPokemons';
import { getTypes } from '@/actions/getTypes';
import Filter from '@/components/filter';
import PokemonsList from '@/components/pokemons-list';
import SearchBar from '@/components/search';
import { SearchParams } from '@/types/params';

export default async function Home({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const pokemons = await getPokemons({ query: searchParams });
  const types = await getTypes();
  return (
    <main className="container flex min-h-screen flex-col items-center py-24 relative">
      <section className="py-4 fixed container top-24 w-full bg-background z-10 flex flex-col items-start justify-center gap-4 md:flex-row">
        <SearchBar />
        <Filter types={types.results} />
      </section>
      <section key={Math.random()} className="py-4 mt-24">
        <PokemonsList initialPokemons={pokemons} />
      </section>
    </main>
  );
}
