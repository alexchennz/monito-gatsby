import React from 'react';
import { Link } from 'gatsby';
import playCircle from '../images/Play_Circle.png';
import paw from '../images/fontisto_paw.svg';

const HomeBottomBanner = () => {
  return (
    <section className="pb-16 bg-white hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="rounded-[20px] overflow-hidden">
          <div className="flex flex-col lg:flex-row bg-[url(/images/bottom-banner.png)] bg-contain xl:bg-cover bg-no-repeat">
            
            {/* Right content */}
            <div className="w-full lg:w-1/2  xl:w-[40%] p-4 lg:p-8 xl:p-12 flex flex-col justify-center relative z-20">
              <h2 className="flex items-center gap-6 text-clamp-h2 font-extrabold text-dark-blue leading-tight mb-2">
              Adoption
              <img src={paw} alt="Paw icon" className="w-11" />
              </h2>
              <h3 className="text-clamp-h3 font-bold text-dark-blue leading-tight mb-4">
              We need help. so do they.
              </h3>
              <p className="text-base text-neutral mb-8 lg:max-w-lg">
              Adopt a pet and give it a home, it will be love you back unconditionally.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to='/pets' className="bg-dark-blue text-white font-medium py-3 px-7 rounded-3xl ring-2 ring-dark-blue hover:text-dark-blue xl:hover:bg-transparent transition-colors flex items-center gap-2">
                  <span>Explore Now</span>
                </Link>
                <Link to='/about' className=" text-dark-blue-80 font-medium py-3 px-7 rounded-3xl bg-white xl:bg-transparent xl:hover:bg-white transition-colors flex items-center gap-2 ring-2 ring-dark-blue">
                  <span>View Intro</span>
                  <img src={playCircle} alt="Play icon" className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBottomBanner;
