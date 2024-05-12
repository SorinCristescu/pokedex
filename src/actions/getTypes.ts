import { BASE_API_URL } from '@/constants';
import { fetchData } from '@/lib/utils';

export async function getTypes() {
  const apiUrl = `${BASE_API_URL}/type`;
  const data = await fetchData(apiUrl);

  return data;
}
