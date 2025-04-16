import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { AiOutlineSearch } from 'react-icons/ai';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import monitoLogo from '../images/monito-logo.svg';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

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

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/">
            <img src={monitoLogo} alt="Monito" className="h-12" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-dark-blue font-bold hover:text-dark-blue-60">Home</Link>
            <Link to="/pets" className="text-dark-blue font-bold hover:text-dark-blue-60">Pets</Link>
            <Link to="/about" className="text-dark-blue font-bold hover:text-dark-blue-60">About</Link>
            <Link to="/contact" className="text-dark-blue font-bold hover:text-dark-blue-60">Contact</Link>
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
                  <Link 
                    key={animal.id} 
                    to={`/animal/${animal.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    onClick={() => setShowResults(false)}
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
                  </Link>
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
            <a 
              href="#" 
              className="bg-dark-blue text-white hover:bg-dark-blue-80 font-bold rounded-3xl inline-flex items-center justify-center text-clamp-p py-3 px-7 leading-6"
            >
              Join the community
            </a>
          </div>

          {/* Mobile Menu Button (placeholder) */}
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
