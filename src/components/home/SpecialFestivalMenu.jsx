import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const festivals = [
  {
    id: 'sankranti',
    name: 'Sankranti Special',
    image: 'https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=2000&auto=format&fit=crop',
    description: 'Traditional Pindi Vantalu, Ariselu, and Garelu made with new harvest rice.'
  },
  {
    id: 'ugadi',
    name: 'Ugadi Pachadi & Feast',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2000&auto=format&fit=crop',
    description: 'The six tastes of Ugadi Pachadi along with Pulihora and Bobbatlu.'
  },
  {
    id: 'dasara',
    name: 'Dasara Mega Thali',
    image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2000&auto=format&fit=crop',
    description: 'Grand 21-item Godavari feast featuring the best of festive delicacies.'
  }
];

const SpecialFestivalMenu = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-4 border border-secondary/30"
          >
            <FiStar />
            <span className="font-bold text-sm tracking-wider uppercase">Seasonal Specials</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
          >
            Festival Menus
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg font-light"
          >
            Celebrate our rich heritage with specially curated menus for every major festival, bringing the authentic festive spirit to your home.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {festivals.map((festival, index) => (
            <motion.div
              key={festival.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={festival.image} 
                alt={festival.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">{festival.name}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{festival.description}</p>
                <Link to="/pre-order" className="inline-block text-secondary font-semibold uppercase tracking-wider text-xs border-b border-secondary pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 hover:text-white hover:border-white">
                  Pre-Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialFestivalMenu;
