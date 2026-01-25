import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import leftBackImage from '@/assets/visit/14-left-back-image.png';
import rightBackImage from '@/assets/visit/14-right-back-image.png';
import visitButton from '@/assets/visit/visit-button.svg';

const Tariffs: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      <div className="absolute inset-0">
        {/* 14 Title (1:125) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="absolute font-ua-brand text-foreground font-bold uppercase"
          style={{
            left: '7.8900%',
            top: '7.5200%',
            width: '27.9900%',
            height: '5.8400%',
            fontSize: FONT_SIZES.heading,
          }}
        >
          тарифы
        </motion.h1>

        {/* Left Block */}
        {/* 14 left back image (37:521) */}
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          src={leftBackImage}
          alt=""
          className="absolute object-contain"
          style={{
            left: '23.4700%',
            top: '12.1500%',
            width: '26.1100%',
            height: '70.9500%',
          }}
        />

        {/* 14 text 1 (group) - Left activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute"
          style={{
            left: '28.3%',
            top: '27.5%',
            width: '19.4400%',
          }}
        >
          {/* Прогулка по лесу (1:336) */}
          <h3
            className="font-glametrix text-foreground font-bold"
            style={{
              fontSize: FONT_SIZES.subheading,
              marginBottom: '0px',
            }}
          >
            Прогулка по лесу
          </h3>

          {/* Небольшое описание активности... (left #1) (1:339) */}
          <p
            className="font-glametrix text-foreground"
            style={{
              fontSize: FONT_SIZES.body,
              marginBottom: '20px',
            }}
          >
            Небольшое описание активности<br />в две строчки
          </p>

          {/* Сад камней (1:337) */}
          <h3
            className="font-glametrix text-foreground font-bold"
            style={{
              fontSize: FONT_SIZES.subheading,
              marginBottom: '0px',
            }}
          >
            Сад камней
          </h3>

          {/* Небольшое описание активности... (left #2) (1:340) */}
          <p
            className="font-glametrix text-foreground"
            style={{
              fontSize: FONT_SIZES.body,
              marginBottom: '20px',
            }}
          >
            Небольшое описание активности<br />в две строчки
          </p>

          {/* Фотоссесия в японской тематике (1:338) */}
          <h3
            className="font-glametrix text-foreground font-bold"
            style={{
              fontSize: FONT_SIZES.subheading,
              marginBottom: '0px',
              lineHeight: '1.1',
            }}
          >
            Фотоссесия в японской<br />тематике
          </h3>

          {/* Небольшое описание активности... (left #3) (1:341) */}
          <p
            className="font-glametrix text-foreground"
            style={{
              fontSize: FONT_SIZES.body,
            }}
          >
            Небольшое описание активности<br />в две строчки
          </p>
        </motion.div>

        {/* 14 left text 1 (1:310) - DAYPASS. */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="absolute font-ua-brand text-foreground font-bold uppercase"
          style={{
            left: '8.4800%',
            top: '23.3500%',
            width: '13.0600%',
            height: '2.6400%',
            fontSize: FONT_SIZES.subheading,
          }}
        >
          DAYPASS.
        </motion.div>

        {/* 14 left text 2 (1:308) - Vertical ЯПОНИЯ */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute"
          style={{
            left: '18.0%',
            top: '27.6%',
            width: '2.0700%',
            height: '22.7200%',
          }}
        >
          <div className="flex flex-col items-center justify-start h-full">
            {'ЯПОНИЯ'.split('').map((letter, i) => (
              <span
                key={i}
                className="font-ua-brand text-foreground font-bold uppercase"
                style={{ fontSize: FONT_SIZES.subheading }}
              >
                {letter}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Block */}
        {/* 14 right back image (37:523) */}
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.25 }}
          src={rightBackImage}
          alt=""
          className="absolute object-contain"
          style={{
            left: '48.5600%',
            top: '13.2600%',
            width: '26.1100%',
            height: '69.8400%',
          }}
        />

        {/* 14 text 2 (group) - Right activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute"
          style={{
            left: '53.5%',
            top: '37%',
            width: '19.4400%',
          }}
        >
          {/* Апи-домики (1:71) */}
          <h3
            className="font-glametrix text-foreground font-bold"
            style={{
              fontSize: FONT_SIZES.subheading,
              marginBottom: '0px',
            }}
          >
            Апи-домики
          </h3>

          {/* Небольшое описание активности... (right #1) (1:74) */}
          <p
            className="font-glametrix text-foreground"
            style={{
              fontSize: FONT_SIZES.body,
              marginBottom: '20px',
            }}
          >
            Небольшое описание активности<br />в две строчки
          </p>

          {/* Медоносное поле (1:72) */}
          <h3
            className="font-glametrix text-foreground font-bold"
            style={{
              fontSize: FONT_SIZES.subheading,
              marginBottom: '0px',
            }}
          >
            Медоносное поле
          </h3>

          {/* Небольшое описание активности... (right #2) (1:75) */}
          <p
            className="font-glametrix text-foreground"
            style={{
              fontSize: FONT_SIZES.body,
              marginBottom: '20px',
            }}
          >
            Небольшое описание активности<br />в две строчки
          </p>

          {/* Фотоссесия с пчелами (1:73) */}
          <h3
            className="font-glametrix text-foreground font-bold"
            style={{
              fontSize: FONT_SIZES.subheading,
              marginBottom: '0px',
            }}
          >
            Фотоссесия с пчелами
          </h3>

          {/* Небольшое описание активности... (right #3) (1:76) */}
          <p
            className="font-glametrix text-foreground"
            style={{
              fontSize: FONT_SIZES.body,
            }}
          >
            Небольшое описание активности<br />в две строчки
          </p>
        </motion.div>

        {/* 14 right text 1 (1:311) - DAYPASS. */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute font-ua-brand text-foreground font-bold uppercase"
          style={{
            left: '77.3700%',
            top: '55.6400%',
            width: '13.0600%',
            height: '2.6400%',
            fontSize: FONT_SIZES.subheading,
          }}
        >
          DAYPASS.
        </motion.div>

        {/* 14 right text 2 (1:309) - Vertical ПАСЕКА */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="absolute"
          style={{
            left: '77.3%',
            top: '59.8%',
            width: '1.9100%',
            height: '22.7200%',
          }}
        >
          <div className="flex flex-col items-center justify-start h-full">
            {'ПАСЕКА'.split('').map((letter, i) => (
              <span
                key={i}
                className="font-ua-brand text-foreground font-bold uppercase"
                style={{ fontSize: FONT_SIZES.subheading }}
              >
                {letter}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 14 button (1:312) - Visit button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute hover:scale-105 transition-transform"
          style={{
            left: '61.9400%',
            top: '75.6100%',
            width: '12.4300%',
            height: '18.1200%',
          }}
        >
          <img src={visitButton} alt="Посетить Курияму" className="w-full h-full object-contain" />
        </motion.button>
      </div>
    </section>
  );
};

export default Tariffs;
