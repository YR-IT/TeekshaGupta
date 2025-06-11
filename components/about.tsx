import React, { useState, useEffect } from 'react';
import { Award, Users, Home, Palette, Star, ArrowRight, Quote } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const stats = [
    { icon: Home, label: 'Projects Completed', value: '150+' },
    { icon: Users, label: 'Happy Clients', value: '120+' },
    { icon: Award, label: 'Years Experience', value: '8+' },
    { icon: Palette, label: 'Design Awards', value: '15+' }
  ];

  const achievements = [
    "Featured in Architectural Digest",
    "Winner of Interior Design Excellence Award 2024", 
    "Certified by International Interior Design Association"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Minimalist Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Geometric Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-2 h-32 bg-black rotate-45 opacity-10"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-20 bg-black opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
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

            {/* Stats Grid - Redesigned */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-8 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-black ${
                    activeCard === index ? 'border-black shadow-2xl' : 'hover:shadow-xl'
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-medium uppercase tracking-wide mt-2">{stat.label}</div>
                    </div>
                  </div>
                  
                  {/* Hover effect line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ${
                    activeCard === index ? 'w-full' : 'w-0'
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
    </section>
  );
};

export default About;