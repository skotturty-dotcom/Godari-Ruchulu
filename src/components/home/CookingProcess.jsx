import React from 'react';
import { motion } from 'framer-motion';

const CookingProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Hand-pounding",
      desc: "Spices are ground daily in traditional pestles for maximum aroma and oil retention.",
    },
    {
      num: "02",
      title: "Clay Pot Cooking",
      desc: "Curries are slow-cooked in earthen pots to enhance the natural earthy flavors.",
    },
    {
      num: "03",
      title: "Wood Fire",
      desc: "Certain dishes like Natu Kodi are cooked on wood fire for that authentic smoky taste.",
    },
    {
      num: "04",
      title: "Banana Leaf Packing",
      desc: "Meals are packed fresh in banana leaves, trapping heat and infusing natural aroma.",
    }
  ];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Our <span className="text-primary">Traditional</span> Process
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Experience the journey of your food, cooked with the same love, patience, and techniques used by our ancestors.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-dark via-primary/50 to-dark transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-dark border-4 border-primary text-white flex items-center justify-center text-xl font-bold mb-6 shadow-[0_0_20px_rgba(214,69,39,0.4)] z-10 relative">
                  {step.num}
                  <div className="absolute inset-0 bg-primary/20 blur-md rounded-full"></div>
                </div>
                <h3 className="text-xl font-playfair font-bold text-secondary mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookingProcess;
