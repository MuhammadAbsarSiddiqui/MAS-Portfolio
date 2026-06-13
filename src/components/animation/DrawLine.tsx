'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface DrawLineProps {
  direction: 'vertical' | 'horizontal';
  color?: string;
  className?: string;
}

export default function DrawLine({ direction, color = 'var(--border)', className }: DrawLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const scaleProperty = direction === 'vertical' ? 'scaleY' : 'scaleX';
    const transformOrigin = direction === 'vertical' ? 'top center' : 'left center';

    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { [scaleProperty]: 0 },
        {
          [scaleProperty]: 1,
          transformOrigin: transformOrigin,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          }
        }
      );
    });

    return () => ctx.revert();
  }, [direction]);

  return (
    <div
      ref={lineRef}
      className={className}
      style={{
        backgroundColor: color,
        width: direction === 'horizontal' ? '100%' : '2px',
        height: direction === 'vertical' ? '100%' : '2px',
      }}
    />
  );
}
