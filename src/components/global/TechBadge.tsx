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
        "inline-block text-sm font-mono border-b pb-1 transition-colors duration-200 cursor-default",
        variant === 'accent'
          ? "border-accent-primary text-accent-primary"
          : "border-border text-muted hover:border-accent-primary hover:text-accent-primary"
      )}
    >
      {name}
    </span>
  );
}

