'use client'
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(new Set<number>());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const projectId = parseInt(target.dataset.projectId || '0');
          
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            setVisibleProjects(prev => new Set([...Array.from(prev), projectId]));

          } else if (entry.intersectionRatio < 0.05) {
            setVisibleProjects(prev => {
              const newSet = new Set(prev);
              newSet.delete(projectId);
              return newSet;
            });
          }
        });
      },
      {
        threshold: [0.05, 0.2, 0.5],
        rootMargin: '-5% 0px -5% 0px'
      }
    );

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      slug: "residential-haven",
      title: "Residential Haven",
      image: "/pro4a.png",
      description: "Luxurious and elegant bedroom interiors with modern materials and sophisticated lighting design.",
      category: "RESIDENTIAL"
    },
    {
      id: 2,
      slug: "jewellery-showroom",
      title: "Jewellery Showroom",
      image: "/pro1a.jpg",
      description: "A luxurious retail environment crafted to showcase elegance, enhance customer experience, and reflect the brilliance of fine jewellery.",
      category: "COMMERCIAL"
    },
    {
      id: 3,
      slug: "commercial-workspace",
      title: "Commercial Workspace",
      image: "/pro2a.jpeg",
      description: "Luxurious and elegant workspace interiors with modern materials and ergonomic considerations.",
      category: "COMMERCIAL"
    },
    {
  id: 4,
  slug: "furniture-studio",
  title: "Modern Furniture Studio",
  image: "/fur5.jpeg",
  description: "Curated furniture designs blending form, function, and craftsmanship to elevate modern living and working environments.",
  category: "FURNITURE"
}

  ];

return (
  <section className="bg-black text-white overflow-hidden" style={{ fontFamily: "Lato, sans-serif" }}>
    <Navbar />
    
    {/* Hero Section with Background Video */}
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ filter: "brightness(80%)" }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/pbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
      
      {/* Enhanced Black Translucent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      
      {/* Animated Background Pattern - Hidden on mobile for better performance */}
      <div className="absolute inset-0 opacity-5 hidden sm:block">
        <div 
          className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 border border-white rounded-full animate-spin" 
          style={{animationDuration: '40s'}}
        ></div>
        <div 
          className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 border border-white rounded-full animate-spin" 
          style={{animationDuration: '35s', animationDirection: 'reverse'}}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 border border-white rounded-full animate-pulse"
        ></div>
      </div>
      
      {/* Hero Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 md:px-8 w-full max-w-7xl mx-auto transform transition-all duration-2000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="mb-6 sm:mb-8">
          <div className="inline-block">
            {/* Portfolio Collection Label */}
            <span 
              className="text-xs sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-gray-300 font-light uppercase mb-4 sm:mb-6 block animate-fade-in-up" 
              style={{animationDelay: '0.5s'}}
            >
              Portfolio Collection
            </span>
            
            {/* Main Heading - Responsive Typography */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-extralight tracking-tight leading-none mb-6 sm:mb-8">
              <span 
                className={`inline-block bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
                style={{animationDelay: '0.8s'}}
              >
                CURATED
              </span>
              <br />
              <span 
                className={`inline-block bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent font-thin transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
                style={{animationDelay: '1.1s'}}
              >
                SPACES
              </span>
            </h1>
            
            {/* Decorative Line */}
            <div 
              className={`w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 sm:mb-10 transform transition-all duration-1500 ease-out ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} 
              style={{animationDelay: '1.4s'}}
            ></div>
            
            {/* Description Text */}
            <p 
              className={`text-base sm:text-base md:text-lg text-gray-300 font-light max-w-xs sm:max-w-2xl mx-auto leading-relaxed transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} 
              style={{animationDelay: '1.7s'}}
            >
              <span className="block sm:inline">Where monochrome elegance meets architectural precision.</span>
              <br className="hidden sm:block" />
              <span className="block sm:inline mt-2 sm:mt-0">Discover spaces that evolve with your presence.</span>
            </p>
          </div>
        </div>
      </div>
    </div>

      {/* Projects Section */}
      <div className="min-h-screen">
        <div className="max-w-8xl mx-auto mt-32 px-4 sm:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-32">
            <span className="text-xs text-white/90 tracking-[0.4em] text-gray-600 font-light uppercase mb-8 block">
              Selected Works
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white/90 mb-10">
              OUR <span className="font-thin bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">FINEST</span>
            </h2>
            <div className="w-40 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-auto mb-10"></div>
            <p className="text-base text-white/75 font-light max-w-3xl mx-auto leading-relaxed">
              Each project represents our commitment to timeless design,<br />
              where every detail serves a greater purpose.
            </p>
          </div>

          {/* Projects Grid with Scroll Animations */}
          <div className="space-y-48">
            {projects.map((project, index) => {
              const isProjectVisible = visibleProjects.has(project.id);
              
              return (
                <div
                  key={project.id}
                  ref={el => { projectRefs.current[index] = el; }}
                  data-project-id={project.id}
                  className={`group relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-12 lg:gap-20 transition-all duration-[1800ms] ease-out`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image with Advanced Scroll Animations */}
                  <div className="relative w-full lg:w-3/5 xl:w-2/3">
                    <div className={`aspect-[5/4] lg:aspect-[4/3] xl:aspect-[3/2] relative overflow-hidden rounded-2xl transition-all duration-[2000ms] ease-out ${
                      isProjectVisible 
                        ? 'scale-100 shadow-2xl' 
                        : 'scale-95 shadow-lg'
                    }`}>
                      
                      {/* Multi-layered Image Container */}
                      <div className="absolute inset-0 bg-gray-200">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className={`object-cover transition-all duration-[2500ms] ease-out ${
                            isProjectVisible || hoveredProject === project.id
                              ? 'filter-none scale-100 brightness-100' 
                              : 'filter grayscale brightness-75 contrast-90 scale-102'
                          }`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 66vw"
                          priority={index < 2}
                        />
                        
                        {/* Dynamic Overlay System */}
                        <div className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
                          isProjectVisible || hoveredProject === project.id
                            ? 'bg-gradient-to-t from-black/5 via-transparent to-transparent' 
                            : 'bg-gradient-to-t from-black/50 via-black/25 to-black/15'
                        }`}></div>
                        
                        {/* Enhanced Project Number */}
                        <div className={`absolute top-8 left-8 transition-all duration-[1200ms] ease-out ${
                          isProjectVisible ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-50 transform translate-y-3 scale-95'
                        }`}>
                          <div className={`px-5 py-3 rounded-full backdrop-blur-md transition-all duration-[1500ms] ease-out ${
                            isProjectVisible 
                              ? 'bg-white/25 text-white border border-white/40' 
                              : 'bg-black/40 text-gray-300 border border-gray-500/40'
                          }`}>
                            <span className="text-sm tracking-[0.3em] font-light">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>

                        {/* Enhanced Category Badge */}
                        <div className={`absolute top-8 right-8 transition-all duration-[1200ms] ease-out ${
                          isProjectVisible ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-50 transform translate-y-3 scale-95'
                        }`}>
                          <div className={`px-5 py-3 rounded-full backdrop-blur-md transition-all duration-[1500ms] ease-out ${
                            isProjectVisible 
                              ? 'bg-white/25 text-white border border-white/40' 
                              : 'bg-black/40 text-gray-300 border border-gray-500/40'
                          }`}>
                            <span className="text-xs tracking-[0.25em] font-light">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        {/* Subtle Reveal Indicator */}
                        <div className={`absolute bottom-8 left-8 transition-all duration-[1500ms] ease-out ${
                          isProjectVisible ? 'opacity-0 transform translate-y-6 scale-95' : 'opacity-80 transform translate-y-0 scale-100'
                        }`}>
                          <div className="flex items-center space-x-3 px-4 py-3 rounded-full bg-black/30 backdrop-blur-md border border-white/20">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse opacity-70"></div>
                            <span className="text-xs text-white font-light tracking-wide opacity-90">
                              Scroll to reveal
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Animated Border */}
                      <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-[1800ms] ease-out ${
                        isProjectVisible || hoveredProject === project.id
                          ? 'border-white/40 scale-100 opacity-100' 
                          : 'border-gray-400/20 scale-98 opacity-0'
                      }`}></div>
                    </div>

                    {/* Enhanced Shadow Effect */}
                    <div className={`absolute -inset-8 rounded-2xl blur-2xl transition-all duration-[2000ms] ease-out ${
                      isProjectVisible 
                        ? 'bg-gradient-to-r from-gray-900/15 via-gray-600/10 to-gray-900/15 opacity-50' 
                        : 'bg-gradient-to-r from-gray-500/8 via-gray-400/5 to-gray-500/8 opacity-25'
                    } -z-10`}></div>
                  </div>

                  {/* Enhanced Project Info */}
                  <div className={`w-full lg:w-2/5 xl:w-1/3 space-y-8 lg:px-8 transition-all duration-[1800ms] ease-out ${
                    isProjectVisible ? 'opacity-100 transform translate-y-0' : 'opacity-60 transform translate-y-8'
                  }`}>
                    <div>
                      <h3 className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight mb-6 transition-all duration-[1500ms] ease-out ${
                        isProjectVisible ? 'text-gray-200 transform translate-y-0' : 'text-gray-600 transform translate-y-2'
                      }`}>
                        {project.title}
                      </h3>
                      
                      <div className={`h-px mb-8 transition-all duration-[1800ms] ease-out ${
                        isProjectVisible 
                          ? 'w-24 bg-gray-300' 
                          : 'w-16 bg-gray-300'
                      }`}></div>
                      
                      <p className={`text-lg font-light leading-relaxed mb-10 transition-all duration-[1500ms] ease-out ${
                        isProjectVisible ? 'text-gray-300 transform translate-y-0' : 'text-gray-600 transform translate-y-2'
                      }`}>
                        {project.description}
                      </p>
                      
                      {/* Enhanced View Project Button */}
                      <Link href={`/projectPage/${project.slug}`}>
                      <button className={`group/btn relative inline-flex items-center transition-all duration-[1200ms] ease-out px-8 py-4 rounded-full ${
                        isProjectVisible 
                          ? 'bg-gray-700 text-white hover:bg-gray-800 transform translate-y-0 scale-100' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transform translate-y-1 scale-95'
                      }`}>
                        <span className="text-sm tracking-[0.2em] font-light uppercase mr-4">
                          Explore Project
                        </span>
                        <div className={`relative w-12 h-px transition-all duration-500 ease-out ${
                          isProjectVisible ? 'bg-white' : 'bg-gray-700'
                        } group-hover/btn:w-16`}>
                          <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 transition-all duration-500 ease-out ${
                            isProjectVisible 
                              ? 'border-l-white border-t-transparent border-b-transparent' 
                              : 'border-l-gray-700 border-t-transparent border-b-transparent'
                          } border-l-[6px] border-t-[3px] border-b-[3px] group-hover/btn:translate-x-1`}></div>
                        </div>
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Enhanced Call to Action */}
          <div
  className="relative w-full text-center mt-40 pt-32 py-24 px-6 bg-cover bg-center"
  style={{ backgroundImage: "url('/image_1.jpg')", filter: "brightness(1.2)" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-3xl sm:text-4xl font-extralight text-gray-300 mb-4">
      Ready to transform your <span className="italic bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">vision</span>?
    </h3>
    <p className="text-base text-gray-300 font-light mb-12 max-w-2xl mx-auto">
      Let's create spaces that evolve and inspire through thoughtful design
    </p>
    <Link href="/contact">
      <button className="group relative inline-flex items-center justify-center 
  px-6 py-3 sm:px-10 sm:py-4 md:px-16 md:py-5 
  border-2 border-gray-300 text-gray-200 
  hover:bg-gray-500 hover:text-white 
  transition-all duration-[1000ms] ease-out 
  overflow-hidden rounded-full text-xs sm:text-sm md:text-base">
  
  <span className="relative z-10 tracking-[0.3em] font-light uppercase">
    Begin Your Journey
  </span>

  <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 
    transition-transform duration-[1000ms] ease-out origin-center rounded-full">
  </div>
</button>

    </Link>
  </div>
</div>


        </div>
      </div>
      
      <Footer />
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 2s ease-out forwards;
          opacity: 0;
        }
        
        .filter {
          filter: grayscale(100%);
        }
        
        .filter-none {
          filter: grayscale(0%);
        }
      `}</style>
    </section>
  );
};

export default Projects;
