'use client';

import React from 'react';
import { SectionWrapper } from '@/components/global/SectionWrapper';
import { SectionTitle } from '@/components/global/SectionTitle';
import { FeaturedProject } from '@/components/cards/FeaturedProject';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { ScrollReveal } from '@/components/global/ScrollReveal';
import { featuredProjects, standardProjects } from '@/data/projects';

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      {/* Title */}
      <ScrollReveal direction="up" delay={0.1}>
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of recent projects exploring AI-driven matching and semantic search architectures."
        />
      </ScrollReveal>

      {/* Featured Projects Stack */}
      <div className="flex flex-col gap-16 md:gap-24 mt-8">
        {featuredProjects.map((project, idx) => (
          <ScrollReveal key={project.title} direction="up" delay={0.15 * (idx + 1)}>
            <FeaturedProject {...project} />
          </ScrollReveal>
        ))}
      </div>

      {/* Standard Projects Header */}
      <ScrollReveal direction="up" delay={0.1} className="mt-20 mb-10">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
          Other Projects
        </h3>
        <div className="h-0.5 w-10 bg-accent-secondary mt-2 rounded-full" />
      </ScrollReveal>

      {/* Standard Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {standardProjects.map((project, idx) => (
          <ScrollReveal key={project.title} direction="up" delay={0.1 * (idx + 1)}>
            <ProjectCard {...project} />
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
