'use client';

import React from 'react';
import { SectionWrapper } from '@/components/global/SectionWrapper';
import { SectionTitle } from '@/components/global/SectionTitle';
import { TechBadge } from '@/components/global/TechBadge';
import { ScrollReveal } from '@/components/global/ScrollReveal';
import { skillsData } from '@/data/skills';

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-card/20">
      <ScrollReveal direction="up" delay={0.1}>
        <SectionTitle
          title="Skills"
          subtitle="My technical toolkit structured by layer, with focus on modular APIs and modern client stacks."
        />
      </ScrollReveal>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {skillsData.map((categoryData, idx) => (
          <ScrollReveal
            key={categoryData.category}
            direction="up"
            delay={0.15 * (idx + 1)}
            className="flex flex-col gap-6 p-6 bg-card border border-border rounded-xl hover:border-accent-primary/25 transition-all duration-300"
          >
            {/* Category Name */}
            <h3 className="text-lg md:text-xl font-heading font-bold text-foreground flex items-center gap-1">
              {categoryData.category}
              <span className="text-accent-primary">.</span>
            </h3>

            {/* Badges Container */}
            <div className="flex flex-wrap gap-2.5">
              {categoryData.skills.map((skill) => (
                <TechBadge key={skill} name={skill} variant="default" />
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
