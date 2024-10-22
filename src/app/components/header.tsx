'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Headers() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = (() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  })
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto md:px-16 px-6">
        <div className="flex justify-end items-center py-6">
          <nav>
            <ul className="flex items-center space-x-6 font-semibold">
              { mounted && <button className="border p-2.5 rounded-lg text-foreground/60 hover:dark:bg-[#191919] hover:bg-gray-100 md:mx-4 outline-none" onClick={toggleTheme}>
                  {theme === 'dark' ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
              </button> }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

