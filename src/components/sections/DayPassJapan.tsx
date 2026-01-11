import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import forestImage from '@/assets/visit/4-image-1.png';
import gardenImage from '@/assets/visit/4-image-2.png';
import photoshootImage from '@/assets/visit/4-image-3.png';
import calligraphyImage from '@/assets/visit/4-central-image.svg';

const DayPassJapan: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-white overflow-hidden"
    >
      {/* 4 line 2 - vertical */}
      <div 
        className="absolute bg-primary z-[20]"
        style={{
          left: '56.08%',
          top: '0%',
          width: '1px',
          height: '26.42%'
        }}
      />

      {/* title 1 - DAY PASS */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute font-['UA-brand'] font-bold text-primary uppercase"
        style={{
          left: '7.9%',
          top: '1.5%',
          width: '30.03%',
          height: '5.99%',
          fontSize: FONT_SIZES.heading
        }}
      >
        DAY PASS
      </motion.h2>

      {/* subtitle 1 */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '8.24%',
          top: '13.14%',
          width: '26.54%',
          height: '3.83%',
          fontSize: FONT_SIZES.body
        }}
      >
        Описание, чуть подробнее раскрывающее заголовок. Про активности и атмосферу.
      </motion.p>

      {/* subtitle 2 (above title 2) */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute font-['Glametrix'] text-foreground text-right"
        style={{
          left: '64.84%',
          top: '3.80%',
          width: '26.54%',
          height: '3.83%',
          fontSize: FONT_SIZES.body
        }}
      >
        Описание, чуть подробнее раскрывающее заголовок. Про активности и атмосферу.
      </motion.p>

      {/* title 2 - ЯПОНИЯ */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="absolute font-['UA-brand'] font-bold text-primary uppercase text-right"
        style={{
          left: '63.63%',
          top: '11.44%',
          width: '28.05%',
          height: '5.95%',
          fontSize: FONT_SIZES.heading
        }}
      >
        ЯПОНИЯ
      </motion.h2>

      {/* Left object - 4 image 1 */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute"
        style={{
          left: '8.33%',
          top: '21.45%',
          width: '40.97%',
          height: '56.25%'
        }}
      >
        <img 
          src={forestImage} 
          alt="Лесная прогулка" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* small title left */}
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '8.37%',
          top: '79.57%',
          height: '2.05%',
          fontSize: FONT_SIZES.subheading
        }}
      >
        Лесная прогулка
      </motion.h3>

      {/* small subtitle left */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '8.37%',
          top: '84.56%',
          width: '21.02%',
          height: '3.83%',
          fontSize: FONT_SIZES.body
        }}
      >
        Описание, чуть подробнее раскрывающее заголовок. Про активности и атмосферу.
      </motion.p>

      {/* 4 button more left */}
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bg-primary text-primary-foreground rounded-full font-['Glametrix'] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        style={{
          left: '39.24%',
          top: '84.93%',
          width: '10.07%',
          height: '3.72%',
          fontSize: FONT_SIZES.body
        }}
      >
        Подробнее
        <span>›</span>
      </motion.button>

      {/* 4 central image */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute"
        style={{
          left: '51.60%',
          top: '27.07%',
          width: '10.00%',
          height: '27.83%'
        }}
      >
        <img 
          src={calligraphyImage} 
          alt="Каллиграфия" 
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Right object 1 - 4 image 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute"
        style={{
          left: '64.79%',
          top: '27.77%',
          width: '26.87%',
          height: '16.47%'
        }}
      >
        <img 
          src={gardenImage} 
          alt="Сад камней" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* small title right 1 */}
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '64.85%',
          top: '45.98%',
          height: '1.90%',
          fontSize: FONT_SIZES.subheading
        }}
      >
        Сад камней
      </motion.h3>

      {/* small subtitle right 1 */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '64.84%',
          top: '50.10%',
          width: '26.34%',
          height: '1.52%',
          fontSize: FONT_SIZES.body
        }}
      >
        Описание, чуть подробнее раскрывающее заголовок
      </motion.p>

      {/* 4 button more right 1 */}
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="absolute bg-primary text-primary-foreground rounded-full font-['Glametrix'] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        style={{
          left: '64.79%',
          top: '53.88%',
          width: '10.07%',
          height: '3.72%',
          fontSize: FONT_SIZES.body
        }}
      >
        Подробнее
        <span>›</span>
      </motion.button>

      {/* Right object 2 - 4 image 3 */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute"
        style={{
          left: '50.69%',
          top: '60.94%',
          width: '40.97%',
          height: '25.72%'
        }}
      >
        <img 
          src={photoshootImage} 
          alt="Фотосессия в японском тематике" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* small title right 2 */}
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '50.74%',
          top: '88.53%',
          height: '1.46%',
          fontSize: FONT_SIZES.subheading
        }}
      >
        Фотосессия в японском тематике
      </motion.h3>

      {/* small subtitle right 2 */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '50.74%',
          top: '93.51%',
          width: '13.06%',
          height: '1.52%',
          fontSize: FONT_SIZES.body
        }}
      >
        Описание, чуть подробнее
      </motion.p>

      {/* 4 button more right 2 */}
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bg-primary text-primary-foreground rounded-full font-['Glametrix'] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        style={{
          left: '81.60%',
          top: '92%',
          width: '10.07%',
          height: '3.72%',
          fontSize: FONT_SIZES.body
        }}
      >
        Подробнее
        <span>›</span>
      </motion.button>
    </section>
  );
};

export default DayPassJapan;
