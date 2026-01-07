import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '@/assets/11-background.png';

const DailyPass: React.FC = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[354px] overflow-hidden">
      {/* Background image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-16 py-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left side - Title */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-ua-brand text-white text-4xl md:text-6xl lg:text-[80px] font-bold uppercase leading-tight">
            daily pass.
            <br />
            пасека
          </h1>
        </motion.div>

        {/* Right side - Button and description */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mt-6 md:mt-0"
        >
          {/* Circular button */}
          <button 
            className="w-[120px] h-[120px] md:w-[179px] md:h-[179px] rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 cursor-pointer"
            aria-label="Выбрать тариф"
          />
          
          {/* Button label */}
          <button className="font-glametrix text-white text-lg md:text-[22px] font-medium mt-4 md:mt-8 hover:text-white/80 transition-colors">
            Выбрать тариф
          </button>

          {/* Description */}
          <p className="font-glametrix text-white text-base md:text-[22px] font-medium mt-4 max-w-[239px] text-center">
            Пропуск на посещение на день со всеми активностями
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DailyPass;
