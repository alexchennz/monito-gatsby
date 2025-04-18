import React from 'react';
import heroImage from '../images/hero-image.png';
import rectangle3 from '../images/Rectangle 3.svg';
import rectangle8 from '../images/Rectangle 8.svg';
import rectangle9 from '../images/Rectangle 9.svg';
import playCircle from '../images/Play_Circle.png';
import { Link } from 'gatsby';

const Hero = () => {
  return (
    <div className="relative bg-mon-yellow-40 rounded-b-[20px] xl:rounded-b-[40px] overflow-hidden mt-16 pt-8">
      
      {/* Decorative elements */}
      <img src={rectangle9} alt="" className="absolute top-[-18rem] left-0 size-[39.7rem]" />
      {/* SVG Rectangles - just a couple for subtle decoration */}
      <div className="container mx-auto relative">
      <img src={rectangle3} alt="" className="absolute top-24 size-16" />
      </div>
      
      

      <div className="container mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <div className="w-full lg:w-1/2 mb-8 md:mb-0 z-10">
            <h1 className="text-clamp-h1 font-extrabold text-dark-blue-80 leading-tight mb-2 lg:mb-3">
              One More Friend
            </h1>
            <h2 className="text-clamp-h2 font-bold text-dark-blue-80 leading-tight mb-3 lg:mb-4">
              Thousands More Fun!
            </h2>
            <p className="text-base text-dark-blue-80 mb-8 lg:max-w-lg">
              Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to='/about' className=" text-dark-blue font-medium py-3 px-7 rounded-3xl hover:bg-white transition-colors flex items-center gap-2 ring-2 ring-dark-blue">
                <span>View Intro</span>
                <img src={playCircle} alt="Play icon" className="w-6 h-6" />
              </Link>
              <Link to='/pets' className="bg-dark-blue-80 text-white font-medium py-3 px-7 rounded-3xl ring-2 ring-dark-blue hover:bg-transparent hover:text-dark-blue transition-colors flex items-center gap-2 ">
                <span>Explore Now</span>
              </Link>
            </div>
          </div>
          
          {/* Right content - Image */}
          <div className="w-full lg:w-1/2 relative z-0">
            <img 
              src={heroImage} 
              alt="Woman with dog" 
              className="w-96 lg:w-full h-auto object-cover"
            />
          </div>
        </div>
        <img src={rectangle8} alt="" className="hidden lg:block absolute bottom-[-17rem] left-[10rem] size-[39.7rem]" />
      </div>
    </div>
  );
};

export default Hero;
