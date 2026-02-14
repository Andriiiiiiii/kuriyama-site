import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '@/assets/photo-video/1-bg.png';
import leftImage from '@/assets/photo-video/1-left.png';
import middleImage from '@/assets/photo-video/1-middle.png';
import rightImage from '@/assets/photo-video/1-right.png';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import { FONT_SIZES } from '@/config/typography';

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute z-10 font-['Manrope'] tracking-tight"
        style={{
          left: '8.4%',
          top: '12%', 
          color: 'rgba(46, 38, 29, 0.5)',
          fontSize: FONT_SIZES.small
        }}
      >
        Главная/ Фото и видео
      </motion.div>

      {/* Title "Фото и видео" - z-10
          x: 124 / 1440 = 8.61%
          y: 197 / 796 = 24.79%
          w: 733 / 1440 = 50.9%
      */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute z-10 font-['UA-brand'] font-bold text-foreground tracking-tight"
        style={{
          left: '8.6%',
          top: '24.8%',
          width: '50.9%',
          fontSize: FONT_SIZES.heading,
          lineHeight: '1.1',
          color: '#2E261D'
        }}
      >
        Фото и видео
      </motion.h1>

      {/* Description "Две строчки..." - z-10
          x: 325 / 1440 = 22.57%
          y: 311 / 796 = 39.13%
          w: 272 / 1440 = 18.9%
      */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute z-10 font-['Manrope'] tracking-tight"
        style={{
          left: '22.6%',
          top: '39.1%',
          width: '18.9%', 
          fontSize: FONT_SIZES.small,
          color: '#2E261D'
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </motion.p>

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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full h-full"
        >
          <SelectTariffButton width="100%" text="Оставить заявку" />
        </motion.div>
      </div>

      {/* Image 3 (Left) - "1-left" / "image right block 3" - z-10
          x: 364 / 1440 = 25.28%
          y: 439 / 796 = 55.15%
          w: 242 / 1440 = 16.8%
          h: 252 / 796 = 31.6%
      */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
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
      </motion.div>

      {/* Image 2 (Middle) - "1-middle" / "image right block 2" - z-10
          x: 626 / 1440 = 43.47%
          y: 306 / 796 = 38.44%
          w: 341 / 1440 = 23.68%
          h: 315 / 796 = 39.57%
      */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
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
      </motion.div>

       {/* Image 1 (Right) - "1-right" / "image right block 1" - z-10
          x: 987 / 1440 = 68.54%
          y: 177 / 796 = 22.24%
          w: 333 / 1440 = 23.1%
          h: 369 / 796 = 46.4%
      */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
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
      </motion.div>

    </section>
  );
};

export default PhotoVideoHero;
