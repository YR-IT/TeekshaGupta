// components/testimonials.tsx

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";

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
      i <= rating ? (
        <AiFillStar key={i} className="text-amber-400 text-lg drop-shadow-sm" />
      ) : (
        <AiOutlineStar key={i} className="text-amber-200 text-lg" />
      )
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
  return (
    <section className="relative flex w-full items-center justify-center px-4 py-20 text-center overflow-hidden">
      {/* Enhanced Background with Gradient Overlays */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/ofc_image2.png"
          alt="Testimonial Background"
          fill
          className="object-cover brightness-40 scale-105 transition-transform duration-[20s] hover:scale-110"
          priority
        />
        {/* Multi-layered gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-5 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Enhanced Header Section */}
        <div className="mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 backdrop-blur-sm rounded-full border border-amber-400/20">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-300 text-sm font-medium tracking-wide uppercase">
              Client Testimonials
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed">
            Discover the experiences of those who trusted us to bring their{" "}
            <span className="text-amber-300 font-medium">architectural dreams</span> to life
          </p>
        </div>

        {/* Enhanced Slider */}
        <div className="testimonials-slider px-2">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4 py-2">
                <div className="group relative h-full">
                  {/* Glowing border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/30 via-yellow-300/20 to-amber-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Main card - Auto height with proper constraints */}
                  <div className="relative min-h-[280px] max-h-[350px] flex flex-col rounded-2xl bg-white/5 backdrop-blur-xl p-6 sm:p-7 shadow-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                    
                    {/* Quote Icon */}
                    <div className="absolute -top-2 left-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                        <FaQuoteLeft className="text-white text-sm" />
                      </div>
                    </div>

                    {/* Content with proper spacing */}
                    <div className="pt-5 flex flex-col h-full gap-4">
                      {/* Quote - Flexible height with proper line clamping */}
                      <blockquote className="flex-1 text-yellow-100 text-sm sm:text-base leading-relaxed font-light italic overflow-hidden">
                        <span className="line-clamp-4 sm:line-clamp-5">
                          "{testimonial.quote}"
                        </span>
                      </blockquote>

                      {/* Footer - Fixed at bottom */}
                      <div className="flex-shrink-0 space-y-3 pt-2">
                        {/* Stars */}
                        <div className="flex justify-start gap-1">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Name */}
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full flex items-center justify-center border border-amber-400/30 flex-shrink-0">
                            <span className="text-amber-300 font-bold text-sm">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-white text-base truncate">
                              {testimonial.name}
                            </p>
                            <p className="text-amber-300/80 text-xs">
                              Valued Client
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner accents */}
                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Bottom CTA or Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-amber-400">100+</div>
            <div className="text-slate-300 text-sm">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-amber-400">4.8★</div>
            <div className="text-slate-300 text-sm">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-amber-400">50+</div>
            <div className="text-slate-300 text-sm">Projects Completed</div>
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