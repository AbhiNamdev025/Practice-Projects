import React from 'react';

const HeaderBanner = () => {
  return (
    <div className="w-full h-24 bg-gradient-to-r from-purple-100 to-purple-300 border-b border-purple-400">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center">
        {/* Frost Bloom Logo SVG */}
        <svg 
          width="180" 
          height="60" 
          viewBox="0 0 200 200" 
          className="mr-3"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Cake Base */}
          <path d="M50 120C50 90 70 80 100 80C130 80 150 90 150 120L145 160C145 170 125 180 100 180C75 180 55 170 55 160L50 120Z" fill="#8B5CF6"/> {/* purple-500 */}

          {/* Frosting Swirl */}
          <path d="M100 40C120 40 135 60 130 80C125 70 110 65 100 65C90 65 75 70 70 80C65 60 80 40 100 40Z" fill="#EDE9FE"/> {/* purple-100 */}

          {/* Flower Decoration */}
          <circle cx="100" cy="60" r="10" fill="#C4B5FD"/> {/* purple-300 */}
          <circle cx="85" cy="70" r="7" fill="#C4B5FD"/>
          <circle cx="115" cy="70" r="7" fill="#C4B5FD"/>
        </svg>

        {/* Text Logo */}
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-gray-900 tracking-tight">FROST</span>
          <span className="text-2xl font-bold text-purple-600 tracking-tight -mt-1">BLOOM</span>
        </div>

        {/* Optional Tagline - Remove if not needed */}
        <div className="ml-auto hidden md:block">
          <span className="text-purple-800 italic font-medium">Handcrafted Cake Artistry</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
