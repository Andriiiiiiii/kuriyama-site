import React from 'react';
import { ChevronRight } from 'lucide-react';

// Using placeholder images - in production these would be actual product photos
import photo1 from '@/assets/gallery/photo-1.png';
import photo2 from '@/assets/gallery/photo-2.png';
import photo3 from '@/assets/gallery/photo-3.png';
import photo4 from '@/assets/gallery/photo-4.png';
import photo5 from '@/assets/gallery/photo-5.png';

const Products: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden flex items-center">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Top row images */}
        <div className="flex justify-center gap-8 md:gap-16 lg:gap-32 mb-8">
          <div className="w-[160px] md:w-[200px] lg:w-[240px]">
            <img 
              src={photo1} 
              alt="Продукция 1" 
              className="w-full h-[120px] md:h-[150px] lg:h-[180px] object-cover"
            />
          </div>
          <div className="w-[200px] md:w-[280px] lg:w-[360px]">
            <img 
              src={photo2} 
              alt="Продукция 2" 
              className="w-full h-[160px] md:h-[200px] lg:h-[240px] object-cover"
            />
          </div>
        </div>

        {/* Middle row - title and images */}
        <div className="flex items-center justify-between gap-4 mb-8">
          {/* Left image */}
          <div className="w-[180px] md:w-[240px] lg:w-[300px] flex-shrink-0">
            <img 
              src={photo3} 
              alt="Продукция 3" 
              className="w-full h-[220px] md:h-[300px] lg:h-[380px] object-cover"
            />
          </div>

          {/* Center content */}
          <div className="flex-1 text-center px-4">
            <h2 className="font-ua-brand text-[#2E261D] text-[48px] md:text-[64px] lg:text-[80px] font-bold uppercase leading-[0.95] mb-4">
              ПРОДУКЦИЯ
            </h2>
            <p className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px] mb-6">
              Описание, чуть подробнее раскрывающее заголовок
            </p>
            <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-glametrix text-base md:text-lg lg:text-[22px] px-6 py-2.5 rounded-full transition-colors mx-auto">
              Подробнее
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Bottom center image */}
            <div className="mt-8">
              <img 
                src={photo4} 
                alt="Продукция 4" 
                className="w-[160px] md:w-[200px] lg:w-[240px] h-[180px] md:h-[220px] lg:h-[260px] object-cover mx-auto"
              />
            </div>
          </div>

          {/* Right image */}
          <div className="w-[180px] md:w-[240px] lg:w-[300px] flex-shrink-0">
            <img 
              src={photo5} 
              alt="Продукция 5" 
              className="w-full h-[160px] md:h-[200px] lg:h-[240px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
