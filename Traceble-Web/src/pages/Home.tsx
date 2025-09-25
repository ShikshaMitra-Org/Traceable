import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Products />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
