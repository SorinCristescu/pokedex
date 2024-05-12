'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Pokemon } from '@/types/pokemon';
import { capitalizeFirstLetter } from '@/lib/utils';
// import { SkeletonCard } from './skeleton-card';

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }): React.JSX.Element => {
  const router = useRouter();
  const handleClick = (): void => router.push(`/pokemon/${pokemon.name}`);

  return (
    <div
      className="m-5 p-4 h-fit w-[14rem] flex flex-col items-center justify-start rounded-2xl bg-neutral-200 bg-opacity-50 shadow-xl shadow-neutral-300 backdrop-blur-sm backdrop-filter dark:bg-neutral-700 dark:bg-opacity-50 dark:shadow-neutral-700"
      onClick={handleClick}
    >
      <h1 className="w-11/12 truncate text-center text-xl font-extrabold text-primary">
        {capitalizeFirstLetter(pokemon.name)}
      </h1>
      <div className="h-48 w-48 relative">
        <Image
          src={pokemon.imageSrc}
          alt={pokemon.name}
          fill
          style={{
            objectFit: 'cover'
          }}
          className="cursor-pointer mb-4"
          priority
        />
      </div>
    </div>
  );
};

export default PokemonCard;
