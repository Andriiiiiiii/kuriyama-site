import React from 'react';
import heroPhoto from '@/assets/visit/1-photo.png';
import heroBg from '@/assets/1-background.png';
import buttonAllActions from '@/assets/visit/1-button-all-actions.svg';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import { FONT_SIZES, TYPOGRAPHY_CONFIG } from '@/config/typography';

const HeroVisit = () => {
  const selectButtonWidth = '15vw'; // single source for button size
  const selectButtonLeft = '22.42%';
  const selectButtonTop = '72.5%';

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{ '--select-btn-w': selectButtonWidth } as React.CSSProperties}
    >
      {/* Background Image */}
      <div
        className="absolute"
        style={{
          left: '0%',
          top: '0%',
          width: '100%',
          height: '100%'
        }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

            {/* Breadcrumb */}
      <div
        className="absolute z-10 font-['Glametrix'] text-foreground/50 whitespace-nowrap"
        style={{
          left: '8.43%',
          top: '12.67%',
          fontSize: FONT_SIZES.body
        }}
      >
        Главная/Посещение Куриямы
        </div>

      <h1
        className="absolute z-10 font-['UA-brand'] font-bold text-foreground uppercase tracking-tight"
        style={{
          left: '8.84%',
          top: '22.45%',
          width: '42.61%',
          fontSize: FONT_SIZES.heading,
          lineHeight: '1.1'
        }}
      >
        Посещение<br/>
        Куриямы
      </h1>

      {/* Description */}
      <p
        className="absolute z-10 font-['Glametrix'] text-foreground"
        style={{
          left: '33.37%',
          top: '55%',
          width: '35%',
          fontSize: FONT_SIZES.body
        }}
      >
        Посетите пасеку Курияма - прогулки, отдых,<br/>
        знакомство с пчелами
      </p>

      {/* Select Tariff Button */}
      <div
        className="absolute z-10"
        style={{
          left: selectButtonLeft,
          top: selectButtonTop,
          transform: 'translate(-50%, -50%)',
          width: selectButtonWidth
        }}
      >
        <div
          className="hover:scale-105 transition-transform"
          style={{ width: '100%' }}
        >
          <SelectTariffButton width="100%" />
        </div>
      </div>

      <button
        className="absolute z-10 hover:opacity-80 transition-opacity"
        style={{
          left: '31.59%',
          top: '69.60%',
          width: '17.83%',
          height: '5.73%'
        }}
      >
        <img src={buttonAllActions} alt="Все активности" className="w-full h-full object-contain" />
      </button>

      <div
        className="absolute z-10"
        style={{
          left: '60.67%',
          top: '12.93%',
          width: '39.33%',
          height: '77.87%'
        }}
      >
        <img
          src={heroPhoto} alt="Пасека Курияма"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Lines - толщина относительно ширины экрана */}
      {/* Верхняя горизонтальная линия (опущена на 10%) - на переднем плане */}
      <div
        className="absolute bg-primary"
        style={{
          left: '22.38%',
          top: '19.67%',
          width: '77.6%',
          height: TYPOGRAPHY_CONFIG.lineStrokeWidth,
          zIndex: 20
        }}
      />

      {/* Левая вертикальная линия */}
      <div
        className="absolute bg-primary"
        style={{
          left: '22.38%',
          top: '19.67%',
          width: TYPOGRAPHY_CONFIG.lineStrokeWidth,
          height: '81%',
          zIndex: 8
        }}
      />

      <div
        className="absolute bg-primary"
        style={{
          left: '0%',
          top: '72.5%',
          width: '15.9%',
          height: TYPOGRAPHY_CONFIG.lineStrokeWidth,
          zIndex: 10
        }}
      />

      <div
        className="absolute bg-primary"
        style={{
          left: '28.9%',
          top: '72.5%',
          width: '2.85%',
          height: TYPOGRAPHY_CONFIG.lineStrokeWidth,
          zIndex: 10
        }}
      />

      <div
        className="absolute bg-primary"
        style={{
          left: '49.22%',
          top: '72.5%',
          width: '11.45%',
          height: TYPOGRAPHY_CONFIG.lineStrokeWidth,
          zIndex: 10
        }}
      />

    </section>
  );
};

export default HeroVisit;
