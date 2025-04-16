import React from 'react';
import { Link } from 'gatsby';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import monitoLogo from '../images/monito-logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mon-yellow-40 rounded-t-3xl mt-12 pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Section with Logo and Links */}
        <div className="flex flex-col justify-between">
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-between mb-10 pb-10 border-b border-neutral/20">
            {/* Column 1 */}
            <div>
              <ul className="flex flex-row justify-between items-center gap-8">
                <li><Link to="/" className="text-neutral hover:text-dark-blue transition-colors">Home</Link></li>
                <li><Link to="/" className="text-neutral hover:text-dark-blue transition-colors">Categories</Link></li>
                <li><Link to="/about" className="text-neutral hover:text-dark-blue transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-neutral hover:text-dark-blue transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" p-2 rounded-full text-dark-blue hover:bg-dark-blue hover:text-white transition-colors">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" p-2 rounded-full text-dark-blue hover:bg-dark-blue hover:text-white transition-colors">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className=" p-2 rounded-full text-dark-blue hover:bg-dark-blue hover:text-white transition-colors">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className=" p-2 rounded-full text-dark-blue hover:bg-dark-blue hover:text-white transition-colors">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>          
        </div>


        {/* Bottom Section with Copyright and Terms */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-neutral-60 mb-4 md:mb-0"> {currentYear} Monito. All rights reserved.</p>
          <Link to="/">
              <img src={monitoLogo} alt="Monito" className="h-10 mb-4" />
            </Link>
          <div className="text-neutral-60">
            <Link to="/" className="hover:text-dark-blue transition-colors">Terms of Service</Link>
            <span className="mx-6">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
