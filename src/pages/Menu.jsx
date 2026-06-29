import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiShoppingCart, FiEye } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import db from '../data/db.json';
import { useCart } from '../contexts/CartContext';
import BuildYourOwnMeal from '../components/menu/BuildYourOwnMeal';
import ComboOffers from '../components/menu/ComboOffers';

const Menu = () => {
  const { menu, categories } = db;
  const { addToCart } = useCart();
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');

  // Filter and Sort Logic
  const filteredMenu = menu.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // recommended
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg">
      <Helmet>
        <title>Full Menu | Diviseema Vaari Godari Ruchulu</title>
        <meta name="description" content="Explore our authentic Godavari menu featuring Natu Kodi Pulusu, Bommidayila Pulusu, and traditional veg and non-veg curries." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Menu",
              "name": "Diviseema Vaari Godari Ruchulu Full Menu",
              "hasMenuItem": [
                {
                  "@type": "MenuItem",
                  "name": "Natu Kodi Pulusu",
                  "description": "Authentic country chicken curry cooked with traditional Godavari hand-pounded spices."
                },
                {
                  "@type": "MenuItem",
                  "name": "Bommidayila Pulusu",
                  "description": "A tangy, spicy Godavari fish stew cooked in an earthen pot."
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">Our Menu</h1>
          <p className="text-dark/70 text-lg">Hand-pounded masalas, fresh ingredients, and traditional Godavari recipes.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-6 rounded-2xl shadow-sm border border-dark/5">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40 text-lg" />
            <input 
              type="text" 
              placeholder="Search for biryani, curries, sweets..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-bg border border-dark/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <span className="text-sm font-medium text-dark/70 whitespace-nowrap">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-brand-bg border border-dark/10 rounded-full py-2 px-4 focus:outline-none focus:border-primary/50 text-sm w-full md:w-auto"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-dark/5 p-6 sticky top-32">
              <h3 className="font-playfair font-bold text-xl text-primary mb-4 pb-4 border-b border-dark/10">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setActiveCategory('All')}
                    className={`w-full text-left px-4 py-2.5 rounded-xl transition-colors text-sm font-medium ${activeCategory === 'All' ? 'bg-primary text-white' : 'hover:bg-brand-bg text-dark/70'}`}
                  >
                    All Items
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category}>
                    <button 
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl transition-colors text-sm font-medium ${activeCategory === category ? 'bg-primary text-white' : 'hover:bg-brand-bg text-dark/70'}`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="lg:w-3/4">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredMenu.map((item, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-dark/5 group relative"
                  >
                    {/* Badges */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                      <span className={`w-4 h-4 flex items-center justify-center rounded-sm border-2 bg-white ${item.type === 'veg' ? 'border-green-600' : 'border-red-600'}`}>
                        <span className={`w-2 h-2 rounded-full ${item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`}></span>
                      </span>
                      {item.isBestSeller && (
                        <span className="bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-md">Best Seller</span>
                      )}
                    </div>

                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                        <button className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <FiEye />
                        </button>
                        <button 
                          onClick={() => addToCart(item)}
                          className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                        >
                          <FiShoppingCart />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-playfair font-bold text-lg text-dark leading-tight pr-4">{item.name}</h4>
                        <span className="font-bold text-primary shrink-0">₹{item.price}</span>
                      </div>
                      <div className="flex items-center space-x-1 mb-3">
                        <span className="text-secondary text-sm">★</span>
                        <span className="text-dark/60 text-xs font-medium">{item.rating}</span>
                      </div>
                      <p className="text-dark/60 text-xs leading-relaxed mb-4 flex-grow">{item.description}</p>
                      
                      <button 
                        onClick={() => addToCart(item)}
                        className="w-full py-2.5 rounded-lg border-2 border-primary/20 text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredMenu.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-dark/5">
                <p className="text-dark/50 text-lg">No dishes found matching your criteria.</p>
                <button 
                  onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
                  className="mt-4 text-primary font-semibold hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Build Your Own Meal Section */}
      <BuildYourOwnMeal />
      
      {/* Combo Offers Section */}
      <ComboOffers combos={db.combos} />
    </div>
  );
};

export default Menu;
