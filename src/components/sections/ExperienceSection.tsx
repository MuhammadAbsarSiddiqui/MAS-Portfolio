'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { SectionWrapper } from '@/components/global/SectionWrapper';
import { SectionTitle } from '@/components/global/SectionTitle';
import DrawLine from '@/components/animation/DrawLine';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="relative">
      <ScrollReveal>
        <SectionTitle title="Experience" subtitle="Where I've worked and what I've built." />
      </ScrollReveal>

      <div className="relative mt-16 pl-6 md:pl-10">
        {/* GSAP DrawLine for the vertical line */}
        <DrawLine 
          direction="vertical" 
          color="var(--border)"
          className="absolute left-0 top-0 bottom-0 w-[2px]"
        />

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker node dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-border bg-background group-hover:border-accent-primary transition-colors duration-300" />
              
              <ScrollReveal y={20} delay={0.1}>
                <div 
                  className="p-6 md:p-8 bg-card border-l-[3px] border-border hover:border-accent-primary transition-colors duration-300 rounded-r-lg"
                  style={{ transform: 'none' }}
                >
                  <span className="text-accent-primary font-mono text-sm">{exp.date}</span>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mt-2 text-foreground">{exp.company}</h3>
                  <p className="text-muted mt-1 font-body">{exp.role}</p>

                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-muted text-sm leading-relaxed flex gap-2 font-body">
                        <span className="text-accent-primary mt-1">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
