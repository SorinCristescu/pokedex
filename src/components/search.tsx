'use client';

import { useState, useRef } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { useDebounceCallback, useIsomorphicLayoutEffect } from 'usehooks-ts';
import { DEBOUNCE_TIME } from '@/constants';

const SearchBar: React.FC = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const [text, setText] = useState(search);
  const router = useRouter();
  const pathname = usePathname();
  const initialRender = useRef(true);

  useIsomorphicLayoutEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!text) {
      router.push('/');
    } else {
      const sp = new URLSearchParams(searchParams);
      if (text.trim() === '') {
        sp.delete('search');
      } else {
        sp.set('search', text);
      }

      router.push(`${pathname}?${sp.toString()}`);
    }
  }, [pathname, text, router, searchParams]);

  const debounced = useDebounceCallback(setText, DEBOUNCE_TIME);

  return (
    <div data-testid="search-bar" className="w-full relative">
      <Input
        type="text"
        className="pl-12"
        placeholder="SearchPokemon..."
        value={text}
        onChange={(e) => debounced(e.target.value)}
      />
      <div className="absolute top-0 left-4 h-full flex items-center justify-center">
        <SearchIcon className="w-5 h-5 text-muted-foreground" />
      </div>
    </div>
  );
};

export default SearchBar;
