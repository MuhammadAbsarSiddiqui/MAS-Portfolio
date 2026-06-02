import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 md:mb-16 flex flex-col items-start">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight relative flex items-baseline">
        {title}
        <span className="text-accent-primary ml-0.5">.</span>
      </h2>
      <div className="h-1 w-12 bg-accent-primary mt-3 rounded-full" />
      {subtitle && (
        <p className="text-muted text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
