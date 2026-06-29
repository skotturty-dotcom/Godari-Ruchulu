import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from '../contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiCreditCard, FiTruck } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const deliveryFee = 50;
  const taxes = Math.round(cartTotal * 0.05); // 5% GST
  const grandTotal = cartTotal + deliveryFee + taxes;

  const onSubmit = (data) => {
    // In a real app, this is where we'd initialize Razorpay
    console.log("Order Data:", data, "Items:", cartItems);
    setOrderPlaced(true);
    clearCart();
    
    // Redirect to tracking page after 3 seconds
    setTimeout(() => {
      navigate('/tracking');
    }, 4000);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-brand-bg">
        <h2 className="text-3xl font-playfair font-bold text-dark mb-4">Your cart is empty</h2>
        <Link to="/menu" className="text-primary hover:underline font-semibold">Browse Menu</Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-brand-bg px-6">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
        >
          <FiCheckCircle className="text-5xl" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4 text-center">Order Confirmed!</h1>
        <p className="text-dark/70 text-lg text-center max-w-md mb-8">
          Thank you for choosing Diviseema Vaari Godari Ruchulu. Your authentic Andhra meal is being prepared with love.
        </p>
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-dark/10 text-center w-full max-w-sm">
          <p className="text-sm text-dark/60 uppercase tracking-widest font-semibold mb-2">Order Tracking ID</p>
          <p className="text-2xl font-mono font-bold text-dark">DVGR-{Math.floor(Math.random() * 100000)}</p>
        </div>
        <p className="text-dark/50 text-sm mt-8">Redirecting to homepage...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-bg">
      <Helmet>
        <title>Checkout | Diviseema Vaari Godari Ruchulu</title>
      </Helmet>
      
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-10">Checkout</h1>
        
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Form Section */}
          <div className="lg:col-span-7 space-y-8">
            <form id="checkout-form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Delivery Details */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-dark/5">
                <h3 className="font-playfair font-bold text-xl text-dark mb-6 flex items-center">
                  <FiTruck className="mr-3 text-primary" /> Delivery Details
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-dark/80 mb-2">First Name</label>
                    <input 
                      {...register("firstName", { required: true })} 
                      className="w-full bg-brand-bg border border-dark/10 rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50"
                    />
                    {errors.firstName && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-dark/80 mb-2">Last Name</label>
                    <input 
                      {...register("lastName", { required: true })} 
                      className="w-full bg-brand-bg border border-dark/10 rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-dark/80 mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })} 
                      className="w-full bg-brand-bg border border-dark/10 rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50"
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1">Valid 10-digit number required</span>}
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-dark/80 mb-2">Email Address</label>
                    <input 
                      type="email"
                      {...register("email")} 
                      className="w-full bg-brand-bg border border-dark/10 rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-dark/80 mb-2">Complete Delivery Address</label>
                    <textarea 
                      rows="3"
                      {...register("address", { required: true })} 
                      className="w-full bg-brand-bg border border-dark/10 rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50"
                    ></textarea>
                    {errors.address && <span className="text-red-500 text-xs mt-1">Address is required</span>}
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-dark/5">
                <h3 className="font-playfair font-bold text-xl text-dark mb-6 flex items-center">
                  <FiCreditCard className="mr-3 text-primary" /> Payment Method
                </h3>
                
                <div className="space-y-4">
                  <label className="flex items-center p-4 border border-primary bg-primary/5 rounded-xl cursor-pointer">
                    <input type="radio" value="upi" {...register("paymentMethod")} defaultChecked className="w-4 h-4 text-primary accent-primary" />
                    <span className="ml-3 font-semibold text-dark">UPI / Card / Net Banking (Razorpay)</span>
                  </label>
                  <label className="flex items-center p-4 border border-dark/10 hover:border-primary/50 rounded-xl cursor-pointer transition-colors">
                    <input type="radio" value="cod" {...register("paymentMethod")} className="w-4 h-4 text-primary accent-primary" />
                    <span className="ml-3 font-semibold text-dark">Cash on Delivery</span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-dark/5 sticky top-32">
              <h3 className="font-playfair font-bold text-xl text-dark mb-6 border-b border-dark/10 pb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-brand-bg border border-dark/10 flex items-center justify-center font-bold text-xs text-dark">{item.quantity}</span>
                      <span className="text-dark font-medium">{item.name}</span>
                    </div>
                    <span className="font-semibold text-dark">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-dark/10 text-sm">
                <div className="flex justify-between text-dark/70">
                  <span>Subtotal</span>
                  <span className="font-semibold text-dark">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-dark/70">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-dark">₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between text-dark/70">
                  <span>Taxes (5% GST)</span>
                  <span className="font-semibold text-dark">₹{taxes}</span>
                </div>
                
                <div className="pt-4 mt-4 border-t border-dark/10 flex justify-between items-center">
                  <span className="font-playfair font-bold text-xl">Grand Total</span>
                  <span className="text-3xl font-bold text-primary">₹{grandTotal}</span>
                </div>
              </div>

              <button 
                type="submit"
                form="checkout-form"
                className="w-full mt-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-4 rounded-xl font-bold shadow-[0_4px_14px_0_rgb(122,62,18,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(122,62,18,0.23)] hover:-translate-y-1"
              >
                Place Order (₹{grandTotal})
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
