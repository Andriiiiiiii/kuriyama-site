import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import background from '@/assets/beekeeping/4_background.svg';
import centralPhoto from '@/assets/beekeeping/4_right_photo.svg';

const BeekeepingSlide4: React.FC = () => {
  return (
    <section className="relative w-full h-layout overflow-hidden">
      {/* Background - left 0.00%, top 19.00%, width 100.00%, height 57.00% */}
      <div
        className="absolute"
        style={{
          left: '0%',
          top: '19%',
          width: '100%',
          height: '57%',
          mixBlendMode: 'multiply'
        }}
      >
        <img
          src={background}
          alt=""
          className="w-full h-full object-cover"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      {/* Title - left 8.83%, top 30.98%, width 52.81%, height 27.50% */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight text-[#C65A32]"
        style={{
          left: '8.83%',
          top: '30.98%',
          width: '52.81%',
          fontSize: FONT_SIZES.heading,
          lineHeight: 1
        }}
      >
        Бесплатная
        <br />
        консультация
      </motion.h2>

      {/* Comment Text - left 8.38%, top 62.87%, width 25.98%, height 2.57% */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute z-10 font-['Glametrix'] text-foreground"
        style={{
          left: '8.38%',
          top: '62.87%',
          width: '25.98%',
          fontSize: FONT_SIZES.body,
          lineHeight: 1.4
        }}
      >
        Обсудим ваш случай и поделимся рекомендациями
      </motion.p>

      {/* Right Photo Group */}
      {/* Central Picture - left 71.88%, top 0.00%, width 21.60%, height 100.00% */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute z-10"
        style={{
          left: '67%',
          top: '0%',
          width: '33%',
          height: '100%',
          mixBlendMode: 'multiply'
        }}
      >
        <img
          src={centralPhoto}
          alt=""
          className="w-full h-full object-contain"
          style={{ mixBlendMode: 'multiply' }}
        />
      </motion.div>

      {/* Button - left 71.11%, top 34.30%, width 15.21%, height 35.27% */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute z-30"
        style={{
          left: '71.11%',
          top: '34.30%',
          width: '15.21%',
          height: '35.27%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <SelectTariffButton width="100%" onClick={() => {}} />
      </motion.div>
    </section>
  );
};

export default BeekeepingSlide4;
