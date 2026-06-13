'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientOrb() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ x: '10%', y: '20%' }}
      />
    </div>
  );
}
