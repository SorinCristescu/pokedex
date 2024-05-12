'use server';

import { BASE_API_URL } from '@/constants';
import { fetchData } from '@/lib/utils';

export async function getPokemonSpeciesByName({ name }: { name: string }) {
  const apiUrl = `${BASE_API_URL}/pokemon-species/${name}/`;
  const data = await fetchData(apiUrl);
  return data;
}
