import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import backgroundImage from '@/assets/1-background.png';
import rightImageBottom from '@/assets/personal-beekeeping/1-right-image.png';
import rightImageTop from '@/assets/personal-beekeeping/1-up-image.png';
import SelectTariffButton from '@/components/shared/SelectTariffButton';

const PersonalBeekeepingHero: React.FC = () => {
  return (
    <section className="relative w-full h-layout overflow-hidden">
      {/* Background Image - 241:575 */}
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

      {/* Tag "Личное" - 240:533 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute z-10 font-['Glametrix'] text-foreground bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full"
        style={{
          left: '8.4176%',
          top: '11.8132%',
          width: '11.6851%',
          height: '1.7962%',
          fontSize: FONT_SIZES.body,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Личное
      </motion.div>

      {/* Title "Личное пчеловодство" - 240:532 */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute z-10 font-['UA-brand'] font-bold text-foreground uppercase tracking-tight"
        style={{
          left: '8.3333%',
          top: '22.5377%',
          width: '55.4764%',
          height: '21.4573%',
          fontSize: FONT_SIZES.heading,
          lineHeight: 1
        }}
      >
        Личное<br/>пчеловодство
      </motion.h1>

      {/* Select Tariff Button (lead_button) - 240:531 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute z-20"
        style={{
          left: '8.125%',
          top: '51.005%',
          width: '15.2057%',
          height: '27.5126%'
        }}
      >
        <SelectTariffButton width="100%" />
      </motion.div>

      {/* Description Text - 240:530 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute z-10 font-['Glametrix'] text-foreground"
        style={{
          left: '24.4056%',
          top: '72.0403%',
          width: '18.9234%',
          height: '4.7693%',
          fontSize: FONT_SIZES.body,
          lineHeight: 1.4
        }}
      >
        Заботьтесь о своём улье и получайте свежий мёд
      </motion.p>

      {/* Right Image Bottom - 240:529 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute z-10"
        style={{
          left: '46.5972%',
          top: '47.3618%',
          width: '44.9306%',
          height: '38.4422%'
        }}
      >
        <img
          src={rightImageBottom}
          alt="Пчеловодство"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Right Image Top - 240:528 */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute z-10"
        style={{
          left: '74.375%',
          top: '21.1055%',
          width: '6.25%',
          height: '22.8643%'
        }}
      >
        <img
          src={rightImageTop}
          alt="Декоративный элемент"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </section>
  );
};

export default PersonalBeekeepingHero;
