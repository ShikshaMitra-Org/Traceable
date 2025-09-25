import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[50vh] bg-white">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-50/20 via-transparent to-transparent"></div>
      
      {/* Main hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        
        {/* Top Eyebrow Text */}
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-8 font-inter font-medium animate-fade-in">
          Premium Supplements
        </p>

        {/* Main Brand Title with Animation */}
        <h1 className="text-6xl md:text-8xl font-inter font-bold text-black mb-12 tracking-[0.3em]">
          {'TRACEABLE'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-slide-up opacity-0"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-gray-700 mb-12 font-inter">
          Stop wasting money on supplements that don't work. Our pharmaceutical experts select only the 5–8 supplements with proven efficacy and optimal bioavailability.
        </p>

        {/* Claim Highlight Badge */}
        <div className="inline-flex items-center px-8 py-3 bg-white border border-gray-200 rounded-full shadow-sm">
          <span className="text-sm font-medium text-black tracking-wide">
            Only What Actually Works
          </span>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="inline-flex items-center px-6 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm">
          <span className="text-xs uppercase tracking-widest text-gray-600 font-inter font-medium">
            Curated by Experts. Traced to Source.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
