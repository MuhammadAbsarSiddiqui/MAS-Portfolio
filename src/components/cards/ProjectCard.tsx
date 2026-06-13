'use client';

import React from 'react';
import { StandardProject } from '@/data/projects';
import { TechBadge } from '@/components/global/TechBadge';
import ScrollReveal from '@/components/animation/ScrollReveal';

interface ProjectCardProps {
  project: StandardProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <ScrollReveal y={20}>
      <div className="group p-6 border border-border hover:border-accent-primary/50 transition-colors duration-300 flex flex-col justify-between h-full bg-card/10">
        <div>
          <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-accent-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted text-sm mt-3 leading-relaxed font-body">{project.description}</p>
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          <div className="mt-4 flex gap-4">
            {project.github && project.github !== '#' && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted text-sm hover:text-foreground transition-colors font-body"
              >
                Code →
              </a>
            )}
            {project.live && project.live !== '#' && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted text-sm hover:text-foreground transition-colors font-body"
              >
                Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
