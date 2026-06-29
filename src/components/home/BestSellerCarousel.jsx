import React from 'react';
import { motion } from 'framer-motion';
import db from '../../data/db.json';

const BestSellerCarousel = () => {
  const bestSellers = db.menu.filter(item => item.isBestSeller).slice(0, 6);

  return (
    <section className="py-20 relative overflow-hidden bg-brand-bg">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-12">
        <div className="flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-4">
              Best Sellers <span className="text-secondary">&</span> Must Tries
            </h2>
            <p className="text-dark/60 max-w-xl">
              Our most loved dishes that keep our customers coming back for more. Prepared fresh using our signature spices.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex gap-4"
          >
            <button className="w-12 h-12 rounded-full border border-dark/20 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors shadow-lg shadow-primary/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar pb-12 pt-4 px-6 md:px-12">
        <div className="flex gap-8 w-max">
          {bestSellers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-[320px] md:w-[380px] card-glass bg-white/60 relative group premium-shadow overflow-visible"
            >
              {/* Floating Image */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-48 h-48 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.2)] border-4 border-white overflow-hidden z-10 group-hover:scale-105 transition-transform duration-500">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                {/* Steam animation based on category */}
                {['Chicken Dishes', 'Mutton Dishes', 'Fish Specials', 'Rice Specials', 'Saturday Veg Meals'].includes(item.category) && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 opacity-50 flex space-x-1">
                     <span className="w-1 bg-white blur-sm rounded-full animate-steam"></span>
                     <span className="w-1.5 bg-white blur-sm rounded-full animate-steam-delay-1"></span>
                     <span className="w-1 bg-white blur-sm rounded-full animate-steam-delay-2"></span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="pt-40 pb-8 px-8 text-center flex flex-col h-full z-0 relative">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-dark mb-3 line-clamp-1">{item.name}</h3>
                <p className="text-dark/60 text-sm mb-6 flex-grow">{item.description}</p>
                
                <div className="flex items-center justify-between border-t border-dark/10 pt-6 mt-auto">
                  <p className="text-2xl font-bold text-primary">₹{item.price}</p>
                  <button className="bg-dark text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-secondary transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerCarousel;
