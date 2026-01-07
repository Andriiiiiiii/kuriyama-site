import React from 'react';
import { motion } from 'framer-motion';
import woodImage from '@/assets/7-right-image.png';
import number1 from '@/assets/number-1.svg';
import number2 from '@/assets/number-2.svg';
import number3 from '@/assets/number-3.svg';

const VisitProcess: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-visible">
      <div className="max-w-[1440px] mx-auto">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="font-ua-brand text-primary text-[48px] md:text-[64px] lg:text-[80px] font-bold uppercase leading-[0.95] mb-12 md:mb-16"
        >
          ПРОЦЕСС<br />
          ПОСЕЩЕНИЯ
        </motion.h2>

        {/* Steps container */}
        <div className="flex flex-col lg:flex-row items-start">
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 pb-8 lg:pb-0"
          >
            <div className="flex">
              {/* Line on left */}
              <div className="w-[2px] bg-primary mr-6 lg:mr-8 self-stretch" />
              <div className="pr-6 lg:pr-12">
                <img 
                  src={number1} 
                  alt="1" 
                  className="h-[60px] md:h-[70px] lg:h-[77px] w-auto mb-4"
                />
                <h3 className="font-glametrix font-bold text-[#2E261D] text-xl md:text-2xl lg:text-[32px] mb-2">
                  Выберите тариф
                </h3>
                <p className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px] max-w-[240px]">
                  Описание, подробнее раскрывающее заголовок
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 py-8 lg:py-0"
          >
            <div className="flex">
              {/* Line on left */}
              <div className="w-[2px] bg-primary mr-6 lg:mr-8 self-stretch" />
              <div className="pr-6 lg:pr-12">
                <img 
                  src={number2} 
                  alt="2" 
                  className="h-[60px] md:h-[70px] lg:h-[78px] w-auto mb-4"
                />
                <h3 className="font-glametrix font-bold text-[#2E261D] text-xl md:text-2xl lg:text-[32px] mb-2">
                  Назначьте дату
                </h3>
                <p className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px] max-w-[240px]">
                  Описание, подробнее раскрывающее заголовок
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 3 - on wood background */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 pt-8 lg:pt-0 relative"
          >
            {/* Content - aligned with other numbers */}
            <div className="relative z-10 pl-6 lg:pl-8">
              <img 
                src={number3} 
                alt="3" 
                className="h-[60px] md:h-[70px] lg:h-[77px] w-auto mb-4"
              />
              <h3 className="font-glametrix font-bold text-[#2E261D] text-xl md:text-2xl lg:text-[32px] mb-2">
                Мы вас встретим
              </h3>
              <p className="font-glametrix text-[#2E261D] text-base md:text-lg lg:text-[22px] max-w-[240px]">
                Описание, подробнее раскрывающее заголовок
              </p>
            </div>
            
            {/* Wood image positioned behind and extending below */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-32 md:-top-40 lg:-top-48 left-0 w-full max-w-[320px] lg:max-w-[380px] -z-0"
            >
              <img 
                src={woodImage} 
                alt="" 
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitProcess;
