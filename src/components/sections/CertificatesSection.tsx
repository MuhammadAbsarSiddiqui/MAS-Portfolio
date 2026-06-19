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
            <div key={`${cert.id}-${i}`} className="shrink-0 w-[290px] sm:w-[350px] md:w-[400px] flex items-stretch">
              <div className="w-full">
                <CertificateCard cert={cert} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
