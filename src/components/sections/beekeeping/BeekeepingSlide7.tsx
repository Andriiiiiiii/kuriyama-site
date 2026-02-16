import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import background from '@/assets/beekeeping/4_background.svg';
import rightPhoto from '@/assets/beekeeping/7-slide_right_photo.webp';

const BeekeepingSlide7: React.FC = () => {
  return (
    <section 
      className="relative w-full overflow-visible bg-[#EFE3D6]"
      style={{ 
        height: '40vh', // Setting a fixed height since background image is gone
        marginBottom: '-7vh' // Allow next slide to overlap
      }}
    >
      {/* Horizontal Orange Line */}
      <div 
        className="absolute top-0 left-0 w-full bg-[#C65A32]"
        style={{ height: 'var(--line-thickness)', zIndex: 0 }}
      />

      {/* Title */}
      <h2
        className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight text-[#C65A32]"
        style={{
          left: '5%',
          top: '10%', // Relative to the image height directly
          width: '54%',
          fontSize: FONT_SIZES.heading,
          lineHeight: 1
        }}
      >
        ПРЕДЛОЖЕНИЕ
        <br />
        О СКИДКЕ
      </h2>

      {/* Comment Text */}
      <p
        className="absolute z-10 font-['Glametrix'] text-foreground"
        style={{
          left: '5%',
          top: '70%',
          width: '25.98%',
          fontSize: FONT_SIZES.body,
          lineHeight: 1.4
        }}
      >
        Обсудим ваш случай и поделимся рекомендациями
      </p>

      {/* Right Photo */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          right: '0',
          top: '-15%', // Moved up significantly to overlap previous slide
          width: '44%', // Constrained width to prevent horizontal scroll
          height: '225%' // Increased height to allow for the shift
        }}
      >
        <img
          src={rightPhoto}
          alt=""
          className="w-full h-full object-contain object-right-top"
        />
      </div>
      
      {/* Button */}
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

export default BeekeepingSlide7;
