import React from 'react';
import { motion } from 'framer-motion';

const FreshIngredients = () => {
  const ingredients = [
    {
      name: "Hand-pounded Spices",
      desc: "Freshly ground daily for authentic aroma.",
      img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800"
    },
    {
      name: "Clay Pot Cooking",
      desc: "Traditional earthen pots for earthy flavors.",
      img: "https://images.unsplash.com/photo-1590216773531-158a2d1d4ba9?q=80&w=800"
    },
    {
      name: "Fresh Catch",
      desc: "Seafood sourced directly from Godavari river.",
      img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800"
    },
    {
      name: "Banana Leaves",
      desc: "Served traditionally for natural aroma.",
      img: "https://images.unsplash.com/photo-1626545199651-4034293f9c6d?q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-brand-bg relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-6 leading-tight">
                Quality that <br />
                <span className="text-secondary">Speaks for Itself</span>
              </h2>
              <p className="text-dark/70 text-lg mb-8 leading-relaxed">
                We believe that great food starts with great ingredients. From the rich spices of Godavari to the fresh catch from the river, every element in our kitchen is carefully sourced to bring you the authentic taste of Diviseema.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {ingredients.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-dark mb-2">{item.name}</h4>
                    <p className="text-sm text-dark/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              {ingredients.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-3xl overflow-hidden shadow-xl ${index % 2 === 0 ? 'mt-8' : ''}`}
                  style={{ height: '250px' }}
                >
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover image-hover-zoom" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-4">
                    <span className="text-white font-playfair font-bold tracking-wide">{item.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshIngredients;
