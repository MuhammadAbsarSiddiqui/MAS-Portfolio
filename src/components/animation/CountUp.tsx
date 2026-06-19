'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { gsap } from 'gsap';

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({ target, suffix = '', duration = 1.5 }: CountUpProps) {
  const [value, setValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "0px 0px -20px 0px" });

  useEffect(() => {
    if (!isInView) return;

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration: duration,
        ease: 'power2.out',
        onUpdate: () => {
          setValue(Math.round(obj.val));
        },
        onComplete: () => {
          setValue(target);
        }
      });
    });

    return () => ctx.revert();
  }, [target, duration, isInView]);

  return (
    <span ref={elementRef}>
      {value}
      {suffix}
    </span>
  );
}
