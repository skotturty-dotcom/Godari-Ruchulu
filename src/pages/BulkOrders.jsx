import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { FiUsers, FiBriefcase, FiHome, FiHeart, FiGift, FiStar } from 'react-icons/fi';

const categories = [
  { id: 'corporate', title: 'Corporate Lunch', icon: <FiBriefcase />, desc: 'Impress your team with authentic Godavari meals.' },
  { id: 'housewarming', title: 'Housewarming', icon: <FiHome />, desc: 'Auspicious beginnings with traditional recipes.' },
  { id: 'birthday', title: 'Birthday Parties', icon: <FiGift />, desc: 'Celebrate with our special feast combos.' },
  { id: 'marriage', title: 'Marriage Functions', icon: <FiHeart />, desc: 'Grand traditional spreads for your big day.' },
  { id: 'festival', title: 'Festivals', icon: <FiStar />, desc: 'Festive specials customized to your needs.' },
  { id: 'family', title: 'Family Gatherings', icon: <FiUsers />, desc: 'Hassle-free catering for large family meetups.' },
];

const BulkOrders = () => {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Bulk Order Inquiry:", data);
    // In a real app, send to API
    setTimeout(() => {
      reset();
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-brand-bg relative overflow-hidden">
      <Helmet>
        <title>Bulk Orders & Catering | Diviseema Vaari Godari Ruchulu</title>
        <meta name="description" content="Authentic Godavari food catering for birthdays, corporate lunches, housewarmings, and family functions." />
      </Helmet>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[100px] -z-10 rounded-full" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-dark leading-tight mb-6">
                Premium Catering for <br />
                <span className="text-primary">Your Special Occasions</span>
              </h1>
              <p className="text-dark/70 text-lg mb-10 leading-relaxed max-w-lg">
                Whether it's an intimate family gathering or a large corporate event, we bring the authentic taste of Diviseema right to your venue.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {categories.map((cat, i) => (
                <motion.div 
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-dark/5 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="font-playfair font-bold text-lg text-dark mb-2">{cat.title}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">{cat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-dark/5 lg:sticky lg:top-32"
          >
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-playfair font-bold text-dark mb-2">Request a Quote</h2>
              <p className="text-dark/60 text-sm">Fill out the details below and we will get back to you within 24 hours.</p>
            </div>

            {isSubmitSuccessful ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-2xl text-center">
                <FiStar className="mx-auto text-4xl mb-3" />
                <h3 className="font-bold text-lg mb-2">Inquiry Sent Successfully!</h3>
                <p className="text-sm">Our catering team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-dark/80 mb-2">Full Name</label>
                    <input 
                      {...register("name", { required: true })} 
                      className="w-full bg-brand-bg border border-dark/10 rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-dark/80 mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      {...register("phone", { required: true })} 
                      className="w-full bg-brand-bg border border-dark/10 rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-dark/80 mb-2">Event Type</label>
                    <select 
                      {...register("eventType", { required: true })} 
                      className="w-full bg-brand-bg border border-dark/10 rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50"
                    >
                      <option value="">Select Event</option>
                      {categories.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-dark/80 mb-2">Expected Guests</label>
                    <input 
                      type="number"
                      {...register("guests", { required: true, min: 10 })} 
                      className="w-full bg-brand-bg border border-dark/10 rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50"
                      placeholder="Min 10"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-dark/80 mb-2">Event Date</label>
                    <input 
                      type="date"
                      {...register("date", { required: true })} 
                      className="w-full bg-brand-bg border border-dark/10 rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-dark/80 mb-2">Special Requirements / Menu Preferences</label>
                    <textarea 
                      rows="4"
                      {...register("requirements")} 
                      className="w-full bg-brand-bg border border-dark/10 rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50"
                      placeholder="E.g., Mostly non-veg, require live dosa counter..."
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-4 rounded-xl font-bold shadow-lg transition-all hover:-translate-y-1"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BulkOrders;
