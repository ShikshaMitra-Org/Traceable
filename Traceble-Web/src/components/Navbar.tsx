import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold font-inter tracking-wide text-black hover:text-gray-700 transition-colors duration-300">
              TRACEABLE
            </Link>
          </div>

          {/* Navigation Links - Apple Style */}
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              to="/our-story" 
              className="text-gray-600 hover:text-black transition-colors duration-300 font-inter font-normal text-sm tracking-wide"
            >
              Our Story
            </Link>
            <a 
              href="#products" 
              className="text-gray-600 hover:text-black transition-colors duration-300 font-inter font-normal text-sm tracking-wide"
            >
              Products
            </a>
            <Link 
              to="/experts" 
              className="text-gray-600 hover:text-black transition-colors duration-300 font-inter font-normal text-sm tracking-wide"
            >
              Experts
            </Link>
            
            {/* Shop Now Button - Apple Style */}
            <button className="bg-black text-white px-5 py-2 rounded-full font-inter font-medium text-sm hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (hidden by default) */}
        <div className="hidden md:hidden mt-6 pb-4 space-y-6">
          <Link 
            to="/our-story" 
            className="block text-gray-600 hover:text-black transition-colors duration-300 font-inter font-normal text-sm tracking-wide"
          >
            Our Story
          </Link>
          <a 
            href="#products" 
            className="block text-gray-600 hover:text-black transition-colors duration-300 font-inter font-normal text-sm tracking-wide"
          >
            Products
          </a>
          <Link 
            to="/experts" 
            className="block text-gray-600 hover:text-black transition-colors duration-300 font-inter font-normal text-sm tracking-wide"
          >
            Experts
          </Link>
          <button className="bg-black text-white px-5 py-2 rounded-full font-inter font-medium text-sm hover:bg-gray-800 transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
