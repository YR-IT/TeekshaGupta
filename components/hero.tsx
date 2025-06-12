"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = ["/hero_image.jpg", "/hero_image2.jpg", "/hero_image3.jpg"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
    
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (dotIndex : number) => {
    if (dotIndex !== index) {
      setIndex(dotIndex);
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Architecture slide ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
      
      {/* Enhanced Black Translucent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/70"></div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 border border-white rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-white rounded-full animate-spin" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white rounded-full animate-pulse"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-40 right-40 w-4 h-4 bg-white rotate-45 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-60 left-60 w-3 h-3 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-6 h-1 bg-white animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 text-center px-8 transform transition-all duration-2000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="mb-8">
          <span className="text-xs tracking-[0.6em] text-gray-300 font-light uppercase mb-8 block animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            Architectural Excellence
          </span>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-none mb-8">
            <span className={`inline-block text-white transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{animationDelay: '0.8s'}}>
              DESIGNING
            </span>
            <br />
            <span className={`inline-block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent font-thin transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{animationDelay: '1.1s'}}>
              SPACES
            </span>
            <br />
            <span className={`inline-block text-white font-extralight transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{animationDelay: '1.4s'}}>
              THAT INSPIRE
            </span>
          </h1>
          
          <div className={`w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-12 transform transition-all duration-1500 ease-out ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} style={{animationDelay: '1.7s'}}></div>
          
          <p className={`text-xl sm:text-2xl text-gray-300 font-light mb-4 transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{animationDelay: '2s'}}>
            MODERN RESIDENTIAL & COMMERCIAL ENVIRONMENTS
          </p>
          
          <p className={`text-lg text-gray-400 font-light mb-12 transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{animationDelay: '2.3s'}}>
            Innovation meets Timeless Elegance
          </p>

          {/* Animated CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{animationDelay: '2.6s'}}>
            <Link
              href="/projects"
              className="group relative overflow-hidden bg-transparent border-2 border-white text-white px-10 py-4 font-light tracking-widest uppercase text-sm transition-all duration-700 hover:text-black"
            >
              <span className="relative z-10">Explore Our Projects</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
            </Link>
            
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-white text-black border-2 border-white px-10 py-4 font-light tracking-widest uppercase text-sm transition-all duration-700 hover:text-white"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
            </Link>
          </div>

          {/* Navigation Dots */}
          <div className={`flex justify-center space-x-4 transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{animationDelay: '2.9s'}}>
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`transition-all duration-500 ${
                  i === index
                    ? "w-12 h-1 bg-white"
                    : "w-3 h-3 bg-white/40 hover:bg-white/70 rounded-full border border-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-xs font-light tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/40"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;