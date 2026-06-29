import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const plans = [
  {
    id: 'weekend',
    name: 'Weekend Special',
    price: '₹1,299',
    period: '/weekend',
    description: 'Perfect for couples or small families wanting a special weekend feast.',
    features: [
      'Saturday Lunch & Dinner',
      'Sunday Breakfast & Lunch',
      'Choice of 2 Non-Veg Curries',
      'Free Traditional Dessert',
      'Priority Delivery'
    ],
    recommended: false,
    color: 'bg-white'
  },
  {
    id: 'weekly',
    name: 'Weekly Premium',
    price: '₹2,499',
    period: '/week',
    description: 'Authentic home-style meals delivered fresh throughout the week.',
    features: [
      'Lunch or Dinner options',
      '5 Days a Week (Mon-Fri)',
      'Changing Daily Menu',
      'Free Weekend Surprise',
      'Zero Delivery Fees'
    ],
    recommended: true,
    color: 'bg-primary'
  },
  {
    id: 'family',
    name: 'Family Feast',
    price: '₹8,999',
    period: '/month',
    description: 'Complete meal solution for a family of 4 with authentic Godavari taste.',
    features: [
      'Lunch & Dinner for 4 pax',
      'Customizable Menu',
      'Special Festival Sweets',
      'Dedicated Customer Support',
      'Exclusive Chef Consult'
    ],
    recommended: false,
    color: 'bg-dark'
  }
];

const Subscriptions = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-brand-bg relative overflow-hidden">
      <Helmet>
        <title>Meal Subscriptions | Diviseema Vaari Godari Ruchulu</title>
        <meta name="description" content="Subscribe to our premium authentic Andhra meal plans. Weekly, Monthly, and Weekend options available." />
      </Helmet>
      
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-96 bg-secondary/10 blur-[100px] -z-10 rounded-full mix-blend-multiply" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] -z-10 rounded-full mix-blend-multiply" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4"
          >
            <span className="font-bold text-sm tracking-wider uppercase">Meal Plans</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-dark leading-tight mb-6"
          >
            Taste of Home, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Delivered Regularly</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-dark/70 text-lg md:text-xl font-light leading-relaxed"
          >
            Enjoy the authentic flavours of Godavari without the hassle of cooking. Choose a plan that fits your lifestyle.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className={`relative p-8 rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-2 border ${plan.recommended ? 'border-primary shadow-primary/20 scale-105 z-10 lg:-mt-4 lg:mb-4' : 'border-white shadow-dark/5 bg-white'}`}
              style={{
                backgroundColor: plan.recommended ? '#7A3E12' : plan.id === 'family' ? '#1E1E1E' : '#FFFFFF'
              }}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className={`text-center mb-8 pb-8 border-b ${plan.recommended || plan.id === 'family' ? 'border-white/20' : 'border-dark/10'}`}>
                <h3 className={`text-2xl font-playfair font-bold mb-2 ${plan.recommended || plan.id === 'family' ? 'text-white' : 'text-dark'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.recommended || plan.id === 'family' ? 'text-white/70' : 'text-dark/60'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-4xl font-bold ${plan.recommended || plan.id === 'family' ? 'text-white' : 'text-primary'}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-1 text-sm font-medium ${plan.recommended || plan.id === 'family' ? 'text-white/60' : 'text-dark/50'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheck className={`mt-1 mr-3 shrink-0 ${plan.recommended || plan.id === 'family' ? 'text-secondary' : 'text-primary'}`} />
                    <span className={`text-sm leading-relaxed ${plan.recommended || plan.id === 'family' ? 'text-white/90' : 'text-dark/80'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all group ${
                  plan.recommended 
                    ? 'bg-white text-primary hover:bg-brand-bg shadow-lg' 
                    : plan.id === 'family'
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-lg'
                    : 'bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl'
                }`}
              >
                <span>Subscribe Now</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
