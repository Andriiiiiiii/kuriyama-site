import React from 'react';
import backgroundImage from '@/assets/photo-video/1-bg.webp';
import leftImage from '@/assets/photo-video/1-left.webp';
import middleImage from '@/assets/photo-video/1-middle.webp';
import rightImage from '@/assets/photo-video/1-right.webp';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import { FONT_FAMILIES, FONT_SIZES } from '@/config/typography';

const PhotoVideoHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image - z-0 */}
      <div
        className="absolute"
        style={{
          left: '0%',
          top: '0%',
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Breadcrumbs "Главная/ Фото и видео" - z-10
          x: 121 / 1440 = 8.40%
          y: 95 / 796 = 11.93%
      */}
      <div
        className="absolute z-10 tracking-tight"
        style={{
          left: '8.4%',
          top: '12%', 
          color: 'rgba(46, 38, 29, 0.5)',
          fontSize: FONT_SIZES.body,
          fontFamily: FONT_FAMILIES.body
        }}
      >
        Главная/ Фото и видео
      </div>

      {/* Title "Фото и видео" - z-10
          x: 124 / 1440 = 8.61%
          y: 197 / 796 = 24.79%
          w: 733 / 1440 = 50.9%
      */}
      <h1
        className="absolute z-10 font-bold text-foreground tracking-tight"
        style={{
          left: '8.6%',
          top: '24.8%',
          width: '50.9%',
          fontSize: FONT_SIZES.heading,
          lineHeight: '1.1',
          color: '#2E261D',
          fontFamily: FONT_FAMILIES.heading
        }}
      >
        Фото и видео
      </h1>

      {/* Description "Две строчки..." - z-10
          x: 325 / 1440 = 22.57%
          y: 311 / 796 = 39.13%
          w: 272 / 1440 = 18.9%
      */}
      <p
        className="absolute z-10 tracking-tight"
        style={{
          left: '22.6%',
          top: '39.1%',
          width: '18.9%', 
          fontSize: FONT_SIZES.body,
          color: '#2E261D',
          fontFamily: FONT_FAMILIES.body
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </p>

      {/* Select Tariff Button (lead_button) - z-20
          x: 117 / 1440 = 8.125%
          y: 306 / 796 = 38.44%
          w: 219 / 1440 = 15.2%
          h: 219 / 796 = 27.5%
      */}
      <div
        className="absolute z-20"
        style={{
          left: '8.1%',
          top: '38.4%',
          width: '15.2%', 
          height: '27.5%' 
        }}
      >
        <div className="w-full h-full">
          <SelectTariffButton width="100%" text="Оставить заявку" />
        </div>
      </div>

      {/* Image 3 (Left) - "1-left" / "image right block 3" - z-10
          x: 364 / 1440 = 25.28%
          y: 439 / 796 = 55.15%
          w: 242 / 1440 = 16.8%
          h: 252 / 796 = 31.6%
      */}
      <div
        className="absolute z-10"
        style={{
          left: '25.3%',
          top: '55.1%',
          width: '16.8%', 
          height: '31.6%'
        }}
      >
        <img
          src={leftImage}
          alt="Фото 1"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 2 (Middle) - "1-middle" / "image right block 2" - z-10
          x: 626 / 1440 = 43.47%
          y: 306 / 796 = 38.44%
          w: 341 / 1440 = 23.68%
          h: 315 / 796 = 39.57%
      */}
      <div
        className="absolute z-10"
        style={{
          left: '43.5%',
          top: '38.4%',
          width: '23.7%', 
          height: '39.6%'
        }}
      >
        <img
          src={middleImage}
          alt="Фото 2"
          className="w-full h-full object-cover"
        />
      </div>

       {/* Image 1 (Right) - "1-right" / "image right block 1" - z-10
          x: 987 / 1440 = 68.54%
          y: 177 / 796 = 22.24%
          w: 333 / 1440 = 23.1%
          h: 369 / 796 = 46.4%
      */}
      <div
        className="absolute z-10"
        style={{
          left: '68.5%',
          top: '22.2%',
          width: '23.1%', 
          height: '46.4%'
        }}
      >
        <img
          src={rightImage}
          alt="Фото 3"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default PhotoVideoHero;
