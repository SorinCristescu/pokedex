'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme = () => {
    if (theme === 'light' || theme === 'system') {
      setTheme('dark');
    } else if (theme === 'dark' || theme === 'system') {
      setTheme('light');
    }
  };

  return (
    <Button
      variant="ghost"
      data-testid="toggle"
      onClick={handleTheme}
      className="w-14 h-14 rounded-full"
    >
      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun />}
    </Button>
  );
}
