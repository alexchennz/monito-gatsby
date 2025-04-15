import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageCarousel = ({ mainImage, otherImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');
  
  // Combine main image with other images
  const allImages = [mainImage, ...(otherImages || [])].filter(Boolean);
  
  const handlePrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSlideDirection('slide-right');
    setPreviousIndex(currentIndex);
    
    const newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSlideDirection('slide-left');
    setPreviousIndex(currentIndex);
    
    const newIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const handleThumbnailClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setSlideDirection(index > currentIndex ? 'slide-left' : 'slide-right');
    setPreviousIndex(currentIndex);
    
    setCurrentIndex(index);
  };
  
  // Reset animation state after the image has changed
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection('');
        setPreviousIndex(null);
      }, 500); // Slightly longer than the CSS transition duration
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isAnimating]);
  
  if (!allImages.length) {
    return (
      <div className="bg-gray-200 rounded-lg w-full h-96 flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }
  
  // Function to render the appropriate image component
  const renderImage = (img, className) => {
    // If it's a processed GatsbyImage
    if (img && typeof img === 'object' && img.images) {
      return (
        <GatsbyImage 
          image={img} 
          alt="Animal image" 
          className={className}
        />
      );
    }
    
    // If it's an object with url property (raw Contentful image)
    if (img && typeof img === 'object' && img.url) {
      return (
        <img 
          src={img.url} 
          alt="Animal image" 
          className={className}
        />
      );
    }
    
    // If it's a string URL
    if (typeof img === 'string') {
      return (
        <img 
          src={img} 
          alt="Animal image" 
          className={className}
        />
      );
    }
    
    // Fallback
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <span className="text-gray-500">Image unavailable</span>
      </div>
    );
  };
  
  // Get animation classes based on the slide direction
  const getCurrentImageClass = () => {
    if (!isAnimating) return 'opacity-100 z-10';
    
    if (slideDirection === 'slide-left') {
      return 'animate-slide-in-left z-10';
    } else if (slideDirection === 'slide-right') {
      return 'animate-slide-in-right z-10';
    }
    
    return 'opacity-100 z-10';
  };
  
  const getPreviousImageClass = () => {
    if (!isAnimating) return 'hidden';
    
    if (slideDirection === 'slide-left') {
      return 'animate-slide-out-left absolute inset-0 z-0';
    } else if (slideDirection === 'slide-right') {
      return 'animate-slide-out-right absolute inset-0 z-0';
    }
    
    return 'hidden';
  };
  
  return (
    <div className="space-y-4">
      {/* Main image display */}
      <div className="relative rounded-lg overflow-hidden w-full bg-gray-100">
        {/* Current image */}
        <div className={`w-full h-full transition-all duration-300 ${getCurrentImageClass()}`}>
          {renderImage(allImages[currentIndex], "w-full h-full object-cover")}
        </div>
        
        {/* Previous image (for transition) */}
        {previousIndex !== null && (
          <div className={`w-full h-full transition-all duration-300 ${getPreviousImageClass()}`}>
            {renderImage(allImages[previousIndex], "w-full h-full object-cover")}
          </div>
        )}
        
        {/* Navigation arrows */}
        {allImages.length > 1 && (
          <>
            <button 
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all z-20"
              aria-label="Previous image"
              disabled={isAnimating}
            >
              <FaChevronLeft className="text-dark-blue" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all z-20"
              aria-label="Next image"
              disabled={isAnimating}
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
              disabled={isAnimating}
            >
              {renderImage(img, "w-full h-full object-cover")}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

ImageCarousel.propTypes = {
  mainImage: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  otherImages: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ])
  )
};

export default ImageCarousel;
