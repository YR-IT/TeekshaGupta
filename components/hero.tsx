"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "Lato, sans-serif" }}
    >
      {/* Social Media Links */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-6 sm:gap-8 md:gap-12 z-20 text-[#e3c681]">
        <Link
          href="https://www.instagram.com/interior_by_teeksha/?igsh=YnlwaTdsMTdrbWE4"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:scale-110 transition-transform duration-200" />
        </Link>
        <Link
          href="https://www.facebook.com/interiorbyteeksha"
          target="_blank"
          aria-label="Facebook"
        >
          <FaFacebookF className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:scale-110 transition-transform duration-200" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/teeksha-gupta-ba8b34110/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:scale-110 transition-transform duration-200" />
        </Link>
        <Link
          href="https://www.youtube.com/@TEEKSHAGUPTAVLOGS"
          target="_blank"
          aria-label="YouTube"
        >
          <FaYoutube className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:scale-110 transition-transform duration-200" />
        </Link>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
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
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/70"></div>

      {/* Animated Circles */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-10 sm:top-20 left-6 sm:left-20 w-24 sm:w-40 md:w-64 h-24 sm:h-40 md:h-64 border border-white rounded-full animate-spin"
          style={{ animationDuration: "40s" }}
        ></div>
        <div
          className="absolute bottom-10 sm:bottom-20 right-6 sm:right-20 w-20 sm:w-32 md:w-48 h-20 sm:h-32 md:h-48 border border-white rounded-full animate-spin"
          style={{ animationDuration: "35s", animationDirection: "reverse" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-40 md:w-64 h-24 sm:h-40 md:h-64 border border-white rounded-full animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute top-32 sm:top-40 right-8 sm:right-40 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white rotate-45 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 sm:bottom-60 left-8 sm:left-60 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-3 sm:w-4 h-0.5 sm:h-1 bg-white animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Centered Logo Image */}
      <div className="relative z-10 flex justify-center items-center px-4 mt-32 sm:mt-40">
        <Image
          src="/hero_bg.png"
          alt="Teeksha Gupta Architect"
          width={800}
          height={200}
          className="object-contain w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px]"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
