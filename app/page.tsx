'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero';
// import ServicesSection from '@/components/servicesection';
import AboutSection from '@/components/about';
// import ContactSection from '@/components/contact';
import Loader from '@/components/loader';
import Footer from '@/components/footer';
import Projects from '@/components/projectsection';
import Testimonial from '@/components/testimonials';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
      <main className={`min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
         <HeroSection />
        {/* <ServicesSection /> */}
        <AboutSection />
        <Projects />
        <Testimonial />
        {/* <ContactSection /> */}
        <Footer />
      </main>
    </>
  );
}