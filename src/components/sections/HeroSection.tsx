'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CVDButton } from '@/components/global/CVDButton';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] w-full items-center justify-center px-4 md:px-8 py-20 overflow-hidden"
    >
      {/* Background visual glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-accent-primary/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent-secondary/5 blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center flex flex-col items-center justify-center gap-6 z-10"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-primary"></span>
            </span>
            <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-foreground/90">
              Available for opportunities
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold text-foreground tracking-tight leading-[1.1] max-w-3xl">
            Muhammad Absar Siddiqui
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants}>
          <p className="text-base sm:text-lg md:text-xl font-body text-muted leading-relaxed max-w-2xl mt-2 font-medium">
            I build AI-powered applications that turn unstructured human input into structured intelligence.
          </p>
        </motion.div>

        {/* CTA Group */}
        <motion.div variants={itemVariants} className="w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full sm:w-auto px-4">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 font-heading font-semibold rounded-lg bg-accent-primary text-background hover:bg-accent-primary/95 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-accent-primary/10"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 font-heading font-semibold rounded-lg border border-border bg-card text-foreground hover:bg-card-hover hover:border-accent-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Get In Touch
            </a>
            <CVDButton variant="default" className="w-full sm:w-auto py-3 px-6" />
          </div>
        </motion.div>

        {/* Bouncing Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-muted hover:text-accent-primary transition-colors cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
