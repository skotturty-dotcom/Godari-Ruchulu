import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    q: "Do you deliver daily?",
    a: "Currently, we operate as a weekend-special cloud kitchen. We deliver on Saturdays and Sundays. Pre-orders are accepted throughout the week."
  },
  {
    q: "Can I pre-order for a specific time?",
    a: "Yes! You can select your preferred delivery date and time slot during the checkout process. We recommend ordering at least 24 hours in advance."
  },
  {
    q: "Do you take bulk or party orders?",
    a: "Absolutely. We cater to small parties and family get-togethers. Please contact us directly via WhatsApp or Phone for bulk orders to ensure availability."
  },
  {
    q: "Is seafood available every weekend?",
    a: "Seafood specials, including our signature Uppu Chepa and Prawns Curry, are available based on the fresh catch. Please check the 'Specials' menu on Fridays."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major UPI payments (GPay, PhonePe, Paytm), Credit/Debit cards, and Net Banking."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-secondary uppercase tracking-widest font-medium text-sm mb-2 block">Got Questions?</span>
          <h2 className="text-4xl font-playfair font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-dark/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-brand-bg shadow-md border-primary/20' : 'bg-white hover:border-dark/20'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-playfair font-bold text-dark text-lg pr-8">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-dark/70 text-sm leading-relaxed border-t border-dark/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
