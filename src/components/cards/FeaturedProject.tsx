import React from 'react';
import { Check, ExternalLink } from 'lucide-react';
import { Github } from '@/components/global/Icons';
import { FeaturedProjectData } from '@/data/projects';
import { TechBadge } from '@/components/global/TechBadge';
import { cn } from '@/lib/utils';

export function FeaturedProject({
  title,
  tagline,
  description,
  features,
  techStack,
  problem,
  solution,
  liveUrl,
  githubUrl,
  imagePath,
  isReversed,
}: FeaturedProjectData) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8">
      {/* Visual Content Column */}
      <div
        className={cn(
          "lg:col-span-6 relative rounded-2xl overflow-hidden border border-border bg-card aspect-[16/10] group",
          isReversed ? "lg:order-last" : ""
        )}
      >
        {/* Architecture Image / Backup SVG Placeholder */}
        <img
          src={imagePath}
          alt={`${title} Architecture Diagram`}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90"
        />
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
      </div>

      {/* Info Content Column */}
      <div className="lg:col-span-6 flex flex-col gap-5">
        {/* Tagline Chip */}
        <div>
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-3 py-1 rounded-full">
            {tagline}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm md:text-base leading-relaxed font-body">
          {description}
        </p>

        {/* Problem & Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {/* Problem Card */}
          <div className="p-4 bg-card border border-border rounded-xl">
            <span className="text-xs font-heading font-semibold text-muted tracking-wider uppercase block mb-1.5">
              The Problem
            </span>
            <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-body">
              {problem}
            </p>
          </div>

          {/* Solution Card */}
          <div className="p-4 bg-card border border-accent-primary/30 rounded-xl shadow-md shadow-accent-primary/5">
            <span className="text-xs font-heading font-semibold text-accent-primary tracking-wider uppercase block mb-1.5">
              The Solution
            </span>
            <p className="text-xs md:text-sm text-foreground/90 leading-relaxed font-body">
              {solution}
            </p>
          </div>
        </div>

        {/* Features Checklist */}
        <ul className="flex flex-col gap-2 mt-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm font-body text-foreground/80">
              <Check className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Project Links */}
        <div className="flex items-center gap-4 mt-3">
          {githubUrl && githubUrl !== '#' && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm px-4 py-2 border border-border rounded-lg bg-card text-foreground hover:bg-card-hover hover:border-accent-primary/30 transition-all duration-200 cursor-pointer"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
          {liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm px-4 py-2 bg-accent-primary text-background rounded-lg hover:bg-accent-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
