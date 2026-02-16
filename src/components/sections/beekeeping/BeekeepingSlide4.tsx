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
          className="w-full  object-cover"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      {/* Title - left 8.83%, top 30.98%, width 52.81%, height 27.50% */}
      <h2
        className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight text-[#C65A32]"
        style={{
          left: '8.83%',
          top: '30.98%',
          width: '100%',
          fontSize: FONT_SIZES.heading,
          lineHeight: 2
        }}
      >
        Бесплатная
        <br />
        консультация
      </h2>

      {/* Comment Text - left 8.38%, top 62.87%, width 25.98%, height 2.57% */}
      <p
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
      </p>

      {/* Right Photo Group removed as per request */}
      
      {/* Button - left 71.11%, top 34.30%, width 15.21%, height 35.27% */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute z-30"
        style={{
           left: '78%',
          top: '30%',
          width: '15.21%',
          height: '40%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <SelectTariffButton width="100%" />
      </motion.div>
    </section>
  );
};

export default BeekeepingSlide4;
