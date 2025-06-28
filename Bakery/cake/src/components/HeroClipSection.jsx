import React from "react";

const HeroClipSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* YouTube iframe background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <iframe
          width="100%"
          height="100%"
          // src="https://www.youtube.com/embed/HgI2nJWe5Ns?autoplay=1&mute=1&loop=1&playlist=HgI2nJWe5Ns&controls=0&showinfo=0&modestbranding=1&rel=0"
          src=""
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
      </div>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-purple-900/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Celebrate Every Moment with <span className="text-purple-400">Delicious Cakes</span>
        </h1>
        <p className="text-lg sm:text-xl mb-10 drop-shadow-md">
          Handcrafted with love and the finest ingredients to make your special occasions unforgettable.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-white font-semibold px-8 py-3 rounded-lg shadow-lg">
          Order Your Cake
        </button>
      </div>
    </section>
  );
};

export default HeroClipSection;
