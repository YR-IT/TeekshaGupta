"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-[95vh] flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "Lato, sans-serif" }}
    >
      {/* Social Media Links */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-12 z-20 text-[#e3c681]">
        <Link href="https://www.instagram.com/interior_by_teeksha/?igsh=YnlwaTdsMTdrbWE4" target="_blank">
          <FaInstagram className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
        </Link>
        <Link href="https://www.facebook.com/interiorbyteeksha" target="_blank">
          <FaFacebookF className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
        </Link>
        <Link href="https://www.linkedin.com/in/teeksha-gupta-ba8b34110/" target="_blank">
          <FaLinkedinIn className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
        </Link>
        <Link href="https://www.youtube.com/@TEEKSHAGUPTAVLOGS" target="_blank">
          <FaYoutube className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
        </Link>
      </div>

      {/* Background Video */}
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

      {/* Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/70"></div>

      {/* Animated Circles */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-16 sm:top-20 left-8 sm:left-20 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 border border-white rounded-full animate-spin"
          style={{ animationDuration: "40s" }}
        ></div>
        <div
          className="absolute bottom-16 sm:bottom-20 right-8 sm:right-20 w-24 sm:w-48 lg:w-64 h-24 sm:h-48 lg:h-64 border border-white rounded-full animate-spin"
          style={{ animationDuration: "35s", animationDirection: "reverse" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-60 lg:w-80 h-32 sm:h-60 lg:h-80 border border-white rounded-full animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute top-32 sm:top-40 right-8 sm:right-40 w-3 sm:w-4 h-3 sm:h-4 bg-white rotate-45 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 sm:bottom-60 left-8 sm:left-60 w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-4 sm:w-6 h-0.5 sm:h-1 bg-white animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
      {/* Centered Logo Image */}
<div className="relative z-10 flex justify-center items-center mt-40 select-none">
  <Image
    src="/hero_bg.png"
    alt="Teeksha Gupta Architect"
    width={800}
    height={200}
    className="object-contain"
  />
</div>

    </section>
  );
};

export default Hero;
