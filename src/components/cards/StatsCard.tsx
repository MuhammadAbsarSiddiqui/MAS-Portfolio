import React from 'react';

interface StatsCardProps {
  number: string;
  label: string;
}

export function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl transition-all duration-300 hover:border-accent-primary/50 text-center select-none">
      <span className="text-3xl md:text-4xl font-heading font-extrabold text-accent-primary tracking-tight">
        {number}
      </span>
      <span className="text-xs md:text-sm font-body text-muted mt-2 font-medium">
        {label}
      </span>
    </div>
  );
}
