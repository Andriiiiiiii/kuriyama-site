import React from 'react';
import heroBg from '@/assets/concept/slide1/гл экран фон 1.png';
import rect302 from '@/assets/concept/slide1/Rectangle 302.png';
import rect303 from '@/assets/concept/slide1/Rectangle 303.png';
import { FONT_SIZES } from '@/config/typography';

const ConceptHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image - 429:159 */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Breadcrumb - 429:161 */}
      <div
        className="absolute z-10 font-['Glametrix'] text-foreground/50 whitespace-nowrap"
        style={{
          left: '8.42%',
          top: '11.50%',
          fontSize: FONT_SIZES.body
        }}
      >
        Главная/ Концепция и команда
      </div>

      {/* Title - 429:162 */}
      <h1
        className="absolute z-10 font-['UA-brand'] font-bold text-foreground uppercase tracking-tight"
        style={{
          left: '8.83%',
          top: '24.34%',
          width: '41.71%',
          fontSize: FONT_SIZES.heading,
          lineHeight: '1.1'
        }}
      >
        концепция <br />
        и команда
      </h1>

      {/* Description - 429:163 */}
      <p
        className="absolute z-10 font-['Glametrix'] text-foreground"
        style={{
          left: '57.81%',
          top: '25.25%',
          width: '14.92%',
          fontSize: FONT_SIZES.body
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </p>

      {/* Ellipse - 429:164 */}
      <div
        className="absolute z-0 rounded-full border border-[#2E261D]/20"
        style={{
          left: '59.93%',
          top: '30.49%',
          width: '29.58%',
          height: '55.04%'
        }}
      />

       {/* Rectangle 302 - 429:166 */}
      <div
         className="absolute z-10"
         style={{
           left: '22.43%',
           top: '55.43%',
           width: '77.57%',
           height: '31.40%'
         }}
      >
         <img src={rect302} alt="" className="w-full h-full object-contain" />
      </div>

       {/* Rectangle 303 - 429:167 */}
      <div
         className="absolute z-20"
         style={{
           left: '64.79%',
           top: '40.57%',
           width: '19.79%',
           height: '34.88%'
         }}
      >
         <img src={rect303} alt="" className="w-full h-full object-contain" />
      </div>
    </section>
  );
};

export default ConceptHero;
