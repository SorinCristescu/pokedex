import { getPokemons } from '@/actions/getPokemons';
import { getTypes } from '@/actions/getTypes';
import Filter from '@/components/Filter';
import PokemonsList from '@/components/PokemonsList';
import SearchBar from '@/components/Search';
import { SearchParams } from '@/types/Params';

export default async function Home({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const pokemons = await getPokemons({ query: searchParams });
  const types = await getTypes();
  return (
    <main
      data-testid="home-page"
      className="container flex min-h-screen flex-col items-center py-24 relative"
    >
      <section className="py-4 fixed container top-24 w-full bg-background z-10 flex flex-col items-start justify-center gap-4 md:flex-row">
        <SearchBar />
        <Filter types={types.results} />
      </section>
      <section key={Math.random()} className="py-4 mt-20">
        <PokemonsList initialPokemons={pokemons} />
      </section>
    </main>
  );
}
