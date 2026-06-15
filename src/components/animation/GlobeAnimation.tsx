'use client';

import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function GlobeAnimation() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if dark mode is active
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDark();
    
    // Watch for class changes on <html>
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className={`w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto flex items-center justify-center opacity-90 ${isDark ? 'drop-shadow-2xl' : ''}`}
      style={!isDark ? { filter: 'brightness(0.5) contrast(1.5) drop-shadow(0 0 4px #06b6d4) drop-shadow(0 0 8px #06b6d4)' } : undefined}
    >
      <DotLottieReact
        src="https://lottie.host/3657adf1-ca8b-49d2-96d7-62a43c02d234/C1BoVt5FB3.lottie"
        loop
        autoplay
        speed={1.5}
      />
    </div>
  );
}
