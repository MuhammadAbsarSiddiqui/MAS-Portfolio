import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from '@/components/global/Icons';
import { StandardProjectData } from '@/data/projects';
import { TechBadge } from '@/components/global/TechBadge';

export function ProjectCard({
  title,
  tagline,
  description,
  techStack,
  githubUrl,
  liveUrl,
}: StandardProjectData) {
  return (
    <div className="group flex flex-col justify-between p-6 bg-card border border-border rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/40 hover:shadow-lg hover:shadow-accent-primary/5">
      <div className="flex flex-col gap-3">
        {/* Tagline */}
        <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-accent-secondary">
          {tagline}
        </span>

        {/* Title */}
        <h4 className="text-xl font-heading font-bold text-foreground">
          {title}
        </h4>

        {/* Description */}
        <p className="text-muted text-xs md:text-sm leading-relaxed font-body">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 pt-2">
          {githubUrl && githubUrl !== '#' && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border bg-card rounded-lg text-foreground hover:bg-card-hover hover:border-accent-primary/20 transition-all duration-200 cursor-pointer"
              aria-label={`${title} Source Code`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-accent-primary text-background rounded-lg hover:bg-accent-primary/95 transition-all duration-200 cursor-pointer"
              aria-label={`${title} Live Demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
