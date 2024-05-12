'use server';

import { BASE_API_URL } from '@/constants';
import { fetchData } from '@/lib/utils';

export async function getPokemonByName({ name }: { name: string }) {
  const apiUrl = `${BASE_API_URL}/pokemon/${name}/`;
  const data = await fetchData(apiUrl);

  return data;
}
