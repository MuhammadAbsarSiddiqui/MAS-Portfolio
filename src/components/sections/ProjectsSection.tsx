'use client';

import React from 'react';
import { SectionWrapper } from '@/components/global/SectionWrapper';
import { SectionTitle } from '@/components/global/SectionTitle';
import FeaturedProject from '@/components/cards/FeaturedProject';
import ProjectCard from '@/components/cards/ProjectCard';
import { featuredProjects, standardProjects } from '@/data/projects';
import ScrollReveal from '@/components/animation/ScrollReveal';

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <ScrollReveal>
        <SectionTitle title="Work" subtitle="Selected projects exploring AI-driven systems and semantic architectures." />
      </ScrollReveal>

      {/* Featured — full width, edge to edge */}
      <div className="mt-12 space-y-24">
        {featuredProjects.map((project) => (
          <ScrollReveal key={project.id} y={40}>
            <FeaturedProject project={project} />
          </ScrollReveal>
        ))}
      </div>

      {/* Standard — masonry-like grid */}
      <div className="mt-24">
        <ScrollReveal>
          <h3 className="text-xl font-heading font-bold mb-8 text-foreground">Other Work</h3>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
