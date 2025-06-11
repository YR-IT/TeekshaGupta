'use client';

import React, { useState, useEffect } from 'react';

interface LoaderProps {
  onLoadComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 500);
    const timer2 = setTimeout(() => setAnimationPhase(2), 1500);
    const timer3 = setTimeout(() => setAnimationPhase(3), 2500);
    const timer4 = setTimeout(() => setAnimationPhase(4), 4000); // Zoom effect
    const timer5 = setTimeout(() => {
      setIsVisible(false);
      onLoadComplete?.();
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-zinc-950 via-gray-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-gray-400/10 rotate-45 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-zinc-300/15 rotate-12 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-white/5 to-gray-200/10 rounded-full animate-ping"></div>
        
        {/* Elegant geometric patterns */}
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border-2 border-gray-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-12 h-12 bg-gradient-to-br from-gray-300/10 to-transparent rotate-45 animate-pulse"></div>
        
        {/* Flowing lines */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1000 1000">
          <path
            d="M0,300 Q250,100 500,300 T1000,300"
            stroke="url(#gradient1)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,700 Q250,500 500,700 T1000,700"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M200,200 Q500,400 800,200"
            stroke="url(#gradient3)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#d1d5db" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6b7280" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6b7280" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#374151" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f9fafb" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* AR Text with cinematic zoom */}
        <div className="mb-8">
          <span
            className={`inline-block text-6xl md:text-8xl font-light tracking-widest transition-all duration-[1500ms] ease-in-out ${
              animationPhase === 4
                ? 'opacity-100 translate-y-0 scale-[20]'
                : animationPhase >= 1
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 25%, #6b7280 50%, #374151 75%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'serif',
              textShadow: '0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.1)',
              transformOrigin: 'center center',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.2))',
            }}
          >
            AR
          </span>
        </div>

        {/* Divider line */}
        <div className="relative mb-8">
          <div
            className={`h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent transition-all duration-1000 ${
              animationPhase >= 2 && animationPhase < 4 ? 'w-64 opacity-100' : 'w-0 opacity-0'
            }`}
          ></div>
          <div
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full transition-all duration-1000 ${
              animationPhase >= 2 && animationPhase < 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              background: 'radial-gradient(circle, #ffffff 0%, #d1d5db 50%, #6b7280 100%)',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
            }}
          ></div>
        </div>

        {/* TEEKSHA GUPTA Text */}
        <div className={`space-y-2 transition-all duration-1000 ${animationPhase === 4 ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
          <div
            className={`transition-all duration-1000 delay-300 ${
              animationPhase >= 2
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <span
              className="text-2xl md:text-4xl font-extralight tracking-[0.5em] text-transparent bg-clip-text"
              style={{
                background: 'linear-gradient(135deg, #f9fafb 0%, #d1d5db 25%, #9ca3af 50%, #6b7280 75%, #f3f4f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'serif',
                filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.1))',
              }}
            >
              TEEKSHA
            </span>
          </div>
          <div
            className={`transition-all duration-1000 delay-500 ${
              animationPhase >= 2
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <span
              className="text-2xl md:text-4xl font-extralight tracking-[0.5em] text-transparent bg-clip-text"
              style={{
                background: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 25%, #d1d5db 50%, #f9fafb 75%, #e5e7eb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'serif',
                filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.1))',
              }}
            >
              GUPTA
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div
          className={`mt-8 transition-all duration-1000 delay-700 ${
            animationPhase >= 3 && animationPhase < 4
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm md:text-base text-gray-300/90 font-light tracking-widest uppercase" style={{
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
          }}>
            Interior Design Studio
          </p>
        </div>

        {/* Loading dots */}
        <div
          className={`flex justify-center space-x-3 mt-12 transition-all duration-1000 delay-1000 ${
            animationPhase >= 3 && animationPhase < 4 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{
                background: 'radial-gradient(circle, #ffffff 0%, #d1d5db 50%, #9ca3af 100%)',
                animationDelay: `${i * 0.4}s`,
                animationDuration: '2s',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Sophisticated noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}></div>

      {/* Fade out overlay for smooth transition */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
          animationPhase >= 4 ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

export default Loader;