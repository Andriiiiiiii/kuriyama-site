import React from 'react';
import backImage from '@/assets/13-back-image.png';

const Reviews: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-white py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden flex items-center">
      {/* Background ink splash - centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <img
          src={backImage}
          alt=""
          className="h-[400px] md:h-[500px] lg:h-[600px] w-auto opacity-60"
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header row */}
        <div className="flex items-start justify-between gap-8 mb-12 md:mb-16">
          {/* Title */}
          <h2 className="font-ua-brand text-primary text-5xl md:text-6xl lg:text-[80px] font-bold uppercase leading-[0.9]">
            отзывы
          </h2>
          
          {/* Subtitle - positioned to the right of title */}
          <p className="font-glametrix text-black text-base md:text-lg lg:text-[22px] max-w-[280px] pt-2">
            Текст, дополняющий заголовок. О ценности гостей и их визитов.
          </p>
        </div>

        {/* Reviews layout */}
        <div className="relative min-h-[500px] md:min-h-[550px]">
          
          {/* Иванов Иван - top left, WITH border */}
          <div className="absolute top-0 left-0 w-[260px] md:w-[280px] bg-[#EFE3D6] border border-primary p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-[52px] h-[52px] bg-[#EFE9E3] border border-primary flex items-center justify-center overflow-hidden flex-shrink-0">
                <div className="w-[44px] h-[44px] bg-gray-300" />
              </div>
              <h3 className="font-glametrix font-bold text-black text-xl">
                Иванов Иван
              </h3>
            </div>
            <p className="font-glametrix text-black text-sm leading-relaxed">
              Отзыв в три-четыре строчки, подчеркивающий надежность, скорость и профит наших услуг. Здесь можно вставить отзыв покрупнее, чтобы он заполнил плашку. Впечатления о посещении и слова благодарности гидам и управляющим
            </p>
          </div>

          {/* Лебедева Дарья - center, WITH border */}
          <div className="absolute top-[200px] md:top-[180px] left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] bg-[#EFE3D6] border border-primary p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-[52px] h-[52px] bg-[#EFE9E3] border border-primary flex items-center justify-center overflow-hidden flex-shrink-0">
                <div className="w-[44px] h-[44px] bg-gray-300" />
              </div>
              <h3 className="font-glametrix font-bold text-black text-xl">
                Лебедева Дарья
              </h3>
            </div>
            <p className="font-glametrix text-black text-sm leading-relaxed">
              Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.
            </p>
          </div>

          {/* Кулик Евгений - top right, NO border */}
          <div className="absolute top-0 right-0 w-[220px] md:w-[250px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-[52px] h-[52px] bg-[#EFE9E3] border border-primary flex items-center justify-center overflow-hidden flex-shrink-0">
                <div className="w-[44px] h-[44px] bg-gray-300" />
              </div>
              <h3 className="font-glametrix font-bold text-black text-xl">
                Кулик Евгений
              </h3>
            </div>
            <p className="font-glametrix text-black text-sm leading-relaxed">
              Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.
            </p>
          </div>

          {/* Соколов Яков - right middle, NO border */}
          <div className="absolute top-[140px] md:top-[130px] right-0 w-[220px] md:w-[250px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-[52px] h-[52px] bg-[#EFE9E3] border border-primary flex items-center justify-center overflow-hidden flex-shrink-0">
                <div className="w-[44px] h-[44px] bg-gray-300" />
              </div>
              <h3 className="font-glametrix font-bold text-black text-xl">
                Соколов Яков
              </h3>
            </div>
            <p className="font-glametrix text-black text-sm leading-relaxed">
              Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.
            </p>
          </div>

          {/* Романов Сергей - bottom center-left, NO border */}
          <div className="absolute top-[380px] md:top-[360px] left-[15%] md:left-[20%] w-[280px] md:w-[340px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-[52px] h-[52px] bg-[#EFE9E3] border border-primary flex items-center justify-center overflow-hidden flex-shrink-0">
                <div className="w-[44px] h-[44px] bg-gray-300" />
              </div>
              <h3 className="font-glametrix font-bold text-black text-xl">
                Романов Сергей
              </h3>
            </div>
            <p className="font-glametrix text-black text-sm leading-relaxed">
              Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.
            </p>
          </div>

          {/* Соболева Наталья - bottom right, WITH border */}
          <div className="absolute top-[340px] md:top-[320px] right-[5%] md:right-[8%] w-[240px] md:w-[260px] bg-[#EFE3D6] border border-primary p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-[52px] h-[52px] bg-[#EFE9E3] border border-primary flex items-center justify-center overflow-hidden flex-shrink-0">
                <div className="w-[44px] h-[44px] bg-gray-300" />
              </div>
              <h3 className="font-glametrix font-bold text-black text-xl">
                Соболева Наталья
              </h3>
            </div>
            <p className="font-glametrix text-black text-sm leading-relaxed">
              Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
