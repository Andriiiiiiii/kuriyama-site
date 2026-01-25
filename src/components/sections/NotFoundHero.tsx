import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES, TYPOGRAPHY_CONFIG } from '@/config/typography';
import backgroundImage from '@/assets/404/back_404.png';
import image1 from '@/assets/404/1.svg';
import image2 from '@/assets/404/2.svg';
import HomeButton from '@/components/shared/HomeButton';

const NotFoundHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image - 251:389 */}
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
          className="w-full h-full object-cover"
        />
      </div>

      {/* Breadcrumb "Главная/ Пчеловодство" - 251:336 */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute z-10 font-['Glametrix'] text-foreground"
        style={{
          left: '8.4177%',
          top: '12.342%',
          width: '11.6851%',
          height: '1.8569%',
          fontSize: FONT_SIZES.body,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <a href="/" className="hover:underline">Главная</a>/ Пчеловодство
      </motion.div>

      {/* Main message "Вы попали на несуществующую страницу." - 251:334 */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute z-10 font-['Glametrix'] text-foreground text-center"
        style={{
          left: '41.6813%',
          top: '23.3041%',
          width: '21.0597%',
          height: '1.9429%',
          fontSize: FONT_SIZES.body,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Вы попали на несуществующую страницу.
      </motion.h2>

      {/* "Возможно вы искали:" - 251:335 */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute z-10 font-['UA-brand'] font-bold text-foreground uppercase text-center whitespace-nowrap"
        style={{
          left: '26.3542%',
          top: '29.7404%',
          width: '51.7912%',
          height: '4.8117%',
          fontSize: FONT_SIZES.subheading,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1
        }}
      >
        Возможно вы искали:
      </motion.h1>

      {/* Card 1 - Мероприятия */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute z-10"
        style={{
          left: '8.4722%',
          top: '36.4935%',
          width: '19.7917%',
          height: '38.8312%'
        }}
      >
        <img
          src={image1}
          alt="Мероприятия"
          className="w-full h-full object-fill"
        />
        <a
          href="/events"
          className="absolute font-['UA-brand'] font-bold text-foreground cursor-pointer"
          style={{
            left: '8%',
            top: '50%',
            fontSize: FONT_SIZES.medium
          }}
        >
          Мероприятия
        </a>
      </motion.div>

      {/* Card 2 - Посещения */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute z-10"
        style={{
          left: '29.6528%',
          top: '36.4935%',
          width: '19.7917%',
          height: '38.8312%'
        }}
      >
        <img
          src={image2}
          alt="Посещения"
          className="w-full h-full object-fill"
        />
        <a
          href="/visit"
          className="absolute font-['UA-brand'] font-bold text-foreground cursor-pointer"
          style={{
            left: '11%',
            top: '50%',
            fontSize: FONT_SIZES.medium
          }}
        >
          Посещения
        </a>
      </motion.div>

      {/* Card 3 - Личное пчеловодство */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute z-10"
        style={{
          left: '50.9028%',
          top: '36.4935%',
          width: '19.7917%',
          height: '38.8312%'
        }}
      >
        <img
          src={image1}
          alt="Личное пчеловодство"
          className="w-full h-full object-fill"
        />
        <a
          href="/personal-beekeeping"
          className="absolute font-['UA-brand'] font-bold text-foreground cursor-pointer"
          style={{
            left: '5%',
            top: '50%',
            fontSize: FONT_SIZES.medium,
            lineHeight: 1.2
          }}
        >
          Личное пчеловодство
        </a>
      </motion.div>

      {/* Card 4 - Корпоративное пчеловодство */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute z-10"
        style={{
          left: '71.9444%',
          top: '36.4935%',
          width: '19.7917%',
          height: '38.8312%'
        }}
      >
        <img
          src={image2}
          alt="Корпоративное пчеловодство"
          className="w-full h-full object-fill"
        />
        <a
          href="/beekeeping"
          className="absolute font-['UA-brand'] font-bold text-foreground cursor-pointer"
          style={{
            left: '5%',
            top: '50%',
            fontSize: FONT_SIZES.medium,
            lineHeight: 1.2
          }}
        >
          Корпоративное пчеловодство
        </a>
      </motion.div>

      {/* "или" - 251:333 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute z-10 font-['Glametrix'] text-foreground text-center"
        style={{
          left: '51.3264%',
          top: '80.3272%',
          width: '1.6817%',
          height: '0.9858%',
          fontSize: FONT_SIZES.body,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        или
      </motion.div>

      {/* Home Button - 251:338 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute z-20"
        style={{
          left: '17.4%',
          top: '85.1948%',
          width: '70%',
          height: '8.6%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <HomeButton />
      </motion.div>

      {/* Vector decorative lines - 251:346-352 */}
      {/* Vector 81 - horizontal top line */}
      <div
        className="absolute bg-primary"
        style={{
          left: '15.4167%',
          top: '17.7273%',
          width: '72.7083%',
          height: TYPOGRAPHY_CONFIG.lineStrokeWidth
        }}
      />

      {/* Vector 60 - vertical left line */}
      <div
        className="absolute bg-primary"
        style={{
          left: '15.3819%',
          top: '17.7922%',
          width: TYPOGRAPHY_CONFIG.lineStrokeWidth,
          height: '49.0909%'
        }}
      />

      {/* Vector 82 - vertical right line */}
      <div
        className="absolute bg-primary"
        style={{
          left: '88.0903%',
          top: '9.7403%',
          width: TYPOGRAPHY_CONFIG.lineStrokeWidth,
          height: '57.1429%'
        }}
      />

      {/* Vector 99 - horizontal middle line */}
      <div
        className="absolute bg-primary"
        style={{
          left: '15.4167%',
          top: '66.8182%',
          width: '72.7083%',
          height: TYPOGRAPHY_CONFIG.lineStrokeWidth
        }}
      />

      {/* Vector 83 - vertical bottom short line */}
      <div
        className="absolute bg-primary"
        style={{
          left: '52.1181%',
          top: '90.9091%',
          width: TYPOGRAPHY_CONFIG.lineStrokeWidth,
          height: '5.3247%'
        }}
      />

      {/* Vector 100 - horizontal bottom line */}
      <div
        className="absolute bg-primary"
        style={{
          left: '0%',
          top: '96.1688%',
          width: '52.1528%',
          height: TYPOGRAPHY_CONFIG.lineStrokeWidth
        }}
      />
    </section>
  );
};

export default NotFoundHero;
