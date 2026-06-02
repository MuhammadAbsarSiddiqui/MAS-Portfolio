'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className,
}: ScrollRevealProps) {
  const getDirections = () => {
    switch (direction) {
      case 'up':
        return { initial: { y: 30, opacity: 0 }, animate: { y: 0, opacity: 1 } };
      case 'down':
        return { initial: { y: -30, opacity: 0 }, animate: { y: 0, opacity: 1 } };
      case 'left':
        return { initial: { x: 30, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      case 'right':
        return { initial: { x: -30, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      default:
        return { initial: { y: 30, opacity: 0 }, animate: { y: 0, opacity: 1 } };
    }
  };

  const variants = getDirections();

  return (
    <motion.div
      className={className}
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] as const, // premium cubic-bezier ease
      }}
    >
      {children}
    </motion.div>
  );
}
