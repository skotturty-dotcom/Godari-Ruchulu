import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiCheckCircle, FiClock, FiPackage, FiTruck, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const OrderTracking = () => {
  // Simulate order progress
  const [currentStep, setCurrentStep] = useState(1); // 1 to 5
  
  useEffect(() => {
    // For demo purposes, advance the step every 3 seconds
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < 5 ? prev + 1 : prev));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { id: 1, title: 'Order Received', desc: 'We have received your order.', icon: <FiCheckCircle /> },
    { id: 2, title: 'Cooking', desc: 'Your food is being prepared with love.', icon: <FiClock /> },
    { id: 3, title: 'Packing', desc: 'Securely packing your hot meal.', icon: <FiPackage /> },
    { id: 4, title: 'Out for Delivery', desc: 'Our delivery partner is on the way.', icon: <FiTruck /> },
    { id: 5, title: 'Delivered', desc: 'Enjoy your authentic Godavari meal!', icon: <FiMapPin /> },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-brand-bg relative overflow-hidden">
      <Helmet>
        <title>Track Order | Diviseema Vaari Godari Ruchulu</title>
      </Helmet>

      {/* Background */}
      <div className="absolute inset-0 bg-dark z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Header */}
          <div className="bg-primary p-8 text-white flex flex-col md:flex-row items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-1">Order Tracking</p>
              <h1 className="text-3xl font-playfair font-bold">#DVGR-83921</h1>
              <p className="text-white/80 mt-2 text-sm">Estimated Delivery: <span className="font-bold text-secondary">Today, 01:30 PM</span></p>
            </div>
            <div className="mt-6 md:mt-0 bg-white/10 p-4 rounded-2xl border border-white/20 text-center min-w-[150px]">
              <p className="text-xs uppercase text-white/70 font-semibold mb-1">Total Amount</p>
              <p className="text-2xl font-bold">₹1,849</p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[23px] md:left-[35px] top-6 bottom-6 w-0.5 bg-dark/10"></div>
              {/* Animated Progress Line */}
              <div 
                className="absolute left-[23px] md:left-[35px] top-6 w-0.5 bg-primary transition-all duration-1000 ease-in-out"
                style={{ height: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              ></div>

              <div className="space-y-12">
                {steps.map((step, index) => {
                  const isCompleted = step.id <= currentStep;
                  const isCurrent = step.id === currentStep;
                  
                  return (
                    <motion.div 
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative flex items-start group"
                    >
                      {/* Icon Bubble */}
                      <div className={`relative z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border-4 shrink-0 transition-colors duration-500 ${isCompleted ? 'bg-primary border-primary/20 text-white shadow-lg' : 'bg-white border-dark/10 text-dark/30'}`}>
                        <div className="text-xl md:text-2xl">
                          {step.icon}
                        </div>
                        {isCurrent && (
                          <span className="absolute -inset-2 rounded-full border border-primary animate-ping opacity-50"></span>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="ml-6 md:ml-8 pt-1 md:pt-3">
                        <h3 className={`text-xl font-bold font-playfair transition-colors duration-500 ${isCompleted ? 'text-dark' : 'text-dark/40'}`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm mt-1 transition-colors duration-500 ${isCompleted ? 'text-dark/70' : 'text-dark/30'}`}>
                          {step.desc}
                        </p>
                        {isCurrent && step.id === 4 && (
                          <div className="mt-4 bg-brand-bg border border-primary/20 rounded-xl p-4 flex items-center shadow-sm">
                            <img 
                              src="https://randomuser.me/api/portraits/men/32.jpg" 
                              alt="Driver" 
                              className="w-12 h-12 rounded-full border-2 border-white shadow-sm mr-4"
                            />
                            <div className="flex-grow">
                              <p className="font-bold text-dark text-sm">Ravi Kumar</p>
                              <p className="text-xs text-dark/60">Delivery Partner</p>
                            </div>
                            <button className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                              <FiPhoneCall />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-16 pt-8 border-t border-dark/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link to="/menu" className="text-primary font-semibold hover:underline">
                View Menu Again
              </Link>
              <Link 
                to="/" 
                className="bg-dark hover:bg-dark/90 text-white px-8 py-3 rounded-xl font-bold transition-transform hover:-translate-y-1 shadow-lg"
              >
                Back to Home
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
