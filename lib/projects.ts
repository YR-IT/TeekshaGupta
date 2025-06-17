// lib/projects.ts
export interface ProjectData {
  id: string;
  title: string;
  description: string;
  images: {
    src: string;
    title: string;
    description: string;
    ctaText: string;
  }[];
}

export const projectsData: Record<string, ProjectData> = {
  'modern-residential-home': {
    id: 'modern-residential-home',
    title: 'Modern Residential Home',
    description: 'Where luxury meets contemporary living',
    images: [
      {
        src: '/proj1_1.png',
        title: 'Architectural Marvel',
        description: 'Experience the pinnacle of modern residential design with clean lines and sophisticated aesthetics',
        ctaText: 'Transform Your Space'
      },
      {
        src: '/proj1_2.png',
        title: 'Living Redefined',
        description: 'Immerse yourself in spaces that breathe luxury and embrace minimalist elegance',
        ctaText: 'Discover More'
      },
      {
        src: '/proj1_3.png',
        title: 'Timeless Elegance',
        description: 'Where every corner tells a story of refined taste and architectural brilliance',
        ctaText: 'Start Your Journey'
      },
      {
        src: '/proj1_4.png',
        title: 'Sanctuary of Style',
        description: 'Create memories in spaces designed for the discerning homeowner',
        ctaText: 'Envision Your Dream'
      },
      {
        src: '/proj1_5.png',
        title: 'Future Living',
        description: 'Step into tomorrow with designs that transcend time and trend',
        ctaText: 'Make It Reality'
      }
    ]
  },
  'commercial-office-space': {
    id: 'commercial-office-space',
    title: 'Commercial Office Space',
    description: 'Where productivity meets sophistication',
    images: [
      {
        src: '/proj2_1.png',
        title: 'Executive Excellence',
        description: 'Elevate your business presence with spaces that command respect and inspire innovation',
        ctaText: 'Elevate Your Business'
      },
      {
        src: '/proj2_2.png',
        title: 'Collaborative Spaces',
        description: 'Foster creativity and teamwork in environments designed for peak performance',
        ctaText: 'Boost Productivity'
      },
      {
        src: '/proj2_3.png',
        title: 'Professional Impact',
        description: 'Make a lasting impression with commercial spaces that reflect your brand\'s excellence',
        ctaText: 'Command Attention'
      },
      {
        src: '/proj2_4.png',
        title: 'Innovation Hub',
        description: 'Transform your workplace into a beacon of modern business sophistication',
        ctaText: 'Lead the Future'
      },
      {
        src: '/proj2_5.png',
        title: 'Success Environment',
        description: 'Where ambitious minds thrive and extraordinary achievements become reality',
        ctaText: 'Achieve Greatness'
      }
    ]
  },
  'urban-apartment-complex': {
    id: 'urban-apartment-complex',
    title: 'Urban Apartment Complex',
    description: 'City living elevated to an art form',
    images: [
      {
        src: '/proj3_1.png',
        title: 'Urban Oasis',
        description: 'Escape the chaos while staying connected to the pulse of city life',
        ctaText: 'Live Differently'
      },
      {
        src: '/proj3_2.png',
        title: 'Metropolitan Luxury',
        description: 'Experience the perfect fusion of urban convenience and residential tranquility',
        ctaText: 'Embrace City Life'
      },
      {
        src: '/proj3_3.png',
        title: 'Vertical Village',
        description: 'Community living reimagined for the modern urbanite seeking connection and style',
        ctaText: 'Join the Community'
      },
      {
        src: '/proj3_4.png',
        title: 'Skyline Sanctuary',
        description: 'Rise above the ordinary with living spaces that touch the clouds',
        ctaText: 'Reach New Heights'
      },
      {
        src: '/proj3_5.png',
        title: 'City Sophistication',
        description: 'Where urban energy meets refined living in perfect harmony',
        ctaText: 'Experience Excellence'
      }
    ]
  }
};