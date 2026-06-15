'use client';

import React, { useState } from 'react';
import { FeaturedProject as FeaturedProjectType } from '@/data/projects';
import { TechBadge } from '@/components/global/TechBadge';

interface FeaturedProjectProps {
  project: FeaturedProjectType;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-stretch ${project.id === 'tacitvault' ? 'md:rtl' : ''}`}>
      {/* Image Column */}
      <div className={`w-full h-full ${project.id === 'tacitvault' ? 'md:order-2 md:ltr' : ''}`}>
        <div className="relative h-full min-h-[300px] w-full bg-card overflow-hidden border border-border rounded-xl">
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-card text-muted font-mono p-4 text-center">
              {project.title} Architecture
            </div>
          ) : (
            <div className="w-full h-full absolute inset-0 opacity-90 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="w-full h-full object-cover" 
                onError={() => setImageError(true)} 
              />
            </div>
          )}
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Text Column */}
      <div className={`w-full ${project.id === 'tacitvault' ? 'md:order-1 md:text-right' : ''}`}>
        {project.id === 'intellitrade' && (
          <h4 className="text-sm font-mono font-bold tracking-widest uppercase text-accent-secondary mb-2">
            University Final Year Project
          </h4>
        )}
        <span className="text-accent-primary font-mono text-sm">{project.tagline}</span>
        <h3 className="text-2xl md:text-4xl font-heading font-bold mt-2">{project.title}</h3>
        <p className="text-muted mt-4 leading-relaxed font-body">{project.description}</p>

        {/* Problem/Solution — minimal, no cards */}
        <div className={`mt-6 grid grid-cols-2 gap-4 ${project.id === 'tacitvault' ? 'text-right' : ''}`}>
          <div>
            <h4 className="text-xs font-mono text-muted uppercase tracking-wider">Problem</h4>
            <p className="text-muted text-sm mt-1 font-body">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-mono text-accent-primary uppercase tracking-wider">Solution</h4>
            <p className="text-muted text-sm mt-1 font-body">{project.solution}</p>
          </div>
        </div>

        {/* Tech badges */}
        <div className={`mt-6 flex flex-wrap gap-4 ${project.id === 'tacitvault' ? 'justify-end' : ''}`}>
          {project.tech.map((tech) => (
            <TechBadge key={tech} name={tech} variant="accent" />
          ))}
        </div>

        {/* Links */}
        <div className={`mt-8 flex gap-6 ${project.id === 'tacitvault' ? 'justify-end' : ''}`}>
          {project.github && project.github !== '#' && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted text-sm border-b border-transparent hover:border-foreground hover:text-foreground transition-colors font-body"
            >
              Source →
            </a>
          )}
          {project.live && project.live !== '#' && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted text-sm border-b border-transparent hover:border-foreground hover:text-foreground transition-colors font-body"
            >
              Live →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
