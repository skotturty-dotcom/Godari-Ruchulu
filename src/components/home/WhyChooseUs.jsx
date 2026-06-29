import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaShippingFast, FaPepperHot } from 'react-icons/fa';
import { MdOutlineFoodBank, MdFamilyRestroom } from 'react-icons/md';

const features = [
  { icon: <FaHeart />, title: '100% Homemade', desc: 'Cooked with love in small batches.' },
  { icon: <FaLeaf />, title: 'Fresh Ingredients', desc: 'Farm-fresh veggies and premium meats.' },
  { icon: <MdOutlineFoodBank />, title: 'Traditional Recipes', desc: 'Authentic Godavari cooking methods.' },
  { icon: <FaPepperHot />, title: 'No Preservatives', desc: 'Zero artificial colors or flavors.' },
  { icon: <MdFamilyRestroom />, title: 'Family Taste', desc: 'Meals that feel like home.' },
  { icon: <FaShippingFast />, title: 'Fast Delivery', desc: 'Piping hot food delivered on weekends.' },
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary uppercase tracking-widest font-medium text-sm mb-2 block">Why Choose Us</span>
          <h2 className="text-4xl font-playfair font-bold text-primary mb-6">The Godavari Difference</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feat, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-brand-bg rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-secondary/20 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {feat.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold text-dark mb-3">{feat.title}</h3>
              <p className="text-dark/70 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
