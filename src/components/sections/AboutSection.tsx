'use client';

import React from 'react';
import { SectionWrapper } from '@/components/global/SectionWrapper';
import { SectionTitle } from '@/components/global/SectionTitle';
import ScrollReveal from '@/components/animation/ScrollReveal';
import CountUp from '@/components/animation/CountUp';

export function AboutSection() {
  const stats = [
    { target: 4, suffix: "+", label: "Projects" },
    { target: 8, suffix: "+", label: "Technologies" },
    { target: 2, suffix: "", label: "AI Systems" },
    { target: 1, suffix: "", label: "SaaS Platform" }
  ];

  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        {/* Text — 3 columns */}
        <div className="md:col-span-3">
          <ScrollReveal delay={0}>
            <SectionTitle 
              title="About" 
              subtitle="I build systems that understand human intent — turning unstructured input into structured intelligence."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-8 space-y-6">
            <p className="text-muted text-lg leading-relaxed font-body">
              I'm a software engineer specializing in full-stack development integrated with artificial intelligence. 
              My focus is turning raw, unstructured data — like audio recording logs or chaotic inbox threads — 
              into highly structured, searchable, and actionable business intelligence.
            </p>
            <p className="text-muted text-lg leading-relaxed font-body">
              My recent work includes production-grade SaaS systems for automated trade matching and 
              voice-to-knowledge management. I enjoy working at the intersection of frontend engineering, 
              AI integration, and solving real business problems.
            </p>
          </ScrollReveal>

          {/* Stats — horizontal, inline, not a grid */}
          <ScrollReveal delay={0.2} className="mt-12 flex flex-wrap gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i}>
                <span className="text-2xl md:text-3xl font-heading font-bold text-accent-primary">
                  <CountUp target={stat.target} suffix={stat.suffix} />
                </span>
                <p className="text-muted text-sm font-mono mt-1">{stat.label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>

        {/* Photo — 2 columns */}
        <ScrollReveal delay={0.2} className="md:col-span-2">
          <div className="p-3 bg-card border border-accent-primary/30 rounded-2xl transition-all duration-500 hover:border-accent-primary/80 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="rounded-xl overflow-hidden bg-background">
              <img 
                src="/images/absar-portrait.jpg" 
                alt="Muhammad Absar Siddiqui"
                className="w-full h-auto object-contain block dark:grayscale dark:hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  // Fallback: If portrait photo fails to load, render monogram text fallback
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full aspect-[3/4] flex items-center justify-center bg-card text-6xl font-heading font-bold text-accent-primary';
                    fallback.innerText = 'AS';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
