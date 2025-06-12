import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Home, Palette, Star, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Home, label: 'Projects Completed', value: 150, suffix: '+' },
    { icon: Users, label: 'Happy Clients', value: 120, suffix: '+' },
    { icon: Award, label: 'Years Experience', value: 8, suffix: '+' },
    { icon: Palette, label: 'Design Awards', value: 15, suffix: '+' }
  ];

    const ratings = [
      { icon: Users, label: 'Happy Clients', value: '100', suffix: '+' },
      { icon: Star, label: 'Average Rating', value: '4.8', suffix: '★' },
      { icon: Award, label: 'Projects Completed', value: '50', suffix: '+' }
    ];
  
  const achievements = [
    "Featured in Architectural Digest",
    "Winner of Interior Design Excellence Award 2024", 
    "Certified by International Interior Design Association"
  ];


interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  isVisible: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return <span>{count}{suffix}</span>;
};

  const easeOutQuart = (t: number): number => {
    return 1 - Math.pow(1 - t, 4);
  };

  // Animate counter with easing
  const animateValue = (
    start: number,
    end: number,
    duration: number,
    callback: (value: number) => void,
    delay: number = 0
  ) => {
    setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easedProgress = easeOutQuart(progress);
        const currentValue = Math.floor(start + (end - start) * easedProgress);
        
        callback(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay);
  };

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsVisible) {
            setStatsVisible(true);
            
            // Animate each stat with staggered delays
            stats.forEach((stat, index) => {
              animateValue(
                0,
                stat.value,
                2000, // 2 seconds duration
                (value) => {
                  setAnimatedValues(prev => {
                    const newValues = [...prev];
                    newValues[index] = value;
                    return newValues;
                  });
                },
                index * 200 // 200ms delay between each counter
              );
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [statsVisible]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="relative bg-gray-50 overflow-hidden">
    
      {/* RATINGS Section */}
<div 
  className={`relative bg-[#1a1c1a] py-20 overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
>
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    {/* Floating Particles */}
    <div className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
    <div className="absolute top-32 right-20 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
    <div className="absolute bottom-20 left-32 w-3 h-3 bg-white/10 rounded-full animate-bounce"></div>
    <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-300"></div>
    
    {/* Geometric Lines */}
    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse"></div>
    <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse delay-500"></div>
    
    {/* Subtle Grid Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="grid grid-cols-12 h-full">
        {Array.from({length: 12}).map((_, i) => (
          <div key={i} className="border-r border-white/20"></div>
        ))}
      </div>
    </div>
    
    {/* Animated Gradient Orbs */}
    <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/3 rounded-full blur-2xl animate-pulse delay-700"></div>
    
    {/* Moving Diagonal Lines */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-1/4 -left-20 w-40 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-45 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent transform -rotate-45 animate-pulse delay-1000"></div>
    </div>
  </div>

  {/* Content Container */}
  <div className="relative z-10 px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {ratings.map((stat, index) => (
        <div
          key={index}
          className={`group relative bg-white/10 backdrop-blur-xl p-8 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-white/30 hover:bg-white/15 hover:shadow-2xl hover:shadow-white/10 ${
            isVisible ? 'animate-bounce-in' : ''
          }`}
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'both'
          }}
          onMouseEnter={() => setActiveCard(100 + index)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="text-center space-y-4">
            <div className={`w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto transition-all duration-500 ${
              isVisible ? 'group-hover:scale-110 group-hover:rotate-12' : ''
            }`}>
              <stat.icon className="w-7 h-7" />
            </div>
            <div>
              <div className={`text-4xl font-bold text-white mb-2 transition-all duration-300 ${
                isVisible ? 'transform scale-110' : ''
              }`}>
                <span className="inline-block">
                  {animatedValues[index]}{stat.suffix}
                </span>
              </div>
              <div className="text-white/80 text-sm font-medium uppercase tracking-wider group-hover:text-white/70 transition-colors duration-300">{stat.label}</div>
            </div>
          </div>
          
          {/* Enhanced Hover effect line */}
          <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white via-white/80 to-white transition-all duration-300 ${
            activeCard === 100 + index ? 'w-full' : 'w-0'
          }`}></div>

          {/* Corner accents with glow */}
          <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-white/30 opacity-0 group-hover:opacity-100 group-hover:shadow-sm group-hover:shadow-white/30 transition-all duration-300"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-white/30 opacity-0 group-hover:opacity-100 group-hover:shadow-sm group-hover:shadow-white/30 transition-all duration-300"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-white/30 opacity-0 group-hover:opacity-100 group-hover:shadow-sm group-hover:shadow-white/30 transition-all duration-300"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-white/30 opacity-0 group-hover:opacity-100 group-hover:shadow-sm group-hover:shadow-white/30 transition-all duration-300"></div>
          
          {/* Card glow effect on hover */}
          <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>
      ))}
    </div>
  </div>
{/* </div> */}



  {/* Bottom Quote Section */}
  <div className={`mt-24 text-center transition-all duration-1000 delay-700 relative z-10 px-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-xl p-12 border-2 border-white/20 relative hover:border-white/40 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10">
        <Quote className="w-16 h-16 text-white/30 mx-auto mb-6 hover:text-white/40 transition-colors duration-300" />
        <blockquote className="text-2xl lg:text-3xl font-light text-white leading-relaxed italic mb-6">
          "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."
        </blockquote>
        <div className="text-white/70 font-medium uppercase tracking-wider text-sm">— Our Commitment to Every Project</div>
        
        {/* Enhanced corner decorations */}
        <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-white/30 hover:border-white/50 transition-colors duration-300"></div>
        <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-white/30 hover:border-white/50 transition-colors duration-300"></div>
        <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-white/30 hover:border-white/50 transition-colors duration-300"></div>
        <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-white/30 hover:border-white/50 transition-colors duration-300"></div>
        
        {/* Quote section glow effect */}
        <div className="absolute inset-0 rounded-lg bg-white/3 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      </div>
    </div>
  </div>
</div>

              

     
      <div className="relative container mx-auto px-6 py-8 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            ABOUT ME
          </div>
          <h2 className="text-6xl lg:text-7xl font-light text-black mb-4 tracking-tight">
            Teeksha
            <span className="block font-bold">Gupta</span>
          </h2>
          <div className="w-24 h-px bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Content Section - Left Side */}
          <div className={`lg:col-span-7 space-y-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            
            {/* Main Description */}
            <div className="space-y-8">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-black/20" />
                <p className="text-2xl lg:text-3xl font-light text-black leading-relaxed pl-8">
                  Creating spaces that tell stories, evoke emotions, and transform the way people experience their environments.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-black/10">
                <div>
                  <h3 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">Philosophy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    With over 8 years of experience, I believe great design transcends aesthetics—it's about creating functional art that enhances daily life and reflects individual personality.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every project begins with understanding your story. I blend contemporary innovation with timeless principles to craft spaces that are both striking and deeply personal.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid - Redesigned with Animation */}
            <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-8 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-black transform ${
                    activeCard === index ? 'border-black shadow-2xl scale-105' : 'hover:shadow-xl hover:scale-102'
                  } ${statsVisible ? 'animate-bounce-in' : ''}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="text-center space-y-4">
                    <div className={`w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto transition-all duration-500 ${
                      statsVisible ? 'group-hover:scale-110 group-hover:rotate-12' : ''
                    }`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`text-3xl font-bold text-black transition-all duration-300 ${
                        statsVisible ? 'transform scale-110' : ''
                      }`}>
                        <span className="inline-block">
                          {animatedValues[index]}{stat.suffix}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 font-medium uppercase tracking-wide mt-2">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect line with pulsing animation */}
                  <div className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${
                    activeCard === index ? 'w-full bg-black' : 'w-0 bg-black'
                  } ${statsVisible ? 'animate-pulse-slow' : ''}`}></div>
                  
                  {/* Glowing effect when animated */}
                  <div className={`absolute inset-0 rounded-lg transition-all duration-1000 ${
                    statsVisible && animatedValues[index] > 0 ? 'shadow-lg shadow-black/10' : ''
                  }`}></div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="bg-white p-8 border-l-4 border-black">
              <h3 className="text-xl font-bold text-black mb-6 uppercase tracking-wider">Recognition</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section - Right Side */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative group">
                {/* Background Shape */}
                <div className="absolute -inset-8 bg-black/5 rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
                
                {/* Image */}
                <div className="relative bg-white p-4 shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:-rotate-1">
                  <img
                    src="/TeekshaGupta.png"
                    alt="Teeksha Gupta - Interior Designer"
                    className="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-black text-white px-6 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 fill-current" />
                    <div>
                      <div className="text-sm font-bold">Award Winner</div>
                      <div className="text-xs opacity-80">2024</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-black/20 rotate-45"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-black/10 rotate-12"></div>
            </div>
          </div>
        </div>

        {/* FIXED Learn More Button - Properly positioned and styled */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link href="/about">
            <button className="group relative inline-flex items-center px-8 py-4 bg-black text-white font-medium uppercase tracking-wider transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:shadow-black/20 active:scale-95">
              <span className="mr-4 transition-all duration-300 group-hover:tracking-widest">
                Learn More About Us
              </span>
              <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
              
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-white opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-white opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-white opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-white opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
            </button>
          </Link>
        </div>
        
        {/* Bottom Quote Section */}
        <div className={`mt-24 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 shadow-xl relative">
              <Quote className="w-12 h-12 text-black/20 mx-auto mb-6" />
              <blockquote className="text-2xl lg:text-3xl font-light text-black leading-relaxed italic">
                "Design is not just what it looks like and feels like. Design is how it works."
              </blockquote>
              <div className="mt-6 text-gray-600 font-medium">— My Design Philosophy</div>
              
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-black/20"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-black/20"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-black/20"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-black/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
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
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default About;