// app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const projects = [
  {
    id: 1,
    slug: "residential-haven",
    title: "Residential Haven",
    image: "/pro4a.png",
    description:
      "A serene living space blending elegance, comfort, and warmth through refined interiors, curated furnishings, and harmonious tones that evoke a sense of luxury, calm, and timeless residential sophistication.",
    category: "RESIDENTIAL",
    gallery: ["/pro4a.png", "/pro4b.png", "/pro4c.png"],
  },
  {
    id: 2,
    slug: "commercial-space",
    title: "Commercial Showroom",
    image: "/pro1a.jpg",
    description:
      "A thoughtfully designed jewellery showroom combining elegance and functionality with luxurious materials, ambient lighting, secure layouts, and refined displays to enhance customer experience and showcase craftsmanship in a sophisticated environment.",
    category: "COMMERCIAL",
    gallery: [
      "/pro1b.jpg",
      "/pro1c.jpg",
      "/pro1d.jpg",
      "/pro1e.jpg",
      "/pro1f.jpg",
      "/pro1g.jpg",
    ],
  },
  {
    id: 3,
    slug: "hospitality-space",
    title: "Hospitality Space",
    image: "/pro3e.jpeg",
    description:
      "An inviting hospitality environment offering luxurious ambiance, tasteful textures, and immersive design crafted to delight guests, enhance relaxation, and reflect contemporary excellence in comfort and style.",
    category: "HOSPITALITY",
    gallery: ["/pro3e.jpeg", "/pro3b.jpg", "/pro3d.jpg"],
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="bg-black text-white" style={{ fontFamily: "Lato, sans-serif" }}>
      <Navbar />
      <div className="relative h-[80vh] sm:h-screen w-full flex items-center justify-center text-center overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover brightness-100"
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-4 sm:px-8">
          <div className="w-full sm:w-[80%] md:w-[60%] mx-auto">
            <a
              href="/projectPage"
              className="flex items-center text-sm sm:text-base text-white hover:underline mb-4 sm:mb-6 tracking-wide"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </a>
            <h1 className="text-xl sm:text-2xl md:text-5xl font-bold uppercase tracking-wide">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg mt-4 tracking-wide">{project.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto px-12 py-12 sm:py-16 mt-20">
        {/* <p className="text-xs sm:text-sm mb-4 text-center tracking-wide">VISUAL JOURNEY</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 sm:mb-12 text-center underline underline-offset-8 tracking-wide">
          Project Gallery
        </h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {project.gallery.map((img, index) => (
            <div key={index} className="relative group">
              <Image
                src={img}
                alt={`${project.title} image ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-64 sm:h-72 md:h-80 rounded-lg shadow-md group-hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      <section className="py-12 sm:py-16 rounded-3xl">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold mb-4">
            Inspired by Design, Driven by Vision
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-8">
            Dive deeper into our curated collection of innovative architectural
            spaces — where form meets function and creativity has no limits.
          </p>
          <Link href="/contact">
  <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-white text-white hover:text-black transition-all duration-[1000ms] ease-out overflow-hidden">
    <span className="relative z-10 text-xs sm:text-sm md:text-base tracking-[0.3em] font-normal uppercase">
      EXPLORE ALL PROJECTS
    </span>
    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-[1000ms] ease-out origin-left"></div>
  </button>
</Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}
