// types/project.ts
export interface ProjectImage {
    src: string;
    title: string;
    description: string;
    ctaText: string;
  }
  
  export interface ProjectData {
    id: string;
    title: string;
    description: string;
    images: ProjectImage[];
  }
  
  export type ProjectsData = Record<string, ProjectData>;