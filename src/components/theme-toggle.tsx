'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

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
    <div onClick={handleTheme}>{theme === 'light' ? <Moon /> : <Sun />}</div>
  );
}
