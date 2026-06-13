'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionWrapper } from '@/components/global/SectionWrapper';
import { SectionTitle } from '@/components/global/SectionTitle';
import { skills } from '@/data/skills';
import ScrollReveal from '@/components/animation/ScrollReveal';

export function SkillsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <SectionWrapper id="skills">
      <ScrollReveal>
        <SectionTitle title="Skills" subtitle="Technologies I work with in production." />
      </ScrollReveal>

      <div ref={containerRef} className="mt-12 grid md:grid-cols-3 gap-8 md:gap-12">
        {skills.map((category) => (
          <div key={category.category}>
            <ScrollReveal y={15}>
              <h3 className="text-sm font-mono text-muted uppercase tracking-wider mb-4">
                {category.category}
              </h3>
            </ScrollReveal>
            <motion.div 
              className="flex flex-wrap gap-x-4 gap-y-3"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {category.items.map((skill) => (
                <motion.span 
                  key={skill} 
                  variants={itemVariants}
                  className="text-foreground text-base border-b border-border hover:border-accent-primary hover:text-accent-primary transition-colors duration-200 cursor-default font-mono py-1"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
