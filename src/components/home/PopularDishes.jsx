import React from 'react';
import { motion } from 'framer-motion';
import db from '../../data/db.json';

const PopularDishes = () => {
  const popularDishes = db.menu.filter(item => item.isChefSpecial).slice(0, 4);

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background Parallax Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2000&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover fixed opacity-30 blur-sm"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Chef's Specials</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
          >
            Highly <span className="text-secondary">Recommended</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark rounded-2xl p-4 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover image-hover-zoom"
                />
                <div className="absolute top-2 right-2 bg-dark/80 backdrop-blur-sm px-2 py-1 rounded-md text-secondary font-bold text-sm">
                  ₹{dish.price}
                </div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-white mb-2 line-clamp-1">{dish.name}</h3>
              <p className="text-white/60 text-sm mb-4 line-clamp-2">{dish.description}</p>
              
              <button className="w-full py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-secondary hover:border-secondary transition-colors">
                Order Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
