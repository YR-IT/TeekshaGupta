"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Award, Clock, Users, Leaf, Puzzle } from "lucide-react";

const philosophyCards = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Human-Centric Thinking",
    desc: "Architecture should serve the people who inhabit it. By understanding user needs and behaviors, we create spaces that enrich daily life and foster connection.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-white" />,
    title: "Eco-Conscious Design",
    desc: "We integrate environmental responsibility into every project, designing for low impact, reduced carbon footprint, and long-term well-being.",
  },
  {
    icon: <Puzzle className="w-8 h-8 text-white" />,
    title: "Innovating with Purpose",
    desc: "Innovation guided by cultural, social, and environmental context. Our designs balance bold creativity with respectful integration.",
  },
];

const achievements = [
  {
    target: 150,
    suffix: "+",
    label: "Projects Completed",
    icon: <Briefcase size={40} className="text-black" />,
  },
  {
    target: 18,
    suffix: "",
    label: "Design Awards",
    icon: <Award size={40} className="text-black" />,
  },
  {
    target: 10,
    suffix: "+",
    label: "Years of Excellence",
    icon: <Clock size={40} className="text-black" />,
  },
];

const AchievementCounter = ({ target, suffix }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const duration = 1500;

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-extrabold">
      {count}
      {suffix}
    </div>
  );
};

const About = () => {
  return (
    <main className="font-inter text-gray-800">
      <Navbar />
      <div style={{ fontFamily: "DM Serif Text" }}>
        {/* Hero Section */}
        <section className="h-[70vh] sm:h-[90vh] flex items-center justify-center relative overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
            <source src="/about_bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 text-center px-6">
            <h1 className="text-5xl md:text-6xl font-black text-white drop-shadow-xl">ABOUT US</h1>
            <div className="w-40 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-5" />
            <p className="text-lg md:text-xl mt-4 text-white/90 max-w-3xl mx-auto mt-5">
              Where creativity meets functionality – shaping spaces that reflect you.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full relative bg-white p-4 shadow-2xl hover:shadow-3xl hover:-rotate-2 transition-all duration-700 rounded-xl">
              <Image
                src="/award.png"
                alt="Award Recognition"
                width={800}
                height={600}
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black" />
            </div>
            <div className="text-left">
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">The Journey</p>
              <h2 className="text-4xl mb-6 underline underline-offset-8 decoration-gray-400">Our Story</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6"  style={{ fontFamily: "DM Serif Text" }}>
                With over two decades of design excellence, AR-TEEKSHA Interiors has earned a reputation as one of the
                most visionary firms in the industry. Our philosophy is rooted in creating spaces that evoke comfort and
                character — whether it’s a bespoke home, a cutting-edge workspace, or a tranquil retreat.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6"  style={{ fontFamily: "DM Serif Text" }}>
                Our commitment to innovation and craftsmanship has been recognized with multiple prestigious design
                awards, celebrating our ability to merge creativity with functionality.
              </p>
              <p className="text-lg leading-relaxed text-gray-700"  style={{ fontFamily: "DM Serif Text" }}>
                Nationally and internationally acclaimed, our accolades stand as a testament to our passion and
                dedication to design that resonates.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-28 px-6 text-white" style={{ backgroundColor: "#1c1c1f" }}>
          <div className="max-w-6xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2"  style={{ fontFamily: "DM Serif Text" }}>What Drives us</p>
            <h2 className="text-4xl font-black mb-8">Our Philosophy</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-8"  style={{ fontFamily: "DM Serif Text" }}>
              We believe in blending functionality with artistic expression. Every design is a story — your story —
              crafted with care, detail, and emotion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {philosophyCards.map((card, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/30 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer text-white"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-white/90"  style={{ fontFamily: "DM Serif Text" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="h-full">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/design.jpg"
                  alt="Interior design by AR-TEEKSHA"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                />
              </div>
            </div>

            <div className="text-gray-800">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 underline underline-offset-8 decoration-gray-300">
                Design with Purpose
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 max-w-prose"  style={{ fontFamily: "DM Serif Text" }}>
                At <strong>AR-TEEKSHA Interiors</strong>, we believe that exceptional design is intentional. It goes
                beyond style—shaping spaces that support how people live, feel, and connect.
              </p>
              <div className="space-y-6 text-base leading-relaxed text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Collaboration</h3>
                  <p  style={{ fontFamily: "DM Serif Text" }}>
                    Our process begins with listening. We work closely with clients to develop thoughtful design rooted
                    in clarity, transparency, and trust.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Craft</h3>
                  <p  style={{ fontFamily: "DM Serif Text" }}>
                    Details matter. From materials and lighting to proportion and finish, our work reflects a commitment
                    to enduring quality and meaningful form.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">People</h3>
                  <p  style={{ fontFamily: "DM Serif Text" }}>
                    Every space is made for people. We focus on comfort, beauty, and usability—creating interiors that
                    foster well-being and connection.
                  </p>
                </div>
              </div>
              <p className="mt-10 italic text-lg text-gray-800"  style={{ fontFamily: "DM Serif Text" }}>
                Thoughtful design isn’t just about how a space looks—
                <strong> it’s about how it makes you feel.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section with Animated Counters */}
        <section className="relative bg-[url('/achievements_bg.jpg')] bg-cover bg-center px-4 sm:px-6 py-16 sm:py-24 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 max-w-6xl w-full text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">Our Achievements</h2>
            <p className="text-base sm:text-lg mb-12 max-w-2xl mx-auto"  style={{ fontFamily: "DM Serif Text" }}>
              A few milestones we’re proud of along our journey of creative excellence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-6 py-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-white/20 hover:border-white hover:border-2"
                >
                  <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <AchievementCounter target={item.target} suffix={item.suffix} />
                  <p className="text-base sm:text-lg mt-2 font-dark"  style={{ fontFamily: "DM Serif Text" }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default About;
