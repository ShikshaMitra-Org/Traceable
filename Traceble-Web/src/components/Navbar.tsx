import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-subtle-border">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-inter tracking-logo text-black">
              TRACEABLE
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#story" 
              className="text-text-secondary hover:text-black transition-colors duration-200 font-inter font-medium text-sm"
            >
              Our Story
            </a>
            <a 
              href="#products" 
              className="text-text-secondary hover:text-black transition-colors duration-200 font-inter font-medium text-sm"
            >
              Products
            </a>
            <a 
              href="#experts" 
              className="text-text-secondary hover:text-black transition-colors duration-200 font-inter font-medium text-sm"
            >
              Experts
            </a>
            
            {/* Shop Now Button */}
            <button className="bg-black text-white px-6 py-2.5 rounded-sm font-inter font-medium text-sm hover:bg-brand-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-minimal-accent focus:ring-offset-2">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-black focus:outline-none focus:ring-2 focus:ring-minimal-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (hidden by default) */}
        <div className="hidden md:hidden mt-4 space-y-4">
          <a 
            href="#story" 
            className="block text-text-secondary hover:text-black transition-colors duration-200 font-inter font-medium text-sm"
          >
            Our Story
          </a>
          <a 
            href="#products" 
            className="block text-text-secondary hover:text-black transition-colors duration-200 font-inter font-medium text-sm"
          >
            Products
          </a>
          <a 
            href="#experts" 
            className="block text-text-secondary hover:text-black transition-colors duration-200 font-inter font-medium text-sm"
          >
            Experts
          </a>
          <button className="w-full text-left bg-black text-white px-6 py-2.5 rounded-sm font-inter font-medium text-sm hover:bg-brand-accent transition-colors duration-200">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
