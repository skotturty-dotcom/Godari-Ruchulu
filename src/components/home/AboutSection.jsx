import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-brand-bg overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=2069&auto=format&fit=crop" 
                alt="Traditional Spices" 
                className="w-full h-64 object-cover rounded-2xl shadow-xl mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop" 
                alt="Samosa and Chai" 
                className="w-full h-64 object-cover rounded-2xl shadow-xl"
              />
            </div>
            {/* Background Decor */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-2">
              <span className="w-12 h-[2px] bg-secondary block"></span>
              <span className="text-secondary uppercase tracking-widest font-medium text-sm">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary leading-tight">
              Bringing Diviseema <br /> To Your Plate
            </h2>
            <p className="text-dark/80 leading-relaxed">
              Rooted in the rich culinary heritage of the Godavari districts, our cloud kitchen is born out of a passion for 
              preserving <span className="font-semibold text-primary">authentic homemade flavours</span>. We don't just cook food; we craft memories reminiscent of a grandmother's kitchen.
            </p>
            <p className="text-dark/80 leading-relaxed">
              Every dish is prepared using fresh ingredients, pure ghee, and traditional masalas hand-pounded to perfection. 
              No preservatives, no artificial colors—just pure, unadulterated love from our family to yours.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-primary/10">
              <div>
                <h4 className="font-playfair text-xl font-bold text-primary mb-2">Fresh Ingredients</h4>
                <p className="text-sm text-dark/70">Locally sourced, daily prepped for the best taste.</p>
              </div>
              <div>
                <h4 className="font-playfair text-xl font-bold text-primary mb-2">Traditional Masalas</h4>
                <p className="text-sm text-dark/70">Homemade spice blends passed down through generations.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
