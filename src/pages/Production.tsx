import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/shared/Header';
import { ProductionHero, ProductionSlide2, ProductionSlide3, ProductionSlide4, ProductionSlide5, ProductionSlide6, ProductionSlide7, ProductionSlide8, Footer } from '@/components/sections';

const Production: React.FC = () => {
  return (
    <main className="w-full bg-background min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <Link
            to="/"
            className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow text-primary hover:text-primary/80"
        >
            ← Главная
        </Link>
      </div>
      
      <Header activeSection="production" />
      
      <ProductionHero />
      <ProductionSlide2 />
      <ProductionSlide3 />
      <ProductionSlide4 />
      <ProductionSlide5 />
      <ProductionSlide6 />
      <ProductionSlide7 />
      <ProductionSlide8 />
      
      {/* Footer pulled up to overlap Slide 8 bottom */}
      <div className="relative z-10 -mt-[15vw]">
        <Footer />
      </div>
    </main>
  );
};

export default Production;
