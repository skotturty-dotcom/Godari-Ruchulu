import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white/80 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex flex-col items-start">
              <span className="font-playfair font-bold text-3xl text-secondary leading-none">DIVISEEMA</span>
              <span className="text-[0.7rem] tracking-[0.2em] text-white/90 uppercase mt-1">Godari Ruchulu</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Pure Homemade Taste with Traditional Godavari Flavours. Bringing authentic recipes from our village kitchen to your plate.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-dark transition-colors">
                <FaInstagram />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-dark transition-colors">
                <FaWhatsapp />
              </a>
              <a href="tel:+911234567890" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-dark transition-colors">
                <FaPhone />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Specials', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm hover:text-secondary transition-colors inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-sm">123 Godavari Street, Traditional Layout, Hyderabad, TS 500001</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-secondary flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary flex-shrink-0" />
                <span className="text-sm">hello@diviseemafoods.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-playfair text-xl text-white mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span className="text-secondary">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-sm border-b border-white/10 pb-2">
                <span>Sunday</span>
                <span className="text-secondary">08:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-sm border-b border-white/10 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white/50">Pre-orders only</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Diviseema Vaari Godari Ruchulu. All rights reserved.</p>
          <div className="space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
