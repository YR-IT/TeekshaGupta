"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Modern Residential Home",
    description:
      "This stunning modern residential home is a seamless blend of contemporary design and natural elements. Floor-to-ceiling windows allow sunlight to flood the interior spaces, highlighting the open floor plan and minimalist aesthetic. The house features sustainable materials, smart home technology, and a connection to nature through landscaped courtyards and panoramic views. Every detail is crafted to promote comfort, efficiency, and timeless elegance.",
    image: "/project1.jpg",
    link: "/projects/modern-residential-home",
  },
  {
    id: 2,
    title: "Commercial Office Space",
    description:
      "Designed for innovation and productivity, this commercial office space redefines the modern workplace. The layout encourages collaboration through flexible work zones, breakout lounges, and acoustically optimized meeting areas. Natural light is maximized with glass partitions and skylights, while biophilic design elements create a calming, healthy atmosphere. Premium materials and sophisticated finishes reflect a strong brand identity and professional culture.",
    image: "/project2.jpg",
    link: "/projects/commercial-office-space",
  },
  {
    id: 3,
    title: "Urban Apartment Complex",
    description:
      "Located in the vibrant core of the city, this urban apartment complex offers a modern lifestyle with unmatched convenience. The design focuses on sustainability and community, featuring green roofs, energy-efficient systems, and shared amenities like rooftop gardens, fitness centers, and co-working spaces. Interiors boast sleek, contemporary finishes with open-concept living, smart appliances, and plenty of natural light. It’s a forward-thinking residential solution for urban dwellers.",
    image: "/project3.jpg",
    link: "/projects/urban-apartment-complex",
  },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-10 py-24 px-6 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-pink-100 opacity-30 blur-3xl"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14 text-center text-4xl font-extrabold text-gray-800 md:text-5xl"
      >
        <span className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-black">
          OUR PROJECTS
        </span>
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      </motion.h2>

      <div className="space-y-24">
        {projects.map(({ id, title, description, image, link }, index) => {
          const isEven = index % 2 !== 0;

          return (
            <motion.a
              key={id}
              href={link}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`group flex flex-col ${
                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-8 rounded-3xl bg-white/70 p-6 shadow-md backdrop-blur-md transition hover:shadow-2xl hover:border-purple-300 border border-gray-200`}
            >
              {/* Image */}
              <div className="relative h-64 w-full flex-1 overflow-hidden rounded-3xl">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={id === 1}
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="mb-4 text-2xl font-bold text-indigo-700 group-hover:text-purple-600 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
