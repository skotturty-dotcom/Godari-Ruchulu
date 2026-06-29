import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-3xl shadow-xl border border-dark/5 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info & Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-2">Get in Touch</h2>
            <p className="text-dark/60 text-sm mb-8">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-dark/70 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" className="w-full bg-brand-bg/50 border border-dark/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark/70 uppercase tracking-wider mb-2">Phone</label>
                  <input type="tel" className="w-full bg-brand-bg/50 border border-dark/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-dark/70 uppercase tracking-wider mb-2">Message</label>
                <textarea rows="4" className="w-full bg-brand-bg/50 border border-dark/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white w-full py-4 rounded-xl font-medium transition-all shadow-md hover:shadow-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="w-full lg:w-1/2 bg-dark/5 min-h-[400px] relative">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
              alt="Map location" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-dark/20 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="glass p-6 rounded-2xl max-w-sm w-full text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl shadow-lg">
                  📍
                </div>
                <h3 className="font-playfair font-bold text-lg text-primary mb-2">Kitchen Location</h3>
                <p className="text-dark/80 text-sm mb-4">123 Godavari Street, Traditional Layout, Hyderabad, TS 500001</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-secondary text-sm font-semibold hover:underline">
                  Get Directions &rarr;
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
