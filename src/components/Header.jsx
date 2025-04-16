import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import monitoLogo from '../images/monito-logo.svg';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/"><img src={monitoLogo} alt="Monito Logo" className="h-10" /></Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-dark-blue font-bold hover:text-dark-blue-60">Home</Link>
            <Link to="/" className="text-dark-blue font-bold hover:text-dark-blue-60">Category</Link>
            <Link to="/about" className="text-dark-blue font-bold hover:text-dark-blue-60">About</Link>
            <Link to="/contact" className="text-dark-blue font-bold hover:text-dark-blue-60">Contact</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-white border border-gray-200 rounded-3xl px-4 py-3">
            <input
              type="text"
              placeholder="Search something here!"
              className="bg-transparent border-none outline-none text-sm text-gray-500 w-48"
            />
            <button className="ml-2">
              <AiOutlineSearch className="h-5 w-5 text-dark-blue" />
            </button>
          </div>

          {/* Join the Community Link */}
          <div className="hidden lg:block">
            <a 
              href="#" 
              className="bg-dark-blue text-white hover:bg-dark-blue-80 font-bold rounded-3xl inline-flex items-center justify-center text-clamp-p py-3 px-7 leading-6"
            >
              Join the community
            </a>
          </div>



          {/* Mobile Menu Button (only visible on small screens) */}
          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <HiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
