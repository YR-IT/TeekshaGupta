// lib/projectUtils.ts
import { ProjectData } from '@/types/project';

/**
 * Utility function to easily add new projects
 * Usage: addProject('luxury-villa', 'Luxury Villa', 'desc', 5, customTexts)
 */
export const createProject = (
  id: string,
  title: string, 
  description: string,
  imageCount: number,
  customImageData?: {
    titles?: string[];
    descriptions?: string[];
    ctaTexts?: string[];
  }
): ProjectData => {
  const images = Array.from({ length: imageCount }, (_, index) => {
    const imageNum = index + 1;
    return {
      src: `/${id.replace(/-/g, '')}${imageNum}_${imageNum}.png`,
      title: customImageData?.titles?.[index] || `${title} - View ${imageNum}`,
      description: customImageData?.descriptions?.[index] || 
        `Discover the exceptional design and craftsmanship that defines ${title.toLowerCase()}.`,
      ctaText: customImageData?.ctaTexts?.[index] || 'Get Started'
    };
  });

  return {
    id,
    title,
    description,
    images
  };
};

/**
 * Quick project creation templates
 */
export const projectTemplates = {
  residential: (id: string, title: string) => createProject(
    id,
    title,
    'Where luxury meets contemporary living',
    5,
    {
      titles: [
        'Architectural Marvel',
        'Living Redefined', 
        'Timeless Elegance',
        'Sanctuary of Style',
        'Future Living'
      ],
      descriptions: [
        'Experience the pinnacle of modern residential design with clean lines and sophisticated aesthetics',
        'Immerse yourself in spaces that breathe luxury and embrace minimalist elegance',
        'Where every corner tells a story of refined taste and architectural brilliance',
        'Create memories in spaces designed for the discerning homeowner',
        'Step into tomorrow with designs that transcend time and trend'
      ],
      ctaTexts: [
        'Transform Your Space',
        'Discover More',
        'Start Your Journey', 
        'Envision Your Dream',
        'Make It Reality'
      ]
    }
  ),

  commercial: (id: string, title: string) => createProject(
    id,
    title,
    'Where productivity meets sophistication',
    5,
    {
      titles: [
        'Executive Excellence',
        'Collaborative Spaces',
        'Professional Impact',
        'Innovation Hub',
        'Success Environment'
      ],
      descriptions: [
        'Elevate your business presence with spaces that command respect and inspire innovation',
        'Foster creativity and teamwork in environments designed for peak performance',
        'Make a lasting impression with commercial spaces that reflect your brand\'s excellence',
        'Transform your workplace into a beacon of modern business sophistication',
        'Where ambitious minds thrive and extraordinary achievements become reality'
      ],
      ctaTexts: [
        'Elevate Your Business',
        'Boost Productivity',
        'Command Attention',
        'Lead the Future',
        'Achieve Greatness'
      ]
    }
  ),

  hospitality: (id: string, title: string) => createProject(
    id,
    title,
    'Creating unforgettable experiences through design',
    5,
    {
      titles: [
        'Welcome Perfection',
        'Luxury Hospitality',
        'Guest Experience',
        'Memorable Moments',
        'Hospitality Excellence'
      ],
      descriptions: [
        'First impressions that leave lasting memories through thoughtful design',
        'Redefine luxury hospitality with spaces that pamper and inspire',
        'Every detail crafted to exceed expectations and create wonder',
        'Where comfort meets elegance in perfect harmony',
        'Setting new standards in hospitality design and guest satisfaction'
      ],
      ctaTexts: [
        'Create Magic',
        'Exceed Expectations',
        'Inspire Wonder',
        'Perfect Hospitality',
        'Elevate Standards'
      ]
    }
  )
};

/**
 * Validate project data structure
 */
export const validateProject = (project: ProjectData): boolean => {
  return !!(
    project.id &&
    project.title &&
    project.description &&
    project.images &&
    project.images.length > 0 &&
    project.images.every(img => img.src && img.title && img.description && img.ctaText)
  );
};

/**
 * Get project by slug with fallback
 */
export const getProjectBySlug = (slug: string, projects: Record<string, ProjectData>): ProjectData | null => {
  return projects[slug] || null;
};

/**
 * Generate image paths for a project
 */
export const generateImagePaths = (projectId: string, count: number): string[] => {
  return Array.from({ length: count }, (_, i) => `/${projectId}_${i + 1}.png`);
};