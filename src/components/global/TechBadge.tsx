import React from 'react';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'accent';
}

export function TechBadge({ name, variant = 'default' }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-mono rounded-full border transition-all duration-200",
        variant === 'accent'
          ? "bg-accent-primary/10 border-accent-primary/30 text-accent-primary"
          : "bg-card border-border text-foreground/80"
      )}
    >
      {name}
    </span>
  );
}
