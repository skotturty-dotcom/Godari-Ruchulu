import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock } from 'react-icons/fi';

const WeekendMenuCalendar = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4"
          >
            <FiCalendar />
            <span className="font-bold text-sm tracking-wider uppercase">Weekend Schedule</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-6"
          >
            Our Weekend Special Menu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark/70 text-lg"
          >
            We operate exclusively on weekends to ensure the highest quality, freshness, and authentic slow-cooked taste for every dish.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Saturday */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-bg p-8 rounded-3xl shadow-sm border border-dark/5 relative overflow-hidden group hover:shadow-xl transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            
            <h3 className="text-3xl font-playfair font-bold text-primary mb-2">Saturday</h3>
            <p className="flex items-center text-dark/60 text-sm mb-6 font-semibold"><FiClock className="mr-2" /> Lunch & Dinner</p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-dark/5">
                <h4 className="font-bold text-dark mb-1">Authentic Veg Meals</h4>
                <p className="text-xs text-dark/60 leading-relaxed">Gutti Vankaya, Pappu, Rasam, Perugu, Sweet, Pachadi</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-dark/5">
                <h4 className="font-bold text-dark mb-1">Non-Veg Specials</h4>
                <p className="text-xs text-dark/60 leading-relaxed">Natu Kodi Pulusu, Gongura Mamsam, Bommidayila Pulusu</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-dark/5">
                <h4 className="font-bold text-dark mb-1">Starters</h4>
                <p className="text-xs text-dark/60 leading-relaxed">Royyala Vepudu, Kodi Vepudu, Mirapakaya Bajji</p>
              </div>
            </div>
          </motion.div>

          {/* Sunday */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-dark p-8 rounded-3xl shadow-lg relative overflow-hidden group hover:shadow-2xl transition-all text-white"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            
            <h3 className="text-3xl font-playfair font-bold text-white mb-2">Sunday</h3>
            <p className="flex items-center text-white/70 text-sm mb-6 font-semibold"><FiClock className="mr-2" /> Breakfast & Lunch</p>
            
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-white">
                <h4 className="font-bold mb-1">Traditional Breakfast (Morning)</h4>
                <p className="text-xs text-white/70 leading-relaxed">Pesarattu Upma, Minapa Garelu with Kodi Kura, Idli with Natukodi Pulusu</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-white">
                <h4 className="font-bold mb-1">Sunday Special Pulaos (Lunch)</h4>
                <p className="text-xs text-white/70 leading-relaxed">Raju Gari Kodi Pulao, Mutton Kheema Pulao, Konaseema Royyala Pulao</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-white">
                <h4 className="font-bold mb-1">Grand Mega Feast</h4>
                <p className="text-xs text-white/70 leading-relaxed">Unlimited Thali with 3 Non-Veg curries and traditional Godavari Sweets</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeekendMenuCalendar;
