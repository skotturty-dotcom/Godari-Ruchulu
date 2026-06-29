import React from 'react';
import { motion } from 'framer-motion';

const ChefSection = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Chef Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/40 to-primary/40 rounded-3xl blur-2xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop" 
              alt="Our Head Chef" 
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-white/10"
            />
            {/* Signature overlay */}
            <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <span className="font-playfair italic text-white/90 text-2xl">Bhavani S.</span>
              <p className="text-secondary text-xs uppercase tracking-widest mt-1">Head Chef & Founder</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-2">
              <span className="w-12 h-[2px] bg-secondary block"></span>
              <span className="text-secondary uppercase tracking-widest font-medium text-sm">Meet The Chef</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white leading-tight">
              Cooking is an art, <br />
              <span className="text-secondary font-style-italic">tradition is the soul.</span>
            </h2>
            
            <p className="text-white/70 text-lg leading-relaxed font-light">
              "Growing up in the heart of Diviseema, my most cherished memories revolve around my grandmother's kitchen. The aroma of hand-ground spices, the slow cooking over firewood, and the communal joy of eating together—these are the experiences I strive to recreate in every meal we deliver."
            </p>
            
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-playfair font-bold text-white mb-1">20+</h4>
                <p className="text-white/50 text-sm uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-playfair font-bold text-white mb-1">100%</h4>
                <p className="text-white/50 text-sm uppercase tracking-wider">Authentic Recipes</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ChefSection;
