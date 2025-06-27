// components/JewelleryCard.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface JewelleryCardProps {
  name: string;
  location: string;
  area: string;
  about: string;
  designConcept: string;
  images: string[]; // Changed to array
}

const JewelleryCard: React.FC<JewelleryCardProps> = ({
  name,
  location,
  area,
  about,
  designConcept,
  images,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-[#1a1a1a] text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all w-full mb-10">

      <div className="relative h-72 w-full">
        <Image 
          src={images[currentImageIndex]} 
          alt={`${name} - ${currentImageIndex + 1}/${images.length}`}
          fill
          sizes="(max-width: 800px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="object-cover"
          priority={currentImageIndex === 0}
        />
        
        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 hover:bg-black/75 z-10"
              aria-label="Previous image"
            >
              <FiChevronLeft className="text-white text-xl" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 hover:bg-black/75 z-10"
              aria-label="Next image"
            >
              <FiChevronRight className="text-white text-xl" />
            </button>
          </>
        )}
        
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/75 px-2 py-1 rounded-full text-xs z-10">
            {currentImageIndex + 1}/{images.length}
          </div>
        )}
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-300 flex items-center">
          <span className="mr-2">📍</span>
          <span>{location}</span>
        </p>
        <p className="text-gray-300 flex items-center">
          <span className="mr-2">📐</span>
          <span>Area: {area}</span>
        </p>
        <p className="text-gray-300 line-clamp-2 flex">
          <span className="mr-2">📝</span>
          <span>{about}</span>
        </p>
        <p className="text-amber-400 line-clamp-2 flex">
          <span className="mr-2">🎨</span>
          <span>{designConcept}</span>
        </p>
      </div>
    </div>
  );
};

export default JewelleryCard;