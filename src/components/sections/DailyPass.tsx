import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '@/assets/visit/11-background.png';
import buttonBuy from '@/assets/visit/buy-button-2.svg';
import { FONT_SIZES } from '@/config/typography';

const DailyPass: React.FC = () => {
  return (
    <section className="relative w-screen overflow-hidden" style={{ height: '40vh' }}>
      {/* Background */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="absolute font-ua-brand text-white font-bold uppercase"
        style={{
          left: '8.3472%',
          top: '30%',
          height: '13.51vh',
          fontSize: FONT_SIZES.heading,
        }}
      >
        DAILY PASS.<br />
        ПАСЕКА
      </motion.h2>

      {/* Main text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute font-glametrix text-white"
        style={{
          left: '79.5%',
          top: '75%',
          width: '15.42vw',
          height: '2.85vh',
          fontSize: FONT_SIZES.body,
        }}
      >
        Пропуск на посещение на день со всеми активностями
      </motion.p>

      {/* Buy button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute hover:scale-105 transition-transform"
        style={{
          left: '76.49vw',
          top: '10.34vh',
          width: '15.21vw',
          height: '18.56vh',
        }}
      >
        <img src={buttonBuy} alt="Выбрать тариф" className="w-full h-full object-contain" />
      </motion.button>
    </section>
  );
};

export default DailyPass;
