'use client';

import React from 'react';
import { SectionWrapper } from '@/components/global/SectionWrapper';
import { Mail, MapPin, Download } from 'lucide-react';
import { Github, Linkedin } from '@/components/global/Icons';
import ScrollReveal from '@/components/animation/ScrollReveal';

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header matching Image 3 */}
        <ScrollReveal>
          <div className="relative mb-2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground inline-block relative pb-4">
              Get In Touch<span className="text-accent-primary">.</span>
              <span className="absolute bottom-0 left-0 w-24 h-[3px] bg-accent-primary" />
            </h2>
          </div>
          <p className="text-muted text-lg mt-6 mb-12 font-body max-w-2xl">
            Feel free to reach out. I am currently open to internship, full-time, and project opportunities.
          </p>
        </ScrollReveal>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email Card */}
          <ScrollReveal delay={0.05} className="h-full">
            <a 
              href="mailto:absar.sid359@gmail.com" 
              className="flex items-center gap-4 p-6 bg-card hover:bg-card-hover border border-border hover:border-accent-primary/40 rounded-xl transition-all duration-300 group h-full"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-background border border-border group-hover:border-accent-primary/30 transition-colors">
                <Mail className="w-5 h-5 text-accent-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-mono font-bold tracking-wider text-muted uppercase">EMAIL</span>
                <span className="block text-sm font-semibold text-foreground mt-1 truncate hover:text-accent-primary transition-colors">
                  absar.sid359@gmail.com
                </span>
              </div>
            </a>
          </ScrollReveal>

          {/* LinkedIn Card */}
          <ScrollReveal delay={0.1} className="h-full">
            <a 
              href="https://www.linkedin.com/in/muhammad-absar-siddiqui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card hover:bg-card-hover border border-border hover:border-accent-primary/40 rounded-xl transition-all duration-300 group h-full"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-background border border-border group-hover:border-accent-primary/30 transition-colors">
                <Linkedin className="w-5 h-5 text-accent-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-mono font-bold tracking-wider text-muted uppercase">LINKEDIN</span>
                <span className="block text-sm font-semibold text-foreground mt-1 truncate group-hover:text-accent-primary transition-colors">
                  Absar Siddiqui
                </span>
              </div>
            </a>
          </ScrollReveal>

          {/* GitHub Card */}
          <ScrollReveal delay={0.15} className="h-full">
            <a 
              href="https://github.com/MuhammadAbsarSiddiqui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card hover:bg-card-hover border border-border hover:border-accent-primary/40 rounded-xl transition-all duration-300 group h-full"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-background border border-border group-hover:border-accent-primary/30 transition-colors">
                <Github className="w-5 h-5 text-accent-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-mono font-bold tracking-wider text-muted uppercase">GITHUB</span>
                <span className="block text-sm font-semibold text-foreground mt-1 truncate group-hover:text-accent-primary transition-colors">
                  AbsarSiddiqui
                </span>
              </div>
            </a>
          </ScrollReveal>
        </div>

        {/* Download Resume Centered Section */}
        <div className="flex flex-col items-center text-center space-y-6">
          <ScrollReveal delay={0.2}>
            <p className="text-muted text-sm max-w-md font-body leading-relaxed">
              Interested in my detailed professional and academic background?<br />
              Download my full resume below.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <a
              href="/cv.pdf"
              download="Muhammad_Absar_Siddiqui_CV.pdf"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-primary hover:bg-accent-primary/95 text-black font-heading font-bold rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 scale-100 hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Download CV PDF"
            >
              <Download className="w-5 h-5 text-black" />
              <span>Download CV</span>
            </a>
          </ScrollReveal>

          {/* Location tag badge */}
          <ScrollReveal delay={0.3}>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-border bg-card/50 text-xs font-mono text-muted">
              <MapPin className="w-3.5 h-3.5 text-accent-primary" />
              <span>Karachi, Pakistan</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
