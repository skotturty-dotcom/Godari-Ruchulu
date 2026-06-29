import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import db from '../../data/db.json';

const MasonryGallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Extract unique categories
  const categories = ['All', ...new Set(db.gallery.map(img => img.category))];
  
  const filteredGallery = selectedFilter === 'All' 
    ? db.gallery 
    : db.gallery.filter(img => img.category === selectedFilter);

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Visual Journey</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
          >
            Customer Food <span className="text-secondary">Gallery</span>
          </motion.h2>
          
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === category 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer premium-shadow"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-w-16 aspect-h-auto w-full">
                  <img 
                    src={item.image} 
                    alt={item.category} 
                    loading="lazy"
                    className="w-full h-auto object-cover image-hover-zoom"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-playfair text-xl font-bold">{item.category}</p>
                    <div className="w-12 h-1 bg-secondary mt-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MasonryGallery;
