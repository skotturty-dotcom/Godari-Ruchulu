import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-bg shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-dark/10 flex justify-between items-center bg-white">
              <div className="flex items-center space-x-3">
                <FiShoppingBag className="text-2xl text-primary" />
                <h2 className="font-playfair font-bold text-xl text-dark">Your Order</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-dark/50 space-y-4">
                  <FiShoppingBag className="text-6xl opacity-20" />
                  <p className="text-lg">Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-primary hover:underline font-semibold"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4 bg-white p-4 rounded-2xl shadow-sm border border-dark/5 relative">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-playfair font-bold text-dark pr-6 leading-tight">{item.name}</h4>
                      <p className="text-xs text-dark/60 mt-1 capitalize">{item.type}</p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <span className="font-bold text-primary">₹{item.price * item.quantity}</span>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3 bg-brand-bg rounded-lg p-1 border border-dark/10">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="w-6 h-6 flex items-center justify-center text-dark hover:text-primary disabled:opacity-30"
                          >
                            <FiMinus className="text-xs" />
                          </button>
                          <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-dark hover:text-primary"
                          >
                            <FiPlus className="text-xs" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Remove button */}
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-4 right-4 text-dark/40 hover:text-accent transition-colors"
                    >
                      <FiX />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Summary */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-white border-t border-dark/10 shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm text-dark/70">
                    <span>Subtotal</span>
                    <span className="font-semibold text-dark">₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-sm text-dark/70">
                    <span>Delivery</span>
                    <span className="font-semibold text-dark">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-sm text-dark/70">
                    <span>Taxes & Fees</span>
                    <span className="font-semibold text-dark">Calculated at checkout</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-dark/10 flex justify-between items-center">
                    <span className="font-playfair font-bold text-lg">Total</span>
                    <span className="font-bold text-2xl text-primary">₹{cartTotal}</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-semibold shadow-lg transition-all hover:-translate-y-1"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;
