'use client';

import { useRef } from 'react';
import { useInView, UseInViewOptions } from 'framer-motion';

export function useInViewAnimation(margin = "-100px") {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: margin as UseInViewOptions['margin'] });
  return { ref, isInView };
}
