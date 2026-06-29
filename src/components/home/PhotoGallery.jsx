import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';

const photos = [
  "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1913&auto=format&fit=crop"
];

const PhotoGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary uppercase tracking-widest font-medium text-sm mb-2 block">Our Gallery</span>
          <h2 className="text-4xl font-playfair font-bold text-primary mb-6">A Glimpse of Godavari</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        {/* Masonry-style CSS Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {photos.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${idx === 0 || idx === 3 ? 'md:row-span-2' : ''}`}
              onClick={() => setSelectedImg(src)}
            >
              <img 
                src={src} 
                alt={`Gallery photo ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 min-h-[250px]"
              />
              <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FiZoomIn className="text-white text-4xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
            >
              <FiX className="text-2xl" />
            </button>
            
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImg}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
