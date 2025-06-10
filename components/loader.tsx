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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-teal-400/20 rotate-12 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-yellow-400/10 to-teal-400/10 rounded-full animate-ping"></div>
        
        {/* Flowing lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <path
            d="M0,300 Q250,100 500,300 T1000,300"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,700 Q250,500 500,700 T1000,700"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3" />
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
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #14b8a6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'serif',
              textShadow: '0 0 30px rgba(251, 191, 36, 0.3)',
              transformOrigin: 'center center',
            }}
          >
            AR
          </span>
        </div>

        {/* Divider line */}
        <div className="relative mb-8">
          <div
            className={`h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-all duration-1000 ${
              animationPhase >= 2 && animationPhase < 4 ? 'w-64 opacity-100' : 'w-0 opacity-0'
            }`}
          ></div>
          <div
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-teal-400 rounded-full transition-all duration-1000 ${
              animationPhase >= 2 && animationPhase < 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
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
                background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'serif',
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
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #14b8a6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'serif',
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
          <p className="text-sm md:text-base text-teal-200/80 font-light tracking-widest uppercase">
            Interior Design Studio
          </p>
        </div>

        {/* Loading dots */}
        <div
          className={`flex justify-center space-x-2 mt-12 transition-all duration-1000 delay-1000 ${
            animationPhase >= 3 && animationPhase < 4 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-teal-400 animate-pulse"
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: '1.5s',
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Fade out overlay for smooth transition */}
      <div
        className={`absolute inset-0 bg-slate-900 transition-opacity duration-1000 ${
          animationPhase >= 4 ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

export default Loader;
