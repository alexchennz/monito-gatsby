import React from 'react';
import { Link } from 'gatsby';
import playCircle from '../images/Play_Circle.png';

const HomeBanner = () => {
  return (
    <section className="pb-16 bg-white hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="rounded-[20px] overflow-hidden">
          <div className="flex flex-col justify-end lg:flex-row bg-[url(/images/middle-banner.png)] bg-contain xl:bg-cover bg-no-repeat">
            
            {/* Right content */}
            <div className="w-full lg:w-1/2  xl:w-[40%] p-4 lg:p-8 xl:p-12 flex flex-col justify-center relative z-20">
              <h2 className="text-clamp-h2 font-extrabold text-dark-blue leading-tight mb-2">
                One more friend
              </h2>
              <h3 className="text-clamp-h3 font-bold text-dark-blue leading-tight mb-4">
                Thousands more fun!
              </h3>
              <p className="text-base text-neutral mb-8 lg:max-w-lg">
                Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to='#' className=" text-dark-blue-80 font-medium py-3 px-7 rounded-3xl bg-white xl:bg-transparent xl:hover:bg-white transition-colors flex items-center gap-2 ring-2 ring-dark-blue">
                  <span>View Intro</span>
                  <img src={playCircle} alt="Play icon" className="w-6 h-6" />
                </Link>
                <Link to='#' className="bg-dark-blue text-white font-medium py-3 px-7 rounded-3xl ring-2 ring-dark-blue hover:text-dark-blue xl:hover:bg-transparent transition-colors flex items-center gap-2">
                  <span>Explore Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
