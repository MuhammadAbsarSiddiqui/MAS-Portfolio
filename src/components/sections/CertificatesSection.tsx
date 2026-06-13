'use client';

import React from 'react';
import { certificates } from '@/data/certificates';
import { SectionWrapper } from '@/components/global/SectionWrapper';
import { SectionTitle } from '@/components/global/SectionTitle';
import CertificateCard from '@/components/cards/CertificateCard';
import ScrollReveal from '@/components/animation/ScrollReveal';

import { useState } from 'react';

export default function CertificatesSection() {
  // Double the list to create a seamless loop
  const doubled = [...certificates, ...certificates];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <SectionWrapper id="certificates" className="overflow-hidden">
      <ScrollReveal>
        <SectionTitle title="Certificates" subtitle="Continuous learning, applied in production." />
      </ScrollReveal>

      <div className="mt-12 relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div 
          className="animate-marquee flex gap-6 cursor-pointer"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseDown={() => setIsPaused(true)}
          onMouseUp={() => setIsPaused(false)}
        >
          {doubled.map((cert, i) => (
            <div key={`${cert.id}-${i}`} className="flex-shrink-0 w-[290px] sm:w-[350px] md:w-[400px]">
              <CertificateCard cert={cert} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
