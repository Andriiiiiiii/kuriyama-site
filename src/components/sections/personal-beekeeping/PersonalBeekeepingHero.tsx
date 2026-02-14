import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import backgroundImage from '@/assets/1-background.png';
import rightImageBottom from '@/assets/personal-beekeeping/1-right.png';
import rightImageTop from '@/assets/personal-beekeeping/1-up.png';
import SelectTariffButton from '@/components/shared/SelectTariffButton';

const PersonalBeekeepingHero: React.FC = () => {
  return (
    <section className="relative z-20 w-full h-screen overflow-hidden bg-white">
      {/* Background Image - back 4 - 338:653 */}
      <div
        className="absolute"
        style={{
          left: '0%',
          top: '0%',
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Breadcrumbs - 338:611 */}
      <div
        className="absolute z-10 font-['Manrope'] text-[#2E261D] opacity-50"
        style={{
          left: '8.21%',
          top: '12.68%',
          fontSize: FONT_SIZES.small,
        }}
      >
        Главная/ Пчеловодство
      </div>

      {/* Title - 338:610 */}
      <h1
        className="absolute z-10 font-['UA-Brand'] font-bold text-[#2E261D] uppercase"
        style={{
          left: '8.14%',
          top: '24.03%',
          width: '55.6%',
          fontSize: FONT_SIZES.heading,
          lineHeight: 1.1,
          textAlign: 'left'
        }}
      >
        Личное<br />ПЧЕЛОВОДСТВО
      </h1>

      {/* Button - lead_button - 338:609 */}
      <div
        className="absolute z-20"
        style={{
          left: '7.93%',
          top: '54.34%',
          width: '15.24%',
          height: '29.24%'
        }}
      >
        <SelectTariffButton width="100%" />
      </div>

      {/* Description - 338:608 */}
      <div
        className="absolute z-10 text-[#2E261D]"
        style={{
          left: '24.22%',
          top: '76.64%',
          width: '18.96%',
          fontSize: FONT_SIZES.small,
        }}
      >
        Две строчки дополнительного описания подкрепляющего заголовок
      </div>

      {/* Image Top - b6115f69... - 338:606 */}
      <div
        className="absolute z-10"
        style={{
          left: '74.32%',
          top: '22.56%',
          width: '6.26%',
          height: '24.30%'
        }}
      >
        <img 
          src={rightImageTop} 
          alt="" 
          className="w-full h-full object-contain opacity-50" 
        />
      </div>

      {/* Image Right - image right block 1 - 338:607 */}
      <div
        className="absolute z-10"
        style={{
          left: '46.48%',
          top: '50.47%',
          width: '45.02%',
          height: '40.85%'
        }}
      >
        <img 
          src={rightImageBottom} 
          alt="" 
          className="w-full h-full object-cover" 
        />
      </div>
    </section>
  );
};

export default PersonalBeekeepingHero;
