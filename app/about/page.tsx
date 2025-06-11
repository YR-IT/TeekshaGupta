"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import { Briefcase, Award, Clock, Users, Leaf, Puzzle } from "lucide-react";

const philosophyCards = [
  {
    icon: <Users className="w-8 h-8 text-black" />,
    title: "Human-Centric Thinking",
    desc: "Architecture should serve the people who inhabit it. By understanding user needs and behaviors, we create spaces that enrich daily life and foster connection.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-black" />,
    title: "Eco-Conscious Design",
    desc: "We integrate environmental responsibility into every project, designing for low impact, reduced carbon footprint, and long-term well-being.",
  },
  {
    icon: <Puzzle className="w-8 h-8 text-black" />,
    title: "Innovating with Purpose",
    desc: "Innovation guided by cultural, social, and environmental context. Our designs balance bold creativity with respectful integration.",
  },
];

const About = () => {
  return (
    <main className="font-inter text-gray-800">
      {/* Hero Section */}
      <Navbar />
      <div style={{ fontFamily: "'Inter', sans-serif" }}>
        <section className="h-[90vh] flex items-center justify-center relative overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/about_bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          {/* Foreground Content */}
          <div className="relative z-20 text-center px-6">
            <h1 className="text-5xl md:text-6xl font-black text-white drop-shadow-xl">
              ABOUT US
            </h1>
            <div className="w-40 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-5" />
            <p className="text-lg md:text-xl mt-4 text-white/90 max-w-3xl mx-auto mt-5">
              Where creativity meets functionality – shaping spaces that reflect
              you.
            </p>
          </div>
        </section>

        {/* The Journey - Our Story */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="w-full relative bg-white p-4 shadow-2xl hover:shadow-3xl hover:-rotate-2 transition-all duration-700 rounded-xl">
              <Image
                src="/award.png"
                alt="Award Recognition"
                width={800}
                height={600}
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />

              {/* Corner borders */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black" />
            </div>

            {/* Right: Content */}
            <div className="text-left">
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                The Journey
              </p>
              <h2 className="text-4xl mb-6 underline underline-offset-8 decoration-gray-400">
                Our Story
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                With over two decades of design excellence, AR-TEEKSHA Interiors
                has earned a reputation as one of the most visionary firms in
                the industry. Our philosophy is rooted in creating spaces that
                evoke comfort and character — whether it’s a bespoke home, a
                cutting-edge workspace, or a tranquil retreat. We also
                specialize in Vastu consulting, industrial design, and landscape
                architecture, blending aesthetics with purpose to craft
                environments that are meaningful and memorable.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Our commitment to innovation and craftsmanship has been
                recognized with multiple prestigious design awards, celebrating
                our ability to merge creativity with functionality. These
                accolades are a testament to the trust our clients place in us
                and our passion for pushing design boundaries.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                Nationally and internationally acclaimed for design excellence,
                AR-TEEKSHA Interiors has earned prestigious awards that
                celebrate our ability to blend creativity with functionality.
                These honors stand as a testament to our commitment to pushing
                design boundaries and creating spaces that leave a lasting
                impression.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy section */}
        <section
          className="py-28 px-6 text-white"
          style={{ backgroundColor: "#1c1c1f" }}
        >
          <div className="max-w-6xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
              What Drives us
            </p>
            <h2 className="text-4xl font-black mb-8">Our Philosophy</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              We believe in blending functionality with artistic expression.
              Every design is a story — your story — crafted with care, detail,
              and emotion. Our philosophy centers on creating soulful spaces
              that inspire and nurture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {philosophyCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-black">
                  {card.title}
                </h3>
                <p className="text-gray-800">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
            {/* Left Spacer or Logo Area */}
            <div className="md:w-1/2 mb-10 md:mb-0" />

            {/* Right Content */}
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 underline underline-offset-8 decoration-gray-400">
                Our Core Principles
              </h2>

              <p className="mb-6 text-gray-800">
                Every project we take on is guided by values that go beyond just
                aesthetics or function. These principles are embedded in how we
                think, collaborate, and create—ensuring that our spaces not only
                look good but feel right and live well.
              </p>

              <p className="mb-6 text-gray-800 font-semibold">
                Collaboration | Craft | People
              </p>

              <p className="mb-4 text-gray-800">
                <strong>Collaboration</strong> — great design doesn't happen in
                isolation. We engage deeply with our clients, consultants, and
                community stakeholders to uncover needs, align visions, and
                build trust. We see each project as a shared journey where
                dialogue and co-creation lead to more meaningful outcomes.
              </p>

              <p className="mb-4 text-gray-800">
                <strong>Craft</strong> — we approach each detail with care.
                Whether it’s the curve of a staircase or the texture of a wall,
                every element is considered. We champion materials that endure,
                forms that serve purpose, and construction that respects both
                time and context.
              </p>

              <p className="mb-4 text-gray-800">
                <strong>People</strong> — at its core, architecture is about the
                human experience. We design spaces where people feel connected,
                comfortable, and inspired—whether it’s a quiet home, a vibrant
                workplace, or a public gathering place. The impact of design is
                measured in how people interact with and feel within their
                environments.
              </p>

              <p className="mb-4 text-gray-800">
                These principles aren’t slogans—they're our compass. They help
                us create work that is not only intelligent and functional, but
                emotionally resonant and deeply human.
              </p>

              {/* Final Statement */}
              <p className="mt-6 text-gray-800 italic">
                Because ultimately,{" "}
                <strong>
                  design isn’t just how something looks—it’s how it shapes
                  experience. That’s why, for us, design truly matters.
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="h-[100vh] flex items-center px-6 py-32 bg-[url('/achievements_bg.jpg')] bg-cover bg-center relative">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-0" />

          <div className="relative z-10 max-w-6xl mx-auto text-center text-white py-16">
            <h2 className="text-5xl font-black mb-6">Our Achievements</h2>
            <p className="text-lg mb-12">
              A few milestones we’re proud of along our journey of creative
              excellence.
            </p>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  stat: "150+",
                  label: "Projects Completed",
                  icon: <Briefcase size={40} className="text-black" />,
                },
                {
                  stat: "18",
                  label: "Design Awards",
                  icon: <Award size={40} className="text-black" />,
                },
                {
                  stat: "10+",
                  label: "Years of Excellence",
                  icon: <Clock size={40} className="text-black" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-6 py-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-white/20 hover:border-white hover:border-2"
                >
                  <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-4xl font-extrabold">{item.stat}</h3>
                  <p className="text-lg mt-2 font-medium">{item.label}</p>
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
