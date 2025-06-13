// app/projects/[slug]/page.tsx


import React from 'react';
import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/projects';
import ProjectSlideshow from '@/components/ProjectSlideshow';
import Navbar from '@/components/navbar'; 

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="relative">
      
      <Navbar />
      {/* Project Slideshow */}
      <ProjectSlideshow 
        images={project.images} 
        projectTitle={project.title}
      />
    </div>
  );
}

// Generate static params for all projects
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}