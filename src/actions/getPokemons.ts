'use server';

import {
  BASE_API_URL,
  POKEMONS_PER_PAGE,
  POKEMONS_QUERY_LIMIT,
  POKEMONS_QUERY_OFFSET
} from '@/constants';
import { getPokemonByName } from './getPokemonByName';
import { SearchParams } from '@/types/params';
import { buildImageSrc } from '@/lib/utils';

export async function fetchPokemons({
  query,
  page = 1,
  limit = 2000
}: {
  query?: SearchParams;
  page?: number;
  limit?: number;
}) {
  const apiUrl = `${BASE_API_URL}/pokemon?limit=${POKEMONS_QUERY_LIMIT}&offset=${(page - 1) * POKEMONS_QUERY_OFFSET}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const pokemonsData = await Promise.all(
      data.results.map(async (item: { name: string; url: string }) => {
        const pokemonData = await getPokemonByName({ name: item.name });

        return {
          name: item.name,
          imageSrc: buildImageSrc(pokemonData.id),
          types: pokemonData.types
        };
      })
    );

    if (query && query.search) {
      const filteredPokemonBySearch = pokemonsData.filter(
        (pokemon: { name: string }) =>
          pokemonsNameStartsWithQuery(
            pokemon.name,
            query!.search!.toLowerCase()
          )
      );

      return filteredPokemonBySearch.slice(0, POKEMONS_PER_PAGE);
    } else {
      return pokemonsData.slice(0, POKEMONS_PER_PAGE);
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

function pokemonsNameStartsWithQuery(name: string, query: string) {
  return name.toLowerCase().startsWith(query);
}

export async function getPokemons({
  page = 1,
  query
}: {
  page?: number;
  query?: SearchParams;
}) {
  try {
    const pokemonsData = await fetchPokemons({ query, page });
    return pokemonsData;
  } catch (error) {
    console.log(error);
    return null;
  }
}
