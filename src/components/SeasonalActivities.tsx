import React from 'react';
import MoreButton from '@/components/MoreButton';
import backImage from '@/assets/8-back-image.svg';
import photoSmall from '@/assets/8-photo.png';

const SeasonalActivities: React.FC = () => {
  return (
    <section className="relative w-full h-screen px-8 md:px-16 lg:px-24 flex items-center justify-center bg-white">
      {/* Background SVG */}
      <img
        src={backImage}
        alt=""
        className="w-full h-auto"
      />
      
      {/* Content overlay */}
      <div className="absolute inset-0 p-6 md:p-12">
        {/* Main title */}
        <h1 className="font-ua-brand text-secondary text-4xl md:text-6xl lg:text-[80px] font-bold uppercase leading-tight mt-16 md:mt-24">
          Сезонные
          <br />
          занятия
        </h1>

        {/* First content block */}
        <div className="mt-12 md:mt-20">
          <h2 className="font-glametrix text-secondary text-xl md:text-2xl lg:text-[32px] font-bold">
            Заголовок
          </h2>
          <p className="font-inter text-foreground text-sm md:text-base font-normal mt-2 max-w-[234px]">
            Описание, подробнее раскрывающее заголовок
          </p>
        </div>

        {/* Second content block */}
        <div className="mt-16 md:mt-24 ml-0 md:ml-48">
          <h2 className="font-glametrix text-secondary text-xl md:text-2xl lg:text-[32px] font-bold">
            Заголовок
          </h2>
          <p className="font-inter text-foreground text-sm md:text-base font-normal mt-2 max-w-[234px]">
            Описание, подробнее раскрывающее заголовок
          </p>
        </div>

        {/* Season label */}
        <div className="absolute left-1/2 -translate-x-1/2 md:left-[44%] top-[60%] md:top-[65%]">
          <p className="font-glametrix text-secondary text-lg md:text-[22px] font-medium">
            (natsu)
          </p>
          <h2 className="font-glametrix text-primary text-xl md:text-2xl lg:text-[32px] font-bold mt-2">
            Лето
          </h2>
        </div>

        {/* Third content block */}
        <div className="absolute right-6 md:right-24 top-[60%] md:top-[64%]">
          <h2 className="font-glametrix text-secondary text-xl md:text-2xl lg:text-[32px] font-bold">
            Заголовок
          </h2>
          <p className="font-inter text-foreground text-sm md:text-base font-normal mt-2 max-w-[234px]">
            Описание, подробнее раскрывающее заголовок
            <br />
            Описание, подробнее раскрывающее заголовок
          </p>
        </div>

        {/* Small photo */}
        <img
          src={photoSmall}
          alt="Сезонное фото"
          className="absolute left-6 md:left-8 bottom-28 md:bottom-32 w-[140px] md:w-[183px] h-auto object-cover"
        />

        {/* More button */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-16 md:bottom-20">
          <MoreButton onClick={() => console.log('More clicked')} />
        </div>
      </div>
    </section>
  );
};

export default SeasonalActivities;
