import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import leftPhoto from '@/assets/beekeeping/5_left_photo.webp';
import rightPhoto from '@/assets/beekeeping/5_right_photo.webp';

const BeekeepingSlide5: React.FC = () => {
  return (
    <section className="relative w-full h-layout overflow-hidden bg-white">
      {/* Left Photo - left 7.51%, top 0.00%, width 19.81%, height 100.00% */}
      <div
        className="absolute z-10"
        style={{
          left: '7.51%',
          top: '5%',
          width: '19.81%',
          height: '90%'
        }}
      >
        <img
          src={leftPhoto}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Photo (Middle) - left 50.66%, top 0.00%, width 19.81%, height 100.00% */}
      <div
        className="absolute z-10"
        style={{
          left: '50.66%',
          top: '5%',
          width: '19.81%',
          height: '90%'
        }}
      >
        <img
          src={rightPhoto}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title - left 27.81%, top 10.28%, width 44.72%, height 11.04% */}
      <h2
        className="absolute z-20 font-ua-brand font-bold uppercase text-center text-[#231F20]"
        style={{
          left: '27.81%',
          top: '10.28%',
          width: '44.72%',
          fontSize: FONT_SIZES.heading,
          lineHeight: 1
        }}
      >
        ПОЧЕМУ МЫ?
      </h2>

      {/* CONTENT COLUMNS */}

      {/* Left Top Subtitle - left 29.52%, top 36.27%, width 7.79%, height 2.91% */}
      <h3
        className="absolute z-10 font-ua-brand font-bold  text-[#231F20]"
        style={{
          left: '29.52%',
          top: '36.27%',
          width: '18%', // Increased width to fit text potentially, keeping left anchor
          fontSize: FONT_SIZES.medium,
        }}
      >
        Заголовок
      </h3>

      {/* Left Top Text - left 29.53%, top 43.60%, width 18.07%, height 16.93% */}
      <p
        className="absolute z-10 font-glametrix text-black"
        style={{
          left: '29.53%',
          top: '43.60%',
          width: '18.07%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Описание, подробнее 
         <br />
        раскрывающее заголовок.
         <br />
        Описание преимущества выбора Куриямы в качестве партнера по пчеловодству
      </p>

      {/* Left Bottom Subtitle - left 29.52%, top 67.81%, width 7.79%, height 2.91% */}
      <h3
        className="absolute z-10 font-ua-brand font-bold text-[#231F20]"
        style={{
          left: '29.52%',
          top: '67.81%',
          width: '18%',
          fontSize: FONT_SIZES.medium,
        }}
      >
        Заголовок
      </h3>

      {/* Left Bottom Text - left 29.53%, top 75.14%, width 18.07%, height 16.93% */}
      <p
        className="absolute z-10 font-glametrix text-black"
        style={{
          left: '29.53%',
          top: '75.14%',
          width: '18.07%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Описание, подробнее
         <br />
         раскрывающее заголовок.
        <br />
        Описание преимущества выбора Куриямы в качестве партнера по пчеловодству
      </p>

      {/* Right Top Subtitle - left 71.90%, top 36.27%, width 7.79%, height 2.91% */}
      <h3
        className="absolute z-10 font-ua-brand font-bold text-[#231F20]"
        style={{
          left: '71.90%',
          top: '36.27%',
          width: '18%',
          fontSize: FONT_SIZES.medium,
        }}
      >
        Заголовок
      </h3>

      {/* Right Top Text - left 71.91%, top 43.60%, width 18.07%, height 16.93% */}
      <p
        className="absolute z-10 font-glametrix text-black"
        style={{
          left: '71.91%',
          top: '43.60%',
          width: '18.07%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Описание, подробнее
         <br />
          раскрывающее заголовок.
        <br />
        Описание преимущества выбора Куриямы в качестве партнера по пчеловодству
      </p>

      {/* Right Bottom Subtitle - left 71.90%, top 67.81%, width 7.79%, height 2.91% */}
      <h3
        className="absolute z-10 font-ua-brand font-bold text-[#231F20]"
        style={{
          left: '71.90%',
          top: '67.81%',
          width: '18%',
          fontSize: FONT_SIZES.medium,
        }}
      >
        Заголовок
      </h3>

      {/* Right Bottom Text - left 71.91%, top 75.14%, width 18.07%, height 16.93% */}
      <p
        className="absolute z-10 font-glametrix text-black"
        style={{
          left: '71.91%',
          top: '75.14%',
          width: '18.07%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Описание, подробнее 
         <br />
        раскрывающее заголовок.
        <br />
        Описание преимущества выбора Куриямы в качестве партнера по пчеловодству
      </p>

    </section>
  );
};

export default BeekeepingSlide5;
