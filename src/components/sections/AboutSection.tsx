'use client';

import React from 'react';
import { SectionWrapper } from '@/components/global/SectionWrapper';
import { SectionTitle } from '@/components/global/SectionTitle';
import { StatsCard } from '@/components/cards/StatsCard';
import { ScrollReveal } from '@/components/global/ScrollReveal';

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-card/20">
      <ScrollReveal direction="up" delay={0.1}>
        <SectionTitle
          title="About Me"
          subtitle="A final-year Software Engineering student dedicated to building robust and intelligent digital solutions."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-4">
        {/* Left Column: Bio */}
        <ScrollReveal direction="up" delay={0.2} className="lg:col-span-7 flex flex-col gap-6">
          <p className="text-foreground/80 text-base leading-relaxed font-body">
            I am a Software Engineering student currently in my final year at <strong className="text-foreground font-semibold">SMIU (Sindh Madressatul Islam University)</strong> in Karachi, Pakistan. My academic journey, combined with hands-on development experience, has driven my passion for creating tools that resolve complex real-world problems.
          </p>
          <p className="text-foreground/80 text-base leading-relaxed font-body">
            My primary technical focus is full-stack development integrated with artificial intelligence. I specialize in turning raw, unstructured data (like audio recording logs or chaotic inbox threads) into highly structured, searchable, and actionable business intelligence using LLMs, robust backend architectures, and modern UI systems.
          </p>
        </ScrollReveal>

        {/* Right Column: Stats Grid */}
        <ScrollReveal direction="up" delay={0.3} className="lg:col-span-5 w-full">
          <div className="grid grid-cols-2 gap-4">
            <StatsCard number="4+" label="Projects Built" />
            <StatsCard number="8+" label="Technologies" />
            <StatsCard number="2" label="AI Systems" />
            <StatsCard number="1" label="FYP Project" />
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
