import React from 'react';
import woodImage from '@/assets/7-right-image.png';
import number1 from '@/assets/number-1.svg';
import number2 from '@/assets/number-2.svg';
import number3 from '@/assets/number-3.svg';

const VisitProcess: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Title */}
        <h2 className="font-ua-brand text-primary text-[48px] md:text-[64px] lg:text-[80px] font-bold uppercase leading-[0.95] mb-12 md:mb-16">
          ПРОЦЕСС<br />
          ПОСЕЩЕНИЯ
        </h2>

        {/* Steps container */}
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Step 1 */}
          <div className="flex-1 pb-8 lg:pb-0 border-b lg:border-b-0">
            <div className="h-full pr-6 lg:pr-12 border-r-2 border-primary">
              <img 
                src={number1} 
                alt="1" 
                className="h-[60px] md:h-[70px] lg:h-[77px] w-auto mb-4"
              />
              <h3 className="font-glametrix font-bold text-[#2E261D] text-xl md:text-2xl lg:text-[32px] mb-2">
                Выберите тариф
              </h3>
              <p className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px] max-w-[280px]">
                Описание, подробнее раскрывающее заголовок
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex-1 py-8 lg:py-0">
            <div className="h-full px-6 lg:px-12 border-r-2 border-primary">
              <img 
                src={number2} 
                alt="2" 
                className="h-[60px] md:h-[70px] lg:h-[78px] w-auto mb-4"
              />
              <h3 className="font-glametrix font-bold text-[#2E261D] text-xl md:text-2xl lg:text-[32px] mb-2">
                Назначьте дату
              </h3>
              <p className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px] max-w-[280px]">
                Описание, подробнее раскрывающее заголовок
              </p>
            </div>
          </div>

          {/* Step 3 - on wood background */}
          <div className="flex-1 lg:flex-[1.2] pt-8 lg:pt-0">
            <div className="relative">
              <img 
                src={woodImage} 
                alt="" 
                className="w-full h-auto"
              />
              {/* Content overlay */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
                <div>
                  <img 
                    src={number3} 
                    alt="3" 
                    className="h-[60px] md:h-[70px] lg:h-[77px] w-auto mb-4"
                  />
                  <h3 className="font-glametrix font-bold text-[#2E261D] text-xl md:text-2xl lg:text-[32px] mb-2">
                    Мы вас встретим
                  </h3>
                  <p className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px] max-w-[280px]">
                    Описание, подробнее раскрывающее заголовок
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitProcess;
