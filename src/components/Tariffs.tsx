import React from 'react';
import leftTablet from '@/assets/14-left-back-image.png';
import rightTablet from '@/assets/14-right-back-image.png';

const Tariffs: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-white py-12 md:py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Title */}
        <h2 className="font-ua-brand text-[#2E261D] text-5xl md:text-6xl lg:text-[80px] font-bold uppercase mb-8 md:mb-12">
          тарифы
        </h2>
        
        {/* Two columns with tablets - aligned by bottom */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 items-end">
          
          {/* Left column - Japan */}
          <div className="flex items-end gap-4 md:gap-6">
            {/* DAYPASS text */}
            <div className="flex flex-col items-center pb-8">
              <span className="font-ua-brand text-[#2E261D] text-xl md:text-2xl lg:text-[35px] font-bold uppercase whitespace-nowrap" style={{ writingMode: 'horizontal-tb' }}>
                DAYPASS.
              </span>
              {/* Vertical ЯПОНИЯ */}
              <div className="flex flex-col items-center mt-4 gap-0">
                {'ЯПОНИЯ'.split('').map((letter, i) => (
                  <span key={i} className="font-ua-brand text-[#2E261D] text-xl md:text-2xl lg:text-[35px] font-bold uppercase leading-[1.1]">
                    {letter}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Left tablet */}
            <div className="relative">
              <img 
                src={leftTablet} 
                alt="" 
                className="w-[280px] md:w-[340px] lg:w-[400px] h-auto"
              />
              {/* Activities text overlay */}
              <div className="absolute top-[22%] left-[15%] right-[8%] space-y-4 md:space-y-6">
                <div>
                  <h3 className="font-glametrix font-bold text-black text-lg md:text-xl lg:text-2xl">
                    Прогулка по лесу
                  </h3>
                  <p className="font-glametrix text-black text-sm md:text-base opacity-80 mt-1">
                    Небольшое описание активности в две строчки
                  </p>
                </div>
                <div>
                  <h3 className="font-glametrix font-bold text-black text-lg md:text-xl lg:text-2xl">
                    Сад камней
                  </h3>
                  <p className="font-glametrix text-black text-sm md:text-base opacity-80 mt-1">
                    Небольшое описание активности в две строчки
                  </p>
                </div>
                <div>
                  <h3 className="font-glametrix font-bold text-black text-lg md:text-xl lg:text-2xl">
                    Фотоссесия в японской тематике
                  </h3>
                  <p className="font-glametrix text-black text-sm md:text-base opacity-80 mt-1">
                    Небольшое описание активности в две строчки
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Paseka */}
          <div className="flex items-end gap-4 md:gap-6">
            {/* Right tablet with button */}
            <div className="relative">
              <img 
                src={rightTablet} 
                alt="" 
                className="w-[280px] md:w-[340px] lg:w-[400px] h-auto"
              />
              {/* Activities text overlay */}
              <div className="absolute top-[22%] left-[15%] right-[8%] space-y-4 md:space-y-6">
                <div>
                  <h3 className="font-glametrix font-bold text-black text-lg md:text-xl lg:text-2xl">
                    Апи-домики
                  </h3>
                  <p className="font-glametrix text-black text-sm md:text-base opacity-80 mt-1">
                    Небольшое описание активности в две строчки
                  </p>
                </div>
                <div>
                  <h3 className="font-glametrix font-bold text-black text-lg md:text-xl lg:text-2xl">
                    Медоносное поле
                  </h3>
                  <p className="font-glametrix text-black text-sm md:text-base opacity-80 mt-1">
                    Небольшое описание активности в две строчки
                  </p>
                </div>
                <div>
                  <h3 className="font-glametrix font-bold text-black text-lg md:text-xl lg:text-2xl">
                    Фотоссесия с пчелами
                  </h3>
                  <p className="font-glametrix text-black text-sm md:text-base opacity-80 mt-1">
                    Небольшое описание активности в две строчки
                  </p>
                </div>
              </div>
              
              {/* Visit button - positioned at bottom of this tablet */}
              <button className="absolute -bottom-[60px] md:-bottom-[70px] lg:-bottom-[80px] right-0 w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center justify-center z-10">
                <span className="font-glametrix text-white text-sm md:text-base lg:text-lg text-center px-3">
                  Посетить Курияму
                </span>
              </button>
            </div>
            
            {/* DAYPASS text */}
            <div className="flex flex-col items-center pb-8">
              <span className="font-ua-brand text-[#2E261D] text-xl md:text-2xl lg:text-[35px] font-bold uppercase whitespace-nowrap" style={{ writingMode: 'horizontal-tb' }}>
                DAYPASS.
              </span>
              {/* Vertical ПАСЕКА */}
              <div className="flex flex-col items-center mt-4 gap-0">
                {'ПАСЕКА'.split('').map((letter, i) => (
                  <span key={i} className="font-ua-brand text-[#2E261D] text-xl md:text-2xl lg:text-[35px] font-bold uppercase leading-[1.1]">
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Extra space for button */}
        <div className="h-[80px] md:h-[100px] lg:h-[120px]" />
      </div>
    </section>
  );
};

export default Tariffs;
