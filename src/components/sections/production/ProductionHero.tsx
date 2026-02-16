import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/production/1slide-image.webp';
import backgroundImage from '@/assets/1-background.webp';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import { FONT_SIZES } from '@/config/typography';

const ProductionHero: React.FC = () => {
  return (
    <section className="relative w-full h-layout overflow-hidden bg-background">
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
          src={backgroundImage}
          alt=""
          className="w-full h-full object-fill"
        />
      </div>

      {/* Breadcrumb - left 8.42%, top 11.93% */}
      <div
        className="absolute z-10 font-['Glametrix'] text-foreground/50 whitespace-nowrap"
        style={{
          left: '8.42%',
          top: '11.93%',
          fontSize: FONT_SIZES.body
        }}
      >
        Главная/Продукция
      </div>

      {/* Description - left 9.67%, top 20.68% */}
      <p
        className="absolute z-10 font-['Glametrix'] text-foreground"
        style={{
          left: '9.67%',
          top: '20.68%',
          width: '26.77%',
          fontSize: FONT_SIZES.body,
          lineHeight: 1.2
        }}
      >
        Сувениры и продукция с Куриямы.<br/>
        Две строчки дополнительного описания подкрепляющего заголовок
      </p>

      {/* Title - left 9.67%, top 28.31% */}
      <h1
        className="absolute z-10 font-['UA-brand'] font-bold text-foreground uppercase tracking-tight"
        style={{
          left: '9.67%',
          top: '28.31%',
          width: '41.18%',
          fontSize: FONT_SIZES.heading
        }}
      >
        Продукция
      </h1>

      {/* Select Tariff Button - left 70.04%, top 24.87%, width 15.21% */}
      <div
        className="absolute z-10"
        style={{
          left: '77.65%', // Centered horizontally: 70.04% + (15.21% / 2)
          top: '38.63%', // Centered vertically: 24.87% + (27.51% / 2) -> Assuming standard button size
          // Using the provided bounding box center for absolute positioning might be safer if the component handles centering
          // JSON says "lead_button" box is: L:70.04%, T:24.87%, W:15.21%, H:27.51%
          // We can use the left/top of the box and let the width scale
          transform: 'translate(-50%, -50%)',
          width: '15.21%'
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

      {/* Main Image - left 8.33%, top 39.57%, width 83.39%, height 41.33% */}
      <div
        className="absolute"
        style={{
          left: '8.33%',
          top: '39.57%',
          width: '83.39%',
          height: '41.33%',
        }}
      >
        <img
          src={heroImage}
          alt="Наша продукция"
          className="w-full h-full object-cover shadow-2xl"
        />
      </div>
    </section>
  );
};

export default ProductionHero;
