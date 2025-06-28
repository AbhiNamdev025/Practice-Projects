import { motion } from 'framer-motion';
import { Gift, Truck, CalendarCheck } from 'lucide-react';

const DiscountSection = () => {
  return (
    <section className="bg-[#111827] py-12 px-4 sm:px-6 lg:px-8 shadow-xl">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Main Offer */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Special Offers for You!
              </h2>
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 justify-center md:justify-start">
                <div className="bg-white/10 px-4 py-2 rounded-full flex items-center justify-center gap-2">
                  <Gift className="text-white" />
                  <span className="text-white font-semibold">20% OFF First Order</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-full flex items-center justify-center gap-2">
                  <Truck className="text-white" />
                  <span className="text-white font-semibold">Free Delivery</span>
                </div>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="bg-[#1f2937] rounded-lg p-5 text-center shadow-lg">
              <p className="text-sm text-gray-300 mb-1">Use code at checkout</p>
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-2xl font-bold text-purple-500">FROSTBLOOM20</span>
                <button className="text-[#c084fc] hover:text-[#e9d5ff]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-400">Valid for first-time customers only</p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 text-white hover:bg-[#e9d5ff] px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition-all"
            >
              Order Now
            </motion.button>
          </div>

          {/* Additional Benefit */}
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-300">
            <CalendarCheck className="text-white" />
            <span>Free delivery available for next-day orders placed before 6PM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscountSection;
