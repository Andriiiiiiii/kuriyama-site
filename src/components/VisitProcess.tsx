import React from 'react';

// Placeholder for wood texture image - using the one from the uploaded reference
import woodImage from '@/assets/8-photo.png';

const VisitProcess: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Выберите тариф',
      description: 'Описание, подробнее раскрывающее заголовок'
    },
    {
      number: '2',
      title: 'Назначьте дату',
      description: 'Описание, подробнее раскрывающее заголовок'
    },
    {
      number: '3',
      title: 'Мы вас встретим',
      description: 'Описание, подробнее раскрывающее заголовок'
    }
  ];

  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Title */}
        <h2 className="font-ua-brand text-primary text-[48px] md:text-[64px] lg:text-[80px] font-bold uppercase leading-[0.95] mb-12 md:mb-16">
          ПРОЦЕСС<br />
          ПОСЕЩЕНИЯ
        </h2>

        {/* Steps grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex-1 ${index < 2 ? 'lg:border-r-2 lg:border-primary lg:pr-8' : ''} ${index === 2 ? 'lg:pl-8' : ''}`}
            >
              {index < 2 ? (
                // Steps 1 and 2 - on white background
                <div className="py-4">
                  <span className="font-ua-brand text-[#2E261D] text-[80px] md:text-[100px] font-normal leading-[0.8] block mb-4">
                    {step.number}
                  </span>
                  <h3 className="font-glametrix font-bold text-[#2E261D] text-xl md:text-2xl lg:text-[32px] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px]">
                    {step.description}
                  </p>
                </div>
              ) : (
                // Step 3 - on wood background
                <div 
                  className="relative h-[300px] md:h-[400px] lg:h-full min-h-[350px] rounded-lg overflow-hidden bg-cover bg-center p-6 md:p-8 flex flex-col justify-between"
                  style={{ backgroundImage: `url(${woodImage})` }}
                >
                  <div>
                    <span className="font-ua-brand text-[#2E261D] text-[80px] md:text-[100px] font-normal leading-[0.8] block mb-4">
                      {step.number}
                    </span>
                    <h3 className="font-glametrix font-bold text-[#2E261D] text-xl md:text-2xl lg:text-[32px] mb-2">
                      {step.title}
                    </h3>
                    <p className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px]">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Kuriyama calligraphy signature in bottom right */}
                  <div className="absolute bottom-4 right-4">
                    <span className="font-ua-brand text-[#2E261D]/60 text-2xl md:text-3xl italic">
                      クリヤマ
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitProcess;
