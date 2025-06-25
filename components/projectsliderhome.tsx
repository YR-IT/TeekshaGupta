"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight } from "lucide-react";

const projects = [
  { title: "Living Room", image: "/pro1a.jpg" },
  { title: "Office Space", image: "/fur5.jpeg" },
  { title: "Modern Villa", image: "/pro2a.jpeg" },
  { title: "Lobby Design", image: "/fur10.jpeg" },
  { title: "Lounge Area", image: "/fur20.jpeg" },
  { title: "Dining Area", image: "/fur14.jpeg" },
  { title: "Luxury Hall", image: "/pro4a.png" },
  { title: "Reception", image: "/fur21.jpeg" },
  { title: "Bedroom Suite", image: "/fur2.jpeg" },
  { title: "Workstation", image: "/fur7.jpeg" },
  { title: "Lounge Area", image: "/fur19.jpeg" },

];

export default function ProjectSlider() {
  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-4 overflow-visible">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
        <span className="text-[#d6b36c]">Portfolio:</span>{" "}
        Iconic Designs That Inspire Worldwide
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        navigation
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2},
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-2 sm:px-6"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx} className="flex items-center justify-center mb-12">
            <div className="relative w-full h-[20rem] sm:h-[22rem] md:h-[24rem] overflow-hidden rounded-2xl group shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA Button */}
      <div className="flex justify-center mt-10 mb-6">
  <a href="/projectPage">
    <button className="group relative inline-flex items-center px-8 py-4 bg-white text-black font-medium uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-white hover:shadow-xl active:scale-95 border border-black">
      <span className="mr-4 transition-all text-sm duration-300 group-hover:tracking-widest">
        View All
      </span>
      <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:bg-white transition-all duration-300 group-hover:w-full"></div>
    </button>
  </a>
</div>

      {/* Swiper navigation styling */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: black !important;
          background: white;
          padding: 0.75rem;
          border-radius: 9999px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
          width: 2.5rem;
          height: 2.5rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1rem;
          font-weight: bold;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #d6b36c;
          color: black !important;
        }
      `}</style>
    </section>
  );
}
