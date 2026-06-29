import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import db from '../../data/db.json';
import { useCart } from '../../contexts/CartContext';

const TodaySpecial = () => {
  const specialDish = db.menu.find(item => item.isChefSpecial && item.isBestSeller);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 45, seconds: 30 });
  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => time.toString().padStart(2, '0');

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-brand-bg rounded-3xl p-8 md:p-12 border border-dark/5 shadow-xl relative overflow-hidden">
          {/* Decor */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold border border-accent/20 animate-pulse">
                <span>🔥 Limited Quantity Available</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary">
                Today's <span className="text-secondary">Special</span>
              </h2>
              
              <h3 className="text-2xl font-bold text-dark">{specialDish?.name}</h3>
              <p className="text-dark/70 leading-relaxed text-lg max-w-md">
                {specialDish?.description}
              </p>

              {/* Countdown Timer */}
              <div className="flex items-center space-x-6 py-6 border-y border-dark/10">
                <div className="flex items-center space-x-3 text-dark">
                  <FiClock className="text-2xl text-secondary" />
                  <span className="font-semibold uppercase tracking-wider text-sm">Order Closes In:</span>
                </div>
                <div className="flex space-x-3 text-2xl font-playfair font-bold text-accent">
                  <div className="flex flex-col items-center">
                    <span>{formatTime(timeLeft.hours)}</span>
                    <span className="text-[10px] text-dark/50 uppercase tracking-widest font-poppins">Hrs</span>
                  </div>
                  <span>:</span>
                  <div className="flex flex-col items-center">
                    <span>{formatTime(timeLeft.minutes)}</span>
                    <span className="text-[10px] text-dark/50 uppercase tracking-widest font-poppins">Min</span>
                  </div>
                  <span>:</span>
                  <div className="flex flex-col items-center">
                    <span>{formatTime(timeLeft.seconds)}</span>
                    <span className="text-[10px] text-dark/50 uppercase tracking-widest font-poppins">Sec</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-3xl font-bold text-primary">₹{specialDish?.price}</div>
                <button 
                  onClick={() => addToCart(specialDish)}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_4px_14px_0_rgb(122,62,18,0.39)] hover:shadow-[0_6px_20px_rgba(122,62,18,0.23)] hover:-translate-y-1 flex items-center space-x-2"
                >
                  <FiShoppingCart />
                  <span>Pre-Order Now</span>
                </button>
              </div>
              <p className="text-xs text-accent font-semibold mt-2">Only 12 portions left!</p>
            </div>

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
              <img 
                src={specialDish?.image} 
                alt={specialDish?.name}
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl border-4 border-white"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodaySpecial;
