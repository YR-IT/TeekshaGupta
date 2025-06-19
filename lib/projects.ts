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
        src: '/pro4a.png',
        title: 'Architectural Marvel',
        description: 'Experience the pinnacle of modern residential design with clean lines and sophisticated aesthetics',
        ctaText: 'Transform Your Space'
      },
      {
        src: '/pro4b.png',
        title: 'Living Redefined',
        description: 'Immerse yourself in spaces that breathe luxury and embrace minimalist elegance',
        ctaText: 'Discover More'
      },
      {
        src: '/pro4c.png',
        title: 'Timeless Elegance',
        description: 'Where every corner tells a story of refined taste and architectural brilliance',
        ctaText: 'Start Your Journey'
      },
      // {
      //   src: '/proj1_4.png',
      //   title: 'Sanctuary of Style',
      //   description: 'Create memories in spaces designed for the discerning homeowner',
      //   ctaText: 'Envision Your Dream'
      // },
      // {
      //   src: '/proj1_5.png',
      //   title: 'Future Living',
      //   description: 'Step into tomorrow with designs that transcend time and trend',
      //   ctaText: 'Make It Reality'
      // }
    ]
  },
  'commercial-office-space': {
    id: 'commercial-office-space',
    title: 'Commercial Office Space',
    description: 'Where productivity meets sophistication',
    images: [
      {
        src: '/pro1a.jpg',
        title: 'Executive Excellence',
        description: 'Elevate your business presence with spaces that command respect and inspire innovation',
        ctaText: 'Elevate Your Business'
      },
      {
        src: '/pro1b.jpg',
        title: 'Collaborative Spaces',
        description: 'Foster creativity and teamwork in environments designed for peak performance',
        ctaText: 'Boost Productivity'
      },
      {
        src: '/pro1c.jpg',
        title: 'Professional Impact',
        description: 'Make a lasting impression with commercial spaces that reflect your brand\'s excellence',
        ctaText: 'Command Attention'
      },
      {
        src: '/pro1d.jpg',
        title: 'Innovation Hub',
        description: 'Transform your workplace into a beacon of modern business sophistication',
        ctaText: 'Lead the Future'
      },
      {
        src: '/pro1e.jpg',
        title: 'Success Environment',
        description: 'Where ambitious minds thrive and extraordinary achievements become reality',
        ctaText: 'Achieve Greatness'
      },
      {
        src: "/pro1f.jpg",
        title: "Luxury Retail Presence",
        description: "Craft a showroom experience that blends commercial strategy with timeless elegance",
        ctaText: "Define Distinction"
      },
      {
        src: "/pro1g.jpg",
        title: "Strategic Brilliance",
        description: "Empower your brand with environments designed for influence, growth, and prestige",
        ctaText: "Build Your Legacy"
      }
    ]
  },
  'urban-apartment-complex': {
    id: 'urban-apartment-complex',
    title: "Urban Hospitality Concept",
    description: "Redefining the city stay with style, comfort, and curated experiences",
    images: [
    {
      src: "/pro3e.jpeg",
      title: "City Retreat",
      description: "Unwind in serene spaces crafted for the modern traveler amid the urban buzz",
      ctaText: "Relax in Style"
    },
    {
      src: "/pro3a.jpg",
      title: "Contemporary Comfort",
      description: "Where elevated design meets intuitive service for an unforgettable stay",
      ctaText: "Stay Inspired"
    },
    {
      src: "/pro3b.jpg",
      title: "Hospitality Reimagined",
      description: "A refined urban haven blending boutique charm with metropolitan energy",
      ctaText: "Discover the Difference"
    },
      {
        src: '/pro3c.jpg',
        title: 'Skyline Sanctuary',
        description: 'Rise above the ordinary with living spaces that touch the clouds',
        ctaText: 'Reach New Heights'
      },
      {
        src: '/pro3d.jpg',
        title: 'City Sophistication',
        description: 'Where urban energy meets refined living in perfect harmony',
        ctaText: 'Experience Excellence'
      }
    ]
  }
};