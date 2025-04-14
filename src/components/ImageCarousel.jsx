import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageCarousel = ({ mainImage, otherImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Combine main image with other images
  const allImages = [mainImage, ...(otherImages || [])].filter(Boolean);
  
  const handlePrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };
  
  if (!allImages.length) {
    return (
      <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {/* Main image display */}
      <div className="relative rounded-lg overflow-hidden h-96 bg-gray-100">
        <GatsbyImage 
          image={allImages[currentIndex]} 
          alt={`Animal image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation arrows */}
        {allImages.length > 1 && (
          <>
            <button 
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all"
              aria-label="Previous image"
            >
              <FaChevronLeft className="text-dark-blue" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all"
              aria-label="Next image"
            >
              <FaChevronRight className="text-dark-blue" />
            </button>
          </>
        )}
      </div>
      
      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="flex space-x-3 overflow-x-auto py-2">
          {allImages.map((img, index) => (
            <button 
              key={index} 
              className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${currentIndex === index ? 'border-dark-blue' : 'border-transparent hover:border-gray-300'}`}
              onClick={() => handleThumbnailClick(index)}
              aria-label={`View image ${index + 1}`}
            >
              <GatsbyImage 
                image={img} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

ImageCarousel.propTypes = {
  mainImage: PropTypes.object,
  otherImages: PropTypes.arrayOf(PropTypes.object)
};

export default ImageCarousel;
