import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiAward, FiGift, FiStar, FiUsers, FiCopy } from 'react-icons/fi';

const Loyalty = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-brand-bg relative overflow-hidden">
      <Helmet>
        <title>Loyalty & Rewards | Diviseema Vaari Godari Ruchulu</title>
        <meta name="description" content="Join our loyalty program to earn points on every order. Unlock Gold and Silver tiers for exclusive Godavari food rewards." />
      </Helmet>

      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl"
          >
            <FiAward />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-dark leading-tight mb-6"
          >
            Taste the Rewards
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-dark/70 text-lg md:text-xl font-light leading-relaxed"
          >
            Earn Godavari Points on every order. Redeem them for your favourite traditional dishes, free desserts, and exclusive weekend specials.
          </motion.p>
        </div>
      </div>

      {/* How it works & Referral */}
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* How to Earn */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-dark/5"
          >
            <h3 className="text-2xl font-playfair font-bold text-dark mb-8 flex items-center">
              <FiStar className="text-secondary mr-3" /> How to Earn
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shrink-0 mr-4">1</div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Place an Order</h4>
                  <p className="text-sm text-dark/60">Earn 10 points for every ₹100 spent on our menu.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shrink-0 mr-4">2</div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Weekend Bonus</h4>
                  <p className="text-sm text-dark/60">Order on Saturday and get 2x points on all non-veg curries.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shrink-0 mr-4">3</div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Redeem & Enjoy</h4>
                  <p className="text-sm text-dark/60">Use your points at checkout. 100 Points = ₹10 Discount.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Refer a Friend */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-dark p-10 rounded-3xl shadow-xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[50px] -z-0" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-playfair font-bold mb-4 flex items-center">
                <FiUsers className="text-secondary mr-3" /> Refer a Friend
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Share the authentic taste of Diviseema with your friends. They get ₹100 off their first order, and you get 500 bonus points when their order is delivered!
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
                <p className="text-xs uppercase tracking-wider text-white/60 mb-2 font-semibold">Your Unique Referral Code</p>
                <div className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/10">
                  <span className="font-mono text-xl font-bold tracking-widest text-secondary">GODARI24</span>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white tooltip-trigger group relative">
                    <FiCopy className="text-xl" />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Copy Code</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Tiers Section */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-dark mb-4">Membership Tiers</h2>
          <p className="text-dark/60 text-lg">Unlock more benefits as you taste more of our menu.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Silver Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-200 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 text-slate-100 opacity-50">
              <FiAward className="text-9xl" />
            </div>
            
            <div className="relative z-10">
              <div className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">Tier 1</div>
              <h3 className="text-3xl font-playfair font-bold text-dark mb-2">Silver Member</h3>
              <p className="text-dark/50 text-sm mb-6">0 - 2,000 Points</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-dark/80"><FiStar className="text-slate-400 mr-3" /> Standard points earning (10 pts / ₹100)</li>
                <li className="flex items-center text-dark/80"><FiGift className="text-slate-400 mr-3" /> Free Pootharekulu on your Birthday</li>
              </ul>
            </div>
          </motion.div>

          {/* Gold Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl shadow-lg border-2 border-amber-200 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 text-amber-200/50">
              <FiAward className="text-9xl" />
            </div>
            
            <div className="relative z-10">
              <div className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">Tier 2</div>
              <h3 className="text-3xl font-playfair font-bold text-amber-900 mb-2">Gold Member</h3>
              <p className="text-amber-700/60 text-sm mb-6">2,000+ Points</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-amber-900/80"><FiStar className="text-amber-500 mr-3" /> 1.5x points earning (15 pts / ₹100)</li>
                <li className="flex items-center text-amber-900/80"><FiGift className="text-amber-500 mr-3" /> Free Premium Dessert on every order</li>
                <li className="flex items-center text-amber-900/80"><FiStar className="text-amber-500 mr-3" /> Priority access to new menu items</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loyalty;
