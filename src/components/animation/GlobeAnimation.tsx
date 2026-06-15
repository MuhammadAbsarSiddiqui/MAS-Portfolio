'use client';

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function GlobeAnimation() {
  return (
    <div className="w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto flex items-center justify-center opacity-90 drop-shadow-2xl">
      <DotLottieReact
        src="https://lottie.host/3657adf1-ca8b-49d2-96d7-62a43c02d234/C1BoVt5FB3.lottie"
        loop
        autoplay
        speed={1.5}
      />
    </div>
  );
}
