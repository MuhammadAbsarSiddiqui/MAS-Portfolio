import React from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CVDButtonProps {
  variant?: 'default' | 'hero' | 'navbar';
  className?: string;
}

export function CVDButton({ variant = 'default', className }: CVDButtonProps) {
  // TODO: Replace public/cv.pdf with the actual CV PDF once available.
  return (
    <a
      href="/cv.pdf"
      download="Muhammad_Absar_Siddiqui_CV.pdf"
      className={cn(
        "inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary cursor-pointer hover:scale-[1.02] active:scale-[0.98]",
        variant === 'hero' && "px-6 py-3 bg-accent-primary text-background hover:bg-accent-primary/90 shadow-lg shadow-accent-primary/20 text-base md:text-lg",
        variant === 'navbar' && "px-4 py-2 border border-accent-primary text-accent-primary hover:bg-accent-primary/10 text-sm",
        variant === 'default' && "px-5 py-2.5 bg-card border border-border text-foreground hover:bg-card-hover text-sm",
        className
      )}
      aria-label="Download CV PDF"
    >
      <Download className={cn(
        variant === 'navbar' ? "w-4 h-4" : "w-5 h-5"
      )} />
      <span>Download CV</span>
    </a>
  );
}
