import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cake, PartyPopper, Gift, Heart, Smile } from 'lucide-react';

const HeroSection = () => {
  const [currentOccasion, setCurrentOccasion] = useState(0);
  const occasions = [
    { name: 'Birthday', icon: <PartyPopper className="w-8 h-8" /> },
    { name: 'Anniversary', icon: <Heart className="w-8 h-8" /> },
    { name: 'Farewell', icon: <Smile className="w-8 h-8" /> },
    { name: 'Welcome', icon: <Gift className="w-8 h-8" /> },
    { name: 'Graduation', icon: <Cake className="w-8 h-8" /> },
    { name: 'Wedding', icon: <Heart className="w-8 h-8" /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOccasion((prev) => (prev + 1) % occasions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-400 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Perfect Cakes for{' '}
              <motion.span 
                key={currentOccasion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-purple-400"
              >
                {occasions[currentOccasion].name}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
            >
              Handcrafted with love and the finest ingredients to make your special occasions unforgettable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Order Now
              </button>
              <button className="border-2 border-purple-600 text-purple-400 hover:bg-purple-900/30 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                View Menu
              </button>
            </motion.div>
          </div>

          {/* Image/illustration */}
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-400 rounded-full filter blur-xl opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500 rounded-full filter blur-xl opacity-20"></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    ease: "easeInOut"
                  }}
                  className="text-center"
                >
                  <Cake className="w-32 h-32 mx-auto text-purple-400" />
                </motion.div>
                
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {occasions.map((occasion, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full ${currentOccasion === index ? 'bg-purple-600/20 border border-purple-600/50' : 'bg-gray-700/50 border border-gray-600/50'}`}
                    >
                      <span className="text-purple-400">{occasion.icon}</span>
                      <span className="text-sm font-medium">{occasion.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
