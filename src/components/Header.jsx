import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql, navigate, Link } from 'gatsby';
import { AiOutlineSearch } from 'react-icons/ai';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import monitoLogo from '../images/monito-logo.svg';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Query all animals for search functionality
  const data = useStaticQuery(graphql`
    query {
      allContentfulMonitoAnimal {
        edges {
          node {
            id
            name {
              name
            }
            image {
              gatsbyImageData(width: 50, height: 50)
            }
          }
        }
      }
    }
  `);

  const animals = data.allContentfulMonitoAnimal.edges.map(edge => ({
    id: edge.node.id,
    name: edge.node.name?.name || 'Unnamed Pet',
    image: edge.node.image?.gatsbyImageData || null
  }));

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.length >= 2) {
      const filteredResults = animals.filter(animal => 
        animal.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  // Handle result click and navigation
  const handleResultClick = (animalName) => {
    const path = `/animal/${animalName.toLowerCase().replace(/\s+/g, '-')}`;
    // Use setTimeout to allow the click to complete before navigating
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
      
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div onClick={() => navigate('/')}>
            <img src={monitoLogo} alt="Monito" className="h-12 cursor-pointer" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 *:font-semibold">
            <Link to="/">Home</Link>
            <Link to="/pets">Pets</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative" ref={searchRef}>
            <div className="bg-white border border-gray-200 rounded-3xl px-4 py-3 flex items-center">
              <input
                type="text"
                placeholder="Search something here!"
                className="bg-transparent border-none outline-none text-sm text-gray-500 w-48"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="ml-2">
                <AiOutlineSearch className="h-5 w-5 text-dark-blue" />
              </button>
            </div>
            
            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                {searchResults.map(animal => (
                  <div 
                    key={animal.id} 
                    className="flex items-center p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer"
                    onClick={() => handleResultClick(animal.name)}
                  >
                    {animal.image ? (
                      <GatsbyImage 
                        image={getImage(animal.image)} 
                        alt={animal.name} 
                        className="w-10 h-10 rounded-lg object-cover mr-3"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-mon-yellow-40 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-dark-blue font-bold text-xs">{animal.name.charAt(0)}</span>
                      </div>
                    )}
                    <span className="text-dark-blue font-semibold">{animal.name}</span>
                  </div>
                ))}
              </div>
            )}
            
            {/* No Results Message */}
            {showResults && searchTerm.length >= 2 && searchResults.length === 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 text-center">
                <p className="text-neutral-60">No pets found matching "{searchTerm}"</p>
              </div>
            )}
          </div>

          {/* Join the Community Link */}
          <div className="hidden lg:block">
            <div 
              className="bg-dark-blue text-white hover:bg-dark-blue-80 font-bold rounded-3xl inline-flex items-center justify-center text-clamp-p py-3 px-7 leading-6 cursor-pointer"
              onClick={() => navigate('#')}
            >
              Join the community
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          ref={mobileMenuRef}
          className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 py-4 border-t border-gray-100' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 mb-4">
            <div 
              className="text-dark-blue font-bold hover:text-dark-blue-60 px-2 py-1 cursor-pointer"
              
            >
              <Link to="/">Home</Link>
            </div>
            <div 
              className="text-dark-blue font-bold hover:text-dark-blue-60 px-2 py-1 cursor-pointer"
            >
              <Link to="/pets">Pets</Link>
            </div>
            <div 
              className="text-dark-blue font-bold hover:text-dark-blue-60 px-2 py-1 cursor-pointer"
            >
              <Link to="/about">About</Link>
            </div>
            <div 
              className="text-dark-blue font-bold hover:text-dark-blue-60 px-2 py-1 cursor-pointer"
            >
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
          
          {/* Mobile Search */}
          <div className="relative mb-4 px-2">
            <div className="bg-gray-100 rounded-3xl px-4 py-3 flex items-center">
              <input
                type="text"
                placeholder="Search something here!"
                className="bg-transparent border-none outline-none text-sm text-gray-500 w-full"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="ml-2">
                <AiOutlineSearch className="h-5 w-5 text-dark-blue" />
              </button>
            </div>
            
            {/* Mobile Search Results */}
            {showResults && searchResults.length > 0 && (
              <div className="fixed left-4 right-4 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[100] max-h-60 overflow-y-auto">
                {searchResults.map(animal => (
                  <div 
                    key={animal.id} 
                    className="flex items-center p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer"
                    onClick={() => handleResultClick(animal.name)}
                  >
                    {animal.image ? (
                      <GatsbyImage 
                        image={getImage(animal.image)} 
                        alt={animal.name} 
                        className="w-10 h-10 rounded-lg object-cover mr-3"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-mon-yellow-40 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-dark-blue font-bold text-xs">{animal.name.charAt(0)}</span>
                      </div>
                    )}
                    <span className="text-dark-blue font-semibold">{animal.name}</span>
                  </div>
                ))}
              </div>
            )}
            
            {/* Mobile No Results Message */}
            {showResults && searchTerm.length >= 2 && searchResults.length === 0 && (
              <div className="fixed left-4 right-4 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[100] p-4 text-center">
                <p className="text-neutral-60">No pets found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
          
          {/* Mobile CTA Button */}
          <div className="px-2 mb-2">
            <div 
              className="bg-dark-blue text-white hover:bg-dark-blue-80 font-bold rounded-3xl inline-flex items-center justify-center w-full text-center py-3 px-7 cursor-pointer"
              onClick={() => navigate('#')}
            >
              Join the community
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
