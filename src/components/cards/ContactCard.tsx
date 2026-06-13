import React from 'react';

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  href: string;
}

export function ContactCard({ icon: Icon, title, value, href }: ContactCardProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-4 p-5 md:p-6 bg-card border border-border rounded-xl transition-all duration-300 hover:border-accent-primary/50 hover:bg-card-hover min-h-[48px] focus:outline-none focus:ring-2 focus:ring-accent-primary"
      aria-label={`${title}: ${value}`}
    >
      <div className="shrink-0 p-3 bg-background border border-border rounded-lg group-hover:border-accent-primary/30 transition-colors">
        <Icon className="w-6 h-6 text-accent-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xs font-heading font-semibold text-muted tracking-wider uppercase">
          {title}
        </span>
        <span className="text-sm md:text-base font-mono text-foreground font-medium truncate mt-0.5">
          {value}
        </span>
      </div>
    </a>
  );
}
