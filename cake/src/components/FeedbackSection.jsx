import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const feedbacks = [
  {
    id: 1,
    name: 'Ms. Sharma',
    role: 'Birthday Party Host',
    feedback: "The cakes were absolutely stunning and delicious! My guests couldn't stop raving about them. Highly recommend!",
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Mr. Rajput',
    role: 'Wedding Planner',
    feedback: "Exceptional quality and exquisite taste. The cake was the highlight of the wedding reception!",
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'Miss Patel',
    role: 'Event Organizer',
    feedback: "Professional service and beautiful designs. The best cake experience we've had so far.",
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.2, 0.8, 0.4, 1]
    }
  }),
  hover: {
    y: -10,
    boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.3)",
    transition: { duration: 0.3 }
  }
};

const starVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5 + i * 0.1,
      type: "spring",
      stiffness: 300
    }
  })
};

const FeedbackSection = () => {
  return (
    <section className="relative py-24 px-6 sm:px-12 overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-[120px] opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
            Voices of Delight
          </h2>
          <p className="text-lg text-purple-300 max-w-3xl mx-auto">
            Hear from those who've experienced our sweet creations. Each review is a story of happiness we've baked.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((item, i) => (
            <motion.div
              key={item.id}
              className="bg-gradient-to-br from-purple-900/80 to-purple-800/90 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30 shadow-xl"
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6 space-x-4">
                  <motion.img
                    src={item.avatar}
                    alt={`${item.name} avatar`}
                    className="w-16 h-16 rounded-full border-4 border-purple-400/50"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    <p className="text-purple-300 text-sm">{item.role}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <motion.div
                          key={starIndex}
                          custom={starIndex}
                          initial="hidden"
                          animate="visible"
                          variants={starVariants}
                        >
                          <FaStar 
                            className={`text-sm ${starIndex < item.rating ? 'text-yellow-400' : 'text-purple-700'}`} 
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative flex-1">
                  <FaQuoteLeft className="absolute -top-2 left-0 text-purple-500/30 text-4xl" />
                  <p className="text-purple-100 pl-8 relative z-10">
                    {item.feedback}
                  </p>
                </div>

                <motion.div 
                  className="mt-6 pt-6 border-t border-purple-700/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-purple-400">Verified Purchase</span>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div 
                          key={i}
                          className="w-2 h-2 bg-purple-500 rounded-full"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.5,
                            delay: i * 0.3
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Share Your Experience
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackSection;