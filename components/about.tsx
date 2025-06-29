"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  Users,
  Home,
  Palette,
  Star,
  ArrowRight,
  Quote,
} from "lucide-react";
import Link from "next/link";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const achievements = [
  "Awarded for Best Interior Design at Architecture Reconnect Summit 2024",
  "India Design Award 2023 for Eco & Luxury Interiors",
  "Eminent Jury at ARCH EX 2024, Chandigarh",
];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="relative bg-black overflow-hidden" style={{ fontFamily: "Lato, sans-serif" }}>

      <div className="relative container mx-auto px-6 py-28 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-medium text-white mb-4 tracking-tight leading-tight" style={{ fontFamily: "Lato, sans-serif" }}>
            About Teeksha Gupta Architect
            <span className="block bg-gradient-to-r from-white via-yellow-300 to-yellow-500 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl mt-4 tracking-wide">"Elegance Built Into Form"</span>
          </h2>

          <div className="w-24 h-px bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div
            className={`lg:col-span-7 space-y-12 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-8">
              <div className="relative px-4 sm:px-6 md:px-8">
                <Quote className="absolute -top-4 -left-4 w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-light text-white/75 leading-relaxed pl-8 sm:pl-10">
                  Creating spaces that tell stories, evoke emotions, and
                  transform the way people experience their environments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-black/10">
                <div>
                  <h3 className="text-base font-bold text-white/75 mb-4 uppercase tracking-wider">
                    Philosophy
                  </h3>
                  <p className="text-white/75 text-base leading-relaxed tracking-wide">
                    With over 10 years of experience, I believe great design
                    transcends aesthetics—it's about creating functional art
                    that enhances daily life and reflects individual
                    personality.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white/75 mb-4 uppercase tracking-wider">
                    Approach
                  </h3>
                  <p className="text-white/75 text-base leading-relaxed tracking-wide">
                    Every project begins with understanding your story. I blend
                    contemporary innovation with timeless principles to craft
                    spaces that are both striking and deeply personal.
                  </p>
                </div>
              </div>
              {/* Signature Paragraph */}
<div className="w-full flex justify-center">
  <img 
    src="/name_sign.png" 
    alt="Teeksha Gupta Signature" 
    className="w-full max-w-[600px] object-contain"
  />
</div>
            </div>


            {/* Achievements */}
            <div className="pl-8 border-l-2 border-white">
              <h3 className="text-lg font-bold text-white/75 mb-6 uppercase tracking-wider">
                Recognition
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-2 h-2 bg-white rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-white/75 text-base font-light">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-8 bg-white/50 rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
                <div className="relative bg-white p-4 shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:-rotate-1">
                  <img
                    src="/about_image.JPG"
                    alt="Teeksha Gupta - Interior Designer"
                    className="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-black text-white px-4 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 fill-current" />
                    <div>
                      <div className="text-sm font-bold">Award Winner</div>
                      <div className="text-xs opacity-80">2024</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-black/20 rotate-45"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-black/10 rotate-12"></div>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link href="/about">
  <button className="group relative inline-flex items-center px-8 py-4 bg-white text-black font-medium uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-white hover:shadow-xl active:scale-95 border border-black">
    <span
      className="mr-4 transition-all text-sm duration-300 group-hover:tracking-widest"
    >
      Learn More About Us
    </span>
    <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:bg-white transition-all duration-300 group-hover:w-full"></div>
  </button>
</Link>

        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          50% {
            transform: translateY(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .scale-102 {
          transform: scale(1.02);
        }

        .tabular-nums {
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </section>
  );
};

export default About;
