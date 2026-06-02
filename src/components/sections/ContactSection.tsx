'use client';

import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Github, Linkedin } from '@/components/global/Icons';
import { SectionWrapper } from '@/components/global/SectionWrapper';
import { SectionTitle } from '@/components/global/SectionTitle';
import { ContactCard } from '@/components/cards/ContactCard';
import { CVDButton } from '@/components/global/CVDButton';
import { ScrollReveal } from '@/components/global/ScrollReveal';
import { socialLinks } from '@/data/social';

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      {/* Title */}
      <ScrollReveal direction="up" delay={0.1}>
        <SectionTitle
          title="Get In Touch"
          subtitle="Feel free to reach out. I am currently open to internship, full-time, and project opportunities."
        />
      </ScrollReveal>

      {/* Main Container */}
      <div className="flex flex-col items-center justify-center gap-10 mt-4 max-w-4xl mx-auto">
        {/* Contact Cards Grid */}
        <ScrollReveal direction="up" delay={0.2} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <ContactCard
              icon={Mail}
              title="Email"
              value={socialLinks.email}
              href={`mailto:${socialLinks.email}`}
            />
            <ContactCard
              icon={Linkedin}
              title="LinkedIn"
              value="Absar Siddiqui"
              href={socialLinks.linkedin}
            />
            <ContactCard
              icon={Github}
              title="GitHub"
              value="AbsarSiddiqui"
              href={socialLinks.github}
            />
          </div>
        </ScrollReveal>

        {/* CV & Location Footnotes */}
        <ScrollReveal direction="up" delay={0.3} className="flex flex-col items-center gap-6 mt-2 text-center">
          <p className="text-muted text-sm font-body max-w-md">
            Interested in my detailed professional and academic background? Download my full resume below.
          </p>
          <CVDButton variant="hero" />

          {/* Location */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-card/50 rounded-full text-xs font-mono text-muted mt-4">
            <MapPin className="w-3.5 h-3.5 text-accent-primary" />
            <span>{socialLinks.location}</span>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
