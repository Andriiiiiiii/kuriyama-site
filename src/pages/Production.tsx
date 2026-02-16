import React from 'react';
import Header from '@/components/shared/Header';
import { ProductionHero, ProductionSlide2, ProductionSlide3, ProductionSlide4, ProductionSlide5, ProductionSlide6, ProductionSlide7, ProductionSlide8, Footer } from '@/components/sections';

const Production: React.FC = () => {
  return (
    <main className="w-full bg-background min-h-screen relative">
      
      <Header activeSection="production" />
      
      <div className="relative w-full">
         <ProductionHero />
         <ProductionSlide2 />
         <ProductionSlide3 />
         <ProductionSlide4 />
         <ProductionSlide5 />
         <ProductionSlide6 />
         <ProductionSlide7 />
         <ProductionSlide8 />
      </div>

      {/* Footer pulled up to overlap Slide 8 bottom */}
      <div className="relative z-30 -mt-[15vw]">
        <Footer />
      </div>
    </main>
  );
};

export default Production;
