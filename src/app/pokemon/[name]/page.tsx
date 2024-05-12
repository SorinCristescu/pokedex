import { getPokemonByName } from '@/actions/getPokemonByName';
import { getPokemonSpeciesByName } from '@/actions/getPokemonSpeciesByName';
import { Progress } from '@/components/ui/progress';
import { buildImageSrc, capitalizeFirstLetter } from '@/lib/utils';
import Image from 'next/image';

export default async function PokemonPage({
  params
}: {
  params: { name: string };
}) {
  const pokemon = await getPokemonByName({ name: params.name });
  const species = await getPokemonSpeciesByName({ name: params.name });

  return (
    <main className="container flex min-h-screen flex-col items-center justify-center pt-[120px] relative lg:pt-0">
      <h1 className="text-5xl font-bold text-primary mb-4">
        {capitalizeFirstLetter(pokemon.name)}
      </h1>
      <p className="text-xl text-muted-foreground text-center lg:w-1/2 ">
        {species.flavor_text_entries[0].flavor_text}
      </p>
      <div className="w-full flex flex-col items-center justify-center md:flex-row md:items-center md:justify-around">
        <div className="w-[350px] h-[350px] relative lg:w-[500px] lg:h-[500px]">
          <Image
            src={buildImageSrc(pokemon.id)}
            alt={pokemon.name}
            fill
            style={{
              objectFit: 'contain' // cover, contain, none
            }}
            priority
          />
        </div>

        <div className="flex flex-col items-end justify-center space-y-2 lg:space-y-4">
          {pokemon.stats.map((stat: any, index: number) => (
            <div
              key={index}
              className="text-sm flex items-center justify-between space-x-2 lg:text-[16px]"
            >
              <p>{capitalizeFirstLetter(stat.stat.name)}</p>
              <Progress
                value={stat.base_stat}
                className="w-[120px] h-2 md:w-[300px]"
              />
              <p className="w-[50px]">{stat.base_stat}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
