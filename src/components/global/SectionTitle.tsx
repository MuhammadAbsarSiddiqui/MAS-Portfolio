import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 md:mb-16 flex flex-col items-start">
      <h2 className="text-2xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
        {title}
        <span className="text-accent-primary">.</span>
      </h2>
      {subtitle && (
        <p className="text-muted mt-4 text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

