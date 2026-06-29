import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import LiveOrderCounter from '../components/home/LiveOrderCounter';
import AboutSection from '../components/home/AboutSection';
import TodaySpecial from '../components/home/TodaySpecial';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ChefSection from '../components/home/ChefSection';
import SpecialDish from '../components/home/SpecialDish';
import HygieneSection from '../components/home/HygieneSection';
import PhotoGallery from '../components/home/PhotoGallery';
import DeliveryAreas from '../components/home/DeliveryAreas';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import ContactSection from '../components/home/ContactSection';
import WeekendMenuCalendar from '../components/home/WeekendMenuCalendar';
import SpecialFestivalMenu from '../components/home/SpecialFestivalMenu';
import VideoGallery from '../components/home/VideoGallery';
import PopularDishes from '../components/home/PopularDishes';
import BestSellerCarousel from '../components/home/BestSellerCarousel';
import FreshIngredients from '../components/home/FreshIngredients';
import CookingProcess from '../components/home/CookingProcess';
import MasonryGallery from '../components/home/MasonryGallery';

const Home = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Diviseema Vaari Godari Ruchulu | Premium Cloud Kitchen</title>
        <meta name="description" content="Authentic Diviseema & Godavari Home Style Food Delivered Fresh Every Weekend." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Diviseema Vaari Godari Ruchulu",
              "image": "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2070",
              "description": "Authentic Diviseema & Godavari Home Style Food Cloud Kitchen",
              "servesCuisine": "Andhra, Godavari, Indian",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2070&auto=format&fit=crop" 
            alt="Authentic Indian Food" 
            className="w-full h-full object-cover opacity-30"
          />
          {/* Advanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "100vh", x: Math.random() * 100 - 50, opacity: 0, rotate: 0 }}
              animate={{ 
                y: "-20vh", 
                x: Math.random() * 100 - 50,
                opacity: [0, 0.8, 0],
                rotate: 360 
              }}
              transition={{ 
                duration: Math.random() * 10 + 15, 
                repeat: Infinity, 
                delay: Math.random() * 5,
                ease: "linear" 
              }}
              className="absolute text-primary/30"
              style={{ left: `${Math.random() * 100}%` }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 3C14 3 11 5.5 11 9C11 9.3 11 9.7 11.1 10L6.7 14.4C5.8 15.3 5.8 16.7 6.7 17.6C7.6 18.5 9 18.5 9.9 17.6L14.3 13.2C14.6 13.3 15 13.3 15.3 13.3C18.8 13.3 21.3 10.3 21.3 6.8V3H17.5ZM19.3 6.8C19.3 9.2 17.5 11.3 15.3 11.3C15 11.3 14.6 11.3 14.3 11.2L12.3 9.2C12.4 8.9 12.4 8.6 12.4 8.3C12.4 5.9 10.6 3.8 8.4 3.8H4.6V7.6C4.6 10 6.4 12.1 8.6 12.1C8.9 12.1 9.3 12 9.6 11.9L11.6 13.9C11.5 14.2 11.5 14.5 11.5 14.8C11.5 17.2 13.3 19.3 15.5 19.3H19.3V15.5C19.3 13.1 17.5 11 15.3 11" opacity="0.5"/>
              </svg>
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20 grid lg:grid-cols-12 gap-12 items-center pt-24 pb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-secondary/90 text-sm font-semibold tracking-wider uppercase">Weekend Specials Available</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-playfair font-bold text-white leading-[1.1] tracking-tight">
              Authentic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary bg-300% animate-gradient">Godavari</span> 
              <br /> Home Style Food
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl font-light max-w-xl leading-relaxed border-l-4 border-secondary pl-6 py-2">
              Experience the true essence of Diviseema. Traditional recipes prepared with hand-pounded masalas and unadulterated love, delivered fresh to your door.
            </p>
            
            <div className="flex flex-wrap gap-5 pt-6">
              <Link to="/pre-order" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-10 py-4 rounded-full font-semibold transition-all shadow-[0_8px_25px_rgba(214,69,39,0.3)] hover:shadow-[0_12px_35px_rgba(214,69,39,0.4)] hover:-translate-y-1 inline-flex items-center justify-center">
                Pre-Order Now
              </Link>
              <Link to="/menu" className="bg-transparent hover:bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white px-10 py-4 rounded-full font-semibold transition-all hover:border-secondary hover:text-secondary inline-flex items-center justify-center">
                View Full Menu
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-5 justify-center relative"
          >
            <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full" />
            
            <div className="relative w-[480px] h-[480px] rounded-full p-6">
              <div className="absolute inset-0 border-[1px] border-secondary/30 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 border-[1px] border-dashed border-primary/40 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              
              <img 
                src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop" 
                alt="Biryani Special" 
                className="w-full h-full object-cover rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10"
              />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -left-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl flex items-center space-x-4"
              >
                <div className="bg-secondary/20 text-secondary w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                  ✨
                </div>
                <div>
                  <p className="text-white font-playfair font-bold text-lg leading-tight">100% Pure</p>
                  <p className="text-white/60 text-xs uppercase tracking-wider">Homemade Taste</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <LiveOrderCounter />
      <PopularDishes />
      <BestSellerCarousel />
      <TodaySpecial />
      <WeekendMenuCalendar />
      <SpecialFestivalMenu />
      <AboutSection />
      <FreshIngredients />
      <CookingProcess />
      <ChefSection />
      <WhyChooseUs />
      <HygieneSection />
      <SpecialDish />
      <VideoGallery />
      <MasonryGallery />
      <PhotoGallery />
      <DeliveryAreas />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </div>
  );
};

export default Home;
