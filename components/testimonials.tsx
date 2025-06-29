// components/testimonials.tsx

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, Quote, Users, Award, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: "Ankit Singla",
    rating: 5,
    quote:
      "Teeksha has a great vision and she could visualise our home beautifully long before we could see it happening. Starting from understanding our requirements, conceptualising, putting the concepts on paper and executing, she has been on the top of it even on the day she delivered a baby!! I haven't seen anyone more committed to work than she is! It was a pleasure working with Teeksha and Salil. Thank you guys!!",
  },
  {
    name: "Nitish Giri",
    rating: 5,
    quote:
      "Teeksha Gupta has a gift for transforming spaces into something extraordinary. Her innovative use of space and materials brought a new life to our project, making it both aesthetically pleasing and incredibly functional.",
  },
  {
    name: "Prince Kumar",
    rating: 5,
    quote:
      "From concept to completion, Teeksha Gupta’s work was flawless. Her ability to manage the project efficiently and address every detail ensured that everything ran smoothly. Highly impressed with her professionalism.",
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
    rating: 5,
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
        className={`w-4 h-4 ${i <= rating ? 'text-amber-400 fill-current' : 'text-white/30'} transition-colors duration-300`} 
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
  autoplaySpeed: 4000,
  slidesToShow: 2,
  slidesToScroll: 1,
  pauseOnHover: false,
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

  const ratings = [
    { icon: Users, label: 'Happy Clients', value: '100+' },
    { icon: Star, label: 'Average Rating', value: '4.8★' },
    { icon: Award, label: 'Projects Completed', value: '50+' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden"  style={{ fontFamily: "Lato, sans-serif" }}>
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
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white text-black text-xs font-medium rounded-full mb-6">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight">
  What Our
  <br />
  <span className="font-bold">
    <span className="font-bold bg-gradient-to-r from-white via-yellow-300 to-yellow-500 bg-clip-text text-transparent">CLIENTS</span> Say
  </span>
</h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="mx-auto max-w-2xl text-lg text-white/80 leading-relaxed">
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
                        <blockquote className="flex-1 text-white/90 text-base tracking-wide leading-relaxed font-light mb-6">
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