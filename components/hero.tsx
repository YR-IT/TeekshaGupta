"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = ["/hero_image.jpg", "/hero_image2.jpg", "/hero_image3.jpg"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start image slideshow immediately
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);

    // Trigger background animations first
    setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Trigger content animations after 2 seconds
    setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (dotIndex : number) => {
    if (dotIndex !== index) {
      setIndex(dotIndex);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
              className="object-cover object-center"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
      
      {/* Enhanced Black Translucent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/70"></div>

      {/* Animated Background Pattern - Responsive */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 sm:top-20 left-8 sm:left-20 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 border border-white rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
        <div className="absolute bottom-16 sm:bottom-20 right-8 sm:right-20 w-24 sm:w-48 lg:w-64 h-24 sm:h-48 lg:h-64 border border-white rounded-full animate-spin" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-60 lg:w-80 h-32 sm:h-60 lg:h-80 border border-white rounded-full animate-pulse"></div>
      </div>

      {/* Floating Geometric Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-32 sm:top-40 right-8 sm:right-40 w-3 sm:w-4 h-3 sm:h-4 bg-white rotate-45 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 sm:bottom-60 left-8 sm:left-60 w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-4 sm:w-6 h-0.5 sm:h-1 bg-white animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 xl:px-16 w-full max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          {/* Tagline - Appears first with slide up and fade */}
          <span className={`text-xs sm:text-sm tracking-[0.4em] sm:tracking-[0.6em] text-gray-300 font-light uppercase mb-6 sm:mb-8 py-4 sm:py-8 block transition-all duration-1200 ease-out transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Architectural Excellence
          </span>
          
          {/* Main Heading - Sophisticated staggered entrance */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight leading-none mb-6 sm:mb-8">
            {/* DESIGNING - Slides in from left with scale effect */}
            <span 
              className={`inline-block text-white transition-all duration-1000 ease-out transform ${
                showContent ? 'translate-x-0 translate-y-0 opacity-100 scale-100' : '-translate-x-12 translate-y-6 opacity-0 scale-95'
              }`}
              style={{transitionDelay: '400ms'}}
            >
              DESIGNING
            </span>
            <br />
            {/* SPACES - Zooms in with gradient reveal */}
            <span 
              className={`inline-block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent font-thin transition-all duration-1200 ease-out transform ${
                showContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-110'
              }`}
              style={{transitionDelay: '800ms'}}
            >
              SPACES
            </span>
            <br />
            {/* THAT INSPIRE - Slides in from right with bounce effect */}
            <span 
              className={`inline-block text-white font-extralight transition-all duration-1000 ease-out transform ${
                showContent ? 'translate-x-0 translate-y-0 opacity-100 scale-100' : 'translate-x-12 translate-y-6 opacity-0 scale-95'
              }`}
              style={{transitionDelay: '1200ms'}}
            >
              THAT INSPIRE
            </span>
          </h1>
          
          {/* Decorative Line - Expands from center */}
          <div 
            className={`w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 sm:mb-12 transition-all duration-1000 ease-out transform ${
              showContent ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
            style={{transitionDelay: '1600ms'}}
          ></div>
          
          {/* Subtitle - Fades in with gentle slide up */}
          <p 
            className={`text-lg sm:text-xl lg:text-2xl text-gray-300 font-light mb-3 sm:mb-4 px-4 transition-all duration-1000 ease-out transform ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{transitionDelay: '2000ms'}}
          >
            MODERN RESIDENTIAL & COMMERCIAL ENVIRONMENTS
          </p>
          
          {/* Tagline - Subtle entrance */}
          <p 
            className={`text-base sm:text-lg text-gray-400 font-light mb-8 sm:mb-12 px-4 transition-all duration-800 ease-out transform ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
            style={{transitionDelay: '2400ms'}}
          >
            Innovation meets Timeless Elegance
          </p>

          {/* CTA Buttons - Slide up with stagger */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8 px-4 transition-all duration-1000 ease-out transform ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{transitionDelay: '2800ms'}}
          >
            <Link
              href="/projects"
              className="group relative overflow-hidden bg-transparent border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 font-light tracking-widest uppercase text-xs sm:text-sm transition-all duration-700 hover:text-black w-full sm:w-auto max-w-xs transform hover:scale-105"
            >
              <span className="relative z-10">Explore Our Projects</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
            </Link>
            
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-white text-black border-2 border-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 font-light tracking-widest uppercase text-xs sm:text-sm transition-all duration-700 hover:text-white w-full sm:w-auto max-w-xs transform hover:scale-105"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
            </Link>
          </div>

          {/* Navigation Dots - Gentle fade in */}
          <div 
            className={`flex justify-center space-x-3 sm:space-x-4 transition-all duration-800 ease-out transform ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{transitionDelay: '3200ms'}}
          >
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`transition-all duration-500 hover:scale-110 ${
                  i === index
                    ? "w-8 sm:w-12 h-0.5 sm:h-1 bg-white"
                    : "w-2 sm:w-3 h-2 sm:h-3 bg-white/40 hover:bg-white/70 rounded-full border border-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-1 sm:space-y-2 text-white/60">
          <span className="text-xs font-light tracking-widest uppercase">Scroll</span>
          <div className="w-px h-6 sm:h-8 bg-white/40"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;