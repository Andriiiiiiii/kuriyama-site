import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import leftPhoto from '@/assets/beekeeping/5_left_photo.png';
import rightPhoto from '@/assets/beekeeping/5_right_photo.png';

const BeekeepingSlide5: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      {/* Left Photo - left 7.51%, top 0.00%, width 19.81%, height 100.00% */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute z-10"
        style={{
          left: '7.51%',
          top: '5%',
          width: '19.81%',
          height: '90%'
        }}
      >
        <img
          src={leftPhoto}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right Photo (Middle) - left 50.66%, top 0.00%, width 19.81%, height 100.00% */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute z-10"
        style={{
          left: '50.66%',
          top: '5%',
          width: '19.81%',
          height: '90%'
        }}
      >
        <img
          src={rightPhoto}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Title - left 27.81%, top 10.28%, width 44.72%, height 11.04% */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute z-20 font-ua-brand font-bold uppercase text-center text-[#231F20]"
        style={{
          left: '27.81%',
          top: '10.28%',
          width: '44.72%',
          fontSize: FONT_SIZES.heading,
          lineHeight: 1
        }}
      >
        ПОЧЕМУ МЫ?
      </motion.h2>

      {/* CONTENT COLUMNS */}

      {/* Left Top Subtitle - left 29.52%, top 36.27%, width 7.79%, height 2.91% */}
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute z-10 font-ua-brand font-bold uppercase text-[#231F20]"
        style={{
          left: '29.52%',
          top: '36.27%',
          width: '18%', // Increased width to fit text potentially, keeping left anchor
          fontSize: FONT_SIZES.subheading,
        }}
      >
        Заголовок
      </motion.h3>

      {/* Left Top Text - left 29.53%, top 43.60%, width 18.07%, height 16.93% */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute z-10 font-glametrix text-black"
        style={{
          left: '29.53%',
          top: '43.60%',
          width: '18.07%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Описание, подробнее раскрывающее заголовок.
        <br />
        Описание преимущества выбора Куриямы в качестве партнера по пчеловодству
      </motion.p>

      {/* Left Bottom Subtitle - left 29.52%, top 67.81%, width 7.79%, height 2.91% */}
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute z-10 font-ua-brand font-bold uppercase text-[#231F20]"
        style={{
          left: '29.52%',
          top: '67.81%',
          width: '18%',
          fontSize: FONT_SIZES.subheading,
        }}
      >
        Заголовок
      </motion.h3>

      {/* Left Bottom Text - left 29.53%, top 75.14%, width 18.07%, height 16.93% */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute z-10 font-glametrix text-black"
        style={{
          left: '29.53%',
          top: '75.14%',
          width: '18.07%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Описание, подробнее раскрывающее заголовок.
        <br />
        Описание преимущества выбора Куриямы в качестве партнера по пчеловодству
      </motion.p>

      {/* Right Top Subtitle - left 71.90%, top 36.27%, width 7.79%, height 2.91% */}
      <motion.h3
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute z-10 font-ua-brand font-bold uppercase text-[#231F20]"
        style={{
          left: '71.90%',
          top: '36.27%',
          width: '18%',
          fontSize: FONT_SIZES.subheading,
        }}
      >
        Заголовок
      </motion.h3>

      {/* Right Top Text - left 71.91%, top 43.60%, width 18.07%, height 16.93% */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute z-10 font-glametrix text-black"
        style={{
          left: '71.91%',
          top: '43.60%',
          width: '18.07%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Описание, подробнее раскрывающее заголовок.
        <br />
        Описание преимущества выбора Куриямы в качестве партнера по пчеловодству
      </motion.p>

      {/* Right Bottom Subtitle - left 71.90%, top 67.81%, width 7.79%, height 2.91% */}
      <motion.h3
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute z-10 font-ua-brand font-bold uppercase text-[#231F20]"
        style={{
          left: '71.90%',
          top: '67.81%',
          width: '18%',
          fontSize: FONT_SIZES.subheading,
        }}
      >
        Заголовок
      </motion.h3>

      {/* Right Bottom Text - left 71.91%, top 75.14%, width 18.07%, height 16.93% */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute z-10 font-glametrix text-black"
        style={{
          left: '71.91%',
          top: '75.14%',
          width: '18.07%',
          fontSize: FONT_SIZES.body,
        }}
      >
        Описание, подробнее раскрывающее заголовок.
        <br />
        Описание преимущества выбора Куриямы в качестве партнера по пчеловодству
      </motion.p>

    </section>
  );
};

export default BeekeepingSlide5;
