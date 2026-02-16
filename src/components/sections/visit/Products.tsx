import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import photo1 from '@/assets/gallery/photo-1.webp';
import photo2 from '@/assets/gallery/photo-2.webp';
import photo3 from '@/assets/gallery/photo-3.webp';
import photo4 from '@/assets/gallery/photo-4.webp';
import photo5 from '@/assets/gallery/photo-5.webp';

const Products: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto">
        {/* Top row images */}
        <div className="flex justify-center gap-8 md:gap-16 lg:gap-32 mb-8">
          <div 
            className="w-[160px] md:w-[200px] lg:w-[240px]"
          >
            <img 
              src={photo1} 
              alt="Продукция 1" 
              className="w-full h-[120px] md:h-[150px] lg:h-[180px] object-cover"
            />
          </div>
          <div 
            className="w-[200px] md:w-[280px] lg:w-[360px]"
          >
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
          <div 
            className="w-[180px] md:w-[240px] lg:w-[300px] flex-shrink-0"
          >
            <img 
              src={photo3} 
              alt="Продукция 3" 
              className="w-full h-[220px] md:h-[300px] lg:h-[380px] object-cover"
            />
          </div>

          {/* Center content */}
          <div 
            className="flex-1 text-center px-4"
          >
            <h2 className="font-ua-brand text-[#2E261D] font-bold uppercase mb-4" style={{ fontSize: 'calc(80 / 1441.5 * 100vw)' }}>
              ПРОДУКЦИЯ
            </h2>
            <p className="font-glametrix text-[#2E261D] mb-6" style={{ fontSize: 'calc(22 / 1441.5 * 100vw)' }}>
              Описание, чуть подробнее раскрывающее заголовок
            </p>
            <Link to="/production" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-glametrix px-6 py-2.5 rounded-full transition-colors mx-auto" style={{ fontSize: 'calc(22 / 1441.5 * 100vw)' }}>
              Подробнее
              <ChevronRight className="w-5 h-5" />
            </Link>
            
            {/* Bottom center image */}
            <div 
              className="mt-8"
            >
              <img 
                src={photo4} 
                alt="Продукция 4" 
                className="w-[160px] md:w-[200px] lg:w-[240px] h-[180px] md:h-[220px] lg:h-[260px] object-cover mx-auto"
              />
            </div>
          </div>

          {/* Right image */}
          <div 
            className="w-[180px] md:w-[240px] lg:w-[300px] flex-shrink-0"
          >
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