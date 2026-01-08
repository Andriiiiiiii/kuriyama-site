import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '@/assets/beekeeping/1-background.png';
import beekeeperImage from '@/assets/beekeeping/1-image-beekeeper.png';
import frontRightImage from '@/assets/beekeeping/1-front-right-image.svg';
import buttonContact from '@/assets/beekeeping/1-button-contact.svg';
import buttonRate from '@/assets/beekeeping/1-button-rate.svg';
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

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute z-20 flex items-center justify-between"
        style={{
          left: '8.14%',
          top: '3.47%',
          width: '64.47%',
          height: '6%'
        }}
      >
        {/* Logo - left 8.29%, top 3.71%, width 1.88% */}
        <div
          className="absolute font-['Glametrix'] text-foreground"
          style={{
            left: '0.2%',
            top: '22%',
            width: '2.9%',
            height: '62%',
            fontSize: FONT_SIZES.subheading
          }}
        >
          K
        </div>

        {/* Nav Links */}
        <div
          className="absolute flex items-center font-['Glametrix'] text-foreground"
          style={{
            left: '23.4%',
            top: '48%',
            gap: '50px',
            fontSize: FONT_SIZES.body
          }}
        >
          <a href="/visit" className="hover:text-primary transition-colors">Агротуризм</a>
          <a href="/beekeeping" className="text-primary font-semibold transition-colors">Пчеловодство</a>
          <a href="#products" className="hover:text-primary transition-colors">Продукция</a>
          <a href="#history" className="hover:text-primary transition-colors">История</a>
          <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
          <a href="#resources" className="hover:text-primary transition-colors">Ресурсы</a>
        </div>
      </motion.nav>

      {/* Contact Button - left 83.26%, top 3.41%, width 8.40%, height 5.06% */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute z-20 hover:opacity-90 transition-opacity"
        style={{
          left: '83.26%',
          top: '3.41%',
          width: '8.40%',
          height: '5.06%'
        }}
      >
        <img src={buttonContact} alt="Связаться" className="w-full h-full object-contain" />
      </motion.button>

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

      {/* Rate Button - left 7.29%, top 31.29%, width 15.21%, height 25.76% */}
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute z-20 hover:scale-105 transition-transform"
        style={{
          left: '7.29%',
          top: '31.29%',
          width: '15.21%',
          height: '25.76%'
        }}
      >
        <img
          src={buttonRate}
          alt="Оценить пасеку"
          className="w-full h-full object-contain"
        />
      </motion.button>

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
