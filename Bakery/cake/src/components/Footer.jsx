import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-[#111827] border-t border-[#6b46c1] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-600 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-indigo-700 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Brand info */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-white mb-4">
              Frost<span className="text-[#c4b5fd]">Bloom</span>
            </h2>
            <p className="text-[#d8b4fe] mb-6">
              Crafting digital experiences that blend beauty with functionality.
            </p>
            <div className="flex space-x-4">
              {[FaInstagram, FaTwitter, FaLinkedin, FaYoutube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-[#d8b4fe] hover:text-white text-xl transition-colors duration-300"
                  whileHover={{ y: -3 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#c4b5fd] mt-1 mr-3" />
                <span className="text-[#d8b4fe]">
                  123 Cyber Avenue<br />
                  Neo District, Digital City 100001
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-[#c4b5fd] mr-3" />
                <a href="tel:+9198xxxxxx96" className="text-[#d8b4fe] hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#c4b5fd] mr-3" />
                <a href="mailto:hello@frostbloom.tech" className="text-[#d8b4fe] hover:text-white transition-colors">
                  hello@frostbloom.tech
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'About Us', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#d8b4fe] hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#c4b5fd] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-[#d8b4fe] mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#1F2937] text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] w-full"
              />
              <button className="bg-[#6b46c1] hover:bg-[#7c3aed] text-white px-4 py-2 rounded-r-md transition-colors duration-300">
                Join
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-[#374151] mt-16 pt-8 text-center"
        >
          <p className="text-[#d8b4fe]">
            © {new Date().getFullYear()} FrostBloom. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#d8b4fe] hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;