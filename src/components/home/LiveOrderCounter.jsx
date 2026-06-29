import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, inView]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">
      {count}{suffix}
    </div>
  );
};

const LiveOrderCounter = () => {
  const stats = [
    { label: "Happy Families", end: 1250, suffix: "+" },
    { label: "Orders Served", end: 8500, suffix: "+" },
    { label: "Today's Pre-orders", end: 145, suffix: "" },
    { label: "Remaining Slots", end: 55, suffix: "" },
  ];

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="px-4"
            >
              <Counter end={stat.end} suffix={stat.suffix} />
              <p className="text-white/80 text-sm md:text-base font-medium tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveOrderCounter;
