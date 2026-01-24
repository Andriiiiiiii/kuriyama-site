import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '@/assets/beekeeping/1-background.png';
import beekeeperImage from '@/assets/beekeeping/1-image-beekeeper.png';
import frontRightImage from '@/assets/beekeeping/1-front-right-image.svg';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import { FONT_SIZES } from '@/config/typography';

const BeekeepingHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
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

      {/* Title - left 8.83%, top 18.05%, width 54.98%, height 8.33% */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute z-10 font-['UA-brand'] font-bold text-foreground uppercase tracking-tight"
        style={{
          left: '8.83%',
          top: '18.05%',
          width: '54.98%',
          height: '8.33%',
          fontSize: FONT_SIZES.heading
        }}
      >
        Пчеловодство
      </motion.h1>

      {/* Image Beekeeper - left 14.65%, top 10%, width 77.92%, height 65.41% */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute z-10"
        style={{
          left: '14.65%',
          top: '10%',
          width: '77.92%',
          height: '65.41%'
        }}
      >
        <img
          src={beekeeperImage}
          alt="Пчеловод"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Front Right Image - left 71.88%, top 26.94%, width 21.60%, height 73.06% */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute z-10"
        style={{
          left: '71.88%',
          top: '26.94%',
          width: '21.60%',
          height: '73.06%',
          mixBlendMode: 'multiply'
        }}
      >
        <img
          src={frontRightImage}
          alt="Декоративный элемент"
          className="w-full h-full object-contain"
          style={{ mixBlendMode: 'multiply' }}
        />
      </motion.div>

      {/* Select Tariff Button - left 7.29%, top 31.29% */}
      <div
        className="absolute z-20"
        style={{
          left: '7.29%',
          top: '31.29%',
          width: '15.21%',
          height: '25.76%'
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
          className="w-full h-full"
        >
          <SelectTariffButton width="100%" />
        </motion.div>
      </div>

      {/* Additional description text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute z-10 font-['Glametrix'] text-foreground"
        style={{
          left: '45%',
          top: '70%',
          width: '35%',
          fontSize: FONT_SIZES.body
        }}
      >
        Познакомьтесь с традиционными методами<br/>
        пчеловодства и попробуйте натуральный мёд
      </motion.p>
    </section>
  );
};

export default BeekeepingHero;
