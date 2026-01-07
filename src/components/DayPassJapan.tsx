import React from 'react';
import { motion } from 'framer-motion';
import forestImage from '@/assets/4-image-1.png';
import gardenImage from '@/assets/4-image-2.png';
import photoshootImage from '@/assets/4-image-3.png';
import calligraphyImage from '@/assets/4-central-image.png';

const DayPassJapan: React.FC = () => {
  return (
    <section 
      className="relative w-full bg-white overflow-hidden"
      style={{ 
        aspectRatio: '1440 / 992'
      }}
    >
      {/* 4 line 1 - horizontal top */}
      <div 
        className="absolute bg-primary z-[20]"
        style={{
          left: '56.11%',
          top: '0%',
          width: '25.14%',
          height: '1px'
        }}
      />

      {/* 4 line 2 - vertical */}
      <div 
        className="absolute bg-primary z-[20]"
        style={{
          left: '56.08%',
          top: '0.05%',
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
        className="absolute font-['UA-brand'] font-bold text-primary uppercase leading-[0.95]"
        style={{
          left: '8.63%',
          top: '3.79%',
          width: '30.03%',
          height: '6.00%',
          fontSize: 'clamp(36px, 3.45vw, 50px)'
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
        className="absolute font-['Glametrix'] text-foreground leading-relaxed"
        style={{
          left: '7.00%',
          top: '13.08%',
          width: '26.54%',
          height: '3.83%',
          fontSize: 'clamp(12px, 1.1vw, 16px)'
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
        className="absolute font-['Glametrix'] text-foreground leading-relaxed text-right"
        style={{
          left: '64.84%',
          top: '3.80%',
          width: '26.54%',
          height: '3.83%',
          fontSize: 'clamp(12px, 1.1vw, 16px)'
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
        className="absolute font-['UA-brand'] font-bold text-primary uppercase leading-[0.95] text-right"
        style={{
          left: '63.63%',
          top: '11.44%',
          width: '28.05%',
          height: '5.95%',
          fontSize: 'clamp(36px, 3.43vw, 50px)'
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
          left: '0.83%',
          top: '21.44%',
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
          left: '0.88%',
          top: '80.76%',
          width: '11.93%',
          height: '2.05%',
          fontSize: 'clamp(14px, 1.18vw, 17px)'
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
        className="absolute font-['Glametrix'] text-foreground leading-relaxed"
        style={{
          left: '0.87%',
          top: '84.75%',
          width: '21.02%',
          height: '3.83%',
          fontSize: 'clamp(12px, 1.1vw, 16px)'
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
          top: '84.11%',
          width: '10.07%',
          height: '3.72%',
          fontSize: 'clamp(10px, 0.87vw, 13px)'
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
          top: '27.08%',
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
          top: '27.78%',
          width: '26.88%',
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
          top: '45.75%',
          width: '8.26%',
          height: '1.90%',
          fontSize: 'clamp(12px, 1.1vw, 16px)'
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
          top: '48.87%',
          width: '26.34%',
          height: '1.52%',
          fontSize: 'clamp(10px, 0.87vw, 13px)'
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
          top: '51.89%',
          width: '10.07%',
          height: '3.72%',
          fontSize: 'clamp(10px, 0.87vw, 13px)'
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
          top: '63.94%',
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
          left: '50.67%',
          top: '92.58%',
          width: '23.55%',
          height: '1.46%',
          fontSize: 'clamp(10px, 0.84vw, 12px)'
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
          top: '95.51%',
          width: '13.06%',
          height: '1.52%',
          fontSize: 'clamp(10px, 0.87vw, 13px)'
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
          left: '81.77%',
          top: '96.27%',
          width: '10.07%',
          height: '3.72%',
          fontSize: 'clamp(10px, 0.87vw, 13px)'
        }}
      >
        Подробнее
        <span>›</span>
      </motion.button>
    </section>
  );
};

export default DayPassJapan;
