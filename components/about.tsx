import React, { useState, useEffect } from 'react';
import { Award, Users, Home, Palette, Star, ArrowRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [activeCard, setActiveCard] = useState(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);


  const stats = [
    { icon: Home, label: 'Projects Completed', value: '150+', color: 'from-amber-400 to-orange-500' },
    { icon: Users, label: 'Happy Clients', value: '120+', color: 'from-emerald-400 to-teal-500' },
    { icon: Award, label: 'Years Experience', value: '8+', color: 'from-purple-400 to-pink-500' },
    { icon: Palette, label: 'Design Awards', value: '15+', color: 'from-blue-400 to-indigo-500' }
  ];

  const achievements = [
    "Featured in Architectural Digest",
    "Winner of Interior Design Excellence Award 2024",
    "Certified by International Interior Design Association"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-teal-200/20">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-white to-teal-50"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-teal-200/30 to-emerald-300/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-pink-300/30 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section with Sophisticated Frame */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/20 via-orange-300/20 to-teal-400/20 rounded-3xl blur-sm group-hover:blur-md transition-all duration-300"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-white/80 to-stone-100/80 rounded-2xl backdrop-blur-sm"></div>
              
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/TeekshaGupta.png"
                  alt="Teeksha Gupta - Interior Designer"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">Award Winner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-800">
                <Palette className="w-4 h-4" />
                Interior Design Specialist
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                About Teeksha Gupta
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 8 years of experience in interior design, I specialize in creating spaces that are both beautiful and functional. My approach combines contemporary aesthetics with timeless elegance, ensuring each project reflects the unique personality and lifestyle of my clients.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe that great design is about more than just beautiful spaces—it's about creating environments that enhance the way you live, work, and connect with others. Every project is a collaboration, and I work closely with my clients to bring their vision to life.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    activeCard === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onMouseEnter={() => setActiveCard(index )}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`relative w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                  
                  {/* Hover Arrow */}
                  <ArrowRight className={`absolute top-6 right-6 w-4 h-4 text-gray-400 transition-all duration-300 ${
                    activeCard === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;