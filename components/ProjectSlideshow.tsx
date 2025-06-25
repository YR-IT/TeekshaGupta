// components/ProjectSlideshow.tsx
'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface ProjectImage {
  src: string;
  title: string;
  description: string;
  ctaText: string;
}

interface ProjectSlideshowProps {
  images: ProjectImage[];
  projectTitle: string;
}

const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({ images, projectTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTimeRef = useRef<number>(0);

  const changeSlide = useCallback((direction: 'up' | 'down') => {
    if (isTransitioning) return;

    const now = Date.now();
    if (now - lastScrollTimeRef.current < 150) return;

    lastScrollTimeRef.current = now;
    setIsTransitioning(true);

    if (direction === 'down' && currentIndex < images.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (direction === 'up' && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setTimeout(() => setIsTransitioning(false), 100);
      return;
    }

    setTimeout(() => setIsTransitioning(false), 600);
  }, [currentIndex, images.length, isTransitioning]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const direction = e.deltaY > 0 ? 'down' : 'up';
        changeSlide(direction);
      }, 15);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        changeSlide('down');
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        changeSlide('up');
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        document.removeEventListener('keydown', handleKeyDown);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [changeSlide]);

  const handleContactClick = () => {
    router.push('/contact');
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Get current image data
  const currentImage = images[currentIndex];
  const isEvenSlide = currentIndex % 2 === 0;

  return (
    <div 
      ref={containerRef}
      className="h-screen w-full overflow-hidden relative bg-black"
    >
      {/* Progress Dots - Right Side */}
      <div className="fixed top-1/2 right-6 z-50 flex flex-col items-center space-y-3 transform -translate-y-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
              index === currentIndex 
                ? 'bg-white scale-125 shadow-lg shadow-white/30' 
                : 'bg-white/40 hover:bg-white/70 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter - Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <div className="flex items-center space-x-3 text-white">
          <div className="w-8 h-px bg-white/60" />
          <div className="font-light text-lg tracking-wider">
            <span className="text-xl font-thin">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-white/50 mx-2">/</span>
            <span className="text-white/70 text-base">{String(images.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Background Images Container */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              index === currentIndex
                ? 'opacity-100 transform translate-y-0'
                : index < currentIndex
                ? 'opacity-0 transform -translate-y-4'
                : 'opacity-0 transform translate-y-4'
            }`}
          >
            {/* Background Image */}
            <div
  className="absolute inset-0 bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${image.src})`,
    filter: 'brightness(0.9) contrast(1.1) saturate(1.05)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
     backgroundSize: projectTitle === "Furniture Design" ? 'contain' : 'cover',
  }}
/> 

            {/* Bottom Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(
                  to top,
                  rgba(0, 0, 0, 0.8) 0%,
                  rgba(0, 0, 0, 0.5) 20%,
                  rgba(0, 0, 0, 0.2) 40%,
                  transparent 70%
                )`
              }}
            />
          </div>
        ))}
      </div>

      {/* SINGLE CONTENT OVERLAY - Always visible and reactive */}
      <div className="absolute bottom-0 left-0 right-0 z-40">
        <div className="px-6 md:px-12 lg:px-16 pb-8 md:pb-12">
          
          {/* Project Title */}
          <div className="mb-6">
            <h1 
              className="text-white text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] uppercase opacity-90 transition-all duration-700"
              style={{ 
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.8)',
              }}
            >
              {projectTitle}
            </h1>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            
            {/* Text Content - Updates based on current slide */}
            <div className="flex-1 max-w-2xl">
              <h2 
                key={`title-${currentIndex}`}
                className="text-white text-2xl md:text-3xl lg:text-4xl font-normal mb-4 leading-tight transition-all duration-700"
                style={{ 
                  textShadow: '0 2px 15px rgba(0, 0, 0, 0.9)',
                }}
              >
                {currentImage.title}
              </h2>
              
              <p 
                key={`desc-${currentIndex}`}
                className="text-white/95 text-lg md:text-xl leading-relaxed font-light max-w-xl transition-all duration-700"
                style={{ 
                  textShadow: '0 1px 8px rgba(0, 0, 0, 0.8)',
                }}
              >
                {currentImage.description}
              </p>
            </div>

            {/* SINGLE CTA BUTTON - Always present, changes style based on slide */}
            <div className="flex-shrink-0">
              {isEvenSlide ? (
                /* WHITE TO BLACK BUTTON (Even slides: 0, 2, 4...) */
                <button
                  key={`cta-${currentIndex}`}
                  onClick={handleContactClick}
                  className="relative inline-flex items-center justify-center gap-3 overflow-hidden border-2 border-white bg-white text-black font-medium py-4 px-8 transition-all duration-500 group shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                >
                  <span className="relative z-10 group-hover:text-white transition-all duration-500 tracking-wide uppercase text-sm group-hover:tracking-wider">
                    {currentImage.ctaText}
                  </span>
                  <span className="relative z-10 text-lg group-hover:text-white transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110">
                    →
                  </span>
                  
                  {/* Sliding Black Background */}
                  <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-20" />
                  
                  {/* Pulse Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />
                </button>
              ) : (
                /* BLACK TO WHITE BUTTON (Odd slides: 1, 3, 5...) */
                <button
                  key={`cta-${currentIndex}`}
                  onClick={handleContactClick}
                  className="relative inline-flex items-center justify-center gap-3 overflow-hidden border-2 border-black bg-black text-white font-medium py-4 px-8 transition-all duration-500 group shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                >
                  <span className="relative z-10 group-hover:text-black transition-all duration-500 tracking-wide uppercase text-sm group-hover:tracking-wider">
                    {currentImage.ctaText}
                  </span>
                  <span className="relative z-10 text-lg group-hover:text-black transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110">
                    →
                  </span>
                  
                  {/* Sliding White Background */}
                  <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-20" />
                  
                  {/* Pulse Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Hint */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex flex-col items-center space-y-2 opacity-60">
          <div className="animate-bounce">
            <svg 
              width="16" 
              height="24" 
              viewBox="0 0 16 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path 
                d="M8 6L4 10H7V18H9V10H12L8 6Z" 
                fill="currentColor"
                className="drop-shadow-lg"
              />
              <rect 
                x="6" 
                y="2" 
                width="4" 
                height="8" 
                rx="2" 
                stroke="currentColor" 
                strokeWidth="1"
                fill="none"
                className="opacity-70"
              />
            </svg>
          </div>
          <div className="w-px h-4 bg-white/30 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlideshow;