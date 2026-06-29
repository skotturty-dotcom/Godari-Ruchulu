import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: 'Priya Reddy',
    text: 'The best authentic Godavari food I have had in Hyderabad. The Pappu Chaaru tastes exactly like my grandmother used to make. Pure nostalgia!',
    rating: 5,
    role: 'Food Enthusiast'
  },
  {
    name: 'Karthik Varma',
    text: 'Quality of the chicken curry is top notch. You can actually taste the freshness of the ingredients and the homemade masalas. Highly recommended for weekend meals.',
    rating: 5,
    role: 'Regular Customer'
  },
  {
    name: 'Sneha Sharma',
    text: 'I ordered the veg combo for a family get-together and everyone loved it. The packaging was neat, and the food was piping hot upon delivery.',
    rating: 5,
    role: 'Local Guide'
  },
  {
    name: 'Rahul Krishna',
    text: 'Amazing seafood! The Uppu Chepa fry is a must-try. Premium quality packaging and the taste is uncompromisingly traditional.',
    rating: 5,
    role: 'Food Blogger'
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary uppercase tracking-widest font-medium text-sm mb-2 block">Customer Reviews</span>
          <h2 className="text-4xl font-playfair font-bold text-primary mb-6">What Our Patrons Say</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="pb-16"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-dark/5 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col relative">
                <FaQuoteLeft className="text-4xl text-primary/10 absolute top-8 right-8" />
                <div className="flex space-x-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-secondary text-sm" />
                  ))}
                </div>
                <p className="text-dark/70 text-sm leading-relaxed italic mb-8 flex-grow">
                  "{review.text}"
                </p>
                <div className="flex items-center space-x-4 border-t border-dark/5 pt-6 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-playfair text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-sm">{review.name}</h4>
                    <span className="text-xs text-dark/50">{review.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
