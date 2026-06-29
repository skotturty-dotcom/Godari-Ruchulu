import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const PreOrder = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const navigate = useNavigate();

  const handleProceed = () => {
    if (selectedDate && selectedTime) {
      // In a real app, save this to Context/LocalStorage
      navigate('/menu');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-bg flex items-center justify-center">
      <Helmet>
        <title>Pre-Order | Diviseema Vaari Godari Ruchulu</title>
      </Helmet>
      
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-dark/5"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-playfair font-bold text-primary mb-3">Schedule Delivery</h1>
            <p className="text-dark/70 text-sm">We deliver fresh, authentic Andhra meals exclusively on weekends. Book your slot now!</p>
          </div>

          <div className="space-y-8">
            {/* Date Selection */}
            <div>
              <label className="flex items-center text-sm font-bold text-dark mb-4">
                <FiCalendar className="mr-2 text-primary text-lg" /> Select Weekend Date
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setSelectedDate('saturday')}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${selectedDate === 'saturday' ? 'border-primary bg-primary/5 text-primary shadow-md' : 'border-dark/10 text-dark/70 hover:border-primary/30'}`}
                >
                  <div className="font-bold text-lg">Saturday</div>
                  <div className="text-xs mt-1">Lunch & Dinner</div>
                </button>
                <button 
                  onClick={() => setSelectedDate('sunday')}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${selectedDate === 'sunday' ? 'border-primary bg-primary/5 text-primary shadow-md' : 'border-dark/10 text-dark/70 hover:border-primary/30'}`}
                >
                  <div className="font-bold text-lg">Sunday</div>
                  <div className="text-xs mt-1">Breakfast & Lunch</div>
                </button>
              </div>
            </div>

            {/* Time Selection */}
            <AnimatePresence>
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="overflow-hidden"
                >
                  <label className="flex items-center text-sm font-bold text-dark mb-4">
                    <FiClock className="mr-2 text-primary text-lg" /> Select Time Slot
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['12:00 PM', '01:00 PM', '02:00 PM', '07:30 PM', '08:30 PM'].map((time) => (
                      <button 
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-xl border-2 transition-all text-sm font-semibold ${selectedTime === time ? 'border-primary bg-primary text-white shadow-md' : 'border-dark/10 text-dark/70 hover:border-primary/30'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Action */}
            <button 
              onClick={handleProceed}
              disabled={!selectedDate || !selectedTime}
              className="w-full mt-8 bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold transition-all shadow-[0_4px_14px_0_rgb(122,62,18,0.39)] hover:shadow-[0_6px_20px_rgba(122,62,18,0.23)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none flex items-center justify-center space-x-2"
            >
              <span>Continue to Menu</span>
              <FiArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PreOrder;
