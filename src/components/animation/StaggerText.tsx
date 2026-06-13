'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StaggerTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
}

export default function StaggerText({ text, className, staggerDelay = 0.05 }: StaggerTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-block ${className || ''}`}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block mr-[0.25em] whitespace-nowrap">
          <motion.span variants={childVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
