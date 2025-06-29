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
  "modern-residential-home": {
    id: "modern-residential-home",
    title: "Modern Residential Home",
    description: "Where luxury meets contemporary living",
    images: [
      {
        src: "/villa2.jpeg",
        title: "Architectural Marvel",
        description:
          "Experience the pinnacle of modern residential design with clean lines and sophisticated aesthetics",
        ctaText: "Transform Your Space",
      },
      {
        src: "/villa3.jpeg",
        title: "Living Redefined",
        description:
          "Immerse yourself in spaces that breathe luxury and embrace minimalist elegance",
        ctaText: "Discover More",
      },
      {
        src: "/villa4.jpeg",
        title: "Timeless Elegance",
        description:
          "Where every corner tells a story of refined taste and architectural brilliance",
        ctaText: "Start Your Journey",
      },
      {
        src: '/villa5.jpeg',
        title: 'Sanctuary of Style',
        description: 'Create memories in spaces designed for the discerning homeowner',
        ctaText: 'Envision Your Dream'
      },
      {
        src: '/villa6.jpeg',
        title: 'Future Living',
        description: 'Step into tomorrow with designs that transcend time and trend',
        ctaText: 'Make It Reality'
      }
    ],
  },
  "commercial-showroom": {
    id: "commercial-showroom",
    title: "Commercial Jewellery Showroom",
    description: "Where productivity meets sophistication",
    images: [
      {
        src: "/pro1a.jpg",
        title: "Executive Excellence",
        description:
          "Elevate your business presence with spaces that command respect and inspire innovation",
        ctaText: "Elevate Your Business",
      },
      {
        src: "/pro1b.jpg",
        title: "Collaborative Spaces",
        description:
          "Foster creativity and teamwork in environments designed for peak performance",
        ctaText: "Boost Productivity",
      },
      {
        src: "/pro1c.jpg",
        title: "Professional Impact",
        description:
          "Make a lasting impression with commercial spaces that reflect your brand's excellence",
        ctaText: "Command Attention",
      },
      {
        src: "/pro1d.jpg",
        title: "Innovation Hub",
        description:
          "Transform your workplace into a beacon of modern business sophistication",
        ctaText: "Lead the Future",
      },
      {
        src: "/pro1e.jpg",
        title: "Success Environment",
        description:
          "Where ambitious minds thrive and extraordinary achievements become reality",
        ctaText: "Achieve Greatness",
      },
      {
        src: "/pro1f.jpg",
        title: "Luxury Retail Presence",
        description:
          "Craft a showroom experience that blends commercial strategy with timeless elegance",
        ctaText: "Define Distinction",
      },
      {
        src: "/pro1g.jpg",
        title: "Strategic Brilliance",
        description:
          "Empower your brand with environments designed for influence, growth, and prestige",
        ctaText: "Build Your Legacy",
      },
    ],
  },
  "commercial-workspace": {
    id: "commercial-workspace",
    title: "Commercial Office Workspace",
    description:
      "Redefining the city stay with style, comfort, and curated experiences",
    images: [
      {
        src: "/pro2a.jpeg",
        title: "City Workspace Hub",
        description:
          "Thrive in inspiring spaces designed for the modern professional in the heart of the city",
        ctaText: "Work with Purpose",
      },
      {
        src: "/pro3e.jpeg",
        title: "City Retreat",
        description:
          "Unwind in serene spaces crafted for the modern traveler amid the urban buzz",
        ctaText: "Relax in Style",
      },
      {
        src: "/pro3a.jpg",
        title: "Contemporary Comfort",
        description:
          "Where elevated design meets intuitive service for an unforgettable stay",
        ctaText: "Stay Inspired",
      },
      {
        src: "/pro3b.jpg",
        title: "Hospitality Reimagined",
        description:
          "A refined urban haven blending boutique charm with metropolitan energy",
        ctaText: "Discover the Difference",
      },
      {
        src: "/pro3c.jpg",
        title: "Skyline Sanctuary",
        description:
          "Rise above the ordinary with living spaces that touch the clouds",
        ctaText: "Reach New Heights",
      },
      {
        src: "/pro3d.jpg",
        title: "City Sophistication",
        description:
          "Where urban energy meets refined living in perfect harmony",
        ctaText: "Experience Excellence",
      },
    ],
  },
  "furniture-design": {
    id: "furniture-design",
    title: "Furniture Design",
    description:
      "Transforming urban environments with furniture that fuses design, comfort, and purposeful living",
    images: [
      {
    src: "/fur1.jpeg",
    title: "Workspace Essentials",
    description: "Empower productivity with ergonomic designs made for modern professionals",
    ctaText: "Design for Focus",
  },
  {
    src: "/fur2.jpeg",
    title: "Restful Retreat",
    description: "Crafted pieces that bring comfort and calm to busy urban interiors",
    ctaText: "Furnish with Calm",
  },
  {
    src: "/fur3.jpeg",
    title: "Modern Elegance",
    description: "Where contemporary aesthetics meet functional craftsmanship in every detail",
    ctaText: "Elevate Your Space",
  },
  {
    src: "/fur4.jpeg",
    title: "Design Reimagined",
    description: "Furniture that blends artistic flair with everyday usability",
    ctaText: "Discover the Craft",
  },
  {
    src: "/fur5.jpeg",
    title: "Vertical Living Solutions",
    description: "Smart, space-saving designs that enhance high-rise lifestyles",
    ctaText: "Think Vertically",
  },
  {
    src: "/fur6.jpeg",
    title: "Urban Refinement",
    description: "Refined pieces that mirror the sophistication of city life",
    ctaText: "Live with Style",
  },
  {
  src: "/fur7.jpeg",
  title: "Modern Elegance",
  description: "Sleek forms and tailored finishes designed for contemporary living.",
  ctaText: "Discover Elegance",
},
{
  src: "/fur8.jpeg",
  title: "City Soul",
  description: "Designs that embody the rhythm, energy, and texture of urban life.",
  ctaText: "Elevate Your Space",
},
    ],
  },
};
