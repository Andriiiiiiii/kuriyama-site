import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import smallRightImage from '@/assets/corporate-beekeeping/up1.png';
import largeRightImage from '@/assets/corporate-beekeeping/1-large-right.png';
import backgroundImage from '@/assets/corporate-beekeeping/back 1.png';

const CorporateBeekeepingHero: React.FC = () => {
  return (
    <section className="relative w-full h-layout overflow-hidden bg-white">
        {/* Background - Layer 'back 3' */}
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
            alt="Background"
            className="w-full h-full object-fill" 
            />
        </div>

        {/* Small Right Image - Layer 'b6115f69...' */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute z-10"
            style={{
                left: '74.38%',
                top: '21.34%',
                width: '6.25%',
                height: '22.98%'
            }}
        >
             <img src={smallRightImage} alt="" className="w-full h-full object-contain opacity-50" />
        </motion.div>

        {/* Big Right Image - Layer 'image right block 1' */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute z-10"
            style={{
                left: '46.59%',
                top: '47.73%',
                width: '44.93%',
                height: '38.64%'
            }}
        >
            <img src={largeRightImage} alt="" className="w-full h-full object-cover" />
        </motion.div>


         {/* Breadcrumbs - 'Главная/ Пчеловодство' */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute z-10 font-glametrix text-[#2E261D]/50 flex items-center"
            style={{
            left: '8.42%',
            top: '12.13%',
            width: '11.69%',
            height: '1.81%',
            fontSize: FONT_SIZES.body,
            }}
        >
            Главная / Пчеловодство
        </motion.div>

        {/* Title - 'Корпоративное ПЧЕЛОВОДСТВО' */}
        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute z-10 font-ua-brand font-bold text-[#2E261D] uppercase leading-none tracking-tight"
            style={{
            left: '8.83%',
            top: '22.78%',
            width: '58.68%',
            height: '21.56%',
            // Adjusting font size to match the visual weight
            fontSize: FONT_SIZES.heading, 
            }}
        >
            Корпоративное<br/>ПЧЕЛОВОДСТВО
        </motion.h1>

        {/* Lead Button - 'lead_button' */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute z-20"
            style={{
            left: '8.13%',
            top: '51.39%',
            width: '15.21%',
            height: '27.65%'
            }}
        >
            <SelectTariffButton width="100%" />
        </motion.div>

        {/* Description - 'Две строчки дополнительного...' */}
         <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute z-10 font-glametrix text-[#2E261D]"
            style={{
            left: '24.40%',
            top: '72.53%',
            width: '18.92%',
            height: '4.79%',
            fontSize: FONT_SIZES.body,
            lineHeight: 1.2
            }}
        >
           Две строчки дополнительного описания подкрепляющего заголовок
        </motion.p>

    </section>
  );
};

export default CorporateBeekeepingHero;
