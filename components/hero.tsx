"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="relative h-[95vh] flex items-center justify-center overflow-hidden" style={{ fontFamily: "Lato, sans-serif" }}>
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ filter: "brightness(50%)" }}
          autoPlay
          muted
          loop
          playsInline
        > 
          <source src="/pj.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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

      <div className="relative z-10 w-full flex flex-col items-center justify-end pt-64 sm:pt-70 select-none">
  <h1 className="text-amber-300 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl italic tracking-wider text-center z-0">
    Teeksha{" "}
    <span className="relative inline-block">
      Gupta
      <span className="absolute left-3/4 -bottom-4 sm:-bottom-6 transform -translate-x-1/2 text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl italic font-light whitespace-nowrap">
        Architect
      </span>
    </span>
  </h1>

  <div className="absolute -top-0 sm:-top-0 left-1/2 transform -translate-x-1/2 z-20">
    <Image
      src="/teeksha.png"
      alt="Architect Portrait"
      width={400} 
      height={800}
      className="object-contain pointer-events-none select-none"
    />
  </div>
</div>
    </section>
  );
};

export default Hero;