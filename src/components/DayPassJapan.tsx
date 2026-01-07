import React from 'react';
import forestImage from '@/assets/4-image-1.png';
import gardenImage from '@/assets/4-image-2.png';
import photoshootImage from '@/assets/4-image-3.png';
import calligraphyImage from '@/assets/4-central-image.png';
import { ChevronRight } from 'lucide-react';

const DayPassJapan: React.FC = () => {
  return (
    <section className="relative w-full h-[354px] bg-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left column */}
          <div className="lg:w-[45%]">
            {/* DAY PASS title */}
            <h2 className="font-ua-brand text-primary text-[48px] md:text-[64px] lg:text-[80px] font-bold uppercase leading-[0.95] mb-4">
              DAY PASS
            </h2>
            <p className="font-glametrix text-[#2E261D] text-lg md:text-xl lg:text-[22px] mb-8 max-w-[400px]">
              Описание, чуть подробнее раскрывающее заголовок. Про активности и атмосферу.
            </p>
            
            {/* Forest walk card */}
            <div className="relative">
              <img 
                src={forestImage} 
                alt="Лесная прогулка" 
                className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover"
              />
              <div className="mt-4">
                <h3 className="font-glametrix font-bold text-[#2E261D] text-2xl md:text-[28px] lg:text-[30px]">
                  Лесная прогулка
                </h3>
                <div className="flex justify-between items-end mt-2">
                  <p className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px] max-w-[280px]">
                    Описание, чуть подробнее раскрывающее заголовок. Про активности и атмосферу.
                  </p>
                  <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-glametrix text-base md:text-lg lg:text-[22px] px-5 md:px-6 py-2.5 rounded-full transition-colors">
                    Подробнее
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:flex-1">
            {/* ЯПОНИЯ title and description */}
            <div className="text-right mb-6">
              <p className="font-glametrix text-[#2E261D] text-lg md:text-xl lg:text-[22px] mb-2">
                Описание, чуть подробнее раскрывающее заголовок.<br />
                Про активности и атмосферу.
              </p>
              <h2 className="font-ua-brand text-primary text-[48px] md:text-[64px] lg:text-[80px] font-bold uppercase leading-[0.95]">
                ЯПОНИЯ
              </h2>
            </div>

            {/* Calligraphy and Garden */}
            <div className="flex gap-4 md:gap-6 mb-6">
              {/* Calligraphy image - moved more to the left */}
              <div className="w-[120px] md:w-[160px] lg:w-[200px] flex-shrink-0 -ml-8 md:-ml-12 lg:-ml-16">
                <img 
                  src={calligraphyImage} 
                  alt="Каллиграфия" 
                  className="w-full h-auto mix-blend-hard-light"
                />
              </div>
              
              {/* Rock garden card */}
              <div className="flex-1">
                <img 
                  src={gardenImage} 
                  alt="Сад камней" 
                  className="w-full h-[140px] md:h-[180px] object-cover"
                />
                <h3 className="font-glametrix font-bold text-[#2E261D] text-xl md:text-2xl lg:text-[30px] mt-3">
                  Сад камней
                </h3>
                <p className="font-glametrix text-[#2E261D] text-sm md:text-base lg:text-[22px] mt-1">
                  Описание, чуть подробнее раскрывающее заголовок
                </p>
                <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-glametrix text-sm md:text-base lg:text-[22px] px-4 md:px-5 py-2 rounded-full transition-colors mt-3">
                  Подробнее
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>

            {/* Photoshoot card */}
            <div className="relative">
              <img 
                src={photoshootImage} 
                alt="Фотосессия в японском тематике" 
                className="w-full h-[200px] md:h-[260px] lg:h-[300px] object-cover"
              />
              <div className="mt-4">
                <h3 className="font-glametrix font-bold text-[#2E261D] text-xl md:text-2xl lg:text-[30px]">
                  Фотосессия в японском тематике
                </h3>
                <div className="flex justify-between items-end mt-2">
                  <p className="font-glametrix text-[#2E261D] text-sm md:text-base lg:text-[22px]">
                    Описание, чуть подробнее
                  </p>
                  <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-glametrix text-sm md:text-base lg:text-[22px] px-4 md:px-5 py-2 rounded-full transition-colors">
                    Подробнее
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayPassJapan;
