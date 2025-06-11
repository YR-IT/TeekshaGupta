"use client";
import Footer from "@/components/footer";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

const services = [
  {
    title: "Architectural Design",
    description:
      "Our architectural design process fuses creativity with technical precision. We tailor every building to its context, ensuring both aesthetic beauty and functional harmony. From early-stage ideation to detailed blueprints, our work reflects deep attention to proportion, light, space, and materiality—transforming concepts into enduring architectural landmarks.",
    image: "/architect_service.jpg",
  },
  {
    title: "Planning Applications",
    description:
      "Navigating the regulatory landscape can be daunting. We handle the entire planning application process, preparing compelling documents, drawings, and statements that align with local authority guidelines. Our expertise ensures smoother approvals, mitigated risks, and a streamlined path to your project's realization.",
    image: "/planning_service.jpg",
  },
  {
    title: "Interior Design",
    description:
      "We craft immersive interior experiences that are tailored to your lifestyle and aspirations. Our designs reflect a balance of texture, lighting, and custom furnishings—layered with timeless sophistication. Whether residential or commercial, our spaces enhance the human experience and evoke emotion.",
    image: "/interior_service.jpg",
  },
  {
    title: "Conservation & Heritage Design",
    description:
      "Our heritage work honors the past while embracing the future. We breathe new life into historic buildings through meticulous restoration, adaptive reuse, and sensitive design interventions. Every detail respects cultural integrity, blending old-world craftsmanship with contemporary design sensibilities.",
    image: "/heritage_service.jpg",
  },
  {
    title: "Create & Construct",
    description:
      "We offer a full design-and-build solution that ensures architectural vision is fully realized during construction. Our integrated team oversees every phase—budgeting, materials, timelines, and execution—delivering cohesive, high-quality results with a single point of accountability.",
    image: "/contruct_service.jpg",
  },
];

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
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm tracking-wider font-medium hover:bg-gray-700 transition"
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
                  </a>
                </div>
              </motion.div>
            ))}
          </section>

          {/* CTA Section */}
          <section
            className="relative w-full text-center py-24 px-6 bg-cover bg-center"
            style={{ backgroundImage: "url('/2.png')" }}
          >
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                Contact us today to schedule a consultation and discuss how we
                can bring your architectural vision to life.
              </p>
              <button className="group relative bg-white inline-flex items-center justify-center px-10 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-[1000ms] ease-out overflow-hidden rounded-full">
              <span className="relative z-10 text-sm tracking-[0.3em] font-light uppercase">
                Contact Us
              </span>
              <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-[1000ms] ease-out origin-center rounded-full"></div>
            </button>
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
