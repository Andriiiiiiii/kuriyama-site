import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/shared/Header';
import { ProductionHero, ProductionSlide2, ProductionSlide3, ProductionSlide4, ProductionSlide5, ProductionSlide6, ProductionSlide7, ProductionSlide8, Footer } from '@/components/sections';
import ProductionLinesOverlay from '@/components/sections/production/ProductionLinesOverlay';

const Production: React.FC = () => {
  return (
    <main className="w-full bg-background min-h-screen relative">
      
      <Header activeSection="production" />
      
      {/* Container for content relative to lines */}
      <div className="relative w-full">
         <ProductionLinesOverlay />
         
         <div className="relative z-20">
            <ProductionHero />
            <ProductionSlide2 />
            <ProductionSlide3 />
            <ProductionSlide4 />
            <ProductionSlide5 />
            <ProductionSlide6 />
            <ProductionSlide7 />
            <ProductionSlide8 />
         </div>
      </div>
      
      {/* Footer pulled up to overlap Slide 8 bottom */}
      <div className="relative z-30 -mt-[15vw]">
        <Footer />
      </div>
    </main>
  );
};

export default Production;
