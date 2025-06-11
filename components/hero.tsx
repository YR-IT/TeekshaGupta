"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = ["/hero_image.jpg", "/hero_image2.jpg", "/hero_image3.jpg"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (dotIndex: number) => {
    if (dotIndex !== index) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex(dotIndex);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section id="hero" className="relative h-[100vh] overflow-hidden bg-black">
      {/* Background Images with B&W Filter */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index 
                ? "opacity-100" 
                : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Architecture slide ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
            
            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
            
            {/* Enhanced Black Translucent Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
            
            {/* Additional Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
            
            {/* Enhanced Black Translucent Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
            
            {/* Subtle noise texture overlay for depth */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
          </div>
        ))}
      </div>

      {/* Sophisticated Glassmorphism Content Card */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          {/* Main Content Card */}
          <div className="relative backdrop-blur-2xl bg-white/5 border border-white/15 rounded-3xl p-8 md:p-12 shadow-2xl hover:bg-white/8 transition-all duration-500">
            {/* Elegant shine effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-60" />
            
            {/* Subtle inner border */}
            <div className="absolute inset-1 rounded-3xl border border-white/10" />
            
            <div className="relative z-10 text-center">
              <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                <span className="block font-light">Designing Spaces</span>
                <span className="block font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  That Inspire
                </span>
              </h1>
              
              <p className="mb-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
                We craft modern{" "}
                <span className="text-white font-medium border-b border-white/30">residential</span> and{" "}
                <span className="text-white font-medium border-b border-white/30">commercial</span>{" "}
                environments that blend innovation with timeless elegance.
              </p>

              {/* Sophisticated CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  href="/projects"
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10 tracking-wide">Explore Our Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
                
                <Link
                  href="/contact"
                  className="group relative overflow-hidden bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/20"
                >
                  <span className="relative z-10 tracking-wide">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </div>
            </div>
          </div>

          {/* Elegant Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-4">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`group relative overflow-hidden transition-all duration-500 ${
                  i === index
                    ? "w-12 h-3 bg-white rounded-full shadow-lg"
                    : "w-3 h-3 bg-white/40 hover:bg-white/70 rounded-full hover:scale-125 border border-white/20"
                }`}
              >
                {i === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sophisticated Floating Elements */}
      <div className="absolute top-20 left-8 w-24 h-24 bg-white/5 backdrop-blur-xl rounded-full border border-white/15 animate-pulse shadow-2xl" />
      <div className="absolute bottom-32 right-12 w-16 h-16 bg-white/8 backdrop-blur-xl rounded-full border border-white/20 animate-bounce shadow-xl" />
      <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/10 backdrop-blur-xl rounded-full border border-white/25 shadow-lg" />
      
      {/* Additional sophisticated elements */}
      <div className="absolute top-1/3 left-16 w-2 h-16 bg-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-2 bg-white/15 rounded-full" />

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-3 text-white/80">
          <span className="text-sm font-light tracking-widest uppercase">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce shadow-sm" />
          </div>
        </div>
      </div>

      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/20 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/20 rounded-br-3xl" />
    </section>
  );
};

export default Hero;