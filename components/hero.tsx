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

  const handleDotClick = (dotIndex :number) => {
    if (dotIndex !== index) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex(dotIndex);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section id="hero" className="relative h-[100vh] overflow-hidden">
      {/* Background Images - Fixed to show full images */}
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
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/50" />
          </div>
        ))}
      </div>

      {/* Floating Glassmorphism Content Card */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          {/* Main Content Card */}
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Glassmorphism shine effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50" />
            
            <div className="relative z-10 text-center">
              <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Designing Spaces</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  That Inspire
                </span>
              </h1>
              
              <p className="mb-8 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                We craft modern{" "}
                <span className="text-yellow-400 font-semibold">residential</span> and{" "}
                <span className="text-yellow-400 font-semibold">commercial</span>{" "}
                environments that blend innovation with timeless elegance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  href="/projects"
                  className="group relative overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10">Explore Our Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
                
                <Link
                  href="/contact"
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </div>
            </div>
          </div>

          {/* Image Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`group relative overflow-hidden transition-all duration-300 ${
                  i === index
                    ? "w-12 h-3 bg-white rounded-full"
                    : "w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full hover:scale-125"
                }`}
              >
                {i === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-8 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-pulse" />
      <div className="absolute bottom-32 right-12 w-16 h-16 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-400/30 animate-bounce" />
      <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/30" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 text-white/70">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;