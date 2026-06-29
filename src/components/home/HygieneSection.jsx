import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaSprayCan, FaCarrot, FaCheckCircle } from 'react-icons/fa';

const HygieneSection = () => {
  const points = [
    { icon: <FaShieldAlt />, title: "FSSAI Certified", desc: "Operating under strict food safety and standards guidelines." },
    { icon: <FaSprayCan />, title: "Daily Sanitization", desc: "Kitchen premises and equipment are deeply sanitized twice daily." },
    { icon: <FaCarrot />, title: "Quality Checked", desc: "Every ingredient undergoes a strict 3-point freshness check." },
    { icon: <FaCheckCircle />, title: "Safe Packaging", desc: "Zero-touch preparation and premium spill-proof packaging." }
  ];

  return (
    <section className="py-16 bg-white border-y border-dark/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="w-full md:w-1/3">
            <span className="text-secondary uppercase tracking-widest font-medium text-xs mb-2 block">Our Commitment</span>
            <h2 className="text-3xl font-playfair font-bold text-primary mb-4">Uncompromising Hygiene</h2>
            <p className="text-dark/70 text-sm leading-relaxed">
              We believe that great food starts with a pristine environment. Our cloud kitchen follows commercial-grade sanitation protocols to ensure your meal is as safe as it is delicious.
            </p>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-brand-bg transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 text-xl">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-dark mb-1">{point.title}</h4>
                  <p className="text-xs text-dark/60 leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HygieneSection;
