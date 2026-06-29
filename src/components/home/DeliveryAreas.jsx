import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';

const DeliveryAreas = () => {
  const areas = [
    "Madhapur", "Hitech City", "Kukatpally", "Gachibowli", 
    "Miyapur", "Tellapur", "Nallagandla", "Manikonda", 
    "Jubilee Hills", "Banjara Hills", "Kondapur", "Lingampally"
  ];

  return (
    <section className="py-24 bg-brand-bg relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-dark/5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary uppercase tracking-widest font-medium text-sm mb-2 block">Service Locations</span>
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">Where We Deliver</h2>
            <p className="text-dark/70 text-sm leading-relaxed">
              We currently serve major areas across Hyderabad. Pre-order early to secure your delivery slot for the weekend!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div className="relative h-[400px] bg-dark/5 rounded-2xl overflow-hidden border border-dark/10 group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Hyderabad Map" 
                className="w-full h-full object-cover opacity-50 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              
              {/* Animated Map Pins */}
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute"
                  style={{ 
                    top: `${Math.random() * 60 + 20}%`, 
                    left: `${Math.random() * 60 + 20}%` 
                  }}
                >
                  <div className="relative">
                    <FiMapPin className="text-3xl text-accent relative z-10" />
                    <div className="absolute top-1 left-1 w-6 h-6 bg-accent rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Area List */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {areas.map((area, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center space-x-2 text-dark/80"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                    <span className="font-medium text-sm">{area}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-brand-bg rounded-xl border border-secondary/20">
                <h4 className="font-playfair font-bold text-primary mb-2">Not on the list?</h4>
                <p className="text-xs text-dark/70">Contact us on WhatsApp for bulk orders or special delivery requests outside our standard zones.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryAreas;
