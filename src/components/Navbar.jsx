import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cartCount, toggleCart } = useCart();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: isHome ? '#about' : '/#about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Specials', path: isHome ? '#specials' : '/#specials' },
    { name: 'Gallery', path: isHome ? '#gallery' : '/#gallery' },
    { name: 'Reviews', path: isHome ? '#reviews' : '/#reviews' },
    { name: 'FAQ', path: isHome ? '#faq' : '/#faq' },
    { name: 'Contact', path: isHome ? '#contact' : '/#contact' },
  ];

  const NavItem = ({ name, path }) => {
    const isHash = path.includes('#');
    
    if (isHash) {
      return (
        <a 
          href={path}
          onClick={() => setIsOpen(false)}
          className="text-dark/80 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
        >
          {name}
        </a>
      );
    }
    
    return (
      <Link 
        to={path}
        onClick={() => setIsOpen(false)}
        className="text-dark/80 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
      >
        {name}
      </Link>
    );
  };

  return (
    <nav className="fixed w-full z-50 top-4 px-4 md:px-8 transition-all duration-300">
      <div className={`mx-auto max-w-7xl flex justify-between items-center bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 rounded-2xl px-6 md:px-8 py-4 transition-all duration-300 ${scrolled ? 'py-3 shadow-xl' : 'py-5'}`}>
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start z-50">
          <span className="font-playfair font-bold text-2xl md:text-3xl text-primary leading-none tracking-wide">DIVISEEMA</span>
          <span className="text-[0.65rem] md:text-xs tracking-[0.25em] font-semibold text-secondary uppercase mt-1">Godari Ruchulu</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavItem key={link.name} {...link} />
          ))}
          
          <div className="flex items-center space-x-6 ml-4 pl-6 border-l border-dark/10">
            <button onClick={toggleCart} className="relative group focus:outline-none">
              <FiShoppingCart className="text-2xl text-dark group-hover:text-primary transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md font-bold animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
            
            <Link to="/pre-order" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all shadow-[0_4px_14px_0_rgb(122,62,18,0.39)] hover:shadow-[0_6px_20px_rgba(122,62,18,0.23)] hover:-translate-y-0.5">
              Order Now
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-5 z-50">
          <button onClick={toggleCart} className="relative focus:outline-none">
            <FiShoppingCart className="text-2xl text-dark" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-dark p-1 focus:outline-none">
            {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center space-y-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <NavItem key={link.name} {...link} />
            ))}
            <Link to="/pre-order" onClick={() => setIsOpen(false)} className="bg-primary text-white px-8 py-3 rounded-full font-medium w-3/4 text-center">
              Order Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
