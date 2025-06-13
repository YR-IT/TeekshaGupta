import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      "Located in the vibrant core of the city, this urban apartment complex offers a modern lifestyle with unmatched convenience. The design focuses on sustainability and community, featuring green roofs, energy-efficient systems, and shared amenities like rooftop gardens, fitness centers, and co-working spaces. Interiors boast sleek, contemporary finishes with open-concept living, smart appliances, and plenty of natural light. It's a forward-thinking residential solution for urban dwellers.",
    image: "/project3.jpg",
    link: "/projects/urban-apartment-complex",
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
      !isEven ? 'lg:flex-row-reverse' : ''
    }`}>
      {/* Image Container - Takes up more space */}
      <div className="flex-1 lg:flex-[1.4] w-full">
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
          {/* Fixed aspect ratio container that works on all screen sizes */}
          <div className="relative w-full h-0 pb-[75%] sm:pb-[66.67%] lg:pb-[75%]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
              priority={index === 0}
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            {/* Overlay for better text readability on hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Floating project number */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-sm text-gray-900 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-lg">
            {String(project.id).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 space-y-4 sm:space-y-6 w-full">
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            {project.description}
          </p>
        </div>
        
        <Link 
          href={project.link}
          className="inline-flex items-center gap-3 text-gray-900 font-medium text-base sm:text-lg hover:gap-4 transition-all duration-300 group"
        >
          View Project
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const ProjectSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-gray-900 mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover our latest interior design projects that showcase innovative spaces, 
            thoughtful functionality, and timeless aesthetic appeal.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;