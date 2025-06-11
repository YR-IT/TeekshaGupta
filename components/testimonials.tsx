// components/testimonials.tsx

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, Quote, Users, Award, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: "Som Kumar",
    rating: 5,
    quote:
      "Teeksha Gupta's designs harmoniously blend with their surroundings. Her work is a testament to how architecture can enhance and complement the natural environment. Our project was a perfect example of this, with her innovative approach creating a space that feels both modern and timeless.",
  },
  {
    name: "Dhiraj Kumar",
    rating: 4,
    quote:
      "Teeksha Gupta has a knack for creating designs that are both contemporary and timeless. Her buildings age gracefully, maintaining their charm and functionality for decades.",
  },
  {
    name: "Prakash Kumar Raj",
    rating: 5,
    quote:
      "Working with Teeksha Gupta was a fantastic experience. Her innovative designs and commitment to sustainability truly set her apart. Our new home is not only beautiful but also energy-efficient. Teeksha's expertise and professionalism made the entire process seamless.",
  },
  {
    name: "Jai Jindal",
    rating: 5,
    quote:
      "Teeksha Gupta is an exceptional architect. Her designs are not only aesthetically pleasing but also highly functional. Her dedication and passion were evident throughout our renovation project.",
  },
  {
    name: "Nishant Gupta",
    rating: 5,
    quote:
      "Teeksha's commitment to sustainable architecture is truly commendable. She incorporated eco-friendly materials and energy-efficient solutions into our home, making it both beautiful and environmentally responsible.",
  },
  {
    name: "Akshat Verma",
    rating: 4,
    quote:
      "Teeksha has a unique talent for transforming ordinary spaces into extraordinary environments. Her designs are not only aesthetically pleasing but also enhance the functionality of the space.",
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star 
        key={i} 
        className={`w-4 h-4 ${i <= rating ? 'text-white fill-current' : 'text-white/30'} transition-colors duration-300`} 
      />
    );
  }
  return stars;
};

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 6000,
  slidesToShow: 2,
  slidesToScroll: 1,
  pauseOnHover: true,
  fade: false,
  cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonial = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '100+' },
    { icon: Star, label: 'Average Rating', value: '4.8★' },
    { icon: Award, label: 'Projects Completed', value: '50+' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Sophisticated Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/ofc_image2.png"
          alt="Testimonial Background"
          fill
          className="object-cover scale-105 transition-transform duration-[20s] hover:scale-110"
          priority
        />
        {/* Sophisticated Overlay - Matching About Section Style */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Minimalist Decorative Elements */}
      <div className="absolute inset-0 -z-5 opacity-20">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/[0.05] rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-2 h-32 bg-white rotate-45 opacity-20"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-20 bg-white opacity-30"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Section Header - Matching About Section Style */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white text-black text-sm font-medium rounded-full mb-6">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-6xl lg:text-7xl font-light text-white mb-4 tracking-tight">
            What Our
            <span className="block font-bold">Clients Say</span>
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="mx-auto max-w-2xl text-xl text-white/80 leading-relaxed">
            Discover the experiences of those who trusted us to bring their architectural dreams to life
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="testimonials-slider px-2">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4 py-2">
                  <div 
                    className="group relative h-full cursor-pointer"
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    {/* Main Card - Minimalist Design */}
                    <div className={`relative min-h-[320px] flex flex-col bg-white/10 backdrop-blur-xl p-8 transition-all duration-500 border-2 border-transparent hover:border-white/30 hover:bg-white/15 hover:scale-[1.02] ${
                      activeCard === index ? 'border-white/50 shadow-2xl bg-white/15' : ''
                    }`}>
                      
                      {/* Quote Icon */}
                      <div className="absolute -top-4 left-8">
                        <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-xl">
                          <Quote className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-8 flex flex-col h-full">
                        {/* Quote */}
                        <blockquote className="flex-1 text-white/90 text-base leading-relaxed font-light mb-6">
                          <span className="line-clamp-4">
                            "{testimonial.quote}"
                          </span>
                        </blockquote>

                        {/* Footer */}
                        <div className="space-y-4 pt-4 border-t border-white/20">
                          {/* Stars */}
                          <div className="flex gap-1">
                            {renderStars(testimonial.rating)}
                          </div>

                          {/* Client Info */}
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/20 text-white rounded-full flex items-center justify-center border-2 border-white/30 flex-shrink-0">
                              <span className="font-bold text-lg">
                                {testimonial.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="font-bold text-white text-lg">
                                {testimonial.name}
                              </p>
                              <p className="text-white/60 text-sm uppercase tracking-wider">
                                Valued Client
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect Line */}
                      <div className={`absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ${
                        activeCard === index ? 'w-full' : 'w-0'
                      }`}></div>

                      {/* Corner Accents */}
                      <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Stats Section - Matching About Section Style */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl p-8 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-white/30 hover:bg-white/15"
                onMouseEnter={() => setActiveCard(100 + index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white/80 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
                
                {/* Hover effect line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ${
                  activeCard === 100 + index ? 'w-full' : 'w-0'
                }`}></div>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote Section - Matching About Section */}
        {/* <div className={`mt-24 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl p-12 border-2 border-white/20 relative hover:border-white/40 hover:bg-white/15 transition-all duration-500">
              <Quote className="w-16 h-16 text-white/30 mx-auto mb-6" />
              <blockquote className="text-2xl lg:text-3xl font-light text-white leading-relaxed italic mb-6">
                "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."
              </blockquote>
              <div className="text-white/70 font-medium uppercase tracking-wider text-sm">— Our Commitment to Every Project</div>
              
              <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-white/30"></div>
              <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-white/30"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-white/30"></div>
              <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-white/30"></div>
            </div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        .testimonials-slider .slick-track {
          display: flex;
          align-items: stretch;
        }
        .testimonials-slider .slick-slide {
          height: auto;
          display: flex;
        }
        .testimonials-slider .slick-slide > div {
          height: 100%;
          width: 100%;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;