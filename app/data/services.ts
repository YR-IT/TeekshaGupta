
export type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
};

export const services: Service[] = [
  {
    title: "Architectural Design",
    slug: "architectural-design",
    description:
      "Our architectural design process fuses creativity with technical precision. We tailor every building to its context, ensuring both aesthetic beauty and functional harmony. From early-stage ideation to detailed blueprints, our work reflects deep attention to proportion, light, space, and materiality—transforming concepts into enduring architectural landmarks.",
    image: "/architect_service.jpg",
    features: [
      "Each design is grounded in the site’s specific context—responding to orientation, topography, and climate—to create a structure that feels both purposeful and poetic.",
      "We utilize state-of-the-art 3D modeling tools to visualize designs early, allowing clients to explore spaces virtually and refine their vision with confidence.",
      "Passive strategies such as natural ventilation, solar orientation, and thermal mass are embedded from the outset to reduce energy consumption and improve comfort.",
      "Material selections are made with equal attention to environmental impact, visual harmony, and tactile quality, resulting in timeless, high-performance spaces.",
      "Lighting is considered from day one—daylight studies and artificial lighting schemes ensure that every space feels vibrant, balanced, and emotionally resonant.",
      "We provide detailed drawing sets and coordination with engineers to ensure constructability, compliance, and smooth implementation on-site with fewer revisions.",
    ],
  },
  {
    title: "Planning Applications",
    slug: "planning-applications",
    description:
      "Navigating the regulatory landscape can be daunting. We handle the entire planning application process, preparing compelling documents, drawings, and statements that align with local authority guidelines. Our expertise ensures smoother approvals, mitigated risks, and a streamlined path to your project's realization.",
    image: "/planning_service.jpg",
    features: [
      "We conduct in-depth site appraisals, identifying constraints like heritage overlays, flood risk zones, or greenbelt policies to shape a realistic planning strategy.",
      "Our team prepares persuasive design and access statements that justify the proposal's impact, aligning with regional planning frameworks and design codes.",
      "High-quality technical drawings including plans, elevations, and sections are tailored to satisfy council requirements while clearly communicating design intent.",
      "We have deep experience handling sensitive sites—like conservation areas or listed buildings—ensuring the proposal respects local character while adding value.",
      "Engagement with planning authorities, neighbors, and consultants is handled proactively, addressing objections early to smooth the path to approval.",
      "We offer risk analysis and mitigation reports that anticipate potential objections or delays, allowing clients to move forward with clarity and reduced exposure.",
    ],
  },
  {
    title: "Interior Design",
    slug: "interior-design",
    description:
      "We craft immersive interior experiences that are tailored to your lifestyle and aspirations. Our designs reflect a balance of texture, lighting, and custom furnishings—layered with timeless sophistication. Whether residential or commercial, our spaces enhance the human experience and evoke emotion.",
    image: "/interior_service.jpg",
    features: [
      "Every interior is an expression of personality—our process starts with deep listening and discovery to ensure the design reflects your values, story, and use cases.",
      "We layer textures and finishes—stone, fabric, timber, and metal—to evoke comfort, luxury, and tactility, creating rooms that are both expressive and practical.",
      "Furniture is often designed or sourced bespoke to optimize scale, comfort, and flow, ensuring every piece belongs and serves both form and function.",
      "Lighting is designed to sculpt the space—balancing natural light with ambient, task, and accent fixtures for a dynamic and emotionally engaging environment.",
      "Space planning goes beyond aesthetics—every layout is optimized for circulation, storage, acoustics, and long-term adaptability across uses and life stages.",
      "We integrate sustainable materials and smart home systems to create future-ready interiors that prioritize wellbeing, efficiency, and long-term performance.",
    ],
  },
  {
    title: "Conservation & Heritage Design",
    slug: "conservation-heritage-design",
    description:
      "Our heritage work honors the past while embracing the future. We breathe new life into historic buildings through meticulous restoration, adaptive reuse, and sensitive design interventions. Every detail respects cultural integrity, blending old-world craftsmanship with contemporary design sensibilities.",
    image: "/heritage_service.jpg",
    features: [
      "Our process begins with extensive archival research and physical surveys to understand the building's history, materials, and architectural lineage.",
      "Restoration work is executed by skilled artisans using traditional methods—such as lime plastering or leadwork—to preserve authenticity and craftsmanship.",
      "We specialize in adaptive reuse, transforming underutilized heritage buildings into vibrant spaces without erasing their soul, layering history with modern use.",
      "When adding new elements, we favor honest contrast—contemporary designs that are clearly distinguishable yet in harmony with the original fabric.",
      "We liaise with heritage bodies and conservation officers early in the process, aligning proposals with local and national preservation policies.",
      "All interventions are documented in a detailed conservation plan, outlining materials, methods, and maintenance to ensure long-term stewardship of heritage value.",
    ],
  },
  {
    title: "Create & Construct",
    slug: "create-construct",
    description:
      "We offer a full design-and-build solution that ensures architectural vision is fully realized during construction. Our integrated team oversees every phase—budgeting, materials, timelines, and execution—delivering cohesive, high-quality results with a single point of accountability.",
    image: "/contruct_service.jpg",
    features: [
      "Our integrated model unites design, engineering, and construction management under one roof—streamlining communication, reducing delays, and minimizing risk.",
      "From the earliest concept sketches, we cost the project transparently—breaking down material, labor, and contingency budgets to empower informed decisions.",
      "A dedicated project manager oversees every stage—from site setup to final inspection—ensuring daily supervision, issue resolution, and progress tracking.",
      "Material choices are guided by performance, sustainability, and visual coherence—balancing innovation with reliability across each trade and finish.",
      "Our in-house teams and vetted contractors ensure the highest build quality, with rigorous QA reviews, milestone sign-offs, and zero-defect handover standards.",
      "We manage schedules with military precision, coordinating trades, deliveries, inspections, and client walkthroughs to keep the project on track and stress-free.",
    ],
  },
];

