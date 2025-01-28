import React, { useEffect, useRef } from 'react';
import '../../public/fonts.css';

const Banner = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadScripts = async () => {
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
      threeScript.async = true;
      document.body.appendChild(threeScript);

      threeScript.onload = () => {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
        vantaScript.async = true;
        document.body.appendChild(vantaScript);

        vantaScript.onload = () => {
          if (window.VANTA && !vantaEffect.current) {
            vantaEffect.current = window.VANTA.NET({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: true,
              minHeight: 200.0,
              minWidth: 400.0,
              scale: 1.0,
              scaleMobile: 1.0,
              backgroundColor: 0x0a192f, // Deep blue
              color: 0x00c9ff,    // Bright cyan highlights

              points: 10,
              maxDistance: 20,
              spacing: 15,
              showDots: true,
            });
          }
        };
      };
    };

    loadScripts();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="w-full h-96 relative overflow-hidden flex items-center justify-start"
    >
      <div className="absolute inset-0 flex flex-col justify-center pl-8 md:pl-16 lg:pl-24 font-roboto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
          Certificate Generator
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white max-w-md">
          Create and generate certificates easily. Select a template, fill in the details, and generate your certificate.
        </p>
      </div>
    </div>
  );
};

export default Banner;
