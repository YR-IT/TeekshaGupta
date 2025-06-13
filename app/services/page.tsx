"use client";
import Footer from "@/components/footer";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { services } from "../data/services";
import Link from "next/link";

const ServicesPage = () => {
  const [showServices, setShowServices] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const handleScrollClick = () => {
    setShowServices(true);
    setTimeout(() => {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="bg-white text-black">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/service_bg.jpg"
          alt="Hero Background"
          fill
          className="z-0 object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10" />

        <div className="z-20 px-6">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1
              className="text-5xl md:text-6xl font-black mb-6 text-white drop-shadow-md"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              OUR SERVICES
            </h1>
            <p
              className="text-lg text-gray-300 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We transform spaces into timeless expressions of purpose and
              beauty — merging architectural vision with refined interiors.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        {!showServices && (
          <div className="absolute bottom-8 z-20 flex flex-col items-center text-white opacity-70 hover:opacity-100 transition-opacity duration-300">
            <span className="mb-2 text-sm tracking-wide animate-pulse">
              Click to view
            </span>
            <button
              onClick={handleScrollClick}
              className="animate-bounce"
              aria-label="Scroll to services"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* Conditionally Rendered Services Section & CTA */}
      {showServices && (
        <>
          {/* Services Section */}
          <section
            ref={servicesRef}
            id="services"
            className="pt-20 pb-32 px-6 md:px-10 lg:px-24 space-y-24"
          >
            <div className="text-center max-w-4xl mx-auto mb-16">
              <p
                className="uppercase text-sm tracking-widest text-black-400 mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Our Expertise
              </p>
              <h2
                className="text-5xl font-bold mb-6 text-black underline underline-offset-8 decoration-white/40"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                What We Offer
              </h2>
              <div className="w-40 h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-10"></div>
              <p
                className="text-lg text-black-300 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                At Teeksha Gupta Architects, we offer a comprehensive suite of
                architectural services thoughtfully tailored to meet the
                distinct vision of each project. From the earliest concepts to
                the final build, Teeksha and her team deliver innovative,
                elegant solutions with precision, creativity, and care.
              </p>
            </div>

            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-16 lg:gap-28`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl relative aspect-[6/5]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2
                    className="text-5xl font-semibold mb-4 text-neutral-900 leading-tight"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {service.title}
                  </h2>
                  <div className="w-16 h-1 bg-neutral-300 mb-6 mx-auto lg:mx-0" />
                  <p
                    className="text-lg text-neutral-700 mb-8 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {service.description}
                  </p>
                  <Link
                     href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 bg-gray-700 text-white px-6 py-3 text-sm tracking-wider font-medium hover:bg-gray-900 transition"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </section>

          {/* CTA Section */}
          <section
            className="relative w-full text-center py-24 px-6 bg-cover bg-center"
            style={{ backgroundImage: "url('/1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-10"
              >
                Ready to Start Your Project?
              </motion.h2>

              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true }}
                className="text-lg text-gray-200 mb-14"
              >
                Contact us today to schedule a consultation and discuss how we
                can bring your architectural vision to life.
              </motion.p>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true }}
              >
                <button className="group relative inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white hover:bg-gray-900 hover:text-black transition-all duration-[1000ms] ease-out overflow-hidden ">
                  <span className="relative z-10 text-sm tracking-[0.3em] font-light uppercase">
                    Contact Us
                  </span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-[1000ms] ease-out origin-left"></div>
                </button>
              </motion.div>
            </div>
          </section>
          <Footer />
        </>
      )}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
};

export default ServicesPage;
