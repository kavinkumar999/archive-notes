'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect, Suspense } from 'react';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border p-2.5">
        <div className="animate-pulse h-4 w-4 bg-gray-200 dark:bg-gray-800 rounded" />
      </div>
    );
  }

  return (
    <button 
      className="border p-2.5 rounded-lg text-foreground/60 hover:dark:bg-[#191919] hover:bg-gray-100 transition-colors duration-200 ease-in-out"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </button>
  );
};

const ButtonSkeleton = () => (
  <div className="h-9 w-9 rounded-lg border p-2.5">
    <div className="animate-pulse h-4 w-4 bg-gray-200 dark:bg-gray-800 rounded" />
  </div>
);

export default function Headers() {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto md:px-16 px-6">
        <div className="flex justify-end items-center py-6">
          <nav>
            <ul className="flex items-center space-x-6 font-semibold">
              <Suspense fallback={<ButtonSkeleton />}>
                <ThemeButton />
              </Suspense>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}