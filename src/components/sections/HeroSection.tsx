'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CVDButton } from '@/components/global/CVDButton';

export function HeroSection() {
  const customEase = [0.25, 0.1, 0.25, 1] as const;

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Name Title with staggered reveals */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.85] font-heading">
          <span className="block overflow-hidden py-1">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: customEase }}
            >
              Muhammad
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            >
              Absar
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
            >
              Siddiqui<span className="text-accent-primary">.</span>
            </motion.span>
          </span>
        </h1>

        {/* Description */}
        <div className="overflow-hidden mt-8">
          <motion.p
            className="text-base md:text-lg text-muted max-w-xl font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: customEase }}
          >
            Software Engineer building AI-powered applications that transform unstructured human input into structured intelligence.
          </motion.p>
        </div>

        {/* Links & CTA */}
        <motion.div
          className="mt-12 flex flex-wrap gap-6 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: customEase }}
        >
          <a 
            href="#projects" 
            className="text-foreground font-medium border-b border-foreground pb-1 hover:text-accent-primary hover:border-accent-primary transition-colors"
          >
            See my work
          </a>
          <a 
            href="#contact" 
            className="text-muted font-medium border-b border-transparent pb-1 hover:text-foreground hover:border-foreground transition-colors"
          >
            Get in touch
          </a>
          <CVDButton variant="hero" />
        </motion.div>
      </div>

      {/* Scroll hint — subtle, bottom right */}
      <motion.div
        className="absolute bottom-8 right-8 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span 
          className="text-muted text-sm font-mono block origin-bottom-right"
          style={{ transform: 'rotate(90deg) translateY(100%)' }}
        >
        
        </span>
      </motion.div>
    </section>
  );
}
