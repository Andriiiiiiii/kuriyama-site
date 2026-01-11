import React from 'react';
import { motion } from 'framer-motion';
import heroPhoto from '@/assets/visit/1-photo.png';
import heroBg from '@/assets/visit/1-background.png';
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
          className="w-full h-full object-fill"
        />
      </div>

            {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute z-10 font-['Glametrix'] text-foreground/50 whitespace-nowrap"
        style={{
          left: '8.43%',
          top: '12.67%',
          fontSize: FONT_SIZES.body
        }}
      >
        Главная/Посещение Куриямы
        </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
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
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
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
      </motion.p>

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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="hover:scale-105 transition-transform"
          style={{ width: '100%' }}
        >
          <SelectTariffButton width="100%" />
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute z-10 hover:opacity-80 transition-opacity"
        style={{
          left: '31.59%',
          top: '69.60%',
          width: '17.83%',
          height: '5.73%'
        }}
      >
        <img src={buttonAllActions} alt="Все активности" className="w-full h-full object-contain" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
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
      </motion.div>

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
