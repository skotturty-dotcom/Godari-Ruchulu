import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';

const FloatingButtons = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4 items-center">
      
      {/* Scroll to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0 }}
            onClick={scrollToTop}
            className="w-10 h-10 bg-dark text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors border border-white/10"
          >
            <FaArrowUp className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call Button */}
      <a 
        href="tel:+919876543210" 
        className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group"
      >
        <FaPhoneAlt className="text-lg relative z-10" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-dark text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Us
        </span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-all relative group"
      >
        <FaWhatsapp className="text-3xl relative z-10" />
        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-dark text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Order on WhatsApp
        </span>
      </a>

    </div>
  );
};

export default FloatingButtons;
