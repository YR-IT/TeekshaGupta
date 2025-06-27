// ✅ File: components/CommercialCard.tsx
"use client"; // Added at the very top

import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiMapPin, FiLayout } from "react-icons/fi";

interface CommercialCardProps {
  name: string;
  location: string;
  area: string;
  summary: string;
  intent: string;
  images: string[];
}

const CommercialCard: React.FC<CommercialCardProps> = ({
  name,
  location,
  area,
  summary,
  intent,
  images,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#1a1a1a] text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all w-full mb-8">

      {/* Image Carousel */}
      <div className="relative h-72 w-full">
        <Image 
          src={images[currentImageIndex]} 
          alt={`${name} - ${currentImageIndex + 1}/${images.length}`}
          fill
          sizes="(max-width: 800px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="object-cover transition-opacity duration-300"
          priority={currentImageIndex === 0}
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 hover:bg-black/75 transition-all z-10"
              aria-label="Previous image"
            >
              <FiChevronLeft className="text-white text-xl" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 hover:bg-black/75 transition-all z-10"
              aria-label="Next image"
            >
              <FiChevronRight className="text-white text-xl" />
            </button>
          </>
        )}
        
        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/75 px-2 py-1 rounded-full text-xs z-10">
            {currentImageIndex + 1}/{images.length}
          </div>
        )}
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="flex items-center text-gray-300">
          <FiMapPin className="mr-2 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>
        <div className="flex justify-between border-b border-gray-700 pb-3">
          <div className="flex items-center">
            <FiLayout className="mr-2 flex-shrink-0" />
            <span>Area: {area}</span>
          </div>
        </div>
        <p className="pt-1 text-gray-300 line-clamp-2">📝 {summary}</p>
        <p className="pt-1 text-amber-400 font-medium line-clamp-2">🎯 {intent}</p>
      </div>
    </div>
  );
};

export default CommercialCard;