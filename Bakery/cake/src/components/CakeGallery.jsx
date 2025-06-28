
import { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const CakeGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const cakes = [
    {
      id: 1,
      title: "Chocolate Fantasy",
      type: "eggless",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      tags: ["best seller", "chocolate"]
    },
    {
      id: 2,
      title: "Vanilla Dream",
      type: "with-egg",
      price: "₹1,099",
      image: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      tags: ["classic"]
    },
    {
      id: 3,
      title: "Berry Light",
      type: "less-cream",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      tags: ["fruit"]
    },
    {
      id: 4,
      title: "Royal Buttercream",
      type: "more-cream",
      price: "₹1,799",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      tags: ["luxury"]
    },
    {
      id: 5,
      title: "Wedding Special",
      type: "custom",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      tags: ["custom"]
    },
    {
      id: 6,
      title: "Red Velvet",
      type: "eggless",
      price: "₹1,599",
      image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      tags: ["popular"]
    }
  ];

  const filteredCakes = activeFilter === 'all' 
    ? cakes 
    : cakes.filter(cake => cake.type === activeFilter);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f5f4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cake Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handcrafted with premium ingredients for every occasion
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['all', 'eggless', 'with-egg', 'less-cream', 'more-cream', 'custom'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter === 'all' ? 'All Cakes' : filter.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Cake Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCakes.map((cake) => (
            <div 
              key={cake.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {cake.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-white/90 text-xs px-2 py-1 rounded-full text-gray-800 font-medium capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 p-2 rounded-full text-purple-500 hover:bg-purple-100">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="bg-white/90 p-2 rounded-full text-purple-500 hover:bg-purple-100">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Cake Info */}
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{cake.title}</h3>
                    <p className="text-sm text-gray-500 capitalize">{cake.type.replace('-', ' ')}</p>
                  </div>
                  <span className="font-bold text-purple-600">{cake.price}</span>
                </div>
                <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors">
                  Customize Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default CakeGallery;
