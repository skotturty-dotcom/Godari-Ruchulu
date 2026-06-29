import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiAward } from 'react-icons/fi';

const SpecialDish = () => {
  return (
    <section id="specials" className="py-24 bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=2069&auto=format&fit=crop" 
                alt="Pappu Chaaru Uppu Chepa" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              {/* Badges */}
              <div className="absolute -top-6 -right-6 bg-accent text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-xl rotate-12 border-4 border-dark">
                <span className="font-bold text-lg leading-tight">Best</span>
                <span className="text-sm font-medium">Seller</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center space-x-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-2 border border-secondary/30">
                <FiAward className="text-lg" />
                <span>Chef Recommended</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white leading-tight">
                Pappu Chaaru <br />
                <span className="text-secondary">Uppu Chepa</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Experience the true essence of Godavari with our signature dish. A comforting bowl of traditional lentil soup (Pappu Chaaru) paired perfectly with crispy, salted dry fish (Uppu Chepa) fried in pure oil with homemade spices.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-3xl font-bold text-white">₹350</div>
                <Link to="/pre-order" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/30">
                  Order Now
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDish;
