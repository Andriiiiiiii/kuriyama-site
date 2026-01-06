import React from 'react';
import backImage from '@/assets/13-back-image.png';

interface Review {
  name: string;
  text: string;
  isLarge?: boolean;
}

const reviews: Review[] = [
  {
    name: 'Иванов Иван',
    text: 'Отзыв в три-четыре строчки, подчеркивающий надежность, скорость и профит наших услуг. Здесь можно вставить отзыв покрупнее, чтобы он заполнил плашку. Впечатления о посещении и слова благодарности гидам и управляющим',
    isLarge: true,
  },
  {
    name: 'Лебедева Дарья',
    text: 'Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.',
  },
  {
    name: 'Кулик Евгений',
    text: 'Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.',
  },
  {
    name: 'Соколов Яков',
    text: 'Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.',
  },
  {
    name: 'Романов Сергей',
    text: 'Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.',
  },
  {
    name: 'Соболева Наталья',
    text: 'Отзыв в три-четыре строчки, подчеркивающий надежность, скорость.',
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F5F5F0] py-12 md:py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background calligraphy image - centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <img
          src={backImage}
          alt=""
          className="h-[500px] md:h-[600px] lg:h-[700px] w-auto opacity-40 mix-blend-darken"
        />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8 md:mb-12">
          {/* Title */}
          <h2 className="font-ua-brand text-[#2E261D] text-5xl md:text-6xl lg:text-[80px] font-bold uppercase">
            отзывы
          </h2>
          
          {/* Subtitle */}
          <p className="font-glametrix text-black text-base md:text-lg lg:text-[22px] max-w-[300px] md:pt-4">
            Текст, дополняющий заголовок. О ценности гостей и их визитов.
          </p>
        </div>

        {/* Reviews grid - scattered layout */}
        <div className="relative min-h-[500px] md:min-h-[600px]">
          {/* Иванов Иван - large card, top left */}
          <div className="absolute top-0 left-0 w-[280px] md:w-[300px] bg-[#EFE3D6] border border-primary p-4 md:p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#EFE9E3] border border-primary flex items-center justify-center overflow-hidden">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300" />
              </div>
              <h3 className="font-glametrix font-bold text-black text-lg md:text-xl">
                {reviews[0].name}
              </h3>
            </div>
            <p className="font-glametrix text-black text-sm md:text-base leading-relaxed">
              {reviews[0].text}
            </p>
          </div>

          {/* Лебедева Дарья - center */}
          <div className="absolute top-[180px] md:top-[200px] left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] bg-[#EFE3D6] border border-primary p-4 md:p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#EFE9E3] border border-primary flex items-center justify-center overflow-hidden">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300" />
              </div>
              <h3 className="font-glametrix font-bold text-black text-lg md:text-xl">
                {reviews[1].name}
              </h3>
            </div>
            <p className="font-glametrix text-black text-sm md:text-base leading-relaxed">
              {reviews[1].text}
            </p>
          </div>

          {/* Кулик Евгений - top right */}
          <div className="absolute top-0 right-0 w-[240px] md:w-[280px] bg-[#EFE3D6] border border-primary p-4 md:p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#EFE9E3] border border-primary flex items-center justify-center overflow-hidden">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300" />
              </div>
              <h3 className="font-glametrix font-bold text-black text-lg md:text-xl">
                {reviews[2].name}
              </h3>
            </div>
            <p className="font-glametrix text-black text-sm md:text-base leading-relaxed">
              {reviews[2].text}
            </p>
          </div>

          {/* Соколов Яков - right side, middle */}
          <div className="absolute top-[160px] md:top-[180px] right-0 w-[240px] md:w-[280px] bg-[#EFE3D6] border border-primary p-4 md:p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#EFE9E3] border border-primary flex items-center justify-center overflow-hidden">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300" />
              </div>
              <h3 className="font-glametrix font-bold text-black text-lg md:text-xl">
                {reviews[3].name}
              </h3>
            </div>
            <p className="font-glametrix text-black text-sm md:text-base leading-relaxed">
              {reviews[3].text}
            </p>
          </div>

          {/* Романов Сергей - bottom left */}
          <div className="absolute top-[380px] md:top-[420px] left-[10%] md:left-[15%] w-[280px] md:w-[340px] bg-[#EFE3D6] border border-primary p-4 md:p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#EFE9E3] border border-primary flex items-center justify-center overflow-hidden">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300" />
              </div>
              <h3 className="font-glametrix font-bold text-black text-lg md:text-xl">
                {reviews[4].name}
              </h3>
            </div>
            <p className="font-glametrix text-black text-sm md:text-base leading-relaxed">
              {reviews[4].text}
            </p>
          </div>

          {/* Соболева Наталья - bottom right */}
          <div className="absolute top-[340px] md:top-[380px] right-[5%] md:right-[10%] w-[240px] md:w-[280px] bg-[#EFE3D6] border border-primary p-4 md:p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#EFE9E3] border border-primary flex items-center justify-center overflow-hidden">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300" />
              </div>
              <h3 className="font-glametrix font-bold text-black text-lg md:text-xl">
                {reviews[5].name}
              </h3>
            </div>
            <p className="font-glametrix text-black text-sm md:text-base leading-relaxed">
              {reviews[5].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
