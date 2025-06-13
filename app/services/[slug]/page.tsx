"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import { services } from "@/app/data/services";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <main className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      <Navbar />
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Floating Particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-32 w-3 h-3 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-16 left-1/2 w-1.5 h-1.5 bg-white/15 rounded-full animate-ping delay-200"></div>
        <div className="absolute bottom-32 right-1/4 w-2.5 h-2.5 bg-white/20 rounded-full animate-bounce delay-400"></div>

        {/* Vertical Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent animate-pulse delay-700"></div>

        {/* Horizontal Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/6 to-transparent animate-pulse delay-600"></div>

        {/* Diagonal Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/5 via-transparent to-white/5 transform rotate-12 origin-top-left animate-pulse delay-800"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-white/5 via-transparent to-white/5 transform -rotate-12 origin-top-right animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-white/20"></div>
            ))}
          </div>
        </div>

        {/* Geometric Shapes */}
        <div
          className="absolute top-8 right-8 w-16 h-16 border border-white/10 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute bottom-8 left-8 w-12 h-12 border border-white/15 animate-pulse"></div>
        <div
          className="absolute top-1/2 left-8 w-8 h-8 border-2 border-white/20 rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>
        <div className="absolute top-24 right-1/4 w-20 h-20 border border-white/8 rotate-12 animate-pulse delay-500"></div>

        {/* Hexagon Shapes */}
        <div
          className="absolute top-20 left-1/3 w-10 h-10 border border-white/12 transform rotate-30 animate-pulse delay-200"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        ></div>
        <div
          className="absolute bottom-16 right-1/3 w-8 h-8 border border-white/10 transform rotate-60 animate-pulse delay-700"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        ></div>

        {/* Triangle Shapes */}
        <div
          className="absolute top-40 right-12 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white/15 animate-bounce delay-300"
          style={{ animationDuration: "4s" }}
        ></div>
        <div className="absolute bottom-40 left-16 w-0 h-0 border-l-6 border-r-6 border-t-10 border-l-transparent border-r-transparent border-t-white/10 animate-pulse delay-600"></div>

        {/* Connecting Lines */}
        <div className="absolute top-1/3 left-1/4 w-32 h-px bg-gradient-to-r from-white/10 to-transparent animate-pulse delay-400"></div>
        <div className="absolute top-2/3 right-1/4 w-28 h-px bg-gradient-to-l from-white/8 to-transparent animate-pulse delay-800"></div>
        <div className="absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-b from-white/12 to-transparent animate-pulse delay-600"></div>

        {/* Orbital Rings */}
        <div
          className="absolute top-16 left-16 w-24 h-24 border border-white/8 rounded-full animate-spin"
          style={{ animationDuration: "30s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 border border-white/6 rounded-full animate-spin"
          style={{ animationDuration: "25s", animationDirection: "reverse" }}
        ></div>

        {/* Crossing Lines Pattern */}
        <div className="absolute top-0 left-1/2 w-full h-full transform -rotate-45 opacity-20">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent mx-auto animate-pulse delay-900"></div>
        </div>
        <div className="absolute top-0 left-1/2 w-full h-full transform rotate-45 opacity-20">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent mx-auto animate-pulse delay-1100"></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/3 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/2 rounded-full blur-3xl animate-pulse delay-1200"></div>

        {/* Constellation Pattern */}
        <div className="absolute top-12 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-1/3 w-1 h-1 bg-white/25 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-400"></div>
        <div className="absolute top-12 right-1/3 w-8 h-px bg-white/10 transform rotate-45 animate-pulse delay-600"></div>

        {/* Circuit Board Lines */}
        <div className="absolute bottom-32 left-1/4 w-16 h-px bg-white/10 animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-px h-8 bg-white/10 animate-pulse delay-500"></div>
        <div className="absolute bottom-24 left-1/4 w-12 h-px bg-white/8 animate-pulse delay-700"></div>
        <div className="absolute bottom-24 left-80 w-px h-6 bg-white/8 animate-pulse delay-900"></div>

        {/* Diamond Shapes */}
        <div className="absolute top-32 left-1/2 w-6 h-6 border border-white/15 transform rotate-45 animate-pulse delay-400"></div>
        <div className="absolute bottom-48 right-1/2 w-4 h-4 border border-white/12 transform rotate-45 animate-pulse delay-800"></div>
      </div>

      <div className="mx-auto space-y-16 mt-20">
        <header className="text-center mt-32">
          {" "}
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {service.title}
          </h1>
          <div className="w-24 h-1 mx-auto bg-white rounded" />
        </header>

        {/* Image Section */}
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/6] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Description Section */}
        <article
          className="text-lg leading-relaxed tracking-wide max-w-4xl mx-auto text-white px-4"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {service.description}
        </article>

        {/* Key Features + CTA Section in White Background */}
      <div className="relative w-full bg-white py-16 rounded-t-3xl shadow-lg overflow-hidden">
  {/* Particles in the background */}
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 12 }).map((_, i) => {
      const shapes = [
  // square outline
  <div className="w-20 h-20 border-[3px] border-black opacity-10" />,
  
  // circle outline
  <div className="w-20 h-20 border-[3px] border-black rounded-full opacity-10" />,
  
  // triangle outline
  <svg viewBox="0 0 100 100" className="w-20 h-20 fill-none stroke-black opacity-10">
    <polygon points="50,15 90,85 10,85" strokeWidth="4" />
  </svg>,
  
  // hexagon outline (already correct)
  <svg viewBox="0 0 100 100" className="w-20 h-20 fill-none stroke-black opacity-10">
    <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" strokeWidth="4" />
  </svg>,
  
  // ring (already correct)
  <div className="w-20 h-20 border-[3px] border-black rounded-full opacity-10" />,
];

      const shape = shapes[i % shapes.length];
      return (
       <div
        key={i}
        className="absolute animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      >
        {shape}
      </div>
      );
    })}
  </div>
          <section className="px-4 md:px-8 lg:px-24">
            {/* Key Features */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-8 bg-gray-800"></div>
              <h2 className="text-3xl font-semibold text-left text-black uppercase">
                Key Features
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {service.features?.map((feature, index) => (
    <div
      key={index}
      className="relative p-5 bg-gray-100 rounded-xl shadow-md transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:bg-gray-200 hover:ring-2 hover:ring-black/10 group overflow-hidden"
    >
      {/* Bottom border animation */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />

      <div className="flex items-start gap-3 flex-col sm:flex-row">
        <span className="text-black text-xl">✓</span>
        <p className="text-black text-base leading-relaxed">
          {feature}
        </p>
      </div>
    </div>
  ))}
</div>

            {/* CTA Button */}
            <div className="text-center pt-10">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-black text-black rounded-lg transition-all duration-[1000ms] ease-out overflow-hidden mb-6"
              >
                <span className="relative z-10 text-sm tracking-[0.3em] font-bold uppercase transition-colors duration-500 group-hover:text-white">
                  Start Your Project 
                </span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-[1000ms] ease-out origin-center"></div>
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
