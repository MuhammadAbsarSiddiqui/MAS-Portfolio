'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CVDButtonProps {
  variant?: 'default' | 'hero';
  className?: string;
}

export function CVDButton({ variant = 'default', className }: CVDButtonProps) {
  useEffect(() => {
    // Check if MuhammadAbsarSiddiqui(MAS)CV.pdf exists (standard check by trying to fetch headers)
    fetch('/MuhammadAbsarSiddiqui(MAS)CV.pdf', { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          console.warn('Portfolio warning: /MuhammadAbsarSiddiqui(MAS)CV.pdf is missing from the public folder.');
        }
      })
      .catch(() => {
        console.warn('Portfolio warning: /MuhammadAbsarSiddiqui(MAS)CV.pdf is missing or unreachable.');
      });
  }, []);

  return (
    <a
      href="/MuhammadAbsarSiddiqui(MAS)CV.pdf"
      download="MuhammadAbsarSiddiqui(MAS)CV.pdf"
      className={cn(
        "inline-flex items-center justify-center font-heading transition-all duration-300",
        variant === 'hero' && "px-6 py-3 border border-foreground/30 hover:border-accent-primary hover:text-accent-primary text-base rounded-md",
        variant === 'default' && "text-muted hover:text-foreground border-b border-transparent hover:border-foreground text-base",
        className
      )}
      aria-label="Download CV PDF"
    >
      <span>Download CV</span>
    </a>
  );
}

