import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CakeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cakeCategories = [
    {
      title: "Eggless Delights",
      description: "100% egg-free, equally delicious",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",  
      type: "eggless"
    },
    {
      title: "Classic Egg Cakes",
      description: "Traditional recipes with fresh eggs",
      image: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80", 
      type: "with-egg"
    },
    {
      title: "Light Cream",
      description: "For those who prefer subtle sweetness",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80", 
      type: "less-cream"
    },
    {
      title: "Decadent Cream",
      description: "Extra creamy & luxurious",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      type: "more-cream"
    },
    {
      title: "Custom Creations",
      description: "Designed exactly to your taste",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" , 
      type: "custom"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cakeCategories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cakeCategories.length) % cakeCategories.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Cake Varieties
        </h2>
        
        <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-xl">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center"
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${cakeCategories[currentSlide].image})` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              {/* Slide content */}
              <div className="relative z-10 text-white p-8 max-w-2xl">
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block px-3 py-1 bg-purple-500 rounded-full text-sm font-medium mb-4">
                    {cakeCategories[currentSlide].type.split('-').join(' ')}
                  </span>
                  <h3 className="text-4xl font-bold mb-3">
                    {cakeCategories[currentSlide].title}
                  </h3>
                  <p className="text-xl mb-6">
                    {cakeCategories[currentSlide].description}
                  </p>
                  <button className="bg-white text-purple-500 hover:bg-purple-100 px-6 py-3 rounded-lg font-medium transition-all">
                    Order This Style
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {cakeCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CakeSlider;
