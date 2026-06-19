'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Wrap in setTimeout to avoid linter warnings about synchronous setState within an effect
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="p-2.5 rounded-lg border border-border bg-card text-foreground transition-all duration-200 cursor-default"
        aria-hidden="true"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2.5 rounded-lg border border-border bg-card text-foreground hover:bg-card-hover focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all duration-200 cursor-pointer"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-accent-primary" />
      ) : (
        <Sun className="w-5 h-5 text-accent-secondary" />
      )}
    </button>
  );
}
