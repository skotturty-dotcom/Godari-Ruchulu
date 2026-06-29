import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { FiPlus, FiShoppingCart } from 'react-icons/fi';

const ComboOffers = ({ combos }) => {
  const { addToCart } = useCart();

  return (
    <div className="py-20 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary uppercase tracking-widest font-medium text-sm mb-2 block">Value Packs</span>
          <h2 className="text-4xl font-playfair font-bold text-white mb-4">Combo Offers</h2>
          <p className="text-white/70">Perfect meals curated for families and weekend gatherings, offering the best taste with great savings.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {combos.map((combo) => (
            <div key={combo.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center group">
              <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0 relative">
                <img src={combo.image} alt={combo.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-2 left-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded shadow">Save ₹{combo.savings}</div>
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="font-playfair font-bold text-2xl text-white mb-2">{combo.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">{combo.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-white/40 text-xs line-through">₹{combo.price + combo.savings}</span>
                    <span className="text-2xl font-bold text-secondary">₹{combo.price}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(combo)}
                    className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg hover:-translate-y-1 flex items-center space-x-2 text-sm"
                  >
                    <FiShoppingCart />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComboOffers;
