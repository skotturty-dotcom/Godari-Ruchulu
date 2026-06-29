import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ShoppingCart from './components/ShoppingCart';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const PreOrder = lazy(() => import('./pages/PreOrder'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Subscriptions = lazy(() => import('./pages/Subscriptions'));
const BulkOrders = lazy(() => import('./pages/BulkOrders'));
const Loyalty = lazy(() => import('./pages/Loyalty'));
const OrderTracking = lazy(() => import('./pages/OrderTracking'));

// Fallback Loading Screen
const LoadingScreen = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-white">
    <div className="relative w-32 h-32 mb-8">
      <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-playfair font-bold text-xl text-secondary">DVGR</span>
      </div>
    </div>
    <p className="text-white/60 uppercase tracking-widest text-sm animate-pulse">Heating up the kitchen...</p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col font-poppins bg-brand-bg text-dark relative overflow-x-hidden">
      <Navbar />
      <ShoppingCart />
      <main className="flex-grow">
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/pre-order" element={<PreOrder />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/bulk-orders" element={<BulkOrders />} />
            <Route path="/loyalty" element={<Loyalty />} />
            <Route path="/tracking" element={<OrderTracking />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
