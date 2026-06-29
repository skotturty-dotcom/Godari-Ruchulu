import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { FiCheck, FiShoppingCart } from 'react-icons/fi';

const BuildYourOwnMeal = () => {
  const { addToCart } = useCart();
  
  const options = {
    rice: [
      { id: 'r1', name: 'Steamed Sona Masuri', price: 60 },
      { id: 'r2', name: 'Bagara Rice', price: 90 },
      { id: 'r3', name: 'Jeera Rice', price: 100 }
    ],
    curry: [
      { id: 'c1', name: 'Natu Kodi Pulusu', price: 250 },
      { id: 'c2', name: 'Gutti Vankaya', price: 150 },
      { id: 'c3', name: 'Gongura Mamsam', price: 300 }
    ],
    fry: [
      { id: 'f1', name: 'Royyala Vepudu (Prawn)', price: 280 },
      { id: 'f2', name: 'Chicken Fry', price: 200 },
      { id: 'f3', name: 'Potato Fry', price: 120 }
    ]
  };

  const [selection, setSelection] = useState({ rice: null, curry: null, fry: null });

  const handleSelect = (category, item) => {
    setSelection(prev => ({ ...prev, [category]: item }));
  };

  const calculateTotal = () => {
    let total = 0;
    if (selection.rice) total += selection.rice.price;
    if (selection.curry) total += selection.curry.price;
    if (selection.fry) total += selection.fry.price;
    return total;
  };

  const handleAddToCart = () => {
    if (!selection.rice || !selection.curry) return;
    
    const customMeal = {
      id: `custom-${Date.now()}`,
      name: 'Custom Andhra Meal',
      description: `${selection.rice.name} + ${selection.curry.name} ${selection.fry ? '+ ' + selection.fry.name : ''}`,
      price: calculateTotal(),
      type: 'mixed',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop'
    };
    
    addToCart(customMeal);
    setSelection({ rice: null, curry: null, fry: null }); // Reset
  };

  return (
    <div className="py-20 bg-brand-bg relative border-t border-dark/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary uppercase tracking-widest font-medium text-sm mb-2 block">Customizable</span>
          <h2 className="text-4xl font-playfair font-bold text-primary mb-4">Build Your Own Meal</h2>
          <p className="text-dark/70">Select your favorite rice, curry, and sides to create the perfect personalized Godavari thali.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-dark/5">
              <h3 className="font-playfair font-bold text-xl text-dark mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm mr-3">1</span>
                Choose Base (Rice)
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {options.rice.map(item => (
                  <button 
                    key={item.id}
                    onClick={() => handleSelect('rice', item)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${selection.rice?.id === item.id ? 'border-primary bg-primary/5 shadow-md' : 'border-dark/10 hover:border-primary/30 bg-transparent'}`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-dark text-sm">{item.name}</span>
                      {selection.rice?.id === item.id && <FiCheck className="text-primary" />}
                    </div>
                    <span className="text-secondary font-bold text-sm">₹{item.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-dark/5">
              <h3 className="font-playfair font-bold text-xl text-dark mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm mr-3">2</span>
                Choose Main Curry
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {options.curry.map(item => (
                  <button 
                    key={item.id}
                    onClick={() => handleSelect('curry', item)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${selection.curry?.id === item.id ? 'border-primary bg-primary/5 shadow-md' : 'border-dark/10 hover:border-primary/30 bg-transparent'}`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-dark text-sm">{item.name}</span>
                      {selection.curry?.id === item.id && <FiCheck className="text-primary" />}
                    </div>
                    <span className="text-secondary font-bold text-sm">₹{item.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-dark/5">
              <h3 className="font-playfair font-bold text-xl text-dark mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm mr-3">3</span>
                Add a Side/Fry <span className="text-dark/40 text-xs font-normal ml-2">(Optional)</span>
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {options.fry.map(item => (
                  <button 
                    key={item.id}
                    onClick={() => handleSelect('fry', item)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${selection.fry?.id === item.id ? 'border-primary bg-primary/5 shadow-md' : 'border-dark/10 hover:border-primary/30 bg-transparent'}`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-dark text-sm">{item.name}</span>
                      {selection.fry?.id === item.id && <FiCheck className="text-primary" />}
                    </div>
                    <span className="text-secondary font-bold text-sm">₹{item.price}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Panel */}
          <div className="lg:col-span-4">
            <div className="bg-primary rounded-3xl p-6 text-white sticky top-32 shadow-2xl">
              <h3 className="font-playfair font-bold text-2xl mb-6 border-b border-white/20 pb-4">Your Custom Meal</h3>
              
              <div className="space-y-4 mb-8">
                {selection.rice ? (
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">{selection.rice.name}</span>
                    <span className="font-medium">₹{selection.rice.price}</span>
                  </div>
                ) : (
                  <div className="text-white/40 text-sm italic">Select a rice base...</div>
                )}
                
                {selection.curry ? (
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">{selection.curry.name}</span>
                    <span className="font-medium">₹{selection.curry.price}</span>
                  </div>
                ) : (
                  <div className="text-white/40 text-sm italic">Select a main curry...</div>
                )}

                {selection.fry && (
                  <div className="flex justify-between text-sm pt-4 border-t border-white/10">
                    <span className="text-white/80">{selection.fry.name}</span>
                    <span className="font-medium">₹{selection.fry.price}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/20 mb-8 flex justify-between items-center">
                <span className="font-bold text-lg">Total</span>
                <span className="text-3xl font-bold text-secondary">₹{calculateTotal()}</span>
              </div>

              <button 
                onClick={handleAddToCart}
                disabled={!selection.rice || !selection.curry}
                className="w-full bg-white text-primary py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <FiShoppingCart />
                <span>Add Custom Meal</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BuildYourOwnMeal;
