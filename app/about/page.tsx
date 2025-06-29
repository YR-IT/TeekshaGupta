"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

const About = () => {
    const awards = [
    {
      title: "Best Interior Design 2022",
      image: "/award1.jpeg",
    },
    {
      title: "Architect’s WOW Award 2024 – Best Interior Design",
      image: "/award2.jpeg",
    },
    {
      title: "Global Architecture Innovation",
      image: "/award3.jpeg",
    },
    {
      title: "Global Architecture Innovation",
      image: "/award.png",
    },
    {
      title: "Global Architecture Innovation",
      image: "/award_teeksha.jpeg",
    },
  ];

  return (
    <main className="font-inter text-white bg-black" style={{ fontFamily: "Lato, sans-serif" }}>
      <Navbar />
      <div style={{ fontFamily: "Lato, sans-serif" }}>
        {/* Hero Section */}
        <section className="h-[70vh] sm:h-[90vh] flex items-center justify-center relative overflow-hidden">
          <video autoPlay style={{ filter: "brightness(70%)" }} loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
            <source src="/about_bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 text-center px-6">
            <h1 className="text-5xl md:text-6xl font-light text-white drop-shadow-xl tracking-wide"><span className="font-light bg-gradient-to-r from-white via-yellow-300 to-yellow-500 bg-clip-text text-transparent">ABOUT US</span></h1>
            <div className="w-40 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-5" />
            <p className="text-base md:text-lg mt-4 text-white/90 max-w-3xl mx-auto mt-5 tracking-wide">
              Where creativity meets functionality – shaping spaces that reflect you.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-6 bg-black">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative group">
        {/* ✅ Responsive background shape */}
        <div className="absolute inset-0 -m-4 md:-m-8 bg-white/50 rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>

        {/* ✅ Image container */}
        <div className="relative bg-white p-2 md:p-4 shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:-rotate-1 rounded-xl">
          <Image
  src="/award_teeksha.jpeg"
  alt="Award Recognition"
  width={600}
  height={400}
  className="shadow-xl w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 max-h-[32rem]"
/>

          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black" />
        </div>
      </div>

      {/* Floating shapes */}
      <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 border border-white/20 rotate-45"></div>
      <div className="absolute -bottom-6 -left-6 w-12 h-12 md:w-16 md:h-16 bg-white/10 rotate-12"></div>
    </div>

    <div className="text-left">
      <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">The Journey</p>
      <h2 className="text-4xl mb-6 underline underline-offset-8 decoration-white">Our Story</h2>
      <p className="text-base leading-relaxed text-white/75 mb-6 tracking-wide">
        With over decades of design excellence, TAS Designs has earned a reputation as one of the
        most visionary firms in the industry. Our philosophy is rooted in creating spaces that evoke comfort and
        character — whether it’s a bespoke home, a cutting-edge workspace, or a tranquil retreat.
      </p>
      <p className="text-base leading-relaxed text-white/75 mb-6 tracking-wide">
        Our commitment to innovation and craftsmanship has been recognized with multiple prestigious design
        awards, celebrating our ability to merge creativity with functionality.
      </p>
      <p className="text-base leading-relaxed text-white/75 tracking-wide">
        Nationally and internationally acclaimed, our accolades stand as a testament to our passion and
        dedication to design that resonates.
      </p>
    </div>
  </div>
</section>


        {/* Founding Team Section */}
<section className="py-12 px-6 bg-black text-white">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Our Leadership</p>
    <h2 className="text-4xl font-black mb-4 tracking-wide">Founding Team</h2>
    <p className="text-lg leading-relaxed text-white/70 max-w-3xl mx-auto">
  Founded in 2015, TAS Designs has been driven by a passionate team of visionaries committed to shaping innovative, thoughtful architecture.
</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-28 max-w-6xl mx-auto select-none">
  {/* Teeksha Gupta */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-center px-2 py-2">
    <div className="w-full aspect-square mb-4 relative group overflow-hidden rounded-xl">
      <Image
        src="/teeksha_about.jpg"
        alt="Teeksha Gupta"
        fill
        className="object-cover transform transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h3 className="text-xl font-bold text-black leading-tight">Teeksha Gupta</h3>
    <p className="text-gray-700 text-sm mt-1 leading-snug">Bachelor of Architecture</p>
    <p className="text-gray-500 text-xs leading-snug">C.O.A. Registered, Founder</p>
  </div>

  {/* Salil Modgil */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-center px-2 py-2">
    <div className="w-full aspect-square mb-4 relative group overflow-hidden rounded-xl">
      <Image
        src="/salil.jpg"
        alt="Salil Modgil"
        fill
        className="object-cover transform transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h3 className="text-lg font-bold text-black leading-tight">Salil Modgil</h3>
    <p className="text-gray-700 text-sm mt-1 leading-snug">B.Tech, M.Tech Urban Planning</p>
    <p className="text-gray-500 text-xs leading-snug">Founder</p>
  </div>
</div>
</section>

        {/* Awards section */}
        <section className="py-16 px-6 bg-black text-white">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
      Recognitions
    </p>
    <h2 className="text-4xl font-black mb-4 tracking-wide">
      Awards & Honors
    </h2>
    <p className="text-lg leading-relaxed text-white/70 max-w-3xl mx-auto">
      Celebrating our journey through design excellence and industry recognition.
    </p>
  </div>

 <Swiper
  modules={[Autoplay, Navigation]}
  spaceBetween={50}
  loop
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  navigation={{
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  }}
  breakpoints={{
    320: { slidesPerView: 1 },
    480: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="px-12 sm:px-12 relative"
>
  {awards.map((award, index) => (
    <SwiperSlide
      key={index}
      className="flex items-center justify-center mb-12"
    >
      <div className="bg-white/5 border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-500 relative w-full aspect-[3/3]">
        <Image
          src={award.image}
          alt={award.title}
          fill
          className="object-cover"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

</section>

        {/* Core Values Section */}
        <section className="bg-black py-12 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <div className="h-full flex justify-center md:justify-start">
      <div className="relative w-full max-w-[600px] aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
        <Image
          src="/design.jpg"
          alt="Interior design by AR-TEEKSHA"
          fill
          className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
        />
      </div>
    </div>

    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-8">
        Design with{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-yellow-300 via-orange-400 to-amber-300">
          Purpose
        </span>
      </h2>
      <p className="mb-6 text-base leading-relaxed text-white/90 max-w-prose tracking-wide">
        At <strong>TAS Designs</strong>, we believe that exceptional design is intentional. It goes
        beyond style—shaping spaces that support how people live, feel, and connect.
      </p>
      <div className="space-y-6 text-base leading-relaxed text-white/80">
        <div className="tracking-wide">
          <h3 className="text-lg font-semibold text-white mb-1">Collaboration</h3>
          <p>
            Our process begins with listening. We work closely with clients to develop thoughtful
            design rooted in clarity, transparency, and trust.
          </p>
        </div>
        <div className="tracking-wide">
          <h3 className="text-lg font-semibold text-white mb-1">Craft</h3>
          <p>
            Details matter. From materials and lighting to proportion and finish, our work reflects
            a commitment to enduring quality and meaningful form.
          </p>
        </div>
        <div className="tracking-wide">
          <h3 className="text-lg font-semibold text-white mb-1">People</h3>
          <p>
            Every space is made for people. We focus on comfort, beauty, and usability—creating
            interiors that foster well-being and connection.
          </p>
        </div>
      </div>
      <p className="mt-10 italic text-lg text-white tracking-wide">
        Thoughtful design isn’t just about how a space looks—
        <strong> it’s about how it makes you feel.</strong>
      </p>
    </div>
  </div>
</section>
      </div>
      <Footer />
    </main>
  );
};

export default About;
