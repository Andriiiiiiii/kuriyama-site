import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '@/assets/visit/11-background.png';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import { FONT_SIZES, TYPOGRAPHY_CONFIG } from '@/config/typography';

const DailyPass: React.FC = () => {
  const lineStroke = TYPOGRAPHY_CONFIG.lineStrokeWidth;
  const buttonWidth = '12vw';
  const buttonLeft = '83%';
  const buttonTop = '50%';

  return (
    <section className="relative w-screen overflow-hidden" style={{ height: '40vh' }}>
      {/* Background */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="absolute font-ua-brand text-white font-bold uppercase"
        style={{
          left: '8.3472%',
          top: '10%',
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
          left: '8.3472%',
          top: '75%',
          width: '15.42vw',
          height: '2.85vh',
          fontSize: FONT_SIZES.body,
        }}
      >
        Пропуск на посещение на день со всеми активностями
      </motion.p>

      {/* Buy button */}
      <div
        className="absolute"
        style={{
          left: buttonLeft,
          top: buttonTop,
          transform: 'translate(-50%, -50%)',
          width: buttonWidth,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hover:scale-105 transition-transform"
          style={{ width: '100%' }}
        >
          <SelectTariffButton width="100%" />
        </motion.div>
      </div>

      {/* Decorative guide lines */}
      <div
        className="absolute bg-primary"
        style={{
          left: '88.131%',
          top: buttonTop,
          width: buttonWidth,
          height: lineStroke,
          zIndex: 5,
        }}
      />
      <div
        className="absolute bg-primary"
        style={{
          left: buttonLeft,
          top: `calc(${buttonTop} + (${buttonWidth} * 0.43))`,
          width: lineStroke,
          height: `50vh`,
          zIndex: 5,
        }}
      />
    </section>
  );
};

export default DailyPass;
