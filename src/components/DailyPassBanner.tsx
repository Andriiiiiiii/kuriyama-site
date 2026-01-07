import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '@/assets/6-background.png';

const DailyPassBanner: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div 
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Vertical lines */}
        <div className="absolute left-[30%] top-0 bottom-0 w-[2px] bg-primary hidden md:block" />
        <div className="absolute right-[30%] top-0 bottom-0 w-[2px] bg-primary hidden md:block" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center justify-between">
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-ua-brand text-white text-[36px] md:text-[56px] lg:text-[80px] font-bold uppercase leading-[0.95]">
                  DAILY PASS.<br />
                  ЯПОНИЯ
                </h2>
              </motion.div>

              {/* Center content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden md:block text-center"
              >
                <p className="font-glametrix text-white text-base md:text-lg lg:text-[22px] max-w-[300px]">
                  Пропуск на посещение на день со всеми активностями
                </p>
              </motion.div>

              {/* Right - Button */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                {/* Decorative circle border */}
                <div className="absolute -inset-3 md:-inset-4 rounded-full border-2 border-primary" />
                <button className="relative w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <span className="font-glametrix text-white text-sm md:text-base lg:text-[22px] text-center px-2">
                    Выбрать тариф
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line extending down */}
      <div className="flex justify-center">
        <div className="w-[2px] h-[40px] md:h-[60px] bg-primary" />
      </div>
    </section>
  );
};

export default DailyPassBanner;
