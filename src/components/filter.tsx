'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { capitalizeFirstLetter } from '@/lib/utils';
import { Type } from '@/types/pokemon';
import { useRouter, useSearchParams } from 'next/navigation';

interface FilterProps {
  types: Type[];
  search?: string;
}

const Filter: React.FC<FilterProps> = ({ types }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChange = (value: string) => {
    if (value === 'all') {
      const sp = new URLSearchParams(searchParams);
      sp.delete('type');
      router.push(`/?${sp.toString()}`);
      return;
    }

    const sp = new URLSearchParams(searchParams);
    sp.set('type', value);
    router.push(`/?${sp.toString()}`);
  };

  return (
    <Select data-testid="filter" onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        {types &&
          types.map((type) => (
            <SelectItem key={type.url} value={type.name ? type.name : ''}>
              {capitalizeFirstLetter(type.name)}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default Filter;
